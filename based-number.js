let num = 6;
let binary = "";
for(let i = num; i>0; i = Math.floor(i/2)){
    if(i % 2 == 0){
        binary = "0" + binary;
    }
    else{
        binary = "1" + binary;
    }
}
console.log("The binary of", num, "is", binary);