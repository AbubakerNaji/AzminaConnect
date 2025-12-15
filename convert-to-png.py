#!/usr/bin/env python3
"""
SVG to PNG Converter
Converts SVG logo files to PNG format using cairosvg or svglib
"""

import os
import sys

def convert_with_cairosvg(svg_file, png_file, width=None, height=None):
    """Convert SVG to PNG using cairosvg"""
    try:
        import cairosvg
        if width and height:
            cairosvg.svg2png(url=svg_file, write_to=png_file, output_width=width, output_height=height)
        else:
            cairosvg.svg2png(url=svg_file, write_to=png_file)
        print(f"✓ Converted {svg_file} → {png_file}")
        return True
    except ImportError:
        print("cairosvg not installed. Install with: pip install cairosvg")
        return False
    except Exception as e:
        print(f"Error converting {svg_file}: {e}")
        return False

def convert_with_svglib(svg_file, png_file, width=None, height=None):
    """Convert SVG to PNG using svglib and reportlab"""
    try:
        from svglib.svglib import svg2rlg
        from reportlab.graphics import renderPM
        
        drawing = svg2rlg(svg_file)
        if drawing:
            if width and height:
                drawing.width = width
                drawing.height = height
            renderPM.drawToFile(drawing, png_file, fmt='PNG')
            print(f"✓ Converted {svg_file} → {png_file}")
            return True
        return False
    except ImportError:
        print("svglib not installed. Install with: pip install svglib reportlab")
        return False
    except Exception as e:
        print(f"Error converting {svg_file}: {e}")
        return False

def main():
    """Main conversion function"""
    logos = [
        ('logo.svg', 'logo.png', 200, 200),
        ('logo-text.svg', 'logo-text.png', 400, 120),
        ('logo-complete.svg', 'logo-complete.png', 500, 200),
    ]
    
    print("SVG to PNG Converter")
    print("=" * 40)
    
    # Try cairosvg first (better quality)
    success = False
    for svg_file, png_file, width, height in logos:
        if os.path.exists(svg_file):
            if convert_with_cairosvg(svg_file, png_file, width, height):
                success = True
            elif convert_with_svglib(svg_file, png_file, width, height):
                success = True
        else:
            print(f"✗ File not found: {svg_file}")
    
    if not success:
        print("\nNote: To convert SVG to PNG, you need one of these Python packages:")
        print("  - cairosvg (recommended): pip install cairosvg")
        print("  - svglib: pip install svglib reportlab")
        print("\nAlternatively, you can:")
        print("  1. Open the SVG files in a browser and use browser dev tools")
        print("  2. Use online converters like cloudconvert.com")
        print("  3. Use design software like Inkscape or Adobe Illustrator")

if __name__ == '__main__':
    main()

