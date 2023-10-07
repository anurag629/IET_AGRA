import React from 'react';

const Location = () => {
    return (
        <section className="text-gray-600 body-font relative container mx-auto p-8">
            <div className="absolute inset-0 bg-gray-300 rounded-lg">
                <iframe
                    width="100%"
                    height="100%"
                    title="map"
                    src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=iet khandari agra&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    className=' shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded-lg'
                ></iframe>
            </div>
            <div className="container px-5 py-24 mx-auto flex">
                <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                        Welcome to IET, Agra
                    </h2>
                    <p className="leading-relaxed mb-5 text-gray-600">
                        IET, Agra (known as the Institute of Engineering and Technology, Agra) is an engineering college located in Agra, Uttar Pradesh, India. It is a part of the Dr. Bhimrao Ambedkar University, Agra (formerly Agra University). It was established in 1998. It is the only government engineering college in Agra and one of the constituent institutes of Dr. A.P.J. Abdul Kalam Technical University (formerly Uttar Pradesh Technical University).
                    </p>
                    <p className="text-xs text-gray-500 mt-3">
                        Thanks for visiting our website. We are happy to see you here.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Location;
