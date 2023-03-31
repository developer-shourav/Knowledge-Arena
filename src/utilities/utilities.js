import Swal from 'sweetalert2';

/* ====LocalStorage Data Adding Function======= */
const addToCart = (id, title) => {
    const bookMarkedData = [];
    const dataFromLocalStorage = JSON.parse(localStorage.getItem('bookMarkedItems'));
    if(dataFromLocalStorage){

        const isTheItemStoredBefore = dataFromLocalStorage.find( data => data.id === id);

        if(isTheItemStoredBefore){
            Swal.fire({
                title: 'Blog is already BookMarked!',
                text: "Do you want to add this blog one more time?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: 'rgb(124 58 237)',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, I want'
              }).then((result) => {
                if (result.isConfirmed) {
                    const newAddedData = [...dataFromLocalStorage, {id, title }];
                    localStorage.setItem('bookMarkedItems', JSON.stringify(newAddedData))
                  Swal.fire(
                    'Again BookMarked Done !',
                    'Good job, You BookMarked this blog one more time successfully',
                    'success'
                  )
                }
              })
        }
        
        else{
            const newAddedData = [...dataFromLocalStorage, {id, title }];
            localStorage.setItem('bookMarkedItems', JSON.stringify(newAddedData))
            Swal.fire(
                'Great job Dude!',
                'You BookMarked this blog!',
                'success'
            )
        }
    }

    else{
       const booMarkItem = {id, title};
       bookMarkedData.push(booMarkItem);
       localStorage.setItem('bookMarkedItems', JSON.stringify(bookMarkedData))
       Swal.fire(
        'Great job Dude!',
        'You BookMarked this blog!',
        'success'
      )
    }
}


export {addToCart};
