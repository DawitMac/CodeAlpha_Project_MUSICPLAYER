import { songs } from "./songs/data.js"



const musicsContainer = document.getElementById('musics');
const buttons = document.querySelectorAll(".btn");



  songs.forEach((song) => {
    const musicElement = document.createElement('div');
    musicElement.classList.add('music');

    const imageElement = document.createElement('img');
    imageElement.src = song.image;
    musicElement.appendChild(imageElement);
  
    const infoElement = document.createElement('div');
    infoElement.classList.add('info');
  
    const titleElement = document.createElement('h2');
    titleElement.textContent = song.title;
    infoElement.appendChild(titleElement);
  
    const artistElement = document.createElement('p');
    artistElement.textContent = song.singer;
    infoElement.appendChild(artistElement);
  
    musicElement.appendChild(infoElement);
  
    musicsContainer.appendChild(musicElement);
  });




buttons.forEach((button) => {
  button.addEventListener("click", function(e){
    if(button.innerText === "all"){
      
      while(musicsContainer.firstChild){
        musicsContainer.firstChild.remove()
      }
      
       handleMusic(songs);
    }else{
      while(musicsContainer.firstChild){
        musicsContainer.firstChild.remove()
      }
      const selectedItems = songs.filter((item) => item.type === button.innerText);
       handleMusic(selectedItems)
    }
      
  });
});

function handleMusic(music){

  music.forEach((song)=> {

    const musicEle = document.createElement('div');
    musicEle.classList.add('music');

    const imageElement = document.createElement('img');
    imageElement.src = song.image;
    musicEle.appendChild(imageElement);
  
    const infoElement = document.createElement('div');
    infoElement.classList.add('info');
  
    const titleElement = document.createElement('h2');
    titleElement.textContent = song.title;
    infoElement.appendChild(titleElement);
  
    const artistElement = document.createElement('p');
    artistElement.textContent = song.singer;
    infoElement.appendChild(artistElement);
  
    musicEle.appendChild(infoElement);
  
    musicsContainer.appendChild(musicEle);
  });
}



musicsContainer.addEventListener('click', function(e) {
  if (e.target.classList.contains('music') || e.target.classList.contains('info') || e.target.classList.value === "") {
      const player = document.querySelector('.player');
      const artist = document.querySelector('.artist');
      const artinsName = document.querySelector('.artist-name');
      const songTitle = document.querySelector('.song-title');
      const musicElement = e.target.closest('.music');
      if (musicElement) {
          let targetElement = musicElement.querySelector('h2');
          let song = songs.find((song) => song.title === targetElement.textContent);
  
          player.src = song.music;
          player.setAttribute('autoplay', 'autoplay');
          artist.src = song.image;
          artinsName.textContent = song.singer;
          songTitle.textContent = song.title;
      }
      
     
  }
});



