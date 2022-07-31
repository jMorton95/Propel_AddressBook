import { newElement, updateAddress, grabElement } from "./functions";
import { deleteData } from "./serverFunctions";

/** Here we create 3 Sub-Components that will be appended inside of an Address Card Container.
    We're using my newElement function to handle creation of DOM elements.

    The addressEntry parameter is an individual Address Obect from JSON,
    passed down through our function calls in Index.JS */
const cardTop = function (addressEntry) {
    const cardFirstName = newElement("div", "firstName", '', addressEntry.first_name);
    const cardLastName = newElement("div", "lastName", '', addressEntry.last_name);
    
    return newElement("div", "cardTop", "", "", cardFirstName, cardLastName);
};
const cardMid = function (addressEntry) {
    const cardPhone = newElement("text", "phone", '', addressEntry.phone);
    const cardAddress = newElement("div", "address", '', addressEntry.email);
  
    return newElement("div", "cardMid", '', "", cardPhone, cardAddress);
};
const cardBot = function (addressEntry, uniqueID) {
    const cardUpdate = newElement("button", "update", '', "Update");
    cardUpdate.addEventListener("click", () => {
      updateEvent(addressEntry);
    });
  
    const cardDelete = newElement("button", "delete", '', "Delete");
    cardDelete.addEventListener("click", () => {
      deleteData(uniqueID);
      grabElement(uniqueID).remove();
    });
  
    return newElement("div", "cardBot", "", "", cardUpdate, cardDelete);
};
  

/**In addressCard we're sliding our current Address JSON object.
 * Then Creating our new Address Card with our newElement function 
 * with parameters for: Tag Type, Class Name, textContent (empty), then our 3 child nodes.
 * Our cardBot takes additional Event functions as parameters.
 */
 const newAddressCard = function (addressEntry, uniqueID) {
    return newElement(
      'div',
      'cardContainer',
      `${uniqueID}`,
      '',
      cardTop(addressEntry),
      cardMid(addressEntry),
      cardBot(addressEntry, uniqueID)
    );
};
  
export { newAddressCard };