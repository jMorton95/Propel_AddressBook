/**Here we take an bunch of logical parameters, with our last being an open ended parameter with a
 * spread operator for as many children elements as we wish to append, then return a our new element.
 */
function newElement(elementTag, classListParam, textContentParam, ...children) {
    const element = document.createElement(elementTag);
    element.classList = classListParam;
    element.textContent = textContentParam;
    element.append(...children);
    return element;
}

function updateAddress(addressEntry) {
        addressEntry.first_name = prompt(`Enter New Name for ${addressEntry.first_name}`);
        
        console.log(addressEntry.first_name);
}



function deleteAddress() {

}




export { newElement, updateAddress, deleteAddress };