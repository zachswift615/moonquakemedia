/**
 * guide-export.js — Client-side guide export (DOCX, PDF, EPUB)
 *
 * Shared DOM parser produces a content tree.
 * Three formatters convert it to DOCX, PDF, and EPUB respectively.
 * Relies on CDN-loaded: window.docx, window.jspdf, window.JSZip
 */

(function () {
  'use strict';

  // ========== Version Helper ==========

  function getGuideVersion() {
    var main = document.getElementById('main-content');
    return main && main.dataset.guideVersion ? main.dataset.guideVersion : '';
  }

  function guideTitle() {
    var v = getGuideVersion();
    return v ? 'Listen2 User Guide (' + v + ')' : 'Listen2 User Guide';
  }

  function guideFilename(ext) {
    var v = getGuideVersion();
    return v ? 'Listen2-User-Guide-' + v + '.' + ext : 'Listen2-User-Guide.' + ext;
  }

  // ========== DOM Parser ==========

  function parseGuideContent() {
    var main = document.querySelector('main');
    if (!main) return [];

    var nodes = [];
    var children = Array.from(main.children);

    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      // Skip the TOC section
      if (child.classList.contains('content-section')) {
        var h2 = child.querySelector('h2');
        if (h2 && h2.textContent.trim() === 'Table of Contents') continue;
      }
      parseElement(child, nodes);
    }

    return nodes;
  }

  function parseElement(el, nodes) {
    if (el.nodeType !== Node.ELEMENT_NODE) return;

    var tag = el.tagName.toLowerCase();

    // Content sections — recurse into children
    if (el.classList.contains('content-section')) {
      Array.from(el.children).forEach(function (child) {
        parseElement(child, nodes);
      });
      return;
    }

    // Boxes
    if (el.classList.contains('tip-box')) {
      nodes.push(parseBox(el, 'TIP'));
      return;
    }
    if (el.classList.contains('feature-box')) {
      nodes.push(parseBox(el, 'NOTE'));
      return;
    }
    if (el.classList.contains('warning-box')) {
      nodes.push(parseBox(el, 'WARNING'));
      return;
    }

    // Headings
    if (tag === 'h2') {
      nodes.push({ type: 'heading', level: 2, runs: [{ text: extractText(el) }] });
      return;
    }
    if (tag === 'h3') {
      nodes.push({ type: 'heading', level: 3, runs: [{ text: extractText(el) }] });
      return;
    }
    if (tag === 'h4') {
      nodes.push({ type: 'heading', level: 4, runs: [{ text: extractText(el) }] });
      return;
    }

    // Paragraphs
    if (tag === 'p') {
      var runs = parseInlineRuns(el);
      if (runs.length > 0) {
        nodes.push({ type: 'paragraph', runs: runs });
      }
      return;
    }

    // Lists
    if (tag === 'ul') {
      var items = parseListItems(el);
      if (items.length > 0) {
        nodes.push({ type: 'list', items: items });
      }
      return;
    }
    if (tag === 'ol') {
      var olItems = parseListItems(el);
      if (olItems.length > 0) {
        nodes.push({ type: 'ordered-list', items: olItems });
      }
      return;
    }

    // Generic divs — recurse
    if (tag === 'div') {
      Array.from(el.children).forEach(function (child) {
        parseElement(child, nodes);
      });
      return;
    }
  }

  function parseBox(el, boxType) {
    var boxChildren = [];
    var title = '';

    Array.from(el.children).forEach(function (child) {
      var tag = child.tagName.toLowerCase();

      // First heading-like element becomes the title
      if ((tag === 'h4' || tag === 'h3') && !title) {
        title = extractText(child);
        return;
      }

      if (tag === 'p') {
        // If no title yet, check for a leading <strong>
        if (!title) {
          var strong = child.querySelector(':scope > strong:first-child');
          if (strong) {
            title = extractText(strong);
          }
        }
        var runs = parseInlineRuns(child);
        if (runs.length > 0) {
          boxChildren.push({ type: 'paragraph', runs: runs });
        }
      } else if (tag === 'ul') {
        boxChildren.push({ type: 'list', items: parseListItems(child) });
      } else if (tag === 'ol') {
        boxChildren.push({ type: 'ordered-list', items: parseListItems(child) });
      }
    });

    if (!title) title = boxType;

    return { type: 'box', boxType: boxType, title: title, children: boxChildren };
  }

  function parseListItems(ul) {
    return Array.from(ul.querySelectorAll(':scope > li')).map(function (li) {
      return parseInlineRuns(li);
    });
  }

  function parseInlineRuns(el) {
    var runs = [];
    walkInline(el, runs, false, false);
    return runs.filter(function (r) { return r.text.length > 0; });
  }

  function walkInline(node, runs, bold, italic) {
    Array.from(node.childNodes).forEach(function (child) {
      if (child.nodeType === Node.TEXT_NODE) {
        var text = child.textContent;
        if (text.trim()) {
          runs.push({ text: text, bold: bold, italic: italic });
        }
        return;
      }
      if (child.nodeType !== Node.ELEMENT_NODE) return;

      var tag = child.tagName.toLowerCase();

      // Skip SVG icons
      if (tag === 'svg') return;

      // Skip decorative icon elements
      if (child.classList.contains('inline-icon') ||
          child.classList.contains('inline-icon-sm') ||
          child.classList.contains('lucide-icon')) {
        return;
      }

      // Button labels → bold text
      if (child.classList.contains('button-label')) {
        runs.push({ text: extractText(child), bold: true, italic: false });
        return;
      }

      if (tag === 'strong' || tag === 'b') {
        walkInline(child, runs, true, italic);
      } else if (tag === 'em' || tag === 'i') {
        walkInline(child, runs, bold, true);
      } else if (tag === 'br') {
        runs.push({ text: '\n', bold: false, italic: false });
      } else {
        // <a>, <span>, etc. — recurse preserving formatting
        walkInline(child, runs, bold, italic);
      }
    });
  }

  function extractText(el) {
    var text = '';
    Array.from(el.childNodes).forEach(function (child) {
      if (child.nodeType === Node.TEXT_NODE) {
        text += child.textContent;
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        if (child.tagName.toLowerCase() === 'svg') return;
        if (child.classList.contains('inline-icon') ||
            child.classList.contains('inline-icon-sm')) return;
        text += extractText(child);
      }
    });
    return text.trim();
  }

  // ========== DOCX Formatter ==========

  function exportDocx(content) {
    var D = window.docx;
    var Document = D.Document;
    var Packer = D.Packer;
    var Paragraph = D.Paragraph;
    var TextRun = D.TextRun;
    var HeadingLevel = D.HeadingLevel;
    var AlignmentType = D.AlignmentType;
    var LevelFormat = D.LevelFormat;
    var convertInchesToTwip = D.convertInchesToTwip;

    var numbering = {
      config: [
        {
          reference: 'bullets',
          levels: [{
            level: 0,
            format: LevelFormat.BULLET,
            text: '\u2022',
            alignment: AlignmentType.LEFT,
            style: {
              paragraph: {
                indent: {
                  left: convertInchesToTwip(0.5),
                  hanging: convertInchesToTwip(0.25),
                },
              },
            },
          }],
        },
        {
          reference: 'numbers',
          levels: [{
            level: 0,
            format: LevelFormat.DECIMAL,
            text: '%1.',
            alignment: AlignmentType.LEFT,
            style: {
              paragraph: {
                indent: {
                  left: convertInchesToTwip(0.5),
                  hanging: convertInchesToTwip(0.25),
                },
              },
            },
          }],
        },
      ],
    };

    var children = [];

    // Title
    children.push(new Paragraph({
      children: [new TextRun({ text: guideTitle(), bold: true, size: 48, font: 'Arial' })],
      heading: HeadingLevel.TITLE,
      spacing: { after: 400 },
    }));

    // Convert each content node
    content.forEach(function (node) {
      docxNode(node, children);
    });

    function docxNode(node, out) {
      switch (node.type) {
        case 'heading': {
          var level = node.level === 2 ? HeadingLevel.HEADING_2
            : node.level === 3 ? HeadingLevel.HEADING_3
            : HeadingLevel.HEADING_4;
          out.push(new Paragraph({
            children: (node.runs || []).map(function (r) {
              return new TextRun({ text: r.text, bold: true, font: 'Arial' });
            }),
            heading: level,
          }));
          break;
        }

        case 'paragraph': {
          out.push(new Paragraph({
            children: (node.runs || []).map(function (r) {
              return new TextRun({
                text: r.text,
                bold: r.bold || false,
                italics: r.italic || false,
                font: 'Arial',
                size: 24,
              });
            }),
            spacing: { after: 200 },
          }));
          break;
        }

        case 'list': {
          (node.items || []).forEach(function (item) {
            out.push(new Paragraph({
              children: item.map(function (r) {
                return new TextRun({
                  text: r.text,
                  bold: r.bold || false,
                  italics: r.italic || false,
                  font: 'Arial',
                  size: 24,
                });
              }),
              numbering: { reference: 'bullets', level: 0 },
              spacing: { after: 100 },
            }));
          });
          break;
        }

        case 'ordered-list': {
          (node.items || []).forEach(function (item) {
            out.push(new Paragraph({
              children: item.map(function (r) {
                return new TextRun({
                  text: r.text,
                  bold: r.bold || false,
                  italics: r.italic || false,
                  font: 'Arial',
                  size: 24,
                });
              }),
              numbering: { reference: 'numbers', level: 0 },
              spacing: { after: 100 },
            }));
          });
          break;
        }

        case 'box': {
          // Opening marker
          out.push(new Paragraph({
            children: [new TextRun({
              text: '[' + node.boxType + ': ' + node.title + ']',
              italics: true,
              color: '888888',
              font: 'Arial',
              size: 24,
            })],
            spacing: { before: 200 },
          }));

          (node.children || []).forEach(function (child) {
            docxNode(child, out);
          });

          // Closing marker
          out.push(new Paragraph({
            children: [new TextRun({
              text: '[/' + node.boxType + ']',
              italics: true,
              color: '888888',
              font: 'Arial',
              size: 24,
            })],
            spacing: { after: 200 },
          }));
          break;
        }
      }
    }

    var doc = new Document({
      numbering: numbering,
      styles: {
        default: {
          document: {
            run: { font: 'Arial', size: 24 },
          },
        },
        paragraphStyles: [
          {
            id: 'Heading2',
            name: 'Heading 2',
            basedOn: 'Normal',
            next: 'Normal',
            run: { font: 'Arial', size: 36, bold: true, color: '1a73e8' },
            paragraph: { spacing: { before: 400, after: 200 }, outlineLevel: 1 },
          },
          {
            id: 'Heading3',
            name: 'Heading 3',
            basedOn: 'Normal',
            next: 'Normal',
            run: { font: 'Arial', size: 30, bold: true, color: '333333' },
            paragraph: { spacing: { before: 300, after: 150 }, outlineLevel: 2 },
          },
          {
            id: 'Heading4',
            name: 'Heading 4',
            basedOn: 'Normal',
            next: 'Normal',
            run: { font: 'Arial', size: 26, bold: true, color: '666666' },
            paragraph: { spacing: { before: 200, after: 100 }, outlineLevel: 3 },
          },
        ],
      },
      sections: [{
        properties: {
          page: {
            size: {
              width: convertInchesToTwip(8.5),
              height: convertInchesToTwip(11),
            },
            margin: {
              top: convertInchesToTwip(1),
              bottom: convertInchesToTwip(1),
              left: convertInchesToTwip(1),
              right: convertInchesToTwip(1),
            },
          },
        },
        children: children,
      }],
    });

    return Packer.toBlob(doc).then(function (blob) {
      downloadBlob(blob, guideFilename('docx'));
    });
  }

  // ========== PDF Formatter ==========

  function exportPdf(content) {
    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF({ unit: 'in', format: 'letter' });

    var PAGE_W = 8.5;
    var PAGE_H = 11;
    var MARGIN = 1;
    var CONTENT_W = PAGE_W - 2 * MARGIN;
    var y = MARGIN;

    function checkPageBreak(needed) {
      if (y + needed > PAGE_H - MARGIN) {
        doc.addPage();
        y = MARGIN;
      }
    }

    function writeText(text, x, maxW, fontSize, fontStyle, lineHeight) {
      doc.setFontSize(fontSize);
      doc.setFont('helvetica', fontStyle || 'normal');
      var lines = doc.splitTextToSize(text, maxW);
      for (var i = 0; i < lines.length; i++) {
        checkPageBreak(lineHeight);
        doc.text(lines[i], x, y);
        y += lineHeight;
      }
    }

    function writeRuns(runs, x, maxW, fontSize, lineHeight) {
      // Concatenate text for line-wrapping, apply dominant style
      var fullText = runs.map(function (r) { return r.text; }).join('');
      var allBold = runs.length > 0 && runs.every(function (r) { return r.bold; });
      var allItalic = runs.length > 0 && runs.every(function (r) { return r.italic; });
      var style = allBold && allItalic ? 'bolditalic'
        : allBold ? 'bold'
        : allItalic ? 'italic'
        : 'normal';
      writeText(fullText, x, maxW, fontSize, style, lineHeight);
    }

    function renderNode(node, x, maxW) {
      switch (node.type) {
        case 'heading': {
          var fontSize = node.level === 2 ? 20 : node.level === 3 ? 16 : 14;
          var lh = fontSize / 72 * 1.4;
          checkPageBreak(lh + 0.2);
          y += 0.15;
          if (node.level === 2) {
            doc.setTextColor(26, 115, 232);
          } else {
            doc.setTextColor(51, 51, 51);
          }
          var text = (node.runs || []).map(function (r) { return r.text; }).join('');
          writeText(text, x, maxW, fontSize, 'bold', lh);
          doc.setTextColor(0, 0, 0);
          y += 0.1;
          break;
        }

        case 'paragraph': {
          writeRuns(node.runs || [], x, maxW, 12, 0.22);
          y += 0.08;
          break;
        }

        case 'list': {
          (node.items || []).forEach(function (item) {
            var text = '\u2022  ' + item.map(function (r) { return r.text; }).join('');
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(12);
            var lines = doc.splitTextToSize(text, maxW - 0.3);
            for (var i = 0; i < lines.length; i++) {
              checkPageBreak(0.22);
              doc.text(lines[i], x + (i === 0 ? 0 : 0.3), y);
              y += 0.22;
            }
          });
          y += 0.08;
          break;
        }

        case 'ordered-list': {
          var num = 1;
          (node.items || []).forEach(function (item) {
            var text = num + '.  ' + item.map(function (r) { return r.text; }).join('');
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(12);
            var lines = doc.splitTextToSize(text, maxW - 0.3);
            for (var i = 0; i < lines.length; i++) {
              checkPageBreak(0.22);
              doc.text(lines[i], x + (i === 0 ? 0 : 0.3), y);
              y += 0.22;
            }
            num++;
          });
          y += 0.08;
          break;
        }

        case 'box': {
          // Measure box height by collecting all text lines
          var boxPad = 0.15;
          var boxInnerW = maxW - 0.35 - boxPad; // left border + padding
          var boxLines = [];

          // Title line
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(11);
          var titleLines = doc.splitTextToSize(node.boxType + ': ' + node.title, boxInnerW);
          titleLines.forEach(function (l) { boxLines.push({ text: l, style: 'bold', size: 11 }); });

          // Body content — flatten to text lines
          (node.children || []).forEach(function (child) {
            var childText = '';
            if (child.type === 'paragraph') {
              childText = (child.runs || []).map(function (r) { return r.text; }).join('');
            } else if (child.type === 'list') {
              (child.items || []).forEach(function (item) {
                var t = '\u2022  ' + item.map(function (r) { return r.text; }).join('');
                doc.setFont('helvetica', 'normal');
                doc.setFontSize(11);
                doc.splitTextToSize(t, boxInnerW).forEach(function (l) {
                  boxLines.push({ text: l, style: 'normal', size: 11 });
                });
              });
              return;
            } else if (child.type === 'ordered-list') {
              var n = 1;
              (child.items || []).forEach(function (item) {
                var t = n + '.  ' + item.map(function (r) { return r.text; }).join('');
                doc.setFont('helvetica', 'normal');
                doc.setFontSize(11);
                doc.splitTextToSize(t, boxInnerW).forEach(function (l) {
                  boxLines.push({ text: l, style: 'normal', size: 11 });
                });
                n++;
              });
              return;
            }
            if (childText) {
              doc.setFont('helvetica', 'normal');
              doc.setFontSize(11);
              doc.splitTextToSize(childText, boxInnerW).forEach(function (l) {
                boxLines.push({ text: l, style: 'normal', size: 11 });
              });
            }
          });

          var lineH = 0.20;
          var boxH = boxLines.length * lineH + 2 * boxPad;

          // Page break if box doesn't fit — but allow split for very tall boxes
          checkPageBreak(Math.min(boxH, 1.5));

          // Colors by box type
          var borderColor, bgColor;
          if (node.boxType === 'TIP') {
            borderColor = [245, 158, 11]; bgColor = [255, 251, 235];
          } else if (node.boxType === 'WARNING') {
            borderColor = [239, 68, 68]; bgColor = [254, 242, 242];
          } else {
            borderColor = [59, 130, 246]; bgColor = [239, 246, 255];
          }

          var boxTop = y - 0.12;

          // Draw background
          doc.setFillColor(bgColor[0], bgColor[1], bgColor[2]);
          doc.rect(x, boxTop, maxW, boxH, 'F');

          // Draw left border
          doc.setFillColor(borderColor[0], borderColor[1], borderColor[2]);
          doc.rect(x, boxTop, 0.05, boxH, 'F');

          // Render text lines
          var textX = x + 0.2;
          y = boxTop + boxPad;
          boxLines.forEach(function (line, i) {
            doc.setFont('helvetica', line.style);
            doc.setFontSize(line.size);
            if (i === 0) {
              // Title in the border color
              doc.setTextColor(borderColor[0], borderColor[1], borderColor[2]);
            } else {
              doc.setTextColor(51, 51, 51);
            }
            y += lineH;
            doc.text(line.text, textX, y);
          });

          doc.setTextColor(0, 0, 0);
          y = boxTop + boxH + 0.25;
          break;
        }
      }
    }

    // Build the PDF
    return loadImage('/assets/listen2/guide-cover.png')
      .then(function (dataUrl) {
        doc.addImage(dataUrl, 'PNG', 0, 0, PAGE_W, PAGE_H);
        doc.addPage();
        y = MARGIN;
      })
      .catch(function () {
        // No cover image — render a text title page
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(36);
        doc.text(guideTitle(), PAGE_W / 2, PAGE_H / 2 - 0.5, { align: 'center' });
        doc.setFontSize(14);
        doc.setFont('helvetica', 'normal');
        doc.text('Your Complete Guide to Personal Audiobooks', PAGE_W / 2, PAGE_H / 2 + 0.3, { align: 'center' });
        doc.addPage();
        y = MARGIN;
      })
      .then(function () {
        content.forEach(function (node) {
          renderNode(node, MARGIN, CONTENT_W);
        });
        doc.save(guideFilename('pdf'));
      });
  }

  function loadImage(src) {
    return new Promise(function (resolve, reject) {
      var img = new Image();
      img.onload = function () {
        var canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      };
      img.onerror = reject;
      img.crossOrigin = 'anonymous';
      img.src = src;
    });
  }

  // ========== EPUB Formatter ==========

  function exportEpub(content) {
    var JSZip = window.JSZip;
    var zip = new JSZip();

    // Split content into chapters on h2 headings
    var chapters = [];
    var current = { title: 'Introduction', nodes: [] };

    content.forEach(function (node) {
      if (node.type === 'heading' && node.level === 2) {
        if (current.nodes.length > 0) {
          chapters.push(current);
        }
        current = {
          title: (node.runs || []).map(function (r) { return r.text; }).join(''),
          nodes: [],
        };
      }
      current.nodes.push(node);
    });
    if (current.nodes.length > 0) {
      chapters.push(current);
    }

    // mimetype — must be first entry, stored uncompressed
    zip.file('mimetype', 'application/epub+zip', { compression: 'STORE' });

    // META-INF/container.xml
    zip.file('META-INF/container.xml',
      '<?xml version="1.0" encoding="UTF-8"?>\n' +
      '<container xmlns="urn:oasis:names:tc:opendocument:xmlns:container" version="1.0">\n' +
      '  <rootfiles>\n' +
      '    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>\n' +
      '  </rootfiles>\n' +
      '</container>');

    // Try to load cover image
    return fetchCoverImage()
      .then(function (coverData) {
        if (coverData) {
          zip.file('OEBPS/images/cover.png', coverData);
        }
        return coverData != null;
      })
      .catch(function () { return false; })
      .then(function (hasCover) {
        buildEpubArchive(zip, chapters, hasCover);
        return zip.generateAsync({ type: 'blob', mimeType: 'application/epub+zip' });
      })
      .then(function (blob) {
        downloadBlob(blob, guideFilename('epub'));
      });
  }

  function fetchCoverImage() {
    return fetch('/assets/listen2/guide-cover-tall.png')
      .then(function (resp) {
        if (!resp.ok) return null;
        return resp.arrayBuffer();
      });
  }

  function buildEpubArchive(zip, chapters, hasCover) {
    var manifestItems = '';
    var spineItems = '';

    // Cover page
    if (hasCover) {
      manifestItems +=
        '    <item id="cover" href="cover.xhtml" media-type="application/xhtml+xml"/>\n' +
        '    <item id="cover-image" href="images/cover.png" media-type="image/png" properties="cover-image"/>\n';
      spineItems += '    <itemref idref="cover"/>\n';

      zip.file('OEBPS/cover.xhtml',
        '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<!DOCTYPE html>\n' +
        '<html xmlns="http://www.w3.org/1999/xhtml">\n' +
        '<head><title>Cover</title></head>\n' +
        '<body style="margin:0;padding:0;text-align:center">\n' +
        '  <img src="images/cover.png" alt="' + guideTitle() + '" style="max-width:100%;max-height:100vh"/>\n' +
        '</body>\n' +
        '</html>');
    }

    // Nav + stylesheet
    manifestItems +=
      '    <item id="nav" href="toc.xhtml" media-type="application/xhtml+xml" properties="nav"/>\n' +
      '    <item id="style" href="style.css" media-type="text/css"/>\n';

    // Chapter manifest + spine entries
    chapters.forEach(function (_ch, i) {
      var id = 'chapter-' + (i + 1);
      manifestItems += '    <item id="' + id + '" href="' + id + '.xhtml" media-type="application/xhtml+xml"/>\n';
      spineItems += '    <itemref idref="' + id + '"/>\n';
    });

    // content.opf
    var now = new Date().toISOString().split('.')[0] + 'Z';
    zip.file('OEBPS/content.opf',
      '<?xml version="1.0" encoding="UTF-8"?>\n' +
      '<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="uid">\n' +
      '  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">\n' +
      '    <dc:identifier id="uid">listen2-user-guide</dc:identifier>\n' +
      '    <dc:title>' + guideTitle() + '</dc:title>\n' +
      '    <dc:language>en</dc:language>\n' +
      '    <meta property="dcterms:modified">' + now + '</meta>\n' +
      '  </metadata>\n' +
      '  <manifest>\n' +
      manifestItems +
      '  </manifest>\n' +
      '  <spine>\n' +
      spineItems +
      '  </spine>\n' +
      '</package>');

    // Navigation document (toc.xhtml)
    var tocItems = '';
    chapters.forEach(function (ch, i) {
      tocItems += '      <li><a href="chapter-' + (i + 1) + '.xhtml">' + escapeXml(ch.title) + '</a></li>\n';
    });

    zip.file('OEBPS/toc.xhtml',
      '<?xml version="1.0" encoding="UTF-8"?>\n' +
      '<!DOCTYPE html>\n' +
      '<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">\n' +
      '<head><title>Table of Contents</title><link rel="stylesheet" href="style.css"/></head>\n' +
      '<body>\n' +
      '  <nav epub:type="toc">\n' +
      '    <h1>Table of Contents</h1>\n' +
      '    <ol>\n' +
      tocItems +
      '    </ol>\n' +
      '  </nav>\n' +
      '</body>\n' +
      '</html>');

    // Stylesheet
    zip.file('OEBPS/style.css',
      'body { font-family: Georgia, serif; line-height: 1.6; margin: 1em; color: #333; }\n' +
      'h2 { color: #1a73e8; border-bottom: 1px solid #ddd; padding-bottom: 0.3em; margin-top: 1.5em; }\n' +
      'h3 { color: #444; margin-top: 1.2em; }\n' +
      'h4 { color: #666; margin-top: 1em; }\n' +
      'p { margin: 0.8em 0; }\n' +
      'ul, ol { margin: 0.8em 0; padding-left: 1.5em; }\n' +
      'li { margin: 0.3em 0; }\n' +
      '.box { border-left: 3px solid #888; padding: 0.8em 1em; margin: 1em 0; }\n' +
      '.box-tip { border-color: #f59e0b; background: #fffbeb; }\n' +
      '.box-note { border-color: #3b82f6; background: #eff6ff; }\n' +
      '.box-warning { border-color: #ef4444; background: #fef2f2; }\n' +
      '.box-label { font-weight: bold; font-style: italic; color: #888; margin-bottom: 0.5em; }\n');

    // Chapter XHTML files
    chapters.forEach(function (ch, i) {
      var body = '';
      ch.nodes.forEach(function (node) {
        body += renderEpubNode(node);
      });

      zip.file('OEBPS/chapter-' + (i + 1) + '.xhtml',
        '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<!DOCTYPE html>\n' +
        '<html xmlns="http://www.w3.org/1999/xhtml">\n' +
        '<head>\n' +
        '  <title>' + escapeXml(ch.title) + '</title>\n' +
        '  <link rel="stylesheet" href="style.css"/>\n' +
        '</head>\n' +
        '<body>\n' +
        body +
        '</body>\n' +
        '</html>');
    });
  }

  function renderEpubNode(node) {
    switch (node.type) {
      case 'heading': {
        var tag = 'h' + node.level;
        return '<' + tag + '>' + runsToXhtml(node.runs || []) + '</' + tag + '>\n';
      }

      case 'paragraph':
        return '<p>' + runsToXhtml(node.runs || []) + '</p>\n';

      case 'list':
        return '<ul>\n' + (node.items || []).map(function (item) {
          return '  <li>' + runsToXhtml(item) + '</li>\n';
        }).join('') + '</ul>\n';

      case 'ordered-list':
        return '<ol>\n' + (node.items || []).map(function (item) {
          return '  <li>' + runsToXhtml(item) + '</li>\n';
        }).join('') + '</ol>\n';

      case 'box': {
        var cls = node.boxType === 'TIP' ? 'box box-tip'
          : node.boxType === 'WARNING' ? 'box box-warning'
          : 'box box-note';
        var inner = '<p class="box-label">' + escapeXml(node.boxType) + ': ' + escapeXml(node.title) + '</p>\n';
        (node.children || []).forEach(function (child) {
          inner += renderEpubNode(child);
        });
        return '<div class="' + cls + '">\n' + inner + '</div>\n';
      }

      default:
        return '';
    }
  }

  function runsToXhtml(runs) {
    return runs.map(function (r) {
      var text = escapeXml(r.text);
      if (r.bold) text = '<strong>' + text + '</strong>';
      if (r.italic) text = '<em>' + text + '</em>';
      return text;
    }).join('');
  }

  function escapeXml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // ========== Download Helper ==========

  function downloadBlob(blob, filename) {
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // ========== Dropdown UI ==========

  function initDownloadUI() {
    var btn = document.getElementById('guide-download-btn');
    var menu = document.getElementById('guide-download-menu');
    if (!btn || !menu) return;

    var items = menu.querySelectorAll('[role="menuitem"]');

    // Toggle dropdown
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      menu.hidden = expanded;
      if (!expanded && items.length > 0) {
        items[0].focus();
      }
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!btn.contains(e.target) && !menu.contains(e.target)) {
        btn.setAttribute('aria-expanded', 'false');
        menu.hidden = true;
      }
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !menu.hidden) {
        btn.setAttribute('aria-expanded', 'false');
        menu.hidden = true;
        btn.focus();
      }
    });

    // Arrow key navigation within menu
    menu.addEventListener('keydown', function (e) {
      var current = document.activeElement;
      var idx = Array.from(items).indexOf(current);
      if (idx < 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        items[(idx + 1) % items.length].focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        items[(idx - 1 + items.length) % items.length].focus();
      }
    });

    // Menu item activation
    Array.from(items).forEach(function (item) {
      item.addEventListener('click', function () {
        handleExport(item.dataset.format, btn, menu);
      });
      item.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleExport(item.dataset.format, btn, menu);
        }
      });
    });
  }

  function handleExport(format, btn, menu) {
    btn.setAttribute('aria-expanded', 'false');
    menu.hidden = true;

    var originalHTML = btn.innerHTML;
    btn.innerHTML = 'Generating\u2026';
    btn.disabled = true;

    var content = parseGuideContent();
    var promise;

    switch (format) {
      case 'docx': promise = exportDocx(content); break;
      case 'pdf':  promise = exportPdf(content);  break;
      case 'epub': promise = exportEpub(content);  break;
      default:     promise = Promise.resolve();
    }

    promise
      .catch(function (err) {
        console.error('Export failed:', err);
        alert('Export failed. Please try again.');
      })
      .then(function () {
        btn.innerHTML = originalHTML;
        btn.disabled = false;
      });
  }

  // Init when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDownloadUI);
  } else {
    initDownloadUI();
  }
})();
