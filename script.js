const recipes = [
  {
    name: "Chicken Parmesan",
    cuisine: "Italian",
    mealTime: "dinner",
    prepTime: "30 minutes",
    ingredients: ["chicken breasts", "flour", "eggs", "breadcrumbs", "marinara sauce", "mozzarella cheese"],
    process: ["Preheat the oven to 375°F.", "Coat chicken breasts in flour, eggs, and breadcrumbs.", "Brown the chicken in a skillet.", "Top with marinara sauce and mozzarella cheese.", "Bake in the oven for 20-25 minutes."]
  },
  {
    name: "Taco Salad",
    cuisine: "Mexican",
    mealTime: "lunch",
    prepTime: "15 minutes",
    ingredients: ["ground beef", "taco seasoning", "lettuce","eggs", "tomatoes", "cheddar cheese", "tortilla chips"],
    process: ["Brown the ground beef in a skillet.", "Add taco seasoning and stir to combine.", "Assemble salad with lettuce, tomatoes, cheddar cheese, and tortilla chips.", "Top with ground beef."]
  },
  {
    name: "Stir Fry",
    cuisine: "Chinese",
    mealTime: "dinner",
    prepTime: "20 minutes",
    ingredients: ["chicken thighs", "broccoli", "carrots", "onion", "garlic", "soy sauce", "rice"],
    process: ["Cook rice according to package instructions.", "Heat oil in a wok or large skillet.", "Add chicken and cook until browned.", "Add broccoli, carrots, onion, and garlic.", "Stir in soy sauce and cook until vegetables are tender.", "Serve over rice."]
  }
];
function filterRecipes() {
  const ingredientFilter = document.getElementById("ingredient-filter").value.toLowerCase().split(",").map(ingredient => ingredient.trim());
  const cuisineFilter = document.getElementById("cuisine-filter").value.toLowerCase().trim();
  const mealTimeFilter = document.getElementById("meal-time-filter").value.toLowerCase().trim();
  const recipeList = document.getElementById("recipe-list");
  recipeList.innerHTML = "";
  
  recipes.forEach(recipe => {
    const ingredients = recipe.ingredients.filter(ingredient => ingredientFilter.some(filter => ingredient.toLowerCase().includes(filter)));
    if (ingredients.length === ingredientFilter.length && recipe.cuisine.toLowerCase().includes(cuisineFilter) && recipe.mealTime.toLowerCase().includes(mealTimeFilter)) {
      const recipeItem = document.createElement("li");
      recipeItem.textContent = `${recipe.name} (${recipe.cuisine}): ${ingredients.join(", ")} - Prep Time: ${recipe.prepTime}`;
      const processList = document.createElement("ul");
      recipe.process.forEach(step => {
        const processItem = document.createElement("li");
        processItem.textContent = step;
        processList.appendChild(processItem);
      });
      recipeItem.appendChild(processList);
      recipeList.appendChild(recipeItem);
    }
  });
}

// This code ensures that the animation doesn't play until the page has fully loaded.
window.addEventListener("load", function() {
  const animationDiv = document.querySelector(".animation");
  animationDiv.style.display = "block";
});
