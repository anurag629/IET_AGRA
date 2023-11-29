import React from 'react';
import { useState, useEffect } from 'react';

const Placements = () => {
    const [placements, setPlacements] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetch("https://placement-site.onrender.com/api/tnp/placement/list_all/")
      .then(res => res.json())
      .then(
        (result) => {
            console.log(result);
          setIsLoaded(true);
          setPlacements(result);
        },
        (error) => {
          setIsLoaded(true);
        }
      )
  }, [])

  return (
    <div className="flex flex-wrap items-center justify-center">
    <div className='p-8'>
        <h3 className="text-3xl mb-2 font-semibold leading-normal">
            Placement Stats
        </h3>
        <table className="w-full">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3 block whitespace-nowrap">
                        Student Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Company Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Package (LPA)
                    </th>
                    
                </tr>
            </thead>
            <tbody>
                {placements.map((placement, index) => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                        <td scope="row" className="px-6 py-4">
                            {placement.name}
                        </td>
                        <td className="px-6 py-4">
                            {placement.company_name}
                        </td>
                        <td className="px-6 py-4">
                            {placement.company_salary}
                        </td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>
);
};

export default Placements;
