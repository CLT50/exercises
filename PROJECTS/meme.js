//const form=document.querySelector("#meme-generator");//
const imageFile=document.querySelector("#imageFile");
const topText=document.querySelector("#topText");
const bottomText=document.querySelector("#bottomText")
const canvas=document.querySelector("#meme")

let image;

imageFile.addEventListener("change", ()=> {
    const imageDataUrl=URL.createObjectURL(imageFile.files[0]);
});