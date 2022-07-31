import { newElement, updateAddress } from "./functions";
import { deleteData, getSingleData } from "./serverFunctions";
import { MainSelectors } from "./selectors";

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
    const cardPhone = newElement("div", "phone", '', addressEntry.phone);
    const cardAddress = newElement("div", "address", '', addressEntry.email);
  
    return newElement("div", "cardMid", '', "", cardPhone, cardAddress);
};
const cardBot = function (addressEntry, uniqueID) {
    const cardUpdate = newElement("button", "update", '', "Update");

    cardUpdate.addEventListener("click", () => {
     (async function populateForm() {
      const form = grabForm();
      const serverObject = await getSingleData(cardUpdate.parentElement.parentElement.id);

      const objectValues = Object.keys(await serverObject).map((value) => {
        return serverObject[value];
      });
      for (let x = 0; x < form.length; x++){
        form[x].value = objectValues[x];
      }
      })();

      openNewForm();
      MainSelectors.submit.textContent = 'Update';
      MainSelectors.submit.classList = (`${cardUpdate.parentElement.parentElement.id}`);
      
    });
  
    const cardDelete = newElement("button", "delete", '', "Delete");
    cardDelete.addEventListener("click", () => {
      deleteData(uniqueID);
      grabElement(uniqueID).remove();
      resetForm();
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


/*Return all of our Form Nodes */
const grabForm = () => document.querySelectorAll('.formContainer > *');

//Clear Form Values
const resetForm = () => {
  const inputs = document.querySelectorAll(`.formContainer > input`);
  inputs.forEach(input => {
    input.value = '';
  })
};

//Simply toggle a CSS class that contains visibility rules.
const openNewForm = () => {
  document.querySelector('.formContainer').classList.add("formActive");
};

const closeForm = () => {
  document.querySelector('.formContainer').classList.remove("formActive");
}



/*Only to be embedded inside our Update Button's context.
  Grab the three container nodes */
const grabCardSections = (updateButton) => { 
  const id = updateButton.parentElement.parentElement.id;
  return document.querySelectorAll(`#${id} > div`);
}

/*I'm embedding my Database ID's in our container's CSS class, this function
is used to retrieve them for passing to our PUT and DELETE methods */
const grabElement = uniqueID => document.getElementById(uniqueID);

export { newAddressCard, grabElement, resetForm, openNewForm, closeForm };