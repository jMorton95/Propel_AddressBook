import { newAddressCard } from "./components/addressCardDom";
import { toggleNewForm, submitNewAddress } from "./components/functions";
import GitHubImg from "./images/github.svg";
import MainStyle from "./styles/main.scss";
import FormStyle from "./styles/form.scss";

const MainSelectors = (() => {

    const mainContainer = document.querySelector('.mainContainer');
    const gitLogo = document.querySelector('.gh');
    const openFormButton = document.querySelector('.addAddress');
    const addForm = document.querySelector('form');
    const formInputs = document.querySelectorAll('.addressInput');
    const confirmNewAddress = document.querySelector('.confirm');
    
    return { mainContainer, gitLogo, openFormButton, addForm, confirmNewAddress, formInputs };

})();

//Bind GitHub Logo to Img Source Attribute
MainSelectors.gitLogo.src = GitHubImg;

const AddButtonEvents = (function () {
    //Bind our Form Toggle button
    MainSelectors.openFormButton.addEventListener("click", () =>
      toggleNewForm(MainSelectors.addForm)
    );
    
    /*On form "submission" create a new Address Object from form Inputs
        then create a new AddressCard with our new Object */
    MainSelectors.confirmNewAddress.addEventListener("click", () => {
      MainSelectors.mainContainer.appendChild(
        newAddressCard(submitNewAddress(MainSelectors.formInputs))
      );
      AddressBook.push(submitNewAddress(MainSelectors.formInputs));
      console.log(AddressBook);
  
      toggleNewForm(MainSelectors.addForm);
    });
})();


const getData =  async () => {
    const response = await fetch('http://localhost:3000/address_book');
    const responseData = await response.json();
    return responseData;
}

const appendAddressCards = async () => {
    const data = await getData();
    const dataToAppend = Object.keys(await data).map((value) => {
            return data[value];
    })
    dataToAppend.forEach(adrress => MainSelectors.mainContainer.appendChild(newAddressCard(adrress)))
};

appendAddressCards();




// async function getData() {
//     const response = await fetch('http://localhost:3000/address_book');
//     const responseData = await response.json();
//     return responseData;
    
// };

 // const arrayOfData = Promise.resolve(Object.keys(await responseData).map((value) => {
    //     return responseData[value];
    // }


//getData().forEach(adr => MainSelectors.mainContainer.appendChild(newAddressCard(adr)));




//postData(data);

