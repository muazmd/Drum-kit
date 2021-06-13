var images= ['crash.png', 'kick.png','snare.png' ,'tom1.png', 'tom2.png','tom3.png','tom4.png'];
var letters= ['w', 'a','s','k' ,'d', 'j', 'l'];

//document.querySelector('.a').style.backgroundImage = "url('images/crash.png')";
for (let n=0;n<7;n++){ 
   var url= "url('images/"+images[n];"')";
   var selector = '.'+letters[n];
   console.log(selector);
   document.querySelector(selector).style.backgroundImage= url;
}


for (let n=0;n<document.querySelectorAll('.drum').length;n++){ 

   document.querySelectorAll('.drum')[n].addEventListener('click',function() {
      var option = this.innerHTML;
      makesound(option)
      ButtonAnimation(option);
   
   });}
   


   document.addEventListener('keypress',(event)=> {
      makesound(event.key);
      ButtonAnimation(event.key);
   }
   )
   
   
   function makesound(key){
      console.log(key);
      switch (key) {
         case 'w':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
         case 'a':
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
         case 's':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
         case 'k':
            var tom3 = new Audio('sounds/tom-1.mp3');
            tom3.play();
            break;
         case 'd':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
         case 'j':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
         case 'l':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
      
         default:
            console.log('nothing here');
            break;
      }
   
   }


   function ButtonAnimation(key){
      var button=document.querySelector("."+key);
      
      button.classList.add('pressed');
      setTimeout(function(){
         button.classList.remove('pressed');
         
      }
      ,100);
   
      

   }
   


