let lucky = 3;
let guess = Math.floor(Math.random() * 10) + 1;
while(guess != lucky){
  console.log("Nope, it isn't", guess);
  guess = Math.floor(Math.random() * 10) + 1;
}
console.log("My lucky number is", lucky);