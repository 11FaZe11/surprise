# Romantic Surprise ✨

![Romantic Surprise Banner](https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1200&h=300&q=80)

## 💖 Overview

A beautiful Next.js application featuring delightful animations to create a romantic surprise for someone special. Watch as blossoming flowers appear, hearts float gently across the screen, and flower petals fall gracefully to create a magical experience.

## ✨ Features

- **Enchanting Animations**
  - 🌸 Blossoming flowers that appear across the screen
  - 💕 Floating hearts that drift gently upward
  - 🌿 Falling petals that create a romantic atmosphere
- **Beautiful UI** - Clean, responsive design with soft color palette
- **Interactive Experience** - Reveal animation with a satisfying button press
- **Mobile-friendly** - Looks great on all devices with haptic feedback on mobile
- **Dark/Light Mode** - Seamless theme switching for any time of day

## 🚀 Live Demo

[View Live Demo](https://romantic-surprise.vercel.app) _(replace with your actual deployment URL)_

## 📦 Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible UI components
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components built on Radix
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icon set

## 🛠️ Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/romantic-surprise.git
   cd romantic-surprise
   ```

2. Install dependencies

   ```bash
   pnpm install
   ```

3. Run the development server

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📸 Screenshots

<div style="display: flex; gap: 20px; flex-wrap: wrap; margin: 20px 0;">
  <img src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&h=400&q=80" width="45%" alt="Welcome Screen" />
  <img src="https://images.unsplash.com/photo-1522583826783-55f785a2f3f9?auto=format&fit=crop&w=600&h=400&q=80" width="45%" alt="Animation in Progress" />
  <img src="https://images.unsplash.com/photo-1563170423-450a8ab3bcda?auto=format&fit=crop&w=600&h=400&q=80" width="45%" alt="Surprise Revealed" />
  <img src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&h=400&q=80" width="45%" alt="Message Display" />
</div>

## 🎮 Usage

```tsx
// Example of using the Blossoming Flowers component
import BlossomingFlowers from "@/components/blossoming-flowers";

export default function HomePage() {
  return (
    <main className="min-h-screen relative">
      <BlossomingFlowers count={15} />
      <div className="container mx-auto p-4">{/* Your content here */}</div>
    </main>
  );
}
```

## ✨ Animation Components

### Blossoming Flowers

Displays flower emojis that grow and bloom across the screen

```tsx
<BlossomingFlowers count={10} />
```

### Floating Hearts

Shows hearts that float upward with a gentle bobbing motion

```tsx
<FloatingHearts intensity="medium" />
```

### Falling Petals

Creates a gentle shower of flower petals falling from the top of the screen

```tsx
<FallingPetals density={20} />
```

## 🎨 Customization

You can customize the appearance and behavior of the animations:

- **Blossoming Flowers**: Adjust count, size, and emojis used
- **Floating Hearts**: Change intensity (low, medium, high) and colors
- **Falling Petals**: Modify density, speed, and petal types

## 📄 License

MIT © Your Name

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/romantic-surprise/issues).

## 👏 Acknowledgements

- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Unsplash](https://unsplash.com/) for the beautiful stock images
- [Tailwind CSS](https://tailwindcss.com/) for making styling a breeze

---

<p align="center">
  Made with 💖 and lots of ✨ magic ✨<br>
  <img src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
</p>


## 🚀 Live Preview

[Click here to see the live preview!](https://gehad-is-the-best.vercel.app/)
