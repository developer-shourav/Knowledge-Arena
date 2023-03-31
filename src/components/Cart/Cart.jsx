import React from 'react';
import BookMarkedItem from '../BookMarkedItem/BookMarkedItem';

const Cart = (props) => {
    const {cartData, time} = props;
    return (
        <div className='mt-8'>
           <div className='bg-purple-100 border border-purple-600 py-5 rounded-lg text-lg font-bold text-purple-800 text-center '><p>Spent time on read : {time} min</p></div> 
           <div className='bg-slate-200 my-4 p-4 rounded-lg'>
            <h3 className='text-xl font-bold '>Bookmarked Blogs : {cartData?.length}</h3>
            <div>
                {
                    cartData.map( data => <BookMarkedItem key={Math.random(data?.id*10)}  itemData = {data}> </BookMarkedItem>)
                }
                
            </div>
           </div>
        </div>
    );
};

export default Cart;