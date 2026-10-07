from PIL import Image, ImageChops

def trim(im):
    # The logo has a white background. Let's find the bounding box of non-white pixels.
    # To be safe, we can compare with a solid white image.
    bg = Image.new("RGB", im.size, (255, 255, 255))
    # Convert image to RGB for comparison
    im_rgb = im.convert("RGB")
    diff = ImageChops.difference(im_rgb, bg)
    # Get bounding box of the difference
    bbox = diff.getbbox()
    if bbox:
        # Add a small padding (e.g., 10px) around the cropped area
        padding = 15
        left = max(0, bbox[0] - padding)
        top = max(0, bbox[1] - padding)
        right = min(im.size[0], bbox[2] + padding)
        bottom = min(im.size[1], bbox[3] + padding)
        return im.crop((left, top, right, bottom))
    return im

try:
    im = Image.open("public/images/logo.png")
    cropped = trim(im)
    cropped.save("public/images/logo.png")
    print("Python: Logo cropped successfully!")
except Exception as e:
    print("Python Error:", str(e))
