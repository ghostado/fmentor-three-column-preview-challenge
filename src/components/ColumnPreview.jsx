import React from 'react'

// Css
import './ColumnPreview.css'

// Img
import sedans from '../assets/icon-sedans.svg';
import suvs from '../assets/icon-suvs.svg';
import luxury from '../assets/icon-luxury.svg';

const ColumnPreview = () => {
    return (
        <main>
            <div className="mainContainer">
                {/* sedans */}
                <div className='sedans'>
                    {/* icon */}
                    <img src={sedans} />

                    {/* title */}
                    <h1>SEDANS</h1>

                    {/* description */}
                    <p>
                        Choose a sedan for its affordability and excellent fuel economy.
                        Ideal for a cruising in the city or on your next road trip.
                    </p>

                    {/* button */}
                    <button>
                        Learn More
                    </button>
                </div>

                {/* suvs */}
                <div className='suvs'>
                    {/* icon */}
                    <img src={suvs} />

                    {/* title */}
                    <h1>SUVS</h1>

                    {/* description */}
                    <p>
                        Take an SUV for its spacious interior, power, and versatility.
                        Perfect for your next family vacation and off-road adventures.
                    </p>

                    {/* button */}
                    <button>
                        Learn More
                    </button>
                </div>

                {/* luxury */}
                <div className='luxury'>
                    {/* icon */}
                    <img src={luxury} />

                    {/* title */}
                    <h1>LUXURY</h1>

                    {/* description */}
                    <p>
                        Cruise in the best car brands without the bloated prices.
                        Enjoy the enhanced comfort of a luxury rental and arrive in style.
                    </p>

                    {/* button */}
                    <button>
                        Learn More
                    </button>
                </div>
            </div>
        </main>
    )
}

export default ColumnPreview