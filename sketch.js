        
    var backgroundImg, background;
    var cometImg, cometImg, cometGroup;
    var starImg, starImg, starGroup;
    var rocket, rocketImg;

    var gameState = "play"
    var Star=0

    function preload(){
        backgroundImg = loadImage("background.jpg");
        cometImg = loadImage("comet.png");
        rocketImg = loadImage("rocket.png");
        starImg = loadImage("star.png");
    
    }

    function setup() {
        createCanvas(windowWidth,windowHeight);
        background = createSprite(400,800,windowWidth,windowHeight);
        background.addImage("background",backgroundImg);
        background.velocityY = 1;
        
        cometGroup = new Group();
        starGroup = new Group();
        
        rocket = createSprite(200,200,50,50);
        rocket.scale = 0.1;
        rocket.addImage("rocket", rocketImg);
    }


    function draw() {
        //background("white");
        text("Star: "+ Star, 500,50);
    if(background.y >400 ){
            background.y = 300
            
        } 
        
        if (gameState === "play") {
        
        if(keyDown("left")){
            rocket.x = rocket.x - 3;

        }
    if(keyDown("right")){
        
                rocket.x = rocket.x + 3;

            
            
        }
        
        if(keyDown("space")){
        
            rocket.velocityY = -10;


        }
        
       rocket.velocityY=rocket.velocityY+0.8
        
        if(starGroup.isTouching(rocket)){
            Star=Star+1
        }
            
        
            spawnstars();

        
    
        if(cometGroup.isTouching(rocket)){
            gameState = "end"
        }
            
            
        }

        if (gameState === "end"){
            stroke("yellow");
            fill("yellow");
            textSize(30);
            text("Game Over", 230,250)
            rocket.velocityY = 0;
            background.velocityY=0;
            comet.velocityY=0;
            star.velocityY=0;
            rocket.destroy();
            starGroup.destroyEach();
            cometGroup.destroyEach();
            }  
        drawSprites();
        
    }
        
    

    function spawnstars()
    {
        if (frameCount % 240 === 0) {
        var star = createSprite(200, -50);
        star.scale=0.1
        var comet = createSprite(200,10);
        comet.scale=0.1
        star.x=Math.round(random(120,400))
        star.addImage("gffgf",starImg);
        comet.addImage("fdf",cometImg);
        
        star.velocityY = 1;
        comet.velocityY = 1;
        
        rocket.depth=star.depth
        rocket.depth+=1

        star.lifetime = 800;
        comet.lifetime = 800;
        
         
        starGroup.add(star);
    
        cometGroup.add(comet);
        
        }
    }

