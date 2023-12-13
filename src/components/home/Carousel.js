import React, { useState } from 'react';

const Carousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNext = () => {
        setCurrentImageIndex((currentImageIndex + 1) % 5);
    };

    const handlePrev = () => {
        setCurrentImageIndex((currentImageIndex - 1 + 5) % 5);
    };

    return (
        <div className="container mx-auto md:px-6 mt-8">
            <section className="mb-32">
                <div id="default-carousel" className="relative w-full" data-carousel="slide">
                    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                        <div className="hidden duration-700 ease-in-out" data-carousel-item style={{ display: currentImageIndex === 0 ? 'block' : 'none' }}>
                            <img src="./images/college_front_side.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item style={{ display: currentImageIndex === 1 ? 'block' : 'none' }}>
                            <img src="./images/college_teachers.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item style={{ display: currentImageIndex === 2 ? 'block' : 'none' }}>
                            <img src="./images/college_front.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item style={{ display: currentImageIndex === 3 ? 'block' : 'none' }}>
                            <img src="./images/college_tour.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item style={{ display: currentImageIndex === 4 ? 'block' : 'none' }}>
                            <img src="../../images/building2.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                    </div>
                    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                        <button type="button" className={`w-3 h-3 rounded-full ${currentImageIndex === 0 ? 'bg-white' : 'bg-gray-400'}`} aria-current={currentImageIndex === 0} aria-label="Slide 1" data-carousel-slide-to="0" onClick={() => setCurrentImageIndex(0)}></button>
                        <button type="button" className={`w-3 h-3 rounded-full ${currentImageIndex === 1 ? 'bg-white' : 'bg-gray-400'}`} aria-current={currentImageIndex === 1} aria-label="Slide 2" data-carousel-slide-to="1" onClick={() => setCurrentImageIndex(1)}></button>
                        <button type="button" className={`w-3 h-3 rounded-full ${currentImageIndex === 2 ? 'bg-white' : 'bg-gray-400'}`} aria-current={currentImageIndex === 2} aria-label="Slide 3" data-carousel-slide-to="2" onClick={() => setCurrentImageIndex(2)}></button>
                        <button type="button" className={`w-3 h-3 rounded-full ${currentImageIndex === 3 ? 'bg-white' : 'bg-gray-400'}`} aria-current={currentImageIndex === 3} aria-label="Slide 4" data-carousel-slide-to="3" onClick={() => setCurrentImageIndex(3)}></button>
                        <button type="button" className={`w-3 h-3 rounded-full ${currentImageIndex === 4 ? 'bg-white' : 'bg-gray-400'}`} aria-current={currentImageIndex === 4} aria-label="Slide 5" data-carousel-slide-to="4" onClick={() => setCurrentImageIndex(4)}></button>
                    </div>
                    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={handlePrev}>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={handleNext}>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Carousel;