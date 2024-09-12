/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

// Beginning of Code:

// Selecting Menu Button:

let menuButton = document.querySelector('.menu-button');

// Creating Function:

function createMenu(array) {

  // Creating HTML elements:

  let menuDiv = document.createElement('div');
  let menuList = document.createElement('ul');

  // Adding classes and styles:

  menuDiv.classList.add('menu');
  //menuDiv.style.transform = ('translate(0px, 0px)');

  // Creating list items and appending to the list:

  menuDiv.append(menuList);

  array.forEach(item => {
    let menuItem = document.createElement('li');
    menuItem.textContent = item;

    menuList.append(menuItem);
  })

  // Creating and assigning selector:

  menuButton.addEventListener('click', () => {
    menuDiv.classList.toggle('menu--open');
    let myAnim = gsap.to(".menu", {x: 350, duration: 1});
    let reversed = gsap.to(".menu--open", {x: 0, duration: 1})
    if(menuDiv.className === 'menu') {
      myAnim();
    
    } else {
      reversed();
    }
  })

  return menuDiv;

}

let header = document.querySelector('.header');

header.append(createMenu(menuItems));
