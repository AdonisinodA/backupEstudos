
// as function's over e out serve para dar uma cor na entrada e saída do cursor do mouse

function over(ele){

    ele.style.backgroundColor = "red";
}


function out(ele){
    ele.style.backgroundColor = "blue";
}


function changeh1(i){ 
        
    let h1 = document.getElementsByTagName("h1")[1]
    h1.innerText = i.value;
    console.log(i);
}


function teste(){
    console.log("olá,mundo");
}

