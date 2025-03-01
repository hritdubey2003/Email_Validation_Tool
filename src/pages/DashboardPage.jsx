import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import ReactPaginate from "react-paginate";
import { Pie, Bar } from "react-chartjs-2";
import "chart.js/auto";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function EmailExtractor() {
  const [emailList, setEmailList] = useState([]);
  const [validationResults, setValidationResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [manualEmails, setManualEmails] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const emailsPerPage = 10;

  const disposableDomains = ["tempmail.com", "mailinator.com", "10minutemail.com"];
  const catchAllDomains = ["example.com", "test.com"];

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) return "Invalid";
    const domain = email.split("@")[1];
    if (disposableDomains.includes(domain)) return "Disposable";
    if (catchAllDomains.includes(domain)) return "Catch-All";
    return "Valid";
  };

  const extractEmails = (text) => {
    const emails = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g) || [];
    setEmailList((prev) => [...new Set([...prev, ...emails])]);
  };

  useEffect(() => {
    if (emailList.length > 0) {
      let results = emailList.map((email) => ({ email, status: validateEmail(email) }));
      results.sort((a, b) => (sortOrder === "asc" ? a.email.localeCompare(b.email) : b.email.localeCompare(a.email)));
      setValidationResults(results);
    }
  }, [emailList, sortOrder]);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const displayedEmails = validationResults.slice(currentPage * emailsPerPage, (currentPage + 1) * emailsPerPage);
  
  const emailStatusCounts = validationResults.reduce((acc, { status }) => {
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom" },
    },
  };

  const pieData = {
    labels: Object.keys(emailStatusCounts),
    datasets: [{
      data: Object.values(emailStatusCounts),
      backgroundColor: ["#4CAF50", "#FF5722", "#FFC107", "#9E9E9E"],
    }],
  };

  const barData = {
    labels: Object.keys(emailStatusCounts),
    datasets: [{
      label: "Email Status Count",
      data: Object.values(emailStatusCounts),
      backgroundColor: "#4C9AFF",
    }],
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = (event) => extractEmails(event.target.result);
        reader.readAsText(file);
      });
    },
  });

  return (
    <>
    <Navbar />
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Email Extractor & Validator</h1>
      
      <textarea
        className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
        rows="4"
        placeholder="Enter emails (comma or space separated) & do not enter apart from pattern of regex expressions of email!"
        value={manualEmails}
        onChange={(e) => setManualEmails(e.target.value)}
      />
      <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => extractEmails(manualEmails)}>
        Validate Emails
      </button>
      
      <div {...getRootProps()} className="w-full p-6 border-2 border-dashed border-gray-300 rounded-lg text-center cursor-pointer mt-4">
        <input {...getInputProps()} />
        <p>Drag & drop files here, or click to select files (Supports PDFs, TXT, CSV)</p>
      </div>
      
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Extracted Emails</h2>
        <button className="mb-2 px-4 py-1 bg-gray-500 text-white rounded" onClick={toggleSortOrder}>
          Sort ({sortOrder === "asc" ? "A-Z" : "Z-A"})
        </button>
        <table className="w-full mt-2 border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Email</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {displayedEmails.map((result, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{result.email}</td>
                <td className={`p-2 ${result.status === "Valid" ? "text-green-500" : "text-red-500"}`}>{result.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={Math.ceil(validationResults.length / emailsPerPage)}
        onPageChange={handlePageClick}
        containerClassName={"pagination flex justify-center mt-4 space-x-3"}
        activeClassName={"bg-blue-500 text-white px-3 py-1 rounded"}
        pageClassName={"px-3 py-1 border rounded"}
      />
      
      {validationResults.length > 0 && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-64"><Pie data={pieData} options={chartOptions} /></div>
          <div className="h-64"><Bar data={barData} options={chartOptions} /></div>
        </div>
      )}
    </div>
    <Footer />
    </>
  );
}

export default EmailExtractor;
