import mongoose from "mongoose";

const EmployeeSchema = new mongoose. Schema({
    name: {
    email: String,
    password: String
    }
})

    
    export default mongoose.model("employee", EmployeeSchema)
    
    