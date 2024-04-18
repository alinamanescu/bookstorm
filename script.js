

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active');
}


window.onload = () => {

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }

}

let wishlistForm = document.querySelector('.wishlist');

document.querySelector('#wishlist-btn').onclick = () => {
   wishlistForm.classList.toggle('active');
}

document.querySelector('#close-wishlist-btn').onclick = () => {
   wishlistForm.classList.remove('active');
}


let cartForm = document.querySelector('.cartItems');

document.querySelector('#cart-btn').onclick = () => {
   cartForm.classList.toggle('active');
}

document.querySelector('#close-cart-btn').onclick = () => {
   cartForm.classList.remove('active');
}


// wishlist 

function addToWishlist(item) {
var wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

var index = wishlist.indexOf(item);
if (index === -1) {
  wishlist.push(item);
  alert(item + " has been added to wishlist!")
} else {
  wishlist.splice(index, 1);
  alert(item + " has been removed from wishlist!")
}

  localStorage.setItem('wishlist',JSON.stringify(wishlist));
  renderWishlist();
} 

function renderWishlist() {
  var wishlistItemsElement = document.getElementById("wishlistItems");
  wishlistItemsElement.innerHTML = "";

  var wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  wishlist.forEach(function(item) {
    var li = document.createElement("li");
    li.textContent = item;
    wishlistItemsElement.appendChild(li);
  });
}

renderWishlist();

// end of wishlist

// cart


function addToCart(item) {
  var cart = {};

  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"))
  }
  if (cart.hasOwnProperty(item)) {
    cart[item]++;
  } else {
    cart[item] = 1;
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartDisplay(cart);
  alert(item + " added to cart.Total pieces: " + cart[item]);
}

function updateCartDisplay(cart) {
  var cartItemsList = document.getElementById("cartItems");
  cartItemsList.innerHTML = "";

  for (var item in cart) {
    if (cart.hasOwnProperty(item)) {
      var listItem = document.createElement("li");
      listItem.textContent = item + " (Quantity: " + cart[item] + ")";


      // create quantity buttons 


      var increaseBtn = document.createElement("button");
      increaseBtn.textContent = "+";
      increaseBtn.onclick = function() {
        cart[item]++;
        updateCartDisplay(cart);
      };

      var decreaseBtn = document.createElement("button");
      decreaseBtn.textContent = "-";
      decreaseBtn.onclick = function() {
        if (cart[item] > 1) {
          cart[item]--;

          updateCartDisplay(cart)
        }
      };

      // create remove button

      var removeBtn = document.createElement("button");
      removeBtn.textContent = "remove";
      removeBtn.onclick = function(){
        delete cart[item];
        updateCartDisplay(cart);
      };

      listItem.appendChild(increaseBtn);
      listItem.appendChild(decreaseBtn);
      listItem.appendChild(removeBtn);

      increaseBtn.classList.add("cart-button");
      decreaseBtn.classList.add("cart-button");
      removeBtn.classList.add("remove-button");
      
      cartItemsList.appendChild(listItem);
    }
  }
}

// end of cart

var swiper = new Swiper(".books-slider", {
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

  var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 10,
    grapCursor:true,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 10,
    grapCursor:true,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });