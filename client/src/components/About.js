import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const About = () => {

    const navigate = useNavigate();
    const [userData, setUserData] = useState({})

    const callAboutPage = async () => {
        try {
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })

            const data = await res.json()
            setUserData(data);

            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error
            }

        } catch (err) {
            console.log(err);
            navigate("/login");
        }
    }
    useEffect(() => {
        callAboutPage();
    })

    return (
        <>

            <div className="container">
                <h1>About</h1>

                <table className="table table-borderless">
                    <tbody>
                        <tr>
                            <th scope="row">Name:</th>
                            <td>{userData.name}</td>
                        </tr>
                        <tr>
                            <th scope="row">E-mail:</th>
                            <td>{userData.email}</td>
                        </tr>
                        <tr>
                            <th scope="row">Phone No.:</th>
                            <td colSpan="2">{userData.phone}</td>
                        </tr>
                        <tr>
                            <th scope="row">Work:</th>
                            <td colSpan="2">{userData.work}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default About;