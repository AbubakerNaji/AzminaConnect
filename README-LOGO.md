# Logo Files

This directory contains the Prime Era logo in multiple formats.

## Files Created

1. **logo.svg** - Icon only (hourglass with pixel grid)
2. **logo-text.svg** - Text only (company name in Arabic)
3. **logo-complete.svg** - Complete logo (icon + text)

## Converting to PNG

### Method 1: Using Python (Recommended)

Install the required library:
```bash
pip3 install cairosvg
```

Then run:
```bash
python3 convert-to-png.py
```

### Method 2: Using Browser

1. Open `convert-svg-to-png.html` in your web browser
2. Click the conversion buttons for each logo
3. PNG files will be downloaded automatically

### Method 3: Online Converter

1. Visit https://cloudconvert.com/svg-to-png
2. Upload the SVG files
3. Set the desired dimensions:
   - logo.svg: 200x200px
   - logo-text.svg: 400x120px
   - logo-complete.svg: 500x200px
4. Download the converted PNG files

### Method 4: Using Design Software

- **Inkscape** (Free): File → Export PNG
- **Adobe Illustrator**: File → Export → Export As → PNG
- **Figma**: Export as PNG

## Logo Specifications

- **Colors**: Cyber Cyan (#00ffff), Silver (#c0c0c0), Black (#000000)
- **Style**: Futuristic, high-tech aesthetic
- **Design**: Hourglass morphing into digital pixels
- **Company Name**: شركة الازمنة الاولى للاتصالات وتقنية المعلومات

## Usage in HTML

To use the logo in your HTML, you can reference the SVG directly:

```html
<img src="logo-complete.svg" alt="شركة الازمنة الاولى للاتصالات وتقنية المعلومات" />
```

Or use the PNG version (after conversion):

```html
<img src="logo-complete.png" alt="شركة الازمنة الاولى للاتصالات وتقنية المعلومات" />
```

