document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const home = document.getElementById('main-content');
    const service = document.getElementById('service');
    const products = document.getElementById('products');
    const about = document.getElementById('about');
    const footer = document.getElementById('footer');

    const setActiveLink = (activeLink) => {
        navLinks.forEach((link) => link.classList.remove('active'));
        activeLink.classList.add('active');
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                setActiveLink(link);
            }
        });
    });

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY+window.innerHeight /5;

        if (scrollPosition >= footer.offsetTop) {
            setActiveLink(navLinks[4]); 
        } else if (scrollPosition >= about.offsetTop) {
            setActiveLink(navLinks[3]);
        } else if (scrollPosition >= products.offsetTop) {
            setActiveLink(navLinks[2]); 
        } else if (scrollPosition >= service.offsetTop) {
            setActiveLink(navLinks[1]);
        } else {
            setActiveLink(navLinks[0]);
        }
    });
});
