import { allRecipes } from "./allRecipes.js";
import { displayArray } from "./recipeHome.js";
import { recipeSearch } from "./recipeHome.js";
import { makePage } from "./recipePages.js";


////Check Page
if(window.location.pathname.includes('index.html')){
    mainPage();
}
if(window.location.pathname.includes('recipeHome.html')){
    recipeHome();
}
if(window.location.pathname.includes('recipePages.html')){
    recipePages();
}

////Main Page
function mainPage(){
}
////Recipe Home
function recipeHome(){
    displayArray(allRecipes);
    recipeSearch(allRecipes);
}
////Recipe Pages
function recipePages(){
    makePage(allRecipes);
}
