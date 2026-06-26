import User from "../models/user.model.js"

export const register = async (req, res, next) => {
    try {

        // get data from body
        const { fullName, email, phone, gender, dob, password } = req.body;

        //  check all fields
        if (!fullName || !email || !phone || !gender || !dob || !password) {
            const error = new Error("All Field Required")
            error.statusCode = 400;
            return next(error);
        }

        // chceking for existing user 
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            const error = new Error("Email already Register")
            error.statusCode = 409;
            return next(error);
        }

        // create Default Photo
        const photoUrl = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`;

        const photo = {
            url: photoUrl,
            publicId: null
        }

        // Create New User and Complete registration
        const newUser = await User.create({
            fullName,
            email,
            phone,
            gender,
            photo,
            dob,
            password
        });

        // response
        res.status(201).json({
            message: "New user Created Successfully"
        });

    } catch (error) {
        // Print Error 
        console.log(error.message)

        next(error);
    }
}

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            const error = new Error("All Field Required")
            error.statusCode = 404;
            return next(error);
        }

        const existingUser = await User.findOne({ email, password });

        const existingUserObj = existingUser.toObject();

        res.status(200).json({ message: "User logged in successfully", data: existingUserObj });

    } catch (error) {
        console.log(error);
        next(error);
    }
}


export const logout = (req, res) => {
    res.json({ message: "Logout Successfull from controller" })
}

// export const deleteuser = async (req, res, next) => {
//     try {
//         const { email, password } = req.body;

//         if (!email || !password) {
//             const error = new Error("All Field Requireds")
//             error.statusCode = 400;
//             return next(error);
//         }
//         await User.deleteOne({ email, password });

//         res.status(200).json({
//             message: "User delete Successfully"
//         })
//     } catch (error) {
//         next(error);
//     }
// }


// export const AllUser = async (req, res, next) => {
//     try {
//         const allUser = await User.find();
//         res.status(200).json({
//             allUser
//         })
//     } catch (error) {
//         next(error)
//     }
// }