# WEST Drilling Website

Modern, responsive website for WEST Drilling - Geotechnical and Environmental Drilling Services.

## Features

- **Fully Responsive Design** - Mobile-first approach with breakpoints for all device sizes
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Accessible** - WCAG 2.1 AA compliant with proper ARIA labels and keyboard navigation
- **Fast Loading** - Optimized CSS, lazy-loaded images, minimal JavaScript
- **Form Validation** - Real-time form validation with user feedback
- **Mobile Navigation** - Hamburger menu for mobile devices

## File Structure

```
/
├── index.html              # Homepage
├── services.html           # Services page
├── qualifications.html     # Qualifications page
├── equipment.html          # Equipment page
├── our_drillers.html       # Our Drillers page
├── careers.html            # Careers page
├── request_a_quote.html    # Request a Quote page
├── links.html              # Links page
├── contact_us.html         # Contact Us page
├── waterwell.html          # Water Well Report page
├── plugging_report.html    # Plugging Report page
├── css/
│   ├── variables.css      # CSS custom properties
│   ├── main.css           # Main stylesheet
│   └── responsive.css     # Responsive media queries
├── js/
│   ├── main.js            # Navigation and mobile menu
│   └── forms.js           # Form validation
└── images/                # Image assets
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Setup

1. Place all files in your web server directory
2. Add images to the `images/` directory
3. Update the Google Maps embed URL in `contact_us.html` with your actual location coordinates
4. Test all forms and functionality

## Customization

### Colors

Edit `css/variables.css` to customize the color scheme:

- `--color-primary`: Main brand color
- `--color-secondary`: Secondary/CTA color
- `--color-accent`: Accent color

### Typography

Font sizes and families can be adjusted in `css/variables.css`.

## Notes

- Forms currently show success messages but don't actually submit (client-side only)
- Google Maps embed in contact page needs actual coordinates
- Image paths reference `images/drillrig2x.jpg` - ensure this file exists or update the path

## License

Copyright 2026 WEST Drilling. All Rights Reserved.
