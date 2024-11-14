// data of recipe stored in json
const recipes = {
  breakfast: [
    {
      "title": "Pansit Bato",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH5pW_1udumjpooTHh8Z1YIT8gHZg2e37vTQ&s",
      "ingredients": [
          "200g pancit bato noodles (or substitute with any flat rice noodles)",
          "200g chicken breast, shredded",
          "100g pork, sliced thinly",
          "1 carrot, julienned",
          "1 small onion, sliced",
          "3 cloves garlic, minced",
          "1/4 cup soy sauce",
          "2 cups chicken broth",
          "1/4 cup fish sauce",
          "1/2 cup green beans, cut into 2-inch pieces",
          "1/2 cup cabbage, shredded",
          "2 tablespoons cooking oil",
          "Salt and pepper to taste",
          "Lemon or calamansi wedges for garnish"
      ],
      "instructions": "1. Heat oil in a large pan or wok over medium heat. Sauté garlic and onion until softened. 2. Add the pork and cook until browned. Add the chicken and cook for another 5 minutes. 3. Pour in the soy sauce, fish sauce, and chicken broth. Bring to a simmer. 4. Add the carrots, green beans, and cabbage. Let cook for 5-7 minutes until vegetables are tender. 5. Add the pancit bato noodles and toss to coat with the broth and meat mixture. Let the noodles soak in the sauce for about 5-10 minutes, stirring occasionally, until tender. 6. Season with salt and pepper to taste. 7. Serve the pancit bato hot, garnished with lemon or calamansi wedges. Enjoy!"
  }
  ,
  {
    "title": "Pandesal with Coffee",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1J_KqgVnzWf00zj0FavB-xuf0kS9Bqqi56Q&s",
    "ingredients": [
        "3 cups all-purpose flour",
        "1/4 cup sugar",
        "1/4 cup butter, softened",
        "2 teaspoons active dry yeast",
        "1/2 cup warm milk",
        "1/2 cup warm water",
        "1 egg",
        "1 teaspoon salt",
        "1/4 cup breadcrumbs (for coating)"
    ],
    "instructions": "1. In a bowl, dissolve yeast in warm milk and water. Let it sit for about 5 minutes until foamy. 2. In a separate bowl, mix flour, sugar, and salt. Add the yeast mixture, egg, and softened butter. Stir until a dough forms. 3. Knead the dough for about 8-10 minutes, then cover and let it rise in a warm place for about 1-1.5 hours, or until doubled in size. 4. Punch down the dough, divide it into small rolls, and coat each roll with breadcrumbs. Place them on a greased baking tray. 5. Let the rolls rise for another 30 minutes. 6. Preheat the oven to 350°F (175°C) and bake the pandesal for 15-20 minutes, or until golden brown. 7. Serve warm with a cup of coffee. Enjoy your Pandesal with Coffee!"
}
,
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
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmww5jTG0tVGxjPAoMtgYndRrcCm-NtAjyOQ&s",
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
  },{
    "title": "Kaldereta",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1eSOHxCPTBO2Osj7SmysWj1cKwXzpR4JcDA&s",
    "ingredients": [
        "1 kg beef (chuck or shank), cut into cubes",
        "2 tablespoons cooking oil",
        "1 large onion, chopped",
        "4 cloves garlic, minced",
        "2 medium potatoes, peeled and cubed",
        "1 large carrot, peeled and sliced",
        "1 red bell pepper, sliced",
        "1 cup tomato sauce",
        "1/2 cup liver spread (optional, for authentic flavor)",
        "1/4 cup soy sauce",
        "1/4 cup vinegar",
        "1/2 cup beef broth",
        "1 teaspoon bay leaves",
        "1/2 teaspoon peppercorns",
        "1/2 cup green olives, pitted (optional)",
        "1/4 cup green peas (optional)",
        "Salt and pepper to taste"
    ],
    "instructions": "1. In a large pot, heat cooking oil over medium heat. Sauté the garlic and onion until softened. 2. Add the beef cubes and brown them on all sides. 3. Pour in the soy sauce and vinegar, stirring to combine. Let it cook for about 5-7 minutes, allowing the vinegar to evaporate. 4. Add the tomato sauce, liver spread, beef broth, bay leaves, and peppercorns. Bring to a boil, then lower the heat and simmer for 1.5 to 2 hours, or until the beef is tender. 5. Add the potatoes, carrots, and red bell pepper, cooking for an additional 10-15 minutes until the vegetables are tender. 6. If using, add the olives and green peas and cook for another 5 minutes. 7. Season with salt and pepper to taste. 8. Serve hot with steamed rice and enjoy your Kaldereta!"
},{
  "title": "Menudo",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQipQu0DUK2mtu8_-ljntXuPlXEhVe4UAlClw&s",
  "ingredients": [
      "500g pork belly, cut into small cubes",
      "200g pork liver, cut into cubes",
      "2 tablespoons cooking oil",
      "1 onion, chopped",
      "4 cloves garlic, minced",
      "1 medium carrot, peeled and diced",
      "2 medium potatoes, peeled and diced",
      "1/2 cup tomato sauce",
      "1/4 cup soy sauce",
      "1/2 cup water or chicken broth",
      "1 teaspoon bay leaves",
      "1/4 cup green peas",
      "1/4 cup red bell pepper, diced",
      "1/4 cup raisins (optional)",
      "Salt and pepper to taste",
      "1/2 cup potatoes or sweet potatoes (optional, for added texture)"
  ],
  "instructions": "1. In a large pot, heat cooking oil over medium heat. Sauté garlic and onion until softened. 2. Add the pork belly cubes and cook until browned on all sides. 3. Add the pork liver and cook for an additional 2-3 minutes until browned. 4. Pour in the soy sauce and tomato sauce. Stir to coat the meat evenly. Let it cook for about 5 minutes. 5. Add the carrots, potatoes, and water (or chicken broth). Stir, bring to a boil, then lower the heat to simmer. Cover and cook for about 30 minutes, or until the meat and vegetables are tender. 6. Add the bay leaves, green peas, red bell pepper, and raisins (if using). Simmer for another 5-10 minutes. 7. Season with salt and pepper to taste. 8. Serve hot with steamed rice. Enjoy your Menudo!"
},
{
  "title": "Chicken Adobo",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC_FrJH734ao1NFJqgBMFUyWKsgHEpn0Nz0g&s",
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
  dinner: [
    {
      "title": "Pork Adobo",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmww5jTG0tVGxjPAoMtgYndRrcCm-NtAjyOQ&s",
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
  },{
    "title": "Kaldereta",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1eSOHxCPTBO2Osj7SmysWj1cKwXzpR4JcDA&s",
    "ingredients": [
        "1 kg beef (chuck or shank), cut into cubes",
        "2 tablespoons cooking oil",
        "1 large onion, chopped",
        "4 cloves garlic, minced",
        "2 medium potatoes, peeled and cubed",
        "1 large carrot, peeled and sliced",
        "1 red bell pepper, sliced",
        "1 cup tomato sauce",
        "1/2 cup liver spread (optional, for authentic flavor)",
        "1/4 cup soy sauce",
        "1/4 cup vinegar",
        "1/2 cup beef broth",
        "1 teaspoon bay leaves",
        "1/2 teaspoon peppercorns",
        "1/2 cup green olives, pitted (optional)",
        "1/4 cup green peas (optional)",
        "Salt and pepper to taste"
    ],
    "instructions": "1. In a large pot, heat cooking oil over medium heat. Sauté the garlic and onion until softened. 2. Add the beef cubes and brown them on all sides. 3. Pour in the soy sauce and vinegar, stirring to combine. Let it cook for about 5-7 minutes, allowing the vinegar to evaporate. 4. Add the tomato sauce, liver spread, beef broth, bay leaves, and peppercorns. Bring to a boil, then lower the heat and simmer for 1.5 to 2 hours, or until the beef is tender. 5. Add the potatoes, carrots, and red bell pepper, cooking for an additional 10-15 minutes until the vegetables are tender. 6. If using, add the olives and green peas and cook for another 5 minutes. 7. Season with salt and pepper to taste. 8. Serve hot with steamed rice and enjoy your Kaldereta!"
},{
  "title": "Menudo",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQipQu0DUK2mtu8_-ljntXuPlXEhVe4UAlClw&s",
  "ingredients": [
      "500g pork belly, cut into small cubes",
      "200g pork liver, cut into cubes",
      "2 tablespoons cooking oil",
      "1 onion, chopped",
      "4 cloves garlic, minced",
      "1 medium carrot, peeled and diced",
      "2 medium potatoes, peeled and diced",
      "1/2 cup tomato sauce",
      "1/4 cup soy sauce",
      "1/2 cup water or chicken broth",
      "1 teaspoon bay leaves",
      "1/4 cup green peas",
      "1/4 cup red bell pepper, diced",
      "1/4 cup raisins (optional)",
      "Salt and pepper to taste",
      "1/2 cup potatoes or sweet potatoes (optional, for added texture)"
  ],
  "instructions": "1. In a large pot, heat cooking oil over medium heat. Sauté garlic and onion until softened. 2. Add the pork belly cubes and cook until browned on all sides. 3. Add the pork liver and cook for an additional 2-3 minutes until browned. 4. Pour in the soy sauce and tomato sauce. Stir to coat the meat evenly. Let it cook for about 5 minutes. 5. Add the carrots, potatoes, and water (or chicken broth). Stir, bring to a boil, then lower the heat to simmer. Cover and cook for about 30 minutes, or until the meat and vegetables are tender. 6. Add the bay leaves, green peas, red bell pepper, and raisins (if using). Simmer for another 5-10 minutes. 7. Season with salt and pepper to taste. 8. Serve hot with steamed rice. Enjoy your Menudo!"
},
{
  "title": "Chicken Adobo",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC_FrJH734ao1NFJqgBMFUyWKsgHEpn0Nz0g&s",
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
      },{
        "title": "Ensaladang Talong",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj637gFGAqgeKwzvIjIdWqvulqTibgCJld2A&s",
        "ingredients": [
            "2 medium eggplants",
            "1 medium tomato, diced",
            "1 small red onion, diced",
            "1 tablespoon fish sauce (or salt, to taste)",
            "1 tablespoon vinegar",
            "1 teaspoon sugar (optional)",
            "1 tablespoon cooking oil",
            "1/4 cup green mango, julienned (optional)",
            "1/4 cup salted egg, sliced (optional)"
        ],
        "instructions": "1. Grill the eggplants over an open flame or roast them in the oven until the skin is charred and the flesh becomes soft, about 10-15 minutes. Let them cool down, then peel off the charred skin. 2. Mash the eggplant flesh lightly using a fork, and place it in a mixing bowl. 3. Add the diced tomato, red onion, and green mango (if using). 4. In a small bowl, mix the fish sauce, vinegar, and sugar (if using). 5. Pour the dressing over the eggplant mixture and toss to combine. 6. Optionally, top the ensalada with sliced salted egg. 7. Serve the *Ensaladang Talong* chilled or at room temperature as a side dish."
    }
    ,{
      "title": "Atchara",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ83Rzle8Tw4yI8f28Ak5sQqK_T0n7Ue75UNg&s",
      "ingredients": [
          "1 medium green papaya, peeled and grated or julienned",
          "1 medium carrot, julienned",
          "1 small red bell pepper, thinly sliced",
          "1 small onion, thinly sliced",
          "1/2 cup raisins",
          "1/4 cup garlic, minced",
          "1 cup white vinegar",
          "1/2 cup sugar",
          "1 teaspoon salt",
          "1/4 teaspoon peppercorns",
          "1/2 teaspoon grated ginger (optional)",
          "1 bay leaf"
      ],
      "instructions": "1. In a large bowl, combine the grated papaya, carrot, red bell pepper, onion, and raisins. Toss well. 2. In a saucepan, combine the vinegar, sugar, salt, peppercorns, ginger (if using), and bay leaf. Bring to a boil, stirring occasionally until the sugar is dissolved. Remove from heat and let the mixture cool completely. 3. Once the vinegar mixture has cooled, pour it over the papaya mixture and toss to coat. 4. Transfer the atchara into a clean, airtight jar. Let it sit in the refrigerator for at least 24 hours to allow the flavors to meld. 5. Serve chilled as a side dish with your favorite Filipino main courses. Enjoy your Atchara!"
  }
  
  ],
  dessert: [
    {
      "title": "Halo-Halo",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpmpQVUjC3cyeAqFBI-Y6VFwebd50g1DdNZA&s",
      "ingredients": [
          "Shaved ice",
          "1/4 cup sweetened jackfruit (langka)",
          "1/4 cup sweetened red beans (munggo or adzuki beans)",
          "1/4 cup sweetened coconut strips",
          "1/4 cup nata de coco",
          "1/4 cup sweetened saba banana (plantain)",
          "1/4 cup leche flan, cut into cubes",
          "1/4 cup ube ice cream",
          "1/4 cup evaporated milk",
          "Sugar (optional, to taste)"
      ],
      "instructions": "1. In a tall glass or bowl, layer the sweetened jackfruit, red beans, coconut strips, nata de coco, and saba banana. 2. Add a scoop of leche flan and top with a generous amount of shaved ice. 3. Add a scoop of ube ice cream on top of the shaved ice. 4. Drizzle evaporated milk over the entire dessert. 5. If you like it sweeter, add sugar to taste. 6. Mix everything together with a spoon before enjoying your Halo-Halo!"
  },{
    "title": "Graham Cake",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-rKHoWFSneI9wOVtuPgVesqFV6SAWpWuJQ&s",
    "ingredients": [
        "2 packs (200g) graham crackers",
        "2 cups all-purpose cream",
        "1 can (300g) condensed milk",
        "1/2 cup evaporated milk",
        "1 teaspoon vanilla extract",
        "1 cup fruit cocktail, drained (optional)",
        "1/2 cup crushed graham crackers (for topping)",
        "1 tablespoon sugar (optional)"
    ],
    "instructions": "1. In a mixing bowl, combine the all-purpose cream, condensed milk, evaporated milk, and vanilla extract. Whisk until smooth and well-blended. 2. Prepare a rectangular or square baking dish. Lay down a layer of graham crackers at the bottom of the dish. 3. Spread a layer of the cream mixture over the graham crackers. 4. Add another layer of graham crackers on top of the cream, followed by another layer of the cream mixture. Repeat until you have several layers, finishing with the cream mixture on top. 5. If using fruit cocktail, scatter it on top of the final layer of cream. 6. Sprinkle crushed graham crackers on top for garnish. 7. Refrigerate the cake for at least 4 hours or overnight to allow the flavors to meld and the dessert to set. 8. Serve chilled and enjoy your Graham Cake!"
},  
    {
      "title": "Leche Flan",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp0icfBSEHTweVliIjIaG8z4r-kLhOTrmQWQ&s",
      "ingredients": [
          "10 egg yolks",
          "1 can (370ml) sweetened condensed milk",
          "1 can (370ml) evaporated milk",
          "1/2 cup sugar",
          "1 teaspoon vanilla extract",
          "1/4 cup sugar (for caramel)",
          "1/4 cup water"
      ],
      "instructions": "1. In a saucepan, combine 1/4 cup sugar and water to make the caramel. Cook over medium heat, stirring occasionally, until the sugar dissolves and turns into a golden amber color. Quickly pour the caramel into a llanera (flan mold) or round baking pan, swirling to coat the bottom. 2. In a mixing bowl, whisk the egg yolks gently. Add the sweetened condensed milk, evaporated milk, vanilla extract, and 1/2 cup sugar. Mix until smooth and well combined. 3. Strain the mixture through a fine sieve into another bowl to remove any lumps or bubbles. 4. Pour the mixture into the caramel-lined mold. Cover with aluminum foil. 5. Steam the flan over medium heat for 30-45 minutes, or until set. You can check by inserting a toothpick into the center; it should come out clean. 6. Once cooked, remove from the steamer and let cool completely. Refrigerate for at least 3 hours or overnight. 7. To serve, run a knife around the edges of the flan, invert onto a plate, and enjoy your Leche Flan!"
  },  
      {
          title: "Chocolate Cake",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpf1eoNbsWblTDxgrmnzqLSutOOZBoo69CNg&s",
          ingredients: ["Flour", "Cocoa Powder", "Sugar", "Butter", "Eggs", "Milk"],
          instructions: "Mix ingredients and bake at 350°F for 30 minutes."
      }
  ],
  snack: [
    {
      "title": "Banana cue",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY2INMcJNFbaU6HsD4xHMHYT6f-sfPmTlINw&s",
      "ingredients": [
          "6 ripe saba bananas (plantains), peeled",
          "1 cup brown sugar",
          "1/4 cup water",
          "1/4 cup cooking oil",
          "Skewers (for serving)"
      ],
      "instructions": "1. Heat the cooking oil in a large pan over medium heat. 2. Once the oil is hot, add the peeled bananas and fry them until golden and slightly soft, about 5-7 minutes. 3. In a separate pan, combine the brown sugar and water. Stir over medium heat until the sugar is dissolved and the mixture becomes a syrup. 4. Once the bananas are fried, dip them in the caramel syrup or pour the syrup over the bananas in the pan. Toss gently to coat. 5. Let the bananas cook for another 2-3 minutes in the syrup, allowing them to become caramelized and glossy. 6. Once coated with syrup, transfer the bananas onto a serving plate. Optionally, skewer the bananas on sticks for easier eating. 7. Serve hot and enjoy your *Banana Que*!"
  },
  {
    "title": "Kakanin",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTU_mCZ-ONjstTTf6VfvkMc66fYEuvaaSidw&s",
    "ingredients": [
        "1 cup glutinous rice (malagkit)",
        "1 cup coconut milk",
        "1/2 cup sugar",
        "1/2 teaspoon salt",
        "1/4 teaspoon vanilla extract (optional)",
        "1/4 cup grated coconut (for topping)",
        "Banana leaves (optional, for lining)"
    ],
    "instructions": "1. Wash the glutinous rice thoroughly in water and drain. 2. In a medium saucepan, combine the glutinous rice, coconut milk, sugar, and salt. Stir well and bring to a boil over medium heat. 3. Once boiling, reduce the heat to low and cover the pot. Let the rice simmer for about 20-30 minutes or until the rice absorbs the coconut milk and becomes soft. Stir occasionally to prevent sticking. 4. Once the rice is cooked, remove from heat. If desired, add vanilla extract for extra flavor and mix well. 5. Optionally, line a mold or small cups with banana leaves to give the kakanin an authentic presentation. 6. Scoop the rice mixture into the prepared mold and press down gently to compact it. 7. Top with grated coconut for added texture and flavor. 8. Allow to cool for 30 minutes before serving. 9. Serve as a snack or dessert and enjoy your Kakanin!"
}

  ]
};

// Generate a random recipe based to the user category
function getRandomRecipe(category) {
  const categoryRecipes = recipes[category];
  if (!categoryRecipes) return null;
  const randomIndex = Math.floor(Math.random() * categoryRecipes.length);
  return categoryRecipes[randomIndex];
}

function displayRecipe(recipe) {
  if (!recipe) {
    alert("No recipes available for this category.");
    return;
  }
  document.getElementById("recipe-title").textContent = recipe.title;
  document.getElementById("recipe-image").src = recipe.image;
  document.getElementById("recipe-ingredients").innerHTML = recipe.ingredients
      .map(ingredient => `<li>${ingredient}</li>`)
      .join('');
  document.getElementById("recipe-instructions").textContent = recipe.instructions;
}

// Event listener for the "Generate Recipe" button
document.getElementById("generate-btn").addEventListener("click", () => {
  const category = document.getElementById("recipe-category").value;
  if (category) {
    const recipe = getRandomRecipe(category);
    displayRecipe(recipe);
  } else {
    alert("Please select a recipe category.");
  }
});

// "Surprise Me" button functionality
document.getElementById("surprise").addEventListener("click", () => {
  const categories = Object.keys(recipes);
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const recipe = getRandomRecipe(randomCategory);
  displayRecipe(recipe);
});
