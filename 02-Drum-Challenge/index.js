for(let i = 0; i<document.querySelectorAll('.drum').length;i++){
    function handleClick(){
        
        let buttonInnerHTML = this.innerHTML
        
        
        let make_sound = function(key){
            switch(key){
                case 'w':
                    let tom1 = new Audio('sounds/tom-1.mp3');
                    tom1.play();
                    break;
                case 'a':
                    let tom2 = new Audio('sounds/tom-2.mp3');
                    tom2.play();
                    break;
                    case 's':
                        let tom3 = new Audio('sounds/tom-3.mp3');
                        tom3.play();
                        break;
                    case 'd':
                        let tom4 = new Audio('sounds/tom-4.mp3');
                        tom4.play();
                        break;
                    case 'j':
                        let snare = new Audio('sounds/snare.mp3');
                        snare.play();
                        break;
                    case 'k':
                        let crash = new Audio('sounds/crash.mp3');
                        crash.play();
                        break;
                    case 'l':
                        let kick = new Audio('sounds/kick-bass.mp3');
                        kick.play();
                        break;        
                default:
                    console.log(buttonInnerHTML)
                    break;
            }
        }
        
        clicked(buttonInnerHTML)
        make_sound(buttonInnerHTML)
        
        document.addEventListener('keydown', function(event){
            make_sound(event.key)
            clicked(event.key)
            
        })
        
        
    }
    document.querySelectorAll('.drum')[i].addEventListener('click', handleClick)
    function clicked(currentKey){
        let active_btn = document.querySelector('.' + currentKey)
        active_btn?.classList.add('pressed')
        setTimeout(function remove(){
            active_btn?.classList.remove('pressed')
        }, 100);
    }
    
}
