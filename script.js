var productController;

// Model classes

class Products {
    constructor(productName, priceOfTheProduct, productQuantityAvailable) {
        this.productName = productName;
        this.priceOfTheProduct = priceOfTheProduct;
        this.productQuantityAvailable = productQuantityAvailable;
    }
}

class Product extends Products {
    constructor(productName, priceOfTheProduct, productQuantityAvailable, productDescription) {
        super(productName, priceOfTheProduct, productQuantityAvailable);
        this.productDescription = productDescription;
    }
}

class ProductController {
    constructor() {
        this.txtProductName = document.getElementById('txtProductName');
        this.txtPriceOfTheProduct = document.getElementById('txtPriceOfTheProduct');
        this.txtProductQuantityAvailable = document.getElementById('txtProductQuantityAvailable');
        this.txtProductDescription = document.getElementById('txtProductDescription');
        this.tbBody = document.getElementById('tbBody');

        this.products = new Array();
    }

    addProduct() {
        let productName = this.txtProductName.value;
        let priceOfTheProduct = parseInt(this.txtPriceOfTheProduct.value);
        let productQuantityAvailable = parseInt(this.txtProductQuantityAvailable.value);
        let productDescription = this.txtProductDescription.value;

        let product = new Product(productName, priceOfTheProduct, productQuantityAvailable, productDescription);
        this.products.push(product);

        this.showProducts();

    }

    deleteProduct(i) {
        this.products.splice(i, 1);
        this.showProducts();
    }

    showProducts() {
        this.tbBody.innerHTML = '';
        
        for (let i in this.products) {
            let product = this.products[i];
            let tr = document.createElement('tr');

            let tdProductName = document.createElement('td');
            tdProductName.innerHTML = product.productName;

            let tdPriceOfTheProduct = document.createElement('td');
            tdPriceOfTheProduct.innerHTML = product.priceOfTheProduct;

            let tdProductQuantityAvailable = document.createElement('td');
            tdProductQuantityAvailable.innerHTML = product.productQuantityAvailable;

            let tdProductDescription = document.createElement('td');
            tdProductDescription.innerHTML = product.productDescription;

            let tdOption = document.createElement('td');
            let btnDelete = document.createElement('button');

            btnDelete.type = 'button';
            btnDelete.innerHTML = 'Delete';
            btnDelete.className = 'btn btn-primary';
            btnDelete.onclick = function() {
                productController.deleteProduct(i);
            }

            tdOption.appendChild(btnDelete);

            tr.appendChild(tdProductName);
            tr.appendChild(tdPriceOfTheProduct);
            tr.appendChild(tdProductQuantityAvailable);
            tr.appendChild(tdProductDescription);
            tr.appendChild(tdOption);
            

            this.tbBody.appendChild(tr);
        }
    }
}

window.onload = function() {
    productController = new ProductController();
}
