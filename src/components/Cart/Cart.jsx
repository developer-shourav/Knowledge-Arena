import React from 'react';

const Cart = () => {
    return (
        <div>
           <div className='bg-purple-100 border border-purple-600 py-5 rounded-lg text-lg font-bold text-purple-800 text-center'><p>Spent time on read : 177 min</p></div> 
           <div className='bg-slate-200 my-4 p-4 rounded-lg'>
            <h3 className='text-xl font-bold'>Bookmarked Blogs : 8</h3>
            <div>
                <p className='bg-white my-4 p-4 rounded-lg text-black'>Master Microsoft Power Platform and Become an In-Demand!</p>
                <p className='bg-white my-4 p-4 rounded-lg text-black'>Master Microsoft Power Platform and Become an In-Demand!</p>
            </div>
           </div>
        </div>
    );
};

export default Cart;