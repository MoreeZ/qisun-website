import os
import sys
from PIL import Image
import argparse

def convert_to_webp(source_path, quality=80):
    """Convert an image to WebP format with specified quality"""
    try:
        # Open the image
        image = Image.open(source_path)
        
        # Create WebP filename (same path but with .webp extension)
        file_name, _ = os.path.splitext(source_path)
        webp_path = f"{file_name}.webp"
        
        # Convert and save as WebP
        image.save(webp_path, 'webp', quality=quality)
        
        # Get file sizes for comparison
        original_size = os.path.getsize(source_path) / 1024  # KB
        webp_size = os.path.getsize(webp_path) / 1024  # KB
        
        # Calculate size reduction
        reduction = (1 - (webp_size / original_size)) * 100
        
        print(f"Converted: {source_path}")
        print(f"  Original: {original_size:.2f} KB")
        print(f"  WebP: {webp_size:.2f} KB")
        print(f"  Reduction: {reduction:.2f}%")
        
        return True
    except Exception as e:
        print(f"Error converting {source_path}: {e}")
        return False

def process_directory(directory_path, quality=80, delete_original=False):
    """Process all images in a directory recursively"""
    # Track statistics
    total_files = 0
    converted_files = 0
    total_original_size = 0
    total_webp_size = 0
    
    # Walk through all directories and files
    for root, _, files in os.walk(directory_path):
        for file in files:
            # Check if file is an image with supported extension
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                file_path = os.path.join(root, file)
                
                # Get original size before conversion
                original_size = os.path.getsize(file_path) / 1024  # KB
                total_original_size += original_size
                total_files += 1
                
                # Convert the file
                if convert_to_webp(file_path, quality):
                    converted_files += 1
                    
                    # Get WebP size after conversion
                    webp_path = os.path.splitext(file_path)[0] + '.webp'
                    webp_size = os.path.getsize(webp_path) / 1024  # KB
                    total_webp_size += webp_size
                    
                    # Delete original if requested
                    if delete_original:
                        os.remove(file_path)
                        print(f"  Original file deleted")
    
    # Print summary
    if total_files > 0:
        overall_reduction = (1 - (total_webp_size / total_original_size)) * 100
        print("\nConversion Summary:")
        print(f"  Total images processed: {total_files}")
        print(f"  Successfully converted: {converted_files}")
        print(f"  Total original size: {total_original_size:.2f} KB")
        print(f"  Total WebP size: {total_webp_size:.2f} KB")
        print(f"  Overall reduction: {overall_reduction:.2f}%")
    else:
        print("No images found to convert.")

def main():
    parser = argparse.ArgumentParser(description='Convert images to WebP format recursively.')
    parser.add_argument('directory', nargs='?', default='src/assets/images', 
                        help='Directory to process (default: src/assets/images)')
    parser.add_argument('-q', '--quality', type=int, default=80, 
                        help='WebP quality (0-100, default: 80)')
    parser.add_argument('-d', '--delete', action='store_true', 
                        help='Delete original files after conversion')
    
    args = parser.parse_args()
    
    # Check if directory exists
    if not os.path.isdir(args.directory):
        print(f"Error: Directory '{args.directory}' not found.")
        sys.exit(1)
    
    print(f"Processing directory: {args.directory}")
    print(f"WebP quality: {args.quality}")
    print(f"Delete originals: {'Yes' if args.delete else 'No'}")
    print("-" * 50)
    
    # Process the directory
    process_directory(args.directory, args.quality, args.delete)

if __name__ == "__main__":
    main()
