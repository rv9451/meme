const memeGenratebtn= document.querySelector(".meme-genrator .meme-btn");
const memeImg = document.querySelector(".meme-genrator img");
const memetitle = document.querySelector(".meme-genrator .meme-title")
const memeAuth = document.querySelector(".meme-genrator .meme-author");


const updateDetails = (url , title , author)=>{
    memeImg.setAttribute("src",url);
    memetitle.innerHTML= title ;
    memeAuth.innerHTML=`Meme by ${author}`;
    
}
const memeGenrator = () =>{
    fetch("https://meme-api.com/gimme")
    .then((response) => response.json())
    .then((data) =>{
        updateDetails(data.url , data.title ,data.author);
    })
}
memeGenratebtn.addEventListener('click',memeGenrator)
memeGenrator()