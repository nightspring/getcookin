var recipes = [
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
			'2 teaspoons butter or margerine', '1 lettuce leaf', 'salt and pepper to taste'],
		'dir': ['Toast the bread slices to your desired darkness. When done, spread lightly with butter or margarine. Place a slice of tomato on the buttered side of one slice, and top with a slice of cheese. Season to taste with salt and pepper and place a slice of lettuce on if desired. Top with the remaining slice of bread. Enjoy!']
	},
	{
		'cat': 'lunch',
		'id': 6,
		'title': 'Southwestern Pasta Salad',
		'img': 'img/southwest.jpg',
		'ing': ['1 (8 ounce) package rotini pasta', '1/3 cup vegetable oil', '1 fresh lime', '2 tablespoons chili powder', 
			'2 teaspoons cumin', '1/2 teaspoon salt', '2 cloves garlic, crushed', '1 1/2 cups corn', '1 can black beans, drained and rinsed',
				'1/2 cup diced green bell pepper', '1/2 cup diced red bell pepper', '1/2 cup fresh cilantro leaves', '1 cup chopped tomatoes'],
		'dir': ['Bring a large pot of lightly salted water to a boil. Add pasta and cook for 8 to 10 minutes or until al dente; drain.',
			'In a large bowl combine oil, lime juice, chili powder, cumin, salt and garlic. Stir in pasta and set aside to cool to room temperature, stirring occasionally.',
			'Stir in corn, beans, green pepper, red pepper and 1/2 of the cilantro leaves. Spoon onto a platter and garnish with tomatoes and remaining cilantro. Serve chilled or at room temperature.']
	}
];

for(var i in recipes) {
	console.log(recipes[i].title);
	for(var j in recipes[i].ing) {
		console.log(recipes[i].ing[j]);
	}
	for(var k in recipes[i].dir) {
		console.log(recipes[i].dir[k]);
	}
}