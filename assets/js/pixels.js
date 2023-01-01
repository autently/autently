document.addEventListener("DOMContentLoaded", function(){

    const colorShades = ["#EEFBF2", "#DEF7E6", "#CEF3DA", "#BDEFCD", "#ADEBC1", "#9CE7B4", "#8CE3A8", "#7CDF9B"];
    const container = document.createElement('div');
    container.setAttribute("class", "pixel-grid");
    document.body.appendChild(container);

    function tile(){
        
      let tile = document.createElement("div");
      tile.setAttribute('class', "pixelTile");
        
      document.querySelector(".pixel-grid").appendChild(tile);
      
      setInterval(function(){
            tile.style.background = colorShades[getRandomIntInclusive()];
      }, 1500);
      
    }
    
    function getRandomIntInclusive() {
      min = Math.ceil(0);
      max = Math.floor(colorShades.length);
      return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    }
    
    
    for(let i = 0; i < 200; i++){
        tile();
    }

});