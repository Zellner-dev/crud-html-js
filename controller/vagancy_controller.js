

const carSpaces = [
    'A1', 'A2', 'A3',
    'B1', 'B2', 'B3',
    'C1', 'C2', 'C3', 'D1'
]
console.log('Hello world')
function getFreeCard(id){ 
    return '<div class="card">'+
    '<div class="line-box">'+
        '<div class="line short"></div>'+
        '<div class="line long"></div>'+
    '</div>'+
    `<div class="title-box"><h1>${id}</h1></div>`+
    '<div class="status-box free"><p>Livre</p></div>'+
'</div>'
} 
function getBusyCard(id){ 
    return '<div class="card">'+
    '<div class="line-box">'+
        '<div class="line short"></div>'+
        '<div class="line long"></div>'+
    '</div>'+
    `<div class="title-box"><h1>${id}</h1></div>`+
    '<div class="status-box budy"><p>Ocupado</p></div>'+
'</div>'
} 


function init() {
    let cardList;
    for(carSpace in carSpaces) {
        
        const isBusy = localStorage.getItem(`A2_status`)
        console.log(isBusy)
        if(!cardList){
            cardList = getFreeCard(carSpaces[carSpace])
        } else {
            cardList = cardList + getFreeCard(carSpaces[carSpace])
        }
    }
    document.getElementById('body').innerHTML= cardList
} 

function saveData() {
    console.log('save Data')
    console.log(localStorage.setItem('A2_status' , true))
    init()
}

init()