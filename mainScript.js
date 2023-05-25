

/* Anthony Appa Ross
function sus() {
    if (document.getElementById("anthonyChange").src == "https://www.channelstv.com/wp-content/uploads/2015/03/Mike-Omeri.png"){
        document.getElementById("anthonyChange").src = "https://www.channelstv.com/wp-content/uploads/2015/03/Mike-Omeri.png";

    } else {
        document.getElementById("anthonyChange").src = "https://image.isu.pub/130724141447-8b53216cc93ffd9390cde14ed14ff2fb/jpg/page_1.jpg";
        document.getElementById("anthonyChange").src = "https://media.licdn.com/dms/image/C5603AQEpLiC4sv6GiQ/profile-displayphoto-shrink_800_800/0/1654544619047?e=2147483647&v=beta&t=MGXoSeiYHPnMMHqK2_mqWIpqSek2ge2NfQaP5_AZ0Fw";
    } 
}*/

//Global scope variables

let pluName = [ //0=banana, 1=apple, 2=herbs
["banana", "organic banana"],
["gala apple", "honeycrisp apple", "granny smith apple", "macintosh apple"],
["regular parsley", "curley parsley", "coriander/cilantro", "mint", "dill"]
];
let pluNums = [ //0=banana, 1=apple, 2=herbs
["4011", "94011"],
["4135", "3283", "4139", "4152"],
["4901", "4899", "4889", "4896", "4891"]
];

let pluImages = [ //Put images of vegetables later lol /0=banana, 1=apple, 2=herbs
["https://www.thedailymeal.com/img/gallery/13-delicious-things-you-can-make-with-bananas/l-intro-1673458653.jpg", "https://cdn.shopify.com/s/files/1/0270/6453/3094/products/93a17e9f-c519-487e-8f61-6f7b58fc764f_07776d55da72f8818cec403ec35ff81c_jpeg.jpg?v=1603081260"],
["https://i.ibb.co/xJ3HGB1/image.png", "https://i.ibb.co/r5sS2gn/image.png", "https://assets.shop.loblaws.ca/products/20253488001/b1/en/front/20253488001_front_a01_@2.png", "https://i.ibb.co/17g8m20/image.png"],
["https://cdn.shopify.com/s/files/1/0034/1917/7060/products/parsleyitalian_0866b541-c899-4254-ba46-8f4e670026b3_1400x.jpg?v=1654709837", "https://i.guim.co.uk/img/media/b1b55460edf22ea42d854faa51865302c4db2594/0_276_6720_4032/master/6720.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=bb7ff31f3976faa571784df19610021b", "https://i.ibb.co/0qHf94p/image.png", "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/266128_2200-732x549.jpg", "https://www.eatingwell.com/thmb/JpO2j5YTFLxFT_oQ2XtFPsbAOcE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/dill-ac021c11b2dc41ac83b809819617f042.jpg"]

];

//let givenPLU = document.forms["pluTest"]["plu"].value
let selectedCategory; //silyl you, forgot to make these global scope
let selectedSubCategory;

//let quiz = document.getElementById("change");
let correctScore = 0;
let wrongScore = 0;

//MAINFRAME!

//RNG Select

//document.getElementById("change").innterHTML = "Hey";

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

function selectPlu() {
   selectedCategory = Math.floor(Math.random() * pluName.length);
   selectedSubCategory = Math.floor(Math.random() * pluName[selectedCategory].length);

  console.log(selectedCategory);
  console.log(selectedSubCategory);

  console.log("0 = bananas, 1= apples, 2=herbs");
  console.log("The selected produce item is: " + pluName[selectedCategory][selectedSubCategory] + " The PLU is: " + pluNums[selectedCategory][selectedSubCategory]);

  document.getElementById("change").innerHTML = "Your selected produce item is: " + pluName[selectedCategory][selectedSubCategory];
  document.getElementById("pluImage").src = pluImages[selectedCategory][selectedSubCategory];

  return pluName[selectedCategory][selectedSubCategory];
}


//selectPlu();

function checkPlu() {
 let givenPLU = document.forms["pluTest"]["plu"].value;
  if (givenPLU == pluNums[selectedCategory][selectedSubCategory]) {
    correctScore++;
    document.getElementById("rightCounter").innerHTML = ("Your amount of correct items: " + correctScore);
  } else {
    wrongScore++;
    document.getElementById("wrongCounter").innerHTML = ("Your amount of incorrect items are: " + wrongScore);
  }

 // return false;
}
