import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Forms = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const subCategoryFromURL = queryParams.get("subcategory");
  const [deposit, setDeposit] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPeriod, setLoanPeriod] = useState("");

  const loanDetails = {
    Valima: { maxLoan: "PKR 5 Lakh", loanPeriod: "3 years" },
    Furniture: { maxLoan: "PKR 5 Lakh", loanPeriod: "3 years" },
    "Valima Food": { maxLoan: "PKR 5 Lakh", loanPeriod: "3 years" },
    Jahez: { maxLoan: "PKR 5 Lakh", loanPeriod: "3 years" },
    Structure: { maxLoan: "PKR 10 Lakh", loanPeriod: "5 years" },
    Finishing: { maxLoan: "PKR 10 Lakh", loanPeriod: "5 years" },
    Loan: { maxLoan: "PKR 10 Lakh", loanPeriod: "5 years" },
    "Buy Stall": { maxLoan: "PKR 10 Lakh", loanPeriod: "5 years" },
    "Advance Rent for Shop": { maxLoan: "PKR 10 Lakh", loanPeriod: "5 years" },
    "Shop Assets": { maxLoan: "PKR 10 Lakh", loanPeriod: "5 years" },
    "Shop Machinery": { maxLoan: "PKR 10 Lakh", loanPeriod: "5 years" },
    "University Fees": { maxLoan: "Based on requirement", loanPeriod: "4 years" },
    "Child Fees Loan": { maxLoan: "Based on requirement", loanPeriod: "4 years" },
  };

  const selectedDetails = subCategoryFromURL
    ? loanDetails[subCategoryFromURL] || null
    : null;

  const handleProceed = () => {
    if (deposit.trim() === "" || loanAmount === "" || loanPeriod === "") {
      alert("Please complete all fields.");
    } else {
      const formData = {
        subCategory: subCategoryFromURL,
        loanAmount,
        loanPeriod,
        deposit,
      };

      navigate("/proceedform", { state: formData });
    }
  };

  return (
    <div className="bg-red-100 w-screen flex flex-col items-center justify-center h-screen gap-4">
      {selectedDetails ? (
        <>
          <div>
            <p className="text-2xl">
              You have Selected {subCategoryFromURL} Category
            </p>
          </div>
          <div className="flex flex-col gap-7">
            <p className="text-2xl">Select Loan Amount :</p>
            <select
              className="border-2 h-10 rounded-md"
              onChange={(e) => setLoanAmount(e.target.value)}
            >
              <option value="">Select Loan Amount</option>
              <option value="1 Lakh">1 Lakh</option>
              <option value="3 Lakhs">3 Lakhs</option>
              <option value={selectedDetails.maxLoan}>
                Maximum {selectedDetails.maxLoan}
              </option>
            </select>
          </div>
          <div className="flex flex-col gap-7">
            <p className="text-2xl">Select Loan Period:</p>
            <select
              className="border-2 h-10 rounded-md w-56"
              onChange={(e) => setLoanPeriod(e.target.value)}
            >
              <option value="">Select Loan Period</option>
              {selectedDetails.loanPeriod === "3 years" ? (
                <>
                  <option value="1 year">1 year</option>
                  <option value="2 years">2 years</option>
                  <option value="3 years">Maximum 3 Years</option>
                </>
              ) : selectedDetails.loanPeriod === "5 years" ? (
                <>
                  <option value="1 year">1 year</option>
                  <option value="3 years">3 years</option>
                  <option value="5 years">Maximum 5 Years</option>
                </>
              ) : (
                <>
                  <option value="1 year">1 year</option>
                  <option value="2 years">2 years</option>
                  <option value="4 years">Maximum 4 Years</option>
                </>
              )}
            </select>
          </div>
          <div className="gap-5 flex flex-col">
            <p className="text-2xl">Enter Initial Deposit:</p>
            <input
              type="text"
              placeholder="Enter Initial Deposit"
              className="border-2 h-10 px-2 rounded-md w-56"
              onChange={(e) => setDeposit(e.target.value)}
            />
          </div>
          <div>
            <button
              className="bg-amber-200 w-56 rounded-lg h-7 border-1 cursor-pointer"
              onClick={handleProceed}
            >
              Proceed
            </button>
          </div>
        </>
      ) : (
        <p>Please select a valid subcategory from the URL.</p>
      )}
    </div>
  );
};

export default Forms;