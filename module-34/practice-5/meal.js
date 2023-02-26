// load function
const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}


// display data function
const displayMeals = meals => {
    //step 1:  container element
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = '';

    meals.forEach(meal => {
        console.log(meal);
        // step 2:  create child element into container element
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.</p>
            <button onclick="loadMealDetail(${meal.idMeal})" type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#mealDetails">
            Details
            </button>
        </div>
    </div>
        `
        mealsContainer.appendChild(mealDiv);
    })
}


const searchMeal = () => {
    const searchText = document.getElementById('search-field').value;
    loadMeals(searchText);
}


const loadMealDetail = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]));
}

const displayMealDetails = meal => {
    document.getElementById('exampleModalLabel').innerText = meal.strMeal;
    const mealDetails = document.getElementById('mealDetailsBody');
    mealDetails.innerHTML = `
    <img class="img-thumbnail" src="${meal.strMealThumb}">
     <p><b>How To Cook <span class="text-danger">?</span></b> <br> ${meal.strInstructions}</p>
    `
}

loadMeals('fish');
