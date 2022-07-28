import AddressBook from "../database/address.json";
import { Address } from "./addressClass";
/**Here we take an bunch of logical parameters, with our last being an open ended parameter with a
 * spread operator for as many children elements as we wish to append, then return a our new element.
 */
function newElement(elementTag, classListParam, textContentParam, ...children) {
    const element = document.createElement(elementTag);
    element.classList = classListParam;
    element.textContent = textContentParam;
    element.append(...children);

    return element;
};

function updateAddress(addressEntry) {
    /*TODO: Configure this for realistic inputting.
      ALSO: Returns null if nothing is entered on prompt, validate this*/
    addressEntry.first_name = prompt(
      `Enter New Name for ${addressEntry.first_name}`
    );
    console.log(addressEntry.first_name);
};
  

function deleteAddress() {

};

//Simply toggle a CSS class that contains visibility rules.
function toggleNewForm(formSelector) {
    formSelector.classList.toggle('formActive');
};

/**Here we slide a nodelist as a parameter (our form container in this instance)
 * We return an Object instantiated from our Address class. Using the spread operator
 *  to take each index as constructor arguments, which we create immediately by 
 *  creating an Array from our Nodelist and mapping the input.VALUE attribute from
 *  each node.
 */

function submitNewAddress(formSelector) {
    const newAddress = new Address(
      ...Array.from(formSelector).map((input) => input.value)
    );
    
    return newAddress;
};
  



export { newElement, updateAddress, deleteAddress, toggleNewForm, submitNewAddress };