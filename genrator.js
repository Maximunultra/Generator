// Sample data for recipes categorized by meal type
const recipes = {
  breakfast: [
      {
          title: "Pancakes",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGruTTzbCJBxYVWtcAjVbH3iVipmAP5b_W3w&s",
          ingredients: ["Flour", "Eggs", "Milk", "Butter", "Sugar", "Baking Powder"],
          instructions: "Mix ingredients and cook on a hot griddle."
      },
      {
          title: "Omelette",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHR4jOQTkyahAMN66NcjT89SUUH3YIbV4bVg&s",
          ingredients: ["Eggs", "Cheese", "Bell Peppers", "Onions", "Tomatoes"],
          instructions: "Whisk eggs, add vegetables, and cook in a pan."
      }
  ],
  lunch: [
      {
          title: "Grilled Cheese Sandwich",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbxm0iw-_30i5B7WHc0s7evXQ2pQSy3AuKhA&s",
          ingredients: ["Bread", "Cheese", "Butter"],
          instructions: "Butter the bread, add cheese, and grill until golden."
      },
      {
          title: "Chicken Caesar Salad",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqSRxye2TDzRDi_QOgeILnJMO6U3cEWJw6Fw&s",
          ingredients: ["Chicken", "Lettuce", "Caesar Dressing", "Croutons", "Parmesan"],
          instructions: "Grill chicken, toss with lettuce, croutons, and dressing."
      }
  ],
  dinner: [
      {
          title: "Spaghetti Bolognese",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj9XSI0jUOU9bPdDa6N895defc1q1Iil14Zg&s",
          ingredients: ["Spaghetti", "Ground Beef", "Tomato Sauce", "Garlic", "Onion"],
          instructions: "Cook spaghetti and mix with Bolognese sauce."
      },
      {
          title: "Chicken Curry",
          image: "https://www.recipesbynora.com/wp-content/uploads/2024/03/Filipino-Chicken-Curry-Recipe-featured-image.jpg",
          ingredients: ["Chicken", "Curry Powder", "Coconut Milk", "Onion", "Rice"],
          instructions: "Cook chicken, add curry powder and coconut milk, serve with rice."
      }
  ],
  side: [
      {
          title: "Garlic Bread",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpWl_rSpN5yNPCPqAMkzLwERpCfk5aqOqc1Q&s",
          ingredients: ["Bread", "Garlic", "Butter", "Parsley"],
          instructions: "Spread garlic butter on bread and toast."
      }
  ],
  dessert: [
      {
          title: "Chocolate Cake",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpf1eoNbsWblTDxgrmnzqLSutOOZBoo69CNg&s",
          ingredients: ["Flour", "Cocoa Powder", "Sugar", "Butter", "Eggs", "Milk"],
          instructions: "Mix ingredients and bake at 350°F for 30 minutes."
      }
  ],
  snack: [
      {
          title: "Fruit Salad",
          image: "https://nowcookthis.com/wp-content/uploads/2021/06/fruit-salad-with-creamy-vanilla-yogurt-dressing-thumbnail-500x500.jpg",
          ingredients: ["Apple", "Banana", "Orange", "Berries", "Yogurt"],
          instructions: "Chop fruits and mix with yogurt."
      }
  ]
};

// Function to generate a random recipe based on the selected category
function getRandomRecipe(category) {
  const categoryRecipes = recipes[category];
  const randomIndex = Math.floor(Math.random() * categoryRecipes.length);
  return categoryRecipes[randomIndex];
}

// Function to update the UI with recipe details
function displayRecipe(recipe) {
  document.getElementById("recipe-title").textContent = recipe.title;
  document.getElementById("recipe-image").src = recipe.image;
  document.getElementById("recipe-ingredients").innerHTML = recipe.ingredients
      .map(ingredient => `<li>${ingredient}</li>`)
      .join('');
  document.getElementById("recipe-instructions").textContent = recipe.instructions;
}

// Event listeners for meal type buttons
document.getElementById("breakfast").addEventListener("click", () => {
  const recipe = getRandomRecipe("breakfast");
  displayRecipe(recipe);
});

document.getElementById("lunch").addEventListener("click", () => {
  const recipe = getRandomRecipe("lunch");
  displayRecipe(recipe);
});

document.getElementById("dinner").addEventListener("click", () => {
  const recipe = getRandomRecipe("dinner");
  displayRecipe(recipe);
});

document.getElementById("side").addEventListener("click", () => {
  const recipe = getRandomRecipe("side");
  displayRecipe(recipe);
});

document.getElementById("dessert").addEventListener("click", () => {
  const recipe = getRandomRecipe("dessert");
  displayRecipe(recipe);
});

document.getElementById("snack").addEventListener("click", () => {
  const recipe = getRandomRecipe("snack");
  displayRecipe(recipe);
});

// Surprise me button functionality
document.getElementById("surprise").addEventListener("click", () => {
  const categories = Object.keys(recipes);
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const recipe = getRandomRecipe(randomCategory);
  displayRecipe(recipe);
});
