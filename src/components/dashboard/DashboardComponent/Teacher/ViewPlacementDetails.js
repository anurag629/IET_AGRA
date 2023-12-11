// ViewPlacementDetails.js

import React, { useEffect, useState } from 'react';

const ViewPlacementDetails = ({ placement, onClose, onUpdate }) => {
    const [editedPlacement, setEditedPlacement] = useState({ ...placement });
    const [offerLetterFile, setOfferLetterFile] = useState(null);
    const [batch, setBatch] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedPlacement((prevPlacement) => ({
            ...prevPlacement,
            fields: {
                ...prevPlacement.fields,
                [name]: value,
            },
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        // console.log(file);
        setOfferLetterFile(file);
    };

    console.log(offerLetterFile);

    const handleUpdate = () => {
        // Make a PUT request to update the details
        // Using the provided API endpoint 'https://project-iet-tnp-bk.vercel.app/api/placement/placement-update/id/'
        const apiUrl = `https://project-iet-tnp-bk.vercel.app/api/placement/placement-update/${placement.id}/`;

        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                roll_number: editedPlacement.fields.roll_number,
                student_name: editedPlacement.fields.student_name,
                student_branch: editedPlacement.fields.student_branch,
                student_batch: editedPlacement.fields.student_batch[0],
                company_name: editedPlacement.fields.company_name,
                student_salary: editedPlacement.fields.student_salary,
                position_offered: editedPlacement.fields.position_offered,
                offer_letter: offerLetterFile,
                status: editedPlacement.fields.status,
                remarks: editedPlacement.fields.remarks,
            }),
            
        };

        console.log(requestOptions.body);   

        fetch(apiUrl, requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Failed to update placement. Status: ${response.status}`);
                }
                return response.json();
            })
            .then((updatedPlacement) => {
                onClose();
                onUpdate(updatedPlacement);
                console.log('Placement updated successfully!');
            })
            .catch((error) => {
                console.error('Error updating placement:', error);
            });
    };

    // Get all the batches from the API
    const getAllBatches = () => {
        const apiUrl = `https://project-iet-tnp-bk.vercel.app/api/batch/batch-list-all/`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((result) => {
                setBatch(result);
            })
            .catch((error) => {
                console.error('Error fetching batches:', error);
            });

        return batch;
    }



    useEffect(() => {
        getAllBatches();
    }, [])

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="absolute bg-white w-1/2 p-4 rounded shadow-lg">

                <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">Edit Details</h3>
                    <form>
                        <label className="block mb-2">
                            Batch:
                            <select
                                name="student_batch"
                                value={editedPlacement.fields.student_batch}
                                onChange={handleInputChange}
                                className="form-select mt-1 block w-full"
                            >
                                {batch && batch.map((batch) => (
                                    <option value={batch.id}>{batch.fields.batch}</option>
                                ))}
                            </select>
                        </label>
                        <label name="student_name">
                            Student Name:
                            <input
                                type="text"
                                name="student_name"
                                value={editedPlacement.fields.student_name}
                                onChange={handleInputChange}
                                className="form-input mt-1 block w-full"
                            />
                        </label>
                        <label className="block mb-2">
                            Branch:
                            <select
                                name="student_branch"
                                value={editedPlacement.fields.student_branch}
                                onChange={handleInputChange}
                                className="form-select mt-1 block w-full"
                            >
                                <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                                <option value="Electronics & Communication Engineering">Electronics & Communication Engineering</option>
                                <option value="Mechanical Engineering">Mechanical Engineering</option>
                                <option value="Civil Engineering">Civil Engineering</option>
                                <option value="Electrical Engineering">Electrical Engineering</option>
                            </select>
                        </label>
                        <label name="company_name">
                            Company Name:
                            <input
                                type="text"
                                name="company_name"
                                value={editedPlacement.fields.company_name}
                                onChange={handleInputChange}
                                className="form-input mt-1 block w-full"
                            />
                        </label>
                        <label name="student_salary">
                            Salary(in LPA):
                            <input
                                type="number"
                                name="student_salary"
                                value={editedPlacement.fields.student_salary}
                                onChange={handleInputChange}
                                min="0"
                                max="10000"
                                className="form-input mt-1 block w-full"
                            />
                        </label>
                        <label name="position_offered">
                            Position Offered:
                            <input
                                type="text"
                                name="position_offered"
                                value={editedPlacement.fields.position_offered}
                                onChange={handleInputChange}
                                className="form-input mt-1 block w-full"
                            />
                        </label>
                        <label name="offer_letter" className="block mb-2 flex items-center">
                            Offer Letter (Upload):
                            
                                <input
                                    type="file"
                                    name="offer_letter"
                                    onChange={handleFileChange}
                                    className="form-input mt-1 inline-block w-full"
                                />

                                
                                    <a
                                        href={editedPlacement.fields.offer_letter}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-blue-500 hover:underline ml-2"
                                    >
                                        View
                                    </a>
                                
                            

                        </label>
                        <label name="status">
                            Status:
                            <select
                                name="status"
                                value={editedPlacement.fields.status}
                                onChange={handleInputChange}
                                className="form-select mt-1 block w-full"
                            >
                                <option value="placed">Approved</option>
                                <option value="not placed">Not Approved</option>
                                <option value="pending">Pending</option>
                            </select>
                        </label>
                        <label name="remarks">
                            Remarks:
                            <input
                                type="text"
                                name="remarks"
                                value={editedPlacement.fields.remarks}
                                onChange={handleInputChange}
                                className="form-input mt-1 block w-full"
                            />
                        </label>
                    </form>
                </div>
                <div className="flex mt-4">
                    <button
                        onClick={handleUpdate}
                        className="mr-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Update
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewPlacementDetails;
