import { grabElement } from "./domFunctions";
/**Here we take an bunch of logical parameters, with our last being an open ended parameter with a
 * spread operator for as many children elements as we wish to append, then return a our new element.
 */
//TODO: Possibly refactor parameters with certain defaults at the end, and children as an array instead of a spread operator.
const newElement = (elementTag, classListParam, idParam, textContentParam, ...children) => {
    const element = document.createElement(elementTag);
    element.classList = classListParam;
    element.id = idParam;
    element.textContent = textContentParam;
    element.append(...children);

    return element;
};

/**Produce a new Object for passing to Node endpoints or DOM functions, 
 * the parameters will be Form Inputs*/
const addressFactory = (firstName, lastName, phone, email) => { 
  return {
  "first_name" : firstName,
  "last_name": lastName,
  "phone": phone,
  "email": email
  }
};

/**Here we slide a nodelist as a parameter (our form container in this instance)
 * We return an Object instantiated from our Address class. Using the spread operator
 *  to take each index as constructor arguments, which we create immediately by 
 *  creating an Array from our Nodelist and mapping the input.VALUE attribute from
 *  each node.
 */
 function newAddressObject(formSelector) {
  return addressFactory(
    ...Array.from(formSelector).map((input) => input.value)
  );
};


export { newElement, newAddressObject };