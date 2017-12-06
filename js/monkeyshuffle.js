var plaatjes = document.getElementsByTagName("img");
//variable plaatjes aangeroepen door img
var random = 0;
//variable random met een waarde 0
var randomNumber = [];
// een lege array

while(randomNumber.length < 9){
    //zolang randomNumber een kleinere lengte heeft dan 9
    random = Math.floor(Math.random() * 9) + 1;
    //pak een random getal * 9 rond dat af naar beneden en dan plus 1
    if(randomNumber.lastIndexOf(random) === -1){
        //Kijkt of de nummer al een keer voorkomt indien hij niet voorkomt dan krijgt hij de return waarde -1
        randomNumber.push(random);
        //voeg nummer toe aan arary randomNumber
        }
}
random=0;
//Zet daarna de variable random terug op nu en doe het nog een keer totdat de array randomNumber gevuld is tot 9

for(var plaatje in plaatjes){
    plaatjes[plaatje].src = "img/aap" + randomNumber[random] + ".jpg";
    //pak uit de array randomNumber een cijfer en zet die tussen img/aap().jpg
    random++;
    //Pak volgende nummer uit de array tot dat de de link met plaatjes op is
}






