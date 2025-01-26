import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProceedForm = () => {
    const [formData, setFormData] = useState({
        CNIC: "",
        email: "",
        fullname: "", 
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.CNIC || !formData.email || !formData.fullname) {  
            alert("Please fill all the fields!");
            return;
        }

        try {
            const response = await fetch(process.env.VITE_REACT_APP_BACKEND_BASEURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                alert("Form submitted successfully!");
                console.log("Server response:", result);
                setFormData({ CNIC: "", email: "", fullname: "" });  
                navigate("/Login");
            } else {
                const error = await response.json();
                alert(`Error: ${error.message}`);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong. Please try again later.");
        }
    };

    return (
        <div className="bg-red-100 w-screen flex flex-col justify-center items-center h-screen gap-6">
            <div>
                <h1 className="text-4xl">Enter Details To Proceed</h1>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
                <div>
                    <input
                        type="number"
                        name="CNIC"  
                        placeholder="Enter CNIC"
                        value={formData.CNIC}  
                        onChange={handleChange}
                        className="border-2 w-72 h-10 pl-4 py-2 rounded-md"
                    />
                </div>

                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border-2 w-72 h-10 pl-4 py-2 rounded-md"
                    />
                </div>

                <div>
                    <input
                        type="text"
                        name="fullname" 
                        placeholder="Enter Full Name"
                        value={formData.fullname}  
                        onChange={handleChange}
                        className="border-2 w-72 h-10 pl-4 py-2 rounded-md"
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        className="bg-amber-200 w-72 h-10 rounded-lg text-lg cursor-pointer border-2"
                    >
                        Proceed To Dashboard
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProceedForm;
