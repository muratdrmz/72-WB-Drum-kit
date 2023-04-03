
const keysEl=document.querySelector('.keys');

keysEl.addEventListener('click',playAudio)

function playAudio(e){
 const key = e.target.parentElement.dataset.key;
 const audio = document.querySelector(`audio[data-key='${key}']`);
 audio.currentTime = 0;
 audio.play();
 const keyEl = document.querySelector(`.key[data-key="${key}"`);
 keyEl.classList.add('playing')
}

function playsound(e){
 const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
 const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
 if (!audio) return;
 audio.currentTime = 0;
 audio.play();
 key.classList.add("playing");
}
function removeTransition(e){
 if(e.propertyName!=='transform') return
 console.log(e.propertyName);
 console.log(this);
 this.classList.remove('playing')
}
const keys=document.querySelectorAll('.key');
keys.forEach(key=>key.addEventListener('transitionend',removeTransition));
window.addEventListener("keydown", playsound);

