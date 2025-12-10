
# ZECOOLA Corporate Website

Official corporate website for Zecoola (Uanna Shoes) - Footwear R&D and Manufacturing Specialists.
Built with React, TypeScript, Tailwind CSS, and Vite.

## 📁 Image Management (重要：图片管理)

To ensure images do not disappear after deployment, they must be committed to the Git repository.
**请确保将所有图片文件放入 `public/` 文件夹中，并提交到 GitHub。**

### Required Images Structure:
Place these files in the `public` folder:

*   **Logo**: `logo.png` (Full logo with text / 完整带文字的Logo)
*   **Pages**: `about.png`, `oem.png`, `odm.png`
*   **Products**: `product-showcase.png` (Single collage image / 样品展示合成图)
*   **Brands**: `brand-1.png` to `brand-10.png`
*   **Factory Gallery**: `factory-1.png` to `factory-6.png`

## 🚀 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## 📦 Deployment

1.  Push code to GitHub:
    ```bash
    git add .
    git commit -m "Update content"
    git push origin main
    ```
2.  Connect repository to Vercel.
3.  Vercel will automatically deploy.

## 🛠 Tech Stack

*   **Framework**: React 18
*   **Build Tool**: Vite
*   **Styling**: Tailwind CSS
*   **Animations**: Framer Motion
*   **Icons**: Lucide React
*   **Email**: EmailJS
