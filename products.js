let container = document.querySelector('#container');
let rawstorage = localStorage.getItem("product");
let info = JSON.parse(rawstorage);
let search = document.querySelector('#search');

let infoRendered = info.map(function(item) {

     const element = item;
     return element

})
infoRendered.forEach(item => {
     let product = document.createElement('div')
          product.innerHTML= `
          <div id="product">
               <h1 id="htmlProductName">${item.productName}</h1>
               <button type="button" class="btn btn-primary" id="htmlProductLength">${item.productLength}</button>
               <button type="button" class="btn btn-primary" id="htmlProductPrice">${item.productPrice}</button>
               <button type="button" class="btn btn-primary" id="htmlProductTotalPrice">${item.productPrice * item.productLength}</button>
               <button type="button" class="btn btn-danger" id="delete">حذف محصول</button>
          </div>`;
     container.appendChild(product);
});
let delte = document.querySelector('#delete');
delte.addEventListener('click',(e)=>{
     delte.parentElement.remove();
})