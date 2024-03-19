import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unqiue: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
}, {
    timestamps: true
});

// Delete old model
const userModel = mongoose.model('user',userSchema);
mongoose.deleteModel(userModel.modelName)

// Create new model
const User = mongoose.model("users", userSchema)

export default User;
