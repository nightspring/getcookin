
var recipes = [
	{
		'cat': 'breakfast',
		'id': 1,
		'title': 'French Toast',
		'img': 'img/frenchtoast.jpg',
		'ing': ['1 tsp ground cinnamon', '1/4 tsp ground nutmeg', '2 Tbsp sugar', '4 Tbsp butter', '4 eggs', '1/4 cup milk', '1/2 tsp vanilla', '8 slices of bread', '1/2 cup maple syrup'],
		'dir': ['In a small bowl, combine, cinnamon, nutmeg, and sugar and set aside briefly.', 'In a 10-inch or 12-inch skillet, melt butter over medium heat. Whisk together cinnamon mixture, eggs, milk, and vanilla and pour into a shallow container such as a pie plate. Dip bread in egg mixture. Fry slices until golden brown, then flip to cook the other side. Serve with syrup.']
	},
	{
		'cat': 'breakfast',
		'id': 2,
		'title': 'Good Old Fashioned Pancakes',
		'img': 'img/pancakes.jpg',
		'ing': ['1 1/2 cups flour', '3 1/2 tsp baking powder', '1 tsp salt', '1 Tbsp sugar', '1 1/4 cups milk', '1 egg', '3 Tbsp butter, melted'],
		'dir': ['In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.', 'Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.']
	},
	{
		'cat': 'breakfast',
		'id': 3,
		'title': 'Veggie Omelet',
		'img': 'img/omelet.jpg',
		'ing': ['2 Tbsp butter', '1 onion, chopped', '1 green bell pepper, chopped', '4 eggs', '2 Tbsp milk', '3/4 tsp salt', '2 ounches shredded Swiss cheese', '1/8 tsp black pepper'],
		'dir': ['Melt one tablespoon butter in a medium skillet over medium heat. Place onion and bell pepper inside of the skillet. Cook for 4 to 5 minutes stirring occasionally until vegetables are just tender.', 'While the vegetables are cooking beat the eggs with the milk, 1/2 teaspoon salt and pepper.', 'Shred the cheese into a small bowl and set it aside.',
		 'Remove the vegetables from heat, transfer them to another bowl and sprinkle the remaining 1/4 teaspoon salt over them.', 'Melt the remaining 1 tablespoon butter (in the skillet just used to cook the vegetables) over medium heat. Coat the skillet with the butter. When the butter is bubbly add the egg mixture and cook the egg for 2 minutes or until the eggs begin to set on the bottom of the pan. Gently lift the edges of the omelet with a spatula to let the uncooked part of the eggs flow toward the edges and cook. Continue cooking for 2 to 3 minutes or until the center of the omelet starts to look dry.',
		 'Sprinkle the cheese over the omelet and spoon the vegetable mixture into the center of the omelet. Using a spatula gently fold one edge of the omelet over the vegetables. Let the omelet cook for another two minutes or until the cheese melts to your desired consistency. Slide the omelet out of the skillet and onto a plate. Cut in half and serve.']
	},
	{
		'cat': 'lunch',
		'id': 4,
		'title': 'Tortellini Broccoli Salad',
		'img': 'img/tortellini.jpg',
		'ing': ['2 (9 ounce) packages of three-cheese tortellini', '4 cups chopped broccoli',
			'1 pint grape tomatoes, halved', '2 green onions, chopped', '1 cup bottled coleslaw dressing'],
		'dir': ['Cook the tortellini according to the package directions, drain, rinse with cold water, and refrigerate until cool, about 30 minutes.',
			'Place the tortellini, broccoli, grape tomatoes, and green onions into a salad bowl. Pour the dressing over the ingredients, and toss lightly to coat. Chill in refrigerator before serving.']
	},
	{
		'cat': 'lunch',
		'id': 5,
		'title': 'Kansas Tomato Sandwich',
		'img': 'img/kansas.jpg',
		'ing': ['2 slices white bread', '1 medium tomato, thickly sliced', '1 slice American cheese', 
			'2 tsp butter or margerine', '1 lettuce leaf', 'salt and pepper to taste'],
		'dir': ['Toast the bread slices to your desired darkness. When done, spread lightly with butter or margarine. Place a slice of tomato on the buttered side of one slice, and top with a slice of cheese. Season to taste with salt and pepper and place a slice of lettuce on if desired. Top with the remaining slice of bread. Enjoy!']
	},
	{
		'cat': 'lunch',
		'id': 6,
		'title': 'Southwestern Pasta Salad',
		'img': 'img/southwest.jpg',
		'ing': ['1 (8 ounce) package rotini pasta', '1/3 cup vegetable oil', '1 fresh lime', '2 Tbsp chili powder', 
			'2 tsp cumin', '1/2 teaspoon salt', '2 cloves garlic, crushed', '1 1/2 cups corn', '1 can black beans, drained and rinsed',
				'1/2 cup diced green bell pepper', '1/2 cup diced red bell pepper', '1/2 cup fresh cilantro leaves', '1 cup chopped tomatoes'],
		'dir': ['Bring a large pot of lightly salted water to a boil. Add pasta and cook for 8 to 10 minutes or until al dente; drain.',
			'In a large bowl combine oil, lime juice, chili powder, cumin, salt and garlic. Stir in pasta and set aside to cool to room temperature, stirring occasionally.',
			'Stir in corn, beans, green pepper, red pepper and 1/2 of the cilantro leaves. Spoon onto a platter and garnish with tomatoes and remaining cilantro. Serve chilled or at room temperature.']
	},
	{
		'cat': 'dinner',
		'id': 7,
		'title': 'Grilled Salmon',
		'img': 'img/salmon.jpeg',
		'ing': ['1 1/2 lbs salmon fillets', 'lemon pepper to taste', 'garlic powder to taste', 'salt to taste', '1/3 cup soy sauce',
			'1/3 cup brown sugar', '1/3 cup water', '1/4 cup vegetable oil'],
		'dir': ['Season salmon fillets with lemon pepper, garlic powder, and salt.', 'In a small bowl, stir together soy sauce, brown sugar, water, and vegetable oil until sugar is dissolved. Place fish in a large resealable plastic bag with the soy sauce mixture, seal, and turn to coat. Refrigerate for at least 2 hours.',
		'Preheat grill for medium heat.', 'Lightly oil grill grate. Place salmon on the preheated grill, and discard marinade. Cook salmon for 6 to 8 minutes per side, or until the fish flakes easily with a fork.']
	},
	{
		'cat': 'dinner',
		'id': 8,
		'title': 'Tofu and Rice Stuffed Bell Peppers',
		'img': 'img/peppers.jpg',
		'ing': ['1 cup brown rice', '2 cups water', '2 Tbsp olive oil', '1 clove garlic', '1 package tofu', '1 3/4 cups marinara suace',
			'salt and pepper to taste', '2 red bell peppers, halved and seeded', '2 orange bell peppers, halved and seeded', '2 cups mozzarella cheese, shredded', '8 slices tomato'],
		'dir': ['Place rice and water in a pot and bring to a boil. Cover, reduce heat to low, and simmer 45 minutes, or until tender.', 'Heat the olive oil in a skillet over medium heat, and stir in garlic and tofu. Cook about 5 minutes. Mix in 1/4 cup marinara sauce, season with salt and pepper, and continue to cook and stir until tofu is evenly brown.',
			'Preheat oven to 350 degrees F (175 degrees C).', 'Using a wooden spoon or spatula, press an equal amount of rice into each pepper half. Layer rice with remaining marinara sauce, and 1/2 the cheese. Press equal amounts of tofu into the pepper halves. Place 1 tomato slice on each pepper, and top peppers with remaining mozzarella. Arrange stuffed peppers in a baking dish.',
				'Bake 25 minutes in the preheated oven, until cheese is melted. Serve 1/2 of each color pepper to each person.']
	},
	{
		'cat': 'dinner',
		'id': 9,
		'title': 'Homemade Black Bean Veggie Burgers',
		'img': 'img/blackbean.jpg',
		'ing': ['1 can black beans', '1/2 cup bell peppers, chopped', '1/2 onion, chopped', '3 cloves garlic', '1 egg', '1 Tbsp chili powder',
			'1 Tbsp cumin', '1 tsp chili sauce', '1/2 cup bread crumbs'],
		'dir': ['If grilling, preheat an outdoor grill for high heat, and lightly oil a sheet of aluminum foil. If baking, preheat oven to 375 degrees F (190 degrees C), and lightly oil a baking sheet.', 'In a medium bowl, mash black beans with a fork until thick and pasty.',
			'In a food processor, finely chop bell pepper, onion, and garlic. Then stir into mashed beans.', 'In a food processor, finely chop bell pepper, onion, and garlic. Then stir into mashed beans.',
				'Stir the egg mixture into the mashed beans. Mix in bread crumbs until the mixture is sticky and holds together. Divide mixture into four patties.', 'If grilling, place patties on foil, and grill about 8 minutes on each side. If baking, place patties on baking sheet, and bake about 10 minutes on each side.']
	},
	{
		'cat': 'dessert',
		'id': 10,
		'title': 'Soft Chocolate Chip Cookies',
		'img': 'img/cookies.jpg',
		'ing': ['4 1/2 cups flour', '2 tsp baking soda', '2 cups butter', '1 1/2 cups brown sugar', '1/2 cup white sugar', '2 packages vanilla pudding mix', '4 eggs',
			'2 tsp vanilla', '4 cups chocolate chips', '2 cups chopped walnuts'],
		'dir': ['Preheat oven to 350 degrees F (175 degrees C). Sift together the flour and baking soda, set aside.', 'In a large bowl, cream together the butter, brown sugar, and white sugar. Beat in the instant pudding mix until blended. Stir in the eggs and vanilla. Blend in the flour mixture. Finally, stir in the chocolate chips and nuts. Drop cookies by rounded spoonfuls onto ungreased cookie sheets.',
			'Bake for 10 to 12 minutes in the preheated oven. Edges should be golden brown.']
	},
	{
		'cat': 'dessert',
		'id': 11,
		'title': 'Apple Crisp',
		'img': 'img/applecrisp.jpeg',
		'ing': ['10 cups sliced apples', '1 cup sugar', '1 Tbsp flour', '1 tsp cinnamon', '1/2 cup water', '1 cup oats', '1 cup flour', '1 cup brown sugar', '1/4 tsp baking powder',
			'1/4 tsp baking soda', '1/2 cup butter, melted'],
		'dir': ['Preheat oven to 350 degrees F (175 degree C).', 'Place the sliced apples in a 9x13 inch pan. Mix the white sugar, 1 tablespoon flour and ground cinnamon together, and sprinkle over apples. Pour water evenly over all.', 'Combine the oats, 1 cup flour, brown sugar, baking powder, baking soda and melted butter together. Crumble evenly over the apple mixture.',
			'Bake at 350 degrees F (175 degrees C) for about 45 minutes.']
	},
	{
		'cat': 'dessert',
		'id': 12,
		'title': 'New York Cheesecake',
		'img': 'img/cheesecake.jpg',
		'ing': ['15 graham crackers crushed', '2 Tbsp butter, melted', '4 (8 ounce) packages cream cheese', '1 1/2 cups white sugar', '3/4 cup milk',
			'4 eggs', '1 cup sour cream', '1 Tbsp vanilla', '1/4 cup flour'],
		'dir': ['Preheat oven to 350 degrees F (175 degrees C). Grease a 9 inch springform pan.', 'In a medium bowl, mix graham cracker crumbs with melted butter. Press onto bottom of springform pan.',
			'In a large bowl, mix cream cheese with sugar until smooth. Blend in milk, and then mix in the eggs one at a time, mixing just enough to incorporate. Mix in sour cream, vanilla and flour until smooth. Pour filling into prepared crust.',
				'Bake in preheated oven for 1 hour. Turn the oven off, and let cake cool in oven with the door closed for 5 to 6 hours; this prevents cracking. Chill in refrigerator until serving.']
	},
	{
		'cat': 'asian',
		'id': 13,
		'title': 'Pad Thai',
		'img': 'img/padthai.jpg',
		'ing': ['1 (8 ounce) package rice noodles', '5 Tbsp soy sauce', '3/4 cup water', '2 Tbsp brown sugar', '1 tsp chili powder', '1/8 tsp white pepper',
			'1 package tofu', '1 tsp ginger', '1 tsp garlic powder', '1/2 cup chopped red bell pepper', '4 green onions, chopped', 'chopped peanuts, bean sprouts, and lime to garnish'],
		'dir': ['Boil rice noodles for 10 minutes. Drain and rinse in cold water.', 'Add soy sauce, water, brown sugar, chili powder, and white pepper into a mixing bowl, stir well.', 'Saute chopped tofu in olive oil until light brown. Add in peppers and green onion, saute for a few more minutes.', 
			'Add ginger and garlic powder, saute for 1 minute.', 'Add in noodles and sauce mixture, cook for 2 minutes.', 'Garnish and serve!']
	},
	{
		'cat': 'asian',
		'id': 14,
		'title': 'Restaurant Style Fried Rice',
		'img': 'img/friedrice.jpg',
		'ing': ['2 cups white rice', '4 cups water', '2/3 cup chopped baby carrots', '1/2 cup frozen peas', '2 Tbsp vegetable oil', '2 eggs',
			'soy sauce to taste', 'sesame oil to taste'],
		'dir': ['In a saucepan, combine rice and water. Bring to a boil. Reduce heat, cover, and simmer for 20 minutes.', 'In a small saucepan, boil carrots in water about 3 to 5 minutes. Drop peas into boiling water, and drain.',
			'Heat wok over high heat. Pour in oil, then stir in carrots and peas; cook about 30 seconds. Crack in eggs, stirring quickly to scramble eggs with vegetables. Stir in cooked rice. Shake in soy sauce, and toss rice to coat. Drizzle with sesame oil, and toss again.']
	},
	{
		'cat': 'asian',
		'id': 15,
		'title': 'Vegetable Lo Mein',
		'img': 'img/lomein.jpg',
		'ing': ['8 ounces spaghetti noodles', '1/4 cup vegetable oil', '2 cups mushrooms', '1 cup shredded carrots', '1/2 cup sliced red bell peppers',
			'1 onion, chopped', '2 cloves garlic, minced', '2 cups fresh bean sprouts', '1/2 cup chopped green onions', '1 Tbsp cornstarch',
				'1 cup veggie broth', '1/4 cup hoisin sauce', '2 Tbsp honey', '1 Tbsp soy sauce', '1 tsp ginger', '1/4 tsp cayenne pepper', '1/4 tsp curry powder'],
		'dir': ['Bring a large pot of lightly salted water to a boil. Add pasta and cook for 8 to 10 minutes or until al dente; drain.', 'Heat oil in a large wok or saute pan. Stir fry mushrooms, carrots, peppers, onion and garlic until tender. Stir in bean sprouts and green onions; cook one minute. Mix cornstarch and chicken broth in a small bowl and add to stir fry. Stir in hoisin sauce, honey, soy sauce, ginger, cayenne pepper and curry powder. Cook and stir until thickened and bubbly.',
			'Add cooked spaghetti, and toss. Serve immediately.']
	},
	{
		'cat': 'italian',
		'id': 16,
		'title': 'Baked Ziti',
		'img': 'img/ziti.jpg',
		'ing': ['1 pound dry ziti pasta', '1 onion, chopped', '2 jars spaghetti suace', '6 ounces provolone cheese', '1 1/2 cups sour cream',
			'6 ounches mozzarella cheese', '2 Tbsp Parmesan cheese'],
		'dir': ['Bring a large pot of lightly salted water to a boil. Add ziti pasta, and cook until al dente, about 8 minutes; drain.', 'Preheat the oven to 350 degrees F (175 degrees C). Butter a 9x13 inch baking dish. Layer as follows: 1/2 of the ziti, Provolone cheese, sour cream, 1/2 sauce mixture, remaining ziti, mozzarella cheese and remaining sauce mixture. Top with grated Parmesan cheese.',
			'Bake for 30 minutes in the preheated oven, or until cheeses are melted.']
	},
	{
		'cat': 'italian',
		'id': 17,
		'title': 'Hearty Vegetable Lasagna',
		'img': 'img/lasagna.jpg',
		'ing': ['12 no-boil lasagna noodles', '1 can crushed tomatoes', '1 garlic clove, crushed', '1 tsp dried basil', '1/2 tsp salt', '1/4 tsp black pepper',
			'1 (15 ounce) container ricotta cheese', '1 large egg', '4 sliced carrots', '1 can spinach, drained', '2 cups mozzarella cheese', '1/3 cup Parmesan cheese'],
		'dir': ['In 2-quart saucepan over high heat, heat crushed tomatoes, garlic, basil, salt and pepper. Over high heat, heat to boiling; reduce heat to low. Simmer uncovered, 10 minutes to blend flavors.',
			'Preheat oven to 375 degrees F. Grease 12" by 8" baking dish. In medium bowl combine ricotta cheese and egg until well mixed. Spoon some tomato sauce on bottom of dish to coat. Place 3 noodles lengthwise across the pan. Top with 1/3 of tomato sauce. With a spatula, spread 1/3 of ricotta mixture. Scatter 1/3 of carrots and spinach on ricotta and 1/3 of mozzarella cheese. Repeat with noodles, tomato sauce, ricotta, vegetables and mozzarella two more times. Sprinkle with Parmesan cheese.',
				'Cover dish with foil; bake 30 minutes. Uncover dish; bake 10 minutes longer. Let stand 15 minutes before cutting.']
	},
	{
		'cat': 'italian',
		'id': 18,
		'title': 'Eggplant Parmesan',
		'img': 'img/eggplant.jpg',
		'ing': ['3 eggplants, peeled thinly and sliced', '2 eggs, beaten', '4 cups Italian seasoned bread crumbs', '6 cups spaghetti sauce',
			'1 (16 ounce) package mozzarella cheese', '1/2 cup Parmesan cheese', '1/2 tsp dried basil'],
		'dir': ['Preheat oven to 350 degrees F (175 degrees C).', 'Dip eggplant slices in egg, then in bread crumbs. Place in a single layer on a baking sheet. Bake in preheated oven for 5 minutes on each side.',
			'In a 9x13 inch baking dish spread spaghetti sauce to cover the bottom. Place a layer of eggplant slices in the sauce. Sprinkle with mozzarella and Parmesan cheeses. Repeat with remaining ingredients, ending with the cheeses. Sprinkle basil on top.',
			'Bake in preheated oven for 35 minutes, or until golden brown.']
	},
	{
		'cat': 'mexican',
		'id': 19,
		'title': 'Spinach Enchiladas',
		'img': 'img/enchiladas.jpg',
		'ing': ['1 Tbsp butter, 1/2 cup sliced green onions', '2 cloves garlic, minced', '1 (10 ounce) package spinach', '1 cup ricotta cheese',
			'1/2 cup sour cream', '2 cups shredded Monterey Jack cheese', '10 corn tortillas', '1 can enchilada sauce'],
		'dir': ['Preheat the oven to 375 degrees F (190 degrees C).', 'Melt butter in a saucepan over medium heat. Add garlic and onion; cook for a few minutes until fragrant, but not brown. Stir in spinach, and cook for about 5 more minutes. Remove from the heat, and mix in ricotta cheese, sour cream, and 1 cup of Monterey Jack cheese.',
			'In a skillet over medium heat, warm tortillas one at a time until flexible, about 15 seconds. Spoon about 1/4 cup of the spinach mixture onto the center of each tortilla. Roll up, and place seam side down in a 9x13 inch baking dish. Pour enchilada sauce over the top, and sprinkle with the remaining cup of Monterey Jack.',
				'Bake for 15 to 20 minutes in the preheated oven, until sauce is bubbling and cheese is lightly browned at the edges.']
	},
	{
		'cat': 'mexican',
		'id': 20,
		'title': 'Sweet Potato Burritos',
		'img': 'img/burritos.jpg',
		'ing': ['1 Tbsp vegetable oil', '1 onion, chopped', '4 cloves garlic, minced', '6 cups canned kidney beans, drained', '2 cups water',
			'3 Tbsp chili powder', '4 tsp prepared mustard', '2 tsp cumin', '1 pinch cayenne pepper', '3 Tbsp soy sauce', '4 cups mashed cooked sweet potatoes',
				'12 flour tortillas, warmed', '8 ounces shredded Cheddar cheese'],
		'dir': ['Preheat oven to 350 degrees F (175 degrees C).', 'Heat oil in a medium skillet and saute onion and garlic until soft. Mash beans into the onion mixture. Gradually stir in water; heat until warm, 2 to 3 minutes. Remove from heat and stir in the soy sauce, chili powder, mustard, cumin, and cayenne pepper.',
			'Divide bean mixture and mashed sweet potatoes evenly between the tortillas; top with cheese. Fold tortillas burrito-style around the fillings and place on a baking sheet.',
				'Bake in the preheated oven until warmed through, about 12 minutes.']
	},
	{
		'cat': 'mexican',
		'id': 21,
		'title': 'Black Bean Burritos',
		'img': 'img/beanburritos.jpg',
		'ing': ['2 flour tortillas', '2 Tbsp vegetable oil', '1 small onion, chopped', '1/2 red bell pepper, chopped', '1 tsp minced garlic',
			'1 can black beans, rinsed and drained', '1 tsp minced jalapeno peppers', '3 ounces cream cheese', '1/2 tsp salt', '2 Tbsp chopped cilantro'],
		'dir': ['Wrap tortillas in foil and place in oven heated to 350 degrees F (175 degrees C). Bake for 15 minutes or until heated through.', 'Heat oil in a 10-inch skillet over medium heat. Place onion, bell pepper, garlic and jalapenos in skillet, cook for 2 minutes stirring occasionally. Pour beans into skillet, cook 3 minutes stirring.',
			'Cut cream cheese into cubes and add to skillet with salt. Cook for 2 minutes stirring occasionally. Stir cilantro into mixture.', 'Spoon mixture evenly down center of warmed tortilla and roll tortillas up. Serve immediately.']
	}
];



var breakfast = [];
var lunch = [];
var dinner = [];
var dessert = [];
var asian = [];
var italian = [];
var mexican = [];

for(var i in recipes) {
	if(recipes[i].cat === 'breakfast') {
		breakfast.push(recipes[i]);
	}
}

for(var i in recipes) {
	if(recipes[i].cat === 'lunch') {
		lunch.push(recipes[i]);
	}
}

for(var i in recipes) {
	if(recipes[i].cat === 'dinner') {
		dinner.push(recipes[i]);
	}
}

for(var i in recipes) {
	if(recipes[i].cat === 'dessert') {
		dessert.push(recipes[i]);
	}
}

for(var i in recipes) {
	if(recipes[i].cat === 'asian') {
		asian.push(recipes[i]);
	}
}

for(var i in recipes) {
	if(recipes[i].cat === 'italian') {
		italian.push(recipes[i]);
	}
}

for(var i in recipes) {
	if(recipes[i].cat === 'mexican') {
		mexican.push(recipes[i]);
	}
}

var result = [breakfast, lunch, dinner, dessert, asian, italian, mexican];

module.exports = result;


