import { Outlet } from "react-router-dom";





function AuthLayout() {
    return (
        <div className="flex min-h-screen w-full">
            <div className="hidden lg:flex items-center justify-center bg-black w-1/2">
                <div className="max-w-md space-y-6 text-center">
                    <h1 className="text-white text-4xl font-bold">Welcome to E-commerce</h1>
                </div>
            </div>
            <div className="flex flex-1 items-center">
                <Outlet/>
            </div>
        </div>
    );
}

export default AuthLayout;