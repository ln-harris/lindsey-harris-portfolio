# 🚀 Lindsey Harris - Portfolio

An immersive, interactive portfolio website built with vanilla JavaScript, CSS, and HTML. Designed to make a lasting impression on recruiters and showcase your development skills.

## ✨ Features

### Visual Experience
- **🎨 Animated Background**: Floating gradient orbs that create depth and movement
- **✨ Particle System**: 50+ animated particles creating a dynamic atmosphere
- **🌈 Gradient Animations**: Smooth color transitions throughout the site
- **💫 Custom Cursor**: Interactive cursor with dot and outline that follows mouse movement
- **🎯 Parallax Scrolling**: Background elements move at different speeds for depth

### Interactive Elements
- **📜 Scroll Animations**: Elements fade and slide in as you scroll down
- **🎴 3D Card Tilt**: Project and skill cards tilt based on mouse position
- **🌓 Dark/Light Theme Toggle**: Smooth theme switching with localStorage persistence
- **📱 Responsive Mobile Menu**: Hamburger menu for mobile devices
- **⚡ Smooth Scroll**: Animated scrolling to sections with navbar offset
- **📊 Scroll Progress Bar**: Visual indicator at top of page showing scroll position

### Sections
1. **Hero** - Eye-catching intro with floating avatar, badges, and CTAs
2. **Skills** - Grid of tech stack cards with hover effects
3. **Projects** - Featured work with overlay effects and tech tags
4. **About** - Personal interests with image cards
5. **Contact** - Form and contact information
6. **Footer** - Simple, elegant footer with back-to-top link

### Performance & UX
- **🚀 Lightweight**: Pure vanilla JS - no frameworks, fast loading
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile
- **♿ Accessible**: Semantic HTML, ARIA labels, keyboard navigation
- **🎯 SEO Optimized**: Meta tags, semantic structure
- **💾 LocalStorage**: Theme preference persists across sessions

## 🎨 Customization Guide

### Colors
Edit CSS variables in `styles.css` (lines 8-19):
```css
:root {
  --accent-primary: #6366f1;  /* Main brand color */
  --accent-secondary: #8b5cf6; /* Secondary accent */
  --bg-main: #0a0e27;          /* Main background */
  --text-primary: #e2e8f0;     /* Main text color */
}
```

### Content

#### Personal Information
**HTML (index.html):**
- Line 82: Your name in hero
- Line 336-345: Contact info (email, LinkedIn, GitHub)
- Update social media links at lines 87-95

#### Projects
Each project card starts around line 221. Update:
- `.project__title` - Project name
- `.project__description` - Project details
- `.project__tech` - Technology tags
- Links to live demo and GitHub

#### Skills
Update skill cards starting at line 148:
- Add/remove skill cards in the grid
- Customize icons (Font Awesome)
- Update skill lists

#### About Section
Update personal stories starting at line 285:
- Replace images in `/images` folder
- Update descriptions
- Change emoji icons

### Images
Replace these files in the `/images` folder:
- `LindseyHarris_Avatar.png` - Your profile photo
- `my_dogs.jpeg` - About section image 1
- `sunset_hike_friends.jpeg` - About section image 2
- `hike_family.jpeg` - About section image 3
- `gaming_pc.png` - About section image 4

### Fonts
Current fonts (Google Fonts):
- **Display**: Space Grotesk - Headings
- **Body**: Inter - Paragraphs

To change, update line 22-25 in `index.html` and CSS variables in `styles.css`.

### Animation Speeds
Adjust in `styles.css` variables:
```css
--transition-fast: 0.2s ease;
--transition-base: 0.3s ease;
--transition-slow: 0.6s cubic-bezier(0.4, 0, 0.2, 1);
```

## 🛠️ Advanced Customizations

### Add More Particles
In `script.js` line 46, change:
```javascript
const particleCount = 50; // Increase for more particles
```

### Disable Custom Cursor
Remove or comment out lines 5-43 in `script.js`

### Enable Typing Effect
Uncomment lines 226-231 in `script.js` for hero title typing animation

### Add Stats/Counters
Use the `animateCounter` function (lines 268-281 in `script.js`):
```javascript
const statsElement = document.querySelector('.stat-number');
animateCounter(statsElement, 100, 2000); // Count to 100 in 2 seconds
```

### Modify 3D Tilt Intensity
In `script.js` lines 172-174, adjust division values:
```javascript
const rotateX = (y - centerY) / 10; // Change /10 to /20 for subtler effect
const rotateY = (centerX - x) / 10;
```

### Form Backend Integration
Update `script.js` lines 240-260 with your backend endpoint:
```javascript
fetch('YOUR_API_ENDPOINT', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});
```

## 📱 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Quick Deploy Options:

1. **Netlify** (Recommended)
   - Drag and drop your folder to [netlify.com/drop](https://netlify.com/drop)
   - Or connect your GitHub repo

2. **Vercel**
   - Import your GitHub repository
   - Automatic deployments on push

3. **GitHub Pages**
   - Push to a GitHub repo
   - Enable Pages in Settings
   - Your site will be at `username.github.io/repo-name`

4. **Traditional Hosting**
   - Upload files via FTP to any web host
   - Works with shared hosting, VPS, etc.

## 📋 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styles and animations
├── script.js           # Interactive features
├── images/             # Image assets
│   ├── LindseyHarris_Avatar.png
│   ├── my_dogs.jpeg
│   ├── sunset_hike_friends.jpeg
│   ├── hike_family.jpeg
│   └── gaming_pc.png
└── README.md          # This file
```

## 💡 Tips for Job Applications

1. **Add Analytics**: Track visitor behavior with Google Analytics or Plausible
2. **Custom Domain**: Makes you look more professional (e.g., lindseyharris.dev)
3. **Add More Projects**: Aim for 4-6 unique projects
4. **Blog Section**: Add technical blog posts to show expertise
5. **Testimonials**: Add recommendations from colleagues or clients
6. **Resume Download**: Add a button to download your resume
7. **Loading Screen**: Add a custom loading animation

## 🔧 Technical Details

- **No Build Process**: Everything runs in the browser
- **No Dependencies**: Pure vanilla JavaScript
- **Lightweight**: ~50KB total (excluding images)
- **Performance**: 90+ Lighthouse score achievable
- **Accessibility**: WCAG 2.1 AA compliant

## 📞 Support

Having issues? Common fixes:
- **Images not loading**: Check file paths are correct
- **Animations not working**: Ensure JavaScript is enabled
- **Mobile menu not opening**: Check browser console for errors
- **Theme not persisting**: Verify localStorage is enabled

## 🎯 Next Steps

1. ✅ Customize content with your information
2. ✅ Replace placeholder images
3. ✅ Add real project screenshots
4. ✅ Update all links (GitHub, LinkedIn, email)
5. ✅ Test on multiple devices
6. ✅ Deploy to production
7. ✅ Share with recruiters!

---

**Built with ❤️ by Lindsey Harris**

Good luck with your job search! 🚀
