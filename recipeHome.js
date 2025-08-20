////Search Function
export function recipeSearch(insertArr){
    function filterBy(searchTerm){
        function makeSearchable(arr){
            let arrB = [];
            for(let i=0;i<arr.length;i++){
                arrB.push(arr[i]);
                arrB[i].ingredients.join(" ");
                delete arrB[i].instructions;
                delete arrB[i].notes;
            }return arrB
        }
        let arrA = [];
        let arrB = makeSearchable(insertArr);
        for(let i=0;i<insertArr.length;i++){
            let flatValues = Object.values(arrB[i]).join(" ");
            if(flatValues.toLowerCase().includes(searchTerm.toLowerCase())){
                    arrA.push(insertArr[i]);
            }
        }
        return arrA
    }
    const input = document.getElementById("input");
    input.addEventListener("keyup", ()=>{
        let newA = filterBy(input.value);
        displayArray(newA);
    })
}
////Array display
export function displayArray(arr){
    let searchBox = document.getElementById("searchBox");
    searchBox.innerHTML = "";
    let ul = document.createElement('ul');
    for(let i=0; i<arr.length; i++){
    let a = document.createElement('a');
        a.textContent = arr[i].name;
        a.href = arr[i].href;
    let li = document.createElement('li');
        li.appendChild(a);
        ul.appendChild(li);
    searchBox.appendChild(ul);
}}
