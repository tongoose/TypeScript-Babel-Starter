// src/models/User.ts
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	username: String,
	email: { type: String, required: true },
	password: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema, "users");

export = User;
