const container=document.querySelector('.container')
const seats=document.querySelectorAll('.row .seat:not(.occupied)')
const count=document.getElementById('count')
const total=document.getElementById('total')
const movieSelect=document.getElementById('movie')
let ticketPrice=+movieSelect.value
console.log(seats)


function updateSelectedcount(){
    const selectedSeats=document.querySelectorAll('.row .seat.selected')
    const selectedSeatsCounts=selectedSeats.length
    count.innerText=selectedSeatsCounts
    

    total.innerText=selectedSeatsCounts*ticketPrice
  
}
//Movie select event
movieSelect.addEventListener('change',e=>{
    ticketPrice=+e.target.value
    updateSelectedcount()
})


//Seat select event
container.addEventListener('click',function(e){
   if(e.target.classList.contains('seat')&&!e.target.classList.contains('occupied')){
       e.target.classList.toggle('selected')
   
   
   
   
   
   updateSelectedcount()

    }


})