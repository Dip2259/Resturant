let foodname,foodprice,tableno,imageSorce;
let orderNow = document.getElementsByClassName('orderNow')[0];
let submit = document.getElementsByClassName('submit')[0];
let tableNo = document.getElementsByClassName('tableNo')[0];
let tableNoinput = document.getElementsByClassName('tableNoinput')[0];
let orders = document.getElementsByClassName('orders')[0];
let foodName = document.querySelectorAll('.foodName'); 
let foodPrice = document.querySelectorAll('.foodPrice'); 
let foodImage = document.querySelectorAll('.foodImage'); 
let green_tick = document.querySelectorAll('.tick');
let index = 0;
let food_list = JSON.parse(localStorage.getItem('foodlist'));
if(food_list!=null){
    food_list.forEach((e)=>{
        for(let i= 0;i<3;i++){
            if(e.Food == foodName[i].innerHTML){
                document.getElementsByClassName('food')[i].classList.add('selected');
                green_tick[i].classList.add('view');
            }
        }
    })
}
else{
    food_list=[];
}
function make_obj(fn,fp,img){
    let obj = {Food:fn , Price:fp , Imagesrc:img};
    return obj;
}
Array.from(document.getElementsByClassName('food')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        e.target.classList.toggle('selected')
        index = parseInt(e.target.id);
        if(green_tick[index-1].classList.contains('view')){
            green_tick[index-1].classList.remove('view');
        }
        else{
            green_tick[index-1].classList.add('view');
        }
        foodname = foodName[index-1].innerHTML;
        foodprice = foodPrice[index-1].innerHTML;
        imageSorce = foodImage[index-1].src;
        console.log(foodname,foodprice,imageSorce);
        if(e.target.classList.contains('selected')){
            food_list.push(make_obj(foodname,foodprice,imageSorce));
        }
        else{
            for (let i = 0; i < food_list.length; i++) {
                if(food_list[i].Food==foodname){
                    food_list.splice(i,1);
                }
            }
        }
    })
})
orderNow.addEventListener('click',()=>{
    tableNo.style.display='flex';
})
submit.addEventListener('click',()=>{
    tableno = parseInt(tableNoinput.value);
    tableNo.style.display='none';
    orders.style.display='block';
    localStorage.setItem('tableno',tableno);
    localStorage.setItem('foodlist',JSON.stringify(food_list));
})