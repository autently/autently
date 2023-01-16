document.addEventListener("DOMContentLoaded", function(){

    const colorShades = ["#EEFBF2", "#DEF7E6", "#CEF3DA", "#BDEFCD", "#ADEBC1", "#9CE7B4", "#8CE3A8", "#7CDF9B"];
    const container = document.createElement('div');
    container.setAttribute("class", "pixel-grid");
    document.body.appendChild(container);

    // Append 200 pixeltiles to the document
    for(let i = 0; i < 200; i++){
      tile();
    }

    // Change the color of all tiles with an interval
    setInterval(function(){
      const tiles = document.querySelectorAll(".pixelTile");
      for(let j = 0; j < tiles.length; j++){
        tiles[j].style.background = colorShades[getRandomIntInclusive()];
      }
    }, 1500);

    // Create a tile
    function tile(){
      let tile = document.createElement("div");
      tile.setAttribute('class', "pixelTile");
      document.querySelector(".pixel-grid").appendChild(tile);
    }
    
    function getRandomIntInclusive() {
      min = Math.ceil(0);
      max = Math.floor(colorShades.length);
      return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    }

});