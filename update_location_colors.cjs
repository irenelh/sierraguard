const fs = require('fs');
const path = require('path');

const files = [
    "client/src/components/LocationPage.tsx",
    "client/src/pages/BarriosPage.tsx",
    "client/src/pages/LocationPageRoute.tsx"
];

files.forEach(file => {
    const filePath = path.resolve(file);
    if (!fs.existsSync(filePath)) {
        console.log(`Skipping ${filePath} (not found)`);
        return;
    }
    
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content;
        
        // Replace custom hex #1d4620 with emerald-900
        newContent = newContent.replace(/bg-\[#1d4620\]/g, 'bg-emerald-900');
        newContent = newContent.replace(/text-\[#1d4620\]/g, 'text-emerald-900');
        newContent = newContent.replace(/border-\[#1d4620\]/g, 'border-emerald-900');
        
        // Replace darker hover hex #153316 with emerald-950
        newContent = newContent.replace(/hover:bg-\[#153316\]/g, 'hover:bg-emerald-950');
        
        // Ensure any remaining green- classes are replaced (just in case)
        newContent = newContent.replace(/(text|bg|border|ring|shadow|from|to|via|decoration)-green-/g, '$1-emerald-');

        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`Updated ${filePath}`);
        } else {
            console.log(`No changes in ${filePath}`);
        }
    } catch (e) {
        console.error(`Error processing ${filePath}: ${e.message}`);
    }
});
