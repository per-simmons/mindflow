# MindFlow - AI-Enabled Productivity OS for Your Thoughts

MindFlow is an AI-enabled productivity operating system designed to help you organize, connect, and amplify your thoughts. This project was built with [Next.js](https://nextjs.org) and is configured for easy deployment on Vercel.

## Features

- **Modern UI**: Clean, responsive design built with Tailwind CSS
- **Blog System**: Reads markdown files from `content/blog` directory
- **Dynamic Routing**: Blog posts available at `/blog/YYYY-MM-DD/slug`
- **AI Showcase**: Demonstrates the concept of an AI-powered productivity system

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/per-simmons/mindflow.git
cd mindflow

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Blog Content

Blog posts are stored as markdown files in the `content/blog` directory. To add a new blog post:

1. Create a new markdown file in the `content/blog` directory
2. Name it using the format: `YYYY-MM-DD-slug.md`
3. Include frontmatter with title, date, author, and excerpt

Example:

```markdown
---
title: "Your Blog Post Title"
date: "2025-06-01"
author: "Your Name"
excerpt: "A brief excerpt of your blog post."
---

# Your Blog Post Title

Content goes here...
```

## Deployment on Vercel

This project is configured for seamless deployment on Vercel. Follow these steps:

1. **Connect to GitHub**: 
   - Go to [Vercel](https://vercel.com) and sign in
   - Click "Add New" > "Project"
   - Select the GitHub repository

2. **Configure Project**:
   - Project Name: `mindflow` (or your preferred name)
   - Framework Preset: Next.js
   - Root Directory: `./` (default)

3. **Environment Variables**:
   - No environment variables are required for basic functionality

4. **Deploy**:
   - Click "Deploy"

### Automatic Deployments

The repository is configured with a `vercel.json` file that enables:

- Automatic deployments on pushes to the main branch
- Optimized build settings for Next.js
- Proper region configuration

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment Documentation](https://vercel.com/docs/deployments/overview)

## License

MIT
