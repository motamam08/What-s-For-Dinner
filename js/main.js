var recipess = [
  {
    name: "Beef Tacos",
    discription: "Flavorful Mexican tacos with seasoned ground beef",
    image: "images/tacos.jpg",
    difficulty: "Easy",
    category: "American",
    rating: "4.6",
    reviews: "(278 reviews)",
    timeAndServ: {
      prepTime: 15,
      cookTime: 20,
      serv: "4 people",
    },
    ingredients: [
      "500g ground beef",
      "8 taco shells",
      "1 onion, diced",
      "2 tablespoons taco seasoning",
      "Shredded lettuce",
      "Diced tomatoes",
      "Shredded cheddar cheese",
      "Sour cream",
      "Salsa",
    ],
    instructions: [
      "Heat a large skillet over medium-high heat. Cook ground beef until browned.",
      "Add diced onion and cook until softened, about 5 minutes.",
      "Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.",
      "Warm taco shells according to package directions.",
      "Fill each shell with seasoned beef.",
    ],
    nutrition: {
      calories: "420",
      proten: "26",
      carbo: "32",
      fat: "20",
      fiber: "4",
      sodium: "780",
    },
    chefTips: [
      "Drain excess fat from beef for healthier tacos",
      "Warm shells in oven for better texture",
      "Prepare all toppings before cooking beef",
      "Use ground turkey for a lighter option",
    ],
  },
  {
    name: "BChicken Stir-Fry",
    discription: "Quick and healthy stir-fry with colorful vegetables",
    image: "images/Chicken-Stir-Fry.jpg",
    difficulty: "Easy",
    category: "Asian",
    rating: "4.5",
    reviews:"(324 reviews)",
    timeAndServ: {
      prepTime: 15,
      cookTime: 15,
      serv: "4 people",
    },
    ingredients: [
      "500g chicken breast, sliced",
      "2 bell peppers, sliced",
      "1 broccoli head, florets",
      "2 carrots, julienned",
      "3 tablespoons soy sauce",
      "2 tablespoons oyster sauce",
      "1 tablespoon sesame oil",
      "2 cloves garlic, minced",
      "Fresh ginger, grated",
    ],
    instructions: [
      "Mix soy sauce, oyster sauce, and sesame oil for the sauce.",
      "AHeat wok over high heat with oil. Cook chicken until golden, remove and set aside.",
      "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
      "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
      "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",
      "Serve immediately over steamed rice or noodles.    ",
    ],
    nutrition: {
      calories: "320",
      proten: "34",
      carbo: "18",
      fat: "12",
      fiber: "5",
      sodium: "840",
    },
    chefTips: [
      "Cut all ingredients before starting to cook",
      "Keep heat high for authentic stir-fry texture",
      "Don't overcrowd the wok or vegetables will steam",
      "Add cashews or peanuts for extra crunch",
    ],
  },
  {
    name: "Margherita Pizza",
    discription: "Classic Italian pizza with fresh mozzarella and basil",
    image: "images/margherita-pizza.jpg",
    difficulty: "Intermediate",
    category: "Italian",
    rating: "4.9 ",
    reviews:"(512 reviews)",
    timeAndServ: {
      prepTime: 90,
      cookTime: 12,
      serv: "2 people",
    },
    ingredients: [
      "300g pizza dough",
      "200g crushed tomatoes",
      "250g fresh mozzarella",
      "Fresh basil leaves",
      "2 tablespoons olive oil",
      "2 cloves garlic, minced",
      "Salt and pepper to taste",
      "2 cloves garlic, minced",
      "Parmesan cheese for topping",
    ],
    instructions: [
      "Let pizza dough come to room temperature and rest for 1 hour.",
      "Preheat oven to maximum temperature (usually 250°C/480°F).",
      "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
      "Roll out dough on a floured surface to desired thickness.",
      "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
      "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan.    ",
    ],
    nutrition: {
      calories: "580",
      proten: "24",
      carbo: "68",
      fat: "22",
      fiber: "4",
      sodium: "920",
    },
    chefTips: [
      "Use a pizza stone for crispier crust",
      "Don't overload with toppings - less is more",
      "Add basil after baking to keep it fresh",
      "Let dough rest properly for best texture",
    ],
  },
  {
    name: "BBQ Pulled Pork",
    discription: "Slow-cooked tender pork in smoky barbecue sauce",
    image: "images/bbq.jpg",
    difficulty: "Easy",
    category: "American",
    rating: "4.7",
    reviews: "(412 reviews)",
    timeAndServ: {
      prepTime: 15,
      cookTime: 240,
      serv: "4 people",
    },
    ingredients: [
      "1kg pork shoulder",
      "1 cup BBQ sauce",
      "1/2 cup apple cider vinegar",
      "2 tablespoons brown sugar",
      "1 tablespoon paprika",
      "1 tablespoon garlic powder",
      "Burger buns",
      "Coleslaw for serving",
    ],
    instructions: [
      "LMix paprika, garlic powder, brown sugar, salt and pepper. Rub all over pork shoulder.",
      "Place pork in slow cooker with apple cider vinegar and 1/2 cup water.",
      "Cook on low for 8 hours or high for 4 hours until meat is very tender.",
      "Remove pork and shred with two forks. Discard excess fat.",
      "Return shredded pork to slow cooker, mix with BBQ sauce.",
      "Serve on toasted buns with coleslaw on top.",
    ],
    nutrition: {
      calories: "320",
      proten: "48",
      carbo: "52",
      fat: "22",
      fiber: "3",
      sodium: "1180",
    },
    chefTips: [
      "Use pork shoulder for best results - it stays moist",
      "Let pork rest before shredding for juicier meat",
      "Make your own BBQ sauce for better flavor",
      "Leftovers freeze well for up to 3 months",
    ],
  },
  {
    name: "Chicken Tikka Masala",
    discription: "Rich and creamy Indian curry with tender chicken pieces",
    image: "images/chicken-tikka-masala.jpg",
    difficulty: "Intermediate",
    category: "Asian",
    rating: "4.7",
    reviews :'(389 reviews)',
    timeAndServ: {
      prepTime: 20,
      cookTime: 30,
      serv: "4 people",
    },
    ingredients: [
      "600g chicken breast, cubed",
      "1 cup plain yogurt",
      "2 tablespoons tikka masala paste",
      "400ml coconut cream",
      "1 onion, diced",
      "4 cloves garlic, minced",
      "2 tablespoons ginger, grated",
      "400g canned tomatoes",
      "Fresh cilantro for garnish",
    ],
    instructions: [
      "Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
      "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
      "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
      "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes",
      "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
      "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice.",
    ],
    nutrition: {
      calories: "450",
      proten: "38",
      carbo: "24",
      fat: "22",
      fiber: "4",
      sodium: "760",
    },
    chefTips: [
      "Marinate chicken overnight for deeper flavor",
      "Use full-fat coconut cream for richest sauce",
      "Adjust spice level by varying the tikka paste amount",
      "Serve with naan bread and basmati rice",
    ],
  },
  {
    name: "Shrimp Scampi",
    discription: "Garlicky shrimp in white wine butter sauce",
    image: "images/shrimp-scampi.jpg",
    difficulty: "Easy",
    category: "Seafood",
    rating: "4.8",
    reviews:'(356 reviews)',
    timeAndServ: {
      prepTime: 10,
      cookTime: 15,
      serv: "2 people",
    },
    ingredients: [
      "400g large shrimp, peeled",
      "300g linguine pasta",
      "6 cloves garlic, minced",
      "1/2 cup white wine",
      "4 tablespoons butter",
      "2 tablespoons olive oil",
      "Fresh parsley, chopped",
      "Lemon juice and zest",
      "Red pepper flakes",
    ],
    instructions: [
      "Cook linguine according to package directions. Reserve 1 cup pasta water.",
      "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
      "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
      "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
      "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
      "Garnish with parsley, lemon zest, and serve immediately.",
    ],
    nutrition: {
      calories: "520",
      proten: "36",
      carbo: "54",
      fat: "18",
      fiber: "3",
      sodium: "620",
    },
    chefTips: [
      "Don't overcook shrimp - they cook very quickly",
      "Use good quality white wine for best flavor",
      "Toss pasta in sauce for maximum flavor absorption",
      "Add extra lemon for bright, fresh taste",
    ],
  },
  {
    name: "Honey Garlic Salmon",
    discription: "Pan-seared salmon with a sweet and savory glaze",
    image: "images/salmon.jpg",
    difficulty: "Easy",
    category: "Seafood",
    rating: "4.9",
    reviews:"(187 reviews)",
    timeAndServ: {
      prepTime: 10,
      cookTime: 15,
      serv: "2 people",
    },
    ingredients: [
      "2 salmon fillets (6oz each)",
      "3 tablespoons honey",
      "2 tablespoons soy sauce",
      "4 cloves garlic, minced",
      "1 tablespoon olive oil",
      "1 teaspoon fresh ginger, grated",
      "Sesame seeds for garnish",
      "Green onions, sliced",
    ],
    instructions: [
      "Pat salmon fillets dry with paper towels. Season with salt and pepper.",
      "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
      "Heat olive oil in a large skillet over medium-high heat.",
      "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
      "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
      "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice.",
    ],
    nutrition: {
      calories: "380",
      proten: "35",
      carbo: "28",
      fat: "14",
      fiber: "0",
      sodium: "720",
    },
    chefTips: [
      "Don't overcook salmon - it should be slightly pink in the center",
      "Use wild-caught salmon for best flavor and nutrition",
      "Let the sauce caramelize slightly for deeper flavor",
      "Pair with steamed broccoli or asparagus for a complete meal",
    ],
  },
  {
    name: "Thai Green Curry",
    discription: "Vibrant and aromatic curry with vegetables and coconut milk",
    image: "images/tahi-green-curry.jpg",
    difficulty: "Intermediate",
    category: "Asian",
    rating: "4.7",
    reviews:"(312 reviews)",
    timeAndServ: {
      prepTime: 15,
      cookTime: 25,
      serv: "4 people",
    },
    ingredients: [
      "2 tablespoons green curry paste",
      "400ml coconut milk",
      "300g chicken breast, sliced",
      "1 red bell pepper, sliced",
      "100g green beans",
      "1 eggplant, cubed",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar",
      "Fresh Thai basil leaves",
    ],
    instructions: [
      "Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.",
      "Add half the coconut milk and stir to combine with the curry paste.",
      "Add sliced chicken and cook until no longer pink, about 5 minutes.",
      "Add remaining coconut milk, vegetables, fish sauce, and palm sugar.",
      "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.",
      "Stir in fresh Thai basil leaves. Serve hot with jasmine rice.",
    ],
    nutrition: {
      calories: "420",
      proten: "26",
      carbo: "22",
      fat: "26",
      fiber: "5",
      sodium: "890",
    },
    chefTips: [
      "Adjust spice level by using more or less curry paste",
      "Add vegetables in stages based on cooking time needed",
      "Fresh Thai basil is essential for authentic flavor",
      "Use full-fat coconut milk for richest, creamiest sauce",
    ],
  },
  {
    name: "Caesar Salad",
    discription: "Classic salad with crispy romaine and creamy dressing",
    image: "images/salad.jpg",
    difficulty: "Easy",
    category: "Mediterranean",
    rating: "4.4",
    reviews :"(198 reviews)",
    timeAndServ: {
      prepTime: 15,
      cookTime: 0 ,
      serv: "2 people",
    },
    ingredients: [
      "1 large romaine lettuce",
      "1/2 cup Caesar dressing",
      "1/2 cup parmesan cheese, shaved",
      "1 cup croutons",
      "2 anchovy fillets (optional)",
      "Lemon wedges",
      "Black pepper",
    ],
    instructions: [
      "Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.",
      "Place lettuce in a large salad bowl.",
      "Add Caesar dressing and toss until evenly coated.",
      "Add croutons and half the parmesan cheese. Toss gently.",
      "Top with remaining parmesan shavings and anchovies if using.",
      "SServe immediately with lemon wedges and fresh black pepper.",
    ],
    nutrition: {
      calories: "320",
      proten: "12",
      carbo: "18",
      fat: "22",
      fiber: "3",
      sodium: "680",
    },
    chefTips: [
      "Use cold, crisp lettuce for best texture",
      "Make homemade croutons for better flavor",
      "Add grilled chicken for a complete meal",
      "Don't dress salad until ready to serve",
    ],
  },
  {
    name: "Mediterranean Quinoa Bowl",
    discription: "Healthy bowl with quinoa, vegetables, and tahini dressing",
    image: "images/Quinoa.jpg",
    difficulty: "Easy",
    category: "Mediterranean",
    rating: "4.5",
    reviews:"(156 reviews)",
    timeAndServ: {
      prepTime: 20,
      cookTime: 35,
      serv: "2 people",
    },
    ingredients: [
      "1 cup quinoa",
      "Cherry tomatoes, halved",
      "Cucumber, diced",
      "Red onion, sliced",
      "Kalamata olives",
      "Feta cheese, crumbled",
      "Fresh parsley",
      "Tahini dressing",
    ],
    instructions: [
      "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
      "While quinoa cooks, prepare all vegetables and set aside.",
      "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
      "Fluff cooked quinoa with a fork and let cool slightly.",
      "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
      "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing.",
    ],
    nutrition: {
      calories: "480",
      proten: "18",
      carbo: "58",
      fat: "20",
      fiber: "10",
      sodium: "540",
    },
    chefTips: [
      "Rinse quinoa well to remove bitter coating",
      "Let quinoa cool before adding fresh ingredients",
      "Make extra tahini dressing - it keeps well in the fridge",
      "Add grilled chicken or chickpeas for extra protein",
    ],
  },
];


function displayInfo(recipes) {
  var box = "";
  
    box += `
            <img
                src="${recipes.image}"
                alt="${recipes.name}"
                class="w-100 h-100 object-fit-cover"
              />

              <div
                class="position-absolute top-0 start-0 m-3 bg-white px-3 py-2 rounded-pill shadow-sm d-flex align-items-center gap-1 small fw-bold"
              >
                <i class="fa-solid fa-star text-warning"></i> ${recipes.rating}
                <span class="text-muted fw-normal">${recipes.reviews}</span>
              </div>

              <div
                class="info-bar position-absolute start-50 translate-middle-x bg-white rounded-4 shadow-sm d-flex justify-content-around p-3"
              >
                <div class="text-center">
                  <i class="fa-regular fa-clock text-orange fs-5 mb-1"></i>
                  <div class="text-muted-xs">Prep Time</div>
                  <div class="fw-bold small text-dark">${recipes.timeAndServ.prepTime} min</div>
                </div>
                <div class="text-center">
                  <!-- <i class="fa-solid fa-fire-burner"></i> -->
                  <i class="fa-solid fa-fire-burner text-danger fs-5 mb-1"></i>
                  <div class="text-muted-xs">Cook Time</div>
                  <div class="fw-bold small text-dark">${recipes.timeAndServ.cookTime} min</div>
                </div>
                <div class="text-center">
                  <i class="fa-solid fa-users text-primary fs-5 mb-1"></i>
                  <div class="text-muted-xs">Servings</div>
                  <div class="fw-bold small text-dark">${recipes.timeAndServ.serv}</div>
                </div>
              </div>
        `;
  
  document.getElementById("info").innerHTML = box;
}

function displayHeader(recipes) {
  var box = "";

 
    box += `
            <div class="d-flex gap-2 mb-2">
                  <span
                    class="badge bg-success bg-opacity-10 text-success rounded-pill px-3 py-2 fw-medium"> 
                    ${recipes.difficulty}
                    </span>
                    <span
                    class="badge bg-primary bg-opacity-10 text-primary rounded-pill px-3 py-2 fw-medium">
                    ${recipes.category}
                    </span>
                    </div>

                    <div>
                    <h2 class="card-title fw-bold text-dark h1 mb-1">
                        ${recipes.name}
                    </h2>
                    <p class="text-muted small mb-4">
                        ${recipes.discription}
                    </p>
            </div>
        `;
  

        document.getElementById("header").innerHTML = box;
}

function warning(recipe) {

    const totalTime = recipe.timeAndServ.prepTime + recipe.timeAndServ.cookTime;

    let box = "";

    if (totalTime > 45) {
        box = `
           <div class="p-3 warning d-flex align-items-center gap-3 mb-2">
                <i class="fa-solid fa-triangle-exclamation mt-1"></i>

                <div>
                    <h6 class="mb-0">
                        Extended Preparation Time
                    </h6>

                    <p class="mb-0">
                        This recipe requires more than 45 minutes to prepare.
                        Plan accordingly!
                    </p>
                </div>
            </div>
        `;
    }

    document.getElementById("warningMessage").innerHTML = box;
}

function displayIngredientes(recipes) {
    var box = "";
    
    for ( var i = 0; i < recipes.ingredients.length ; i++ ) {
    box += `
    <li class="d-flex align-items-center gap-3">
    <span class="num-badge">${i + 1}</span> ${recipes.ingredients[i]}
    </li>
    `;
}
document.getElementById('ingredientes').innerHTML = box;

}   

function displayInstructions(recipes) {
    var box = "";
    
    for ( var i = 0; i < recipes.instructions.length ; i++ ) {
    box += `
    <div class="d-flex align-items-start mb-4">
        <div class="d-flex justify-content-center align-items-center instraction-num rounded-3">
            <span class="fw-bolder"> ${i+1}</span>
        </div>
        <p>
            ${recipes.instructions[i]}
        </p>
    </div>
    `;
}
document.getElementById('instructions').innerHTML = box;

}   

function displayNutrition(recipes) {
    var box = '';

    
        box += `
            <div class="col-md-6">
                            <div class="bg-gray rounded-4 p-3 d-flex justify-content-between align-items-center mb-3">
                                <div class="d-flex align-items-center gap-2">
                                    <div class="cal sm-icon d-flex justify-content-center align-items-center rounded-3 ">
                                        <i class="fa-solid fa-fire"></i>
                                    </div>
                                    <span>Calories</span>
                                </div>
                                <span class="fs-16 text-black fw-bolder">${recipes.nutrition.calories} kcal</span>
                            </div>
                            <div class="bg-gray rounded-4 p-3 d-flex justify-content-between align-items-center mb-3">
                                <div class="d-flex align-items-center gap-2">
                                    <div class="pro sm-icon d-flex justify-content-center align-items-center rounded-3 ">
                                    <i class="fa-solid fa-dumbbell"></i>
                                    </div>
                                    <span>Protein</span>
                                </div>
                                <span class="fs-16 text-black fw-bolder">${recipes.nutrition.proten}g</span>
                            </div>
                            <div class="bg-gray rounded-4 p-3 d-flex justify-content-between align-items-center mb-3">
                                <div class="d-flex align-items-center gap-2">
                                    <div class="carb sm-icon d-flex justify-content-center align-items-center rounded-3 ">
                                        <i class="fa-solid fa-wheat-awn"></i>
                                    </div>
                                    <span>Cabohydrates</span>
                                </div>
                                <span class="fs-16 text-black fw-bolder">${recipes.nutrition.carbo}g</span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="bg-gray rounded-4 p-3 d-flex justify-content-between align-items-center mb-3">
                                <div class="d-flex align-items-center gap-2">
                                    <div class="fat sm-icon d-flex justify-content-center align-items-center rounded-3 ">
                                        <i class="fa-solid fa-droplet"></i>
                                    </div>
                                    <span> Fat</span>
                                </div>
                                <span class="fs-16 text-black fw-bolder">${recipes.nutrition.fat}g</span>
                            </div>
                            <div class="bg-gray rounded-4 p-3 d-flex justify-content-between align-items-center mb-3">
                                <div class="d-flex align-items-center gap-2">
                                    <div class="fiber sm-icon d-flex justify-content-center align-items-center rounded-3 ">
                                        <i class="fa-solid fa-dumbbell"></i>
                                    </div>
                                    <span>Fiber</span>
                                </div>
                                <span class="fs-16 text-black fw-bolder">${recipes.nutrition.fiber}g</span>
                            </div>
                            <div class="bg-gray rounded-4 p-3 d-flex justify-content-between align-items-center mb-3">
                               <div class="d-flex align-items-center gap-2">
                                <div class="sod sm-icon d-flex justify-content-center align-items-center rounded-3 ">
                                    <i class="fa-solid fa-cube"></i>
                                </div>
                                <span>Sodium</span>
                               </div>
                                <span class="fs-16 text-black fw-bolder">${recipes.nutrition.sodium}mg</span>
                            </div>
                        </div>
        `
        document.getElementById("nutrition").innerHTML = box;
    
}

function displayChifTips(recipes){
    var box = '';

    for( var i = 0 ; i <recipes.chefTips.length; i++){
        box +=`
            <div class="p-3 bg-cream tip d-flex rounded-4 align-items-center gap-2 mb-3">
                         <div class="tip-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i class="fa-solid fa-check fa-2xs"></i>
                         </div>
                         <p class="mb-1">${recipes.chefTips[i]}</p>
                    </div>
        `
    }

    document.getElementById('tips').innerHTML = box;
}



var currentIndex = 0;

function updateRecipeCard(){
    var recipe = recipess[currentIndex];
    
    displayInfo(recipe);
    displayHeader(recipe);
    warning(recipe)
    displayIngredientes(recipe);
    displayInstructions(recipe);
    displayNutrition(recipe);
    displayChifTips(recipe);
}


document.getElementById("nextBtn").addEventListener("click", function () {
    currentIndex = Math.floor(Math.random() * recipess.length) ;
    updateRecipeCard();
});

updateRecipeCard();



