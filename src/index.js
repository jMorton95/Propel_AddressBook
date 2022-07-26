import AddressBook from "./data/address.json";
import { addressCard } from "./components/addressCard";
import style from "./styles/main.scss"

const MainSelectors = (() =>{
    const mainContainer = document.querySelector('.mainContainer');

    return { mainContainer };
})();

AddressBook.forEach(address => {
    MainSelectors.mainContainer.appendChild(addressCard(address));
});

// MainSelectors.mainContainer.appendChild(addressCard(AddressBook[0]));


