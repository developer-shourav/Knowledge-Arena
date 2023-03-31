import React from 'react';

const BookMarkedItem = ({itemData}) => {
    return (
        <>
          <div className='bg-white my-4 p-4 rounded-lg text-black shadow'>{itemData?.title}</div>  
        </>
    );
};

export default BookMarkedItem;