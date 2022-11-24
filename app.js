
var numberOfAni = document.querySelectorAll(".ani").length;
for (var i = 0; i < numberOfAni; i++){

    var animalSound = document.querySelectorAll(".ani")[i].addEventListener("click", function(){
        // var cowSound = new Audio("./sounds/cow.mp3")
        // cowSound.play()
 
        
    var buttonInnerHTML = this.innerHTML
   switch (buttonInnerHTML) {

    
    case "Alligator":
        
         var alligatoround = new Audio("./sounds/alligator.mp3")
        alligatoround.play()
        break;
   
        case "Bee":
        
         var beeSound = new Audio("./sounds/bee.mp3")
        beeSound.play()
        break;
   

        case "Bison":
        
         var bisonSound = new Audio("./sounds/bison.mp3")
        bisonSound.play()
        break;


        case "Cat":
        
         var catSound = new Audio("./sounds/cat.mp3")
        catSound.play()
        break;


        case "Chicken":
        
         var chickenSound = new Audio("./sounds/chicken.mp3")
        chickenSound.play()
        break;


        case "Cow":
        
         var cowSound = new Audio("./sounds/cow.mp3")
        cowSound.play()
        break;


        case "Elephant":
        
         var ElefantSound = new Audio("./sounds/Elefant.mp3")
        ElefantSound.play()
        break;


        case "Goat":
        
         var goatSound = new Audio("./sounds/goat.mp3")
        goatSound.play()
        break;


        case "Gorilla":
        
         var GorillaSound = new Audio("./sounds/Gorilla.mp3")
        GorillaSound.play()
        break;


        case "Horse":
        
         var horseSound = new Audio("./sounds/horse.mp3")
        horseSound.play()
        break;


        case "Leopard":
        
         var LeopardSound = new Audio("./sounds/Leopard.mp3")
        LeopardSound.play()
        break;


        case "Lion":
        
         var lionSound = new Audio("./sounds/lion.mp3")
        lionSound.play()
        break;


        case "Pony":
        
         var PonySound = new Audio("./sounds/Pony.mp3")
        PonySound.play()
        break;


        case "Rattlesnake":
        
         var rattlesnakeSound = new Audio("./sounds/rattlesnake.mp3")
        rattlesnakeSound.play()
        break;


        case "Sheep":
        
         var sheepSound = new Audio("./sounds/sheep.mp3")
        sheepSound.play()
        break;


        case "Vulture":
        
         var vultureSound = new Audio("./sounds/vulture.mp3")
        vultureSound.play()
        break;


        case "Wolf":
        
            var wolfSound = new Audio("./sounds/wolf.mp3")
           wolfSound.play()
           break;
    
    default:
        break;
   }

   

        console.log();
    })

}

