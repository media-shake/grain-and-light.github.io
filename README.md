# GRAIN & LIGHT
### Analog Photography Supply · Film Essentials · Thoughtful Accessories

**GRAIN & LIGHT** is a premium storefront concept for people who love the tactile ritual of analog photography. Inspired by film grain, natural light, classic camera design, and slow creative practice, this responsive static website presents a curated selection of film, cameras, lenses, bags, and darkroom essentials.

> Make room for the moment.

## Highlights

- Distinctive editorial visual identity with charcoal, cream, and warm orange accents.
- Responsive desktop, tablet, and mobile layouts.
- Product catalog with live search, category filters, and sorting.
- Interactive shopping bag with quantity controls, subtotal calculation, and browser-local persistence.
- Newsletter demo with clear feedback and no data submission.
- Support section with email and phone links.
- Locally stored product and hero imagery; no remote product image dependencies.
- Lightweight HTML, CSS, and vanilla JavaScript; no framework or build step required.
- Semantic landmarks, accessible labels, keyboard focus styles, and reduced reliance on color alone.
- GitHub Pages-friendly relative asset paths.

## Product Categories

- 35mm film
- Film cameras
- Lenses
- Camera bags
- Accessories and tripods
- Darkroom supplies

The current catalog is a visual/demo assortment. Verify stock, condition, compatibility, pricing, and licensing before offering products for real sale.

## Technology

| Technology | Purpose |
|---|---|
| HTML5 | Semantic structure and content |
| CSS3 | Responsive layout and visual system |
| Vanilla JavaScript | Search, filtering, sorting, cart, and demo forms |
| LocalStorage | Optional persistence for the demo shopping bag |
| GitHub | Source hosting and version control |
| GitHub Pages | Static site deployment |

No package installation or build step is required.

## Project Structure

```text
grain-and-light/
├── index.html
├── README.md
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── assets/
    └── images/
        ├── hero-film-camera.jpg
        ├── products.json
        ├── brand/
        │   └── grain-and-light-logo.svg
        └── products/
            ├── product-01.jpg
            ├── product-02.jpg
            ├── product-03.jpg
            ├── product-04.jpg
            ├── product-05.jpg
            ├── product-06.jpg
            ├── product-07.jpg
            └── product-08.jpg
```

## Run Locally

1. Clone or download the repository.
2. Open `index.html` in a modern browser.

Alternatively, start a local server from the project directory:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy to GitHub Pages

1. Push the project files to the `main` branch.
2. Open repository **Settings → Pages**.
3. Select the `main` branch and `/ (root)` as the deployment source.
4. Save and wait for the deployment to finish.
5. Test the published page, especially all asset paths and product images.

Expected URL when the repository owner is `media-shake`:

`https://media-shake.github.io/grain-and-light/`

GitHub Pages deployment must be enabled in repository settings before this URL will serve the site.

## Storefront Functionality

### Working in this demo
- Search products by name, category, tag, or description.
- Filter by product category.
- Sort by featured order, price, or name.
- Add products to the bag and change quantities.
- Remove items and calculate a subtotal.
- Save the bag in browser local storage when supported.
- Use the mobile navigation.
- Submit the newsletter form for local feedback only.

### Not connected
- Checkout and payment processing.
- Real inventory, order processing, shipping rates, or tax calculation.
- Newsletter provider or email collection.
- Customer accounts, authentication, or backend services.
- Live stock, reviews, or verified product ratings.

The checkout button intentionally displays a demo message rather than pretending to accept payments. No newsletter address is transmitted or stored by the form.

## Support Contact

The site includes a support section and clickable email/phone links. These are **placeholder details** and must be replaced before public commercial use:

- Email: `support@grainandlight.example`
- Phone: `+1 (555) 014-2026`

The `.example` domain is reserved for examples and is not a live support mailbox. The phone number is illustrative, not a verified business number.

## Image and Asset Standards

- Product images are stored locally and assigned individually.
- Images are compressed for practical web delivery.
- The brand logo is a lightweight SVG.
- Use only original assets or images with appropriate commercial licenses.
- Before commercial launch, replace any concept imagery with verified product photography and review every image for accuracy, cropping, and rights.

## Accessibility and Performance

The project uses semantic HTML, descriptive image alternatives, labeled form controls, visible focus indicators, responsive layouts, and relative asset references. Product images below the fold use lazy loading. External font loading is optional; system fallback fonts are provided.

Before launch, test keyboard navigation, contrast, mobile widths, browser console errors, image loading, and the site on the actual GitHub Pages URL.

## Privacy and Security

This is a static demo. It does not provide customer accounts, payment processing, or server-side data storage. The shopping bag may be stored locally in the visitor's browser. Do not commit secrets, API keys, customer data, or payment credentials to this public repository.

## Brand Information

| Field | Details |
|---|---|
| Brand | GRAIN & LIGHT |
| Industry | Analog photography and accessories |
| Audience | Film photographers, enthusiasts, collectors, and creatives |
| Style | Editorial, tactile, vintage-inspired, premium |
| Repository | `grain-and-light` |
| Status | In development / storefront demo |
| Example location | Portland, OR 97205 |

The location above is illustrative and does not represent a verified physical shop.

## Roadmap

- [ ] Replace demo imagery with individually verified, licensed product photos.
- [ ] Replace support placeholders with verified business contact details.
- [ ] Confirm product specifications, prices, and availability.
- [ ] Add a real ecommerce backend and secure checkout if required.
- [ ] Connect newsletter signup to a compliant email service.
- [ ] Perform accessibility, responsive, and cross-browser testing.
- [ ] Test deployment and all links on GitHub Pages.

## License

No license is included. Unless a license is added, reuse and redistribution are not automatically authorized. Confirm the rights to all included assets before commercial use.

## Copyright

© 2026 GRAIN & LIGHT. All rights reserved.

*Built for the art of analog photography, one frame at a time.*
