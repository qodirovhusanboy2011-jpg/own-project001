let cartBox = document.querySelector("#cartBox");

// 3. GETITEM - Ma'lumotlarni o'qib olish
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
    if (cart.length === 0) {
        cartBox.innerHTML = "<h2>There is no orders😑</h2>";
        return;
    }

    let html = cart.map((item, index) => {
        return `
        <div class = "card" style="width:250px;height:400px;background-color:black;display:flex;flex-direction:column;">
        <div class="image-div" style="display:flex;flex:12;border:1px solid white;background-image: url('${item.img || "unnamed (5).jpg"}');background-position:center;background-size:cover;background-repeat:no-repeat;"></div>
        <div class="text-area" style="display:flex;flex:1;border:1px solid white; flex-direction:column;padding:10px;gap:5px;">
        <h3 style="color:white;font-size:18px;">${item.product}</h3>
        <h3 style="color:white;font-size:18px;">${item.price}$</h3>
        <h3 style="color:white;font-size:18px;">${item.category}</h3>
        <div><i class="bi bi-trash text-light" onclick="removeItem(${index})"></i></div>
        <div><a onclick="buyNow()" class="btn btn-primary">Buy Now</a></div>
        </div>
        </div>`;
    }).join("");
    cartBox.innerHTML = html;
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}
function clearCart() {
    localStorage.removeItem("cart");
    cart = [];
    renderCart();
    alert("Everything is removed!");
    window.location.href = "phone.html";
}

renderCart();

function buyNow() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
        let cart = JSON.parse(localStorage.getItem("cart")) || []
        function addCart(productName) {
            let tovar = products.find(e => e.product === productName);

            let isExist = cart.some(e => e.product === tovar.product)


            if (!isExist) {
                cart.push(tovar);
                localStorage.setItem("cart", JSON.stringify(cart))
                alert("delivered successfully✅")
                console.log("test2", isExist)

            } else {
                alert("We already delivered it!")
            }
        }
        window.location.href = "payment.html";
    } else {
        alert("Please log in to pay for your order!😐");
        window.location.href = "login.html";
    }
}