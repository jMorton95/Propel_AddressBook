import { newElement, updateAddress, deleteAddress } from "./functions";

/** Here we create 3 Sub-Components that will be appended inside of an Address Card Container.
    We're using my newElement function to handle creation of DOM elements.

    The addressEntry parameter is an individual Address Obect from JSON,
    passed down through our function calls in Index.JS */

const cardTop = function(addressEntry) {
    const cardFirstName = newElement('div', 'firstName', addressEntry.first_name);
    const cardLastName = newElement('div', 'lastName', addressEntry.last_name);

    return newElement('div', 'cardTop', '', cardFirstName, cardLastName);
}

const cardMid = function(addressEntry) {
    const cardPhone = newElement('text', 'phone', addressEntry.phone);
    const cardAddress = newElement('div', 'address', addressEntry.email);

    return newElement('div', 'cardMid', '', cardPhone, cardAddress);
}

const cardBot = function(addressEntry, updateEvent, deleteEvent) {
    const cardUpdate = newElement('button', 'update', 'Update');
    cardUpdate.addEventListener('click', () => { updateEvent(addressEntry) });

    const cardDelete = newElement('button', 'delete', 'Delete');
    cardDelete.addEventListener('click', () => { deleteEvent() });

    return newElement('div', 'cardBot', '', cardUpdate, cardDelete);
}

const addressCard = function(addressEntry) {
    return newElement('div', 'cardContainer', '',
     cardTop(addressEntry),
     cardMid(addressEntry),
     cardBot(addressEntry,
     updateAddress));
}

export { addressCard };