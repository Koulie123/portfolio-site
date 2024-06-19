import './style.css';
import PictureOfMe from './images/SmallPicOfMe.jpg';



const setPicture = function () {
    const picDiv = document.querySelector('.pic-of-me');
    const img = new Image();
    img.src = PictureOfMe;

    picDiv.appendChild(img);
}


setPicture();