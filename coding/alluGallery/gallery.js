var all_tags = ['sampo', 'seela', 'beer', 'allan'];

//TODO 1: Gather these image names just by walking through the directory. Node.js time?
all_images = ['sampo.jpg','beer.jpg','allan.jpg','seela.jpg','seela_sampo.jpg']

//TODO 2: Allow user to add and remove tags to search for.


refreshImages = function() {
    //Clear all images
    selected_tags =[];
    var myNode = document.getElementById("images");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

    // Which checkboxes are checked?
    for (i = 0; i < all_tags.length; i++){
        if (document.getElementById(all_tags[i] + '-checkbox').checked) {
            selected_tags.push(all_tags[i])
        }
    }
    
    // Match selected tags to images
    displayed_images = []
    for (i = 0; i < selected_tags.length; i++){
        for (no = 0; no < all_images.length; no++){
            if (all_images[no].includes(selected_tags[i]) && displayed_images.includes(all_images[no]) === false) {
                // Update UI to include each image
                var img = document.createElement('span');
                img.innerHTML = '<img src="media/' + all_images[no] + '" class="page-image"></img>';
                document.getElementById('images').appendChild(img)
                displayed_images.push(all_images[no]);
            }
        }
    }
}

document.getElementById('sampo-checkbox').addEventListener('click', refreshImages);
document.getElementById('seela-checkbox').addEventListener('click', refreshImages);
document.getElementById('beer-checkbox').addEventListener('click', refreshImages);
document.getElementById('allan-checkbox').addEventListener('click', refreshImages);