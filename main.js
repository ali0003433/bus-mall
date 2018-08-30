//declare variable and assign it empty array
let imageArray = [];

//find element with id image-container using document.getElementById
let elImageContainer = document.getElementById('image-container')

//create object constructor that will take in parameters and store properties of an image
let FontImage = function(name, style, filePath, id) {
    this.name = name;
    this.style = style;
    this.filePath = filePath;
    this.id = id;
    this.shown = 0;
    this.clicked = 0;
};

//instantiate constructor to create multiple instances of font images 
let Garamond = new FontImage('Garamond','serif','img/garamond.jpg', 'garamond')
let Helvetica = new FontImage('Helvetica', 'sans-serif', 'img/helvetica.jpg', 'helvetica')
let Old_English = new FontImage('Old Image', 'blackletter', 'img/old_english.jpg', 'oldImage')
let Courier = new FontImage('Courier', 'monospaced', 'img/courier.jpg', 'courier')
let Monaco = new FontImage('Monaco', 'monospaced', 'img/monaco.jpg', 'monaco')
let Celtic_Garamond_Pro = new FontImage('Celtic Garamond Pro', 'gaelic', 'img/celtic.jpg', 'celticGaramondPro')

//push new instances of FontImage to imageArray 
imageArray.push(Garamond, Helvetica, Old_English, Courier, Monaco, Celtic_Garamond_Pro)

//define a function that will select a random image from imageArray - we will later display these images
function randomImage() {
    //declare a variable that will calculate a random whole number between 0 and 1 and multiply it by the length of imageArray
    let randomNumber = Math.floor(math.random()*imageArray.length)
    //declare a variable imageIndex and assign it an image object with an index of randomNumber
    let imageIndex = imageArray[randomNumber]
    //increment the shown property of the randomly chosen object (via imageArray[randomArray]) each time the object is displayed
    imageIndex.shown +=1
    //return the random image object
    return imageIndex
}

let firstImage; 
let secondImage;
let thirdImage; 

//define a function to create img elements in html, 
