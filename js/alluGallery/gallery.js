var all_tags = ['sampo', 'seela', 'beer', 'allan'];
selected_tags =[];

//TODO 3: Gather these image names just by walking through the directory.
all_images = ['sampo.jpg','beer.jpg','allan.jpg','seela.jpg']

//TODO 2: Run this code whenever any radiobutton is clicked. And then refresh the page contents based on selected_tags
for (i = 0; i < all_tags.length; i++){
    if (document.getElementById(all_tags[i] + '-checkbox').checked) {
        selected_tags.push(all_tags[i])
    }
}

for (i = 0; i < selected_tags.length; i++){
    for (no = 0; no < all_images.length; no++){
        if (all_images[no].includes(selected_tags[i])) {
            console.log('Include image: ' + all_images[no]);
        // TODO 1: Update UI to include the image
        }
    }
     
}