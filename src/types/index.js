/**
 * @typedef Ingredient
 * @type {Object}
 * @property {Number} quantity
 * @property {String} measure
 * @property {String} ingredient
 */

/**
 * @typedef Recipe
 * @type {Object}
 * @property {String} id - an ID
 * @property {String} title - recipe title
 * @property {String} description - recipe description
 * @property {String} image - url for image
 * @property {Number} servings - number of servings
 * @property {Array.<Ingredient>} ingredients - list of ingredient objects
 * @property {Array.<String>} instructions - list of instruction objects
 */

/**
 * @typedef Action
 * @type {Object}
 * @property {String} type - type of the action
 * @property {*} payload - contents delivered by action
 */
