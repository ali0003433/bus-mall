//declare variable and assign it empty array
let imageArray = [];

//declare a variable for each image of the three shown
let firstImage; 
let secondImage;
let thirdImage; 
let totalClicks = 0;

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
    this.addClicks = 0;
};

//check if localStorage has any values
console.log(localStorage)
console.log(localStorage.length)
console.log(imageArray)
if(localStorage.length > 0) {
    //retrieve stored imageArray from local storage because it has previous clicks and shown
    let getData = localStorage.getItem('storageImageArray')
    //reassign value of imageArray to the parsed version of localStorage imageArray
    imageArray = JSON.parse(getData);
} else {
    //if no localStorage values, instantiate constructor to create multiple instances of font images
    let Garamond = new FontImage('Garamond','serif','img/garamond.jpg', 'garamond')
    let Helvetica = new FontImage('Helvetica', 'sans-serif', 'img/helvetica.jpg', 'helvetica')
    let Old_English = new FontImage('Old English', 'blackletter', 'img/old_english.jpg', 'oldEnglish')
    let Courier = new FontImage('Courier', 'monospaced', 'img/courier.jpg', 'courier')
    let Monaco = new FontImage('Monaco', 'monospaced', 'img/monaco.jpg', 'monaco')
    let Celtic = new FontImage('Celtic', 'gaelic', 'img/celtic.jpg', 'celtic')
    //push new instances of FontImage to imageArray 
    imageArray.push([Garamond, Helvetica, Old_English, Courier, Monaco, Celtic])
    console.log(imageArray)
}

//define a function that will select a random image from imageArray. We will later display these images
function randomImage() {
    //declare a variable that will calculate a random whole number between 0 and 1 and multiply it by the length of imageArray
    let randomNumber = Math.floor(Math.random()*imageArray.length)
    //declare a variable imageIndex and assign it an image object with an index of randomNumber (calculated above)
    let imageArrIndexChosen = imageArray[randomNumber]
    //increment the shown property of the randomly chosen object (via imageArray[randomArray]) each time the object is displayed
    //return the random image object
    return imageArrIndexChosen;
}

//define event handler function that will increment the property clicked if html img id is equal to the image object id
function imageClicked(event) {
   if (event.target.id === firstImage.id) {
                firstImage.clicked += 1;
    } else if (event.target.id === secondImage.id) {
                secondImage.clicked += 1;
    } else if (event.target.id === thirdImage.id) {
                thirdImage.clicked += 1; 
    }
    totalClicks += 1;
    localStorage.setItem('storageImageArray', JSON.stringify(imageArray))
    if (totalClicks === 3){
        displayChart()
        localStorage.clear('storageImageArray')
    } else {
        displayImages()
        }
}
//define a function that will loop three times. Assign the return value of randomImage to var imageObject. In each loop, assign imageObject a new randomIamge. (1) During first loop, assign the random image to global var firstImage. Create a new img element in html. append it to the div. Set the html attribute id to the id of the randomly chosen image. Set the source of the img element to the randomly chosen image's filePath property. Add an event listener to that img element so that it runs the function imageClicked each time an event occurs. (2) During second loop, assign the random image the global var secondImage. (3) During third loop, assign the random image the global var thirdImage. 
function displayImages() {
    //reassign html div to empty string 
    elImageContainer.innerHTML = '';
    //create for loop to iterate three times to display images
    for(let i = 0; i < 3; i++){
        let imageObject = randomImage();
        //declare variable imageObject and assign it to return value of randomImage which is the same as imageArrIndexChosen 
        //if first iteration, assign the random image chosen to firstImage 
        if( i === 0){
            firstImage = imageObject
        //if second iteration, assign the random image chosen to secondImage
        } else if (i === 1) {
            while(imageObject.id === firstImage.id){            
                imageObject = randomImage();
            }
                secondImage = imageObject;
        //if anything other than first or second iteration, assign the random images chosen to thirdImage
            } else {
            while(imageObject.id === firstImage.id || imageObject.id === secondImage.id) {
                imageObject = randomImage();
            }
        thirdImage = imageObject;
        }
    imageObject.shown +=1
    //create an img element in html
    let elImage = document.createElement('img');
    //append new img element to the div with id 'image-container'
    elImageContainer.appendChild(elImage);
    //set id of new img element to be the id of that randomly chosen image 
    elImage.setAttribute('id', imageObject.id);
    //assign the source of the new html img to be the randomly chosen object's filepath (one of it's properties)
    elImage.src = imageObject.filePath; 
    //for the new html img element created, add an event listener. Invoke this method. Pass the event listener the event type of 'click' and the object imageClicked stores the event
    elImage.addEventListener('click', imageClicked)
    }
}
//invoke display images function 
displayImages();