import React from 'react';

const Placements = () => {
    return (
        <div className="flex flex-wrap items-center justify-center">
            <div className='p-8'>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                    Placement Stats
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                    Don't let your users guess by attaching tooltips and popovers to
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                    The kit comes with three pre-built pages to help you get started
                    faster. You can change the text and images, and you're good to
                    go. Just make sure you enable them first via JavaScript.
                </p>
                <table className="w-full">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 block whitespace-nowrap">
                                Student Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Company
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Placement/Internship
                            </th>
                            <th>
                                Package
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row">
                                Anurag Verma
                            </th>
                            <td className="px-6 py-4">
                                DataWars
                            </td>
                            <td className="px-6 py-4">
                                Data Science Intern
                            </td>
                            <td className="px-6 py-4">
                                $99999
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row">
                                Aman
                            </th>
                            <td className="px-6 py-4">
                                Google
                            </td>
                            <td className="px-6 py-4">
                                SDE
                            </td>
                            <td className="px-6 py-4">
                                $1999
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Placements;
