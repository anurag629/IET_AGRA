import React from 'react';
import { useState, useEffect } from 'react';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [batchFilter, setBatchFilter] = useState('');
    const [companyFilter, setCompanyFilter] = useState('');
    const [branchFilter, setBranchFilter] = useState('');
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [sortBy, setSortBy] = useState(''); // 'package' or ''
    const [sortOrder, setSortOrder] = useState(''); // 'asc' or 'desc'


    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/projects/projects-list-approved/")
            .then(res => res.json())
            .then(
                (result) => {
                    setProjects(result);
                    setFilteredProjects(result);
                },
                (error) => {
                    console.log(error);
                }
            )
    }, [])


    const handleFilter = () => {
        const filteredData = projects.filter(project => {
            return (
                (batchFilter === '' || project.fields.student_batch === batchFilter) &&
                (companyFilter === '' || project.fields.company_name === companyFilter) &&
                (branchFilter === '' || project.fields.student_branch === branchFilter)
            );
        });
        setFilteredProjects(filteredData);
    };

    const batchOptions = [...new Set(projects.map(project => project.fields.student_batch))];
    const companyOptions = [...new Set(projects.map(project => project.fields.company_name))];
    const branchOptions = [...new Set(projects.map(project => project.fields.student_branch))];


    const handleSort = (column) => {
        if (column === 'package') {
            if (sortBy === 'package') {
                setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
            } else {
                setSortBy('package');
                setSortOrder('asc');
            }
        }
    };

    const sortedProjects = [...filteredProjects];


    if (sortBy === 'package') {
        sortedProjects.sort((a, b) => {
            const aValue = parseFloat(a.fields.student_salary);
            const bValue = parseFloat(b.fields.student_salary);

            if (sortOrder === 'asc') {
                return aValue - bValue;
            } else {
                return bValue - aValue;
            }
        });
    }

    return (
        <div className="flex flex-wrap items-center justify-center">
            <div className='p-8'>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                    Project Statistics
                </h3>

                <div className="flex flex-col mb-4">
                    <div className="flex items-center mb-4">
                        <label className="px-6 py-3 block whitespace-nowrap">Batch:</label>
                        <select
                            value={batchFilter}
                            onChange={(e) => setBatchFilter(e.target.value)}
                            className="border p-1"
                        >
                            <option value="">All</option>
                            {batchOptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex items-center mb-4">
                        <label className="px-6 py-3 block whitespace-nowrap">Company:</label>
                        <select
                            value={companyFilter}
                            onChange={(e) => setCompanyFilter(e.target.value)}
                            className="border p-1"
                        >
                            <option value="">All</option>
                            {companyOptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex items-center mb-4">
                        <label className="px-6 py-3 block whitespace-nowrap">Branch:</label>
                        <select
                            value={branchFilter}
                            onChange={(e) => setBranchFilter(e.target.value)}
                            className="border p-1"
                        >
                            <option value="">All</option>
                            {branchOptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>

                        <button onClick={handleFilter} className="bg-blue-500 text-white px-4 py-2 rounded ml-4">
                            Apply Filters
                        </button>
                    </div>
                </div>



                <table className="w-full">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 block whitespace-nowrap">
                                Batch
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Student Name
                            </th>
                            <th>
                                Project name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Technology
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Branch
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Supervisor
                            </th>
                            <th scope="col" classname="px-6 py-3">
                                GitHub link
                            </th>


                        </tr>
                    </thead>
                    <tbody>
                        {sortedProjects.map((project, index) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                                <th scope="row">
                                    {project.fields.student_batch}
                                </th>
                                <td scope="row" className="px-6 py-4">
                                    {project.fields.student_name}
                                </td>
                                <td>
                                    <div className="flex items-center">
                                        {project.fields.profile_picture && <img
                                            src={(project.fields.profile_picture && project.fields.profile_picture[0].url)}
                                            alt="student_image"
                                            className="w-12 h-12 rounded-md mr-4"


                                        />}
                                        {!project.fields.profile_picture &&
                                            <img
                                                src="./images/smile_emoji.jpg"
                                                alt="student_image"
                                                className="w-10 h-10 rounded-md mr-4"
                                            />
                                        }
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    {project.fields.company_name}
                                </td>
                                <td className="px-6 py-4">
                                    {project.fields.student_branch}
                                </td>
                                <td className="px-6 py-4">
                                    {project.fields.position_offered}
                                </td>
                                <td className="px-6 py-4">
                                    {project.fields.student_salary}
                                </td>
                                <td className="px-6 py-4">

                                    {project.fields.offer_letter ? (
                                        <a href={project.fields.offer_letter && project.fields.offer_letter[0].url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 underline">
                                            View Offer Letter
                                        </a>
                                    ) :
                                        (
                                            <p>Not Available</p>
                                        )}


                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Projects;
