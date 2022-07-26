import { newDiv } from "./functions";
//import AddressBook from "../data/address.json";

const cardTop = function(addressEntry) {
    const cardFirstName = newDiv('firstName', addressEntry.first_name);
    const cardLastName = newDiv('lastName', addressEntry.last_name);
    return newDiv('cardTop', '', cardFirstName, cardLastName);
}
const cardMid = function(addressEntry) {
    const cardPhone = newDiv('phone', addressEntry.phone);
    const cardAddress = newDiv('address', addressEntry.email);
    return newDiv('cardMid', '', cardPhone, cardAddress);
}

const addressCard = function(addressEntry) {
    const cardBot = newDiv('cardBot');
    return newDiv('cardContainer', '', cardTop(addressEntry), cardMid(addressEntry), cardBot );
}

export { addressCard };