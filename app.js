function button(){
    console.log("b");
}
function aside(){
    console.log("a");
}
function main(){
    console.log("main");
}

const buttton=document.querySelector("button");
const asside=document.querySelector("aside");
const mmain=document.querySelector("main");

buttton.addEventListener("click",(e)=>{
    console.log("rukh bsdk");
    e.stopPropagation();

});

mmain.addEventListener("click",main);
asside.addEventListener("click",aside);

buttton.addEventListener("click",button,true);

mmain.addEventListener("click",main,true);
asside.addEventListener("click",aside,true);