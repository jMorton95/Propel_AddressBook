import { newAddressObject } from "./components/functions";
import { openNewForm, resetForm, closeForm} from "./components/domFunctions";
import { appendAddressCards, sendNewAddress, updateNewAddress } from "./components/serverFunctions";
import { MainSelectors } from "./components/selectors";
import GitHubImg from "./images/github.svg";
import MainStyle from "./styles/main.scss";
import FormStyle from "./styles/form.scss";


//Bind GitHub Logo to Img Source Attribute
MainSelectors.gitLogo.src = GitHubImg;

//TODO: Refactor each event as it's own function passed to our DOM object when it's created.
const AddButtonEvents = (function () {
    //Bind our Form Open button
    MainSelectors.openFormButton.addEventListener("click", () => {
      MainSelectors.submit.textContent = 'Confirm';
      resetForm();
      openNewForm()
    });
    
    MainSelectors.submit.addEventListener("click", () => {
    /*On Confirm "submission" create a new Address Object from form Inputs
            then create a new AddressCard with our new Object */
      if (MainSelectors.submit.textContent === 'Confirm'){
        sendNewAddress(MainSelectors.mainContainer, newAddressObject(MainSelectors.formInputs));
        closeForm();
        /**On Update "submission", update the existing Address Book entry and reflect changes in DOM*/
      } else if (MainSelectors.submit.textContent === 'Update') {
        updateNewAddress(MainSelectors.submit.classList, newAddressObject(MainSelectors.formInputs));
        closeForm();
      }
        
       
    });
})();

/*On page load, asynchronously append an Address card for each address returned from our Node Server Database */
appendAddressCards(MainSelectors.mainContainer);
