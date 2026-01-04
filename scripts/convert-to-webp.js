import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public');

// Images to convert
const imagesToConvert = [
  'pwa-512x512.png',
  'pwa-192x192.png',
  'profile.png',
  'apple-touch-icon.png',
  'avatars/prof-katie-zhao-0.jpeg',
  'avatars/minzhi-li-1.jpeg'
];

let convertedCount = 0;
let skippedCount = 0;

async function convertToWebP(imagePath) {
  const fullPath = path.join(publicDir, imagePath);

  if (!fs.existsSync(fullPath)) {
    console.log(`⚠ Skipped ${imagePath} (not found)`);
    skippedCount++;
    return;
  }

  const parsedPath = path.parse(fullPath);
  const webpPath = path.join(parsedPath.dir, `${parsedPath.name}.webp`);

  // Skip if WebP already exists and is newer
  if (fs.existsSync(webpPath)) {
    const originalStats = fs.statSync(fullPath);
    const webpStats = fs.statSync(webpPath);
    if (webpStats.mtime > originalStats.mtime) {
      console.log(`⚠ Skipped ${imagePath} (WebP already exists)`);
      skippedCount++;
      return;
    }
  }

  try {
    const originalSize = fs.statSync(fullPath).size;

    await sharp(fullPath)
      .webp({ quality: 85 })
      .toFile(webpPath);

    const webpSize = fs.statSync(webpPath).size;
    const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);

    console.log(`✓ ${imagePath} → ${parsedPath.name}.webp (${(originalSize / 1024).toFixed(1)} KB → ${(webpSize / 1024).toFixed(1)} KB, -${savings}%)`);
    convertedCount++;
  } catch (error) {
    console.error(`✗ Failed to convert ${imagePath}:`, error.message);
  }
}

async function main() {
  console.log('Converting images to WebP...\n');

  for (const imagePath of imagesToConvert) {
    await convertToWebP(imagePath);
  }

  console.log(`\n✓ Converted ${convertedCount} images`);
  console.log(`✓ Skipped ${skippedCount} images`);
}

main().catch(console.error);
