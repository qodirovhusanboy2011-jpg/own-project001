const card = document.querySelector(".my-card");
const button = document.querySelector(".button1");
const inp1 = document.querySelector("#inp1");
const inp2 = document.querySelector("#inp2");
const inp3 = document.querySelector("#inp3");
var count = 0;

button.addEventListener("click", function(){ 
  if(inp1.value === "" || inp2.value === "" || inp3.value === "") {
    alert("Please cheak you informations❌");
    return;
  }
  if (inp1.value.length < 16 || inp1.value.length > 16) {
      alert("Invalid Card Number😑");
      return null;
    } 
    if(count >= 1){
      return null
    }
    count++;
     let text3 = document.createElement("h5");
    text3.style.color = "white";
    text3.innerHTML = "CVV: " + inp3.value;
    card.appendChild(text3);
    let text2 = document.createElement("h5");
    text2.style.color = "white";
    text2.innerHTML ="Expiry Date: " + inp2.value;
    card.appendChild(text2);

    let text1 = document.createElement("h5");  
    card.appendChild(text1);
    text1.style.color = "white";
    text1.innerHTML = "Card Number: " + inp1.value;
    
});
const box2 = document.querySelector(".box2");
function renderBox2() {
  const box2 = document.querySelector(".box2");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  box2.innerHTML = ""; // clear previous content

  cart.forEach(item => {
    const div = document.createElement("div");

    div.innerHTML = `
    <div class="div" style="display: flex;flex-direction: row;gap:10px;">
    <div class="row gap-3 gap-lg-0">
    <div class="col-12 col-lg-8  d-flex gap-2 p-0 flex-row align-items-center"><div class="img-div"><img src="${item.img}" style="width: 70px; height: 70px;border-radius:50%;" alt=""></div>
    <div class="product-div" style="display: flex;flex-direction: column;justify-content: center;align-items: flex-start;gap: 10px;">
        <div class="text-white fs-6">${item.product}</div>
        <div class="text-white fs-6">${item.price}$</div>
    </div></div>
    <div class="col-12 col-lg-4 d-flex align-items-center"><div class="calculator d-flex flex-row text-white align-items-center gap-2" style="display: flex;flex-direction: row;gap:10px;">
    <div class="minus" style="width: 30px; height: 30px; border: 1px solid white; display: flex; justify-content: center; align-items: center;">-</div>
    <div class="value" style="width:100px;height: 30px; border: 1px solid white; display: flex; justify-content: center; align-items: center;">1</div>
    <div class="plus" onclick="increaseValue()" style="width: 30px; height: 30px; border: 1px solid white; display: flex; justify-content: center; align-items: center;">+</div>
</div></div>
    </div>
    
    
</div>
    `;

    box2.appendChild(div);
  });
}

renderBox2();
    let totalprice = document.createElement("div");
    totalprice.style.color = "white";
    totalprice.style.fontSize = "18px";
    totalprice.innerHTML = "Total Price: " + 1000 + "$";
    box2.appendChild(totalprice);
    let pay = document.createElement("button");
    box2.appendChild(pay);
    pay.innerHTML = "Pay";
    pay.style.width = "100px";
    pay.style.height = "40px";
    pay.style.background = "linear-gradient(45deg, rgb(1, 1, 114), rgb(7, 7, 181), lightblue)";
    pay.style.color = "white";
    pay.style.border = "none";
    pay.style.borderRadius = "5px";
    pay.addEventListener("click", ()=>{
      
      alert("Paid successfully✅");
      localStorage.removeItem("cart");
      setTimeout(() => {
        document.location.href = "phone.html";
      }, 2000);
    });