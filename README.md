# IV Therapy reference recreation

Responsive, buildless HTML/CSS/JavaScript website based on the supplied 774 × 2031 screenshot.

The website includes the home page (`dist/index.html`), a dedicated About Us page (`dist/about.html`), and a Contact Us page (`dist/contact.html`). Header and footer links connect the three pages. About Us introduces the doctor, practice values and family services. Contact Us includes call/email/directions links, opening hours and appointment controls.

## Open or run

Open `dist/index.html` in a browser, or run `node serve.cjs` and open http://127.0.0.1:4173.

## Visual implementation

Every section is built with real HTML and CSS. Headings, paragraphs, buttons, the handwritten hero note, logo text, doctor feature list, appointment banner, map label, reviews and footer are independently editable elements. There are no screenshot-based sections, invisible click targets or image-based headings.

The hero, doctor portrait and Cape Town background are standalone photographs recreated from the supplied reference with image generation; they contain no page copy, buttons or icons. Service photographs are separate assets extracted from the reference. The logo mark is a custom vector recreation with real HTML lettering. The location illustration is drawn in CSS and links to Google Maps; it is a decorative street-map illustration rather than a surveyed map.

All interface and medical icons use locally hosted Font Awesome Free 6.7.2 SVG paths from the official FortAwesome repository. Its license is included at `dist/assets/fontawesome/LICENSE.txt`. Roboto and Caveat fonts are hosted locally. The original website source and original font files were not supplied.

## Interactions

- Desktop and mobile section navigation.
- Appointment dialog with call and email links; no scheduling backend.
- Service detail dialogs, patient information and FAQs.
- Telephone, email and Google Maps links from the reference.
- Keyboard-accessible dialogs with Escape, focus restoration and click-outside dismissal.

The original website source, destination URLs, additional reviews, social profile URLs and approved legal pages were not provided. Related dialogs state those limits without inventing additional practice information. Confirm reference contact details before using this as a real practice website.

## Edit

`dist/index.html`, `dist/about.html`, `dist/contact.html`: page structure and content.
`dist/style.css`: layout, colours and responsive styles.
`dist/app.js`: service descriptions and dialog behaviour.
`dist/assets/`: standalone photographic assets, local fonts, and Font Awesome SVGs and license.

No dependencies or build step are required.
