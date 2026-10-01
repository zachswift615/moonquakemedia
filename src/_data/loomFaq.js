// The LOOM page's FAQ, stated once. layouts/loom.njk renders it as a visible section AND as the
// page's FAQPage structured data, so the two can never say different things.
//
// ⛔ Every answer is a claim about the shipped product. Check it against the LOOM manual
// (docs/manual in the LOOM repository, or /loom/manual/ on this site) before changing it.
// Plain text only: the structured data needs plain text, and `link` is drawn after the answer.
const pricing = require('./loomPricing.js')();

const price = pricing.onLaunch
  ? `LOOM is $${pricing.price.replace(/\.00$/, '')} until ${pricing.launchEndsReadable}, then $${pricing.listPrice}.`
  : `LOOM is $${pricing.listPrice}.`;

module.exports = [
  {
    q: 'How much does LOOM cost?',
    a: `${price} It is a one-time purchase, not a subscription, and the licence never expires. You can try every feature free for 14 days first, with no account and no card.`,
  },
  {
    q: 'What Macs does LOOM run on?',
    a: 'LOOM runs on Macs with Apple Silicon, on macOS 13.3 Ventura or later. There is no Intel build and no Windows or iPad version.',
  },
  {
    q: 'Does LOOM need an internet connection?',
    a: 'No. LOOM contains no networking code. It never checks your licence online, never downloads anything and sends nothing, so it works the same on a stage with no WiFi.',
    link: { href: '/loom/manual/privacy/', text: 'Privacy in the manual' },
  },
  {
    q: 'Can I use a MIDI foot controller or pad controller with LOOM?',
    a: 'Yes. LOOM answers a fixed set of MIDI notes on channel 16 by default. Each track gets its own octave with the same seven commands, and a range of notes runs the transport and the arrangement. There is no MIDI learn yet.',
    link: { href: '/loom/manual/midi-mapping/', text: 'The MIDI note map' },
  },
  {
    q: 'Can I use my own plug-ins in LOOM?',
    a: 'No. For stability, LOOM hosts no third-party plug-ins. It has its own synth, drum machine and sampler, and its own effects: parametric EQ, compressor, delay, reverb, noise gate, chorus, octave, cab and guitar amp.',
  },
  {
    q: 'Can I record a live looping set as separate tracks?',
    a: 'Yes. RECORD saves the whole performance as separate WAV files that start at the same moment: one per loop track, one per instrument track, one per effects bus, the main mix, and any groups you set up. Drop them into a DAW and they line up at zero.',
    link: { href: '/loom/manual/your-recordings/', text: 'Where your recordings live' },
  },
  {
    q: 'How is LOOM different from a hardware looper?',
    a: 'LOOM works like a loop pedal when you play it by hand, and it also has an arrange view. You draw REC, DUB and PLAY regions on a timeline, and the song presses the looper\'s buttons for you while you play over it.',
    link: { href: '/loom/manual/the-arrange-view/', text: 'The arrange view' },
  },
];
