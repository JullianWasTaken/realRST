

//Global scope variables

//PLU Data Center

let pluName = [ //0=banana, 1=apple, 2=herbs, 3= peppers, 4=lettuce
["banana", "organic banana"],
["gala apple", "honeycrisp apple", "granny smith apple", "macintosh apple"],
["regular parsley", "curley parsley", "coriander/cilantro", "mint", "dill"],
["red bell pepper", "green bell pepper", "yellow bell pepper", "orange bell pepper", "jalapeno", "cubanel pepper"],
["belgian endives", "green leaf lettuce", "red leaf lettuce", "radicchio", "romaine lettuce", "boston lettuce", "red boston lettuce"]
];
let pluNums = [ //0=banana, 1=apple, 2=herbs 3= peppers, 4=lettuce
["4011", "94011"],
["4135", "3283", "4139", "4152"],
["4901", "4899", "4889", "4896", "4891"],
["4688", "3055", "4689", "3057", "4693", "4687"],
["4543", "4076", "4075", "4738", "4640", "4632", "3098"]
];

let pluImages = [ //Put images of vegetables later lol /0=banana, 1=apple, 2=herbs, 3= peppers, 4=lettuce
["https://www.thedailymeal.com/img/gallery/13-delicious-things-you-can-make-with-bananas/l-intro-1673458653.jpg", "https://cdn.shopify.com/s/files/1/0270/6453/3094/products/93a17e9f-c519-487e-8f61-6f7b58fc764f_07776d55da72f8818cec403ec35ff81c_jpeg.jpg?v=1603081260"],
["https://i.ibb.co/xJ3HGB1/image.png", "https://i.ibb.co/r5sS2gn/image.png", "https://assets.shop.loblaws.ca/products/20253488001/b1/en/front/20253488001_front_a01_@2.png", "https://i.ibb.co/17g8m20/image.png"],
["https://cdn.shopify.com/s/files/1/0034/1917/7060/products/parsleyitalian_0866b541-c899-4254-ba46-8f4e670026b3_1400x.jpg?v=1654709837", "https://i.guim.co.uk/img/media/b1b55460edf22ea42d854faa51865302c4db2594/0_276_6720_4032/master/6720.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=bb7ff31f3976faa571784df19610021b", "https://i.ibb.co/0qHf94p/image.png", "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/266128_2200-732x549.jpg", "https://www.eatingwell.com/thmb/JpO2j5YTFLxFT_oQ2XtFPsbAOcE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/dill-ac021c11b2dc41ac83b809819617f042.jpg"],
["https://i5.walmartimages.ca/images/Enlarge/046/887/999999-57836046887.jpg", "https://i5.walmartimages.ca/images/Enlarge/287/775/6000191287775.jpg", "https://i5.walmartimages.ca/images/Enlarge/930/579/6000198930579.jpg", "https://images.albertsons-media.com/is/image/ABS/184480013?$ng-ecom-pdp-desktop$&defaultImage=Not_Available", "https://images.radio-canada.ca/q_auto,w_952/v1/alimentation/ingredient/4x3/piment-jalapeno-savourer.jpeg", "https://www.thespruceeats.com/thmb/jwmqncaPiWtRuSrTqyaU3I1l7QI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/dem10-191b9e68aa6e4846bd43b69b89df96f6.jpg"],
["https://www.thespruceeats.com/thmb/k3tBHvR6nYk_KFoKVPTZz2sd9b8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chicory-whole-and-sliced-on-marble-board-126551420-58bdd3d85f9b58af5c3bf47b.jpg", "https://i5.walmartimages.ca/images/Enlarge/006/949/6000196006949.jpg", "https://monasterybakery.com/wp-content/uploads/2021/02/RedLeafLettuce.jpg", "https://www.eatingwell.com/thmb/vlCSH8BiaN_1qDBk6QnTijaUMZA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/radicchio-getty-7a8252144f4e4f1da9e5b31d061f2b43.jpg", "https://m.media-amazon.com/images/I/51lUL-SAXDL._AC_UF894,1000_QL80_.jpg", "https://www.thespruceeats.com/thmb/AelRq948c-qKV8wFVLDdclovBWU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-bibb-lettuce-and-how-to-use-it-4782115_Hero_01-c9c955f1cb4348358c200387147c2d7a.jpg", "https://goodeggs4.imgix.net/589150f8-9567-11ea-8aaa-0f65c8c6ece9?w=560&h=350&fm=jpg&q=41&fit=crop&crop=faces"]
];


//INITIATE VARIABLES & GAME STATES
//let givenPLU = document.forms["pluTest"]["plu"].value
let selectedCategory; //silyl you, forgot to make these global scope
let selectedSubCategory;
//let quiz = document.getElementById("change");
let correctScore = 0;

let wrongScore = 0;
let isStarterDeleted = false; //Delete the start button
let haveISelected = false; //Checks if the user has clicked the start game button, comes into use later on (deletes the "Start" button)

//CORE FUNCTIONS

//Produce Selector
function selectPlu() {
   selectedCategory = Math.floor(Math.random() * pluName.length); //Selects the type of produce item (this is the 1st array in the 2D array, where it is index 0 and 0=banana, 1=apple, 2=herbs, 3= peppers, 4=lettuc)
   selectedSubCategory = Math.floor(Math.random() * pluName[selectedCategory].length); //Arrays are arranged in a manner that each spot corresponds to one another, so this just chooses the actual produce item (e.g: if selectedCategory was 1, this line would choose the type of apple)


   //DEBUGGING
  console.log(selectedCategory);
  console.log(selectedSubCategory);
  console.log("0 = bananas, 1= apples, 2=herbs");
  console.log("The selected produce item is: " + pluName[selectedCategory][selectedSubCategory] + " The PLU is: " + pluNums[selectedCategory][selectedSubCategory]);
//These were used to ensure the RNG functions worked


//Change stuff on website
  document.getElementById("change").innerHTML = "Your selected produce item is: " + pluName[selectedCategory][selectedSubCategory]; //Changes text on website
  document.getElementById("pluImage").src = pluImages[selectedCategory][selectedSubCategory]; //Changes image on website

  haveISelected = true; //Used in checkPlu() to see whether or not to delete the starter button


  return pluName[selectedCategory][selectedSubCategory]; //Kept this cause why not

}



//Thanks jad for timer


function checkPlu() {
  let timer = 1; //Jumpscare time
 let givenPLU = document.forms["pluTest"]["plu"].value;

 //User is right
  if ((givenPLU == pluNums[selectedCategory][selectedSubCategory]) && (haveISelected) || (givenPLU == "6969")) {
    correctScore++; //Inc right score
    keepTrack(1);
    document.getElementById("rightCounter").innerHTML = ("Your amount of correct items: " + correctScore);

    //Checks if the "Click me to start" is clicked, if it is, self delete
    if (!(isStarterDeleted)) {
      document.getElementById("deleteMe").remove("deleteMe");
      isStarterDeleted = true; //prevents self destruction
    }


    selectPlu(); //Choose a new PLU item
    document.forms["pluTest"]["plu"].value = ""; //Clear text

    //Debug
  } else if (!(haveISelected)) {
    console.log("Not selected yet");
  }

  //User is wrong
   else {
    wrongScore++; //increase wrong score
    keepTrack(0);
    document.getElementById("wrongCounter").innerHTML = ("Your amount of incorrect items are: " + wrongScore);
 
    //JUMPSCARE CODE (Credits to Jad for help with the timer)
    if (wrongScore >= 1) { //The cause to my life problems 
    const countDownTimer = setInterval(function () {
      if (timer > 0) {
        
        document.getElementById("logo").src = "https://media.tenor.com/SFCE2JH68XYAAAAC/fnaf4-fred-bear.gif";
        document.getElementById("logo").style.width = "100%";
        document.getElementById("logo").style.height = "100%";
      } else if (timer <= 0) {
        document.getElementById("logo").src = "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Farm_Boy_logo.svg/1200px-Farm_Boy_logo.svg.png"
        document.getElementById("logo").style.width = "10%";
        document.getElementById("logo").style.height = "10%";

        clearInterval(countDownTimer);

      }

      timer--;

    }, 1000)


    //Debug
    /*document.getElementById("logo").src = "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Farm_Boy_logo.svg/1200px-Farm_Boy_logo.svg.png";
    document.getElementById("logo").style.width = "20%";
    document.getElementById("logo").style.height = "20%";*/
    }

    //Correct the user and punish them...
    alert("The produce item was: " + pluName[selectedCategory][selectedSubCategory] + " and the code was: " + pluNums[selectedCategory][selectedSubCategory] + ". \n\nYou will now get punished for getting the item wrong." );
    document.forms["pluTest"]["plu"].value = "";//Clear input
  }


  return false; //so the page doesn't reload upon input
}




//DEBUGGING Functions included below (debug())
//Keep track of right/wrong items


//Lets get the keepTrack fn working
function debug(arr) {


  selectedCategory = 0; //Banana
  selectedSubCategory = 0; //Regular banana, 4011

  //selectPlu;
  //checkPlu;

  if (arr==1) {
    keepTrack(1);
  } else {
    keepTrack(2);
  }

}


//Instead of storing individual items, we will store their array positions of selectedCategory and
//-selectedSubCategory and will just grab those from the primary arrays at the start
let correctItemsSelectedCategory = [];
let correctItemsSelecetedSubCategory = [];
let incorrectItemsSelectedCateory = [];
let incorrectItemsSelecetedSubCategory = [];

function keepTrack(answerState) {

  //If user is right
  if (answerState == 1) { //User is correct
    console.log("right: " + pluNums[selectedCategory][selectedSubCategory] + pluName[selectedCategory][selectedSubCategory]);

    //Put item locations into correct array
    correctItemsSelectedCategory.unshift(indexOf(pluNums[selectedCategory]));
    correctItemsSelecetedSubCategory.unshift(indexOf(pluNums[selectedSubCategory]));

  } else {

    incorrectItemsSelectedCateory.unshift(indexOf(selectedc))

    console.log("wrong: " + pluNums[selectedCategory][selectedSubCategory] + pluName[selectedCategory][selectedSubCategory]);
  }




}

//Testing the debugging functions
debug(1);

//Defunct code below
//Yep solved my life problems by installing node.js and running SET PATH=C:\Program Files\Nodejs;%PATH%
//in console

/*function selectPlu() {
  selectedCategory = Math.floor(Math.random()*(pluName.length)); //Selects type of produce (banana, apple, herb)
  selectedSubCategory = Math.floor(Math.random()*(pluName[selectedCategory].length)); //Selects type of banana/apple/herb since this is a two-dimensional array
  console.log(selectedCategory);
  console.log(selectedSubCategory);

  console.log("0 = bananas, 1= apples, 2=herbs");
  console.log("The selected produce item is: " + pluName[selectedCategory][selectedSubCategory] + " The PLU is: " + pluNums[selectedCategory][selectedSubCategory]);

  document.getElementById("change").innerHTML = ("Your selected produce item is: " + pluName[selectedCategory][selectedSubCategory]);

  return pluName[selectedCategory][selectedSubCategory];
}*/


/* Original testing to change image upon click
function sus() {
    if (document.getElementById("anthonyChange").src == "https://www.channelstv.com/wp-content/uploads/2015/03/Mike-Omeri.png"){
        document.getElementById("anthonyChange").src = "https://www.channelstv.com/wp-content/uploads/2015/03/Mike-Omeri.png";

    } else {
        document.getElementById("anthonyChange").src = "https://image.isu.pub/130724141447-8b53216cc93ffd9390cde14ed14ff2fb/jpg/page_1.jpg";
        document.getElementById("anthonyChange").src = "https://media.licdn.com/dms/image/C5603AQEpLiC4sv6GiQ/profile-displayphoto-shrink_800_800/0/1654544619047?e=2147483647&v=beta&t=MGXoSeiYHPnMMHqK2_mqWIpqSek2ge2NfQaP5_AZ0Fw";
    } 
}*/

//document.getElementById("change").innterHTML = "Hey"; //testing initially