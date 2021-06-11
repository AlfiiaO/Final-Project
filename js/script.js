
document.getElementById('addressTypeSelect').addEventListener('change', (e) =>{
    let vl = document.getElementById('addressTypeSelect').value;
    if(vl == "Other") {
        document.getElementById('otherVariantBlock').style.display = 'block';
    } else {
        document.getElementById('otherVariantBlock').style.display = 'none';
    }
    console.log(vl);
});

// FORM VALIDATION
document.getElementById('confirmDeliveryInformation').addEventListener('click', (e)=> {
    let checkOrder = true;

    if (document.getElementById('name').value=="") {
        document.getElementById('name').style.border ="1px solid red";
        checkOrder = false;
    }else{
        document.getElementById('name').style.border ="1px solid #ced4da";
    }

    
    if (document.getElementById('lastname').value=="") {
        document.getElementById('lastname').style.border ="1px solid red";
        checkOrder = false;
    }else{
        document.getElementById('lastname').style.border ="1px solid #ced4da";
    }

    if (document.getElementById('userEmail').value=="") {
        document.getElementById('userEmail').style.border ="1px solid red";
        checkOrder = false;
    }else{

        if( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.getElementById('userEmail').value)){
            document.getElementById('userEmail').style.border ="1px solid #ced4da";
        }else{
            document.getElementById('userEmail').style.border ="1px solid red";
            checkOrder = false;    
        }
        
    }

    
    if (document.getElementById('phone').value=="") {
        document.getElementById('phone').style.border ="1px solid red";
        checkOrder = false;
    }else{

        if( /^\d{10}$/.test(document.getElementById('phone').value)){
            document.getElementById('phone').style.border ="1px solid #ced4da";
        }else{
            document.getElementById('phone').style.border ="1px solid red";
            checkOrder = false;    
        }
        
    }
    if (document.getElementById('city').value=="") {
        document.getElementById('city').style.border ="1px solid red";
        checkOrder = false;
    }else{
        document.getElementById('city').style.border ="1px solid #ced4da";
    }

    if (document.getElementById('state').value=="") {
        document.getElementById('state').style.border ="1px solid red";
        checkOrder = false;
    }else{
        document.getElementById('state').style.border ="1px solid #ced4da";
    }


     
    if (document.getElementById('zipCode').value=="") {
        document.getElementById('zipCode').style.border ="1px solid red";
        checkOrder = false;
    }else{

        if(/^\d{5}$|^\d{5}-\d{4}$/.test(document.getElementById('zipCode').value)){
            document.getElementById('zipCode').style.border ="1px solid #ced4da";
        }else{
            document.getElementById('zipCode').style.border ="1px solid red";
            checkOrder = false;    
        }

     
        
    }

    if (document.getElementById('addressTypeSelect').value==" ") {
        document.getElementById('addressTypeSelect').style.border ="1px solid red";
        checkOrder = false;
    }else{
        document.getElementById('addressTypeSelect').style.border ="1px solid #ced4da";
    }
       
    
    if (document.getElementById('addressTypeSelect').value=="Other") {
        if (document.getElementById('variantvalue').value=="") {
            document.getElementById('variantvalue').style.border ="1px solid red";
            checkOrder = false;
        }else{
            document.getElementById('variantvalue').style.border ="1px solid #ced4da";
        }    
    }
      
    if (document.getElementById('streetAddress').value=="") {
        document.getElementById('streetAddress').style.border ="1px solid red";
        checkOrder = false;
    }else{
        document.getElementById('streetAddress').style.border ="1px solid #ced4da";
    }


    if (checkOrder)
        document.getElementById('orderInformationBlock').style.display = 'block';
    console.log('click');


    
});
// ORDER INFORMATION
document.getElementById('buildingPizzaButton').addEventListener('click', (e) =>{
    if (confirm("Did you finish building pizza?"))
    document.getElementById('billingrInformationBlock').style.display = 'block';
    console.log('click');
});

document.getElementById('proceedToCheckout').addEventListener('click', (e) =>{
    document.getElementById('paymentInformationBlock').style.display = 'block';
    console.log('click');
});


 pizzaSizes = {
    "Hand Tossed": {
        "Small $9.99" : "9.99",
        "Medium $12.99" : "12.99",
        "Large $14.99" : "14.99"
    },
    "Thin Crust": {
        "Medium $11.99": "11.99",
        "Large $13.99" : "13.99"
        
    },
    "New York Style": {
        "Large $16.99": "16.99",
        "Extra Large $19.99": "19.99"
    },
    "Gluten Free": {
        "Small $10.99": "10.99"
    }


}

// for (var key in pizzaSizes)
// {
// //    console.log(item);
//     console.log(key);
//     vals = pizzaSizes[key];
//     for (var keys in vals){
//         console.log(keys +" " +vals[keys]);
//     }
//     // console.log(arr);
// }

//Building Pizza Part
console.log("radio clicks");
 document.getElementById('customRadioInline1').addEventListener('click', (e) =>{
     document.getElementById('productName').innerText = "Hand Tossed";
     document.getElementById('sizeOptionBlock').style.display = "block";
    variants = '<option value="0">Choose...</option>';
    vals = pizzaSizes["Hand Tossed"];
    console.log(vals);
    for(var keys in vals){

        variants+='<option value="'+vals[keys]+'">'+keys+'</option>'
    }
    document.getElementById('selectSize').innerHTML = variants;
    document.getElementById('selectCheese').disabled = false;
    document.getElementById('selectSause').disabled = false;
    document.getElementById('inlineCheckbox1').disabled = false;
    document.getElementById('inlineCheckbox2').disabled = false;
    document.getElementById('inlineCheckbox3').disabled = false;
    document.getElementById('inlineCheckbox4').disabled = false;
    document.getElementById('inlineCheckbox5').disabled = false;
    document.getElementById('inlineCheckbox6').disabled = false;
    document.getElementById('inlineCheckbox7').disabled = false;
    document.getElementById('inlineCheckbox8').disabled = false;
    document.getElementById('inlineCheckbox9').disabled = false;
    document.getElementById('inlineCheckbox10').disabled = false;
    document.getElementById('inlineCheckbox11').disabled = false;

 });

 document.getElementById('customRadioInline2').addEventListener('click', (e) =>{
    document.getElementById('productName').innerText = "Thin Crust";
    document.getElementById('sizeOptionBlock').style.display = "block";
    variants = '<option value="0">Choose...</option>';
    vals = pizzaSizes["Thin Crust"];
    console.log(vals);
    for(var keys in vals){

        variants+='<option value="'+vals[keys]+'">'+keys+'</option>'
    }
    document.getElementById('selectSize').innerHTML = variants;
    document.getElementById('selectCheese').disabled = false;
    document.getElementById('selectSause').disabled = false;
    document.getElementById('inlineCheckbox1').disabled = false;
    document.getElementById('inlineCheckbox2').disabled = false;
    document.getElementById('inlineCheckbox3').disabled = false;
    document.getElementById('inlineCheckbox4').disabled = false;
    document.getElementById('inlineCheckbox5').disabled = false;
    document.getElementById('inlineCheckbox6').disabled = false;
    document.getElementById('inlineCheckbox7').disabled = false;
    document.getElementById('inlineCheckbox8').disabled = false;
    document.getElementById('inlineCheckbox9').disabled = false;
    document.getElementById('inlineCheckbox10').disabled = false;
    document.getElementById('inlineCheckbox11').disabled = false;

   


});
document.getElementById('customRadioInline3').addEventListener('click', (e) =>{
    document.getElementById('productName').innerText = "New York Style";
    document.getElementById('sizeOptionBlock').style.display = "block";
    variants = '<option value="0">Choose...</option>';
    vals = pizzaSizes["New York Style"];
    console.log(vals);
    for(var keys in vals){

        variants+='<option value="'+vals[keys]+'">'+keys+'</option>'
    }
    document.getElementById('selectSize').innerHTML = variants;
    document.getElementById('selectCheese').disabled = false;
    document.getElementById('selectSause').disabled = false;
    document.getElementById('inlineCheckbox1').disabled = false;
    document.getElementById('inlineCheckbox2').disabled = false;
    document.getElementById('inlineCheckbox3').disabled = false;
    document.getElementById('inlineCheckbox4').disabled = false;
    document.getElementById('inlineCheckbox5').disabled = false;
    document.getElementById('inlineCheckbox6').disabled = false;
    document.getElementById('inlineCheckbox7').disabled = false;
    document.getElementById('inlineCheckbox8').disabled = false;
    document.getElementById('inlineCheckbox9').disabled = false;
    document.getElementById('inlineCheckbox10').disabled = false;
    document.getElementById('inlineCheckbox11').disabled = false;


});

document.getElementById('customRadioInline4').addEventListener('click', (e) =>{
    document.getElementById('productName').innerText = "Gluten Free";
    document.getElementById('sizeOptionBlock').style.display = "block";
    variants = '<option value="0">Choose...</option>';
    vals = pizzaSizes["Gluten Free"];
    console.log(vals);
    for(var keys in vals){

        variants+='<option value="'+vals[keys]+'">'+keys+'</option>'
    }
    document.getElementById('selectSize').innerHTML = variants;
    document.getElementById('selectCheese').disabled = false;
    document.getElementById('selectSause').disabled = false;
    document.getElementById('inlineCheckbox1').disabled = false;
    document.getElementById('inlineCheckbox2').disabled = false;
    document.getElementById('inlineCheckbox3').disabled = false;
    document.getElementById('inlineCheckbox4').disabled = false;
    document.getElementById('inlineCheckbox5').disabled = false;
    document.getElementById('inlineCheckbox6').disabled = false;
    document.getElementById('inlineCheckbox7').disabled = false;
    document.getElementById('inlineCheckbox8').disabled = false;
    document.getElementById('inlineCheckbox9').disabled = false;
    document.getElementById('inlineCheckbox10').disabled = false;
    document.getElementById('inlineCheckbox11').disabled = false;
    

  

});

document.getElementById('selectSize').addEventListener('change', (e)=> {
    document.getElementById('productPrice').innerText = document.getElementById('selectSize').value;
    totalPrice();
});

document.getElementById('selectCheese').addEventListener('change', (e)=> {
    document.getElementById('cheesePrice').innerText = document.getElementById('selectCheese').value;
    totalPrice();
});

document.getElementById('selectSause').addEventListener('change', (e)=> {
    document.getElementById('saucePrice').innerText = document.getElementById('selectSause').value;
    totalPrice();
   
});


document.getElementById('inlineCheckbox1').addEventListener('change',toppingcount);
document.getElementById('inlineCheckbox2').addEventListener('change',toppingcount);
document.getElementById('inlineCheckbox3').addEventListener('change',toppingcount);
document.getElementById('inlineCheckbox4').addEventListener('change',toppingcount);
document.getElementById('inlineCheckbox5').addEventListener('change',toppingcount);
document.getElementById('inlineCheckbox6').addEventListener('change',toppingcount);
document.getElementById('inlineCheckbox7').addEventListener('change',toppingcount);
document.getElementById('inlineCheckbox8').addEventListener('change',toppingcount);
document.getElementById('inlineCheckbox9').addEventListener('change',toppingcount);
document.getElementById('inlineCheckbox10').addEventListener('change',toppingcount);
document.getElementById('inlineCheckbox11').addEventListener('change',toppingcount);
   

function totalPrice () {
    let dough = parseFloat(document.getElementById('productPrice').innerText);
    let cheese = parseFloat(document.getElementById('cheesePrice').innerText);
    let sauce = parseFloat(document.getElementById('saucePrice').innerText);
    let topping = parseFloat(document.getElementById('toppingPrice').innerText);
    let tp = dough + cheese + sauce + topping;
    document.getElementById('totalPrice').innerText = tp.toFixed(2);
}

function toppingcount(){
    let orderBlock = document.getElementById('orderInformationBlock');
    let toppingList = orderBlock.getElementsByClassName('form-check-input');
    console.log(toppingList);
    let n = 0;
    for (i=0;i<toppingList.length; i++ ){
        if (toppingList[i].checked) n++;
    }
    let cost=n*0.99;
    
    document.getElementById('toppingPrice').innerText = cost.toFixed(2);
    totalPrice();

}


document.getElementById('save-info').addEventListener('click', (e) =>{

    if(document.getElementById('save-info').checked ){
        //copy billing information 
        document.getElementById('billingname').value = document.getElementById('name').value;
        document.getElementById('billinglastname').value = document.getElementById('lastname').value;
        document.getElementById('billingphone').value = document.getElementById('phone').value;
        document.getElementById('billingemail').value = document.getElementById('userEmail').value;
        document.getElementById('billingcity').value = document.getElementById('city').value;
        document.getElementById('billingstate').value = document.getElementById('state').value;
        document.getElementById('billingzip').value = (document.getElementById('zipCode').value);
        document.getElementById('billinginputAddress').value = document.getElementById('streetAddress').value;
        
    }else{
        //clear billing information
        document.getElementById('billingname').value = '';
        document.getElementById('billinglastname').value = '';
        document.getElementById('billingphone').value = '';
        document.getElementById('billingemail').value = '';
        document.getElementById('billingcity').value = '';
        document.getElementById('billingstate').value = '';
        document.getElementById('billingzip').value = '';
        document.getElementById('billinginputAddress').value = '';



    }
})


document.getElementById('finishPayment').addEventListener('click', (e)=>{
    ccn = document.getElementById('cc-number').value;
    ccname = document.getElementById('cc-name').value;
    ccnumber = document.getElementById('cc-number').value;
    ccexp = document.getElementById('cc-expiration').value;
    cvv = document.getElementById('cc-cvv').value;
    ccncheck = true;

    if(document.getElementById('cc-number').value=="") {
        console.log("--1---");
        document.getElementById('cc-number').style.border ="1px solid red";
        ccncheck = false;
    }else if(
        (ccn[0] == '4'  && (ccn.length == 13 || ccn.length == 16))
        || (ccn[0] == '5' && (ccn[1] == '1' || ccn[1] == '2'  || ccn[1] == '3' || ccn[1] == '4'  || ccn[1] == '5')  && ccn.length == 16)

        ||ccn[0] == '3' && ccn[1] == '7'  && (ccn.length == 15)) 
        {
            console.log("--1---");
            //check prefix && length
         
        let checksum = 0;   
        for ( i=0; i<ccn.length; i++) {
            let symbol = ccn[i];
            let num = parseInt(symbol);
            if(i%2 == 0) {
                num*= 2;
            }
            if(num < 10) {
                checksum+= num;
            } else {
                checksum += num%10 +parseInt(num/10);
            }
            
        }

        console.log("---3---");
        console.log(checksum);
        if (checksum%10 != 0) {
            console.log("--4---");
            ccncheck = false;
            document.getElementById('cc-number').style.border  = '1px solid red';
        } else {
            console.log("--5---");
            document.getElementById('cc-number').style.border  = '1px solid #ced4da';
        }
        }

      

    


    else{
        console.log("--6---");
        ccncheck= false;
        document.getElementById('cc-number').style.border ="1px solid red";       

    }



    if( /^[a-zA-Z]+ [a-zA-Z]+$/.test(document.getElementById('cc-name').value)) {
        document.getElementById('cc-name').style.border ="1px solid #ced4da";
       
    } else{
        document.getElementById('cc-name').style.border ="1px solid red";
        ccncheck = false;
    }
    
    cce = ccexp.split("/");
console.log(cce);
    if( cce.length==2 && parseInt(cce[0])>=1 && parseInt(cce[0])<=12 && parseInt(cce[1])>0 ) {
        document.getElementById('cc-expiration').style.border ="1px solid #ced4da";
        
    } else{
        ccncheck = false;
        document.getElementById('cc-expiration').style.border ="1px solid red";
    }
    if(cvv.length!=3) {
        document.getElementById('cc-cvv').style.border ="1px solid red";
        ccncheck = false;
    } else{
        if(parseInt(document.getElementById('cc-cvv').value) == 0) {
            document.getElementById('cc-cvv').style.border ="1px solid red"
        } 
        else{
            document.getElementById('cc-cvv').style.border ="1px solid #ced4da";
        }
    }
if (ccncheck){

    // document.getElementById('deliveryform').
    // submit();
    
};
    return ccncheck;
});


