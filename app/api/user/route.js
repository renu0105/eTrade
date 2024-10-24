import ConnectToDb from "@/app/lib/ConnectToDb";
import UserModel from "@/app/models/UserModel";

export const GET = async (req, res) => {
  const { name, email, password } = req.body;
  await ConnectToDb();
  const user = await UserModel.findOne({ email: user.email });

  if (!existingUser) {
    // Create a new user
    await User.create({
      name: user.name,
      email: user.email,
      image: user.image,
    });
  }
};
