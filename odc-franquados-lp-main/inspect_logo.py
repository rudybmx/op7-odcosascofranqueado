from PIL import Image
from collections import Counter

def rgb_to_hex(rgb):
    return '#{:02x}{:02x}{:02x}'.format(rgb[0], rgb[1], rgb[2])

try:
    im = Image.open("public/images/logo.png")
    im = im.convert("RGB")
    pixels = list(im.getdata())
    
    colored_pixels = []
    for r, g, b in pixels:
        if r > 230 and g > 230 and b > 230:
            continue
        if r < 30 and g < 30 and b < 30:
            continue
        colored_pixels.append((r, g, b))
        
    counter = Counter(colored_pixels)
    most_common = counter.most_common(20)
    
    with open("logo_colors.txt", "w") as f:
        f.write("Most common colors:\n")
        for rgb, count in most_common:
            hex_val = rgb_to_hex(rgb)
            f.write(f"RGB: {rgb}, HEX: {hex_val}, Count: {count}\n")
except Exception as e:
    with open("logo_colors.txt", "w") as f:
        f.write(f"Error: {str(e)}\n")
