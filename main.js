//declare var and assign value of empty array
let fontArray = [];

//elImageContainer assigned div with id 'image-container'
let elImageContainer = document.getElementById('image-container')

//create an object constructor that takes in parameters and store properties of an img
let FontImage = function (name, style, mainColor, filePath, id) {
    this.name = name;
    this.style = style;
    this.filePath = filePath;
    this.mainColor = mainColor;
    this.id = id;
    this.shown = 0;
    this.clicked = 0;
    this.allClicks = 0;
};

//instantiate object constructor 
let Garamond = new FontImage('Garamond', 'serif','yellow', 'img/garamond.jpg', 'garamond')
let Helvetica = new FontImage('Helvetica', 'sans-serif','white', 'img/helvetica.jpg','helvetica')
let Old_English = new FontImage('Old English', 'blackletter', 'blue','img/old_english.jpg', 'oldEnglish')
let Courier = new FontImage('Courier', 'monospaced','yellow', 'img/courier.jpg', 'courier')
let Monaco = new FontImage('Monaco', 'monospaced', 'white','img/monaco.jpg', 'monaco')
let Celtic = new FontImage('Celtic', 'gaelic', 'yellow','img/celtic.jpg', 'celtic')

//push new objects to array
fontArray.push(Garamond, Helvetica, Old_English, Courier, Monaco, Celtic)
console.log(fontArray);
//define function to return random font object
function randomFont(){
    let randomNumber = Math.floor(Math.random()* fontArray.length)
    return fontArray[randomNumber]
}

//declare var to hold font object temporarily associated w/ html img elements
let randomFontDisplayedOne;
let randomFontDisplayedTwo;
let randomFontDisplayedThree;

//create a function to generate 3 random font objects, ensure they're not duplicates, and increment shown property
function displayRandomFonts(){
    elImageContainer.innerHTML = '';
    for(let i = 0; i < 3; i++) {
        let randomFontGenerated = randomFont()
        if (i === 0){
            randomFontDisplayedOne = randomFontGenerated
            randomFontDisplayedOne.shown +=1
        } else if (i === 1){
            while (randomFontGenerated.id === randomFontDisplayedOne.id){
                randomFontDisplayed = randomFont()
            }
            randomFontDisplayedTwo = randomFontGenerated
            randomFontDisplayedTwo.shown +=1
        } else {
            while (randomFontGenerated.id === randomFontDisplayedOne.id || randomFontGenerated.id === randomFontDisplayedTwo.id) {
                randomFontGenerated = randomFont()
            }
            randomFontDisplayedThree = randomFontGenerated
            randomFontDisplayedThree.shown +=1
        }
        let elOne = document.createElement("img")
        elImageContainer.appendChild(elOne)
        elOne.setAttribute('id', randomFontGenerated.id)
        elOne.src = randomFontGenerated.filePath
        elOne.addEventListener('click', fontClicked)
    }
}

//increment clicked on specific font object clicked
function fontClicked(event) {
    if(event.target.id === randomFontDisplayedOne.id){
        randomFontDisplayedOne.clicked +=1
    } else if(event.target.id === randomFontDisplayedTwo.id){
        randomFontDisplayedTwo.clicked +=1
    } else if(event.target.id === randomFontDisplayedThree.id) {
        randomFontDisplayedThree.clicked +=1
    }
    //increment property allClicks each time any font object is clicked
    for (let i = 0; i < fontArray.length; i++){
        fontArray[i].allClicks +=1
    }
    //check if number of clicks equals three then display chart
    if (fontArray[0].allClicks === 3){
        displayBarChart()
    //else display three new random font images
    } else displayRandomFonts()
}

displayRandomFonts()