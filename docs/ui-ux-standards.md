# Prose Class & Typography

The `.prose` class (from Tailwind Typography) is used for rich text content, mainly in blog posts and knowledge base articles (`src/pages/blog/[slug].astro`).

**Customizations:**
- Colors, blockquotes, code, and images are styled for contrast and readability on dark backgrounds.
- Images are responsive, rounded, and have a subtle shadow.
- Blockquotes are visually distinct and accessible.
- List and heading hierarchy is improved for scanability.

**Notes:**
- Only use `.prose` for long-form content. For cards, grids, and service sections, use custom utility classes.
- Test prose styles after Tailwind or plugin updates.
# Web-Backupfailed UI/UX & Code Standards

## Table of Contents
- [General Principles](#general-principles)
- [Layout & Spacing](#layout--spacing)
- [Typography](#typography)
- [Color & Theming](#color--theming)
- [Components](#components)
- [Animation & Interactivity](#animation--interactivity)
- [Accessibility](#accessibility)
- [Code Style](#code-style)
- [Templates](#templates)
- [References](#references)

---

## General Principles
- Prioritize clarity, accessibility, and a modern, professional look.
- Consistency across all pages and components.
- Responsive design: mobile-first, scales up to large screens.

## Layout & Spacing
- Use `max-w-6xl` or `max-w-7xl` for main content containers for a spacious, modern feel.
- Center content with `mx-auto` and use `px-6` or greater for horizontal padding.
- Use `py-12` or more for vertical breathing room.
- Use grid layouts for service cards (e.g., `md:grid-cols-2 lg:grid-cols-3 gap-8`).
- Cards and sections use `rounded-2xl` or `rounded-3xl` for a modern, soft look.

## Typography & Card Design
- Use Inter Variable font for all text (see `globals.css` and `Layout.astro`).
- Headings are bold, large, and use tight tracking.
- Body text is clear and high-contrast.
- Service and blog cards use bold headings, subtle shadows, and gradient borders for visual interest.

## Color & Theming
- Use Tailwind's blue, purple, and complementary color palette.
- Gradients are used for backgrounds and borders (see header, nav, and card borders).
- Cards and main sections use white backgrounds for contrast.
- Use `bg-noise` for subtle texture on page backgrounds (see `globals.css`).

## Components
- Use reusable Astro components for header, footer, CTA buttons, alerts, and navigation.
- All buttons use the `.cta-button` or `.btn` classes for consistency.
- Navigation is handled by `Header.astro` and `Navigation.astro`.
- Footer includes phone number and legal links.
- Hamburger menu and scroll-to-top button are mobile-friendly.

## Animation & Interactivity
- Use Tailwind's transition and hover utilities for interactive effects on cards, buttons, and links.
- Cards and sections use `transition-all`, `hover:scale-105`, and gradient border hovers.
- For modern fade-in/entrance animations, use Intersection Observer to trigger `.fade-in-up-on-scroll` (see `services.astro`).
- Custom keyframes for fade-in-up are defined in-page or in `globals.css`.
- Animations should be subtle, performant, and not distract from content.

## Accessibility
- Ensure color contrast is sufficient for all text and buttons.
- Use semantic HTML and ARIA labels where appropriate.
- Test navigation and forms with keyboard and screen readers.
- Animations should not cause motion sickness; keep durations short and avoid excessive movement.

## Code Style
- Use consistent, modern JavaScript/TypeScript and Astro best practices.
- Prefer utility-first CSS (Tailwind) over custom styles unless necessary.
- Keep components small, focused, and reusable.
- Remove unused or outdated code/components regularly.

## Templates

### Blog Article Card
```astro
<article class="prose max-w-6xl mx-auto px-6 py-12 rounded-2xl shadow-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gradient-to-r from-blue-400 to-purple-500 transition-all duration-500 hover:scale-[1.015] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:border-blue-500">
  <h1 class="text-4xl font-bold mb-4 transition-colors duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500">Title</h1>
  <p class="text-gray-500 mb-4">Date</p>
  <div class="flex flex-wrap gap-2 mb-4">
    <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:text-white hover:scale-110 shadow-sm cursor-pointer">Tag</span>
  </div>
  <!-- Content here -->
</article>
```

#### Attributes Breakdown for Blog Article Card

##### Class Attributes Explained:

1. **`prose`**:
   - Applies Tailwind Typography plugin styles for rich text content, such as headings, paragraphs, lists, and blockquotes.

2. **`max-w-6xl`**:
   - Sets the maximum width of the element to `6xl` (approximately 72rem or 1152px).

3. **`mx-auto`**:
   - Centers the element horizontally by applying `margin-left: auto` and `margin-right: auto`.

4. **`px-6 py-12`**:
   - Adds padding:
     - `px-6`: Horizontal padding of 1.5rem (24px).
     - `py-12`: Vertical padding of 3rem (48px).

5. **`rounded-2xl`**:
   - Applies extra-large rounded corners to the element.

6. **`shadow-2xl`**:
   - Adds a large shadow effect for depth.

7. **`bg-white/80 dark:bg-gray-900/80`**:
   - Sets a semi-transparent background (`bg-white/80`) for light mode and a semi-transparent dark gray background (`dark:bg-gray-900/80`) for dark mode.

8. **`backdrop-blur-md`**:
   - Applies a medium blur effect to the background behind the element.

9. **`border border-gradient-to-r from-blue-400 to-purple-500`**:
   - Adds a border with a gradient transitioning from blue (`from-blue-400`) to purple (`to-purple-500`).

10. **`transition-all duration-500`**:
    - Enables smooth transitions for all properties over 500ms.

11. **`hover:scale-[1.015]`**:
    - Slightly scales the element (1.015 times its original size) on hover.

12. **`hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]`**:
    - Adds a custom shadow effect on hover.

13. **`hover:border-blue-500`**:
    - Changes the border color to blue (`blue-500`) on hover.

---

### Testing and Previewing Changes:

1. **Real-Time Preview**:
   - Use a local development server (`astro dev`) to preview changes in real time. Astro automatically reloads the browser when you save changes.

2. **Temporary Styling**:
   - Use browser developer tools to test styles directly on the rendered HTML. You can modify classes or CSS in the "Elements" tab and see the results instantly.

3. **Staging Environment**:
   - Set up a staging environment separate from production. Deploy changes to staging first to test them before pushing to production.

4. **Online Tools**:
   - Use Tailwind Play (https://play.tailwindcss.com/) to experiment with Tailwind classes in a sandbox environment.

5. **Component Isolation**:
   - Create a separate test page or component in your project to isolate and preview changes without affecting the main site.

### Service Card
```astro
<div class="bg-white p-6 rounded-2xl shadow-2xl border border-gradient-to-r from-blue-400 to-purple-500 transition-all duration-500 hover:scale-[1.015] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:border-blue-500">
  <div class="flex items-center justify-center text-5xl mb-4 transition-transform duration-300 hover:scale-110">Icon</div>
  <h3 class="text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500">Service Title</h3>
  <p class="text-gray-700 transition-colors duration-300 hover:text-blue-700">Service description</p>
</div>
```

### Button
```astro
<button class="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600 transition-all duration-300">Button</button>
```

## References
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Astro Docs](https://docs.astro.build/)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/)

---

> Keep this document up to date as standards evolve. All new components and pages should reference and follow these guidelines.
