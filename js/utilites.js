function getInputFieldValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}
function setElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

function addToCalculationEntry(areaType, area){
    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-4');
    p.classList.add('pl-5');
    p.innerHTML = `${count +1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-small btn-success">Convert to m </button>`;
    calculationEntry.appendChild(p);
}
