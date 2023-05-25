let container = document.getElementsByClassName('container')[0];
let foodorders = JSON.parse(localStorage.getItem('foodlist'));
let plus = document.getElementsByClassName('plus')[0];
let remove = document.getElementsByClassName('remove');
let submit = document.getElementsByClassName('submit')[0];
let foodname,foodprice,index;
function foodListUpdate(){
    for (let i = 0; i < foodorders.length; i++) {
        foodname = foodorders[i].Food;
        foodprice = foodorders[i].Price;
        foodImage = foodorders[i].Imagesrc;
        container.innerHTML += `<div class="foodPad">
        <img src="${foodImage}">
        <div class="foodDetail">
            <h2 class="foodName">${foodname}</h2>
            <div class="foodPrice">${foodprice}</div>
        </div>
        <button class="remove" id="${i}">Remove</button>
        </div>`
    }
    if(foodorders.length == 1){
        remove[0].style.display = 'none';
    }
}
foodListUpdate();
plus.addEventListener('click',()=>{
    window.history.back();
})
Array.from(remove).forEach((element)=>{
    element.addEventListener('click',(e)=>{
       index = parseInt(e.target.id);
       foodorders.splice(index,1);
       container.innerHTML = '';
       foodListUpdate();
    })
})
submit.addEventListener('click',()=>{
    if(confirm("Are Your Sure?")){
        localStorage.setItem('foodlist',JSON.stringify(foodorders));
        submit.style.cursor= 'no-drop';
        plus.style.cursor= 'no-drop';
    }
    else{
        container.innerHTML = '';
        foodListUpdate();
    }
})