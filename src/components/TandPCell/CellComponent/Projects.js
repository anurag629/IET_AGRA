import React from 'react';

const Projects = () => {
    return (

        <div className="flex flex-wrap items-center justify-center">
            <div className='p-8'>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                    Projects Completed by Students
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


            </div>
        </div>





    );
};

export default Projects;
