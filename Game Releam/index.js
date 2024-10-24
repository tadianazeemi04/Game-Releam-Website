

document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.item');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    items.forEach(item => {
        observer.observe(item);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll('video');

    function checkVideoVisibility() {
        videos.forEach(video => {
            const rect = video.getBoundingClientRect();
            const isVisible = (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight));
            
            if (isVisible) {
                video.play().catch(error => {
                    console.error('Error attempting to play', error);
                });
            } else {
                video.pause();
            }
        });
    }

    document.addEventListener('scroll', checkVideoVisibility);
    window.addEventListener('resize', checkVideoVisibility);
    window.addEventListener('load', checkVideoVisibility);

    checkVideoVisibility();
});

document.getElementById('subscribe-form').onsubmit = function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;

    document.getElementById('subscribe-form').style.display = 'none';
    document.getElementById('confirmation-message').style.display = 'block';
};