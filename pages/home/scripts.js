const cart = JSON.parse(localStorage.getItem("carts")) || [];
console.log("cart: ", cart)
const products = [
    {
        id: 1,
        imgUrl: "https://salt.tikicdn.com/cache/750x750/media/catalog/product/tmp/d6/55/e6/35613cd30eb332f4822ba6e3c301e19c.png.webp",
        name: "Sách ABC",
        price: 820000
    }, {
        id: 2,
        imgUrl: "https://salt.tikicdn.com/cache/750x750/media/catalog/product/tmp/d6/55/e6/35613cd30eb332f4822ba6e3c301e19c.png.webp",
        name: "Điện Thoại Samsung Galaxy S26 FE (8/128GB)",
        price: 5000000
    }, {
        id: 3,
        imgUrl: "https://salt.tikicdn.com/cache/750x750/media/catalog/product/tmp/d6/55/e6/35613cd30eb332f4822ba6e3c301e19c.png.webp",
        name: "Chảo chống dính",
        price: 200000
    },
    {
        id: 4,
        imgUrl: "https://salt.tikicdn.com/cache/750x750/media/catalog/product/tmp/d6/55/e6/35613cd30eb332f4822ba6e3c301e19c.png.webp",
        name: "Chảo chống dính 123",
        price: 200000
    },
    {
        id: 5,
        imgUrl: "https://salt.tikicdn.com/cache/750x750/media/catalog/product/tmp/d6/55/e6/35613cd30eb332f4822ba6e3c301e19c.png.webp",
        name: "Chảo chống dính bla bla",
        price: 220000
    },
]

const listProductsDiv = document.getElementById("list-products");

products.forEach((item) => {
    const child = document.createElement('div');

    const buttonAddToCart = document.createElement('button');
    buttonAddToCart.addEventListener('click', () => {
        const isExistItemInTheCart = cart.findIndex((findItem) => {
            return item.id === findItem.id
        })
        if (isExistItemInTheCart === -1) {
            cart.push({
                id: item.id,
                quantity: 1
            })
        }
        else {
            cart[isExistItemInTheCart] = {
                id: cart[isExistItemInTheCart].id,
                quantity: cart[isExistItemInTheCart].quantity + 1
            }
        }

        localStorage.setItem("carts", JSON.stringify(cart));
    })
    buttonAddToCart.classList.add("button");
    buttonAddToCart.innerText = "Add to cart"

    child.innerHTML = `
        <figure class="image is-square">
            <img
            src="${item.imgUrl}"
            alt="${item.name}" />
        </figure>
        <p>${item.name}</p>
        <h4 class="has-text-weight-bold has-text-danger">${item.price} VND</h4>
    `

    child.classList.add("is-2")
    child.classList.add("column")
    child.classList.add("is-clickable")
    child.append(buttonAddToCart);

    listProductsDiv.appendChild(child)
})

let totalPriceOfCart = 0;
cart.forEach((item) => {
    const findItem = products.find((fItem) => {
        return item.id === fItem.id;
    })
    if (findItem) {
        totalPriceOfCart = totalPriceOfCart + findItem.price * item.quantity;
    } 
})


console.log("totalPriceOfCart: ", totalPriceOfCart)

// them vao gio hang

// cart
// []: danh sach mon hang






