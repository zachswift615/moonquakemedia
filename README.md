# Moonquake Media Website

Official website for Moonquake Media - creators of GigScroll and other music apps for performers.

## Live Site

- **Production:** https://moonquakemedia.com
- **GitHub Pages:** https://zachswift615.github.io/moonquakemedia/ (or your username)

## Pages

- `/` - Landing page with app showcase
- `/privacy.html` - Privacy policy for GigScroll (required by App Store)

## Setup Instructions

### 1. Push to GitHub

```bash
cd /Users/zachswift/projects/moonquakemedia-site
git add .
git commit -m "Initial website with landing page and privacy policy"
git branch -M main
git remote add origin https://github.com/zachswift615/moonquakemedia.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to repo **Settings** → **Pages**
2. **Source:** Deploy from a branch
3. **Branch:** main / (root)
4. Click **Save**
5. Wait 2-3 minutes for deployment

### 3. Configure Custom Domain (Namecheap → GitHub)

#### On Namecheap:

1. Go to your domain dashboard for `moonquakemedia.com`
2. Click **Advanced DNS**
3. Add these DNS records:

**For root domain (moonquakemedia.com):**
```
Type: A Record
Host: @
Value: 185.199.108.153
TTL: Automatic

Type: A Record
Host: @
Value: 185.199.109.153
TTL: Automatic

Type: A Record
Host: @
Value: 185.199.110.153
TTL: Automatic

Type: A Record
Host: @
Value: 185.199.111.153
TTL: Automatic
```

**For www subdomain:**
```
Type: CNAME Record
Host: www
Value: zachswift615.github.io (or your GitHub username)
TTL: Automatic
```

4. **Save all records**
5. Wait 10-30 minutes for DNS propagation

#### On GitHub:

1. Go to repo **Settings** → **Pages**
2. **Custom domain:** Enter `moonquakemedia.com`
3. Click **Save**
4. Wait for DNS check (green checkmark)
5. ✅ **Enable "Enforce HTTPS"** (wait until DNS is verified)

### 4. Verify It Works

- Visit https://moonquakemedia.com
- Visit https://moonquakemedia.com/privacy.html
- Both should load with HTTPS (may take 24 hours for certificate)

## Updating the Site

### After App Store Approval

Uncomment the App Store badge in `index.html`:

```html
<div class="badge">
    <a href="YOUR_APP_STORE_URL">
        <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
             alt="Download on the App Store">
    </a>
</div>
```

Replace `YOUR_APP_STORE_URL` with your actual App Store link.

### Making Changes

```bash
# Edit files
git add .
git commit -m "Update description"
git push
# Changes go live in 2-3 minutes
```

## Using in App Store Connect

### Privacy Policy URL:
```
https://moonquakemedia.com/privacy.html
```

### Marketing URL:
```
https://moonquakemedia.com
```

## Files

- `index.html` - Main landing page
- `privacy.html` - Privacy policy (App Store required)
- `CNAME` - Custom domain configuration
- `README.md` - This file

## Support Email

Set up email forwarding for: `support@moonquakemedia.com` → your personal email

(Can set up in Namecheap under "Email Forwarding" or use a service like Gmail, Zoho)

## Future Additions

- Add more apps as you build them
- Blog for release announcements
- Press kit / media resources
- Testimonials from users
