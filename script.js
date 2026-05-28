const heroSwiper = new Swiper(".mySwiper", {

    loop: true,

    speed: 1000,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }

});


const products = [

    {
        brand: "Nike",
        title: "Running Shoes",
        price: "$12.9",
        oldPrice: "$19.9",
        image: "images/product1.png"
    },

    {
        brand: "Puma",
        title: "Sports Shoes",
        price: "$15.9",
        oldPrice: "$19.9",
        image: "images/product2.png"
    },

    {
        brand: "Adidas",
        title: "White Sneakers",
        price: "$18.9",
        oldPrice: "$25.9",
        image: "images/product3.png"
    },

    {
        brand: "HRX",
        title: "Training Shoes",
        price: "$15.9",
        oldPrice: "$19.9",
        image: "images/product4.png"
    }

];



const productsGrid = document.querySelector(".products-grid");




function displayProducts() {

    let clutter = "";

    products.forEach((product) => {

        clutter += `

        <div class="product-card">

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.title}"
                >

            </div>

            <div class="product-info">

                <p class="brand">
                    ${product.brand}
                </p>

                <h3 class="product-title">
                    ${product.title}
                </h3>

                <div class="price-box">

                    <span class="new-price">
                        ${product.price}
                    </span>

                    <span class="old-price">
                        ${product.oldPrice}
                    </span>

                </div>

            </div>

        </div>

        `;

    });

    productsGrid.innerHTML = clutter;

}


displayProducts();