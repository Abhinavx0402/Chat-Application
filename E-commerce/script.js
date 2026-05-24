// ==========================
// SHOPVERSE E-COMMERCE
// ==========================

// ==========================
// CART SYSTEM
// ==========================

let cartCount =
parseInt(
localStorage.getItem("cartCount")
) || 0;

const cartCounter =
document.getElementById(
"cartCount"
);

cartCounter.textContent =
cartCount;

const cartButtons =
document.querySelectorAll(
".add-cart"
);

cartButtons.forEach(button => {

    button.addEventListener(
    "click",
    () => {

        cartCount++;

        cartCounter.textContent =
        cartCount;

        localStorage.setItem(
        "cartCount",
        cartCount
        );

        showToast(
        "🛒 Product Added To Cart"
        );

    });

});

// ==========================
// PRODUCT SEARCH
// ==========================

const searchInput =
document.getElementById(
"searchInput"
);

searchInput.addEventListener(
"keyup",
searchProducts
);

function searchProducts(){

    const searchValue =
    searchInput.value
    .toLowerCase();

    const products =
    document.querySelectorAll(
    ".product-card"
    );

    products.forEach(product => {

        const productName =
        product.querySelector(
        ".product-name"
        )
        .textContent
        .toLowerCase();

        if(
        productName.includes(
        searchValue
        )
        ){

            product.style.display =
            "block";

        }
        else{

            product.style.display =
            "none";

        }

    });

}

// ==========================
// WISHLIST
// ==========================

const wishlistIcon =
document.getElementById(
"wishlistIcon"
);

wishlistIcon.addEventListener(
"click",
() => {

    wishlistIcon.classList
    .toggle("active-heart");

    if(
    wishlistIcon.classList
    .contains("active-heart")
    ){

        showToast(
        "❤️ Added To Wishlist"
        );

    }
    else{

        showToast(
        "💔 Removed From Wishlist"
        );

    }

});

// ==========================
// DARK MODE
// ==========================

const userIcon =
document.querySelector(
".fa-user"
);

if(
localStorage.getItem("theme")
=== "dark"
){

    document.body.classList
    .add("dark");

}

userIcon.addEventListener(
"click",
toggleDarkMode
);

function toggleDarkMode(){

    document.body.classList
    .toggle("dark");

    if(
    document.body.classList
    .contains("dark")
    ){

        localStorage.setItem(
        "theme",
        "dark"
        );

        showToast(
        "🌙 Dark Mode Enabled"
        );

    }
    else{

        localStorage.setItem(
        "theme",
        "light"
        );

        showToast(
        "☀️ Light Mode Enabled"
        );

    }

}

// ==========================
// FLASH SALE COUNTDOWN
// ==========================

const countdown =
document.getElementById(
"countdown"
);

let totalSeconds =
12 * 60 * 60;

setInterval(() => {

    const hours =
    Math.floor(
    totalSeconds / 3600
    );

    const minutes =
    Math.floor(
    (totalSeconds % 3600)
    / 60
    );

    const seconds =
    totalSeconds % 60;

    countdown.textContent =
    `Sale Ends In:
    ${hours}h
    ${minutes}m
    ${seconds}s`;

    if(totalSeconds > 0){

        totalSeconds--;

    }

},1000);

// ==========================
// NEWSLETTER
// ==========================

const subscribeBtn =
document.getElementById(
"subscribeBtn"
);

const emailInput =
document.getElementById(
"emailInput"
);

subscribeBtn.addEventListener(
"click",
subscribeUser
);

function subscribeUser(){

    const email =
    emailInput.value.trim();

    if(email === ""){

        alert(
        "Please Enter Email"
        );

        return;
    }

    if(
    !email.includes("@")
    ){

        alert(
        "Invalid Email Address"
        );

        return;
    }

    showToast(
    "✅ Successfully Subscribed"
    );

    emailInput.value = "";

}

// ==========================
// SHOP NOW BUTTON
// ==========================

const shopNowBtn =
document.querySelector(
".hero button"
);

shopNowBtn.addEventListener(
"click",
() => {

    document
    .getElementById(
    "products"
    )
    .scrollIntoView({
        behavior:"smooth"
    });

});

// ==========================
// TOAST NOTIFICATION
// ==========================

function showToast(message){

    const toast =
    document.createElement(
    "div"
    );

    toast.textContent =
    message;

    toast.style.position =
    "fixed";

    toast.style.bottom =
    "20px";

    toast.style.right =
    "20px";

    toast.style.background =
    "#2563eb";

    toast.style.color =
    "white";

    toast.style.padding =
    "15px 25px";

    toast.style.borderRadius =
    "10px";

    toast.style.boxShadow =
    "0 10px 30px rgba(0,0,0,.2)";

    toast.style.zIndex =
    "9999";

    toast.style.fontWeight =
    "600";

    document.body.appendChild(
    toast
    );

    setTimeout(() => {

        toast.remove();

    },2000);

}

// ==========================
// PAGE LOADED MESSAGE
// ==========================

window.addEventListener(
"load",
() => {

    console.log(
    "ShopVerse Loaded Successfully"
    );

});