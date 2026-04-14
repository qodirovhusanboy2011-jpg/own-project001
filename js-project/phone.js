let products = [
    {
        product: "Redmi Note 11 Pro",
        price: 800,
        quantity: 5,
        category: "Smartphone",
        brand: "Xiaomi",
        color: "Black",
        releaseDate: "2022-03-01",
        rating: 4.5,
        warranty: 1,
        weight: "200g",
        img: "unnamed (5).jpg",
    },
    {
        product: "Samsung Galaxy S22",
        price: 999,
        quantity: 4,
        category: "Smartphone",
        brand: "Samsung",
        color: "Blue",
        releaseDate: "2022-02-01",
        rating: 4.8,
        warranty: 1,
        weight: "170g",
        img: "unnamed (6).jpg",
    },
    {
        product: "iPhone 14 Pro",
        price: 1200,
        quantity: 6,
        category: "Smartphone",
        brand: "Apple",
        color: "Silver",
        releaseDate: "2022-09-01",
        rating: 4.9,
        warranty: 1,
        weight: "204g",
        img: "unnamed (8).jpg",
    },
    {
        product: "OnePlus 10 Pro",
        price: 950,
        quantity: 3,
        category: "Smartphone",
        brand: "OnePlus",
        color: "Green",
        releaseDate: "2022-03-01",
        rating: 4.7,
        warranty: 1,
        weight: "200g",
        img: "unnamed (10).png",
    },
    {
        product: "Google Pixel 6",
        price: 800,
        quantity: 5,
        category: "Smartphone",
        brand: "Google",
        color: "Black",
        releaseDate: "2021-10-01",
        rating: 4.6,
        warranty: 1,
        weight: "207g",
        img: "unnamed (11).jpg",
    },
    {
        product: "MacBook Air M1",
        price: 1200,
        quantity: 4,
        category: "Laptop",
        brand: "Apple",
        color: "Silver",
        releaseDate: "2020-11-01",
        rating: 4.8,
        warranty: 1,
        weight: "1.29kg",
        img: "unnamed (12).jpg",
    },
    {
        product: "Dell XPS 13",
        price: 1400,
        quantity: 3,
        category: "Laptop",
        brand: "Dell",
        color: "Black",
        releaseDate: "2021-01-01",
        rating: 4.7,
        warranty: 1,
        weight: "1.2kg",
        img: "unnamed (13).jpg",
    },
    {
        product: "HP Spectre x360",
        price: 1300,
        quantity: 5,
        category: "Laptop",
        brand: "HP",
        color: "Blue",
        releaseDate: "2021-06-01",
        rating: 4.6,
        warranty: 1,
        weight: "1.3kg",
        img: "unnamed (14).jpg",
    },
    {
        product: "Lenovo ThinkPad X1",
        price: 1500,
        quantity: 2,
        category: "Laptop",
        color: "Silver",
        releaseDate: "2021-02-01",
        rating: 4.9,
        warranty: 1,
        weight: "1.1kg",
        img: "unnamed (15).jpg",
    },
    {
        product: "Asus ZenBook 14",
        price: 1100,
        quantity: 4,
        category: "Laptop",
        brand: "Asus",
        color: "Blue",
        releaseDate: "2020-12-01",
        rating: 4.7,
        warranty: 1,
        weight: "1.4kg",
        img: "unnamed (16).jpg",
    },
    {
        product: "Samsung Galaxy Tab S7",
        price: 600,
        quantity: 6,
        category: "Tablet",
        brand: "Samsung",
        color: "Black",
        releaseDate: "2020-08-05",
        rating: 4.6,
        warranty: 1,
        weight: "500g",
        img: "unnamed (17).jpg",
    },
    {
        product: "Apple iPad Pro 11",
        price: 800,
        quantity: 5,
        category: "Tablet",
        brand: "Apple",
        color: "Silver",
        releaseDate: "2021-04-01",
        rating: 4.9,
        warranty: 1,
        weight: "468g",
        img: "unnamed (18).jpg",
    },
    {
        product: "Microsoft Surface Pro 7",
        price: 900,
        quantity: 4,
        category: "Tablet",
        brand: "Microsoft",
        color: "Platinum",
        releaseDate: "2019-10-01",
        rating: 4.7,
        warranty: 1,
        weight: "775g",
        img: "unnamed (20).jpg",
    },
    {
        product: "Lenovo Tab P11 Pro",
        price: 500,
        quantity: 4,
        category: "Tablet",
        brand: "Lenovo",
        color: "Slate Grey",
        releaseDate: "2020-08-01",
        rating: 4.6,
        warranty: 1,
        weight: "485g",
        img: "unnamed (21).jpg",
    },
    {
        product: "Huawei MatePad Pro",
        price: 700,
        quantity: 3,
        category: "Tablet",
        brand: "Huawei",
        color: "Silver",
        releaseDate: "2020-10-01",
        rating: 4.8,
        warranty: 1,
        weight: "460g",
        img: "unnamed (22).jpg",
    },
    {
        product: "Amazon Fire HD 10",
        price: 150,
        quantity: 7,
        category: "Tablet",
        brand: "Amazon",
        color: "Black",
        releaseDate: "2021-05-01",
        rating: 4.2,
        warranty: 1,
        weight: "465g",
        img: "unnamed (23).jpg",
    },
    {
        product: "Samsung Galaxy Tab A7",
        price: 250,
        quantity: 6,
        category: "Tablet",
        brand: "Samsung",
        color: "Gold",
        releaseDate: "2020-09-01",
        rating: 4.5,
        warranty: 1,
        weight: "476g",
        img: "unnamed (24).jpg",
    },
    {
        product: "Apple iPad 9th Gen",
        price: 350,
        quantity: 6,
        category: "Tablet",
        brand: "Apple",
        color: "Space Gray",
        releaseDate: "2021-09-01",
        rating: 4.7,
        warranty: 1,
        weight: "487g",
        img: "unnamed (25).jpg",
    },
    {
        product: "Sony Xperia Z4 Tablet",
        price: 450,
        quantity: 3,
        category: "Tablet",
        brand: "Sony",
        color: "White",
        releaseDate: "2015-06-01",
        rating: 4.4,
        warranty: 1,
        weight: "393g",
        img: "unnamed (26).jpg",
    }
]
const container = document.querySelector(".container-fluid")
const blogs = document.querySelector(".blogs")
const main = document.querySelector(".main")
const main2 = document.querySelector(".main2")
const main3 = document.querySelector(".main3")
const main4 = document.querySelector(".main4")
const main5 = document.querySelector(".main5")
const forms = document.querySelector(".forms")
const darkmode = document.querySelector(".dark-mode")
const darkmode2 = document.querySelector(".dark-mode2")
const row = document.querySelector(".row")
const col1 = document.querySelector(".col1")
const col2 = document.querySelector(".col2")
const col3 = document.querySelector(".col3")
const col4 = document.querySelector(".col4")
const container3 = document.querySelector(".container3")
const log = document.querySelector(".log")
darkmode.addEventListener("click", ()=>{
     container.classList.toggle("activity1")
     main.classList.toggle("activity2")
     main2.classList.toggle("activity3")
     main3.classList.toggle("activity4")
     main4.classList.toggle("activity5")
     main5.classList.toggle("activity6")
     darkmode.classList.toggle("activity7")
     basket.classList.toggle("activity8")
     login.classList.toggle("activity9")
     log.classList.toggle("activity10")
     bottom.classList.toggle("activity1")
     container3.classList.toggle("activity1")
})
darkmode2.addEventListener("click", ()=>{
     container.classList.toggle("activity1")
     main.classList.toggle("activity2")
     main2.classList.toggle("activity3")
     main3.classList.toggle("activity4")
     main4.classList.toggle("activity5")
     main5.classList.toggle("activity6")
     darkmode.classList.toggle("activity7")
     basket.classList.toggle("activity8")
     login.classList.toggle("activity9")
     log.classList.toggle("activity10")
     bottom.classList.toggle("activity1")
     container3.classList.toggle("activity1")
})

const basket = document.querySelector(".basket")
const login = document.querySelector(".login")
const line = document.querySelector(".line")
const line2 = document.querySelector(".line2")
const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")
const btn3 = document.querySelector(".btn3")
const sortOrg = document.querySelector(".sortOrg")
const sortUp = document.querySelector(".sortUp")
const sortDown = document.querySelector(".sortDown")
const box = document.querySelector(".box")
const bottom = document.querySelector(".bottom")
const reaction = document.querySelector(".reaction")
let count = 0;
function write(par1){
    currentDisplayData = par1
    
    let natija = par1.map((e => {
        return `<div class = "card" style="background-color:black;display:flex;flex-direction:column;">
        <div class="image-div" style="display:flex;flex:1.5;border:1px solid white;background-image: url('${e.img || "unnamed (5).jpg"}');background-position:center;background-size:cover;background-repeat:no-repeat;"></div>
        <div class="text-area" style="display:flex;flex:1;border:1px solid white; flex-direction:column;padding:15px;gap:5px;">
        <h1 style="color:white;">${e.product}</h1>
        <h1 style="color:white;">${e.price}$</h1>
        <h1 style="color:white;">${e.category}</h1>
        <span style="background-color:${e.color};"></span>
        <div class="reactions-div" style="display:flex;flex-direction:column;gap:20px;justify-content:center;align-items:center;">
         <div class="reaction" style="gap:160px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;"><div style="gap:5px;font-size:20px;px;display:flex;"><i class="bi bi-hand-thumbs-up-fill" onclick="like2(this)" style="color:white;font-size:20px;"></i><i class="bi bi-heart-fill" onclick="like(this)" style="color:white;font-size:20px;position:relative;top:-300px;left:180px;"></i></div><div><i class="bi bi-eye-fill" style="font-size:20px;color:grey;" onclick="like2(this)"></i></div></div>
         <div class="order" onclick="addCart('${e.product}')" style="color:black;background:white;width:200px;height:30px;display:flex;justify-content:center;align-items:center;border-radius:10px;"><i class="bi bi-plus"></i> Add to order list.</div>
        </div>
        </div>
        </div>`
    })).join("")
    box.innerHTML = natija
}
function like(el) {
    if (el.style.color === "red") {
        el.style.color = "white";
    } else {
        el.style.color = "red";
    }
}
function like2(el) {
    if (el.style.color === "white") {
        el.style.color = "grey";
    } else {
        el.style.color = "white";
    }
}
let cart = JSON.parse(localStorage.getItem("cart")) || []
function addCart(productName) {
    let tovar = products.find(e => e.product === productName);

    let isExist = cart.some(e => e.product === tovar.product)


    if(!isExist) {
        cart.push(tovar);
        localStorage.setItem("cart", JSON.stringify(cart))
        alert("Ordered Successfully✅")
        console.log("test2", isExist)

    } else {
        alert("You have recently ordered it!")
    }
}
// 4 => Katagoriya boyicha filtrlab chiqarish
document.querySelector(".btn1").addEventListener("click", () => {
    let filtred = products.filter(e => e.category === "Smartphone")
    write(filtred)
})

document.querySelector(".btn2").addEventListener("click", () => {
    let filtred = products.filter(e => e.category === "Tablet")
    write(filtred)
})

document.querySelector(".btn3").addEventListener("click", () => {
    let filtred = products.filter(e => e.category === "Laptop")
    write(filtred)
})

// 5 => Saralash sorting

document.querySelector(".sortUp").addEventListener("click", () => {
    let sorted = [...currentDisplayData].sort((a, b) => a.price - b.price)
    write(sorted)
})

document.querySelector(".sortDown").addEventListener("click", () => {
    let sorted = [...currentDisplayData].sort((a, b) => b.price - a.price)
    write(sorted)
})

document.querySelector(".sortOrg").addEventListener("click", () => {
    write(products)
})

write(products)

const loginDisplayBtn = document.querySelector(".login");

function updateLoginStatus() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const savedName = localStorage.getItem("userName");

    if (isLoggedIn === "true" && savedName) {
        loginDisplayBtn.innerText = savedName;
        loginDisplayBtn.style.color = "Black";
    } else {
        loginDisplayBtn.innerText = "Login";
    }
}

updateLoginStatus();
const dropdownitem = document.querySelector(".dropdown-item");
loginDisplayBtn.addEventListener("click", () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    let logout = document.createElement("div");
     dropdownitem.appendChild(logout);
    logout.classList.add("logout");
    logout.innerText = "Log Out";
    if (isLoggedIn === "true") {
        let logoutConfirm = confirm("Do you want to Log Out?");
        if (logoutConfirm) {
            localStorage.clear();
            window.location.reload();
        }
    } else {
        window.location.href = "login.html";
    }
});
