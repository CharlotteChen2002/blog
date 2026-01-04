import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the friends.json file
const friendsPath = path.join(__dirname, '../src/jsons/friends.json');
const friends = JSON.parse(fs.readFileSync(friendsPath, 'utf8'));

// Create avatars directory if it doesn't exist
const avatarsDir = path.join(__dirname, '../public/avatars');
if (!fs.existsSync(avatarsDir)) {
  fs.mkdirSync(avatarsDir, { recursive: true });
}

let savedCount = 0;
let skippedCount = 0;

// Process each friend
const updatedFriends = friends.map((friend, index) => {
  if (friend.avatar && friend.avatar.startsWith('data:image/')) {
    // Extract the base64 data
    const matches = friend.avatar.match(/^data:image\/(\w+);base64,(.+)$/);
    if (matches) {
      const ext = matches[1]; // jpeg, png, etc
      const base64Data = matches[2];

      // Create a safe filename from the friend's name
      const safeName = friend.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');

      const filename = `${safeName}-${index}.${ext}`;
      const filepath = path.join(avatarsDir, filename);

      // Write the image file
      fs.writeFileSync(filepath, Buffer.from(base64Data, 'base64'));
      savedCount++;

      // Update the avatar path
      return {
        ...friend,
        avatar: `/avatars/${filename}`
      };
    }
  }

  skippedCount++;
  return friend;
});

// Write the updated friends.json
fs.writeFileSync(friendsPath, JSON.stringify(updatedFriends, null, 2));

console.log(`✓ Extracted ${savedCount} avatar images`);
console.log(`✓ Skipped ${skippedCount} entries (no base64 data)`);
console.log(`✓ Updated ${friendsPath}`);
console.log(`✓ Images saved to ${avatarsDir}`);
