class Meal {
	constructor(
		id,
		categoryIds,
		title,
		affordability,
		complexity,
		imageUrl,
		duration,
		ingredients,
		steps,
		isGlutenFree,
		isVegan,
		isVegetarian,
		isLactoseFree
	) {
		this.id = id;
		this.categoryIds = categoryIds;
		this.title = title;
		this.affordability = affordability;
		this.complexity = complexity;
		this.ingredients = ingredients;
		this.duration = duration;
		this.steps = steps;
		this.imageUrl = imageUrl;
		this.isGlutenFree = isGlutenFree;
		this.isVegan = isVegan;
		this.isVegetarian = isVegetarian;
		this.isLactoseFree = isLactoseFree;
	}
}
export default Meal;
