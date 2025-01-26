import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Categories = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        setSelectedCategory(selectedCategory === category ? null : category);
        setSelectedSubCategory(null);
    };

    const handleSubCategoryClick = (subCategory) => {
        setSelectedSubCategory(subCategory);
        navigate(`/forms?subcategory=${encodeURIComponent(subCategory)}`);
    };

    return (
        <div className="bg-red-100 h-screen w-screen flex flex-col justify-start items-center gap-20">
            <div className="text-4xl">Select Categories</div>
            <div className="w-screen flex justify-evenly items-center">
                <div className="relative">
                    <div
                        className="bg-blue-300 h-10 items-center flex rounded-xl justify-center cursor-pointer border w-40"
                        onClick={() => handleCategoryClick("weddingLoans")}
                    >
                        <p className="text-md">Wedding Loans</p>
                    </div>
                    {selectedCategory === "weddingLoans" && (
                        <div className="absolute top-12 left-0 flex items-center flex-col bg-white border shadow-md rounded-md p-2 gap-2 z-10 w-36">
                            <p
                                className="cursor-pointer hover:text-blue-500"
                                onClick={() => handleSubCategoryClick("Valima")}
                            >
                                Valima
                            </p>
                            <p
                                className="cursor-pointer hover:text-blue-500"
                                onClick={() => handleSubCategoryClick("Furniture")}
                            >
                                Furniture
                            </p>
                            <p
                                className="cursor-pointer hover:text-blue-500"
                                onClick={() => handleSubCategoryClick("Valima Food")}
                            >
                                Valima Food
                            </p>
                            <p
                                className="cursor-pointer hover:text-blue-500"
                                onClick={() => handleSubCategoryClick("Jahez")}
                            >
                                Jahez
                            </p>
                        </div>
                    )}
                </div>
                <div className="relative">
                    <div
                        className="bg-blue-300 h-10 items-center flex rounded-xl justify-center cursor-pointer border w-44"
                        onClick={() => handleCategoryClick("businessLoans")}
                    >
                        <p className="text-md">Business Startup Loans</p>
                    </div>

                    {selectedCategory === "businessLoans" && (
                        <div className="absolute top-12 left-0 flex flex-col w-44 items-center bg-white border shadow-md rounded-md p-2 gap-2 z-10">
                            <p
                                className="cursor-pointer hover:text-blue-500"
                                onClick={() => handleSubCategoryClick("Buy Stall")}
                            >
                                Buy Stall
                            </p>
                            <p
                                className="cursor-pointer hover:text-blue-500"
                                onClick={() => handleSubCategoryClick("Advance Rent for Shop")}
                            >
                                Advance Rent for Shop
                            </p>
                            <p
                                className="cursor-pointer hover:text-blue-500"
                                onClick={() => handleSubCategoryClick("Shop Assets")}
                            >
                                Shop Assets
                            </p>
                            <p
                                className="cursor-pointer hover:text-blue-500"
                                onClick={() => handleSubCategoryClick("Shop Machinery")}
                            >
                                Shop Machinery
                            </p>
                        </div>
                    )}
                </div>


                <div className="relative">
                    <div
                        className="bg-blue-300 h-10 items-center flex rounded-xl justify-center cursor-pointer border w-40"
                        onClick={() => handleCategoryClick("educationLoans")}
                    >
                        <p className="text-md">Education Loans</p>
                    </div>

                    {selectedCategory === "educationLoans" && (
                        <div className="absolute top-12 left-0 flex flex-col w-36 items-center bg-white border shadow-md rounded-md p-2 gap-2 z-10">
                            <p
                                className="cursor-pointer hover:text-blue-500"
                                onClick={() => handleSubCategoryClick("University Fees")}
                            >
                                University Fees
                            </p>
                            <p
                                className="cursor-pointer hover:text-blue-500"
                                onClick={() => handleSubCategoryClick("Child Fees Loan")}
                            >
                                Child Fees Loan
                            </p>
                        </div>
                    )}
                </div>


                <div className="relative">
                    <div
                        className="bg-blue-300 h-10 items-center flex rounded-xl justify-center cursor-pointer border w-40"
                        onClick={() => handleCategoryClick("constructionLoans")}
                    >
                        <p className="text-md">Construction Loans</p>
                    </div>
                    {selectedCategory === "constructionLoans" && (
                        <div className="absolute top-12 left-0 flex flex-col w-36 items-center bg-white border shadow-md rounded-md p-2 gap-2 z-10">
                            <p
                                className="cursor-pointer hover:text-blue-500"
                                onClick={() => handleSubCategoryClick("Structure")}
                            >
                                Structure
                            </p>
                            <p
                                className="cursor-pointer hover:text-blue-500"
                                onClick={() => handleSubCategoryClick("Finishing")}
                            >
                                Finishing
                            </p>
                            <p
                                className="cursor-pointer hover:text-blue-500"
                                onClick={() => handleSubCategoryClick("Loan")}
                            >
                                Loan
                            </p>
                        </div>
                )}

                </div>


            </div >
        </div>
    );
};

export default Categories;
