# Honours Research Project Website

**Live Site:** https://jcheney20.github.io/Hons_2026_Website/

## 📋 Overview

This is the official website for the Honours research project: **"Intelligent Job Scheduling for HPC Systems: A Statistical Evaluation of Deep Reinforcement Learning Approaches"**

Hosted on GitHub Pages, this site provides access to research deliverables, presentations, and recordings for each submission milestone.

## 🚀 Deployment Status

✅ **Currently Live** on GitHub Pages  
📦 **Repository:** [JCheney20/Hons_2026_Website](https://github.com/JCheney20/Hons_2026_Website)

### Enabling GitHub Pages (Already Configured)

1. Go to repository **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** → Folder: **/ (root)**
4. Save and wait ~1-2 minutes
5. Site will be live at: `https://jcheney20.github.io/Hons_2026_Website/`

### Making Updates

```bash
# Make your changes, then:
git add .
git commit -m "Update submission materials"
git push origin main
# GitHub Pages auto-deploys within 1-2 minutes
```

---

## 📁 File Structure

```
Project_Website/
├── index.html                                    # Main HTML file
├── README.md                                     # This file
├── css/
│   └── style.css                                # Styles (Metropolyst-inspired theme)
├── js/
│   └── main.js                                  # JavaScript (animations, video modal)
├── images/                                       # SVG icons (FontAwesome)
│   ├── desktop-solid-full.svg
│   ├── download-solid-full.svg
│   ├── envelope-regular-full.svg
│   ├── film-solid-full.svg
│   ├── github-brands-solid-full.svg
│   ├── lock-solid-full.svg
│   ├── user-graduate-solid-full.svg
│   └── user-solid-full.svg
└── downloads/                                    # Research deliverables
    ├── 4323819_Submission1.pdf                  # Paper (Submission 1)
    ├── 4323819_Submission1_Presentation.pdf     # Slides (Submission 1)
    └── 4323819_Submission1_Recording.mp4        # 4-min recording (7.3MB)
```

---

## 🎨 Design Features

- **Responsive Design:** Mobile-first approach, works on all devices
- **Video Modal:** Click-to-play overlay with native browser controls
  - Inline playback without leaving the page
  - Download option via native video controls
  - Close with X button, clicking outside, or pressing Escape
- **Smooth Scrolling:** Animated navigation with active section highlighting
- **Scroll Reveal Animations:** Cards fade in as you scroll
- **Teal Color Scheme:** Matches Metropolyst presentation theme (#23373b, #008080)
- **Accessibility:** Semantic HTML, keyboard navigation support

---

## 📝 Content Management

### Current Submission Status

✅ **Submission 1** - Available (April 2026)
- Paper, presentation slides, and 4-minute recording
- Video playable via modal overlay

🔄 **Submission 2** - In Progress (Expected May 2026)
🔜 **Submission 3** - To Be Added (Expected June 2026)
🔜 **Final Submission** - To Be Added (Expected July 2026)

### Optional: Adding Profile Images

Currently using placeholder SVG icons. To add photos:

1. Save images as `images/justin_cheney.jpg` and `images/prof_nyirenda.jpg`
2. Update `index.html` (lines 204-206 and 224-226):
   ```html
   <div class="team-image-placeholder">
       <img src="images/justin_cheney.jpg" alt="Justin M. Cheney">
   </div>
   ```

---

## 🔄 Adding Future Submissions

### When Submission 2 is Ready

1. **Add files to `downloads/`:**
   - `4323819_Submission2.pdf`
   - `4323819_Submission2_Presentation.pdf`
   - `4323819_Submission2_Recording.mp4` (if applicable)

2. **Update `index.html` (Submission 2 card, ~lines 106-133):**
   ```html
   <!-- Change badge -->
   <span class="card-badge available">Available</span>
   
   <!-- Enable download buttons -->
   <div class="card-downloads">
       <a href="downloads/4323819_Submission2.pdf" class="download-btn" download>
           <img src="images/download-solid-full.svg" alt="Download icon" style="filter: brightness(0) invert(1);">
           Report (PDF)
       </a>
       <!-- ... repeat for slides and recording -->
   </div>
   ```

3. **For video recordings:**
   - Follow the same modal pattern as Submission 1
   - Add a new modal with unique ID: `videoModal2`
   - Create corresponding `openVideoModal2()` function in `js/main.js`

4. **Commit and push:**
   ```bash
   git add downloads/ index.html
   git commit -m "Add Submission 2 materials"
   git push origin main
   ```
   
   GitHub Pages will auto-deploy in ~1-2 minutes.

---

## 🧪 Local Testing

### Option 1: Python HTTP Server

```bash
cd Project_Website
python -m http.server 8000
```
Open browser: `http://localhost:8000`

### Option 2: VS Code Live Server

1. Install "Live Server" extension
2. Right-click `index.html` → "Open with Live Server"

### Testing Video Playback

- Ensure the modal opens when clicking "Recording (4 min)"
- Verify video plays with full browser controls
- Test closing via X button, clicking outside, or pressing Escape
- Check that body scroll is disabled when modal is open

---

## 🎯 Technical Details

### Performance
- **Minimal Dependencies:** No external frameworks (vanilla JS)
- **Optimized Assets:** SVG icons, compressed video (7.3MB)
- **Fast Loading:** ~15 files, total page weight < 8MB
- **GitHub CDN:** Served from GitHub's global CDN infrastructure

### SEO
- **Meta Tags:** Included for search engines and social media previews
- **Semantic HTML:** Proper heading hierarchy, section landmarks
- **Favicon:** Emoji favicon (🖥️ computer)
- **Google Fonts:** Inter (UI) & JetBrains Mono (code) from CDN

### Browser Support
- **Modern Browsers:** Chrome, Firefox, Safari, Edge (last 2 versions)
- **Video Format:** MP4/H.264 (universally supported)
- **Fallback:** Graceful degradation for older browsers

---

## 📧 Contact

**Justin M. Cheney**  
BSc (Hons) Computer Science  
University of the Western Cape  

📧 [4323819@myuwc.ac.za](mailto:4323819@myuwc.ac.za)  
🔗 [GitHub Profile](https://github.com/JCheney20)  
🌐 [Project Website](https://jcheney20.github.io/Hons_2026_Website/)

**Supervisor:** Prof. Clement Nyirenda  
📧 [cnyirenda@uwc.ac.za](mailto:cnyirenda@uwc.ac.za)

---

## 📜 License

This website and its content are part of the Honours research project at the University of the Western Cape.

---

**Last Updated:** April 7, 2026  
**Status:** Live on GitHub Pages ✅
