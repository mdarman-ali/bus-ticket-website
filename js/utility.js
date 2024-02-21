function setInnerText(id,value) {
    document.getElementById(id).innerText = value;
}

function grandTotal(id,value){
        const grandTotal = document.getElementById('Grand-total').innerText;
        const convertGrandTotal = parseInt(grandTotal);
        const grandTotalValue = convertGrandTotal + parseInt(550);
        setInnerText("Grand-total",grandTotalValue);
}

// function handleKeyboardButtonPress(){
//     console.log("")
// }
// document.addEventListener('keyup',handleKeyboardButtonPress);
// function opacityElementById(elementId){
//     const element = document.getElementById(elementId);
//     element.ClassList.add('opacity-25');
// }
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.ClassList.remove('hidden');
}
// function hideElementById(elementId){
//     const element = document.getElementById(elementId);
//     element.ClassList.add('hidden');
// }