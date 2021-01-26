
var child,school,flag;
var backgroundImg, happyImg, sadImg, schoolImg, flagImg;

function preload(){
  backgroundImg = loadImage("background.jpg");
  happyImg  = loadImage("happy emoji.png");
  sadImg = loadImage("sad emoji.png");
  schoolImg = loadImage("school.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  school = createSprite(displayWidth/2,50,10,10);
  school.addImage(schoolImg);


  child = createSprite(displayWidth/2,displayHeight/2,10,10);
  child.addImage(happyImg);
  child.scale = 0.16;

}



function draw() {
  background(backgroundImg);

  
  camera.y = child.y;
  camera.x = child.x; 

  allOldText();
  allNewText();

  if(keyDown(LEFT_ARROW)){
    child.x = child.x-2;
  }

  if(keyDown(RIGHT_ARROW)){
    child.x = child.x+2;
  }

  if(keyDown(UP_ARROW)){
    child.y = child.y-2;
  }

  if(keyDown(DOWN_ARROW)){
    child.y = child.y+2;
  }

  if(child.x < displayWidth/2){
    child.addImage(sadImg)
  }

  if(child.x > displayWidth/2){
    child.addImage(happyImg)
  }

  
  line(displayWidth/2,-20000,displayWidth/2,displayHeight+20000)
  textSize(32);
  textFont("Georgia");
  fill(255);
  text("பழைய கல்வி கொள்கை",100,50)
  text("புதிய கல்வி கொள்கை",displayWidth/2 + 250,50)
  drawSprites();
}

function allOldText(){
  textSize(28);
  textFont("Alatsi");
  fill(255);

  text("10 + 2 ", displayWidth/2 - 300,displayHeight/2);
  text("பள்ளி முறை", displayWidth/2 - 300,displayHeight/2 + 50);

  text("இந்த கொள்கை மதிப்பெண்கள் மற்றும் கல்வியாளர்களை மட்டுமே மையமாகக் கொண்டுள்ளது", displayWidth/2 - 1500,displayHeight/2 - 200);

  text("இந்தக் கொள்கை மாணவர்கள் தங்கள் சொந்த மொழியில் படிக்க அனுமதிக்காது", displayWidth/2 - 1300,displayHeight/2 - 100);
  
  text("எங்கள் திறமைகளில் எந்தவொரு இன்டர்ன்ஷிப்பையும் நாங்கள் பெறவில்லை", displayWidth/2 - 1500,displayHeight/2 + 250);

  text("தேர்வுகள் ஆங்கிலம் மற்றும் இந்தி மொழிகளில் மட்டுமே நடத்தப்படுகின்றன", displayWidth/2 - 1200,displayHeight/2 + 100);

  text("ஆசிரியர்களுக்கு ஒரு மாணவனை தரவரிசைப்படுத்த மட்டுமே உரிமை உண்டு", displayWidth/2 -1200, displayHeight/2 + 350);

  text("கல்வி செயல்திறனின் அடிப்படையில் மட்டுமே மாணவர்கள் தரவரிசையில் உள்ளனர்", displayWidth/2 - 1500,displayHeight/2 + 200);

  text("குறியீட்டு முறை, மட்பாண்டங்கள் போன்ற எந்த திறன்களும் மாணவர்களுக்கு கற்பிக்கப்படுவதில்லை", displayWidth/2 - 1900,displayHeight/2  + 400);

  text("வாரிய தேர்வுகள் ஆண்டுதோறும் நடத்தப்படுகின்றன", displayWidth/2 - 1600,displayHeight/2 + 45);

  text("கலாச்சார ஆய்வு எதுவும் வழங்கப்படவில்லை", displayWidth/2 - 1600,displayHeight/2 -300);

  text("பாடநெறி முடிந்தபிறகுதான் தகுதி வழங்கப்படுகிறது", displayWidth/2 - 2200,displayHeight/2 + 150);

  text("கல்லூரி சேர்க்கைக்கு 12 மதிப்பெண்கள் முக்கியம்", displayWidth/2 - 1700,displayHeight/2 - 30);

  text("கட்டணம் கட்டுப்படுத்தப்படவில்லை", displayWidth/2 - 1600,displayHeight/2 + 550);

  text("மாணவர்கள் பாடங்களுக்கு மட்டுப்படுத்தப்பட்டவர்கள்", displayWidth/2 - 2300,displayHeight/2 + 340);
  
}

function allNewText(){
  textSize(28);
  textFont("Alatsi");
  fill(255);

  text(" 5 + 3 + 3 + 4 ", displayWidth/2 + 50,displayHeight/2);
  text("பள்ளி முறை", displayWidth/2 + 50,displayHeight/2 + 50);

  text("இந்த கொள்கை மதிப்பெண்கள் மற்றும் கல்வியாளர்களில் மட்டும் கவனம் செலுத்துவதில்லை, இது திறன்கள் மற்றும் கல்விசாரா செயல்பாடுகளிலும் கவனம் செலுத்துகிறது", displayWidth/2 + 200,displayHeight/2 - 250);

  text("மாணவர்கள் இப்போது தங்கள் பிராந்திய மொழியில் படிக்கலாம்", displayWidth/2 + 300,displayHeight/2 - 100);
  
  text("எங்கள் பள்ளி வயதில் எங்கள் திறமைகளில் இன்டர்ன்ஷிப் பெறலாம்", displayWidth/2 + 500,displayHeight/2 + 200);

  text("இப்போது தேர்வுகள் பிராந்திய மொழிகளில் கிடைக்கின்றன", displayWidth/2 + 250,displayHeight/2 + 120);

  text("ஆசிரியர்களும் மாணவர்களும் ஒரு குழந்தையை தரவரிசைப்படுத்துகிறார்கள்", displayWidth/2 +100, displayHeight/2 +330);

  text("கல்வி செயல்திறன் மற்றும் படைப்பாற்றல் ஆகியவற்றின் அடிப்படையில் மாணவர்கள் தரவரிசையில் உள்ளனர்", displayWidth/2 + 1000,displayHeight/2 - 310);

  text("குறியீட்டு முறை, மட்பாண்டங்கள் போன்ற பல திறன்களை மாணவர்களுக்கு கற்பிக்கப்படுகிறது", displayWidth/2 + 700,displayHeight/2  + 400);

  text("இப்போது போர்டு தேர்வுகள் இரண்டு செமஸ்டர்களில் நடத்தப்படுகின்றன", displayWidth/2 + 900,displayHeight/2 + 10);

  text("இந்திய கலாச்சாரம் பள்ளியில் கற்பிக்கப்படுகிறது", displayWidth/2 + 900,displayHeight/2 +250);

  text("முழுமையான படிப்புக்குப் பிறகு தகுதி வழங்கப்படுகிறது மற்றும் படிப்புகளுக்கு இடையில் சான்றிதழ்கள் மற்றும் டிப்ளோமா வழங்கப்படுகின்றன", displayWidth/2 + 1500,displayHeight/2 + 140);

  text("கல்லூரி சேர்க்கைக்கு 12 மதிப்பெண்கள் முக்கியமல்ல, மாணவர்கள் நுழைவுத் தேர்வை வழங்கலாம்", displayWidth/2 + 800,displayHeight/2 - 200);

  text("கட்டணம் தடைசெய்யப்பட்டுள்ளது", displayWidth/2 + 300,displayHeight/2 + 500);

  text("மாணவர்கள் விரும்பும் எந்த பாடத்தையும் எடுக்கலாம்", displayWidth/2 + 1550,displayHeight/2 + 350);
  
}