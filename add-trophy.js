function addTrophy() {
  var trophyCount = document.getElementById("points").children.length;
  var newTrophy = document.createElement("img");
  newTrophy.src = "trofeu.png";
  newTrophy.style.marginRight = "3px";
  document.getElementById("points").appendChild(newTrophy);
}

document.getElementById("noBox").addEventListener("click", addTrophy);

function addTrophy() {
  var trophyCount = document.getElementById("points").children.length;

  if (trophyCount < 7) {
    var newTrophy = document.createElement("img");
    newTrophy.src = "trofeu.png";
    newTrophy.style.marginRight = "2px";
    document.getElementById("points").appendChild(newTrophy);

    if (trophyCount === 6) {
      changeScene();
    }
  }
}

function changeScene() {
  document.body.style.backgroundImage = "url(florest2.png)";
}

document.getElementById("noBox").addEventListener("click", addTrophy);
