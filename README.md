# Honours Research Project Website

**Live Site:** [To be added after Netlify deployment]

## 📋 Overview

This is the official website for the Honours research project: "Intelligent Job Scheduling for HPC Systems: A Statistical Evaluation of Deep Reinforcement Learning Approaches"

## 🚀 Deployment on Netlify

### Quick Deploy

1. **Push to GitHub:**
   ```bash
   cd Project_Website
   git init
   git add .
   git commit -m "Initial website commit"
   git remote add origin https://github.com/YOUR-USERNAME/hpc-drl-website.git
   git push -u origin main
   ```

2. **Deploy on Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Build settings:
     - **Build command:** (leave empty)
     - **Publish directory:** `/` (root)
   - Click "Deploy site"

### Manual Deploy (Drag & Drop)

1. Zip the `Project_Website` folder contents (not the folder itself)
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop the zip file
4. Your site will be live in seconds!

### Custom Domain (Optional)

1. In Netlify: Site settings → Domain management
2. Add custom domain: `yourname-hpc-research.com` (or UWC subdomain if available)
3. Follow Netlify's DNS configuration instructions

---

## 📁 File Structure

```
Project_Website/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Styles (Metropolyst-inspired colors)
├── js/
│   └── main.js            # JavaScript (smooth scroll, animations)
├── images/                 # Placeholder for team photos
└── downloads/              # PDFs and recordings
    ├── submission1_paper.pdf
    ├── submission1_slides.pdf
    ├── submission1_recording.mp4
    └── ... (future submissions)
```

---

## 🎨 Design Features

- **Responsive Design:** Mobile-first approach, works on all devices
- **Smooth Scrolling:** Animated navigation
- **Scroll Reveal Animations:** Cards fade in as you scroll
- **Teal Color Scheme:** Matches Metropolyst presentation theme
- **Accessibility:** Semantic HTML, ARIA labels where needed

---

## 📝 Customization

### Before Deployment

1. **Update Email Addresses:**
   - In `index.html`: Replace all instances of `your.email@example.com`
   - In `js/main.js`: Update `actualEmail` variable (line 106)

2. **Add Profile Images:**
   - Save images as `images/justin_cheney.jpg` and `images/prof_nyirenda.jpg`
   - Update HTML:
     ```html
     <div class="team-image-placeholder">
         <img src="images/justin_cheney.jpg" alt="Justin M. Cheney">
     </div>
     ```

3. **Add Downloadable Files:**
   - Place PDFs in `downloads/` folder:
     - `submission1_paper.pdf`
     - `submission1_slides.pdf`
     - `submission1_recording.mp4`
   - Ensure file names match the `href` attributes in `index.html`

4. **Update GitHub Link:**
   - After creating GitHub repo, update all instances of `https://github.com/JCheney20`
   - Replace with project repo link: `https://github.com/JCheney20/HPC-DRL-Scheduler`

---

## 🔄 Updating Content

### Adding Submission 2 (when ready)

1. Update the card badge:
   ```html
   <span class="card-badge available">Available</span>
   ```

2. Enable download buttons:
   ```html
   <div class="card-downloads">
       <a href="downloads/submission2_paper.pdf" class="download-btn" download>
   ```

3. Upload files to `downloads/` folder

4. Push changes to GitHub (Netlify auto-deploys)

---

## 🧪 Local Testing

### Using Python HTTP Server

```bash
cd Project_Website
python -m http.server 8000
```

Open browser: `http://localhost:8000`

### Using VS Code Live Server

1. Install "Live Server" extension
2. Right-click `index.html` → "Open with Live Server"

---

## 🎯 SEO & Performance

- **Meta Tags:** Included for search engines and social media
- **Favicon:** Emoji favicon (computer emoji 🖥️)
- **Google Fonts:** Inter & JetBrains Mono loaded from CDN
- **Fast Loading:** Minimal dependencies, optimized CSS/JS

### Adding Google Analytics (Optional)

Add before closing `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 📧 Contact

**Justin M. Cheney**  
University of the Western Cape  
📧 [your.email@example.com]  
🔗 [GitHub](https://github.com/JCheney20)

---

## 📜 License

This website design is part of the Honours research project and is available under the MIT License.

---

**Last Updated:** April 2026
