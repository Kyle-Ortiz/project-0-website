/*const h2 = document.createElement('h2');
h2.textContent = "This content added by JavaScript";
document.querySelector('body').appendChild(h2);*/

// function revealStory() {
//      document.getElementById("hiddenStory").style.display = "block";
// }
const button = document.querySelector('button') 
const myStory = document.querySelector('.myStory')  

button.addEventListener('click', function(){   
     myStory.classList.toggle('is-active')  
});