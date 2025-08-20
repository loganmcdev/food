export function makePage(recipesArr){
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let index = urlParams.get('index');
    let title = document.getElementById("title");
    title.textContent = recipesArr[index].name;
    let ingredientsList = document.getElementById("ingredientsList");
    let ingredients = recipesArr[index].ingredients;
    let instructionsList = document.getElementById("instructionsList");
    let instructions = recipesArr[index].instructions;
    let notesBlock = document.getElementById("notesBlock");
    let notesList = document.getElementById("notesList");
    let notes = recipesArr[index].notes;
    makeList(ingredientsList, ingredients);
    makeList(instructionsList, instructions);
    makeList(notesList, notes);
        function makeList(valueList,property){
            for(let i=0; i<property.length; i++){
                let li = document.createElement('li');
                li.innerText = property[i];
                valueList.appendChild(li)
            }
        }
    if(!notesList.innerText){
    notesBlock.style.display = "none";
}
}