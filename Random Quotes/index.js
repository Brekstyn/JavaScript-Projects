const btn= document.getElementById("btn");
const output = document.querySelector(".output");

let quote = [
    "In the middle of difficulty lies opportunity. — Albert Einstein",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. — Ralph Waldo Emerson",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "Life is what happens when you're busy making other plans. — John Lennon",
    "The only way to do great work is to love what you do. — Steve Jobs",
    "It does not matter how slowly you go as long as you do not stop. — Confucius",
    "You miss 100% of the shots you don’t take. — Wayne Gretzky",
    "Not everything that is faced can be changed, but nothing can be changed until it is faced. — James Baldwin",
    "It always seems impossible until it’s done. — Nelson Mandela",
    "Be yourself; everyone else is already taken. — Oscar Wilde"
  ];
  

btn.addEventListener("click",()=>{
    console.log("clicked");
    let random = Math.floor(Math.random()*quote.length);
    output.textContent = quote[random];
})