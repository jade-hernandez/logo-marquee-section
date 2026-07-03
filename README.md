# Logo Marquee Section

A responsive logo marquee section built as part of the [GreatFrontEnd Projects](https://www.greatfrontend.com/projects/challenges/logo-marquee-section) challenge series.

## Live Site

[Logo Marquee Section](https://logo-marquee-section-fawn.vercel.app/)

## Challenge

This is a GreatFrontEnd Projects challenge focused on building an infinitely scrolling logo strip with pure CSS. The core technical requirement is looping three copies of the same logo strip so that as one exits the viewport, the next is already in position, with no visible seam or jump at the loop boundary.

## Features

- **Infinite marquee loop** — a single `@keyframes` animation translates three duplicated `LogoStripe` instances so the strip repeats without a visible reset.
- **Custom Tailwind v4 animation** — registered through `@theme` (the keyframes) and `@utility` (the pause state) instead of arbitrary values.
- **Hover-to-pause** — Tailwind's `group` and `group-hover:animate-pause` pattern stops the animation on hover with no JS or event listeners.
- **Reduced-motion support** — a `prefers-reduced-motion` media query pauses the animation for users who have it enabled.
- **Care for A11y** — semantic HTML, ARIA attributes, WAI-ARIA patterns.

## Stack

- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Vite** — No SSR or complex routing needed here — Vite is the straightforward choice.
- **clsx** + **tailwind-merge** — Conditional class merging without specificity conflicts.

## Project Structure

```
src/
├── images/          # Logo assets (.webp)
├── lib/
│   └── cn.ts         # clsx + tailwind-merge className helper
├── styles/
│   └── global.css   # Tailwind v4 imports, @theme/@utility marquee animation, reduced-motion handling
├── App.tsx           # LogoStripe component and page layout
└── main.tsx          # React root render entry point
```

## Getting Started

```bash
pnpm install  # install dependencies
pnpm dev      # start development server
pnpm lint     # run linters
pnpm format   # run code formatter
pnpm build    # build for production
```

## Code Conventions

- **Named exports** via `export { }` at the bottom of each file.
- **`type`** over `interface` for all type definitions.
- **kebab-case** for everything non-React.
- **camelCase** for hooks.
- **PascalCase** for component files.
