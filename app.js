
/*function button(){
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
asside.addEventListener("click",aside,true); */

/*
const x=new Promise((res,rej)=>{
    res("ok");
    rej("no");
   
});
function yo(){
    return [1,2,3,4,5,6];
}
async function func(){

console.log("start");


let y=await console.log("checking");
console.log(typeof y);
console.log(y);
console.log("prom received");

let z=await console.log("2nd check");
console.log(z);

}

async function func2(){
    await console.log("yoyo");
    console.log("yoyoyoyoyoyooyoyoy");}


func();
func2();
console.log("end");    */
/*
function a(name){
    this.name=name;
    function ok(){
        console.log("say ok");
    }

}

a.prototype.methods=()=>{
    console.log("how r u");
}

function b(img){
    this.image=img;
    function yo(){
        console.log("yoyo");
    }
}
const obja=new a("usa");
//console.log(obja);

const objb=Object.create(obja);
objb.methods();
*/

class a{

    constructor(name,age){

        this.name=name;
        this.age=age;
    }
}

class b extends a{

    constructor(height,name,age) {
        super(name,age);
        this.height=height;
    }
     yo() {
        console.log("hello");
        
    }
}

const objb=new b(6,"lizze",24);
console.log(objb);
