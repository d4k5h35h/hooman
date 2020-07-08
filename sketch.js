var checkboxes = [];
var label = [];
var button;
var likeCats = 1;

function setup() {
  createCanvas(400,400);
  background(255);
  textSize(24);
  text("ARE YOU HUMAN?",50,50);
  
  for(var i = 1; i <=4; i++){
   label = i
    if(i == 1){
      label = "Do you like people?"
    }
      if(i == 2){
      label = "Were you ever happy?"
    }
     if(i == 3){
      label = "Do you believe you are NOT a human?"
    }
      if(i == 4){
      label = "Do you sleep daily?"
    }
      
    checkboxes[i] = createCheckbox(label, false);
    checkboxes[i].position(20,i*30+50);
    checkboxes[i].changed(myCheckedEvent);

  }

  button = createButton("Submit");
  button.mouseReleased(answerScreen);
  button.position(50,200);

}

function answerScreen (){
 fill(255)
 noStroke()
 rect(0,200,400,200)
 fill(0)
 if (checkboxes[likeCats].checked() && checkboxes[2].checked() &&
     checkboxes[3].checked() && checkboxes[4].checked()) {
  text("Congrats!Welcome to the world!",0,320) 
 }
 if (checkboxes[1].checked() && checkboxes[2].checked() &&
     checkboxes[3].checked() && !checkboxes[4].checked() ) {
  text("Yeah I dont think you are one...",0,320) 
 }
 if (checkboxes[1].checked() && checkboxes[2].checked() &&
     !checkboxes[3].checked() && !checkboxes[4].checked())
 {
  text("Call 911!This person is an insomniac!",0,320) 
 }  
 if (checkboxes[1].checked() && !checkboxes[2].checked() &&
     !checkboxes[3].checked() && !checkboxes[4].checked()){
 text("This subject has no scope in India",0,320) 
 }  
  
 if (!checkboxes[1].checked() && checkboxes[2].checked() &&
     checkboxes[3].checked() && checkboxes[4].checked()) {
  text("You are human...Just not a good one..",0,320) 
 }
 if (!checkboxes[1].checked() && !checkboxes[2].checked() &&
     checkboxes[3].checked() && checkboxes[4].checked() ) {
  text("I doubt that you even exist...",0,320) 
 }
 if (!checkboxes[1].checked() && !checkboxes[2].checked() &&
     !checkboxes[3].checked() && checkboxes[4].checked())
 {
  text("Congrats hooman",0,320); 
 }  
 if (!checkboxes[1].checked() && !checkboxes[2].checked() &&
     !checkboxes[3].checked() && !checkboxes[4].checked()){
 text("ArE yOu SaSsIn' Me PuNk!",0,320) 
 }
 if (checkboxes[1].checked() && !checkboxes[2].checked() &&
     checkboxes[3].checked() && checkboxes[4].checked() ) {
  text("hello darkness YOUR old friend...",0,320) 
 }
 if (checkboxes[1].checked() && checkboxes[2].checked() &&
     !checkboxes[3].checked() && checkboxes[4].checked())
 {
  text("OK Boomer",0,320) 
 }   
 if (!checkboxes[1].checked() && checkboxes[2].checked() &&
     checkboxes[3].checked() && !checkboxes[4].checked() ) {
  text("Are you a SKRULL?",0,320) 
 }
 if (checkboxes[1].checked() && !checkboxes[2].checked() &&
     !checkboxes[3].checked() && checkboxes[4].checked())
 {
  text("You're a human, just backwards",0,320) 
 }  
 if (checkboxes[1].checked() && !checkboxes[2].checked() &&
     checkboxes[3].checked() && !checkboxes[4].checked()){
 text("Hello There",0,320) 
 }  
 if (!checkboxes[1].checked() && checkboxes[2].checked() &&
     !checkboxes[3].checked() && checkboxes[4].checked()){
 text("You ded!",0,320) 
 }  
  
 if (!checkboxes[1].checked() && !checkboxes[2].checked() && 
 checkboxes[3].checked() && !checkboxes[4].checked()){
 text("Who/What are you???",0,320) 
 }  
   
 if (!checkboxes[1].checked() && checkboxes[2].checked() && 
 !checkboxes[3].checked() && !checkboxes[4].checked()){
 text("Clap your hands",0,320) 
 }  
  
}

function myCheckedEvent() {
  if (this.checked()) {
    console.log("hi!");
  } else {
    console.log("Unchecking!");
  }
}