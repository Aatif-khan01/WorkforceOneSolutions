# Build Checklist

Before deploying to Hostinger, verify the following:

## Pre-Build Checks
- [ ] All dependencies installed (`npm install`)
- [ ] No TypeScript errors (`npm run lint`)
- [ ] All images are in `src/assets/` or `public/` folder

## Build Process
1. Run `npm run build`
2. Check that `dist` folder is created
3. Verify `dist` contains:
   - [ ] `index.html`
   - [ ] `assets/` folder with CSS and JS
   - [ ] `.htaccess` file
   - [ ] All images from `public/` folder

## Post-Build Verification
- [ ] Test locally with `npm run preview`
- [ ] Check all routes work (/, /about, /services, /contact)
- [ ] Verify navigation works on desktop
- [ ] Verify mobile menu works
- [ ] Check responsive design on mobile (320px, 375px, 414px)
- [ ] Check responsive design on tablet (768px, 1024px)
- [ ] Verify images load correctly
- [ ] Check forms work (Contact page)
- [ ] Test dark/light theme toggle
- [ ] Verify no console errors

## File Structure After Build
```
dist/
├── index.html
├── .htaccess
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [other assets]
└── [public folder contents]
```

## Common Issues to Check

### Navigation
- Logo visible on all pages
- Mobile menu opens/closes properly
- Dropdown menu works on desktop
- Active page highlighted

### Responsive Design
- No horizontal scrolling on mobile
- Text is readable on all screen sizes
- Buttons are tappable on mobile (min 44x44px)
- Images scale properly

### Performance
- Page loads quickly
- Images are optimized
- No large JavaScript bundles

## Ready for Deployment
Once all checks pass, upload `dist` folder contents to Hostinger's `public_html` directory.

