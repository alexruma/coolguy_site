//Image carousel auto

function imageChange(count){
    let images = document.getElementsByClassName("carousel-images");
    // Hide all images
    for (let i = 0; i < images.length; i ++){
        images[i].style.display = "none"
    }
    if (count >= images.length) count = 0;
    images[count].style.display = "block"
    setTimeout(function(){
        count++
        imageChange(count)
    
    }, 4000);
}

// Execute carousel control buttons
function manualImageChange(direction){
    let images = document.getElementsByClassName("carousel-images");
    let current;
    // Determine which image we're currently on.
    for (let i = 0; i < images.length; i ++){
        if (images[i].style.display != "none") current = i
    }
    // Left button
    if (direction == "L"){
        images[current].style.display = "none";
        if (current == 0)  images[images.length -1].style.display = "block";
        else images[current -1].style.display = "block";
    }
    // Right button
    else {
        images[current].style.display = "none";
        if (current == images.length -1) images[0].style.display = "block";
        else images[current + 1].style.display = "block";
    }

}  

 // Call imageChange
imageChange(0);

// Event listeners for image change buttons
document.getElementById("back-btn").addEventListener("click", function(){
    manualImageChange("L")
})
document.getElementById("next-btn").addEventListener("click", function(){
    manualImageChange("R")
})


let orderArr=[];
  let count=0;
let size;
let calorieObj={};
let sixInchObj={
    wheat:200,
    italian: 250,
    sourdough:250,
    chicken:210,
    turkey:215,
    roastBeef:230,
    italianTrio:245,
    provolone:75,
    cheddar:75,
    swiss:75,
    avocado:100,
    hotPepper:20,
    pesto:20,
   tomatoes:20,
  lettuce:20
    
  }
let twelveInchObj={
     wheat:400,
    italian: 500,
    sourdough:500,
    chicken:400,
    turkey:420,
    roastBeef:450,
    italianTrio:450,
    provolone:150,
    cheddar:150,
    swiss: 150,
     avocado:100,
    hotPepper:20,
    pesto:20,
      tomatoes:30,
  lettuce:30
  }
let priceObj={
  tukey: 1,
  chicken:1,
  italianTrio:1,
  roastBeef:1,
  cheddar:.50,
  provolone:.50,
  swiss:.50,
  avocado:1,
  hotPepper:.50,
  pesto:.75,
  tomatoes:0,
  lettuce:0
}
//Initiate new order.
function newOrder(){
  document.getElementById('headlines').style.display='none';
   document.getElementById('start-btn-div').style.display='none';
  count=0;
  size="";
  orderArr[count]={
    calories:0,
    breadSelected:'no',
    meats:{},
    cheeses:{},
    meatCount:0,
    cheeseCount:0,
    addtlPrice:0
                  };
  
   document.getElementById('size-select').style.display='flex';
  
}
//add new sandwich to order.
function addSandwich(){
 
  scroll(0,0);
  count++;
  orderArr[count]={
    calories:0,
    breadSelected:'no',
    meats:{},
    cheeses:{},
    meatCount:0,
    cheeseCount:0,
    addtlPrice:0
                  };
  document.getElementById('order-form').style.display='none';
  document.getElementById('select-six').checked = false;
   document.getElementById('select-twelve').checked = false;
  let meatDeselect=document.getElementsByClassName('meat-deselect-btn');
  for(let i=0; i< meatDeselect.length;i++){
    meatDeselect[i].style.display='none'
  };
  let breadDeselect=document.getElementsByClassName('bread-deselect-btn');
  for(let i=0; i< breadDeselect.length;i++){
    breadDeselect[i].style.display='none'
  };
    let cheeseDeselect=document.getElementsByClassName('cheese-deselect-btn');
  for(let i=0; i< cheeseDeselect.length;i++){
    cheeseDeselect[i].style.display='none'
  };
  let extraDeselect=document.getElementsByClassName('extra-deselect-btn');
  for(let i=0; i< extraDeselect.length;i++){
    extraDeselect[i].style.display='none'
  }
  let items=document.getElementsByClassName('item');
  console.log(items.length)
  for(let i=0; i<items.length; i++){
    
    items[i].style.border='none';
  }
  let breadselect=document.getElementsByClassName('bread-select-btn');
  for(let i=0; i< breadselect.length;i++){
    breadselect[i].style.display='inline-block'
  };
   let meatselect=document.getElementsByClassName('meat-select-btn');
  for(let i=0; i< meatselect.length;i++){
    meatselect[i].style.display='inline-block'
  };
  let cheeseselect=document.getElementsByClassName('cheese-select-btn');
  for(let i=0; i< cheeseselect.length;i++){
   cheeseselect[i].style.display='inline-block'
  };
    let extraselect=document.getElementsByClassName('extra-select-btn');
  for(let i=0; i< extraselect.length;i++){
   extraselect[i].style.display='inline-block'
  }
}
//selecting size of sandwich
function sizeSelect(size){
  
  if(size=='6in'){
    
    orderArr[count]['basePrice']=4.50;
   
  }
  if(size=='12in'){
    orderArr[count]['basePrice']=7.50;
  }
     document.getElementById('order-form').style.display='block';
   calorieFill(size);
};

function calorieFill(size){
// adds prices for extra items
 
 let priceSpans=document.getElementsByClassName('price-span');
   
  for(let i=0; i<priceSpans.length;i++){
    let val=priceSpans[i].getAttribute('data-value');
   console.log(val);
    console.log(priceObj[val])
    priceSpans[i].innerText="  Price: $"+priceObj[val].toFixed(2);
    
  }
  
  //assigns calories based on size of sub
  if(size=='6in'){
    calorieObj=sixInchObj;
   let calKeys=Object.keys(calorieObj);
    calKeys.forEach(val=>{
      let calId=val+"-cal";
document.getElementById(calId).innerText=" -Calories: "+calorieObj[val];
    });
  
  };
  if(size=='12in'){
    calorieObj=twelveInchObj;
     let calKeys=Object.keys(calorieObj);
    calKeys.forEach(val=>{
      let calId=val+"-cal";
document.getElementById(calId).innerText=" -Calories: "+calorieObj[val];
      });
    
  };
  
};
//bread select function
function breadSelect(value,id){
  orderArr[count][value]="yes";
   orderArr[count].breadSelected="yes";
  orderArr[count]['calories']+=calorieObj[value];
  let deselectValue=value+"-deselect";
  let divValue=document.getElementById("item-"+value);
  
  let breadSelectBtns=document.getElementsByClassName('bread-select-btn');
  for(let i=0; i<breadSelectBtns.length;i++){
    breadSelectBtns[i].style.display='none';
  };
  document.getElementById(deselectValue).style.display="inline-block";
  divValue.style.border="solid #3399ff"
}
//bread deselect function
function breadDeselect(value,id){
  orderArr[count][value]="no";
   orderArr[count].breadSelected="no";
  orderArr[count]['calories']-=calorieObj[value];
  document.getElementById(id).style.display='none';
  
  document.getElementById('item-'+value).style.borderStyle="none";
   
  let 
  breadSelectBtns=document.getElementsByClassName('bread-select-btn');
  
  for(let i=0; i<breadSelectBtns.length;i++){
    breadSelectBtns[i].style.display='inline-block';
  }
  console.log(orderArr[count])
};


//meat select
function meatSelect(value,id){
  
   orderArr[count]['meats'][value]="yes";
   orderArr[count].meatCount+=1;

  orderArr[count]['calories']+=calorieObj[value];
  if( orderArr[count].meatCount>1){
    orderArr[count].addtlPrice+=1;
  }
  
  let deselectValue=value+"-deselect";
  let divValue=document.getElementById("item-"+value);
  document.getElementById(id).style.display='none';
  
  document.getElementById(deselectValue).style.display="inline-block";
  divValue.style.border="solid #3399ff";

}
//meat deselect
function meatDeselect(value,id){
 
  let meatCount=orderArr[count].meatCount;
  if(meatCount>1){
    orderArr[count].addtlPrice-=1;
  };
  meatCount--;
  
  orderArr[count]['meats'][value]="no";
  orderArr[count]['calories']-=calorieObj[value];

  let divValue=document.getElementById("item-"+value);
  document.getElementById(id).style.display="none";
    
   document.getElementById(value+'-select').style.display="inline-block";
   
  divValue.style.border="none";
  
}
//cheese select
function cheeseSelect(value,id){
  
   orderArr[count]['cheeses'][value]="yes";
   orderArr[count].cheeseCount+=1;

  orderArr[count]['calories']+=calorieObj[value];
  if( orderArr[count].cheeseCount>1){
    orderArr[count].addtlPrice+=1;
  }
  
  let deselectValue=value+"-deselect";
  let divValue=document.getElementById("item-"+value);
  document.getElementById(id).style.display='none';
  
  document.getElementById(deselectValue).style.display="inline-block";
  divValue.style.border="solid #3399ff";

}
//cheese deselect
function cheeseDeselect(value,id){
 
  let cheeseCount=orderArr[count].cheeseCount;
  if(cheeseCount>1){
    orderArr[count].addtlPrice-=1;
  };
  cheeseCount--;
  
  orderArr[count]['cheeses'][value]="no";
  orderArr[count]['calories']-=calorieObj[value];

  let divValue=document.getElementById("item-"+value);
  document.getElementById(id).style.display="none";
    
   document.getElementById(value+'-select').style.display="inline-block";
   
  divValue.style.border="none";
  
}
//extra select
function extraSelect(value,id,i){
  console.log(value);
  console.log(id);
  console.log(i);
   orderArr[count][value]="yes";
    

  orderArr[count]['calories']+=calorieObj[value];
   
    orderArr[count].addtlPrice+=priceObj[value];
  
  
  let deselectValue=value+"-deselect";
  let divValue=document.getElementById("item-"+value);
  document.getElementById(id).style.display='none';
  
  document.getElementById(deselectValue).style.display="inline-block";
  divValue.style.border="solid #3399ff";

}
//extra de-select
function extraDeselect(value,id){
 
  
  
  orderArr[count][value]="no";
  orderArr[count]['calories']-=calorieObj[value];

  let divValue=document.getElementById("item-"+value);
  document.getElementById(id).style.display="none";
    
   document.getElementById(value+'-select').style.display="inline-block";
   
  divValue.style.border="none";
  
}
//finish order
function endOrder(){
  scroll(0,0);
  if(orderArr[count].breadSelected=="no"){
    alert('Please choose a bread')
     return;
  }
 let final=document.getElementById('final-popup');
  let endPrice=0;
  orderArr.forEach(val=>{
    endPrice+=val.basePrice+val.addtlPrice
  })
  document.getElementById('total').innerText="Total: $"+endPrice.toFixed(2);

   orderArr.forEach((val,ind)=>{
     let sandwich=document.createElement('div');
   
     let sandNumber=document.createElement('div');
     let truInd=ind+1;
     
     sandNumber.innerText="Sandwich "+truInd+":";
     
   sandwich.appendChild(sandNumber);
   
     let meatKeys=Object.keys(val.meats);
     for(let i=0; i<meatKeys.length;i++){
       let newDiv=document.createElement('div');
       if(val.meats[meatKeys[i]]=='yes'){
         newDiv.innerText=meatKeys[i];
         sandwich.appendChild(newDiv);
       }
          
       document.getElementById('final-popup').style.display='block'
     };
     
     let cheeseKeys=Object.keys(val.cheeses);
     for(let i=0; i<cheeseKeys.length;i++){
       let newCheeseDiv=document.createElement('div');
       if(val.cheeses[cheeseKeys[i]]=='yes'){
         newCheeseDiv.innerText=cheeseKeys[i];
         sandwich.appendChild(newCheeseDiv);
       }
     };
     
    let keys=Object.keys(val);
     for(let i=0; i<keys.length;i++){
       let newExDiv=document.createElement('div')
       if(val[keys[i]]=='yes'){
         newExDiv.innerText=keys[i];
         sandwich.appendChild(newExDiv);
       }
     }
    
     final.appendChild(sandwich);
  });
  console.log(orderArr)
}
//event listeners
let breadClass=document.getElementsByClassName('bread-select-btn');
let breadDeselectClass=document.getElementsByClassName('bread-deselect-btn');
document.getElementById('start-order').addEventListener('click', newOrder);

document.getElementById('test').addEventListener('click', test);
//size select listeners
document.getElementById('select-six').addEventListener('click', function(){
  sizeSelect('6in');
});
document.getElementById('select-twelve').addEventListener('click', function(){
  sizeSelect('12in');
  });
 //bread select btn click
for (var i = 0; i < breadClass.length; i++) {
  let breadSelected=breadClass[i];
   breadSelected.addEventListener('click',function(){
  breadSelect(breadSelected.value,breadSelected.id)}, false);
}
   //bread deselect btn click
for (var i = 0; i < breadDeselectClass.length; i++) {
  let breadDeselected=breadDeselectClass[i];
   breadDeselected.addEventListener('click',function(){
  breadDeselect(breadDeselected.value,breadDeselected.id)}, false);
}
//meat select btn click
let meatSelectClass=document.getElementsByClassName('meat-select-btn');
  for(let i=0; i<meatSelectClass.length;i++){
    let meatSelected=meatSelectClass[i];
     meatSelected.addEventListener('click',function(){
    
  meatSelect(meatSelected.value,meatSelected.id)}, false);
  };
//meat deselect btn click
let meatDeselectClass=document.getElementsByClassName('meat-deselect-btn');
  for(let i=0; i<meatDeselectClass.length;i++){
    let meatDeselected=meatDeselectClass[i];
     meatDeselected.addEventListener('click',function(){
    
  meatDeselect(meatDeselected.value,meatDeselected.id)}, false);
  };
//cheese select btn click
let cheeseSelectClass=document.getElementsByClassName('cheese-select-btn');
  for(let i=0; i<cheeseSelectClass.length;i++){
    let cheeseSelected=cheeseSelectClass[i];
     cheeseSelected.addEventListener('click',function(){
    
  cheeseSelect(cheeseSelected.value,cheeseSelected.id)}, false);
  };
//cheese deselect btn click
let cheeseDeselectClass=document.getElementsByClassName('cheese-deselect-btn');
  for(let i=0; i<cheeseDeselectClass.length;i++){
    let cheeseDeselected=cheeseDeselectClass[i];
     cheeseDeselected.addEventListener('click',function(){
    
  cheeseDeselect(cheeseDeselected.value,cheeseDeselected.id)}, false);
  };
//extra btn click
let extraSelectClass=document.getElementsByClassName('extra-select-btn');
  for(let i=0; i<extraSelectClass.length;i++){
    
    let extraSelected=extraSelectClass[i];
     extraSelected.addEventListener('click',function(){
  
  extraSelect(extraSelected.value,extraSelected.id)}, false);
  };
//extra-deselect click
let extraDeselectClass=document.getElementsByClassName('extra-deselect-btn');
  for(let i=0; i<extraDeselectClass.length;i++){
    let extraDeselected=extraDeselectClass[i];
     extraDeselected.addEventListener('click',function(){
    
  extraDeselect(extraDeselected.value,extraDeselected.id)}, false);
  };
//add item listener
document.getElementById('new-add').addEventListener('click',addItem);
document.getElementById('new-add-initial').addEventListener('click', function(){
  
  document.getElementById('add-item').style.display="block"
});
//end order listener
document.getElementById('end-order').addEventListener('click', endOrder);
//local storage load listener
addEventListener('load',loadSavedItems);
document.getElementById('new-add-initial').addEventListener('click', function(){
  
  document.getElementById('add-item').style.display="block"
});
//end event listeners
//reload listener function. This is used to load class based listeners so that items added via the new item add button are included.
function loadListeners(){

//extra btn click
 extraSelectClass=document.getElementsByClassName('extra-select-btn');
  for(let i=0; i<extraSelectClass.length;i++){
    extraSelected=extraSelectClass[i];
     extraSelected.addEventListener('click',function(){
      console.log(extraSelectClass)
  extraSelect(extraSelected.value,extraSelected.id,i)}, false);
  };
//extra-deselect click
extraDeselectClass=document.getElementsByClassName('extra-deselect-btn');
  for(let i=0; i<extraDeselectClass.length;i++){
     extraDeselected=extraDeselectClass[i];
     extraDeselected.addEventListener('click',function(){
    
  extraDeselect(extraDeselected.value,extraDeselected.id)}, false);
  };
  alert('ran')
}

//user add item
function addItem(){
  document.getElementById('add-item').style.display="none"
  document.getElementById('new-add-initial').style.display="inline-block"
  let newType=document.getElementById('new-type').value;
  
  let newPrice=document.getElementById('new-price').value;
  let newCal6=document.getElementById('new-calories6').value;
  let newCal12=document.getElementById('new-calories12').value;
  let newValue=document.getElementById('new-name').value;
  let newSelectedValue=newType+document.getElementById('new-type').innerText;
  let newItem=document.createElement('div');
  newItem.id="item-"+newValue;
  newItem.className='item';
  //add calories to cal object and price to price object
  sixInchObj[newValue]=newCal6;
  twelveInchObj[newValue]=newCal12;
  priceObj[newValue]=newPrice;
  //creates and appends to newItem div the select btn
  let newSelect=document.createElement('button');
  newSelect.className=newType+"-select-btn";
  newSelect.id=newValue+'-select';
  newSelect.value=newValue;
  newSelect.innerText="+"
  newItem.appendChild(newSelect);
  //creates the deselect btn and appends to the newItem div
    let newDeselect=document.createElement('button');
  newDeselect.className=newType+"-deselect-btn";
  
  newDeselect.id=newValue+'-deselect';
  newDeselect.value=newValue;
  newDeselect.innerText='x'
  newItem.appendChild(newDeselect);
  //creates and appends the calorie span
  
  let nameSpan=document.createElement('span');
  nameSpan.innerText=newValue;
  
  let calSpan=document.createElement('span');
  calSpan.id=newValue+'-cal'
  newItem.appendChild(nameSpan);
  newItem.appendChild(calSpan);
  
  //appends new item to appropriate location
  if(newType=='bread'){
    document.getElementById('bread-select').appendChild(newItem);
  };
  if(newType=='meat'){
    document.getElementById('meat-select').appendChild(newItem);
    alert('meat')
  };
  
  if(newType=='cheese'){
    document.getElementById('cheese-select').appendChild(newItem);
  };
  if(newSelectedValue=='Vegetable'){
    document.getElementById('veggie-select').appendChild(newItem);
  };
  if(newType=='extra' && newSelectedValue!='Vegetable'){
     document.getElementById('extra-select').appendChild(newItem);
    console.log(newItem)
  };
  
  
 //saves new item to local storage

  let savedItems=JSON.parse(localStorage.getItem('addedItems'));

  if(savedItems===null){
    savedItems=[];
  };
  let saveArr=[];
  
  let saveArrObj={};
 
  saveArrObj.save6=newCal6;
  saveArrObj.save12=newCal12;
  saveArrObj.price=newPrice;
  saveArrObj.type=newType;
  saveArrObj.value=newValue;
  saveArrObj.selectedValue=newSelectedValue;
  saveArr.push(saveArrObj);
  savedItems.push(saveArr);
  
  localStorage.setItem('addedItems',JSON.stringify(savedItems));
  

 
 
  console.log(saveArr[1]);
  console.log(saveArr[0]);
  
  
}

//outer function to add items from local storage. Loops through local storage array
function loadSavedItems(){
 
  let addedItems=JSON.parse(localStorage.getItem('addedItems'));
  addedItems.forEach(val=>{
    let valObj=val[0];
    addSavedItem(valObj);
  })
 
}

//inner function to add items from local storage
function addSavedItem(val){
   let newType=val.type;
  
  let newPrice=val.price;
  let newCal6=val.save6;
  let newCal12=val.save12;
  let newValue=val.value;
  let newSelectedValue=val.selectedValue;
  let newItem=document.createElement('div');
  newItem.id="item-"+newValue;
  newItem.className='item';
  //add calories to cal object and price to price object
  sixInchObj[newValue]=newCal6;
  twelveInchObj[newValue]=newCal12;
  priceObj[newValue]=newPrice;
  //creates and appends to newItem div the select btn
  let newSelect=document.createElement('button');
  newSelect.className=newType+"-select-btn";
  newSelect.id=newValue+'-select';
  newSelect.value=newValue;
  newSelect.innerText="+"
  newItem.appendChild(newSelect);
  //creates the deselect btn and appends to the newItem div
    let newDeselect=document.createElement('button');
  newDeselect.className=newType+"-deselect-btn";
  
  newDeselect.id=newValue+'-deselect';
  newDeselect.value=newValue;
  newDeselect.innerText='x'
  newItem.appendChild(newDeselect);
  //creates and appends the calorie span
  
  let nameSpan=document.createElement('span');
  nameSpan.innerText=newValue;
  
  let calSpan=document.createElement('span');
  calSpan.id=newValue+'-cal'
  newItem.appendChild(nameSpan);
  newItem.appendChild(calSpan);
  
  //appends new item to appropriate location
  if(newType=='bread'){
    document.getElementById('bread-select').appendChild(newItem);
  };
  if(newType=='meat'){
    document.getElementById('meat-select').appendChild(newItem);
    alert('meat')
  };
  
  if(newType=='cheese'){
    document.getElementById('cheese-select').appendChild(newItem);
  };
  if(newSelectedValue=='Vegetable'){
    document.getElementById('veggie-select').appendChild(newItem);
  };
  if(newType=='extra' && newSelectedValue!='Vegetable'){
     document.getElementById('extra-select').appendChild(newItem);
  }
}
  function test(){

let item=JSON.parse(localStorage.getItem('addedItems'));
     alert('test')
    
    console.log(item)
    console.log(caloriesObj.Bacon)
   
 
}

//localStorage stuff
