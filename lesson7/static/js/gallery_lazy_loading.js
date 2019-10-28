var observers = [];

startup = () => {
    //console.log(1);
    let observer_options = {
        root: null,
        rootMargin: '0px',
        threshold: [0.0, 1.0] 
    };

    let gallery_images = document.getElementById('gallery-images');
    console.log(gallery_images);
    for (let i=0; i<gallery_images.childNodes.length; i++) {
        let img = gallery_images.childNodes[i];
        
        if (img.nodeType == 1) {
            let img_id = 'img-' + (i+1);
            img.childNodes[1].id = img_id;
            observers[i] = new IntersectionObserver(intersectionCallback, observer_options);
            observers[i].observe(document.querySelector('#' + img_id));
        }
    }
}

console.log(observers);

intersectionCallback = (entries) => {
    entries.forEach((entry) => {
        //console.log(entry);
        let box = entry.target;
        let visible_pct = (Math.floor(entry.intersectionRatio * 100)) + '%';
        box.innerHTML = visible_pct + ' ' + box.id;
        //console.log(visible_pct * 100);
        if ((entry.intersectionRatio * 100) == 100) {
            entry.target.setAttribute('src', entry.target.getAttribute('data-src'));
        } 
    });
}  

startup();