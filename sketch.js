var fixedrect, movingrect, apple, mago ;

function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(400, 100, 50, 80);
  movingrect = createSprite (400, 800, 80, 30);
  
  fixedrect.shapeColor = "red";
  movingrect.shapeColor = "red";
fixedrect.velocityY = 5
movingrect.velocityY = -5
apple = createSprite(800, 100, 50, 80);
mago = createSprite (800, 800, 80, 30);
apple.velocityY = 5
mago.velocityY = -5
}

function draw() {
  background(0);  

  
bounceoff(fixedrect,movingrect);

bounceoff(apple,mago);

  drawSprites();
}


  








