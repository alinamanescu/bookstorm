

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

function addToWishlist() {
var wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

if (!wishlist.includes(item)){
  wishlist.push(item);

  localStorage.setItem('wishlist',JSON.stringify(wishlist));
  renderWishlist();
} else {
  alert(item + " is already in the wishlist.");
}
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


function addToCart() {
  var cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  if (!cart.includes(item)){
    cart.push(item);
  
    localStorage.setItem('cart',JSON.stringify(wishlist));
    renderWishlist();
  } 
  }
  
  function renderCart() {
    var cartItemsElement = document.getElementById("cartItems");
    cartItemsElement.innerHTML = "";
  
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    cart.forEach(function(item) {
      var li = document.createElement("li");
      li.textContent = item;
      cartItemsElement.appendChild(li);
    });
  }
  
  renderCart();

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