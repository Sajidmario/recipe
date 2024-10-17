import React, { useState, useEffect } from 'react';
import './Slider.css';

import image1 from '../image/first.jpg';
import image2 from '../image/second.jpg';
// import image3 from '../image/third.jpg';
// import image4 from '../image/fourth.jpg';
// import image5 from '../image/fifth.jpg';

const App = () => {
    const images = [image1, image2];
    const [counter, setCounter] = useState(0);
    const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
    const totalSlides = images.length;

    // const goPrev = () => {
    //     if (counter > 0) {
    //         setCounter(counter - 1);
    //     }
    // };

    // const goNext = () => {
    //     if (counter < totalSlides - 1) {
    //         setCounter(counter + 1);
    //     }
    // };

    useEffect(() => {
        const autoSlide = setInterval(() => {
            setCounter((prevCounter) => {
                if (prevCounter === totalSlides - 1) {
                    setDirection(-1); // Reverse direction at the last slide
                    return prevCounter - 1; // Start going backwards
                } else if (prevCounter === 0) {
                    setDirection(1); // Forward direction at the first slide
                    return prevCounter + 1; // Start going forward
                } else {
                    return prevCounter + direction; // Continue in current direction
                }
            });
        }, 3000);

        return () => clearInterval(autoSlide);
    }, [direction, totalSlides]);

    return (
        <div className="container">
            <div className="slide_section">
                <div
                    className="slides"
                    style={{
                        display: 'flex',
                        transition: 'transform 1s ease',
                        transform: `translateX(-${counter * 100}%)`,
                    }}
                >
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            className="slide"
                            alt={`Slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* <button className='prev' onClick={goPrev} disabled={counter === 0}>Prev</button>
            <button className='next' onClick={goNext} disabled={counter === totalSlides - 1}>Next</button> */}
        </div>
    );
};

export default App;
