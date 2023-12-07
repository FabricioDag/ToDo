class Card{

    constructor(id,title,description){
        this.id = id;
        this.title = title;
        this.description = description;
    }
 
}

var arrayCards = []

function readInputs(){
    let title = document.getElementById("titleInput").value
    let description = document.getElementById("descriptionInput").value
    console.log(title, description)
    validateInputs(title, description)
}

function validateInputs(title,description){
    try{
        if(title == '') throw "Insira um Nome"
        if(description == '') throw "Insira uma descrição valida"
        createCard(title, description)
        
    } catch(error){
        alert('Erro: ' + error)
    } 
}

function createCard(title, description){
    let card = new Card
    card.id = "testando ID"
    card.title = title
    card.description = description
    arrayCards.push(card)
}


function showArray(arr){
    // list can be whatever list i want to show so this can turn into a specific search results

    let cardsWrapper = document.getElementById("cardsWrapper")
    //cardsWrapper.innerHTML = ""

    for(let i = 0; i < arr.length; i++){
        //create card capsule
        let card = document.createElement('div')
        card.classList.add("card")
        cardsWrapper.appendChild(card)

        //create card textArea
        let textArea = document.createElement('div')
        card.classList.add("textArea")
        card.appendChild(textArea)

        //create card id
        let id = document.createElement('p')
        id.classList.add("id")
        textArea.appendChild(id)

        //create card mainTextDiv
        let mainTextCard = document.createElement('div')
        mainTextCard.classList.add("mainTextCard")
        textArea.appendChild(mainTextCard)

        //create card title
        let title = document.createElement('h3')
        title.classList.add("title")
        mainTextCard.appendChild(title)

        //create card description
        let description = document.createElement('p')
        description.classList.add("description")
        mainTextCard.appendChild(description)
    }
}









function debug(){
    console.log(arrayCards)
    showArray(arrayCards)
}