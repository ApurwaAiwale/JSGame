//get to DOM html elements
const gameContainer = document.querySelector(".container"),
 userResult = document.querySelector(".user_result img"),
 cpuResult = document.querySelector(".cpu_result img"),
 result = document.querySelector(".result"),
 optionImages = document.querySelectorAll(".option_image");

 //console.log(gameContainer,userResult,cpuResult,result,optionimages)

 //loop through each option image element
 optionImages.forEach((image, index) =>{
    image.addEventListener("click",(e) =>{
        image.classList.add("active");

        userResult.src =cpuResult.src = "image/rock.png";
        result.textContent="wait ...."

        //loop through each option image again
        optionImages.forEach((image2 ,index2)=>{
            //if the current index does not match the clicked index
            //remove the "ative" class from the other option images
            index !== index2 && image2.classList.remove("active");
       });

       gameContainer.classList.add("start");


     // set time out to delay display result calculation
     let Time = setTimeout(()=>{

        gameContainer.classList.remove("start");

        //get the source of the clicked option image
       //imgage click kelyavar imsge source bhetel
       let imageSrc = e.target.querySelector("img").src;
       //console.log(imageSrc);
      
       //set the userimage to option image
       //left hand side change hoil whener I click on below 3 image 
       userResult.src = imageSrc;

       //gemerate randomNumber between 0 and 2
       let randomNumber = Math.floor((Math.random())*3);
       //console.log(randomNumber);

       //Create an array of CPU  image option
       let cpuImage =["image/rock.png","image/paper.png","image/scissor.png"];
       //set cpu image to a random option from the array
       cpuResult.src = cpuImage[randomNumber];

       //assign a letter value to the CPU option (R for stone , P for paper , s for scissors)
       let cpuValue = ["R","P","S"][randomNumber];
       //assign a letter value to the clicked option (based on index)
       let userValue = ["R","P","S"][index];
       //console.log(userValue,cpuValue);

       //create an object with all possible outcomes
       let outcomes={
           
           RR:"DRAW",
           RP:"CPU",
           RS:"USER",
           PP:"DRAW",
           PR:"USER",
           PS:"CPU",
           SS:"Drwa",
           SR:"Cpu",
           SP:"User",

       };
    // look up the outcome value based on user and cpu actions 
    let outcomeValue = outcomes[userValue + cpuValue];
    //console.log(outcomeValue);
    
    //Display the result 
    result.textContent = userValue === cpuValue ? "Match Draw": `${outcomeValue} Won !!!`;
   
     },2500);
    });
 });