import React, { useState } from 'react';

const ViewCourseTeacher = () => {
    const [courses, setCourses] = useState([
        { id: 1, name: 'Course 1', finished: true, verified: false },
        { id: 2, name: 'Course 2', finished: true, verified: false },
        { id: 3, name: 'Course 3', finished: false, verified: false },
        { id: 4, name: 'Course 4', finished: false, verified: false },
        { id: 5, name: 'Course 5', finished: false, verified: true },
        { id: 6, name: 'Course 6', finished: false, verified: false },
        { id: 7, name: 'Course 7', finished: false, verified: true },
        { id: 8, name: 'Course 8', finished: false, verified: false },
        { id: 9, name: 'Course 9', finished: false, verified: true },
        { id: 10, name: 'Course 10', finished: false, verified: false },
    ]);

    const handleCheckboxChange = (id) => {
        const updatedCourses = courses.map((course) => {
            if (course.id === id) {
                return { ...course, verified: !course.verified };
            }
            return course;
        });
        setCourses(updatedCourses);
    };

    // Separate courses into two arrays: verifiedCourses and notVerifiedCourses
    const verifiedCourses = courses.filter((course) => course.verified);
    const notVerifiedCourses = courses.filter((course) => !course.verified);

    return (
        <div>
            <h2>View Courses</h2>
            <h3>Verified Courses</h3>
            <div className="flex flex-wrap items-center justify-center">
                <div className='p-8'>
                    <table className="w-full">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 block whitespace-nowrap">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Finished
                                </th>
                                <th>
                                    Verified
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {verifiedCourses.map((course) => (
                                <tr key={course.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td>{course.id}</td>
                                    <td>{course.name}</td>
                                    <td>{course.finished ? 'Yes' : 'No'}</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={course.verified}
                                            onChange={() => handleCheckboxChange(course.id)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <h3>Not Verified Courses</h3>
            <div className="flex flex-wrap items-center justify-center">
                <div className='p-8'>
                    <table className="w-full">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 block whitespace-nowrap">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Finished
                                </th>
                                <th>
                                    Verified
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {notVerifiedCourses.map((course) => (
                                <tr key={course.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td>{course.id}</td>
                                    <td>{course.name}</td>
                                    <td>{course.finished ? 'Yes' : 'No'}</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={course.verified}
                                            onChange={() => handleCheckboxChange(course.id)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default ViewCourseTeacher;
