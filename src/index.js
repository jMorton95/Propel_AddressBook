import AddressBook from "./data/address.json";
import { addressCard } from "./components/addressCard";
import GitHubImg from "./images/github.svg";
import style from "./styles/main.scss"

const MainSelectors = (() =>{

    const mainContainer = document.querySelector('.mainContainer');
    const gitLogo = document.querySelector('.gh');
    

    return { mainContainer, gitLogo };
})();

MainSelectors.gitLogo.src = GitHubImg;

AddressBook.forEach(address => {
    MainSelectors.mainContainer.appendChild(addressCard(address));
});

