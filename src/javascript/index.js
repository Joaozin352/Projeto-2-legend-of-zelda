/* 
objetivo 1: quando o usuario clickar no botao de ver trailer abriremos o modal com o video do trailer:
    passo 1 : pegar o elemento q representa o botao usando js.= terminado

    passo 2 : indentificar quando o usuario clickar no botao.
    passo 3 :pegar o modal com js.
    passo 4 abrir o modal na tela.

objetivo 2 : quando o usuario clickar no x fechar o modal
   passo 1 : pegar o elemento de fechar o modal usando js.
   passo 2: indentificar quando o usuario clickar no x.
   passo 3: fechar modal.  
*/
const botaoTrailer = document.querySelector(".botao")
const video = document.getElementById("video")

const modal= document.querySelector(".modal")

botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto");
    video.setAttribute("src", "/src/videos/Sequel to The Legend of Zelda_ Breath of the Wild - E3 2021 Teaser - Nintendo Direct.mp4")
})

const fechar_modal = document.querySelector(".fechar_modal")



fechar_modal.addEventListener("click", () => {
  modal.classList.remove("aberto");
  video.setAttribute("src", "");
})



