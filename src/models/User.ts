// src/models/User.ts
import mongoose from "mongoose";
import { IUser } from "./index.d";
interface IUserModel extends IUser, mongoose.Document {}

const UserSchema = new mongoose.Schema({
	username: String,
	email: { type: String, required: true },
	password: { type: String, required: true },
});

const User = mongoose.model<IUserModel>("User", UserSchema, "users");

export { User };
