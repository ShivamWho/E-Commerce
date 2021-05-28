// Enable Toast

var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl)
})


function showToast(){
    toastList[0].show()
}


// Enable Tooltip

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


function goToProductDetails(){
    window.location.href = "product.html";
}

function goToProductDetails2(){
  window.location.href = "product2.html";
}

function goToProductDetails3(){
  window.location.href = "product3.html";
}

function goToProductDetails4(){
  window.location.href = "product4.html";
}

function goToProductDetails5(){
  window.location.href = "product5.html";
}

function goToProductDetails6(){
  window.location.href = "product6.html";
}

function goToProductDetails7(){
  window.location.href = "product7.html";
}

function goToProductDetails8(){
  window.location.href = "product8.html";
}

function goToProductDetails9(){
  window.location.href = "product9.html";
}

function goToProductDetails10(){
  window.location.href = "product10.html";
}

function goToProductDetails11(){
  window.location.href = "product11.html";
}

function goToProductDetails12(){
  window.location.href = "product12.html";
}


//Validation 

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


// Add to Cart

// Selectors

let addToCartBtns = document.getElementsByClassName("btn-dark");
let mainContainer = document.getElementsByClassName("mainContainer")[0];
let quantityFields = document.getElementsByClassName('num');
let removeBtns = document.getElementsByClassName('bi-x-circle');



// Accessing the add to cart buttons individually
for(let i = 0; i < addToCartBtns.length; i++){
  addToCartBtns[i].addEventListener('click',addToCart);
}

// This function adds items to cart

function addToCart(event){

  let btn = event.target;
  let btnParent = btn.parentElement.parentElement.parentElement;

  let itemName = btnParent.children[3].children[1].innerText;
  let itemPrice = btnParent.children[3].children[2].innerText;
  let itemImage = btnParent.children[2].src;

  let itemContainer = document.createElement('div');
  itemContainer.innerHTML = '<div class="cart-item p-3">'+
                            '<div class="d-flex flex-row">'+
                            '<img class="col-2 img-fluid" src="'+itemImage+'" alt="">'+
                            '<div class="col-6 p-2">'+
                            '<h5>'+itemName+'</h5>'+
                            '<p class="item-price">'+itemPrice+'</p>'+
                            '<h6 class="total-price">'+itemPrice+'</h6>'+
                            '</div>'+
                            '<div class="col-2 p-2">'+
                            'Quantity '+
                            '<input type="number" class="w-75 num" value="1">'+
                            '</div>'+
                            '<div class="col-2 d-flex justify-content-end close">'+
                            '<i class="bi bi-x-circle"></i>'+
                            '</div>'+
                            '</div>'+
                            '</div>';

  mainContainer.append(itemContainer);

  for(let i = 0; i < quantityFields.length; i++){
    quantityFields[i].addEventListener('click',updateTotal);
  }

  for (let i = 0; i < removeBtns.length; i++){
    removeBtns[i].addEventListener('click', removeItem)
  }

  grandTotal();

  
}


// This function updates the cart for number of items
function updateTotal(event){
  numberOfItems = event.target;
  numberOfItemsParent = numberOfItems.parentElement.parentElement;
  priceField = numberOfItemsParent.getElementsByClassName('item-price')[0].innerText.replace('$','');
  totalField = numberOfItemsParent.getElementsByClassName('total-price')[0];
  totalPrice = numberOfItems.value * priceField;
  totalField.innerText = '$' + totalPrice;

  if(isNaN(numberOfItems.value) || numberOfItems.value <=0){
    numberOfItems.value = 1;
  }
  grandTotal();

}

// This function do the grand total
function grandTotal(){
  let total = 0;
  let grandTotal1 = document.getElementsByClassName('grand-total')[0];
  let grandTotal2 = document.getElementsByClassName('grand-total')[1];
  let priceTotal = document.getElementsByClassName('total-price');
  for(let i = 0; i < priceTotal.length; i++){
    totalPriceContent = Number(priceTotal[i].innerText.replace('$',''));
    total += totalPriceContent;
  }
  grandTotal1.innerText = '$'+total;
  grandTotal2.innerText = '$'+total;
}


// This function remove items
function removeItem(event){
  removeBtn = event.target;
  removeBtnParent = removeBtn.parentElement.parentElement.parentElement;
  removeBtnParent.remove();
  grandTotal();

}