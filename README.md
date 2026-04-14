# Portfolio Website

A modern, responsive portfolio website showcasing web development projects and skills.

## Features

✨ **Modern Design**
- Vibrant gradient color scheme with purple and pink accents
- Glassmorphism effects on navigation
- Smooth animations and transitions
- Dark theme optimized for visual appeal

🎨 **Premium Aesthetics**
- Google Fonts (Inter & Outfit)
- Animated gradient backgrounds
- Micro-interactions on hover
- Typing effect and scroll animations

📱 **Fully Responsive**
- Mobile-first design approach
- Hamburger menu for mobile devices
- Optimized layouts for all screen sizes
- Touch-friendly interface

🚀 **Interactive Features**
- Smooth scroll navigation
- Active section highlighting
- Animated skill progress bars
- Contact form with validation
- Back to top button
- Parallax effects

## Structure

```
Portfolio/
├── index.html          # Main HTML structure
├── styles.css          # Complete CSS design system
├── script.js           # Interactive JavaScript
├── avatar.jpg          # Profile image
├── project1.jpg        # Project screenshot
├── project2.jpg        # Project screenshot
```

## Customization

### Update Personal Information

1. **Hero Section** (`index.html` line 45-50)
   - Replace "Your Name" with your actual name
   - Update the subtitle/role
   - Modify the description

2. **Contact Details** (`index.html` line 245-260)
   - Update email address
   - Add phone number
   - Update location

3. **Social Links** (`index.html` line 265-285)
   - Add your GitHub profile URL
   - Add LinkedIn profile URL
   - Add Twitter/other social media URLs

### Customize Projects

Edit the projects section (`index.html` line 125-175) to showcase your own work:
- Update project titles and descriptions
- Change technology tags
- Add links to live demos and GitHub repos
- Replace project images

### Adjust Skills

Modify the skills section (`index.html` line 185-235):
- Add or remove skill categories
- Update skill names and proficiency levels
- Adjust progress bar widths

### Color Scheme

To change colors, edit CSS custom properties in `styles.css` (lines 22-30):
```css
--primary: hsl(260, 85%, 60%);        /* Main purple */
--secondary: hsl(320, 85%, 60%);      /* Pink accent */
--accent: hsl(180, 85%, 55%);         /* Teal accent */
```

## Usage

Simply open `index.html` in a modern web browser to view the portfolio.

### Viewing Locally

1. Navigate to the Portfolio folder
2. Double-click `index.html` or right-click and select "Open with" your preferred browser

### Deploying

You can deploy this portfolio to:
- **GitHub Pages**: Push to a GitHub repo and enable Pages
- **Netlify**: Drag and drop the folder
- **Vercel**: Import from GitHub or deploy directly
- **Any web hosting**: Upload all files to your server

## Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

Modern browsers with ES6+ support required for full functionality.

## Performance

- Lightweight (~50KB total CSS + JS)
- No external dependencies or frameworks
- Optimized animations using CSS transforms
- Lazy loading for scroll animations

## License

Feel free to use this template for your own portfolio. Customize it to make it your own!

## Credits

Built with vanilla HTML, CSS, and JavaScript
Fonts: Google Fonts (Inter & Outfit)
Icons: Inline SVG
