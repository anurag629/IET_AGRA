import React, { useState, useEffect } from 'react';


const MoocCourse = () => {
    const [courses, setCourses] = useState([]);
    const [batch, setBatch] = useState([]);

    useEffect(() => {
        fetch("https://project-iet-tnp-bk.vercel.app/api/course/course-list-approved/")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setCourses(result);
                },
                (error) => {
                    console.log(error);
                }
            )
    }, [])

    const getAllBatches = () => {
        const apiUrl = `https://project-iet-tnp-bk.vercel.app/api/batch/batch-list-all/`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((result) => {
                setBatch(result);
            })
            .catch((error) => {
                console.error('Error fetching batch:', error);
            });
    }

  

    useEffect(() => {
        getAllBatches();
    }, []);

    const findBatch = (id) => {
        const filteredBatch = batch.filter(e => e.id === id);

        if (filteredBatch[0] === undefined) {
            return null;
        }
        else {
            return filteredBatch[0].fields;
        }
    }

    return (
        <div className="flex flex-wrap items-center justify-center">
            <div className='p-8'>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                    MOOC Courses completed by our students.
                </h3>
                <table className="w-full">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 block whitespace-nowrap">
                                Batch
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Student Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Branch
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Platform
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Course Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Certificate
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Course Duration
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course, index) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                                <th scope="row" className="px-6 py-4">
                                    {findBatch(course.fields.student_batch[0]) && findBatch(course.fields.student_batch[0]).batch}
                                </th>
                                <th className="px-6 py-4">
                                    {course.fields.student_name}
                                </th>
                                <td className="px-6 py-4">
                                    {course.fields.student_branch}
                                </td>
                                <td className="px-6 py-4">
                                    {course.fields.course_platform}
                                </td>
                                <td className="px-6 py-4">
                                    {course.fields.course_name}
                                </td>
                                <td className="px-6 py-4">
                                    {/* Display certificate as link */
                                    <a href={course.fields.course_certificate} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 underline">
                                        View certificate
                                    </a>
                                    }
                                </td>
                                <td className="px-6 py-4">
                                    {course.fields.course_duration}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>


    );
};

export default MoocCourse;
