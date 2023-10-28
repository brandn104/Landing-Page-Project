/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navigation = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section')

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function generateNavigation() {

    const navBar = document.createElement('ul');

    sections.forEach(section => {
        const sectionId = section.id;
        const sectionDataNav = section.dataset.nav;

        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.classList.add('menu__link');
        link.href = `#${sectionId}`;
        link.textContent = sectionDataNav;

        listItem.appendChild(link);
        navBar.appendChild(listItem);
    });

    navigation.appendChild(navBar);
}
generateNavigation()
// Add class 'active' to section when near top of viewport
function makeActive() {
    for (const section of sections) {
        const box = section.getBoundingClientRect();
        
        if (box.top <= 150 && box.bottom >= 150) {
            // Apply active state on the current section
            section.classList.add('your-active-class');
            
            // Find the corresponding anchor element
            const anchor = document.querySelector(`[href="#${section.id}"]`);
            
            if (anchor) {
                // If an anchor is found, add the active class to it
                anchor.classList.add('nav-link');
            }
        } else {
            // Remove active state from the current section
            section.classList.remove('your-active-class');
            
            // Find the corresponding anchor element
            const anchor = document.querySelector(`[href="#${section.id}"]`);
            
            if (anchor) {
                // If an anchor is found, remove the active class from it
                anchor.classList.remove('nav-link');
            }
        }
    }
}

document.addEventListener("scroll", function() { makeActive();});
// Scroll to anchor ID using scrollTO event
const Links = document.querySelectorAll('.navbar__menu a');

    // Loop through each anchor element and attach a click event listener
    Links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default click behavior

            // Get the target section's ID from the anchor's href attribute
            const targetId = link.getAttribute('href').substring(1);

            // Find the target section by its ID
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Scroll to the target section with smooth behavior
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
 
// Set sections as active


