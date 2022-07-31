import { newAddressCard } from "./domFunctions";

const endPoint = 'http://localhost:3001/address_book';

/**Asynchronously gets the data we've made available on our GET endpoint 
 * on our backend, then parses and returns the response to JSON.*/
const getData = async () => {
    const response = await fetch(endPoint);
    const responseData = await response.json();
    return responseData;
};

/**Asychronously gets our data, maps the resulting object to an Array, then calls
 * a function to append the object values of each index to an Address Card on our
 * frontend.*/
const appendAddressCards = async (container) => {
    const data = await getData();
    const uniqueIDs = Object.keys(data);
    const dataToAppend = Object.keys(await data).map((object) => {
    
      return data[object];
    });

    const renderData = (() => {
        for (let x = 0; x < dataToAppend.length; x++){
            container.appendChild(newAddressCard(dataToAppend[x], uniqueIDs[x]))
        }
    })();
};

/**Asynchronously POSTS a submitted object to our database, which stores the new entry
 * in our database file and then returns the object we sent.*/
const postData = async (addressObject) => {
    const response = await fetch(endPoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(addressObject)
    });
    const confirmedData = await response.json();
    return confirmedData;
}

/**After a POST request, append a new AddressCard with the object we just added */
const sendNewAddress = async (container, addressObject) => {
    const newData = await postData(addressObject);
    const grabId = () =>  Object.keys(newData)[0];
    const grabObject = () => newData[Object.keys(newData)[0]];
    
    await container.append(newAddressCard(grabObject(), grabId()));
}
//Simply pass the ID of a database entry we want to delete from the server
const deleteData = async (addressID) => {
    const response = await fetch (`${endPoint}/${addressID}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    });
}
//NOT YET BUILT. (However should work in theory)
const updateData = async (addressID, addressEntry) => {
    const response = await fetch (`${endPoint}/${addressID}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: addressEntry
    });
}
  
export {  appendAddressCards, sendNewAddress, deleteData };