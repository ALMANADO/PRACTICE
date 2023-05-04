// HERE WE ARE USING KEY DOWN INSTEAD OF KEY PRESS
// SYNTAX
// addEventListener("for what",action)
// EXAMPLE
// document.addEventListener("keydown",function(event){
//     // SET TIME OUT EXAMPLE
//     // setTimeout(() => {
//     //     console.log(event)
//     // }, 5000); 
//     console.log(event)
//     alert(this+" was pressed")
// })
// FOR CLICKING (NORMAL DRUMKIT)
let message = "was pressed"
for (let i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        // ADDING ANIMATIONS
        animator(this.innerHTML);
        // ACTIONS
        switch (this.innerHTML){
            case "W":
                alert("W "+message)
                break;
            case "A":
                alert("A "+message)
                break;
            case "S":
                alert("S "+message)
                break;
            case "D":
                alert("D "+message)
                break;
        }
    })

}
// IT WORKS!!!
// FOR KEY DOWN DRUMKIT
// KEY DOWN CAN BE USED ONLY ON ENTIRE DOCUMENT LIKE
document.addEventListener("keydown",function(event){
    // ANIMATIONS
    animator(event.key);
    // ACTIONS
    listener(event.key);
})
    function listener(key){
       
      switch(key){
        case "W":
            alert("W was pressed")
            break
        case "A":
            alert("A was pressed")
            break
        case "S":
            alert("S was pressed")
            break
        case "D":
            alert("D was pressed")
            break
      }
        }
// BHAI BRAVO ITS WORKS!!!!
    function animator(letter){
        document.querySelector("."+letter).classList.add("pressed");
       setTimeout(() => {
        document.querySelector("."+letter).classList.remove("pressed");
       }, 1000);
    }
