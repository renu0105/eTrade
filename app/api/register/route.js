import ConnectToDb from "@/app/lib/ConnectToDb";
import UserModel from "@/app/models/UserModel";
import bcrypt from "bcryptjs";

export const POst = async (req) => {
  const { name, password, email } = req.body;
  await ConnectToDb;
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = UserModel({
    name,
    email,
    password: hashPassword,
  });
  try {
    await newUser.save();
    return Response.json({ message: "User created successfully", status: 200 });
  } catch (error) {
    return Response.json({ message: error.message, status: 400 });
  }
};
