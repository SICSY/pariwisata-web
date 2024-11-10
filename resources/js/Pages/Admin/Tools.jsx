import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const Tools = () => {
    const [headers, setHeaders] = useState([{ id: 1, name: "", isMultiData: false }]);
    const [previewData, setPreviewData] = useState([]);

    // Add a new header input
    const addHeader = () => {
        setHeaders([...headers, { id: headers.length + 1, name: "", isMultiData: false }]);
    };

    // Remove a specific header input
    const removeHeader = (id) => {
        setHeaders(headers.filter(header => header.id !== id));
    };

    // Update header name
    const handleHeaderChange = (id, value) => {
        setHeaders(headers.map(header => header.id === id ? { ...header, name: value } : header));
    };

    // Toggle multi-data option
    const toggleMultiData = (id) => {
        setHeaders(headers.map(header => header.id === id ? { ...header, isMultiData: !header.isMultiData } : header));
    };

    // Preview table structure based on headers
    const generatePreview = () => {
        const row1 = [];

        headers.forEach(header => {
            row1.push({ label: header.name, colspan: header.isMultiData ? 2 : 1 });
        });

        // Set a single example row of data under the headers
        const exampleRow = headers.flatMap(header =>
            header.isMultiData ? ["data1", "data2"] : ["data"]
        );

        setPreviewData([row1, exampleRow]);
    };

    // Download Excel file
    const downloadExcel = () => {
        const worksheetData = [];

        // Prepare header rows with merged cells for multi-data headers
        const headerRow1 = [];
        const headerRow2 = [];

        headers.forEach(header => {
            if (header.isMultiData) {
                headerRow1.push(header.name, header.name); // Push header name twice
                headerRow2.push("data1", "data2"); // Two data columns under the multi-data header
            } else {
                headerRow1.push(header.name); // Push header name once
                headerRow2.push("data"); // Single data column for non-multi-data header
            }
        });

        // Add both header rows to worksheet data
        worksheetData.push(headerRow1);
        worksheetData.push(headerRow2);

        // Example data row
        const exampleRow = headers.flatMap(header =>
            header.isMultiData ? ["data1", "data2"] : ["data"]
        );
        worksheetData.push(exampleRow);

        // Generate worksheet
        const ws = XLSX.utils.aoa_to_sheet(worksheetData); // Create worksheet

        // Merge cells for multi-data headers
        let colOffset = 0;
        ws['!merges'] = []; // Initialize merges array

        headers.forEach(header => {
            if (header.isMultiData) {
                ws['!merges'].push({
                    s: { r: 0, c: colOffset }, // start cell
                    e: { r: 0, c: colOffset + 1 } // end cell (merge two columns)
                });
                colOffset += 2; // Move to the next header after merging two columns
            } else {
                colOffset += 1; // For non-multi-data headers, just move one column
            }
        });

        // Create a workbook and add the worksheet
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Sheet1"); // Add sheet to workbook
        XLSX.writeFile(wb, "format_template.xlsx"); // Save file
    };


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Format Excel Template</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl mb-4">Set Up Table Headers</h2>
                {headers.map((header, index) => (
                    <div key={header.id} className="mb-2 flex items-center">
                        <input
                            type="text"
                            placeholder={`Header ${index + 1}`}
                            value={header.name}
                            onChange={(e) => handleHeaderChange(header.id, e.target.value)}
                            className="p-2 border border-gray-300 rounded-md mr-2"
                        />
                        <label className="mr-2 flex items-center">
                            <input
                                type="checkbox"
                                checked={header.isMultiData}
                                onChange={() => toggleMultiData(header.id)}
                                className="mr-1"
                            />
                            Multi-Data
                        </label>
                        <button onClick={() => removeHeader(header.id)} className="text-red-500">Remove</button>
                    </div>
                ))}
                <button onClick={addHeader} className="mt-2 bg-blue-600 text-white py-1 px-3 rounded">Add Header</button>
                <button onClick={generatePreview} className="mt-2 ml-2 bg-green-600 text-white py-1 px-3 rounded">Preview Table</button>
                <button onClick={downloadExcel} className="mt-2 ml-2 bg-purple-600 text-white py-1 px-3 rounded">Download Excel</button>
            </div>

            {/* Preview Table */}
            {previewData.length > 0 && (
                <div className="mt-6">
                    <h2 className="text-xl font-bold mb-2">Table Preview</h2>
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                {previewData[0].map((header, index) => (
                                    <th
                                        key={index}
                                        colSpan={header.colspan}
                                        className="py-2 px-4 border border-black text-center"
                                    >
                                        {header.label}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className='border'>
                            <tr>
                                {previewData[1].map((data, index) => (
                                    <td key={index} className="py-2 border border-black px-4 border-b">{data}</td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Tools;
