var garden , gardenImg ;
var cat , catImg , catImg2 , catImg3  ;
var mouse , mouseImg , mouseImg2 , mouseImg3;



function preload() {
    gardenImg = loadImage("images/garden.png") ;
    catImg = loadAnimation("images/cat1.png") ;
    mouseImg = loadAnimation("images/mouse1.png") ;
    catImg2 = loadAnimation("images/cat3.png ");
    mouseImg2 = loadAnimation("images/mouse2.png" , "images/mouse3.png")
    catImg3 = loadAnimation("images/cat4.png") ;
    mouseImg3 = loadAnimation("images/mouse4.png") ;
    //load the images here
}

function setup(){
    createCanvas(1000,800);
    
    cat =  createSprite(450 ,400);
    cat.addAnimation( "restingCat",catImg)
    cat.scale = 0.1 ;
    
    mouse = createSprite(70 , 400)
    mouse.addAnimation("standingMouse",mouseImg)
     mouse.scale = 0.1
}

function draw() {

    background(gardenImg);
    
    if (cat.x - mouse.x < cat.width/2 + mouse.width/2){
        cat.velocityx = 0
        cat.addAnimation("catchingCat" , catImg3)

        cat.changeAnimation("catchingCat" ) ;
        mouse.addAnimation("restedMouse" , mouseImg3)

        mouse.changeAnimation("restedMouse" )
    }
    drawSprites();
    

}


function keyPressed(){
if (keyCode === LEFT_ARROW ){
cat.velocityX = -2 ;
cat.addAnimation( "walkingCat",catImg2)

cat.changeAnimation("walkingCat")
mouse.addAnimation("teasingMouse",mouseImg2)

mouse.changeAnimation("teasingMouse")

}
}