# Kids Learning Website - Tailwind CSS Version (Assignment 3)

This is the **Tailwind CSS version** of the Kids Learning Website, converted from the original React project that used external CSS.

## 🎯 Project Overview

This project demonstrates the conversion of a fully functional React application from traditional CSS to **Tailwind CSS utility classes**. All styling has been replaced with Tailwind utilities while maintaining the exact same functionality and design.

## ✨ Features

- **Fully Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Dark Mode Support** - Toggle between light and dark themes
- **Modern UI Components** - Cards, forms, tables, navigation, and more
- **Smooth Animations** - Hover effects, transitions, and floating animations
- **7 Complete Pages**:
  - Home (Landing page with hero section)
  - Login
  - Signup
  - Dashboard (with stats and activity table)
  - Services (Courses overview)
  - Subjects (All learning subjects)
  - Contact (Contact form with info cards)

## 🛠️ Tech Stack

- **React 19.2.5** - UI library
- **TypeScript** - Type safety
- **Vite 8.0.10** - Build tool
- **Tailwind CSS** - Utility-first CSS framework
- **@tailwindcss/vite** - Vite plugin for Tailwind
- **React Router DOM 7.15.0** - Client-side routing

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Steps

1. **Navigate to the project directory**
   ```bash
   cd kids-learning-website-tailwind
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - The app will be running at `http://localhost:5173`

## 🎨 Tailwind CSS Configuration

### vite.config.ts
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### index.css
```css
@import "tailwindcss";

/* Google Font Import */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

/* Custom animations */
@keyframes floatImg {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

.animate-float {
  animation: floatImg 4s ease-in-out infinite;
}
```

### tailwind.config.js
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        'brand-primary': '#FF6B35',
        'brand-secondary': '#4ECDC4',
        'brand-third': '#FFE66D',
        'brand-fourth': '#E8F8F5',
        'brand-accent': '#FF8B94',
      },
    },
  },
  plugins: [],
}
```

## 🎨 Design System

### Color Palette
- **Primary Orange**: `#FF6B35` - Main brand color
- **Secondary Teal**: `#4ECDC4` - Accent color
- **Yellow**: `#FFE66D` - Highlight color
- **Light Blue**: `#E8F8F5` - Background sections
- **Pink**: `#FF8B94` - Accent elements

### Typography
- **Font Family**: Nunito (Google Fonts)
- **Weights**: 400, 600, 700, 800, 900

### Spacing & Layout
- **Max Width**: 1200px for content containers
- **Border Radius**: 
  - Small: 6px
  - Medium: 10px
  - Large: 18px
- **Shadows**: Multiple levels for depth

## 📁 Project Structure

```
kids-learning-website-tailwind/
├── public/
│   ├── images/
│   │   ├── image1.png
│   │   ├── image2.png
│   │   └── image3.png
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   │   └── page.tsx
│   │   └── Footer/
│   │       └── page.tsx
│   ├── pages/
│   │   ├── Login/
│   │   │   └── page.tsx
│   │   ├── Signup/
│   │   │   └── page.tsx
│   │   ├── Dashboard/
│   │   │   └── page.tsx
│   │   ├── Services/
│   │   │   └── page.tsx
│   │   ├── Subjects/
│   │   │   └── page.tsx
│   │   └── Contact/
│   │       └── page.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

## 🔄 Conversion Highlights

### Before (External CSS)
```css
.card {
  display: flex;
  flex-direction: column;
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition);
}
```

### After (Tailwind CSS)
```tsx
<div className="flex flex-col bg-white dark:bg-[#16213E] rounded-[18px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5">
```

## 🌙 Dark Mode

Dark mode is implemented using Tailwind's `dark:` variant and class-based dark mode:

```tsx
// Toggle dark mode
document.documentElement.classList.add('dark');
document.documentElement.classList.remove('dark');
```

## 📱 Responsive Design

All components are fully responsive using Tailwind's responsive prefixes:
- `max-md:` - Mobile devices
- Default - Tablet and desktop

Example:
```tsx
<div className="flex gap-12 max-md:flex-col max-md:gap-7">
```

## 🚀 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## 🧪 Preview Production Build

```bash
npm run preview
```

## 📝 Key Differences from Original

1. **No external CSS files** - All styling is done with Tailwind utility classes
2. **Smaller bundle size** - Tailwind purges unused CSS
3. **Faster development** - No need to write custom CSS
4. **Better maintainability** - Styles are co-located with components
5. **Consistent design** - Utility classes ensure consistency

## 🎓 Learning Outcomes

This project demonstrates:
- ✅ Converting external CSS to Tailwind CSS
- ✅ Using Tailwind with React and TypeScript
- ✅ Implementing responsive design with Tailwind
- ✅ Dark mode with Tailwind
- ✅ Custom animations with Tailwind
- ✅ Form styling with Tailwind
- ✅ Complex layouts (flexbox, grid) with Tailwind

## 📄 License

This project is for educational purposes (Assignment 3).

## 👨‍💻 Author

Created as part of a React learning assignment to demonstrate CSS-to-Tailwind conversion skills.

---

**Note**: This is Assignment 3 - the Tailwind CSS version of the original Kids Learning Website project.
