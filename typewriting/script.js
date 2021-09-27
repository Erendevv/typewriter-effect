const texts = ["Youtuberım","Geliştiriciyim","Öğrenciyim"];
let index=0;
let count=0;
let currentText="";
let letter= "";

(function textFunc(){
    
    if(count===texts.length){
        //Loop (Döngü)
        count=0;
    }
    currentText= texts[count];
    letter = currentText.slice(0,index++);
    document.querySelector('.text').textContent= letter;
    if(letter.length===currentText.length){
        count++;
        index=0;
    }
    setTimeout(textFunc,1);
})();