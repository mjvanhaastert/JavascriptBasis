pics = document.getElementById("pics");
//maak de function Picsholder
createPicsHolder();
createAapImage();


function createPicsHolder() {
    //loop zolang i kleinder is dan 9
    for(var i = 0; i <9; i++){
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        //geef de frame waar de picture in zit een id
        pictureHolder.id = "picture-holder-" + i;
        pics.appendChild(pictureHolder);
    }
}

function createAapImage() {
    pictureHolder = document.getElementsByClassName("picture-holder");
    for(var i = 0; i < pictureHolder.length; i++ ){
        favoriet = document.createElement("div");
        favoriet.className = favoriet;
        favoriet.id = "favoriet_" + (i+1);
        //maak een img
        aapPlaatje = document.createElement("img");
        aapPlaatje.src = "img/aap" + (i+1) + ".jpg";
        aapPlaatje.id = (i+1);
        aapPlaatje.addEventListener("click", function () {
            maakfavoriet(this.id);
        });
        pictureHolder[i].appendChild(favoriet);
        pictureHolder[i].appendChild(aapPlaatje);
    }

    function maakfavoriet(id) {
        console.log("maak mij Favoriet! het gaat om aap..." + id);
        favoriet = document.getElementById("favoriet_" + id);
        favoriet.style.backgroundImage = "url('img/heart_PNG706.png')";
    }

}

//picsHolder
//picsHolder bevat een plaatje van een aap en een favorite symbool(hartje)

//apenPlaatjes toeveogen aan picsHolder
//favoriteSymbols toevoegen aan picsHolder