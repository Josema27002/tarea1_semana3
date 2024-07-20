let selectedProducts = [];

function add() {
    let productSelect = document.getElementById("product");
    let productPrice = parseInt(productSelect.value);
    let quantity = parseInt(document.getElementById("quantity").value);

    if (!productPrice || !quantity) {
        alert("Por favor, seleccione un producto y una cantidad válidos.");
        return;
    }

    let product = {
        name: productSelect.options[productSelect.selectedIndex].text,
        price: productPrice,
        quantity: quantity,
        total: productPrice * quantity
    };
    selectedProducts.push(product);

    alert(`Producto agregado:\n${product.name}\nCantidad: ${product.quantity}\nPrecio total: ${product.total} yenes`);

    updateProductList();
}

function updateProductList() {
    let list = document.getElementById("product_list");
    list.innerHTML = "";

    selectedProducts.forEach(product => {
        let item = document.createElement("li");
        item.textContent = `${product.name} - Cantidad: ${product.quantity} - Precio total: ${product.total} yenes`;
        list.appendChild(item);
    });
}

function calc() {
    let totalPrice = selectedProducts.reduce((acc, product) => acc + product.total, 0);
    
    let shippingFee;
    if (totalPrice < 2000) {
        shippingFee = 500;
    } else if (totalPrice < 3000) {
        shippingFee = 250;
    } else {
        shippingFee = 0;
    }
    
    let finalPrice = totalPrice + shippingFee;

    let productDetails = selectedProducts.map(product => 
        `${product.name} - Cantidad: ${product.quantity} - Precio total: ${product.total} yenes`
    ).join('\n');

    alert(`Productos seleccionados:\n${productDetails}\n\nEl subtotal es de: ${totalPrice} yenes\nTarifa de envío: ${shippingFee} yenes\n\nPrecio final: ${finalPrice} yenes`);
}