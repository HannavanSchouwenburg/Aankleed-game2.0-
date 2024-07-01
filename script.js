console.log("connected") 

let torsoaan = false 
let woosh = new Audio("mp3/woosh.mp3")
let trui = document.querySelector("#trui")
let Jurkje = document.querySelector("#Jurkje")
let jeans = document.querySelector("#jeans")
let gestreeptshirt = document.querySelector("#gestreeptshirt")

//
function kledingtrui(){
    if(torsoaan = true)
    {
        trui.classList.remove("positietorso") 
        torsoaan = false 
    }
    
}
function kledingjurkje(){
    if(torsoaan = true)
    {
        Jurkje.classList.remove("positiejurkje") 
        torsoaan = false 
    }
}
function kledingshirt(){
    if(torsoaan = true)
    {
        gestreeptshirt.classList.remove("positietorso") 
        torsoaan = false 
    }
}
function kledingjeans(){
    if(torsoaan = true)
    {
        jeans.classList.remove("positiebenen") 
        torsoaan = false 
    }
}

function truiverandering(){
    kledingjurkje()
    kledingshirt()
    trui.classList.add("positietorso")
    torsoaan = true
    woosh.play()
}

trui.addEventListener("click",truiverandering)

function Jurkjeverandering(){
    kledingjeans()
    kledingtrui()
    kledingshirt()
    Jurkje.classList.add("positiejurkje")
    woosh.play()
}

Jurkje.addEventListener("click",Jurkjeverandering)

function jeansverandering(){
    kledingjurkje()
    jeans.classList.add("positiebenen")
    woosh.play()
}

jeans.addEventListener("click",jeansverandering)


function gestreeptshirtverandering(){
    kledingtrui()
    kledingjurkje()
    console.log(torsoaan)
    gestreeptshirt.classList.add("positietorso")
    woosh.play()
}
gestreeptshirt.addEventListener("click",gestreeptshirtverandering)


