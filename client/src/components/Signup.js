import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "", email: "", phone: "", work: "", password: "", cpassword: ""
    });

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value })
    }

    const PostData = async (e) => {
        e.preventDefault();

        const { name, email, phone, work, password, cpassword } = user;

        const res = await fetch('/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        });

        const data = await res.json();

        if (data.status === 422 || !data) {
            window.alert("Invalid Registration"); 
            console.log("Invalid Registration");
        } else {
            window.alert(" Registration Successful"); 
            console.log("Successful Registration");
            navigate("/login");
        }
    }

        return (
            <>
                <div className="container">
                    <h1>Signup</h1>
                    <form method='POST'>
                        <div className="form-group">
                            <label htmlFor="usr">Name</label>
                            <input type="text" name='name' className="form-control" id="usr1" value={user.name} onChange={handleInputs} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={user.email} onChange={handleInputs} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="usr">Phone No.</label>
                            <input type="Number" name='phone' className="form-control" id="usr2" value={user.phone} onChange={handleInputs} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="usr">Work</label>
                            <input type="text" name='work' className="form-control" id="usr3" value={user.work} onChange={handleInputs} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" name='password' className="form-control" id="exampleInputPassword1" value={user.password} onChange={handleInputs} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Confirm Password</label>
                            <input type="password" name='cpassword' className="form-control" id="exampleInputPassword2" value={user.cpassword} onChange={handleInputs} />
                        </div>

                        <button type="submit" className="btn btn-primary" onClick={PostData}>Sign Up</button>
                    </form>
                </div>

            </>
        )
    }

    export default Signup;