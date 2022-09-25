import Data from "./data.js";

const btn = document.querySelector('.target');
const main = document.querySelector('main');
const pop = document.querySelector('.popup');
const cross = document.querySelector('.cross'); 

const tamount = document.querySelector('.tamount'); //transaction amount editing
tamount.innerHTML = `
<i class="fa-solid fa-indian-rupee-sign"></i>${Data.transactionamount}
`;



// Date of transaction
const tdate = document.querySelector('.tdate');
const ansDate = getDate(Data.transactiondate);

tdate.innerHTML = `
    ${ansDate}
`;



// Sender details
const senderSec = document.querySelector('.sender-details');
const senderDetails = Data.senderDetails;
senderSec.innerHTML= `
<h1 class="font-bold text-xl tracking-wide">${senderDetails.sender}</h1>
<p class="text-slate-300 text-sm tracking-wide ">${senderDetails.bank}, IFSC ${senderDetails.IFSC}</p>
<p class="text-slate-300 text-sm tracking-wide ">A/c No. ${senderDetails.accountno}</p>
<p class="text-slate-300 text-sm tracking-wide ">${getDate(senderDetails.transactiondate)}</p>
`; 

// receiver details
const receiverSec = document.querySelector('.receiver-details');
const receiverDetails = Data.receiverDetails;
receiverSec.innerHTML = `
<h1 class="font-bold text-xl tracking-wide">${receiverDetails.receiver}</h1>
<p class="text-slate-300 text-sm tracking-wide">${receiverDetails.wallet}</p>
<p class="text-slate-300 text-sm tracking-wide">Ref No. ${receiverDetails.referenceno}</p>
<p class="text-slate-300 text-sm tracking-wide">${getDate(receiverDetails.transactiondate)}</p>
`;

function gethours(transactiondate){
    if(transactiondate[3] > 12){
        return transactiondate[3]-12;
    }else if(transactiondate[3] == 0){
        return 12;
    }
};
function getDate(str){
    const transactiondate = dateconverter(str);
    const months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
    let hours = gethours(transactiondate);
    hours = hours < 10 ? "0" + hours : hours;
    return `${transactiondate[2]} ${months[transactiondate[1]-1]} ${transactiondate[0]} ${hours}:${transactiondate[4]}${transactiondate[5]==true?"AM":"PM"}`;
}
//date = "2022-08-12 15:55"
function dateconverter(date){
    let year = Number.parseInt(date.slice(0,4));
    let month = Number.parseInt(date.slice(5,7));
    let Date = Number.parseInt(date.slice(8,10));
    let hours = Number.parseInt(date.slice(11,13));
    let minutes = Number.parseInt(date.slice(14));
    let AM = hours >= 12 ? false:true;
    return [year,month,Date,hours,minutes,AM]; 
}
// button click functions 
btn.addEventListener('click',()=>{
    pop.classList.add('active');
    main.style.filter = 'blur(10px)';
})

cross.addEventListener('click',()=>{
    pop.classList.remove('active');
    main.style.filter = 'blur(0px)';
})