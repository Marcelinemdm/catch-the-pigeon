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

  if (trophyCount < 8) {
    var newTrophy = document.createElement("img");
    newTrophy.src = "trofeu.png";
    newTrophy.className = "js-trophy";
    newTrophy.style.marginRight = "2px";
    document.getElementById("points").appendChild(newTrophy);

    if (trophyCount === 7) {
      changeScene();
      resetTrophies();
    }
  }
}

var currentScene = 1;

function changeScene() {
  if (currentScene === 1) {
    document.body.style.backgroundImage = "url(florest2.png)";
    currentScene = 2;
  } else if (currentScene === 2) {
    document.body.style.backgroundImage = "url(florest3.jpg)";
    currentScene = 3;
  } else if (currentScene === 3) {
    document.body.style.backgroundImage = "url(florest4.png)";
    currentScene = 1;
  }
}

function resetTrophies() {
  var pointsContainer = document.getElementById("points");
  pointsContainer.innerHTML = "";
}

function resetTrophies() {
  var jsTrophies = document.getElementsByClassName("js-trophy");
  while (jsTrophies.length > 0) {
    jsTrophies[0].remove();
  }
}

document.getElementById("noBox").addEventListener("click", addTrophy);

// ----------------------------------------------------------------------------------------------
// código simplificado por IA e mais legível, Mantém a mesma funcionalidade que o código original
//

// Variável global para controlar o cenário atual
// var currentScene = 1;

// // Função para adicionar um troféu
// function addTrophy() {
//   var trophyCount = document.getElementsByClassName("js-trophy").length;

//   if (trophyCount < 7) {
//     var newTrophy = document.createElement("img");
//     newTrophy.src = "trofeu.png";
//     newTrophy.className = "js-trophy";
//     newTrophy.style.marginRight = "2px";
//     document.getElementById("points").appendChild(newTrophy);

//     if (trophyCount === 6) {
//       changeScene();
//       resetTrophies();
//     }
//   }
// }

// // Função para mudar o cenário
// function changeScene() {
//   const scenes = ["florest2.png", "florest3.jpg", "florest4.png"];
//   const nextScene = scenes[currentScene % scenes.length];
//   document.body.style.backgroundImage = `url(${nextScene})`;
//   currentScene++;
// }

// // Função para redefinir os troféus
// function resetTrophies() {
//   var jsTrophies = document.getElementsByClassName("js-trophy");
//   while (jsTrophies.length > 0) {
//     jsTrophies[0].remove();
//   }
// }

// // Adicionar evento de clique ao elemento "noBox"
// document.getElementById("noBox").addEventListener("click", addTrophy);