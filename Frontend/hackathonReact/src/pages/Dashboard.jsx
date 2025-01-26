import React from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
    const location = useLocation();
    const data = location.state || {};

    return (
        <div className="bg-gray-100 w-screen h-screen flex flex-col items-center py-10">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            {Object.keys(data).length > 0 ? (
                <div className="bg-white shadow-md rounded-lg p-6 w-4/5 max-w-3xl">
                    <h2 className="text-xl font-semibold mb-4">Data Received:</h2>
                    <table className="table-auto w-full text-left border-collapse">
                        <thead>
                            <tr>
                                <th className="border-b py-2 px-4">Field</th>
                                <th className="border-b py-2 px-4">Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(data).map(([key, value]) => (
                                <tr key={key}>
                                    <td className="border-b py-2 px-4 font-medium">{key}</td>
                                    <td className="border-b py-2 px-4">{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-lg text-gray-600">No data available. Please send data from the form page.</p>
            )}
        </div>
    );
};

export default Dashboard;
