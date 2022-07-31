import { newAddressCard } from "./domFunctions";

const endPoint = 'http://localhost:3000/address_book';

/**Asynchronously gets the data we've made available on our GET endpoint 
 * on our backend, then parses and returns the response to JSON.*/
const getData = async () => {
    const response = await fetch(endPoint);
    return await response.json();
};

const getSingleData = async (uniqueID) => {
    const response = await fetch(`${endPoint}/${uniqueID}`);
    return await response.json(); 
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
    return await response.json();
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
        body: JSON.stringify(addressEntry)
    });
    return await response.json();
}

const updateNewAddress = async (addressID, addressEntry) => {
    const data = await updateData(addressID, addressEntry);
    const dataToAppend = Object.keys(await data).map((object) => {
        return data[object];
      });
    console.log(dataToAppend);
    const container = document.getElementById(`${addressID}`);
    console.log(container);
    const cardItems = container.querySelectorAll('div > .firstName, div > .lastName, div > .phone, div > .address');
    console.log(cardItems);

    for (let x = 0; x < cardItems.length; x++){
        cardItems[x].textContent = dataToAppend[x];
    }


}
  
export { appendAddressCards, sendNewAddress, deleteData, getSingleData, updateNewAddress };