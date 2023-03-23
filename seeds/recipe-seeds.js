const { Recipe } = require("../models");

const recipeData = [
  {
    ingredients:
      "3 dried chipotle chiles, stemmed and seeded/2 dried guajillo chiles, stemmed and seeded/2 dried ancho chiles, stemmed and seeded/2 cups chicken broth/1 dinner roll, torn into pieces/2 corn tortillas, cut into 1-inch strips/5 tomatillos, cut in half crosswise/2 tomatoes, cut in half crosswise/1 tablespoon lard/1 onion, halved and thinly sliced/½ head garlic, peeled and sliced/⅓ cup chopped peanuts/¼ cup raisins/2 tablespoons cumin seeds/1 tablespoon dried thyme/6 whole allspice berries/5 whole cloves/3 cinnamon sticks/1 cup chicken broth/5 ounces dark chocolate, coarsely chopped/3 tablespoons white sugar/1 teaspoon salt",
    steps: `1. Toast chipotle, guajillo, and ancho chiles in a dry pan over medium heat, stirring constantly, until warm and aromatic, about 3 minutes. Transfer to a blender.
        2. Heat 2 cups chicken broth in a saucepan until it begins to simmer, about 5 minutes. Pour broth into the blender.
        3. Toast dinner roll pieces and tortilla strips in a dry pan over medium heat, stirring constantly, until lightly browned, about 3 minutes. Transfer to the blender with chicken broth and chiles.
        4. Allow chiles, toasted bread, and tortillas to soak, fully submerged, in the chicken broth until softened, about 10 minutes. Blend the mixture until smooth.
        5. Cook tomatillos and tomatoes in a dry skillet on medium-high heat until soft and blackened, 3 to 4 minutes per side. Place tomatoes in the blender with the chile puree.
        6. Melt lard in a large skillet over medium heat. Stir in onion, garlic, peanuts, raisins, cumin seeds, thyme, allspice berries, cloves, and cinnamon sticks; cook and stir until onions are soft and golden, 5 to 8 minutes. Remove the cinnamon sticks and other whole spices; add onion mixture to the blender with the chile-tomato mixture and blend until smooth.
        7. Pour chile puree into a large saucepan over medium heat. Stir in 1 cup chicken broth, chocolate, sugar, and salt. Bring mixture to a simmer; stir until chocolate is melted and sauce is thickened and slightly reduced, 10 to 15 minutes.`,
    video_link: "How to make mole",
    food_id: "1",
  },
  {
    ingredients:
      "2 Pounds of pork cut into medium sized cubes / 6 Guajillo chiles / 1 Can of hominy / 6 Cloves of garlic / 1 Tomato / Salt and Pepper to taste / 1/2 Onion / 1 Teaspoon of oregano / 1 Teaspoon of cumin / 2 Bay leaves",
    steps: `1. Cook the pork meat in sufficient water (ensuring that the pork is completely covered with an inch or two to spare) with 1 clove of garlic, 1/4 piece of an onion (not diced), the bay leaves, salt and pepper. Set aside 1/2 cup of the broth from cooking the pork. 
        2. Once the meat is cooked through, remove the bay leave, onion, and garlic clove, and add the hominy and bring to a boil for 15 minutes.
        3. Prepare the guajillo chilies by removing the seeds and stem and boiling in water for 5-7 minutes or until soft. Set aside for the next step.
        4. Blend the remaining 5 cloves of garlic, the guajillo chilies, the tomato, another 1/4 piece of the onion, the cumin, the salt, the pepper, the 1/2 cup of broth that was set aside in step 1 above, and 1/2 cup of hominy (to thicken the sauce) in a blender until completely blended.
        5. Once the above mixture is blended, strain the mixture and add the strained liquid to the boiling pot with the pork and water. Season with oregano and add salt to taste.
        6. Let boil 15 minutes longer.
        7. Serve hot, topped with chopped lettuce, onions, radishes, and a few drops of lime and finally the homemade tortilla chips`,
    video_link: "How to make pozole",
    food_id: "2",
  },
  {
    ingredients:
      "1 pork shoulder, 3-4 pounds / 4 tablespoons salt / 4-6 garlic cloves, peeled / 1 tablespoon cumin seeds / 1 tablespoon black peppercorns / 1 teaspoon whole allspice / 1 tablespoon red-chile powder / ½ teaspoon whole cloves / ½ teaspoon cinnamon powder / 1 tablespoon Mexican oregano / 4 tablespoons achiote-seed paste / 1 orange, zested and juiced / 1 grapefruit, zested and juiced / 1 lime, juiced / 2 banana leaves, wiped clean / ½ white onion, thinly sliced",
    steps: `1. Score the fat of the pork, evenly salt the meat and set it aside while you make the marinade. In a dry saucepan over medium heat, toast the garlic cloves until they’re charred all over, then remove. In the same pan, add cumin, peppercorns, allspice, red-chile powder, cloves and cinnamon. Toast until you can really smell the cumin and pepper. Grind spices, and mix in a food processor until smooth with the oregano, charred garlic, achiote paste, all the citrus zest and about half the juice.
        2. Place two overlapping banana leaves on your work surface, and put the pork at the center. Rub the spice paste all over the meat, arrange the sliced white onion on top and roll the whole thing up, folding the sides like wrapping paper. (If it unravels, tie it closed with some kitchen twine.) Set the parcel in the fridge for a few hours, or overnight.
        3. Heat oven to 300. Put the parcel on a rack, or a ring of scrunched-up aluminum foil, inside a heavy pot with a half cup of water at the bottom. Bake with the lid on until the meat is very tender and yields easily to a fork, about 4 hours. Meanwhile, mix the chopped red onion with remaining citrus juices, salt and habanero, and set aside.
        4. While the meat is still warm, carefully transfer the parcel to a serving dish. Use a fork to shred the meat, spoon over the cooking juices and mix well. Serve with pickled onions, warmed tortillas and halved limes.`,
    video_link: "How to make cochinita pibil",
    food_id: "3",
  },
  {
    ingredients:
      "2 tablespoons olive oil / 1 pound ground pork, preferably not lean / 1 medium white onion, chopped / ½ sweet, tart apple (such as Winesap or Pink Lady), peeled, cored and chopped / ½ firm, sweet pear (such as Bosc or Anjou), peeled, cored and chopped / ½ plantain, peeled and chopped / 4 garlic cloves, finely chopped / Kosher salt and black pepper / 1 teaspoon dried Mexican oregano / ½ teaspoon ground cinnamon / ¼ teaspoon ground clove / ¼ cup dry sherry / 1(14-ounce) can diced fire-roasted tomatoes with their juices / ½ peach, peeled, pitted and chopped / ⅓ cup raisins / ¼ cup raw whole almonds, chopped / ⅓ cup pitted Spanish green olives / ½ teaspoon finely grated lemon zest plus 1 tablespoon lemon juice / 2 tablespoons chopped fresh parsley / 4 cups vegetable oil, for frying / 8 large poblano chiles / 2 cups raw whole walnuts / ¼ cup raw whole almonds / 4 ounces crème fraîche (½ cup) / 4 ounces queso fresco (about 1 cup), crumbled / 1 cup pomegranate seeds / ½ cup small parsley leaves",
    steps: `1. Make the picadillo: Heat olive oil in a large skillet over high. Spread pork in an even layer and cook, undisturbed, until lightly browned, about 3 minutes. Toss and continue to cook, breaking up meat with the back of a spoon and scraping up any browned bits from the bottom of the pan, until meat is crumbled and lightly browned, 4 to 6 minutes. Using a slotted spoon, transfer the browned meat to a large bowl and set aside.
        2. Reduce heat to medium and cook onion, apple, pear, plantain, garlic and 1½ tablespoons kosher salt, stirring occasionally, until tender but not browned, 10 to 12 minutes, adjusting the heat as necessary. Add 1 teaspoon pepper, the oregano, cinnamon and clove, and cook, stirring frequently, until very fragrant, 1 minute.
        3. Stir in sherry and cook, stirring occasionally, until most of the liquid has evaporated and no longer smells of alcohol, 2 minutes. Stir in tomatoes and their juices, peach, raisins and almonds and cook, stirring occasionally, until most of the liquid has evaporated, 5 minutes.
        4. Add the cooked pork, olives, lemon zest and 1 cup water, and cook, stirring occasionally, until all the liquid has evaporated, the vegetables and fruit are tender and the pork is cooked through, 10 to 15 minutes. Stir in the parsley and lemon juice, season with salt and pepper, and set aside until ready to use.
        5. Meanwhile, fry the poblanos: Heat vegetable oil in a large saucepan fitted with a deep-fry thermometer on high until thermometer registers 375 degrees. Working in four batches, fry the poblanos, turning once, until skin is opaque and blistered, 1 to 2 minutes per side. Transfer poblanos to a large, heatproof bowl, wrap tightly with plastic and let sit 15 minutes. When cool enough to handle, peel skin from chiles, leaving stem intact. Chiles should still be firm and bright green. Using a paring knife, make a 2-inch cut (about 1 inch from the top) lengthwise down the side of each poblano and carefully remove seeds and ribs.
        6. Place the poblanos cut-side up on a rimmed baking sheet and fill each with about ½ cup picadillo, gently pressing the filling into the poblanos with the back of a spoon, until full but not bursting or splitting. Set aside.
        7. Make the sauce: Purée the walnuts, almonds, crème fraîche and queso fresco with 1¼ cups water and ¾ teaspoon salt in a blender until creamy. Season with salt and thin with more water, if necessary.
        8. Serve stuffed chiles at room temperature topped with nogada sauce, pomegranate seeds and parsley leaves.`,
    video_link: "How to make chiles en nogada",
    food_id: "4",
  },
  {
    ingredients:
      "2 Guajillo chile/ 1 Red hot chili (chile de arbol) / ½ Teaspoon of Cumin / 1 Spoon of Oregano / ½ Onion / 5 Garlic cloves / 1 spoon Salt / 6 whole black pepper / 3 Bay leaves",
    steps: `1. Toast these ingredients well, taking care that the chilies do not burn. They toast fast so remove them before the onion and garlic.
        2. Put all the toasted ingredients in the blender together with 1 tsp of oregano ½ tsp of cumin, 1 tbsp of salt, and 3 bay leaves. Add 1 cup of water and blend everything very well.
        3. With the sauce, you created marinate the meat for one night in the refrigerator. If you don’t have time, don’t worry, I prepared it without marinating and it is delicious, so if you marinate it, it will be gourmet. 
        4. Put the meat in the Instant pot together with the marinade and activate the Meat / Stew button in your Instant Pot and let it cook.
        5. Once it is finished and you can open the pot, let the meat cool a little and crumble it. There you have your healthy barbacoa`,
    video_link: "How to make barbacoa",
    food_id: "5",
  },
  {
    ingredients:
      "1 tablespoon bread yeast / 1 tablespoon sugar / 200 ml buttermilk or yoghourt / 400 ml warm water (about 95F) / 2 tablespoon honey (or malt syrup) / 2 tablespoon coarse salt / 1 tablespoon cracked caraway seed / 300 g rye flour / 700 g unbleached wheat flour",
    steps: `1. Dissolve the yeast in about 150ml of the warm water and about 1 tsp sugar. Let sit until yeast is very frothy.
        2. Combine yeast mixture and other ingredients, then knead until the dough is elastic and no longer sticky.
        3. Place dough in a large bowl, cover with plastic wrap and allow to rise until doubled in size - 1 to 2 hours.
        4. Punch dough down and form into two oval loafs and place on large cookie tray covered with parchment paper. You can also use a bread form if you prefer your bread with straight edges.
        5. Score the top of each loaf with diagonal cuts from a sharp knife. This helps with rising.
        6. Dust the top of each loaf with flour, cover with plastic wrap and allow bread to rise for about 2 hours.
        7. Preheat over to 225C and bake bread for about 25-35 minutes, until the bread is done.
        8. Cool thoroughly before serving.`,
    video_link: "How to make smørrebrød",
    food_id: "6",
  },
  {
    ingredients:
      "1000 g Pork belly in slices (unsalted) / 1 kg Potatoes (new) / 50 g Danish Butter / 4 tablespoons Wheat flour / 4 dl Milk 3,5% / 1 dl Whipping Cream / 1-2 dl Chopped fresh parsley / Salt (according to taste) / Pepper (according to taste) / 1/4 teaspoon Nutmeg",
    steps: `1. Cut the pork belly in 5-6 mm thick slices - then dry the slices on kitchen roll towel for a while. Season the slices with salt and pepper before frying.
        2. Start peeling the potatoes. Put them in a pot - and cover them with cold water. Boil the potatoes for 15-20 minutes. You can leave the skin on - if you prefer. Especially ""new"" potatoes of the season with very thin tender - white skin. Chop the parsley into pieces.Some parsley for the sauce and some for decoration.
        3. Make a butter ball of butter and flour and stir continuously - while melting in the sauce pot - and until the mixture is turned into a consistent mass. Ad little milk and stir. Do not boil the sauce. Repeat until the sauce has the consistency that you favour. Not to thick and not to light. You will end up having prepared a kind of white “béchamel sauce”. Add the whipping cream and taste the sauce. Put nutmeg in - if preferred. Then add all the chopped parsley - and season to taste with salt and pepper - while stirring. Let the sauce simmer for 5-10 minutes - so the ingredients are stirred and mixed together - while sucking up flavour.
        4. Fry the pork belly slices for almost 2 minutes on each side on a hot pan with moderate heat until they seam crispy and with a golden surface. Dry them again on kitchen roll towel - where some of the fat can drain - and keep the fried pork belly slices warm in an oven until serving.
        5. One can also put the pork belly in the heated 200° oven and fry for 20 minutes - while turning the slices after half the roasting time. In the summertime it is quicker to grill the pork belly slices on a well heated charcoal grill.
        6. Put the lukewarm potatoes on a warm plate - arrange the fried pork belly strips - then pour the warm temperate parsley sauce over the potatoes. Sprinkle some fresh chopped parsley over the dish - and serve.`,
    video_link: "How to make stegt flæsk med persillesovs",
    food_id: "7",
  },
  {
    ingredients:
      "2.25 dl short-grained white rice (pudding rice) / 1 dl water / 1 l milk / 2 vanilla beans (the seeds) / 150 g almonds / 2 tbsp sugar / 5 dl heavy cream / 1 can cherry sauce (for topping)",
    steps: `1. In a saucepan; add rice and water. Heat up and let it boil for about 2 minutes.
        2. Add the milk to the pudding and heat up until boiling under constantly stirring.
        3. Add the seeds from the vanilla beans. This is done by slicing the vanilla beans and scrape out the seeds using a knife. Mix the vanilla with 2 tablespoons of sugar. Also, add the empty vanilla beans to the pudding (they still have a lot of flavor).
        4. Let the pudding simmer under a lid at low heat. The rice has a tendency to burn to the saucepan so remember to stir regularly. Let it simmer for about 35 minutes.
        5. Remove the empty vanilla beans. The rice pudding is now done. Let it cool in the fridge before you proceed to make the Risalamande. You can with advantage make this rice pudding the day in advance.
        Risalamande
        6. Heat some water until boiling point and pour it in a small bowl. Add the almonds and let them soak in the hot water for about 5-7 minutes. One-by-one take the almonds up and press them between two fingers so that the peel separates from the almond. Add more hot water if needed. It should be easy to skin the almonds.
        7. Coarsely chop the almonds and mix them with the cold rice pudding.
        8. If you used the original recipe for rice pudding (and not the one in this recipe) and boiled the rice pudding without the vanilla beans, then add the seeds of the beans to the pudding now. Add it to the cold rice pudding and mix well.
        9. In a separate bowl, whisk the heavy cream into whipped cream and gently mix the it with the rice pudding. The Risalamande is now done. Put it in the fridge until serving.`,
    video_link: "How to make risalamande",
    food_id: "8",
  },
  {
    ingredients:
      "500 g (1 lb) ground pork 12% fat (traditional it’s a mix of pork and veal meat) / 1 egg / 2 tbsp water / 70 g (2.5 oz) bread crumbs / salt and pepper / 50 g (1 1/2 oz) of butter (or oil)",
    steps: `1. Start by dividing the meat into 5 portions of about 100 g each (or 1/5 lb each) and shape them into circular thick patties.
        2. In a deep plate; beat the egg together with the water.
        3. In a second plate; mix the bread crumbs together with salt and pepper.
        4. Now dip the pork patties in the egg mixture and then in the breadcrumbs. Make sure the entire patty is covered with breadcrumbs. One time should be enough but if you like a thicker layer of breading – then repeat this step one more time.
        5. On a frying pan; add the butter and fry the breaded pork patties for about 5-8 minutes. Flip them over from time-to-time.`,
    video_link: "How to make karbonader",
    food_id: "9",
  },
  {
    ingredients:
      "1 pound lean ground pork / 1 pound lean ground beef or veal / 2 eggs / 2 tablespoons plain breadcrumbs / salt & pepper / 1 pack of bacon / Drippings from the pan / 1 cup milk or whipping cream / 2-3 teaspoons redcurrant jelly / a few drops of kulør* or gravy browning / salt / milk & all-purpose flour mixed to thicken the sauce",
    steps: `1. Preheat the oven for 400℉ (200℃).
        2. Weave the bacon. Lay slices of bacon side by side on a piece of parchment paper. Lift every other slice, and lay a new slice across. Lay the lifted slices back on top of the one across. Alternate lifting the slices, until you have weaved the whole thing.
        3. Mix the meats with salt, pepper, breadcrumbs and the eggs. Form a loaf in an ovenproof pan. Flip the bacon weave on the meatloaf, and tuck the bacon under the meatloaf.
        4. Cook the meatloaf in the oven fore about 30 minutes. Add about a cup of water to the pan, this will later be used for the sauce. Cook for 20-30 minutes more until the it reach a center temperature about 167℉ (75℃).
        5. Pour the pan drippings into a sauce pan and heat it. Add milk and redcurrant jelly. and thicken the sauce with milk and flour.
        6. Season with redcurrant jelly and salt`,
    video_link: "How to make forloren hare",
    food_id: "10",
  },
  {
    ingredients:
      "Spaghetti 320 g/ Peeled tomatoes 800 g/ Extra virgin olive oil 30 g/ Garlic 1 clove/ Basil to taste/ Fine salt to taste",
    steps: `To make spaghetti with tomato sauce, start with the preparation of the sauce. In a pan, pour extra-virgin olive oil along with a peeled and halved garlic clove 1. so you can remove the core to make the scent more delicate. After 2 minutes of high heat cooking, add peeled tomatoes 2. and adjust the salt 3. Cover with a lid and cook for at least 1 hour over very low heat: the sauce should simmer gently 4. Stir occasionally. After the indicated time, remove the garlic 5. and pass the tomatoes through a food mill 6. to obtain a smooth and homogeneous puree. Transfer the sauce back to the pan 7. turn the heat to very low and add basil leaves 8. After a few minutes, you can turn off the sauce and keep it warm. At this point, all you have to do is cook the pasta in plenty of boiling and salted water 9. Drain the spaghetti al dente directly into the sauce 10. and stir for a few moments over high heat to combine everything 11. Your spaghetti with tomato sauce are ready, all you have to do is plate and garnish with fresh basil as desired12.`,
    video_link: "How to make spaghetti al pomodoro",
    food_id: "11",
  },
  {
    ingredients:
      "INGREDIENTS FOR THE GREEN EGG PUFF PASTRY:      Stirred durum wheat semolina 350 g/ Flour 00 150 g/ Spinach 250 g/ Eggs 2/ Yolks 3     FOR THE RAGU:  Beef (minced, coarse and mixed) 300 g/ Bacon 150 g/ Carrots 50 g/ Celery 50 g/ Browned onions 50 g/ Red wine 100 g/ Tomato puree 300 g/Sufficient vegetable stock/ Extra virgin olive oil 1 tablespoonful/ Fine salt to taste/ Black pepper to taste FOR THE BÉCHAMEL SAUCE:      Butter 70 g/ Flour 00 70 g/ Whole milk 1 l/ Fine salt to taste/ Nutmeg to taste. FOR COATING:     Butter to taste/Parmesan cheese 270 g",
    steps: `To prepare lasagna bolognese, start with the ragù. Prepare the vegetable broth and keep it warm. Then take the pancetta and cut it into thin strips. Finely chop it with a knife or a mezzaluna. Separately, prepare a fine mixture with carrots, onions, celery, and set it aside. In a saucepan, pour a drizzle of oil and add the pancetta. Stir it well with a ladle and let it brown for a few minutes. Then add the vegetable mixture and let it cook for 5-6 minutes. Add the ground meat and raise the heat. Let the meat brown without hurry; it should be well-browned to seal the juices and become soft, not tough. Deglaze with the red wine, then wait for it to evaporate completely and add the tomato puree. Stir; the ragù must cook for two hours. When it resumes boiling, you can add a little hot broth, one or two ladles. Then let the ragù cook for at least a couple of hours. You must cook it with the lid on, but not completely closed. Check and stir occasionally, add more broth if necessary, and let it cook for the indicated time. Now move on to the pasta. First, pour the spinach into a pan, add a little water, cover with a lid and cook until wilted, about 5-6 minutes. Drain, let them cool, and squeeze them well. Transfer them to a mixer and blend them until you get a puree. You must get 100 g of it. Now, on a pastry board, pour the semolina and 00 flour, add the spinach and create a well shape. Add the lightly beaten eggs and yolks. Start kneading everything from the center; this way, the eggs won't slip out of the well. Knead well until you get a homogeneous ball. Wrap it in plastic wrap and let it rest for 30 minutes at room temperature. Meanwhile, prepare the béchamel sauce, always remembering to check the ragù. Heat the milk in a saucepan without boiling it. In another pan, melt the butter, add the flour all at once and cook for a few minutes until you get a golden roux. Then pour the hot milk in 3 times, stirring well. Add salt and flavor with nutmeg. Keep stirring until you get a creamy béchamel. Transfer to a bowl, cover with plastic wrap, and set aside. As soon as the 30 minutes have passed, take the ball of pasta and take a piece. Cover the remaining pasta with plastic wrap to keep it from drying out. Flatten it slightly on the pastry board, forming a rectangle and pass it through the pasta maker, starting from a thicker setting. Fold the pasta onto itself and pass it through the pasta maker again. When it becomes too moist, sprinkle it with a little semolina. Gradually reduce the thickness until you get a sheet that is just over half a millimeter thick. Transfer it to a pastry board and cut rectangles of 30x20 cm. Proceed in this way until you finish the dough, and in the meantime, put a pot of water on the stove and salt it. When it starts boiling, dip one sheet at a time, wait for 30-40 seconds and drain it with a slotted spoon. 34 Transfer it onto a tray with a kitchen towel and pat it to remove excess water. Continue in this way by placing the cooked sheets side by side without overlapping them. As soon as the ragù is ready 36, adjust the salt and pepper and proceed to the composition of the lasagna. Take a large lasagna dish measuring 30x20 cm and butter the bottom 37. Add a thin layer of béchamel sauce and one of ragù 38. Then place the first sheet 39, add a layer of béchamel sauce and one of ragù 40. Add grated Parmesan cheese 41 and place another pasta sheet 42 on top. Add another layer of béchamel sauce and one of ragù 43, add grated cheese 44 and continue in this way until you have 5 layers. After placing the last sheet, add the ragù 45 so that it covers the pasta completely 46. Sprinkle with grated cheese, add small pieces of butter 47 and bake in a preheated static oven at 170°C for 40 minutes. The Bolognese lasagna is ready to be served 48.`,
    video_link: "How to make lasagne",
    food_id: "12",
  },
  {
    ingredients:
      "INGREDIENTS FOR 24 RAVIOLI: Flour 00 250 g/ Eggs (approx. 2 eggs and 1 yolk) 124 g/ Semolina for sprinkling as required  FOR THE FILLING: Spinach 250 g/ Cow ricotta 125 g/ Parmesan cheese for grating 50 g/ Nutmeg to taste/ Fine salt to taste/ Black pepper to taste",
    steps: `To prepare ricotta and spinach ravioli, start by making fresh egg pasta dough. Place the flour (you can reserve about 50 g to add as needed) in a bowl and add the beaten eggs. Mix the ingredients well with your hands to create a homogeneous dough. If the dough is too dry, add warm water to make it softer and easier to roll out with a rolling pin or pasta machine. If the dough is too sticky, add the reserved flour gradually. Transfer the dough to a work surface and knead it vigorously until you obtain a smooth and homogeneous dough. Shape it into a ball and wrap it in transparent food wrap. Let the dough rest for 30 minutes, protected from light and drafts that could dry it out. Meanwhile, prepare the filling: take a large non-stick frying pan and add the rinsed spinach, covering it with a lid to wilt. Let it cook until it is soft, which should take about a couple of minutes. When the spinach is soft, drain it to eliminate excess liquid and set it aside. Take a large bowl and mix the ricotta and Parmesan cheese. Flavor with nutmeg and, using a whisk, mix the ingredients to combine them. Adjust the seasoning with salt and pepper. Once combined, chop the spinach in a blender and add it to the ricotta mixture. Mix the ingredients well to obtain a homogeneous mixture. Transfer the mixture to a pastry bag and set it aside. At this point, the dough will have rested. Divide it into two portions. Leave one portion wrapped in plastic wrap to prevent it from drying out, and lightly dust the other with semolina flour (which will not be absorbed into the dough). Roll out the dough using a pasta machine, starting with the thickest setting and gradually decreasing to the second thinnest setting, until you obtain a rectangular sheet about 1mm thick. Repeat the process with the other portion of dough. Place the two sheets on a work surface lightly dusted with semolina flour and create small mounds of filling using the pastry bag. Arrange the mounds about 3 cm apart from each other, spraying water on the edges of the pasta (or you can also brush them with a kitchen brush) so that, when you place the second sheet on top of the first, it will easily stick. Make sure to release the air between each ravioli by pressing around the filling with your fingers, so that they do not open during cooking, causing the filling to come out. When you place the second sheet on top of the first, make sure to align the edges. Then, using a serrated pastry wheel, cut the ravioli into 4x4 cm squares. You should get about 24 ravioli, which you will place on a tray lightly dusted with semolina flour. Your ricotta and spinach ravioli are now ready! You can cook them in boiling water and season them to taste, for example with butter and sage!`,
    video_link: "How to make ravioli ricotta e spinaci",
    food_id: "13",
  },
  {
    ingredients:
      "INGREDIENTS FOR 3 PIZZAS OF 28 CM DIAMETER: Manitoba flour 200 g/ Flour 00 300 g/ Water at room temperature 300 ml/ Fine salt 10 g/ Fresh brewer's yeast 4 g  FOR SEASONING: Tomato puree 300 g/ Mozzarella cheese 200 g/ Basil to taste/ Extra virgin olive oil to taste.  TO SPREAD THE PIZZAS: Stirred durum wheat semolina to taste",
    steps: `To prepare the pizza dough, we have chosen to mix everything by hand, but if you prefer to use a mixer, you can follow the same procedures, using the hook at medium-low speed. First, pour the two flours into a bowl, crumble the yeast inside, and pour the water little by little. The ideal water temperature is 25°C. Stir gradually with a wooden spoon, and when you have added almost all the water, also add the salt. Continue adding water and start kneading with your hands to combine the ingredients. Finally, transfer the dough onto the work surface and work it with your hands until it is smooth and homogeneous. Then let it rest on the work surface for about ten minutes, covering it with the bowl. After resting, give it a small fold: imagine the sphere is divided into four parts, take the end of each one, pull it gently, and fold it towards the center. Once you have made the four folds, flip it onto itself and shape it into a sphere. Transfer the dough into a bowl, cover it with plastic wrap, and let it rise. For convenience, you can put the bowl in the oven (turned off but with the light on), so the inside will reach a temperature of 26-28°C, ideal for rising. Alternatively, you can also keep the bowl in a warm place. The times are approximate since each dough, temperature, and weather conditions affect the rising: on average, the dough should take 6 hours to double in volume. After the rising time, the dough will be beautifully puffy, so transfer it onto the work surface and divide it into 3 pieces of 265g each. If you need to, lightly flour the work surface. Now take each portion and, as before, lift a flap of dough and bring it towards the center. Repeat the same operation for the other 3 flaps of dough. Flip the dough and proceed with "pirlatura": rotating the dough with your hands on the work surface, bringing it towards you, and then repeatedly pushing it away until you obtain a smooth and regular sphere. Transfer the dough balls into a greased pizza box and cover them with its lid. Let them rest for another 30 minutes. Meanwhile, place the refractory stone in the oven and set it to 250°C with static mode. Now, using a tarocco (a special tool used in Italy to move the pizza around), gently lift the first dough ball. Transfer it to a surface with plenty of semolina and add a little more semolina on top. Using your fingertips, press the dough in the center and make a rotating movement to enlarge it. Never press the edges, and continue until you obtain a 28 cm disk. Transfer the dough onto the pizza peel, being careful not to ruin it. Now, using a spoon, spread the tomato sauce on the pizza, leaving a border. Bake it, sliding the pizza gently onto the refractory stone, and let it cook for about 6 minutes. In the meantime, cut the mozzarella into sticks or shred it by hand. You can gently squeeze it so that it does not release too much water when cooked. After 6 minutes, using the pizza peel, remove the pizza from the oven. Add the mozzarella sticks on top and bake it for another 6 minutes. When it is well browned, remove it from the oven, add the basil leaves, and enjoy!`,
    video_link: "How to make pizza magherita",
    food_id: "14",
  },
  {
    ingredients:
      "Spaghetti 400 gr/ Guanciale 150 g/ Grattuagiato Pecorino 100 g/ 4 eggs/ black pepper to taste/ Fine salt to taste",
    steps: `To prepare the classic carbonara, you need to bring a large pot of water to boil. As soon as the water reaches boiling point, add the spaghetti and let them cook until 2 minutes before the end of the cooking time. Cut the guanciale (cured pork cheek) into thick slices of about 4 mm, and then cut these slices into strips that are approximately 1 cm wide. Put the guanciale in a pan and brown it over medium heat. Meanwhile, crush some black pepper in a mortar. In a bowl, combine the egg yolks, pecorino cheese, and crushed pepper. Mix well until you obtain a homogeneous mixture and set aside. When the guanciale is crispy, drain the pasta (al dente) and add it to the pan with the guanciale. Add two ladles of cooking water and mix well to emulsify. Turn off the heat and add the egg and pecorino mixture and another ladle of cooking water. Start stirring to melt the egg with the water. Mix well and add a couple more ladles of cooking water, continuing to stir until you obtain a creamy emulsion. Then, plate the pasta and finish with a sprinkle of black pepper and, if desired, some grated pecorino cheese. Your classic carbonara is now ready!`,
    video_link: "How to make carbonara classica",
    food_id: "15",
  },
  {
    ingredients:
      "Shortcrust pastry 1/ Smoked bacon 200 g/ Ham cubes 150 g/ Eggs 2/ Egg yolks 2/ Cream 20 cl/ Milk 20 cl/ Nutmeg powder 2 pinch(s)/ Salt 3 pinch(s)/ Pepper 2 pinch(s)",
    steps: `While your oven preheats to 180°C (th.6), start by cooking the bacon. Bring 1/2 liter of water to a boil in a saucepan, add the bacon, and blanch it for 1 minute to remove impurities. Drain it in a colander, then cook it (without any fat) for 5 minutes in a non-stick frying pan. Drain it on paper towels. 2.To prepare the filling for your quiche, simply whisk (using a fork or a whisk) the eggs and egg yolks in a bowl with the cream, milk, nutmeg, salt, and pepper. Then, add the bacon and diced ham. 3. Take the pie crust out of the refrigerator and place it in a 28 cm diameter tart pan lined with parchment paper. Prick it with a fork a few times, then spread the bacon filling over it. 4. Bake the quiche Lorraine for approximately 40 minutes. Serve it hot, warm, or cold, as desired, with a crispy and well-seasoned green salad.`,
    video_link: "How to make quiche lorraine",
    food_id: "16",
  },
  {
    ingredients:
      "Firm flesh potatoes 1.5 kg/ Reblochon cheese 500 g/ Smoked bacon matches 150 g/ Double cream 100 g/ Dry white wine 1 glass(s)/ Onions 3/ Oil 3 tablespoons/ Coarse salt 1 tablespoon/ White pepper 10 grains/ Nutmeg 1 pinch(s)",
    steps: `Carefully wash the potatoes. Fill a large pot with water and add coarse salt. Place the potatoes in the water and cook for 20 minutes after the water returns to a boil. 2. Peel and thinly slice the onions, making sure to remove the germ. In a pan, heat the oil and sauté the sliced onions. When they become translucent, add the smoked bacon lardons. Continue cooking, stirring regularly with a wooden spoon, until the onions and lardons are well browned. Deglaze the pan with white wine and continue cooking for 5 minutes. Set aside.3. Preheat the oven to 200°C (th.6-7). Cut the Reblochon cheese into long slices. Crush the white peppercorns in a mortar. Peel the cooked potatoes and cut them into large slices. 4. Butter a large oven dish or individual containers. Sprinkle with nutmeg and crushed white pepper. Spread the potatoes, then the onions and the lardons browned in white wine. Cover everything with sour cream, then arrange the cheese slices on top. Bake the tartiflette for 30 minutes, until the Reblochon cheese forms a golden and gratin crust. 5. Serve your delicious tartiflette hot, just out of the oven, accompanied by a nice green salad with vinaigrette and a glass of white wine from Savoie.`,
    video_link: "How to make tartiflette",
    food_id: "17",
  },
  {
    ingredients:
      "Veal bourguignon 800 g/ Mushrooms 250 g/ Bacon 100 g/ Red wine 1 l/ Carrots 2/ Chopped garlic 1 clove(s)/ Onions 2/ Butter 50 g/ Flour 2 tablespoons/ Bouquet garni 1/ Water 500 ml/ Salt 5 pinch(s)/ Pepper 3 pinch(s)",
    steps: `Start by cutting the beef into large cubes. Wash and slice the mushrooms. Peel and slice the onions. Peel and cut the carrots into rounds. Set aside. 2. In a large pot, brown the beef pieces on all sides in the butter over high heat. Then add the lardons, sliced carrots, and onions. Lower the heat and let simmer for a few minutes. Add the flour and mix well. 3. Pour in the red wine (it should cover the meat). Season and let simmer covered for 1 hour. Add water if needed so that the sauce isn't too thick. 4. After an hour, add the mushrooms and let simmer on low heat for another hour. Check the doneness by poking the beef with the tip of a knife (it should be very tender), and if needed, prolong the cooking time.`,
    video_link: "How to make boeuf bourguignon",
    food_id: "18",
  },
  {
    ingredients:
      "FOR THE CASSOULET:  750 g dried white beans/ 500 g duck confit (+ its fat)/ 500 g boneless lamb shoulder/ 300 g lamb neck/ 150 g lean bacon/ 1 raw garlic sausage/ 1 Toulouse sausage/ 1 piece of pork rind (the size of the bottom of the casserole) FOR THE GARNISH : 4 cloves garlic/ 1 large carrot/ 3 onions/ 2 cloves/ 1 bouquet garni/ 100 g breadcrumbs/ 10 peppercorns salt, pepper.",
    steps: `Firstly, start by soaking the beans in cold water for 2 hours in advance. Then begin the preparation by blanching the lean bacon for 10 minutes in a pot of boiling water, rinsing it in cold water and draining it. While it's cooking, peel the garlic, onion and carrot, slice the carrot into rounds, and if you have a muslin bag, enclose the peppercorns inside (otherwise, put them in a tea ball). 2. Next, line the bottom of a casserole dish with the rind, then layer on top the drained white beans, bacon, 2 cloves of garlic, carrot slices, 1 onion studded with cloves, Bouquet Garni and peppercorns. Pour in 1.5 liters of cold water, bring to a boil while skimming, then cover and simmer for 1 hour. 3. Then add the garlic sausage and Toulouse sausage to the casserole, and continue cooking for 30 minutes. Meanwhile, put the portions of confit in a frying pan, start by melting the fat, and reserve it on the side in a bowl. Then brown the pieces of confit in the frying pan, then reserve them on a plate. 4. Next, cut the shoulder and neck of lamb into pieces, and brown them in the same frying pan, with 2 tablespoons of fat from the confit, then season with salt and pepper, remove the meat and reserve it with the confit pieces. Still in the same frying pan, put the remaining 2 cloves of garlic and 2 onions, finely sliced, sauté them over low heat, then moisten with a ladleful of the bean cooking liquid and let simmer for 5 minutes. Finally, remove the Bouquet Garni, peppercorns, onion from the casserole, as well as the sausage and Toulouse sausage. 5. Finish with oven cooking. Preheat the oven to 120°C (th.4), grease a terracotta pot or a high-sided baking dish with the confit fat, and place half of the beans taken from the casserole in it with a skimmer. Add the lamb, confit duck, bacon, as well as the sliced sausage and sausage. 6. Cover with the onion and garlic fondue, and add the remaining beans. Sprinkle with breadcrumbs, then pour 3 ladles of bean cooking liquid and warm confit fat over it. Bake for 4 hours, adding a little bean cooking liquid if necessary and sprinkling with breadcrumbs 3 or even 4 times during cooking.`,
    video_link: "How to make cassoulet",
    food_id: "19",
  },
  {
    ingredients:
      "Firm flesh potatoes 2 kg/ Butter 100 g/ Cream 3 dl/ Whole milk 1 l/ Butter 6 hazelnuts/ Garlic 5 clove(s)/ Nutmeg 1 pinch(s)/ Salt 4 pinch(s)/ Pepper 2 pinch(s)",
    steps: `1. Peel the potatoes, wash them and cut them into thin slices using a mandoline. Peel and crush the garlic cloves. 2. In a large saucepan, bring the whole milk, salt, pepper, nutmeg, and garlic to a boil. Throw the potato slices into the boiling and seasoned milk. Let cook for about ten minutes until they are well soaked and soft. 3. Preheat the oven to 180°C (th.6). Spread the potato slices in a buttered gratin dish. Pour the cream and milk over them. Sprinkle the butter on top of the dish. 4. Bake your gratin dauphinois for 45 minutes to 1 hour until it is nicely golden.`,
    video_link: "How to make gratin dauphinois",
    food_id: "20",
  },
  {
    ingredients:
      "1 kg ripe tomatoes, chopped (35 oz.). Alternatively use 3-4 tins of plum tomatoes, strained and chopped. / 1/2 kg potatoes, sliced (18 oz.) / 1/2 kg aubergines, sliced (18 oz.) / 1/2 kg zucchinis (courgettes), sliced (18 oz.)  / 3/4 of a cup olive oil / 1 red onion, sliced / 2 cloves of garlic, finely chopped / 2 tbsps chopped parsley / salt and freshly ground pepper    ",
    steps: `1. To prepare this delicious briam recipe, start by preparing your vegetables. Peel and cut the potatoes in slices. Wash thoroughly the courgettes and aubergines and slice into 1cm slices. Alternatively you can cut the vegetables in chunks. Peel the tomatoes and cut into thin slices. (You can also use green bell peppers).
    2. To bake the briam use a large baking pan, approx. 30*35cm, so that the vegetables are not layered too deep.
    3. Layer the bottom of the pan with sliced tomatoes and season. Place on top the sliced vegetables and season well. Sprinkle with the onion and garlic and top with the rest of the tomatoes. Season well, garnish with chopped parsley and drizzle with olive oil.
    4. Cover the briam with aluminum foil and bake in preheated oven at 200C (both top and bottom heating elements on) for 1 1/2 to 2 hours. Uncover the briam halfway through cooking time, toss the vegetables and continue baking until nicely coloured.
    5. Serve this traditional briam dish with salty feta cheese and lots of bread. Enjoy!`,
    video_link: "How to make Briam",
    food_id: "21",
  },
  {
    ingredients:
      "Beef mince with 15% fat content and a 12% fat pork mince / some garlic / red onion /  red wine vinegar / some fresh parsley / spearmint / oregano / egg / plain breadcrumbs / olive oil / flour",
    steps: `1. Combine all of the ingredients in a large mixing bowl and mix thoroughly for 5-10 minutes, squeezing with your hands to blend the flavors.
    2. Cover the mixture with plastic wrap and refrigerate for 1 hour. 
    3. Turn the keftedes out of the fridge and roll them into meatballs about the size of a walnut (or bigger if you prefer). 
    4. Fry the keftedes in batches of 10-15 at a time, until golden brown on all sides.`,
    video_link: "How to make Keftedes",
    food_id: "22",
  },
  {
    ingredients:
      "800g ground beef (28 ounces) / 4 cloves of garlic, minced / 2 eggs / 2 teaspoon of ground cumin (if you are a fan of cumin, try 3–4 teaspoons) / 1/2 teaspoon of cinnamon / 1/4 cup of olive oil / 5 slices of stale bread soaked in red wine and squeezed dry or 1 cup of breadcrumbs / salt and freshly ground pepper / 3 cups tomato juice (passata) or tinned chopped tomatoes (800g or 28 oz) / 1 onion, grated / 1 cup red wine / 2 garlic cloves, minced / 1 tbsp tomato paste / olive oil / 1 tsp sugar / salt and freshly ground black pepper / 2 tsps cumin / 1 bay leaf",
    steps: `1. Knead all meatball ingredients together and leave the mixture in the fridge for 1 hour. 
    2. Portion your meatballs and shape them into oblong meatballs about 70g/2.4oz in size. 
    3. Shallow fry gently in oil till golden brown or for a lighter dish, bake the soutzoukakia in the oven at 200C/390F till golden brown. 
    4. Its time to prepare the tomato sauce. Start by sauté the onion in olive oil on medium heat until translucent.
    5. Stir in the tomato paste, cumin and a bit of salt and pepper and fry for 2 minutes. 
    6. Add the squashed garlic and fry for 3-4 minutes until the garlic has cooked and its aromas coming through. 
    7. Finally add the wine, the tomato juice or your tinned chopped tomatoes, sugar and the bay leaf. 
    8. Bring to a boil, turn the heat down to low and simmer until the Soutzoukakia sauce starts to thicken. 
    9. Its now time to bring your Soutzoukakia together! Gently place the fried/ baked soutzoukakia in the tomato sauce and stir gently, being careful not to break them. 
    10. Cover your pan with a lid and let them simmer on low heat for 30 minutes so the meatballs absorb all the wonderful flavours from the tomato sauce. 
    11. If the sauce starts to thicken too soon, add a splash of water and stir through. 
    12. Serve the soutzoukakia (baked meatballs) while still hot with some rice or mashed potatoes and lots of tomato sauce.`,
    video_link: "How to make Soutzoukakia",
    food_id: "23",
  },
  {
    ingredients:
      "3 tbsp olive oil / 1 kg stewing beef, cut into large chunks (chuck or shin works well) / 600g baby onions or small shallots (see tip, below) /pinch of golden caster sugar / 4 garlic cloves, chopped / 4 bay leaves / 1 cinnamon stick / pinch each of ground allspice and ground cloves / 1 tbsp dried oregano / 1 tbsp tomato purée / 1 tbsp red wine vinegar / 2 x 400g cans chopped tomatoes / 150ml red wine",
    steps: `1. Heat the oven to 180C/160C fan/gas 4. 
    2. Heat 2 tbsp oil in a flameproof casserole over a medium-high heat and brown the beef all over, removing it to a plate with a slotted spoon as you go (you may need to do this in batches). 
    3. Drizzle the rest of the oil into the pan. 
    4. Peel the onions (but leave whole) and add to the pan, then scatter over the sugar. 
    5. Sizzle for 5 mins, stirring now and then until starting to brown. 
    6. Add the garlic, bay, cinnamon stick, allspice, cloves and oregano, and cook for 1 min more. 
    7. Stir in the tomato purée and cook for another minute, then tip in the beef along with any resting juices. Stir to coat in the spiced onion mixture. 
    8. Add the red wine vinegar and chopped tomatoes. Rinse the cans out with the wine and pour it in, then add a third of a can of water. 
    9. Season with salt and stir well. Bring to a simmer, stir again, then cover with the lid and transfer to the oven for 1 hr. 
    10. Remove from the oven and stir again. If the sauce looks very thick, add a splash more water. Cover again and return to the oven for another hour, or until the meat is fork-tender – the timing will depend on the cut you’ve used. 
    11. Serve hot. To get ahead, leave to cool completely, then transfer to an airtight container and chill for up to three days or freeze for up to three months. Defrost completely in the fridge overnight, then reheat in a pan over a low heat with a splash more water to loosen, if needed.`,
    video_link: "How to make satifado",
    food_id: "24",
  },
  {
    ingredients:
      "12 boneless, skinless chicken thighs / 4 tbsp olive oil / 2 tsp dried oregano / 1 tsp dried mint / 1 tsp ground cumin / 1 tsp coriander / 1 tsp sweet paprika / ½ tsp ground cinnamon / zest and juice 1 lemon, plus 1 lemon cut into wedges to serve / 4 garlic cloves, crushed / 250g strong white bread flour / 7g sachet fast-action dried yeast / 1 tsp golden caster sugar / 2 tsp olive oil, plus a little for greasing / ½ cucumber / 200g Greek yogurt / small bunch mint, finely chopped / 1 small garlic clove, crushed / juice ½ lemon / 1 butter or round lettuce / 4 large tomatoes, seeds removed, chopped / 1 red onion, halved and thinly sliced / 4 long metal skewers",
    steps: `1. Tip the chicken into a large bowl and add the marinade ingredients, along with 1 tsp salt and plenty of black pepper. Mix well, ensuring each thigh is well coated. Cover and chill for at least 3 hrs, or up to 48 hrs if you have time. 
    2. A few hours before you want to eat, make the pitta. In a bowl, mix the flour, yeast, sugar and 1/ 2 tsp salt with your fingertips. Add 150ml lukewarm water and 2 tsp olive oil, and combine to a dough. Tip onto a work surface and knead for 8-10 mins (or use a tabletop mixer for 5 mins). Clean, then lightly oil your bowl, return the dough and cover loosely with cling film. Leave to rise for 1 hr or until nearly doubled in size. 
    3.Divide the dough into four equal pieces. Roll out to circles, as thin as you can. Cover with sheets of oiled cling film and leave to rise for 15-20 mins. 
    4. To make the tzatziki, halve the cucumber lengthways and scoop out the seeds. Finely chop, then combine with the remaining ingredients, along with a pinch of salt. Chill until ready to serve. 
    5. Heat the grill to its highest setting. Line a roasting tin with foil and find 4 metal skewers long enough to sit across the top with a little space underneath. Remove the chicken from the fridge, take one thigh and thread it over 2 skewers, so it has a skewer through either side. Thread another piece of chicken on top, leaving a slight gap between each piece; you should fit 6 thighs on each pair of skewers. Position the skewers on top of the roasting tin and set aside while you finish the pittas. 
    6. Heat a large frying pan (or two if you have them) over a medium-high heat and brush the breads with oil. Gently lift one into the pan. It should sizzle, and bubbles should appear on the surface after 1-2 mins. When the underside is golden, flip it and cook for another 2-3 mins. 
    7. Continue until all the breads are cooked, wrapping them in foil as you go. Keep the bread warm in the bottom of the oven while you cook the chicken. Alternatively, cook on the barbecue for 5-8 mins, turning occasionally. 
    8. Put the chicken under the hot grill and cook for 15-20 mins, brushing with oil and any juices from the bottom of the tin regularly, and turning halfway through cooking. Once cooked, remove from the oven and rest for 5 mins. 
    9. Cut through each pair of skewers to make four kebabs and serve in the warm bread, with lettuce, tomato, red onion, lemon wedges and tzatziki.`,
    video_link: "How to make Souvlaki",
    food_id: "25",
  },
  {
    ingredients:
      "300g fillet steak, cut into large cubes / 1 tbsp vegetable oil, for frying / ½ large red onion, cut into thick wedges / 1 tomato, halved, deseeded and cut lengthways into eighths / 1 amarillo chilli or medium red chilli, deseeded and sliced lengthways / 1 tbsp Pisco (grape brandy) or vodka / 2 tbsp ají amarillo chilli paste or Basic chilli paste (see tips) / small handful coriander leaves, finely chopped / chunky chips, to serve (optional) / 2 garlic cloves, chopped / 75ml soy sauce / 1 tbsp red wine vinegar / 1 tsp Worcestershire sauce / ½ tsp dried oregano / ½ tsp ground cumin",
    steps: `1. Make the marinade by mixing all the ingredients together in a large bowl. Add the meat to the bowl and mix so that it is well covered. Cover with cling film and leave in the fridge for at least 2 hrs, overnight if you have time. 
    2.  Drain the meat, reserving the marinade. Heat the oil in a wok over a high heat until just smoking, then add the meat – be careful, the oil might splutter. Cook as quickly as possible, tossing it until the meat is browned on all sides. 
    3. Add the red onion and cook for 1 min. Add the tomato and chilli, then immediately spoon in the Pisco. Pour over the reserved marinade and chilli paste, stir well, turn off the heat and leave the meat to rest in the sauce for a couple of mins. 
    4. Garnish with coriander and serve with chunky chips, if you like.`,
    video_link: "How to make Lomo Saltado",
    food_id: "26",
  },
  {
    ingredients:
      "500g firm white fish fillets, such as haddock, halibut or pollack, skinned and thinly sliced / juice 8 limes (250ml/9fl oz), plus extra wedges to serve / 1 red onion, sliced into rings / handful pitted green olives, finely chopped / 2-3 green chillies, finely chopped / 2-3 tomatoes, seeded and chopped into 2cm pieces / bunch coriander, roughly chopped / 2 tbsp extra-virgin olive oil /good pinch caster sugar / tortilla chips",
    steps: `1. In a large glass bowl, combine the fish, lime juice and onion. The juice should completely cover the fish; if not, add a little more. 
    2. Cover with cling film and place in the fridge for 1 hr 30 mins. 
    3. Remove the fish and onion from the lime juice (discard the juice) and place in a bowl. Add the olives, chilies, tomatoes, coriander and olive oil, stir gently, then season with a good pinch of salt and sugar. This can be made a couple of hours in advance and stored in the fridge. 
    4. Serve with tortilla chips to scoop up the ceviche and enjoy with a glass of cold beer.`,
    video_link: "How to make Ceviche",
    food_id: "27",
  },
  {
    ingredients:
      "1 whole chicken breast / 1 liter of water / 1 sachet of Gourmet Chicken Bouillon Powder / 2 tablespoons of oil / 1 finely chopped onion / 2 yellow peppers without seeds / 6 slices of white bread without shore / 1 cup evaporated milk / 1 tsp Gourmet Ground Turmeric / ½ cup finely grated Parmesan cheese / ½ cup chopped walnuts / Gourmet Sea Salt to taste / Gourmet Pepper Mix to taste / 1 egg  / black olives to taste / White rice",
    steps: `1. Put the water in a large pot, bring to a boil and then add the Gourmet Chicken Bouillon Powder sachet and stir until it dissolves. 
    2. Add the whole chicken breast and cook for 30 minutes or until the chicken is cooked through. 
    3. Remove the chicken from the broth and shred with your hands. Reserve separately the chicken and the broth in which it was cooked. 
    4. Heat the oil in a large pot and cook the onion together with the chili pepper, season with Gourmet Sea Salt and Gourmet Pepper Mix. Cook until the onion is transparent and soft. 
    5. Soak the sliced bread in a cup of the chicken broth that was left over from cooking. 
    6. Drain the bread and then blend together with the evaporated milk, onion and chili peppers. Return everything to the pot and cook for 8 minutes. 
    7. Add Gourmet Ground Turmeric, shredded chicken, Parmesan cheese and walnuts. If it is too thick, gradually add the reserved chicken broth. 
    8. Serve accompanied by white rice, a hard-boiled egg cut into quarters and olives.`,
    video_link: "How to make Aji de Gallina",
    food_id: "28",
  },
  {
    ingredients:
      "1 whole chicken with skin and without guts / 2 tablespoons of salt / 1 teaspoon of pepper / 1 teaspoon cumin / 3 teaspoons of minced garlic / 1 teaspoon of oregano / 1 teaspoon of rosemary / 4 teaspoons of ground chili pepper / 1 cup of black beer / 2 tablespoons of white vinegar / 2 tablespoons of soy sauce or soy sauce / a quarter of vegetable oil.",
    steps: `1. Clean the chicken. 
    2. In a large container place salt, pepper, garlic, cumin, oregano, rosemary, panca pepper, soy sauce, vinegar, oil and black beer. Mix everything and let it rest for an hour. 
    3. Place the chicken in a baking dish and drizzle it with the prepared dressing. Make sure it is well impregnated, both inside and out. 
    4. Let the meat marinate for at least two hours (actually, it is best to refrigerate it for 12 hours). 
    5. Put the chicken in the oven for about 40 minutes. During this time, it is advisable to take it out every ten minutes and bathe it with the cooking juice, so it will not dry out and the skin will be roasted. 
    6. When the chicken is browned on both sides, remove it and serve it on a platter, either whole or cut into pieces. In Peru, Grilled Chicken is accompanied with fried yellow potatoes and a delicious fresh salad.`,
    video_link: "How to make Pollo a la brasa",
    food_id: "29",
  },
  {
    ingredients:
      "1/2 cup mint leafs / 1/2 cup cilantro leafs / 1/2 cup parsley leafs / 1/2 cup cooking oil / 3 teaspoons red wine vinegar / 1/2 teaspoon salt / 1/2 teaspoon pepper / 1/2 teaspoon cumin / 1/2 teaspoon oregano / 2 teaspoons aji panca paste / 4 teaspoons garlic paste / 3 chicken thighs, skin and bone on / 3/4 lb. pork shoulder, cut into 3 pieces / 3 potatoes, about 1 lb., cut in halves / 2 sweet potatoes, about 1 lb., cut in thirds / 1 ½ cups cooked hominy / 12 mint sprigs / 12 cilantro sprigs / 12 parsley sprigs / 4-6 tablespoons cooking oil for searing meat / 1 ½ cups vegetable stock / 24 corn husks, or enough for 4 layers of corn husks.",
    steps: `1. Purée all the marinade ingredients using an immersion blender, and divide into two equal parts. 
    2. Place all the meat in a container, cover the chicken and pork pieces with half the marinade, seal the container, and refrigerate for 2 hours.
    3. Place the pot lid over a piece of parchment paper, and cut a circle of parchment paper with a radius that is 1″ larger than the radius of the lid 
    4. Make 3 herb bouquets tied with strings, each bouquet has 4 mint sprigs, 4 cilantro sprigs, and 4 parsley sprigs 
    5. Sear the chicken in a skillet with oil over medium to high heat 
    6. Sear the pork in a skillet with oil over medium to high heat 
    7. Cover the bottom of the pot with corn husks, arrange the pork in one layer, place one herb bouquet with the pork, and cover the pork with corn husks 
    8. Arrange the chicken in a second layer, place one herb bouquet with the chicken, and cover the chicken with corn husks 
    9. Arrange the potatoes, sweet potatoes, and hominy in a third layer, brush the remaining marinade over the vegetables, place one herb bouquet with the vegetables, and cover the vegetables with corn husks 
    10. Pour the vegetable stock down the sides of the pot so that it collects in the bottom of the pot, cover the pot with the round piece of parchment paper, and place the lid on the pot 
    11. Turn on heat to low, and cook for 1 hour, until meat is cooked through and vegetables are tender 
    12. Give thanks to Pachamama before opening the pot and serving the Pachamanca`,
    video_link: "How to make Pachamanca",
    food_id: "30",
  },
];

function seedRecipe() {
  return Recipe.bulkCreate(recipeData);
}

module.exports = seedRecipe;
