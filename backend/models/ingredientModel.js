const mongoose = require("mongoose");

const validator = (val) => {
    if (val === "teaspoon" ||
        val === "tablespoon" ||
        val === "fluid ounce" ||
        val === "cup" ||
        val === "pint" ||
        val === "quart" ||
        val === "gallon" ||
        val === "milliliter" ||
        val === "liter" ||
        val === "pound" ||
        val === "ounce" ||
        val === "milligram" ||
        val === "gram" ||
        val === "kilogram") {
            return true;
        } else {
            return false;
        }
}

const customError = [validator, "Please provide a valid unit of measurement"];

const ingredientSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: [true, "Please add an ingredient name"],
    },
    cost: {
        type: Number,
        required: [true, "Please include a cost"],
    },
    unit: {
        type: String,
        required: [true, "Please include a unit of measurement"],
        validate: customError,
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model("Ingredient", ingredientSchema);