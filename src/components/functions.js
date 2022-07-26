function newDiv(classListParam, textContentParam, ...children) {
    const element = document.createElement('div');
    element.classList = classListParam;
    element.textContent = textContentParam;
    element.append(...children);
    return element;
}

export { newDiv };