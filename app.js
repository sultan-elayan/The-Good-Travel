'use strict';

// calling the form and make event listener
let from = document.getElementById('form');
from.addEventListener('submit', addTravel);

// definr main array
let trip = [];

// making the calling function , and its conneted to the form 
function addTravel(event) {
    event.preventDefault();

    let name = event.target.name.value;
    let place = event.target.place.value;
    let typeTrans = event.target.typeTrans.value;

    let addTravel = new Travel(name, place, typeTrans);

    addTravel.render();
    saveToLocal();

}


// making the constructor , with argument , then push all data to the main array
function Travel(name, place, typeTrans, image) {

    this.name = name;
    this.place = place;
    this.typeTrans = typeTrans;
    this.image = image;
    trip.push(this);


}




// adding the render prototype to show the table 

Travel.prototype.render = function() {

        let table = document.getElementById('table');


        let image = document.createElement('th');
        table.appendChild(image);
        image.innerHTML = `<img src="img/places/${this.place.toUpperCase()}.png" alt="${this.place}" width=200px>`

        let th = document.createElement('th');
        table.appendChild(th);
        th.textContent = 'Place Name';

        let td = document.createElement('td');
        th.appendChild(td);

        td.textContent = 'Trip Place';


        let td1 = document.createElement('td');
        td.appendChild(td1);

        td1.textContent = 'Type Of Transport';



        let th2 = document.createElement('th');
        table.appendChild(th2);
        th2.textContent = this.name;

        let td2 = document.createElement('td');
        th2.appendChild(td2);

        td2.textContent = this.place;

        let td3 = document.createElement('td');
        td2.appendChild(td3);

        td3.textContent = this.typeTrans;




    }
    // adding table to local storage , by make the data string
function saveToLocal() {

    localStorage.setItem('trip', JSON.stringify(trip));


}

// calling the data form local after normlized the data by parse 
function exportFromLocal() {

    let data = JSON.parse(localStorage.getItem('trip'));

    if (data !== null) {
        for (let i = 0; i < data.length; i++) {
            let exportedData = new Travel(data[i].name, data[i].place, data[i].typeTrans)
            exportedData.render();
        }

    }

}

//call export function
exportFromLocal();

/////////////// strtech goal//////////
// i triedto clear local history
// function remover() {

//     localStorage.clear('trip');

// }