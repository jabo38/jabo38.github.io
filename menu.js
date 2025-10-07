// Mobile Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Create the hamburger button
    const nav = document.querySelector('nav');
    const navUl = document.querySelector('nav ul');
    
    // Create hamburger button
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.setAttribute('aria-label', 'Toggle navigation menu');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    
    // Insert button at the beginning of nav
    nav.insertBefore(menuToggle, nav.firstChild);
    
    // Toggle menu on button click
    menuToggle.addEventListener('click', function() {
        navUl.classList.toggle('active');
        
        // Update aria-expanded
        const isExpanded = navUl.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
        
        // Change icon between hamburger and X
        if (isExpanded) {
            menuToggle.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navUl.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768) {
            const isClickInsideNav = nav.contains(event.target);
            if (!isClickInsideNav && navUl.classList.contains('active')) {
                navUl.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
    
    // Reset menu state on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navUl.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});
