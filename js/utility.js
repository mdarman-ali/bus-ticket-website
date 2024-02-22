function setInnerText(id,value) {
    document.getElementById(id).innerText = value;
}

function grandTotal(id,value){
        const grandTotal = document.getElementById('Grand-total').innerText;
        const convertGrandTotal = parseInt(grandTotal);
        const grandTotalValue = convertGrandTotal + parseInt(550);
        setInnerText("Grand-total",grandTotalValue);
}
