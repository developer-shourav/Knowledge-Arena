
const addToCart = (id, title) => {
   /*  console.log(id, title); */
    const bookMarkedData = [];
    const dataFromLocalStorage = JSON.parse(localStorage.getItem('bookMarkedItems'));
    if(dataFromLocalStorage){
        const newAddedData = [...dataFromLocalStorage, {id, title }];
        localStorage.setItem('bookMarkedItems', JSON.stringify(newAddedData))
    }

    else{
       const booMarkItem = {id, title};
       bookMarkedData.push(booMarkItem);
       localStorage.setItem('bookMarkedItems', JSON.stringify(bookMarkedData))
    }
}


export {addToCart};