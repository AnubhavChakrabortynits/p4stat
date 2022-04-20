/*fetch("https://alpha-lms.herokuapp.com/sherlock").then((e)=>{
  return e.json();
}).then((a)=>{
console.log(a);
})*/
let success=false;
let datalist;
let usa=`sherlock`;
async function datas(book){
  let fdata=await fetch(`https://alpha-lms.herokuapp.com/${book}`);
  success=true;

  let sdata=await fdata.json();
  for(let i in sdata){

    let isbn=document.createElement("div");
    isbn.textContent=sdata[i]['ISBN']; 
    document.body.append(isbn);

    let namebook=document.createElement("div");
    namebook.textContent=sdata[i]['name'];
    document.body.append(namebook);

    let auth=document.createElement("div");
    auth.textContent=sdata[i]['author'];
    document.body.append(auth);

    let copies=document.createElement("div");
    copies.textContent=sdata[i]['copies'];
    document.body.append(copies);
    
    let spaces=document.createElement("br");
  
    document.body.append(spaces);
    document.body.append(spaces);
  }
  console.log(sdata);

}
datas(usa);




