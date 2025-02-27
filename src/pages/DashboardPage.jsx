import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useDropzone } from 'react-dropzone';

function DashboardPage() {
  const [files, setFiles] = useState([]);
  const [emailList, setEmailList] = useState([]);
  const [validationResults, setValidationResults] = useState([]);
  const [singleEmail, setSingleEmail] = useState('');
  const [singleEmailResult, setSingleEmailResult] = useState(null);

  const disposableDomains = ['tempmail.com', 'mailinator.com', '10minutemail.com'];
  const catchAllDomains = ['example.com', 'test.com'];

  const onDrop = (acceptedFiles) => {
    setFiles([...files, ...acceptedFiles]);
    handleFileUpload(acceptedFiles);
  };

  const handleFileUpload = (uploadedFiles) => {
    uploadedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const emails = e.target.result.split(/[\r\n,]+/).filter((email) => email);
        setEmailList((prev) => [...prev, ...emails]);
      };
      reader.readAsText(file);
    });
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) return 'Invalid';
    
    const domain = email.split('@')[1];
    if (disposableDomains.includes(domain)) return 'Disposable';
    if (catchAllDomains.includes(domain)) return 'Catch-All';
    return 'Valid';
  };

  const handleValidation = () => {
    const results = emailList.map((email) => ({
      email,
      status: validateEmail(email)
    }));
    setValidationResults(results);
  };

  const handleSingleEmailValidation = () => {
    if (singleEmail.trim() === '') return;
    setSingleEmailResult({ email: singleEmail, status: validateEmail(singleEmail) });
  };

  const handleDownloadValidEmails = () => {
    const validEmails = validationResults.filter(result => result.status === 'Valid').map(result => result.email);
    const blob = new Blob([validEmails.join('\n')], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'validated_emails.txt';
    link.click();
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*, video/*, application/pdf, text/plain' });

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">Dashboard</h1>
        <div
          {...getRootProps()}
          className="w-full p-6 border-2 border-dashed border-gray-300 rounded-lg text-center cursor-pointer"
        >
          <input {...getInputProps()} />
          <p>Drag & drop files here, or click to select files (Supports images, videos, PDFs, and text files)</p>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Uploaded Files:</h2>
          <ul>
            {files.map((file, index) => (
              <li key={index} className="text-sm text-gray-700 break-words">{file.name}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Email List:</h2>
          <ul>
            {emailList.map((email, index) => (
              <li key={index} className="text-sm text-gray-700 break-words">{email}</li>
            ))}
          </ul>
          <button onClick={handleValidation} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded w-full sm:w-auto">Validate Emails</button>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Validation Results:</h2>
          <ul>
            {validationResults.map((result, index) => (
              <li key={index} className={`text-sm break-words ${result.status === 'Valid' ? 'text-green-500' : result.status === 'Disposable' ? 'text-yellow-500' : result.status === 'Catch-All' ? 'text-blue-500' : 'text-red-500'}`}>
                {result.email} - {result.status}
              </li>
            ))}
          </ul>
          <button onClick={handleDownloadValidEmails} className="mt-4 px-4 py-2 bg-purple-500 text-white rounded w-full sm:w-auto">Download Valid Emails</button>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Single Email Validation:</h2>
          <div className="flex flex-col sm:flex-row gap-2">
            <input 
              type="text" 
              value={singleEmail} 
              onChange={(e) => setSingleEmail(e.target.value)} 
              placeholder="Enter an email"
              className="p-2 border border-gray-300 rounded flex-1"
            />
            <button onClick={handleSingleEmailValidation} className="px-4 py-2 bg-green-500 text-white rounded w-full sm:w-auto">Validate</button>
          </div>
          {singleEmailResult && (
            <p className={`mt-2 text-sm ${singleEmailResult.status === 'Valid' ? 'text-green-500' : singleEmailResult.status === 'Disposable' ? 'text-yellow-500' : singleEmailResult.status === 'Catch-All' ? 'text-blue-500' : 'text-red-500'}`}>
              {singleEmailResult.email} - {singleEmailResult.status}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
