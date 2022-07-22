const mongoose = require("mongoose");

const recipeModel = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: [true, "Please enter a recipe name"],
    },
    ingredients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ingredient",
    }]
}, {
    timestamps: true,
})

module.exports = mongoose.model("Recipe", recipeModel);