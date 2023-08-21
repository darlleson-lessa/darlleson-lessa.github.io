let googlePesquisar = document.getElementById("googlePesquisar");
let googlePesquisa = document.getElementById("googlePesquisa")



googlePesquisa.addEventListener("input", function(){
    let googleSearch =  "https://google.com/search?q=" + encodeURIComponent(googlePesquisa.value)
    googlePesquisar.setAttribute("href", googleSearch)
})