let productRecordForm = document.querySelector('#productRecordForm');
let productInfo = {};
let productList = [];

productRecordForm.addEventListener('submit', (e) => {
     productInfo = {
          productName: e.target.productName.value,
          productLength: e.target.productLength.value,
          productPrice: e.target.productPrice.value,
     }
     if(validation() == false){
          alert('متاسفانه یکی از فرم ها را پر نکرده اید');
     }else{
          saveProduct();    
     }
     e.preventDefault();
});

function validation() {
     if (productInfo.productName == ""){
          return false
     }else if (productInfo.productLength == ""){
          return false
     }else if (productInfo.productPrice == ""){
          return false
     }else {
          return true
     }
}

const saveProduct = () => {
     productList.push(productInfo);
     for (let i = 0; i <= productList.length; i++) {
          let info = JSON.stringify(productList);
          localStorage.setItem("product" , info);
     }
}