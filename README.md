# Logo Marquee Section

A responsive logo marquee section built as part of the [GreatFrontEnd Projects](https://www.greatfrontend.com/projects/challenges/logo-marquee-section) challenge series.

## Live Site

[Logo Marquee Section](https://logo-marquee-section-fawn.vercel.app/)

## Challenge

This project is part of a GreatFrontEnd challenge that focuses on implementing a seamless infinite scrolling logo marquee.
The core challenge is achieving a seamless loop: three instances of the same logo strip animate in sync so that as one strip exits the viewport, the next one covers the empty space instantly, creating the illusion of infinite scrolling.

## Features

- Seamless infinite marquee loop via `@keyframes` and `translateX`
- Custom Tailwind v4 animation registered with `@theme` and `@utility` directives
- Pause on hover via Tailwind's `group` and `group-hover:animate-pause` pattern
- Care for A11y — semantic HTML, meaningful `alt` attributes on all logos, duplicate strips marked `aria-hidden="true"` so screen readers only announce the logo list once

## Stack

- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Vite** — No SSR or complex routing needed here — Vite is the straightforward choice.
- **clsx** + **tailwind-merge** — To prevent CSS precedence issues.

## Project Structure

```
src/
├── images/          # Logo assets (.webp)
├── styles/
│   └── global.css   # Tailwind imports, @theme, @utility, global styles
└── App.tsx          # LogoStripe component and App layout
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
