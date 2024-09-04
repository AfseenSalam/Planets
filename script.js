//array
let planet = [
    { name: "Mercury", inner: true, diameter: 3031.9, color: "#696969" },
    { name: "Venus", inner: true, diameter: 7520.8, color: "#b89165" },
    { name: "Earth", inner: true, diameter: 7917.5, color: "#5a5b86" },
    { name: "Mars", inner: true, diameter: 4212.3, color: "#df8c4e" },
    { name: "Jupiter", inner: false, diameter: 86881, color: "#f6a049" },
    { name: "Saturn", inner: false, diameter: 72367, color: "#dcd3a1" },
    { name: "Uranus", inner: false, diameter: 31518, color: "#b4d9df" },
    { name: "Neptune", inner: false, diameter: 30599, color: "#456eff" },

];
//log the names
planet.forEach(p => console.log(p.name));
// diameter of planet in function
let total = 0;

function diameterCalculation(planets) {
    for (let i = 0; i < planets.length; i++) {
        total += planets[i].diameter;
    }
    let average = total / planets.length;
    let interrup = `Average diameter :${average}`;
    console.log(interrup);
}
diameterCalculation(planet);
//Previous and next button
let indexNumNode = 0;
let indexNode = document.querySelector("#indexDisplay");
let previousNode = document.querySelector("#previousPressed");
let nextNode = document.querySelector("#nextPressed");
let planetNode = document.querySelector("#planetName");
let innerNode = document.querySelector("#innerPlanet");
let displayNode = document.querySelector("#visualCircle");
function updatePlanetDisplay() {
    let currentPlanet = planet[indexNumNode];
    planetNode.innerHTML = currentPlanet.name;
    innerNode.innerText = currentPlanet.inner ? "Inner Planet" : "Outer Planet";
    displayNode.style.background = currentPlanet.color;
    displayNode.style.width = (currentPlanet.diameter / 100) + "px";
    displayNode.style.height= (currentPlanet.diameter / 100) + "px";
    if (indexNumNode === 0) {
        previousNode.disabled = true;
    }else{
        previousNode.disabled = false;
    }
    if (indexNumNode >= planet.length - 1) {
        nextNode.disabled = true;
    }else{
        nextNode.disabled = false;
    }

}
function indexDisplay() {
    indexNode.innerHTML = indexNumNode;
}

function addNumber() {
    if(indexNumNode<planet.length-1){
        indexNumNode++;
        indexDisplay();
        updatePlanetDisplay();
    }else{
        nextNode.disabled = true;
    }
    

}
function subNumber() {
    if(indexNumNode>0){
        indexNumNode--;
        indexDisplay();
        updatePlanetDisplay();
    }else{
        previousNode.disabled = true;
    }
    

}
indexDisplay();
updatePlanetDisplay();
