import React from "react";

async function randomQuote() {
    const response = await fetch('https://api.quotable.io/random')
    const quote = await response.json()
    const uuu = JSON.parse(JSON.stringify(quote))

    let aaa = document.querySelector("#div-for-content")
    let bbb = document.querySelector("#div-for-author")
    if (aaa !== null && bbb!== null) {
        aaa.innerHTML = "Цитата: " + uuu.content;
        bbb.innerHTML = "Автор: " + uuu.author;
    }
    console.log(uuu);
    

}

export default randomQuote;