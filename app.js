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
function addSection4() {
    const section4 = document.getElementsByTagName('section')[2];

    const section4HTML = `
    <section id="section4" data-nav="Section 4">
    <div class="landing__container">
      <h2>Section 4</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

      <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div> </section>`;

    section4.insertAdjacentHTML('afterend', section4HTML);
}

addSection4();
/**
 * Define Global Variables
 * 
*/
let section = document.querySelectorAll('section');

let navbar = document.getElementById('navbar__list');


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

function creatnavbar() {
    for (sectionN of section){
        let list = document.createElement('li');
        list.innerHTML = `<li class='menu__link ${sectionN.className}' data-link=${sectionN.id}><a href="#${sectionN.id}">${sectionN.dataset.nav}</li>`; 
        navbar.appendChild(list);
       
    }

}
creatnavbar()
// Add class 'active' to section when near top of viewport
function makeActive() {
    for (const sectionI of section) {
      const box = sectionI.getBoundingClientRect(); 
      if (box.top <= 600 && box.bottom >= 600) {
        // Apply active state on the current section and the corresponding Nav link.
        sectionI.classList.add("your-active-class")
      } else {
        // Remove active state from other section and corresponding Nav link.
        sectionI.classList.remove("your-active-class")
      }
    }
  }

// Scroll to anchor ID using scrollTO event
function scrollto(){
  navbar.addEventListener('click', function(sectionlink){
    sectionlink.preventDefault()
    let parent = sectionlink.target.hasAttribute('data-link')
    ?  sectionlink.target
    :  sectionlink.target.parentElement
    let sectiontoscroll = document.getElementById(parent.dataset.link)
    sectiontoscroll.scrollIntoView({block: 'end', behavior: 'smooth'})
})}
scrollto()
/**
 * End Main Functions
 * Begin Events
 * 
*/


// Build menu 

// Scroll to section on link click
function eventListener(){
    document.addEventListener("scroll", function() {
    makeActive();
  })
}eventListener()