//declare var and assign value of empty array
let fontArray = [];

//elImageContainer assigned div with id 'image-container'
let elImageContainer = document.getElementById('image-container');

//create an object constructor that takes in parameters and store properties of an img
let FontImage = function (name, style, filePath, mainColor, id) {
    this.name = name;
    this.style = style;
    this.filePath = filePath;
    this.mainColor = mainColor;
    this.id = id;
    this.shown = 0;
    this.clicked = 0;
    this.allClicks = 0;
};
//if there's been at least one click event, get fontArray from localstorage
console.log(localStorage.length);
if(localStorage.length < 1){
    //instantiate object constructor
    let Garamond = new FontImage('Garamond', 'serif', 'img/garamond.jpg', 'yellow','garamond');
    let Helvetica = new FontImage('Helvetica', 'sans-serif', 'img/helvetica.jpg','white','helvetica');
    let Old = new FontImage('Old English', 'script','img/old_english.jpg','blue', 'oldEnglish');
    let Courier = new FontImage('Courier', 'monospaced','img/courier.jpg','yellow', 'courier');
    let Monaco = new FontImage('Monaco', 'monospaced', 'img/monaco.jpg','white', 'monaco');
    let Celtic = new FontImage('Celtic', 'script','img/celtic.jpg','yellow', 'celtic');
    let Waltograph = new FontImage('Waltograph', 'script', 'img/waltograph.jpg','purple','waltograph');
    let Comic = new FontImage('Comic Sans','sans-serif', 'img/comic_sans.jpg', 'yellow','comicSans');
    let Times = new FontImage('Times New Roman','serif','img/times_new_roman.jpg','white', 'timesNewRoman');
    let Arial = new FontImage('Arial Rounded', 'sans-serif', 'img/arial_rounded.jpg', 'brown', 'arialRounded');
    let Kinescope = new FontImage ('Kinescope', 'script', 'img/kinescope.jpg', 'grey', 'kinescope');
    let Bodoni = new FontImage('Bodoni', 'serif', 'img/bodoni.jpg','white','bodoni');
    let Clarendon = new FontImage('Clarendon', 'serif', 'img/clarendon.jpg', 'blue', 'clarendon');
    let Doku = new FontImage('Doku','monospaced', 'img/doku.jpg', 'black', 'doku');
    let Anonymous = new FontImage('Anonymous','monospaced', 'img/anonymous.jpg', 'white', 'anonymous');
    let Cooper = new FontImage('Cooper Black', 'serif', 'img/cooper_black.jpg', 'blue', 'cooperBlack');
    let Windsor = new FontImage('Windsor', 'serif', 'img/windsor.jpg', 'white', 'windsor');
    let Balloon = new FontImage('Balloon', 'script', 'img/balloon.jpg', 'red', 'balloon');
    let Phenix = new FontImage('Phenix American', 'monospaced', 'img/phenix_american.jpg', 'white', 'phenixAmerican');
    let Din = new FontImage('DIN', 'sans-serif', 'img/din.jpg', 'white', 'din');
    let Gotham = new FontImage('Gotham Bold', 'sans-serif', 'img/gotham_bold.jpg', 'blue', 'gothamBold');
    let Gill = new FontImage('Gill Sans', 'sans-serif', 'img/gill_sans.jpg', 'green', 'gillSans');
    let Optima = new FontImage('Optima Demi Bold','sans-serif', 'img/optima_demi_bold.jpg','red','optimaDemiBold' );
    let Eurostile = new FontImage('Eurostile Bold', 'sans-serif', 'img/eurostile_bold.jpg', 'red', 'eurostileBold');
    let Kaufmann = new FontImage('Kaufmann', 'script', 'img/kaufmann.jpg', 'blue', 'kaufmann');
    let Ocr = new FontImage('OCR B', 'monospaced','img/ocr_b.jpg', 'white', 'ocrB');

    //push new objects to array
    fontArray.push(Garamond, Helvetica, Old, Courier, Monaco, Celtic, Waltograph, Comic, Times, Arial, Kinescope, Bodoni, Clarendon, Doku, Anonymous, Cooper, Windsor, Balloon, Phenix, Din, Gotham, Gill, Optima, Eurostile, Kaufmann, Ocr);
} else {
    let getStorageFontArray = localStorage.getItem('storageFontArray');
    fontArray = JSON.parse(getStorageFontArray);
}

//define function to return random font object
function randomFont(){
    let randomNumber = Math.floor(Math.random()* fontArray.length);
    let fontIndex = fontArray[randomNumber];
    return fontIndex;
}

//declare var to hold font object temporarily associated w/ html img elements
let randomFontDisplayedOne;
let randomFontDisplayedTwo;
let randomFontDisplayedThree;

//create a function to generate 3 random font objects, ensure they're not duplicates, and increment shown property
function displayRandomFonts(){
    elImageContainer.innerHTML ='';
    for(let i = 0; i < 3; i++) {
        let randomFontGenerated = randomFont();
        if (i === 0){
            randomFontDisplayedOne = randomFontGenerated;
            randomFontDisplayedOne.shown +=1;
            console.log('fire 0');
        } else if (i === 1){
            while (randomFontGenerated.id === randomFontDisplayedOne.id){
                randomFontGenerated = randomFont();
                console.log('fire while 1');
            }
            randomFontDisplayedTwo = randomFontGenerated;
            randomFontDisplayedTwo.shown +=1;
            console.log('fire 1');
        } else {
            while (randomFontGenerated.id === randomFontDisplayedOne.id || randomFontGenerated.id === randomFontDisplayedTwo.id) {
                randomFontGenerated = randomFont();
                console.log('fire while 2');
            }
            randomFontDisplayedThree = randomFontGenerated;
            randomFontDisplayedThree.shown +=1;
            console.log('fire 2');
        }
        let elOne = document.createElement('img');
        console.log('fire create img');
        elImageContainer.appendChild(elOne);
        elOne.setAttribute('id', randomFontGenerated.id);
        elOne.src = randomFontGenerated.filePath;
        elOne.addEventListener('click', fontClicked);
        console.log('allClicks', fontArray[1].allClicks);
    }
}

//increment clicked on specific font object clicked
function fontClicked(event) {
    if(event.target.id === randomFontDisplayedOne.id){
        randomFontDisplayedOne.clicked +=1;
    } else if(event.target.id === randomFontDisplayedTwo.id){
        randomFontDisplayedTwo.clicked +=1;
    } else if(event.target.id === randomFontDisplayedThree.id) {
        randomFontDisplayedThree.clicked +=1;
    }
    //increment property allClicks each time any font object is clicked
    for (let i = 0; i < fontArray.length; i++){
        fontArray[i].allClicks +=1;
    }
    //check if number of clicks equals X then display chart
    if (fontArray[0].allClicks >= 25){
        displayBarChart();
        console.log('fired bar chart');
        for (let x = 0; x < fontArray.length; x++){
            fontArray[x].shown = 0;
            fontArray[x].clicked = 0;
            fontArray[x].allClicks = 0;
        }
        console.log('set fontArray properties to zero');
        localStorage.clear();
    //else display three new random font images
    } else {
        localStorage.setItem('storageFontArray', JSON.stringify(fontArray));
        displayRandomFonts();
    }
}
console.log('displayRandomFonts fire');
displayRandomFonts();
