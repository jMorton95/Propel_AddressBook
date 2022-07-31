/*Create a Module Pattern of relevant selectors we need to manipulate/use as parameters*/
const MainSelectors = (() => {
    const mainContainer = document.querySelector(".mainContainer");
    const gitLogo = document.querySelector(".gh");
    const openFormButton = document.querySelector(".addAddress");
    const addForm = document.querySelector("form");
    const formInputs = document.querySelectorAll(".addressInput");
    const submit = document.querySelector(".confirm");
  
    return {mainContainer, gitLogo, openFormButton, addForm, submit, formInputs};
  })();

export { MainSelectors };