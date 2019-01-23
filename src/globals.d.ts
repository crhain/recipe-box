declare type Ingredient = {
  quantity: number;
  measure: string;
  ingredient: string;
};

declare type Recipe = {
  id: string;
  title: string;
  description: string;
  image?: string;
  servings: number;
  ingredients: Array<Ingredient>;
  instructions: Array<string>;
};

/**
 * @typedef Recipe
 * @type {Object}
 * @property {String} id - an ID
 * @property {String} title - recipe title
 * @property {String} description - recipe description
 * @property {String} image - url for image
 * @property {Number} servings - number of servings
 * @property {*} ingredients - list of ingredient objects
 * @property {Array.<String>} instructions - list of instruction objects
 */
