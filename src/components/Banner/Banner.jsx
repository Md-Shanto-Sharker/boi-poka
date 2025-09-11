import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-between p-4'>
            <div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</h1>
                <button className='btn btn-primary'>test test</button>
            </div>
            <div>
                <img className='w-40' src='/src/assets/books.jpg' alt="" />
            </div>
        </div>
    );
};

export default Banner;