import User from '../model/User.model.js';
import bcrypt from 'bcryptjs';
export const signUp = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email });
        
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        let hashedPassword =await bcrypt.hash(password,10);
        const createdUser = new User({
            fullname:fullname,
            email:email,
            password: hashedPassword,
        });
        await createdUser.save();
        
        res.status(201).json({ message: "User created successfully" ,user:{
            fullname:fullname,
            email:email,
            
        }
          
            
        });
    } catch (error) {
       
        console.log("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });

        // Check if user exists and if password matches
        if (!user) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        // Await bcrypt.compare for password comparison
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        // If successful, return user data
        return res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
            }
        });
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
