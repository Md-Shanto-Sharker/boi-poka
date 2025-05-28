import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-between p-10 mx-auto'>
            <div>
                <h1>Books to freshen up your bookshelf</h1>
                <button className='btn btn-success'>View The List</button>
            </div>
            
                <img className='w-[220px]' src="/src/assets/books.jpg" alt="" />
           
        </div>
    );
};

export default Banner;