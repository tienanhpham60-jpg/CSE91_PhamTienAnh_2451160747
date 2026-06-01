const gallery = document.getElementById('gallery');
const loader = document.getElementById('loader');
let page = 1;


const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        loadImages();
    }
}, { threshold: 0.1 });

observer.observe(loader);

async function loadImages() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=20`);
    const data = await res.json();
    
    data.forEach(photo => {
        const img = document.createElement('img');
        img.dataset.src = photo.url; 
        img.className = 'gallery-item';
        img.onclick = () => openLightbox(photo.url);
        
       
        const imgObserver = new IntersectionObserver((entries, self) => {
            if (entries[0].isIntersecting) {
                img.src = img.dataset.src;
                self.unobserve(img);
            }
        });
        imgObserver.observe(img);
        gallery.appendChild(img);
    });
    page++;
}

function openLightbox(url) {
    const modal = document.getElementById('lightbox');
    document.getElementById('lightbox-img').src = url;
    modal.classList.remove('hidden');
    modal.onclick = () => modal.classList.add('hidden');
}

loadImages();