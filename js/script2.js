// Select all links with the class "smooth-scroll"
/*const links = document.querySelectorAll('.smooth-scroll');

// Add a click event listener to each link
links.forEach(link => {
    link.addEventListener('click', event => {
        // Prevent default link behavior
        event.preventDefault();

        // Get the target section based on the href attribute of the link
        const target = document.querySelector(link.getAttribute('href'));

        // Calculate the distance to scroll
        const offset = target.offsetTop;
        const scrollDistance = offset - window.pageYOffset;

        // Animate the scrolling using a smooth animation
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    });
});*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});