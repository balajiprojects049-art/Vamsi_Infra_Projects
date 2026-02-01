# Vamsi Infra Projects - Website

**Professional Road Safety & Road Marking Solutions**

A complete, production-ready React website for Vamsi Infra Projects (VIP), showcasing road safety services, products, and company information.

## 🎯 Project Overview

This website is built for **Vamsi Infra Projects**, a leading provider of road safety and road marking solutions in India. The company specializes in:
- Thermoplastic road marking
- Traffic sign boards
- Crash barriers
- Solar road safety products
- 50+ road safety items

**Tagline:** "Safety First, All Next"

## 🛠️ Tech Stack

- **React 18+** - Modern UI library
- **Vite** - Lightning-fast build tool
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Fully Responsive** - Mobile, tablet, and desktop

## 📁 Project Structure

```
vamsi-infra-website/
├── public/
│   └── vip-logo.svg        # Company logo
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.jsx      # Navigation header
│   │   ├── Footer.jsx      # Site footer
│   │   ├── ScrollToTop.jsx # Auto scroll on route change
│   │   └── BackToTop.jsx   # Back to top button
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Landing page
│   │   ├── About.jsx       # Company information
│   │   ├── Services.jsx    # Services listing
│   │   ├── ServiceDetail.jsx # Individual service pages
│   │   ├── Products.jsx    # Products catalog
│   │   ├── Certifications.jsx # Quality & certifications
│   │   ├── Clients.jsx     # Client information
│   │   └── Contact.jsx     # Contact page with form
│   ├── data/               # Data files
│   │   ├── companyInfo.js  # Company details
│   │   ├── servicesData.js # Services information
│   │   └── productsData.js # Products catalog
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── package.json            # Dependencies
```

## 🎨 Design Features

### Color Palette
- **Safety Orange** (#f97316) - Primary brand color
- **Highway Green** (#22c55e) - Secondary brand color
- **Asphalt Grey** (#475569) - Neutral color
- **White** background for clarity

### Typography
- **Headings:** Outfit (Google Fonts)
- **Body:** Inter (Google Fonts)

### Key Features
- ✅ Modern, professional UI/UX design
- ✅ Smooth page transitions and animations
- ✅ Sticky navigation header
- ✅ Responsive design (mobile-first)
- ✅ SEO-optimized structure
- ✅ Back-to-top button
- ✅ Contact form with validation
- ✅ Google Maps integration
- ✅ Dynamic service detail pages
- ✅ Product filtering and modal view

## 📄 Pages

1. **Home** (`/`) - Hero section, statistics, featured services
2. **About Us** (`/about`) - Company info, mission, vision, methodology
3. **Services** (`/services`) - All services overview
4. **Service Detail** (`/services/:serviceId`) - Individual service pages
5. **Products** (`/products`) - Filterable product catalog
6. **Quality & Certifications** (`/certifications`) - Testing parameters, certifications
7. **Clients** (`/clients`) - Client logos and success metrics
8. **Contact** (`/contact`) - Contact form and map

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to project directory:
```bash
cd vamsi-infra-website
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open browser and visit:
```
http://localhost:5173
```

## 📦 Build for Production

```bash
npm run build
```

The production files will be in the `dist/` folder.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist/` folder to Netlify

## 📞 Contact Information

**Vamsi Infra Projects**

- **Phone:** 8297457999
- **Email:** vamsiinfraprojects@gmail.com
- **Address:**  
  NO:5, Gosala Complex,  
  Opp. RTC Bus Stand, Main Road,  
  Sattenapalli – 522403,  
  Guntur (Dt), Andhra Pradesh

**Business Hours:**
- Monday–Friday: 9:00 AM – 6:00 PM
- Saturday: 9:00 AM – 6:00 PM
- Sunday: 10:00 AM – 3:00 PM

**Social Media:**
- Instagram: [@vamsiinfraprojects](https://www.instagram.com/vamsiinfraprojects)

## 🛡️ Quality Standards

All products and services comply with:
- MoST (Ministry of Surface Transport)
- IRC (Indian Roads Congress)
- MoRTH (Ministry of Road Transport & Highways)
- ISO 9001:2015

## 📝 License

© 2026 Vamsi Infra Projects. All rights reserved.

---

**Built with ❤️ for Road Safety in India**
