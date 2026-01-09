# Deployment Guide for Hostinger

This guide will help you deploy your Workforce One Solution website to Hostinger.

## Prerequisites

1. Node.js (v18 or higher) installed on your local machine
2. Hostinger hosting account with FTP/File Manager access
3. All dependencies installed (`npm install`)

## Build Steps

### 1. Install Dependencies (if not already done)
```bash
npm install
```

### 2. Build for Production
```bash
npm run build
```

This will create a `dist` folder with all the optimized production files.

### 3. Verify Build
Check that the `dist` folder contains:
- `index.html`
- `assets/` folder with CSS and JS files
- All images and static files from `public/` folder
- `.htaccess` file (for Apache server routing)

## Uploading to Hostinger

### Option 1: Using File Manager (Recommended)

1. Log in to your Hostinger control panel (hPanel)
2. Navigate to **File Manager**
3. Go to your domain's `public_html` folder (or subdomain folder)
4. **Delete all existing files** in the folder (backup first if needed)
5. Upload **all contents** from the `dist` folder:
   - Select all files in `dist` folder
   - Upload them to `public_html`
   - Make sure `.htaccess` is uploaded (it's a hidden file)

### Option 2: Using FTP

1. Use an FTP client (FileZilla, WinSCP, etc.)
2. Connect to your Hostinger FTP server
3. Navigate to `public_html` folder
4. Upload all files from the `dist` folder
5. Ensure file permissions:
   - Folders: `755`
   - Files: `644`
   - `.htaccess`: `644`

## Important Files

### `.htaccess`
The `.htaccess` file is crucial for React Router to work properly. It ensures:
- All routes redirect to `index.html` (for client-side routing)
- Proper compression and caching
- Security headers

**Make sure this file is uploaded!**

## Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All pages are accessible (Home, About, Services, Contact)
- [ ] Navigation works on desktop and mobile
- [ ] Images load properly
- [ ] Forms work correctly
- [ ] Mobile responsive design works
- [ ] No console errors in browser
- [ ] SSL certificate is active (HTTPS)

## Troubleshooting

### Issue: 404 errors on page refresh
**Solution:** Ensure `.htaccess` file is uploaded and Apache `mod_rewrite` is enabled

### Issue: White screen or blank page
**Solution:** 
- Check browser console for errors
- Verify all files are uploaded correctly
- Check file paths in browser network tab
- Ensure `index.html` is in the root directory

### Issue: Images not loading
**Solution:**
- Verify image paths are correct
- Check that `public/` folder contents are in the root
- Clear browser cache

### Issue: CSS/JS not loading
**Solution:**
- Check `assets/` folder is uploaded
- Verify file permissions (644 for files)
- Clear browser cache and hard refresh (Ctrl+F5)

## Performance Optimization

The build is already optimized with:
- Code splitting
- Asset minification
- Image optimization
- Gzip compression (via .htaccess)
- Browser caching

## Support

If you encounter issues:
1. Check browser console for errors
2. Verify file structure matches the `dist` folder
3. Test in incognito/private browsing mode
4. Contact Hostinger support if server-side issues persist

## Notes

- The website uses React Router for client-side routing
- All routes are handled by the `.htaccess` file
- The build uses relative paths (`base: "./"`) for compatibility
- Mobile responsive design is built-in with Tailwind CSS

