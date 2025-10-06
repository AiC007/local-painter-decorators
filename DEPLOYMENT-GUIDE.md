# Deployment Guide – Local Painter & Decorators

Quick reference for deploying your website to production.

---

## 🚀 Deploy to Vercel (Recommended)

### Step 1: Push to GitHub

```bash
# Create a new repository on GitHub first, then:
git remote add origin https://github.com/YOUR-USERNAME/local-painter-decorators.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to https://vercel.com/signup
2. Sign up with GitHub
3. Click "Add New Project"
4. Import your `local-painter-decorators` repository
5. Vercel auto-detects Next.js settings
6. Click "Deploy"

**Done!** Your site will be live at `https://your-project.vercel.app` in ~2 minutes.

### Step 3: Add Custom Domain

1. In Vercel dashboard → Settings → Domains
2. Add `www.localpainteranddecorators.co.uk`
3. Follow DNS instructions (add CNAME record)
4. Vercel auto-provisions SSL certificate

---

## 📋 Pre-Launch Checklist

Before deploying to production:

### Content
- [ ] Update NAP in `lib/config.ts` (phone, email, address)
- [ ] Set `establishedYear`, `yearsExperience`, `reviewsCount`, `averageRating`
- [ ] Enable WhatsApp (if desired) in `lib/config.ts`
- [ ] Edit testimonials in `data/testimonials.json` with real reviews
- [ ] Replace placeholder text in legal pages (`[Company Name]`, `[Email]`, etc.)

### Images
- [ ] Add logo to `/public/logo.png`
- [ ] Add Open Graph image to `/public/og-image.jpg` (1200×630px)
- [ ] Add favicon files to `/public/`
- [ ] Add real project photos to Gallery page

### Integrations
- [ ] Set up contact form handler (Formspree, EmailJS, or custom API)
- [ ] Add Google Analytics tracking code to `app/layout.tsx`
- [ ] Add Google Tag Manager (if needed)

### SEO Setup
- [ ] Create Google Business Profile
- [ ] Verify domain in Google Search Console
- [ ] Submit sitemap: `https://your-domain.com/sitemap.xml`
- [ ] Verify schema with [Google Rich Results Test](https://search.google.com/test/rich-results)

### Testing
- [ ] Run `npm run build` locally (should succeed)
- [ ] Test all pages on mobile and desktop
- [ ] Run Lighthouse audit (target 90+ on all metrics)
- [ ] Test all CTAs (call buttons, contact forms, navigation)
- [ ] Check for broken links

---

## 🔧 Post-Deployment Tasks

### 1. Google Search Console

1. Add property: `https://www.localpainteranddecorators.co.uk`
2. Verify ownership (use HTML tag method in `app/layout.tsx`)
3. Submit sitemap: `https://www.localpainteranddecorators.co.uk/sitemap.xml`
4. Monitor for indexing issues

### 2. Google Business Profile

1. Create/claim your GBP listing
2. Use exact same NAP as website
3. Add categories: "Painter", "Painting", "Painting Contractor"
4. Link to website
5. Get review link and add to review handout

### 3. Track Performance

Monitor in Vercel Analytics or Google Analytics:
- Page views by URL
- Conversion events (form submissions, phone clicks)
- Core Web Vitals
- Bounce rate by page

---

## 🛠 Making Updates

### Update Content

1. Edit files locally in VS Code
2. Test with `npm run dev`
3. Commit: `git add . && git commit -m "Update content"`
4. Push: `git push`
5. Vercel auto-deploys in ~60 seconds

### Add New Service/Location

See README.md "Adding New Pages" section.

### Emergency Rollback

In Vercel dashboard → Deployments → click previous deployment → "Promote to Production"

---

## 🆘 Troubleshooting

### Build fails on Vercel

- Check build logs in Vercel dashboard
- Test locally first: `npm run build`
- Common fix: `rm -rf .next node_modules && npm install && npm run build`

### Images not loading

- Ensure images are in `/public/` directory
- Use Next.js `<Image>` component with correct paths
- Check file extensions match code (.jpg vs .jpeg)

### Contact form not working

- Set up form handler (see README "Contact Form" section)
- Check browser console for errors
- Ensure fetch/submit logic is correct

### Schema errors in Google Search Console

- Test URL in [Google Rich Results Test](https://search.google.com/test/rich-results)
- Check JSON-LD syntax in page source
- Common fix: missing required fields in schema

---

## 📞 Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Support**: https://vercel.com/support
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Google Search Console Help**: https://support.google.com/webmasters

---

**Project built and ready to deploy!** 🎉

Last updated: October 2025
