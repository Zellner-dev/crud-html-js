

const carSpaces = [
    'A1', 'A2', 'A3',
    'B1', 'B2', 'B3',
    'C1', 'C2', 'C3', 'D1'
]

function validateForm() {
    const carSpace = document.getElementById('carSpace').value.trim()
    console.log(carSpace)
    const apartmentNumber = document.getElementById('apartmentNumber').value.trim()
    console.log(apartmentNumber)
    const apartmentBloc = document.getElementById('apartmentBloc').value.trim()
    console.log(apartmentBloc)
    const carPlate = document.getElementById('carPlate').value.trim()
    console.log(carPlate)
    const carModel = document.getElementById('carModel').value.trim()
    console.log(carModel)
    const carColor = document.getElementById('carColor').value.trim()
    console.log(carColor)
    if(carSpace == ''){
        alert('Escolha uma vaga.')
    } else if(apartmentNumber == '') {
        alert('Insira o número do seu apartamento.')
        return;
    } else if(apartmentBloc == '') {
        alert('Insira o bloco do apartamento.')
        return;
    } else if(carPlate == '') {
        alert('Insira a placa do seu carro.')
        return;
    } else if(carModel == '') {
        alert('Insira o modelo do seu carro.')
        return;
    } else if(carColor == '') {
        alert('Insira a cor do seu carro.')
        return;
    }
    const data = {
        isBusy : true,
        carPlate : carPlate,
        apartmentNumber : apartmentNumber,
        apartmentBloc : apartmentBloc,
        carModel : carModel,
        carColor : carColor,
    }
    saveData(carSpace, data)
}
function getFreeCard(id){ 
    return '<div class="card">'+
    // `<button type="button" onclick="saveData('${id}')" >teste</button>`+
    '<div class="line-box">'+
        '<div class="line short"></div>'+
        '<div class="line long"></div>'+
    '</div>'+
    `<div class="title-box"><h1>${id}</h1></div>`+
    '<div class="status-box free"><p>Livre</p></div>'+
'</div>'
} 

function getBusyCard(id ,carSpace){ 
    carSpace = JSON.parse(carSpace)
    return '<div class="card busy">'+

    `<div class="id"><p>${id}</p></div>`+
    `<div class="info"><p>Bloco ${carSpace.apartmentBloc}</p></div>`+
    `<div class="info"><p>Número ${carSpace.apartmentNumber}</p></div>`+
    `<div class="info"><p>Placa ${carSpace.carPlate}</p></div>`+
    `<div class="info"><p>Modelo ${carSpace.carModel}</p></div>`+
    `<div class="info"><p>Cor ${carSpace.carColor}</p></div>`+
    '<div class="status"><p>Ocupado</p></div>'+
    `<button onclick="removeData('${id}')">LIMPAR</button>`+
'</div>'
} 


function init() {
    if(document.getElementById('body') == null){
        return;
    }
    let cardList;
    for(let index in carSpaces) {
        const carId = carSpaces[index]
        const carSpace = localStorage.getItem(carId)
        let card;
        card = carSpace == null ? getFreeCard(carId) : getBusyCard(carId, carSpace)
        cardList = !cardList ? card : cardList + card
    }
    document.getElementById('body').innerHTML= cardList
} 

function saveData(id, data) {
    localStorage.setItem(id, objectToJson(data))
    window.location.replace('../home/index.html');
}

function removeData(id) {
    console.log('remove')
    localStorage.removeItem(id)
    // console.log(JSON.parse(localStorage.getItem('A1')).apartmentBloc)
    init()
}

function objectToJson(json) {
    return JSON.stringify(json)
}

init()