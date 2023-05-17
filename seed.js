// IMPORTS
const mongoose = require("mongoose");
const MenuItem = require("./models/menuItem");
require('dotenv').config();

// ENVIRONMENT VARIABLES
const MONGODB_URL = process.env.MONGODB_URL;

// MONGOOSE CONNECTION EVENTS
mongoose.connection
.on("open", () => console.log("Connected to MongoDB"))
.on("close", () => console.log("Disconnected from MongoDB"))
.on("error", (error) => console.log(`Error connecting to MongoDB: ${error}`));

// CONNECT TO DATABASE
mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true,
});

// SEED DATA
const menu = [
  {
    name: "Hog Island Oysters",
    price: 36,
    description: "A dozen succulent oysters harvested from Hog Island, served with tangy mignonette, hot sauce, and fresh lemon wedges",
    menu: "dinner",
    course: "chilled",
    current: true,
    ingredients: "Hog Island oysters, black pepper, shallots, red wine vinegar, lemon, hot sauce",
    method: "scrub and shuck oysters, serve over ice, with chilled mignonette, hot sauce, and lemon wedges",
  },
  {
    name: "Steak Tartare",
    price: 18,
    description: "The finest quality beef tenderloin, tangy capers, zesty Dijon mustard, and aromatic shallots for a burst of flavor in every bite.",
    menu: "dinner",
    course: "chilled",
    current: true,
    ingredients: "beef tenderloin, capers, Dijon mustard, Worcestershire sauce, shallots, cornichons, egg yolk, salt, pepper, olive oil,parsley, chives, ciabatta bread",
    method: "Start by finely chopping the beef tenderloin. You can use a sharp knife or a food processor, but be sure to not over-process the meat as you want it to retain some texture.\nIn a large mixing bowl, combine the chopped beef, capers, Dijon mustard, Worcestershire sauce, shallots, and cornichons. Mix well to evenly distribute the ingredients.\nAdd the egg yolk to the mixture and mix until everything is well combined. The egg yolk helps to bind the tartare together and give it a silky texture.\nSeason the mixture with salt and pepper to taste. Keep in mind that the capers and cornichons are already salty, so you may not need as much salt as you think.\nUse a ring mold or cookie cutter to shape the tartare into a round, flat disk on a plate. Alternatively, you can serve it in a bowl or ramekin.\nGarnish the tartare with additional chopped cornichons or capers, if desired. Grill bread.",
  },
  {
    name: "Perfect Green Salad",
    price: 12,
    description: "butter, bibb, and red leaf lettuces, croutons, tangy buttermilk dressing bursting with fresh herbs",
    menu: "dinner",
    course: "chilled",
    current: true,
    ingredients: "butter, bibb, and red leaf lettuces, croutons, buttermilk, mayonnaise, sour cream, chives, parsley, dill, apple cider vinegar, lemon juice, garlic, salt, pepper",
    method: "Rinse and dry the mixed greens, and place them in a large salad bowl.\nAdd the croutons to the bowl.\nIn a separate bowl, whisk together the buttermilk, mayonnaise, sour cream, chopped herbs, apple cider vinegar, lemon juice, garlic, salt, and pepper until well combined.\nDrizzle the dressing over the salad, and toss gently to coat the greens and croutons with the dressing.",
  },
  {
    name: "French Onion Soup Gratinee",
    price: 12,
    description: "A rich, slow-cooked onion soup, topped with a toasted baguette slice and melted Gruyère cheese, allowing the onion to shine with a hint of earthiness",
    menu: "dinner",
    course: "first",
    current: true,
    ingredients: "Onions, beef broth, baguette, Gruyère cheese",
    method: "Slow-cooked and topped with a toasted baguette slice and melted Gruyère cheese",
  },
  {
    name: "Escargots de Bourgogne",
    price: 17,
    description: "Succulent snails delicately cooked in a garlic, parsley, and butter sauce, served with warm, crusty baguette slices",
    menu: "dinner",
    course: "first",
    current: true,
    ingredients: "Snails, garlic, parsley, butter, baguette",
    method: "Cooked in garlic, parsley, and butter sauce, served with warm baguette slices",
  },
  {
    name: "Hot Crab Dip",
    price: 14,
    description: "Rich, indulgent, and perfect for sharing. Served with crispy crostini.",
    menu: "dinner",
    course: "first",
    current: true,
    ingredients: "cream cheese, mayonnaise, sour cream, Dijon mustard, Worcestershire sauce, hot sauce, garlic powder, onion powder, salt, black pepper, lump crabmeat, Parmesan cheese, baguette",
    method: "Preheat your oven to 375°F (190°C). In a large mixing bowl, combine the cream cheese, mayonnaise, sour cream, Dijon mustard, Worcestershire sauce, hot sauce, garlic powder, onion powder, salt, and black pepper. Mix until well combined. Fold in the lump crabmeat and 1/4 cup of grated Parmesan cheese, reserving the remaining 1/4 cup for later. Pour the mixture into an oven-safe baking dish and sprinkle the remaining Parmesan cheese over the top. Bake for 25-30 minutes, or until the dip is hot and bubbly and the cheese is melted and golden brown. Serve hot with toasted baguette slices.",
  },  
  {
    name: "Filet Mignon Oscar",
    price: 42,
    description: "A perfectly seared, tender filet mignon crowned with fresh asparagus, succulent crab meat, and a rich, velvety béarnaise sauce",
    menu: "dinner",
    course: "main",
    current: true,
    ingredients: "filet mignon, asparagus spears, lump crab meat, egg yolks, lemon juice, unsalted butter, white wine vinegar, fresh tarragon, salt, pepper",
    method: "Preheat the oven to 400°F (200°C).\nSeason the filet mignon generously with salt and pepper on both sides.\nHeat a large oven-safe skillet over high heat. Once the skillet is hot, add the filet mignon and sear for 2-3 minutes on each side until a crust forms.\nPlace the skillet with the filet mignon into the oven and cook for 5-7 minutes until the desired level of doneness is reached. For medium-rare, cook until the internal temperature reaches 130°F (54°C).\nWhile the filet mignon is cooking, prepare the béarnaise sauce. In a small saucepan, combine the egg yolks, lemon juice, and white wine vinegar. Whisk constantly over low heat until the mixture thickens, about 5 minutes.\nRemove the pan from heat and slowly drizzle in the melted butter, whisking constantly until the sauce is thick and creamy.\nStir in the chopped tarragon and season with salt and pepper to taste.\nSteam the asparagus spears until they are tender, about 3-4 minutes.\nOnce the filet mignon is cooked, remove the skillet from the oven and let the steak rest for a few minutes.\nTop the filet mignon with the steamed asparagus and lump crab meat.\nDrizzle the béarnaise sauce over the top of the asparagus and crab meat.\nServe immediately and enjoy your perfectly seared filet mignon with fresh asparagus, succulent crab meat, and velvety béarnaise sauce!",
  },
  {
    name: "Provençal Bouillabaisse",
    price: 39,
    description: "Aromatic and traditional Provençal fish stew brimming with a medley of seafood, served with garlicky rouille and crusty bread for dipping",
    menu: "dinner",
    course: "main",
    current: true,
    ingredients: "Monkfish, cod, mussels, clams, olive oil, onions, leek, fennel bulb, garlic cloves, tomatoes, dry white wine, water, saffron threads, bay leaves, dried thyme, salt, pepper, fresh parsley, mayonaisse, cayenne pepper, crusty bread",
    method: "In a large pot or Dutch oven, heat the olive oil over medium heat.\nAdd the onions, leek, and fennel and sauté for about 5 minutes, until softened.\nAdd the garlic and cook for 1-2 minutes more.\nAdd the tomatoes and cook for about 5 minutes, until they start to break down.\nAdd the white wine and cook for a few minutes until the liquid has reduced by half.\nAdd the water or fish stock, saffron threads, bay leaves, and thyme.\nBring the soup to a simmer and cook for about 20 minutes, until the vegetables are tender and the flavors have melded together.\nAdd the mixed fish and shellfish to the soup and simmer for about 5-10 minutes, until the fish is cooked through and the shellfish have opened (discard any that remain closed).\nSeason the soup with salt and pepper to taste.\nStir in the chopped parsley.\nServe the bouillabaisse hot, garnished with a dollop of rouille and with crusty bread on the side.\nInstructions for preparing the rouille:\nIn a small bowl, whisk together the mayonnaise, garlic, and cayenne pepper.\nSlowly drizzle in the olive oil while whisking constantly until the rouille is thick and creamy.",
  },
  {
    name: "Crispy Duck à l'Orange",
    price: 36,
    description: "Golden, pan-seared duck breast accompanied by a zesty orange sauce, served with nutty wild rice and honey-glazed carrots",
    menu: "dinner",
    course: "main",
    current: true,
    ingredients: "duck breasts, salt, pepper, wild rice, chicken broth, butter, garlic, carrots, honey, orange juice, orange zest, cornstarch",
    method: "Preheat your oven to 375°F (190°C).\nScore the skin of the duck breasts with a sharp knife, making shallow cuts in a criss-cross pattern. Season both sides of the duck breasts with salt and pepper.\nHeat a large oven-safe skillet over medium-high heat. Place the duck breasts, skin-side down, in the skillet and cook for 6-7 minutes, until the skin is golden brown and crispy.\nFlip the duck breasts over and transfer the skillet to the preheated oven. Bake the duck breasts for 8-10 minutes, until they are cooked to your desired level of doneness.\nRemove the skillet from the oven and transfer the duck breasts to a cutting board. Let them rest for 5-10 minutes before slicing.\nWhile the duck is cooking, prepare the wild rice. In a medium saucepan, combine the wild rice and chicken broth. Bring the mixture to a boil, then reduce the heat to low and simmer for 45-50 minutes, until the rice is tender and the liquid has been absorbed.\nIn a separate skillet, melt the butter over medium heat. Add the garlic and cook for 1-2 minutes, until fragrant.\nAdd the sliced carrots to the skillet and toss to coat in the butter and garlic. Drizzle the honey over the top and stir to combine.\nCook the carrots for 10-12 minutes, stirring occasionally, until they are tender and caramelized.\nWhile the carrots are cooking, prepare the orange sauce. In a small saucepan, whisk together the orange juice, orange zest, and cornstarch until the mixture is smooth.\nHeat the saucepan over medium heat and cook the mixture, whisking constantly, for 2-3 minutes, until it has thickened into a sauce.\nTo serve, slice the duck breasts into thin slices and arrange them on a serving platter. Drizzle the orange sauce over the top.\nServe the duck with the wild rice and honey-glazed carrots on the side.",
  },
  {
    name: "Classic Coq au Vin",
    price: 35,
    description: "Tender chicken slowly braised in a rich red wine with earthy mushrooms, pearl onions, and smoky bacon, served atop creamy mashed potatoes",
    menu: "dinner",
    course: "main",
    current: true,
    ingredients: "chicken legs, bacon, onion, carrots, garlic, mushrooms, red wine, chicken broth, tomato paste, fresh thyme, bay leaves, butter, all-purpose flour, salt, black pepper.",
    method: "In a large Dutch oven or heavy pot, cook the bacon over medium heat until crispy. Remove the bacon with a slotted spoon and set it aside on a paper towel to drain.\nSeason the chicken with salt and pepper. In the same pot with the bacon grease, brown the chicken pieces on all sides, working in batches if necessary. Remove the chicken from the pot and set it aside.\nIn the same pot, add the chopped onion, carrots, and garlic. Sauté the vegetables for a few minutes until they are tender.\nAdd the sliced mushrooms to the pot and sauté for an additional 2-3 minutes.\nAdd the red wine, chicken broth, tomato paste, thyme, and bay leaves to the pot. Bring the mixture to a simmer.\nReturn the chicken and bacon to the pot. Cover the pot and simmer the chicken for 1-1 1/2 hours, until it is tender and cooked through.\nIn a small saucepan, melt the butter over medium heat. Add the flour and whisk the mixture constantly for 2-3 minutes, until it is a light brown color.\nRemove the thyme sprigs and bay leaves from the pot. Gradually whisk the flour mixture into the pot, stirring constantly, until the sauce thickens.\n Season the coq au vin with salt and black pepper to taste.",
  },
  {
    name: "Decadent Chocolate Soufflé",
    price: 12,
    description: "A luscious, warm chocolate cake with a heavenly, gooey center, served with a scoop of velvety vanilla ice cream",
    menu: "dessert",
    course: "desserts",
    current: true,
    ingredients: "Butter, sugar, cocoa powder, all-purpose flour, milk, egg yolks, egg whites, cream of tartar, granulated sugar, semisweet chocolate chips, vanilla extract, vanilla ice cream",
    method: "Preheat your oven to 375°F (190°C).\nUse the softened butter to grease the bottom and sides of a 1 1/2-quart souffle dish. Sprinkle the sugar over the butter and tilt the dish to coat it evenly. Shake out any excess sugar and cocoa powder to the dish to coat the bottom and sides.\nIn a medium saucepan, whisk together the flour and cocoa powder. Gradually add in the milk, whisking constantly to prevent lumps from forming. Place the saucepan over medium heat and bring the mixture to a boil, whisking constantly.\nCook the mixture for 1-2 minutes until it thickens, then remove the saucepan from the heat.\nIn a separate bowl, whisk the egg yolks until they are pale and thick. Slowly add the chocolate mixture to the egg yolks, whisking constantly.\nStir in the chocolate chips and vanilla extract.\nIn a separate bowl, use an electric mixer to beat the egg whites and cream of tartar until they form stiff peaks. Gradually add in the granulated sugar, continuing to beat until the egg whites are shiny and hold stiff peaks.\nUsing a spatula, gently fold about 1/3 of the egg whites into the chocolate mixture. Add the remaining egg whites and gently fold them in until no white streaks remain.\nPour the souffle mixture into the prepared dish and smooth the top with a spatula.\nBake the souffle for 20-25 minutes, until it has risen and the top is set but the center is still slightly jiggly.",
  },
  {
    name: "Crème Brûlée",
    price: 12,
    description: "An elegant French dessert featuring a silky custard base crowned with a thin, crispy layer of caramelized sugar",
    menu: "dessert",
    course: "desserts",
    current: true,
    ingredients: "heavy cream, egg yolks, granulated sugar, vanilla extract, salt, brown sugar",
    method: "Preheat your oven to 325°F (160°C).\nIn a medium saucepan, heat the heavy cream over medium heat until it just begins to simmer.\nIn a separate bowl, whisk together the egg yolks, granulated sugar, vanilla extract, and salt until the mixture is smooth and pale yellow.\nSlowly pour the hot cream into the egg mixture, whisking constantly, until the mixture is smooth.\nStrain the mixture through a fine-mesh sieve to remove any lumps or impurities.\nDivide the mixture among 4-6 ramekins, filling them about 3/4 full.\nPlace the ramekins in a large baking dish and pour hot water into the dish to come about halfway up the sides of the ramekins.\nBake the creme brulee for 30-35 minutes, until the custard is set but still slightly jiggly in the center.\nRemove the ramekins from the baking dish and let them cool to room temperature.\nCover the ramekins with plastic wrap and refrigerate them for at least 2 hours, or overnight, to allow the custard to fully set.\nWhen ready to serve, sprinkle a thin, even layer of brown sugar over the top of each custard.\nUsing a kitchen torch, carefully melt and caramelize the sugar until it forms a crispy, golden-brown crust.",
  },
  {
    name: "Raspberry Mille-Feuille",
    price: 11,
    description: "Delightful layers of flaky puff pastry generously filled with sweet raspberry jam and airy whipped cream, finished with a dusting of powdered sugar",
    menu: "dessert",
    course: "desserts",
    current: true,
    ingredients: "puff pastry sheets, powdered sugar, fresh raspberries, heavy cream, granulated sugar, vanilla extract",
    method: "Preheat your oven to 400°F (200°C).\nOn a lightly floured surface, roll out each sheet of puff pastry into a 12-inch square. Cut each square into 3 equal strips, making 6 strips in total.\nPlace the strips on a baking sheet lined with parchment paper. Prick the pastry all over with a fork to prevent it from puffing up too much.\nBake the pastry for 15-20 minutes, until it is golden brown and puffed up. Let the pastry cool completely on the baking sheet.\nIn a mixing bowl, combine the heavy cream, granulated sugar, and vanilla extract. Whip the mixture until it forms stiff peaks.\nTo assemble the mille-feuille, spread a layer of whipped cream onto one strip of pastry. Arrange a layer of raspberries on top of the cream.\nTop the raspberry layer with another strip of pastry, and repeat the layers of cream and raspberries.\nFinish with a third strip of pastry, and dust the top with powdered sugar.\nRepeat this process with the remaining pastry strips and filling until you have assembled 2 or 3 complete mille-feuille.\nChill the mille-feuille in the refrigerator for at least 30 minutes before serving to allow the cream to set.",
  },
  // Wines
  {
    name: "Chardonnay",
    description: "Full-bodied white wine with buttery and oaky notes.",
    price: 14,
    menu: "drinks",
    course: "wine",
    current: true,
    ingredients: "Chardonnay grapes",
    method: "Aged in oak barrels to add complexity and depth",
  },
  {
    name: "Pinot Noir",
    description: "Light-bodied red wine with fruity and earthy notes.",
    price: 15,
    menu: "drinks",
    course: "wine",
    current: true,
    ingredients: "Pinot Noir grapes",
    method: "Fermented in stainless steel tanks and aged in oak barrels",
  },
  {
    name: "Rosé",
    description: "Crisp and refreshing pink wine with hints of strawberries and citrus.",
    price: 12,
    menu: "drinks",
    course: "wine",
    current: true,
    ingredients: "Grenache, Syrah, and Cinsault grapes",
    method: "Fermented in stainless steel tanks and aged briefly on lees",
  },
  // Beers
  {
    name: "IPA",
    description: "Hoppy and bitter India Pale Ale with citrus and pine notes.",
    price: 8,
    menu: "drinks",
    course: "beer",
    current: true,
    ingredients: "Water, malted barley, hops, yeast",
    method: "Brewed with a high hop content and dry-hopped for extra aroma",
  },
  {
    name: "Saison",
    description: "Farmhouse-style ale with spicy and fruity notes.",
    price: 9,
    menu: "drinks",
    course: "beer",
    current: true,
    ingredients: "Water, malted barley, hops, yeast, spices",
    method: "Fermented at high temperatures and bottle-conditioned",
  },
  {
    name: "Stout",
    description: "Dark and roasty ale with notes of coffee and chocolate.",
    price: 9,
    menu: "drinks",
    course: "beer",
    current: true,
    ingredients: "Water, malted barley, hops, yeast",
    method: "Roasted malts add color and flavor, with a rich and creamy mouthfeel",
  },
  // Cocktails
  {
    name: "Old Fashioned",
    description: "Classic cocktail made with whiskey, bitters, and sugar.",
    price: 14,
    menu: "drinks",
    course: "cocktails",
    current: true,
    ingredients: "Bourbon or rye whiskey, sugar, bitters",
    method: "Muddled with sugar and bitters, stirred with ice, garnished with an orange peel",
  },
  {
    name: "Negroni",
    description: "Bitter and boozy cocktail made with gin, Campari, and sweet vermouth.",
    price: 14,
    menu: "drinks",
    course: "cocktails",
    current: true,
    ingredients: "Gin, Campari, sweet vermouth",
    method: "Stirred with ice and garnished with an orange peel",
  },
  {
    name: "French 75",
    description: "Elegant and bubbly cocktail made with gin, lemon juice, and Champagne.",
    price: 15,
    menu: "drinks",
    course: "cocktails",
    current: true,
    ingredients: "Gin, lemon juice, simple syrup, Champagne",
    method: "Shaken with ice and strained into a Champagne flute, topped with Champagne",
  },
  {
    name: "Margarita",
    description: "Classic cocktail made with tequila, lime juice, and triple sec.",
    price: 12,
    menu: "drinks",
    course: "cocktails",
    current: true,
    ingredients: "Tequila, lime juice, triple sec",
    method: "Shaken with ice and strained into a salt-rimmed glass, garnished with a lime wedge",
  },

  // Zero-proof beverages
  {
    name: "Ginger Beer Fizz",
    description: "A refreshing and spicy drink made with ginger beer, lime juice, and soda water.",
    price: 7,
    menu: "drinks",
    course: "zero-proof",
    current: true,
    ingredients: "Ginger beer, lime juice, soda water",
    method: "Stirred with ice and garnished with a lime wedge",
  },
  {
    name: "Sparkling Water with Fresh Citrus",
    description: "A light and refreshing zero-proof beverage made with sparkling water and fresh citrus slices.",
    price: 5,
    menu: "drinks",
    course: "zero-proof",
    current: true,
    ingredients: "Sparkling water, citrus slices",
    method: "Served over ice with a straw",
  },
  {
    name: "Espresso",
    description: "A concentrated coffee beverage brewed by forcing a small amount of nearly boiling water under pressure through finely ground coffee beans.",
    price: 4.5,
    menu: "dessert",
    course: "coffee",
    current: true,
    ingredients: "Coffee beans, hot water",
    method: "Brewed under high pressure",
  },
  {
    name: "Cappuccino",
    description: "An espresso-based coffee drink that is prepared with steamed milk and topped with a layer of frothed milk.",
    price: 6,
    menu: "dessert",
    course: "coffee",
    current: true,
    ingredients: "Espresso, milk, foam",
    method: "Espresso combined with steamed and frothed milk",
  },
  {
    name: "Latte",
    description: "A coffee drink made with espresso and steamed milk, often topped with a small amount of foam.",
    price: 5.5,
    menu: "dessert",
    course: "coffee",
    current: true,
    ingredients: "Espresso, milk, foam",
    method: "Espresso combined with steamed milk",
  },
  {
    name: "Cognac",
    description: "A type of brandy made from distilled white wine and aged in oak barrels, known for its rich and complex flavors.",
    price: 8,
    menu: "dessert",
    course: "digestifs",
    current: true,
    ingredients: "Distilled white wine",
    method: "Aged in oak barrels",
  },
  {
    name: "Sherry",
    description: "A fortified wine made from white grapes, typically served as an aperitif or as an accompaniment to desserts.",
    price: 7.5,
    menu: "dessert",
    course: "digestifs",
    current: true,
    ingredients: "White grapes",
    method: "Fortified with brandy",
  },
  {
    name: "Amaro",
    description: "A herbal liqueur characterized by its bitter-sweet taste, often enjoyed as a digestive after a meal.",
    price: 6.5,
    menu: "dessert",
    course: "digestifs",
    current: true,
    ingredients: "Herbs, spices, and other botanicals",
    method: "Infused and aged in a base spirit",
  },  
];

// SEED THE DB
// Delete all the menu items from the DB
MenuItem.deleteMany({})
  .then(() => {
    console.log('All items deleted from collection');
    // Insert new data into the DB
    MenuItem.create(menu)
      .then(menuItemsFromDB => {
        console.log(`Created ${menuItemsFromDB.length} menu items`);
        // Close the DB connection
        mongoose.connection.close();
      })
      .catch((err) => {
        console.error('Error inserting menu items:', err);
      });
  })
  .catch((err) => {
    console.error('Error deleting items:', err);
  });




