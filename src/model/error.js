// @ts-check

/**
 * @description error class for when recipe limit in local storage is reached
 *
 */
export class RecipeLimitReached extends Error {
  constructor(message = 'No more recipes can be added!') {
    super(message);
    this.name = 'RecipeLimitReached';
  }
}

/**
 * @description error class for when trying to access a recipe that does not exist
 */
export class RecipeDoesNotExist extends Error {
  constructor(message = 'That recipe does not exist!') {
    super(message);
    this.name = 'RecipeDoesNotExist';
  }
}
