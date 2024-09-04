export interface ProductsI {
id: number,
name: string,
family: string,
order: string,
genus: string
nutritions: NutritionsI
}

export interface NutritionsI {
calories: number,
fat: number,
sugar: number,
carbohydrates: number,
protein: number
}

