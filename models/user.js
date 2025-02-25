import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const userSchema = new mongoose.Schema(
    {

        name:{
            type: String,
            required: [true, "Please enter your name"],
            trim: true,
            minLength: [3, "Name must be at least 3 characters long"],
            maxLength: [50, "Name must be at most 20 characters long"],
        },
        email:{
            type: String,
            required: [true, "Please enter your email"],
            index: true,
            lowercase: true,
            unique: true,
            trim: true,
            minLength:5,
            maxLength:50,
        },
        password:{
            type: String,
            required: [true, "Please enter your password"],
            minLength: [6, "Password must be at least 6 characters long"],
        },
        role:{
            type: String,
            default: "user",
        },
        image:String,
        resetCode:
        {
            data: String,
            expiresAt:
            {
                type: Date,
                default: () => new Date(Date.now() + 10 * 60 * 1000), //10min
            }
        }

    }
    ,{timestamps: true});

    userSchema.plugin(uniqueValidator);

    export default mongoose.models.User || mongoose.model("User", userSchema);