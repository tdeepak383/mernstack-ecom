import Commonform from "@/components/common/form";
import { registerFormControls } from "@/config";
import { useState } from "react";
import { Link } from "react-router-dom";


const initialState = {
    username : '',
    email : '',
    password : '',
}

function AuthRegister(){

    const [formData, setFormData] = useState(initialState)


    function onSubmit(){
        
    }

    return <div className="mx-auto w-full max-w-md space-y-6">
        <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Create new account</h1>
            <p className="mt-2">Already have an account &nbsp;
            <Link className="font-medium text-primary hover:underline" to="/auth/login">
                Login
            </Link>
            </p>
        </div>
        <Commonform 
        formControls={registerFormControls}
        buttonText={'Sign Up'}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
        />
    </div>
}

export default AuthRegister;