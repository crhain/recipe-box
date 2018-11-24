export default [
    {label: "id", name: "id", type: "invisible", required: false},
    {label: "Recipe Title", name: "title", type: "text", required: true},
    {label: "Recipe Description", name: "description", type: "text", required: true},
    {label: "Recipe Image URL", name: "image", type: "text", required: false},
    {label: "Recipe Servings", name: "servings", type: "text", required: true},
    {label: "Recipe Ingredients", name: "ingredients", type: "ingredient", required: true},
    {label: "Recipe Instructions", name: "instructions", type: "instruction", required: true}
];