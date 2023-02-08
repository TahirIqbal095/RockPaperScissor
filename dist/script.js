
//button you pressed
document.querySelector(".btn1").addEventListener("click", function innerHtmlFirst() {
  var innerButton = document.querySelector(".btn1").innerHTML;
  document.querySelector(".human-response").innerHTML = innerButton;
  var bot =randomName();
  if(innerButton==bot){
    document.querySelector(".result-human").innerHTML = "Draw";
  }else if((innerButton=="Rock" && bot=="Scissor") || (innerButton=="Scissor" & bot=="Paper") || (innerButton=="Paper" & bot=="Rock")){
    document.querySelector(".result-human").innerHTML = "You Win";
    document.querySelector(".score-human").innerHTML= Number(document.querySelector(".score-human").innerHTML)+1;
  }else{
    document.querySelector(".result-human").innerHTML = "You Lose";
    document.querySelector(".score-bot").innerHTML= Number(document.querySelector(".score-bot").innerHTML)+1;
  }
});

document.querySelector(".btn2").addEventListener("click", function innerHtmlSecond() {
  var innerButton = document.querySelector(".btn2").innerHTML;
  document.querySelector(".human-response").innerHTML = innerButton;
  var bot =randomName();
  if(innerButton==bot){
    document.querySelector(".result-human").innerHTML = "Draw";
  }else if((innerButton=="Rock" && bot=="Scissor") || (innerButton=="Scissor" & bot=="Paper") || (innerButton=="Paper" & bot=="Rock")){
    document.querySelector(".result-human").innerHTML = "You Win";
    document.querySelector(".score-human").innerHTML= Number(document.querySelector(".score-human").innerHTML)+1;
  }else{
    document.querySelector(".result-human").innerHTML = "You Lose";
    document.querySelector(".score-bot").innerHTML= Number(document.querySelector(".score-bot").innerHTML)+1;
  }

});

document.querySelector(".btn3").addEventListener("click", function innerHtmlThird() {
  var innerButton = document.querySelector(".btn3").innerHTML;
  document.querySelector(".human-response").innerHTML = innerButton;
  var bot =randomName();
  if(innerButton==bot){
    document.querySelector(".result-human").innerHTML = "Draw";
  }else if((innerButton=="Rock" && bot=="Scissor") || (innerButton=="Scissor" & bot=="Paper") || (innerButton=="Paper" & bot=="Rock")){
    document.querySelector(".result-human").innerHTML = "You Win";
    document.querySelector(".score-human").innerHTML= Number(document.querySelector(".score-human").innerHTML)+1;
  }else{
    document.querySelector(".result-human").innerHTML = "You Lose";
    document.querySelector(".score-bot").innerHTML= Number(document.querySelector(".score-bot").innerHTML)+1;
  }
});

// random name generator
function randomName() {

  var randomNumber = Math.floor(Math.random() * 6 + 1);
  var bot;
  if (randomNumber == 1 || randomNumber == 2) {
    bot = "Rock";
  } else if (randomNumber == 3 || randomNumber == 4) {
    bot =  "Paper";
  } else {
    bot="Scissor";
  }
  document.querySelector(".bot-response").innerHTML = bot;
  return bot;
}
