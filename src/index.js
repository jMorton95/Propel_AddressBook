import { newAddressCard } from "./components/addressCardDom";
import { toggleNewForm, submitNewAddress } from "./components/functions";
import { appendAddressCards, postData, sendNewAddress } from "./components/serverFunctions";
import { Address } from "./components/addressClass";
import GitHubImg from "./images/github.svg";
import MainStyle from "./styles/main.scss";
import FormStyle from "./styles/form.scss";

const MainSelectors = (() => {
    const mainContainer = document.querySelector(".mainContainer");
    const gitLogo = document.querySelector(".gh");
    const openFormButton = document.querySelector(".addAddress");
    const addForm = document.querySelector("form");
    const formInputs = document.querySelectorAll(".addressInput");
    const confirmNewAddress = document.querySelector(".confirm");
  
    return {
      mainContainer,
      gitLogo,
      openFormButton,
      addForm,
      confirmNewAddress,
      formInputs,
    };
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
       // console.log(submitNewAddress(MainSelectors.formInputs));
        sendNewAddress(MainSelectors.mainContainer, submitNewAddress(MainSelectors.formInputs));
        // toggleNewForm(MainSelectors.addForm);
    });
})();

/*On page load, asynchronously append an Address card for each address returned from our Node Server Database */
appendAddressCards(MainSelectors.mainContainer);





// MainSelectors.mainContainer.appendChild(
//     newAddressCard(submitNewAddress(MainSelectors.formInputs))
//   );
//   AddressBook.push(submitNewAddress(MainSelectors.formInputs));
//   console.log(AddressBook);