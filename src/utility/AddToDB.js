const getStoreBook =()=>{
    const storedBookDate = localStorage.getItem('readList');
    if(storedBookDate){
        const storeData = JSON.parse(storedBookDate);
        return storeData;
    }
    else{
        return []
    }
}


const addToStoredDB =(id)=>{
    const storeData = getStoreBook();
    if(storeData.includes(id)){
        alert('already exit')
    }
    else{
        storeData.push(id);
        const data = JSON.stringify(storeData);
        localStorage.setItem('readList',data)
    }
}
export {addToStoredDB}