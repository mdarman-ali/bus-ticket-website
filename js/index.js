const allBtn = document.getElementsByClassName("add-btn");
let count = 0;
let ticketPrice = 0;
let availableseat = 8;

for (const totalbtn of allBtn ){
    totalbtn.addEventListener("click", function (e){
        totalbtn.classList.add('bg-[#1dd100]');
        
        
        
        count = count + 1;
        setInnerText("total-seat",count);
        if(count>4){
            alert("No more than four tickets can be purchared at the time");
            return;
        }
        
            
            
        
        ticketPrice = parseInt(ticketPrice) + parseInt(550);
        setInnerText("total-price",ticketPrice);
        availableseat = parseInt(availableseat) - parseInt(1);
        


        const TicketNumber = e.target.parentNode.childNodes[0].innerText;
        setInnerText("Available-seat",availableseat);

        const divContainer = document.getElementById('ticket-details');
        const div = document.createElement('div');
        div.classList.add('flex','justify-between');
        const p = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        p.innerText = TicketNumber;
        p2.innerText = 'economy';
        p3.innerText = '550';
        div.appendChild(p);
        div.appendChild(p2);
        div.appendChild(p3);
        divContainer.appendChild(div);

        grandTotal("Grand-total",parseInt(550));

        
    });
}

// const couponNewFifteen = document.getElementById("new-15").innerText;
const applyButton = document.getElementById("apply-button");
applyButton.addEventListener("click",function(){
    
    
    
    const couponElement = document.getElementById("coupon-code").value;
    const couponCode = couponElement.split(" ").join("").toUpperCase();
    
    
    if(couponCode === "NEW15" && count === 4){
        const discountPrice = ticketPrice * 0.15;
        const grandTotalNewValue = ticketPrice - discountPrice;
        setInnerText("Grand-total",grandTotalNewValue);
        document.getElementById('apply-button').style.display = 'none';
        return;
        
        

    }
    
    else if(couponCode === "COUPLE20"){
        const discountPrice = ticketPrice * 0.2;
        const grandTotalNewValue = ticketPrice - discountPrice;
        setInnerText("Grand-total",grandTotalNewValue);
        document.getElementById('apply-button').style.display = 'none';
        return;
    }
    else{
        alert("Invalid Coupon Code OR you didn't buy four ticket");
    }
    
});




// function continueSellTicket(){

// }


// function play(){
//     hideElementById('')
//     // opacityElementById('ticket-interface-section');
//     // showElementById('modal-section');
//     // continueSellTicket();
// }