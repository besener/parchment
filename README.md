
# 📝 Parchment Blog

A personal blog about **life in/outside academia**.  

---

## 🌟 Overview:

Parchment is a **static blog** built with:

- **HTML5** & **CSS3**  
- **JavaScript** for dynamic post rendering and pagination  
- **Font Awesome 6.5.2** for social media icons  
- Responsive design for desktop and mobile  

---

## Features include:

- ✅ Dynamic post listing with pagination  
- ✅ Back links that remember your current page  
- ✅ Timezone-safe date formatting  
- ✅ Social media integration: GitHub, Instagram, Flickr, Bluesky  

---

## 🚀 Features

### 1️⃣ Dynamic Post Listing
- `index.html` fetches `posts.json` and displays posts sorted by date.  
- Pagination allows easy navigation across multiple pages.  

### 2️⃣ Post Template
Each post uses `template.html` placeholders:  

- `{{TITLE}}` – Post title  
- `{{DATE}}` – Post date  
- `{{CONTENT}}` – Post content  
- `{{IMAGE}}` – Featured image  

JavaScript replaces placeholders with actual post data.

### 3️⃣ Social Media Integration
Footer links include:

- [GitHub](https://github.com/besener) ![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat&logo=github)  
- [Instagram](https://instagram.com/bihter.esener) ![Instagram](https://img.shields.io/badge/-Instagram-E4405F?style=flat&logo=instagram&logoColor=white)  
- [Flickr](https://flickr.com/besener) ![Flickr](https://img.shields.io/badge/-Flickr-FF0084?style=flat&logo=flickr&logoColor=white)  
- [Bluesky](https://bsky.app/profile/besener.bsky.social) ![Bluesky](https://img.shields.io/badge/-Bluesky-00CFFF?style=flat&logo=bluesky&logoColor=white)  

### 4️⃣ Back Links
JavaScript updates all “Back to Page” links dynamically to preserve pagination context.  

### 5️⃣ Timezone-Safe Dates
Post dates are parsed as `YYYY-MM-DDT00:00:00` to prevent timezone shifts.  

---

## 🆕 Adding a New Post

1. Create a new HTML file in `posts/` using `template.html`.  
2. Add an entry to `posts.json`:

```json
{
  "title": "Your Post Title",
  "date": "YYYY-MM-DD",
  "file": "your-post.html",
  "excerpt": "Short summary of your post...",
  "image": "posts/images/your-image.jpg"
}
```

3. The homepage automatically lists the new post.

---

## 📜 License:

There is no license. Made with ❤️.

---

## 🎨 Social Icon Credits:

– Font Awesome 6.5.2 

---

