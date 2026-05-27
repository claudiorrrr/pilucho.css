# pilucho.css

A classless CSS framework for semantic HTML. Drop it in, write clean markup, and get a good-looking page with zero classes.

**[See every styled element →](https://claudiorrrr.github.io/pilucho.css/test.html)**

## Usage

Add the stylesheet to your HTML:

```html
<link rel="stylesheet" href="pilucho.css">
```

Then write semantic HTML — no classes needed:

```html
<body>
  <header>
    <nav>
      <a href="/"><strong>My Site</strong></a>
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/blog">Blog</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <h1>Welcome</h1>
    <p>Just write HTML.</p>
  </main>

  <footer>
    <p>Footer content here.</p>
  </footer>
</body>
```

## What's styled

- Typography (headings, paragraphs, lists, links)
- Navigation (`header > nav`)
- Layout (centered content grid)
- Code (`pre`, `code`, `kbd`)
- Blockquotes with citation
- Tables (striped rows)
- Forms (inputs, buttons, selects, checkboxes, radios)
- Semantic elements (`article`, `section`, `details`, `aside`, `dialog`)
- Images and figures
- Miscellaneous (`hr`, `mark`, `progress`, `abbr`)

## Customization

Override CSS custom properties to theme it:

```css
:root {
  --bg: #fafafa;
  --text: #333;
  --accent: #0055ff;
  --accent-hover: #0033cc;
  --font-sans: "Inter", sans-serif;
}
```

## Optional JS

For interactive ARIA patterns (accordion, toggle buttons, tabs with keyboard nav), include the optional companion:

```html
<script src="pilucho.js" defer></script>
```

It wires up:

- `aria-expanded` → toggles the attribute + flips the `hidden` state of the `aria-controls` target
- `aria-pressed` → toggles the attribute on click
- `role="tab"` → click to select, ← → arrow keys to navigate the tablist

~1KB unminified. Zero dependencies. CSS-only patterns (`aria-current`, `aria-busy`, etc.) need no JS.

## Development

```bash
npm run dev     # Serve locally
npm run build   # Minify
```

## License

MIT
