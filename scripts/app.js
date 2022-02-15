// helping functions
function updateTotalCost () {
  const totalPrice = document.getElementById('total-price');
  const bestPrice = document.getElementById('best-price');
  const memoryPrice = document.getElementById('memory-price');
  const storagePrice = document.getElementById('storage-price');
  const deliveryPrice = document.getElementById('delivery-price');
  totalPrice.innerText = +memoryPrice.innerText + +storagePrice.innerText + +deliveryPrice.innerText + +bestPrice.innerText;
}

function updateProductCost (product, price) {
  const productCost = document.getElementById(`${product}-price`);
  const allproduct = document.getElementsByClassName(product);
  for (const product of allproduct) {
    if (product.classList.contains('selected')) product.classList.remove('selected');
  }
  productCost.innerText = price;
}


// event handlers

// memory
document.getElementById('ram-eight').addEventListener('click', function () {
  updateProductCost('memory', 0);
  this.classList.add('selected');
  updateTotalCost();
})

document.getElementById('ram-sixteen').addEventListener('click', function () {
  updateProductCost('memory', 150);
  this.classList.add('selected');
  updateTotalCost();
});

// storage
document.getElementById('ssd-256').addEventListener('click', function () {
  updateProductCost('storage', 0);
  this.classList.add('selected');
  updateTotalCost();
});

document.getElementById('ssd-512').addEventListener('click', function () {
  updateProductCost('storage', 300);
  this.classList.add('selected');
  updateTotalCost();
});


document.getElementById('ssd-1000').addEventListener('click', function () {
  updateProductCost('storage', 400);
  this.classList.add('selected');
  updateTotalCost();
});

// delivery
document.getElementById('free-delivery').addEventListener('click', function () {
  updateProductCost('delivery', 0);
  this.classList.add('selected');
  updateTotalCost();
});

document.getElementById('paid-delivery').addEventListener('click', function () {
  updateProductCost('delivery', 400);
  this.classList.add('selected');
  updateTotalCost();
});

// coupon
document.getElementById('btn-promo').addEventListener('click', function() {
  const promoInput = document.getElementById('promo-input');
  const totalPrice = document.getElementById('total-price');
  if (promoInput.value === 'Apple') {
     totalPrice.innerText = +totalPrice.innerText - ((+totalPrice.innerText * 20) / 100);
     promoInput.classList.add('d-none');
     this.classList.add('d-none');
     document.getElementById('promo-success-text').classList.remove('d-none');
     document.getElementById('promo-failed-text').classList.add('d-none');
     document.getElementById('promo-code').classList.add('d-none');
  }
  else {
    document.getElementById('promo-success-text').classList.add('d-none');
    document.getElementById('promo-failed-text').classList.remove('d-none');
    promoInput.value = '';
  }
})


