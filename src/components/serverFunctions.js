import { newAddressCard } from "./addressCardDom";


/**Asynchronously gets the data we've made available on our GET endpoint 
 * on our backend, then parses and returns the response to JSON.*/
const getData = async () => {
    const response = await fetch('http://localhost:3000/address_book');
    const responseData = await response.json();
    return responseData;
};

/**Asychronously gets our data, maps the resulting object to an Array, then calls
 * a function to append the object values of each index to an Address Card on our
 * frontend.*/
const appendAddressCards = async (container) => {
    const data = await getData();
    const dataToAppend = Object.keys(await data).map((object) => {
      return data[object];
    });
    dataToAppend.forEach((address) =>
      container.appendChild(newAddressCard(address))
    );
};


const postData = async (addressObject) => {
    const response = await fetch('http://localhost:3000/address_book', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(addressObject)
    });
    const confirmedData = await response.json();
    return confirmedData;
}

const sendNewAddress = async (container, addressObject) => {
     const newData = await postData(addressObject);
    await container.append(newAddressCard(newData));
}
  

export { getData, appendAddressCards, postData, sendNewAddress };