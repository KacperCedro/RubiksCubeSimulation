var cubeSize = 1;
var tableOfSubCubes;
var tableOfSides = ["top", "bottom", "back", "front", "left", "right"];

function Run(){
    tableOfSubCubes = []
    tableOfSubCubes = CreateTableOfSubCubesY()
    CreateCube()
}
function CreateCube(){
    var cube = document.getElementById("cube")
    for (let y = 0; y < cubeSize; y++) {
        for (let x = 0; x < cubeSize; x++) {
            for(let z = 0; z < cubeSize; z++){
                CreateSubCubes(y,x,z, cube)
            }
        }
    }
}
function CreateSubCubes(y,x,z, cube){
    let subCube = document.createElement("div");
    subCube.className = "subCube"
    cube.appendChild(subCube)
    CreateCubeSides(subCube)
    tableOfSubCubes[y][x][z] = subCube
}
function CreateCubeSides(subCube){
    for (let i = 0; i < 6; i++){
        let figure = document.createElement("figure")
        figure.className = tableOfSides[i]
        subCube.appendChild(figure)      
    }
}
function CreateTableOfSubCubesY(){
    let table = []
    for (let y = 0; y < cubeSize; y++) {
        table[y] = CreateTableOfSubCubesX()
    }
    return table
}

function CreateTableOfSubCubesX(){
    let table = []
    for (let x = 0; x < cubeSize; x++) {
        table[x] = CreateTableOfSubCubesZ()
    }
    return table
}
function CreateTableOfSubCubesZ(){
    let table = []
    for (let z = 0; z < cubeSize; z++) {
        table[z] = []
    }
    return table
}