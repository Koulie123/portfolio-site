import './style.css';
import PictureOfMe from './images/SmallPicOfMe.jpg';
import displayProjects from './projects.js';



const setPicture = function () {
    const picDiv = document.querySelector('.pic-of-me');
    const img = new Image();
    img.src = PictureOfMe;

    picDiv.appendChild(img);
}


setPicture();

const projectContainer =  document.querySelector('.projects');
displayProjects(projectContainer);