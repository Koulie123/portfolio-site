import './style.css';
import PictureOfMe from './images/PortfolioPicCopy.jpg';
import displayProjects from './projects.js';



const setPicture = function () {
    const picDiv = document.querySelector('.pic-of-me');
    const img = new Image();
    img.src = PictureOfMe;
    img.classList.add('picture-of-me');
    picDiv.appendChild(img);
}


setPicture();
const letter = 7;
const projectContainer =  document.querySelector('.projects');
displayProjects(projectContainer);