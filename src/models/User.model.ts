import { Schema, model } from "mongoose";

interface UserInterface {
    name: string;
    age: number;
    email: string;
    cpf: number;
}

const userSchema = new Schema<UserInterface> ({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    cpf: { type: Number, required: true },
});

const User = model<UserInterface>("User", userSchema);

export default User;