# Course Category Icons

## Current Icons
The course category tiles now use beautiful SVG icons instead of emojis:
- `animation-icon.svg` - 3D Animation courses
- `vfx-icon.svg` - VFX courses  
- `gaming-icon.svg` - Gaming courses
- `multimedia-icon.svg` - Multimedia & Design courses
- `shortterm-icon.svg` - Short Term courses

## How to Replace with Your Own GIF/WebP Files

### Method 1: Direct File Replacement
1. Replace any of the SVG files with your GIF/WebP files
2. Keep the same filenames (e.g., replace `animation-icon.svg` with `animation-icon.gif`)
3. The icons will automatically update

### Method 2: Update File Paths (Recommended)
1. Add your GIF/WebP files to this directory
2. Update the `iconImage` paths in these files:
   - `src/components/CoursesSection.js`
   - `src/components/CoursesPage.js` 
   - `src/components/Header.js`

Example:
```javascript
iconImage: '/courses/your-custom-animation.gif',  // or .webp
```

## File Requirements
- **Size**: Icons display in 48x48px containers (desktop) and 50x50px (mobile)
- **Format**: SVG, PNG, GIF, WebP all supported
- **Optimization**: For best performance, keep file sizes under 100KB
- **Quality**: Higher resolution files will be automatically scaled down

## Tips for Best Results
- GIF animations should be subtle and not distracting
- WebP files offer excellent compression for static images
- Consider the gradient background when designing your icons
- Test on both desktop and mobile for optimal appearance 