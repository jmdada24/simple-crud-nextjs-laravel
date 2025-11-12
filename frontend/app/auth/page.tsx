import React from "react";


const Auth: React.FC =  () => {

    return(
        <main className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="card w-96 bg-base-100 shadow-xl p-6">
                {/* Login Form */}
                <h3>Login Form</h3>
                <form action="">
                    <input type="email" name="email" placeholder="robertdoe@example.com" required className="input input-bordered w-full"/>

                    <input type="password" name="password" placeholder="*******" required className="input input-bordered w-full"/>


                    <button type="submit" className="btn btn-primary w-full">Login</button>
                </form>

                <p className="mt-4 text-center text-sm">
                    Don't have an account? 
                    <a href="#register" className="link link-primary">Register Here</a>

                </p>

                <div className="divider my-6">OR</div>

            </div>


        </main>

    );


}

export default Auth;