'use client';

import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";


export default function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const searchParams= useSearchParams();
    const callbackUrl= searchParams.get("callbackUrl") || '/';


    const handleSubmit = async (e) => {

        e.preventDefault();
        
        try {
            setLoading(true);
            
            const result = await signIn('credentials', {
                redirect:false,
                email,
                password
            });
            if(result?.error)
            {
                toast.error(result.error);
                setLoading(false);
            }
            else{
                toast.success('Logged in successfully');
                //router.push('/');

                router.push(callbackUrl);

            }

            
        } catch (error) {

            setLoading(false);
            console.log(error);
            
        }
    };


    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center vh-100">
                    <div className="col-lg-5 shadow bg-light p-5">
                        <h2 className="mb-4 text-center">Sign in</h2>

                        <form onSubmit={handleSubmit}>
                            <input type="email" value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            className="form-control mb-3"
                            placeholder="Enter your email"
                            required
                            />

                            <input type="password" value={password}
                            onChange={(e)=> setPassword(e.target.value)}
                            className="form-control mb-3"
                            placeholder="Enter your password"
                            required
                            />

                            <button className="btn btn-primary btn-raised"
                            disabled={loading || !email || !password}>
                                {loading ? 'Please wait...' : 'Submit'}
                            </button>

                        </form>

                    </div>

                </div>
            </div>
        </main>
    );
    

}