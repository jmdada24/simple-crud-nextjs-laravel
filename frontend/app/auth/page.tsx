import React from "react";


const Auth: React.FC =  () => {

    return(
        <main className="min-h-screen flex items-center justify-center bg-base-200 ">
            <div className="card w-96 bg-base-100 shadow-xl p-6 mt-6">
                {/* Login Form */}
                <h3 className="text-center text-2xl font-bold mb-4">Login Form</h3>
                <form className="space-y-3">
                   
                        <label className="block mb-1">Email</label>
                        <input type="email" name="email" placeholder="robertdoe@example.com" required className="input input-bordered w-full"/>
                    
                        <label htmlFor="" className="block mb-1">Password</label>
                        <input type="password" name="password" placeholder="********" required className="input input-bordered w-full"/>

                        <button type="submit" className="btn btn-primary w-full text-base">Login</button>
                </form>

                <p className="mt-4 text-center text-sm">
                    Don't have an account? <a href="#register" className="link link-primary">Register Here</a>

                </p>

                <div className="divider my-6">OR</div>

                <h3 className="text-center font-bold text-2xl mb-4">Register Form</h3>
                
                <form action="" className="space-y-3">
                    <label htmlFor="">Name</label>
                    <input type="text" name="name" placeholder="Name" required className="input input-bordered w-full"/>
                    
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" placeholder="johndoe@example.com" required className="input input-bordered w-full"/>
                    
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" placeholder="********" required className="input input-bordered w-full"/>
                    
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="password_confirmation" placeholder="********" required className="input input-bordered w-full"/>

                    <button className="btn btn-primary w-full text-base">Register</button>

                </form>

                <p className="mt-4 text-center text-sm">Already have an account? <a href="#login" className="link link-primary">Login Here</a>


                </p>
            </div>


        </main>

    );


}

export default Auth;