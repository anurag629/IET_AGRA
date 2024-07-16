import React from 'react';
import { useState, useEffect } from 'react';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [batchFilter, setBatchFilter] = useState('');
    const [supervisorFilter, setSupervisorFilter] = useState('');
    const [branchFilter, setBranchFilter] = useState('');
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [sortBy, setSortBy] = useState(''); // 'package' or ''
    const [sortOrder, setSortOrder] = useState(''); // 'asc' or 'desc'


    useEffect(() => {
        fetch("https://project-iet-tnp-bk.vercel.app/api/projects/projects-list-approved/")
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
                (supervisorFilter === '' || project.fields.supervisor === supervisorFilter) &&
                (branchFilter === '' || project.fields.student_branch === branchFilter)
            );
        });
        setFilteredProjects(filteredData);
    };

    const batchOptions = [...new Set(projects.map(project => project.fields.student_batch))];
    const supervisorOptions = [...new Set(projects.map(project => project.fields.supervisor))];
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
                <br />
                <br />
                <div className="flex flex-col mb-4">
                    <div className="flex items-center mb-4">
                        <div className="w-1/2">
                            <a href="https://63034a7373d24551811fa3e3--shiny-fox-46fa01.netlify.app/" className="font-bold text-blueGray-700">1. Computer Science & Engineering Virtual Lab</a>
                        </div>
                        {/* Project detail */}
                        <br />
                        <p className="w-1/2 text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                            This project is a web-based application that allows students to perform experiments in a virtual environment. This project is developed by students of the Computer Science and Engineering Department.
                        </p>

                    </div>

                    <br />
                    <div className="flex items-center mb-4">
                        <div className="w-1/2">
                            <a href="https://majorprojectdetails.netlify.app/" className="font-bold text-blueGray-700">2. Major Project of Batch 2019-2023</a>
                        </div>
                        {/* Project detail */}
                        <br />
                        <p className="w-1/2 text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                            This project is a web-based application that allows students to perform experiments in a virtual environment. This project is developed by students of the Computer Science and Engineering Department.
                        </p>
                    </div>

                    <br />

                    <div className="flex items-center mb-4">
                        <div className="w-1/2">
                            <a href="https://ietagra-vlab.netlify.app/ctypesimulators" className="font-bold text-blueGray-700">3. Project by 3rd Year Students</a>
                        </div>
                        {/* Project detail */}
                        <br />
                        <p className="w-1/2 text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">


                            This type of simulators are having mostly C programming codes and they are self explanatory e.g code are executing line by line and you can understand them easily . these are the mock examples which will make you learn about programming concepts and by this website you will have an idea that how simulator is created and how code runs.
                        </p>



                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
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
                        <label className="px-6 py-3 block whitespace-nowrap">Supervisor:</label>
                        <select
                            value={supervisorFilter}
                            onChange={(e) => setSupervisorFilter(e.target.value)}
                            className="border p-1"
                        >
                            <option value="">All</option>
                            {supervisorOptions.map((option, index) => (
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
                            <th scope="col" className="px-6 py-3">
                                Ppt Link 
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
                                    {project.fields.project_name}
                                </td>
                                <td className="px-6 py-4">
                                    {project.fields.technology}
                                </td>
                                <td className="px-6 py-4">
                                    {project.fields.student_branch}
                                </td>
                                <td className="px-6 py-4">
                                    {project.fields.supervisor}
                                </td>
                                <td className="px-6 py-4">
                                    {project.fields.github_link ? (
                                        <a href={project.fields.github_link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 underline">
                                            View Project
                                        </a>
                                    ) :
                                        (
                                            <p>Not Available</p>
                                        )}
                                </td>
                                <td className="px-6 py-4">
                                    {project.fields.ppt_link ? (
                                        <a href={project.fields.ppt_link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 underline">
                                            View PPT
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
