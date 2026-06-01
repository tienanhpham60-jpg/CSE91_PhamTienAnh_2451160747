
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        
            const progressBar = entry.target.querySelector('.skill-progress');
            if (progressBar) {
                
                const targetWidth = progressBar.getAttribute('data-width');
                progressBar.style.width = targetWidth;
            }
        }
    });
}, { threshold: 0.2 }); 


document.querySelectorAll('.skill-item').forEach(item => {
    skillObserver.observe(item);
});