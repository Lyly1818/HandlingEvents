

function click_window(){
    window.addEventListener("click", ()=>{
        console.log("You clicked m..fckr!");
    });
}
// click_window();
function  no_eventButton(){
    let button = document.querySelector("button");
    button.addEventListener("click", ()=>{
        console.log("Button clicked!")
    })
}

no_eventButton();
let btn =  document.getElementById("second");
function once(){
    console.log("Done");
    btn.removeEventListener("click", once)
}

btn.addEventListener("click", once);
//read mouse to see which side was clicked
function clickSide(){
    let  button = document.getElementById("third");
    button.addEventListener("mousedown", event =>{
        if ( event.button === 0){
            console.log("Left button")
        }
        else if(event.button === 1){
            console.log("Middle button");

        }
        else if (event.button === 2){
            console.log("Right button")
        }

    });
}

clickSide();

//Propagation
function  propagation(){
    let  para = document.getElementById("fourth");
    let button = document.getElementById("propag")
    para.addEventListener("mousedown", event=>{
        console.log("Handler for the paragraph");

    });
    button.addEventListener("mousedown", event=>{
        console.log("handler  for the button");
        if (event.button === 2) event.stopPropagation();

    });
}

propagation();

//Using the target property

