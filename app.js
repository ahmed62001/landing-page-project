// store sections to array 
const sections = Array.from(document.querySelectorAll('section'));

//store navbar to variable navList
const navList = document.getElementById('navbar__list')


// creat nav bar with function CreatListItem
function CreatListItem() {
    //use for of loop to loop of sections
    for (section of sections) {
        listItem = document.createElement('li');
        listItem.innerHTML = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a>`;

        //use appendChild method to append listItem to navList
        navList.appendChild(listItem);
    }
};
// run the function
CreatListItem();


// Add class 'active' to section when near top of viewport
window.onscroll = function () {
    document.querySelectorAll('section').forEach(function (active){
        // use if statment to condition if the client on screen set active class 
        if (
            active.getBoundingClientRect().top >= -400 &&
            active.getBoundingClientRect().top <= 150
            ) {
            active.classList.add("your-active-class")
        }else {
            active.classList.remove("your-active-class")
        }
        
    });

};
// Scroll to section on link click

// addEventListener method when user click
navList.addEventListener("click", (tosection) =>{
    tosection.preventDefault();
    if (tosection.target.dataset.nav){
        document
        // go to the section by its id
          .getElementById(`${tosection.target.dataset.nav}`)

          // make scrolling smooth
          .scrollIntoView({behavior: "smooth"})
        setTimeout(() => {
            location.hash =`${tosection.target.dataset.nav}`;
        }, 180);
    }
}
)
