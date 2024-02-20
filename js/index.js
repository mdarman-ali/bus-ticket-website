const allBtn = document.getElementsByClassName("add-btn");
let count = 0;
let ticketPrice = 0;
let availableseat = 8;

for (const totalbtn of allBtn ){
    totalbtn.addEventListener("click", function (e){
        totalbtn.classList.add('bg-[#1dd100]');
        count = count + 1;
        setInnerText("total-seat",count);
        ticketPrice = ticketPrice + parseInt(550);
        setInnerText("total-price",ticketPrice);
        availableseat = availableseat - 1;


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



// function continueSellTicket(){

// }


// function play(){
//     opacityElementById('ticket-interface-section');
//     showElementById('modal-section');
//     continueSellTicket();
// }