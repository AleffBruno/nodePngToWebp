const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const fs = require('fs');
 

let corePathName = "C:\/ionic\/android-whatsapp-sticker\/pngImages\/indiretaspaquera\/";

let allItems = fs.readdirSync(corePathName); //get all items inside path

allItems.forEach(item => {
    execFile(cwebp, [
        `${corePathName}${item}`,
        '-o',
        `${corePathName}${item.replace("png", "webp")}`
    ], err => {
        if (err) {
            throw err;
        }
     
        console.log('Image is converted!');
    });
})


