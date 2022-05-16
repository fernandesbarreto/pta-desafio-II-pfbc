const character = document.getElementsByClassName("character")[0]; // Guarda o elemento de classe "character"
const containerCharacter = document.getElementsByClassName("container-character")[0]; // Guarda o elemento de classe "container-character"


const VELOCITY = 10; // Define a velocidade como 10

const SCREEN_WIDTH = screen.width; // Guarda o valor da largura da tela
const SCREEN_HEIGHT = screen.height; // Guarda o valor da altura da tela

let xPosition = 500; // Posição x inicial do Roberto
let yPosition = 300; // Posição y inicial do Roberto

const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"] // Array de strings que se referem às teclas
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"]; // Array de strings que se referem às classes de direções de Roberto

window.addEventListener("keydown", (event) => { // Arrow function para perceber o pressionamento de teclas
    const key = event.key; // Guarda a tecla pressionada em key

    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => { // Função que recebe o array keysAvaliable como parâmetro
        return currentKey === key; // Retorna true caso a tecla pressionada esteja presente em keysAvaliable
    })

    if(!keyPressedAvaiable) return; // Se a tecla pressionada não estiver presente em keysAvaliable, retorna e sai da função

    directions.forEach((direction) => { // Analisa cada elemento do array directions
        if(character.classList.contains(direction)) character.classList.remove(direction); //Remove a classe da "direção" atual do character
    })


    if(key === "ArrowUp" && yPosition > 0){ // Se a tecla pressionada for a seta para cima
                                            // E SE yPosition FOR MAIOR QUE 0

        character.classList.add("turnUp"); // Roberto recebe a classe "turnUp" e se rotaciona
        yPosition -= VELOCITY; // Roberto se move VELOCITY pixels para cima
    }

    if(key === "ArrowDown" && yPosition < (SCREEN_HEIGHT-100)){ // Se a tecla pressionada for a seta para baixo
                                                              // E SE yPosition FOR MENOR QUE A ALTURA DA TELA -100 (para que Roberto não suma) 
        
        character.classList.add("turnDown"); // Roberto recebe a classe "turnDown" e se rotaciona
        yPosition += VELOCITY; // Roberto se move VELOCITY pixels para baixo
    }

    if(key === "ArrowLeft" && xPosition > 0){ // Se a tecla pressionada for a seta para a esquerda
                                              // E SE xPosition FOR MAIOR QUE 0

        character.classList.add("turnLeft"); // Roberto recebe a classe "turnLeft" e se rotaciona
        xPosition -= VELOCITY; // Roberto se move VELOCITY pixels para a esquerda
    }

    if(key === "ArrowRight" && xPosition < (SCREEN_WIDTH-100)){ // Se a tecla pressionada for a seta para a direita
                                                              // E SE yPosition FOR MENOR QUE A LARGURA DA TELA -100 (para que Roberto não suma)
       
        character.classList.add("turnRight"); // Roberto recebe a classe "turnRight" e se rotaciona
        xPosition += VELOCITY; // Roberto se move VELOCITY pixels para a direita
    }

    //------------------------------------------------------------//
    containerCharacter.style.top = `${yPosition}px`; // Define o valor em pixels do top do containerCharacter como yPosition (para o CSS)
    containerCharacter.style.left = `${xPosition}px` // Define o valor em pixels do left do containerCharacter como xPosition (para o CSS)
    // Essa notação funciona porque, com os acentos graves, tudo o que está entre ${} é formatado e adquire o valor guardado na variável.
    //------------------------------------------------------------//
});
