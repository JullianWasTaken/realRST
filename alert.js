

/*
function sus() {
    if (document.getElementById("anthonyChange").src == "https://www.channelstv.com/wp-content/uploads/2015/03/Mike-Omeri.png"){
        document.getElementById("anthonyChange").src = "https://www.channelstv.com/wp-content/uploads/2015/03/Mike-Omeri.png";

    } else {
        document.getElementById("anthonyChange").src = "https://image.isu.pub/130724141447-8b53216cc93ffd9390cde14ed14ff2fb/jpg/page_1.jpg";
        document.getElementById("anthonyChange").src = "https://media.licdn.com/dms/image/C5603AQEpLiC4sv6GiQ/profile-displayphoto-shrink_800_800/0/1654544619047?e=2147483647&v=beta&t=MGXoSeiYHPnMMHqK2_mqWIpqSek2ge2NfQaP5_AZ0Fw";
    } 
}*/

function checkPlu() {
  let givenPLU = document.forms["pluTest"]["plu"].value
  if (givenPLU == "4011") {
    alert("Bananas!")
  } else {
    alert("Idk what this is")
  }
}
