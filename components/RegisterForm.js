'use client';

import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


export default function RegisterForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e) => {

        e.preventDefault();
        
        try {
            setLoading(true);

            console.log(name,email,password);
            const response = await fetch(`${process.env.API}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({
                    name,email,password,
                })
            });

            const data = await response.json();

            if(!response.ok) {
                toast.error(data.error);
                setLoading(false);
            }
            else{
                toast.success(data.success);
                setName("");
                setEmail("");
                setPassword("");
                router.push("/login");
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
                        <h2 className="mb-4 text-center">Sign up</h2>

                        <form onSubmit={handleSubmit}>
                            <input type="text" value={name}
                            onChange={(e)=> setName(e.target.value)}
                            className="form-control mb-3"
                            placeholder="Enter your name"
                            required
                            />

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
                            disabled={loading || !name || !email || !password}>
                                {loading ? 'Please wait...' : 'Submit'}
                            </button>

                        </form>

                    </div>

                </div>
            </div>
        </main>
    );
    

}