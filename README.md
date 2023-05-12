# get-all-images-url-code
![image](https://user-images.githubusercontent.com/109471788/236948087-f4e8a738-feab-4c64-b55b-ba780ecc6a67.png)



Steps to get all url of frame images

// open up chrome dev tools (Menu > More tools > Developer tools or by press ctrl + shift + J)
// Go to Network tab, then refresh the page once , wait for images to load 
// (on some sites you may have to scroll down to load more  images in Newtwork tab)
// then right click on any image entry in the network log, select Copy > Copy All as HAR
// open up JS console and write 

var har = [paste_copied_data]

// pasting could take a while of seconds if there's a lot of requests.

// Now paste the following JS code into the console
// copy the output, paste into a text file
// open up a terminal in same directory as text file, then: wget -i [that file]


var imageUrls = [];
har.log.entries.forEach(function (entry) {
  // This step will filter out all URLs except images. If you just want 
  // e.g. just jpg's then check mimeType against "image/jpeg" or "image/png" or "image/webp", etc.
  if (entry.response.content.mimeType.indexOf("image/") !== 0) return;
  imageUrls.push(entry.request.url);
});
console.log(imageUrls.join('\n'));


// process End ======================
