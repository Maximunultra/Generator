// Sample data for recipes categorized by meal type
const recipes = {
  breakfast: [
    {
      title: "Pansit Bato",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH5pW_1udumjpooTHh8Z1YIT8gHZg2e37vTQ&s",
      ingredients: ["Flour", "Cocoa Powder", "Sugar", "Butter", "Eggs", "Milk"],
      instructions: "Mix ingredients and bake at 350°F for 30 minutes."
  },
    {
      title: "Pandesal with coffe",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1J_KqgVnzWf00zj0FavB-xuf0kS9Bqqi56Q&s",
      ingredients: ["Flour", "Cocoa Powder", "Sugar", "Butter", "Eggs", "Milk"],
      instructions: "Mix ingredients and bake at 350°F for 30 minutes."
  },
    {
      "title": "Pancakes",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGruTTzbCJBxYVWtcAjVbH3iVipmAP5b_W3w&s",
      "ingredients": [
          "1 cup all-purpose flour",
          "1 tablespoon sugar",
          "1 teaspoon baking powder",
          "1/2 teaspoon baking soda",
          "1/4 teaspoon salt",
          "3/4 cup milk",
          "1 egg",
          "2 tablespoons melted butter",
          "1/2 teaspoon vanilla extract"
      ],
      "instructions": "1. In a large bowl, whisk together the flour, sugar, baking powder, baking soda, and salt. 2. In another bowl, mix the milk, egg, melted butter, and vanilla extract. 3.Pour the wet ingredients into the dry ingredients and stir until just combined. Do not overmix; lumps are okay. 4. Heat a griddle or non-stick pan over medium heat and lightly grease with butter or oil. 5. Pour 1/4 cup batter for each pancake onto the griddle and cook until bubbles form. "
    },  
      {
        "title": "Tapsilog",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR61Z9MMiSbkZKJj79jlFMew_ZAcZjzSys_4A&s",
        "ingredients": [
            "200g beef tapa (marinated beef strips)",
            "2 cups cooked garlic rice",
            "2 eggs",
            "Salt",
            "Pepper",
            "Cooking oil"
        ],
        "instructions": "1. Heat cooking oil in a pan and cook the beef tapa until browned and slightly crispy. 2. In another pan, fry the garlic rice until fragrant. 3. In a separate pan, fry the eggs to your preferred doneness. 4. Serve the beef tapa, garlic rice, and fried eggs on a plate. Enjoy your Tapsilog!"
    },    
    {
      "title": "Omelette",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHR4jOQTkyahAMN66NcjT89SUUH3YIbV4bVg&s",
      "ingredients": [
          "2 eggs",
          "1/4 cup grated cheese",
          "1/4 cup diced bell peppers",
          "1/4 cup diced onions",
          "1/4 cup diced tomatoes",
          "Salt and pepper to taste",
          "1 tablespoon butter or cooking oil"
      ],
      "instructions": "1. In a bowl, whisk the eggs and season with salt and pepper. 2. Add the diced bell peppers, onions, and tomatoes to the eggs, stirring to combine. 3. Heat a non-stick pan over medium heat and add the butter or oil. 4. Pour the egg mixture into the pan, spreading it evenly. 5. Cook for 2-3 minutes until the edges begin to set, then sprinkle the grated cheese over half of the omelette. 6. Fold the omelette in half over the cheese, cook for another minute, and slide onto a plate. Serve hot!"
  }
  
  ],
  lunch: [
    {
      "title": "Pork Adobo",
      "image": "https://www.seriouseats.com/thmb/vDMyBzOjtoow0Yoy4gAiQQzVzsg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20210511-pork-adobo-vicky-wasik-18-c5fc4e3c9b07471da7aab36e5e502312.jpg",
      "ingredients": [
          "1 kg pork belly, cut into cubes",
          "1/2 cup soy sauce",
          "1/3 cup vinegar",
          "4 cloves garlic, minced",
          "1 onion, sliced",
          "1 teaspoon black peppercorns",
          "2 bay leaves",
          "1 tablespoon brown sugar (optional)",
          "1 tablespoon cooking oil",
          "1 cup water"
      ],
      "instructions": "1. In a large bowl, marinate the pork with soy sauce, vinegar, and minced garlic for at least 30 minutes. 2. Heat the cooking oil in a pot over medium heat. Sauté the onions until softened, then add the marinated pork (reserve the marinade). Brown the pork on all sides. 3. Pour in the reserved marinade, water, peppercorns, bay leaves, and brown sugar (if using). Bring to a boil, then reduce the heat and simmer for 40-50 minutes, or until the pork is tender and the sauce has reduced to a rich consistency. 4. Serve hot with steamed rice and enjoy your Pork Adobo!"
  },
{
  "title": "Chicken Adobo",
  "image": "https://www.seriouseats.com/thmb/dYRpFl8mnrr-TSvQHchME1AO_F4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20140219-chicken-adobo-2-1500x1125-53a84cf9a25d421c953db3aadb11a8fa.jpg",
  "ingredients": [
      "1 kg chicken pieces (drumsticks or thighs)",
      "1/2 cup soy sauce",
      "1/3 cup vinegar",
      "4 cloves garlic, minced",
      "1 onion, sliced",
      "1 teaspoon black peppercorns",
      "2 bay leaves",
      "1 tablespoon brown sugar (optional)",
      "1 tablespoon cooking oil",
      "1 cup water"
  ],
  "instructions": "1. In a large bowl, marinate the chicken with soy sauce, vinegar, and minced garlic for at least 30 minutes. 2. Heat the cooking oil in a pot over medium heat. Sauté the onions until softened, then add the marinated chicken (reserve the marinade). Brown the chicken on all sides. 3. Pour in the reserved marinade, water, peppercorns, bay leaves, and brown sugar (if using). Bring to a boil, then reduce the heat and simmer for 30-40 minutes, or until the chicken is tender and the sauce has reduced. 4. Serve hot with steamed rice and enjoy your Chicken Adobo!"
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
      },
      {
        "title": "Grilled Cheese Sandwich",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbxm0iw-_30i5B7WHc0s7evXQ2pQSy3AuKhA&s",
        "ingredients": [
            "2 slices of bread",
            "2 slices of cheese (cheddar or your favorite kind)",
            "1-2 tablespoons butter, softened"
        ],
        "instructions": "1. Spread butter on one side of each bread slice. 2. Place a slice of cheese between the unbuttered sides of the bread. 3. Heat a skillet over medium heat. 4. Place the sandwich in the skillet, buttered side down. 5. Cook for 2-3 minutes or until golden brown, then flip and cook the other side until the cheese melts and both sides are golden and crispy. 6. Remove from the skillet, let cool slightly, and enjoy!"
    }
    
  ]
};

// generate random recipe once you cllick category
function getRandomRecipe(category) {
  const categoryRecipes = recipes[category];
  const randomIndex = Math.floor(Math.random() * categoryRecipes.length);
  return categoryRecipes[randomIndex];
}

 //para ma update ui
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
