// Improved JS for better practices and bug fixes

document.addEventListener("DOMContentLoaded", function() {
    
    // --- OTP Modal Logic for Login Button ---
    const loginBtn = document.getElementById('loginBtn');
    const otpModal = document.getElementById('otpModal');
    const sendOtpBtn = document.getElementById('sendOtpBtn');
    const closeOtpModal = document.getElementById('closeOtpModal');
    const loginEmail = document.getElementById('loginEmail');

    if (loginBtn && otpModal) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            otpModal.style.display = 'flex';
        });
    }
    if (closeOtpModal && otpModal) {
        closeOtpModal.addEventListener('click', function() {
            otpModal.style.display = 'none';
            loginEmail.value = '';
        });
    }
    if (sendOtpBtn && loginEmail) {
        sendOtpBtn.addEventListener('click', function() {
            const email = loginEmail.value.trim();
            if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            // Simulate OTP generation and sending
            const otp = Math.floor(100000 + Math.random() * 900000);
            alert('OTP sent to ' + email + ': ' + otp + '\n(This is a simulation. In production, the OTP would be emailed.)');
            otpModal.style.display = 'none';
            loginEmail.value = '';
        });
    }

    // --- Quick Access Bar Login Button (OTP Modal) ---
    const quickLoginBtn = document.getElementById('quickLoginBtn');
    if (quickLoginBtn && otpModal) {
        quickLoginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            otpModal.style.display = 'flex';
        });
    }

    // Login button function
    const loginBtnOriginal = document.getElementById("button1");
    if (loginBtnOriginal) {
        loginBtnOriginal.addEventListener("click", function() {
            window.location.href = "switch.html";
        });
    }

    // Add to cart button function for first product
    const buyBtn = document.getElementById("button2");
    if (buyBtn) {
        buyBtn.addEventListener("click", function() {
            buyBtn.style.display = "none";
            let confirmation = document.getElementById("confirmation");
            if (!confirmation) {
                confirmation = document.createElement("div");
                confirmation.id = "confirmation";
                confirmation.textContent = "Added to cart!";
                confirmation.style.marginTop = "10px";
                buyBtn.parentNode.appendChild(confirmation);
            } else {
                confirmation.style.display = "block";
            }
            // Save cart to localStorage (add to existing quantity)
            const quantityInput = document.getElementById("Quantity");
            const quantity = parseInt(quantityInput.value) || 0;
            if (quantity > 0) {
                let cart = JSON.parse(localStorage.getItem('cart')) || {};
                cart.blackPen = { quantity: (cart.blackPen?.quantity || 0) + quantity };
                localStorage.setItem('cart', JSON.stringify(cart));
                setTimeout(updateCartCount, 100); // update after localStorage
            }
        });
    }

    // Add to cart button function for second product
    const buyBtn2 = document.getElementById("button3");
    if (buyBtn2) {
        buyBtn2.addEventListener("click", function() {
            buyBtn2.style.display = "none";
            let confirmation2 = document.getElementById("confirmation2");
            if (!confirmation2) {
                confirmation2 = document.createElement("div");
                confirmation2.id = "confirmation2";
                confirmation2.textContent = "Added to cart!";
                confirmation2.style.marginTop = "10px";
                buyBtn2.parentNode.appendChild(confirmation2);
            } else {
                confirmation2.style.display = "block";
            }
            // Save cart to localStorage (add to existing quantity)
            const quantityInput2 = document.getElementById("Quantity2");
            const quantity2 = parseInt(quantityInput2.value) || 0;
            if (quantity2 > 0) {
                let cart = JSON.parse(localStorage.getItem('cart')) || {};
                cart.bluePen = { quantity: (cart.bluePen?.quantity || 0) + quantity2 };
                localStorage.setItem('cart', JSON.stringify(cart));
                setTimeout(updateCartCount, 100);
            }
        });
    }

    // Add to cart button function for third product (Red Pen)
    const buyBtn3 = document.getElementById("button4");
    if (buyBtn3) {
        buyBtn3.addEventListener("click", function() {
            buyBtn3.style.display = "none";
            let confirmation3 = document.getElementById("confirmation3");
            if (!confirmation3) {
                confirmation3 = document.createElement("div");
                confirmation3.id = "confirmation3";
                confirmation3.textContent = "Added to cart!";
                confirmation3.style.marginTop = "10px";
                buyBtn3.parentNode.appendChild(confirmation3);
            } else {
                confirmation3.style.display = "block";
            }
            const quantityInput3 = document.getElementById("Quantity3");
            const quantity3 = parseInt(quantityInput3.value) || 0;
            let cart = JSON.parse(localStorage.getItem('cart')) || {};
            cart.redPen = { quantity: quantity3 };
            localStorage.setItem('cart', JSON.stringify(cart));
            setTimeout(updateCartCount, 100);
        });
    }

    // Add to cart button function for fourth product (Green Pen)
    const buyBtn4 = document.getElementById("button5");
    if (buyBtn4) {
        buyBtn4.addEventListener("click", function() {
            buyBtn4.style.display = "none";
            let confirmation4 = document.getElementById("confirmation4");
            if (!confirmation4) {
                confirmation4 = document.createElement("div");
                confirmation4.id = "confirmation4";
                confirmation4.textContent = "Added to cart!";
                confirmation4.style.marginTop = "10px";
                buyBtn4.parentNode.appendChild(confirmation4);
            } else {
                confirmation4.style.display = "block";
            }
            const quantityInput4 = document.getElementById("Quantity4");
            const quantity4 = parseInt(quantityInput4.value) || 0;
            let cart = JSON.parse(localStorage.getItem('cart')) || {};
            cart.greenPen = { quantity: quantity4 };
            localStorage.setItem('cart', JSON.stringify(cart));
            setTimeout(updateCartCount, 100);
        });
    }

    // Add to cart button function for Headphones
    const buyBtn5 = document.getElementById("button6");
    if (buyBtn5) {
        buyBtn5.addEventListener("click", function() {
            buyBtn5.style.display = "none";
            let confirmation5 = document.getElementById("confirmation5");
            if (!confirmation5) {
                confirmation5 = document.createElement("div");
                confirmation5.id = "confirmation5";
                confirmation5.textContent = "Added to cart!";
                confirmation5.style.marginTop = "10px";
                buyBtn5.parentNode.appendChild(confirmation5);
            } else {
                confirmation5.style.display = "block";
            }
            const quantityInput5 = document.getElementById("Quantity5");
            const quantity5 = parseInt(quantityInput5.value) || 0;
            let cart = JSON.parse(localStorage.getItem('cart')) || {};
            cart.headphones = { quantity: quantity5 };
            localStorage.setItem('cart', JSON.stringify(cart));
            setTimeout(updateCartCount, 100);
        });
    }

    // Add to cart button function for Mobile Phone
    const buyBtn6 = document.getElementById("button7");
    if (buyBtn6) {
        buyBtn6.addEventListener("click", function() {
            buyBtn6.style.display = "none";
            let confirmation6 = document.getElementById("confirmation6");
            if (!confirmation6) {
                confirmation6 = document.createElement("div");
                confirmation6.id = "confirmation6";
                confirmation6.textContent = "Added to cart!";
                confirmation6.style.marginTop = "10px";
                buyBtn6.parentNode.appendChild(confirmation6);
            } else {
                confirmation6.style.display = "block";
            }
            const quantityInput6 = document.getElementById("Quantity6");
            const quantity6 = parseInt(quantityInput6.value) || 0;
            let cart = JSON.parse(localStorage.getItem('cart')) || {};
            cart.mobilePhone = { quantity: quantity6 };
            localStorage.setItem('cart', JSON.stringify(cart));
            setTimeout(updateCartCount, 100);
        });
    }

    // Add to cart button function for Water Bottle
    const buyBtn7 = document.getElementById("button8");
    if (buyBtn7) {
        buyBtn7.addEventListener("click", function() {
            buyBtn7.style.display = "none";
            let confirmation7 = document.getElementById("confirmation7");
            if (!confirmation7) {
                confirmation7 = document.createElement("div");
                confirmation7.id = "confirmation7";
                confirmation7.textContent = "Added to cart!";
                confirmation7.style.marginTop = "10px";
                buyBtn7.parentNode.appendChild(confirmation7);
            } else {
                confirmation7.style.display = "block";
            }
            const quantityInput7 = document.getElementById("Quantity7");
            const quantity7 = parseInt(quantityInput7.value) || 0;
            let cart = JSON.parse(localStorage.getItem('cart')) || {};
            cart.waterBottle = { quantity: quantity7 };
            localStorage.setItem('cart', JSON.stringify(cart));
            setTimeout(updateCartCount, 100);
        });
    }

    // Add to cart button function for Backpack
    const buyBtn8 = document.getElementById("button9");
    if (buyBtn8) {
        buyBtn8.addEventListener("click", function() {
            buyBtn8.style.display = "none";
            let confirmation8 = document.getElementById("confirmation8");
            if (!confirmation8) {
                confirmation8 = document.createElement("div");
                confirmation8.id = "confirmation8";
                confirmation8.textContent = "Added to cart!";
                confirmation8.style.marginTop = "10px";
                buyBtn8.parentNode.appendChild(confirmation8);
            } else {
                confirmation8.style.display = "block";
            }
            const quantityInput8 = document.getElementById("Quantity8");
            const quantity8 = parseInt(quantityInput8.value) || 0;
            let cart = JSON.parse(localStorage.getItem('cart')) || {};
            cart.backpack = { quantity: quantity8 };
            localStorage.setItem('cart', JSON.stringify(cart));
            setTimeout(updateCartCount, 100);
        });
    }

    // Add to cart button function for Smartwatch
    const buyBtn9 = document.getElementById("button10");
    if (buyBtn9) {
        buyBtn9.addEventListener("click", function() {
            buyBtn9.style.display = "none";
            let confirmation9 = document.getElementById("confirmation9");
            if (!confirmation9) {
                confirmation9 = document.createElement("div");
                confirmation9.id = "confirmation9";
                confirmation9.textContent = "Added to cart!";
                confirmation9.style.marginTop = "10px";
                buyBtn9.parentNode.appendChild(confirmation9);
            } else {
                confirmation9.style.display = "block";
            }
            const quantityInput9 = document.getElementById("Quantity9");
            const quantity9 = parseInt(quantityInput9.value) || 0;
            let cart = JSON.parse(localStorage.getItem('cart')) || {};
            cart.smartwatch = { quantity: quantity9 };
            localStorage.setItem('cart', JSON.stringify(cart));
            setTimeout(updateCartCount, 100);
        });
    }

    // Add to cart button function for Laptop
    const buyBtn10 = document.getElementById("button11");
    if (buyBtn10) {
        buyBtn10.addEventListener("click", function() {
            buyBtn10.style.display = "none";
            let confirmation10 = document.getElementById("confirmation10");
            if (!confirmation10) {
                confirmation10 = document.createElement("div");
                confirmation10.id = "confirmation10";
                confirmation10.textContent = "Added to cart!";
                confirmation10.style.marginTop = "10px";
                buyBtn10.parentNode.appendChild(confirmation10);
            } else {
                confirmation10.style.display = "block";
            }
            const quantityInput10 = document.getElementById("Quantity10");
            const quantity10 = parseInt(quantityInput10.value) || 0;
            let cart = JSON.parse(localStorage.getItem('cart')) || {};
            cart.laptop = { quantity: quantity10 };
            localStorage.setItem('cart', JSON.stringify(cart));
            setTimeout(updateCartCount, 100);
        });
    }

    // Add to cart button function for Shoes
    const buyBtn11 = document.getElementById("button12");
    if (buyBtn11) {
        buyBtn11.addEventListener("click", function() {
            buyBtn11.style.display = "none";
            let confirmation11 = document.getElementById("confirmation11");
            if (!confirmation11) {
                confirmation11 = document.createElement("div");
                confirmation11.id = "confirmation11";
                confirmation11.textContent = "Added to cart!";
                confirmation11.style.marginTop = "10px";
                buyBtn11.parentNode.appendChild(confirmation11);
            } else {
                confirmation11.style.display = "block";
            }
            const quantityInput11 = document.getElementById("Quantity11");
            const quantity11 = parseInt(quantityInput11.value) || 0;
            let cart = JSON.parse(localStorage.getItem('cart')) || {};
            cart.shoes = { quantity: quantity11 };
            localStorage.setItem('cart', JSON.stringify(cart));
            setTimeout(updateCartCount, 100);
        });
    }

    // Add to cart button function for T-shirt
    const buyBtn12 = document.getElementById("button13");
    if (buyBtn12) {
        buyBtn12.addEventListener("click", function() {
            buyBtn12.style.display = "none";
            let confirmation12 = document.getElementById("confirmation12");
            if (!confirmation12) {
                confirmation12 = document.createElement("div");
                confirmation12.id = "confirmation12";
                confirmation12.textContent = "Added to cart!";
                confirmation12.style.marginTop = "10px";
                buyBtn12.parentNode.appendChild(confirmation12);
            } else {
                confirmation12.style.display = "block";
            }
            const quantityInput12 = document.getElementById("Quantity12");
            const quantity12 = parseInt(quantityInput12.value) || 0;
            let cart = JSON.parse(localStorage.getItem('cart')) || {};
            cart.tshirt = { quantity: quantity12 };
            localStorage.setItem('cart', JSON.stringify(cart));
            setTimeout(updateCartCount, 100);
        });
    }

    // Add to cart button function for Mixer Grinder
    const buyBtn13 = document.getElementById("button14");
    if (buyBtn13) {
        buyBtn13.addEventListener("click", function() {
            buyBtn13.style.display = "none";
            let confirmation13 = document.getElementById("confirmation13");
            if (!confirmation13) {
                confirmation13 = document.createElement("div");
                confirmation13.id = "confirmation13";
                confirmation13.textContent = "Added to cart!";
                confirmation13.style.marginTop = "10px";
                buyBtn13.parentNode.appendChild(confirmation13);
            } else {
                confirmation13.style.display = "block";
            }
            const quantityInput13 = document.getElementById("Quantity13");
            const quantity13 = parseInt(quantityInput13.value) || 0;
            let cart = JSON.parse(localStorage.getItem('cart')) || {};
            cart.mixerGrinder = { quantity: quantity13 };
            localStorage.setItem('cart', JSON.stringify(cart));
            setTimeout(updateCartCount, 100);
        });
    }

    // Add to cart button function for Refrigerator
    const buyBtn14 = document.getElementById("button15");
    if (buyBtn14) {
        buyBtn14.addEventListener("click", function() {
            buyBtn14.style.display = "none";
            let confirmation14 = document.getElementById("confirmation14");
            if (!confirmation14) {
                confirmation14 = document.createElement("div");
                confirmation14.id = "confirmation14";
                confirmation14.textContent = "Added to cart!";
                confirmation14.style.marginTop = "10px";
                buyBtn14.parentNode.appendChild(confirmation14);
            } else {
                confirmation14.style.display = "block";
            }
            const quantityInput14 = document.getElementById("Quantity14");
            const quantity14 = parseInt(quantityInput14.value) || 0;
            let cart = JSON.parse(localStorage.getItem('cart')) || {};
            cart.refrigerator = { quantity: quantity14 };
            localStorage.setItem('cart', JSON.stringify(cart));
            setTimeout(updateCartCount, 100);
        });
    }

    // Add to cart button function for Book
    const buyBtn15 = document.getElementById("button16");
    if (buyBtn15) {
        buyBtn15.addEventListener("click", function() {
            buyBtn15.style.display = "none";
            let confirmation15 = document.getElementById("confirmation15");
            if (!confirmation15) {
                confirmation15 = document.createElement("div");
                confirmation15.id = "confirmation15";
                confirmation15.textContent = "Added to cart!";
                confirmation15.style.marginTop = "10px";
                buyBtn15.parentNode.appendChild(confirmation15);
            } else {
                confirmation15.style.display = "block";
            }
            const quantityInput15 = document.getElementById("Quantity15");
            const quantity15 = parseInt(quantityInput15.value) || 0;
            let cart = JSON.parse(localStorage.getItem('cart')) || {};
            cart.book = { quantity: quantity15 };
            localStorage.setItem('cart', JSON.stringify(cart));
            setTimeout(updateCartCount, 100);
        });
    }

    // Add to cart button function for TV
    const buyBtn16 = document.getElementById("button17");
    if (buyBtn16) {
        buyBtn16.addEventListener("click", function() {
            buyBtn16.style.display = "none";
            let confirmation16 = document.getElementById("confirmation16");
            if (!confirmation16) {
                confirmation16 = document.createElement("div");
                confirmation16.id = "confirmation16";
                confirmation16.textContent = "Added to cart!";
                confirmation16.style.marginTop = "10px";
                buyBtn16.parentNode.appendChild(confirmation16);
            } else {
                confirmation16.style.display = "block";
            }
            const quantityInput16 = document.getElementById("Quantity16");
            const quantity16 = parseInt(quantityInput16.value) || 0;
            let cart = JSON.parse(localStorage.getItem('cart')) || {};
            cart.tv = { quantity: quantity16 };
            localStorage.setItem('cart', JSON.stringify(cart));
            setTimeout(updateCartCount, 100);
        });
    }

    // --- Universal Quantity Controls for All Products ---
    document.querySelectorAll('.products-grid').forEach(function(grid) {
        grid.addEventListener('click', function(e) {
            if (e.target.matches('button[id^="increaseQuantityBtn"], button[id^="decreaseQuantityBtn"]')) {
                const btn = e.target;
                const isIncrease = btn.id.startsWith('increaseQuantityBtn');
                // Find the related input in the same product card
                const productDiv = btn.closest('.product');
                if (!productDiv) return;
                const input = productDiv.querySelector('input[type="text"][id^="Quantity"]');
                if (!input) return;
                let val = parseInt(input.value) || 0;
                if (isIncrease) {
                    input.value = val + 1;
                } else {
                    input.value = val > 0 ? val - 1 : 0;
                }
                // Optionally, trigger input event for price update
                input.dispatchEvent(new Event('input', { bubbles: true }));
            }
        });
    });

    // Price calculation for first product
    const pricePerItem = 200;
    const priceSpan = document.getElementById("price");
    function updatePrice() {
        const qty = parseInt(quantityInput.value) || 0;
        priceSpan.textContent = pricePerItem * qty;
    }
    if (quantityInput && priceSpan) {
        quantityInput.addEventListener("input", updatePrice);
        updatePrice();
    }

    // Price calculation for second product
    const pricePerItem2 = 150;
    const priceSpan2 = document.getElementById("price2");
    function updatePrice2() {
        const qty2 = parseInt(quantityInput2.value) || 0;
        priceSpan2.textContent = pricePerItem2 * qty2;
    }
    if (quantityInput2 && priceSpan2) {
        quantityInput2.addEventListener("input", updatePrice2);
        updatePrice2();
    }

    // Price calculation for third product (Red Pen)
    const pricePerItem3 = 180;
    const priceSpan3 = document.getElementById("price3");
    function updatePrice3() {
        const qty3 = parseInt(quantityInput3.value) || 0;
        priceSpan3.textContent = pricePerItem3 * qty3;
    }
    if (quantityInput3 && priceSpan3) {
        quantityInput3.addEventListener("input", updatePrice3);
        updatePrice3();
    }

    // Price calculation for fourth product (Green Pen)
    const pricePerItem4 = 170;
    const priceSpan4 = document.getElementById("price4");
    function updatePrice4() {
        const qty4 = parseInt(quantityInput4.value) || 0;
        priceSpan4.textContent = pricePerItem4 * qty4;
    }
    if (quantityInput4 && priceSpan4) {
        quantityInput4.addEventListener("input", updatePrice4);
        updatePrice4();
    }

    // Price calculation for Headphones
    const pricePerItem5 = 1200;
    const priceSpan5 = document.getElementById("price5");
    function updatePrice5() {
        const qty5 = parseInt(quantityInput5.value) || 0;
        priceSpan5.textContent = pricePerItem5 * qty5;
    }
    if (quantityInput5 && priceSpan5) {
        quantityInput5.addEventListener("input", updatePrice5);
        updatePrice5();
    }

    // Price calculation for Mobile Phone
    const pricePerItem6 = 15999;
    const priceSpan6 = document.getElementById("price6");
    function updatePrice6() {
        const qty6 = parseInt(quantityInput6.value) || 0;
        priceSpan6.textContent = pricePerItem6 * qty6;
    }
    if (quantityInput6 && priceSpan6) {
        quantityInput6.addEventListener("input", updatePrice6);
        updatePrice6();
    }

    // Price calculation for Water Bottle
    const pricePerItem7 = 399;
    const priceSpan7 = document.getElementById("price7");
    function updatePrice7() {
        const qty7 = parseInt(quantityInput7.value) || 0;
        priceSpan7.textContent = pricePerItem7 * qty7;
    }
    if (quantityInput7 && priceSpan7) {
        quantityInput7.addEventListener("input", updatePrice7);
        updatePrice7();
    }

    // Price calculation for Backpack
    const pricePerItem8 = 799;
    const priceSpan8 = document.getElementById("price8");
    function updatePrice8() {
        const qty8 = parseInt(quantityInput8.value) || 0;
        priceSpan8.textContent = pricePerItem8 * qty8;
    }
    if (quantityInput8 && priceSpan8) {
        quantityInput8.addEventListener("input", updatePrice8);
        updatePrice8();
    }

    // --- Dynamic Cart Button & Summary ---
    const cartBtn = document.getElementById('cartBtn');
    const cartSummary = document.getElementById('cart-summary');
    const cartSummaryContent = document.getElementById('cart-summary-content');

    function renderCartSummary() {
        let cart = JSON.parse(localStorage.getItem('cart')) || {};
        let items = [];
        let total = 0;
        if (cart.blackPen && cart.blackPen.quantity) {
            items.push(`<div>Black Pen x ${cart.blackPen.quantity} <span style='float:right;'>Rs. ${cart.blackPen.quantity * 200}</span></div>`);
            total += cart.blackPen.quantity * 200;
        }
        if (cart.bluePen && cart.bluePen.quantity) {
            items.push(`<div>Blue Pen x ${cart.bluePen.quantity} <span style='float:right;'>Rs. ${cart.bluePen.quantity * 150}</span></div>`);
            total += cart.bluePen.quantity * 150;
        }
        if (cart.redPen && cart.redPen.quantity) {
            items.push(`<div>Red Pen x ${cart.redPen.quantity} <span style='float:right;'>Rs. ${cart.redPen.quantity * 180}</span></div>`);
            total += cart.redPen.quantity * 180;
        }
        if (cart.greenPen && cart.greenPen.quantity) {
            items.push(`<div>Green Pen x ${cart.greenPen.quantity} <span style='float:right;'>Rs. ${cart.greenPen.quantity * 170}</span></div>`);
            total += cart.greenPen.quantity * 170;
        }
        if (cart.headphones && cart.headphones.quantity) {
            items.push(`<div>Headphones x ${cart.headphones.quantity} <span style='float:right;'>Rs. ${cart.headphones.quantity * 1200}</span></div>`);
            total += cart.headphones.quantity * 1200;
        }
        if (cart.mobilePhone && cart.mobilePhone.quantity) {
            items.push(`<div>Mobile Phone x ${cart.mobilePhone.quantity} <span style='float:right;'>Rs. ${cart.mobilePhone.quantity * 15999}</span></div>`);
            total += cart.mobilePhone.quantity * 15999;
        }
        if (cart.waterBottle && cart.waterBottle.quantity) {
            items.push(`<div>Water Bottle x ${cart.waterBottle.quantity} <span style='float:right;'>Rs. ${cart.waterBottle.quantity * 399}</span></div>`);
            total += cart.waterBottle.quantity * 399;
        }
        if (cart.backpack && cart.backpack.quantity) {
            items.push(`<div>Backpack x ${cart.backpack.quantity} <span style='float:right;'>Rs. ${cart.backpack.quantity * 799}</span></div>`);
            total += cart.backpack.quantity * 799;
        }
        if (cart.smartwatch && cart.smartwatch.quantity) {
            items.push(`<div>Smartwatch x ${cart.smartwatch.quantity} <span style='float:right;'>Rs. ${cart.smartwatch.quantity * 2999}</span></div>`);
            total += cart.smartwatch.quantity * 2999;
        }
        if (cart.laptop && cart.laptop.quantity) {
            items.push(`<div>Laptop x ${cart.laptop.quantity} <span style='float:right;'>Rs. ${cart.laptop.quantity * 49999}</span></div>`);
            total += cart.laptop.quantity * 49999;
        }
        if (cart.shoes && cart.shoes.quantity) {
            items.push(`<div>Shoes x ${cart.shoes.quantity} <span style='float:right;'>Rs. ${cart.shoes.quantity * 1999}</span></div>`);
            total += cart.shoes.quantity * 1999;
        }
        if (cart.tshirt && cart.tshirt.quantity) {
            items.push(`<div>T-shirt x ${cart.tshirt.quantity} <span style='float:right;'>Rs. ${cart.tshirt.quantity * 799}</span></div>`);
            total += cart.tshirt.quantity * 799;
        }
        if (cart.mixerGrinder && cart.mixerGrinder.quantity) {
            items.push(`<div>Mixer Grinder x ${cart.mixerGrinder.quantity} <span style='float:right;'>Rs. ${cart.mixerGrinder.quantity * 2999}</span></div>`);
            total += cart.mixerGrinder.quantity * 2999;
        }
        if (cart.refrigerator && cart.refrigerator.quantity) {
            items.push(`<div>Refrigerator x ${cart.refrigerator.quantity} <span style='float:right;'>Rs. ${cart.refrigerator.quantity * 19999}</span></div>`);
            total += cart.refrigerator.quantity * 19999;
        }
        if (cart.book && cart.book.quantity) {
            items.push(`<div>Book x ${cart.book.quantity} <span style='float:right;'>Rs. ${cart.book.quantity * 499}</span></div>`);
            total += cart.book.quantity * 499;
        }
        if (cart.tv && cart.tv.quantity) {
            items.push(`<div>TV x ${cart.tv.quantity} <span style='float:right;'>Rs. ${cart.tv.quantity * 39999}</span></div>`);
            total += cart.tv.quantity * 39999;
        }
        if (items.length === 0) {
            cartSummaryContent.innerHTML = 'Your cart is empty.';
        } else {
            cartSummaryContent.innerHTML = items.join('') + `<hr><div style='font-weight:bold;'>Total: <span style='float:right;'>Rs. ${total}</span></div><a href='cart.html' style='display:block;margin-top:12px;text-align:center;background:#007bff;color:#fff;padding:8px 0;border-radius:5px;text-decoration:none;'>Go to Cart</a>`;
        }
    }

    if (cartBtn && cartSummary) {
        cartBtn.addEventListener('mouseenter', function() {
            renderCartSummary();
            cartSummary.style.display = 'block';
        });
        cartBtn.addEventListener('mouseleave', function() {
            cartSummary.style.display = 'none';
        });
        // Navigate to cart.html on click (except when clicking inside the summary)
        cartBtn.addEventListener('click', function(e) {
            if (e.target.closest('#cart-summary')) return;
            window.location.href = 'cart.html';
        });
        // Animate cart on add
        document.addEventListener('cart-updated', function() {
            cartBtn.classList.add('cart-animate');
            setTimeout(() => cartBtn.classList.remove('cart-animate'), 400);
        });
    }

    // Fire custom event on cart update
    function updateCartCount() {
        const cartCountSpan = document.getElementById('cart-count');
        let cart = JSON.parse(localStorage.getItem('cart')) || {};
        let total = 0;
        if (cart.blackPen && cart.blackPen.quantity) total += cart.blackPen.quantity;
        if (cart.bluePen && cart.bluePen.quantity) total += cart.bluePen.quantity;
        if (cart.redPen && cart.redPen.quantity) total += cart.redPen.quantity;
        if (cart.greenPen && cart.greenPen.quantity) total += cart.greenPen.quantity;
        if (cart.headphones && cart.headphones.quantity) total += cart.headphones.quantity;
        if (cart.mobilePhone && cart.mobilePhone.quantity) total += cart.mobilePhone.quantity;
        if (cart.waterBottle && cart.waterBottle.quantity) total += cart.waterBottle.quantity;
        if (cart.backpack && cart.backpack.quantity) total += cart.backpack.quantity;
        if (cart.smartwatch && cart.smartwatch.quantity) total += cart.smartwatch.quantity;
        if (cart.laptop && cart.laptop.quantity) total += cart.laptop.quantity;
        if (cart.shoes && cart.shoes.quantity) total += cart.shoes.quantity;
        if (cart.tshirt && cart.tshirt.quantity) total += cart.tshirt.quantity;
        if (cart.mixerGrinder && cart.mixerGrinder.quantity) total += cart.mixerGrinder.quantity;
        if (cart.refrigerator && cart.refrigerator.quantity) total += cart.refrigerator.quantity;
        if (cart.book && cart.book.quantity) total += cart.book.quantity;
        if (cart.tv && cart.tv.quantity) total += cart.tv.quantity;
        if (cartCountSpan) cartCountSpan.textContent = total;
        document.dispatchEvent(new Event('cart-updated'));
    }

    // --- Cart count badge update (Flipkart style) ---
    updateCartCount();

    // --- Flipkart-like Search Bar Functionality ---
    // Show/hide suggestion dropdown and filter products as you type
    const searchBars = document.querySelectorAll('.search-bar');
    const productElements = document.querySelectorAll('.products-grid .product');
    let suggestionBox;
    // Build product name list for suggestions
    const productNames = Array.from(productElements).map(product => product.querySelector('h2').textContent);
    function createSuggestionBox() {
        suggestionBox = document.createElement('div');
        suggestionBox.className = 'search-suggestions';
        suggestionBox.style.position = 'absolute';
        suggestionBox.style.background = '#fff';
        suggestionBox.style.border = '1px solid #ddd';
        suggestionBox.style.borderRadius = '6px';
        suggestionBox.style.boxShadow = '0 2px 8px rgba(0,0,0,0.12)';
        suggestionBox.style.zIndex = '2000';
        suggestionBox.style.width = '100%';
        suggestionBox.style.maxHeight = '220px';
        suggestionBox.style.overflowY = 'auto';
        suggestionBox.style.display = 'none';
        document.body.appendChild(suggestionBox);
    }
    function positionSuggestionBox(input) {
        const rect = input.getBoundingClientRect();
        suggestionBox.style.left = rect.left + window.scrollX + 'px';
        suggestionBox.style.top = rect.bottom + window.scrollY + 'px';
        suggestionBox.style.width = rect.width + 'px';
    }
    function showSuggestions(input, value) {
        if (!suggestionBox) createSuggestionBox();
        const query = value.trim().toLowerCase();
        if (!query) {
            suggestionBox.style.display = 'none';
            return;
        }
        const matches = productNames.filter(name => name.toLowerCase().includes(query));
        if (matches.length === 0) {
            suggestionBox.style.display = 'none';
            return;
        }
        suggestionBox.innerHTML = matches.map(name => `<div class="suggestion-item" style="padding:8px 14px;cursor:pointer;">${name}</div>`).join('');
        positionSuggestionBox(input);
        suggestionBox.style.display = 'block';
        // Click on suggestion
        Array.from(suggestionBox.children).forEach((item, idx) => {
            item.onclick = () => {
                input.value = matches[idx];
                filterProducts(matches[idx].toLowerCase());
                suggestionBox.style.display = 'none';
                // Sync value to all search bars
                searchBars.forEach(otherBar => {
                    if (otherBar !== input) otherBar.value = matches[idx];
                });
            };
        });
    }
    // Hide suggestions on click outside
    document.addEventListener('click', function(e) {
        if (suggestionBox && !suggestionBox.contains(e.target) && !Array.from(searchBars).includes(e.target)) {
            suggestionBox.style.display = 'none';
        }
    });
    // Attach search logic to all search bars
    searchBars.forEach(bar => {
        bar.addEventListener('input', function() {
            // Sync value to all search bars
            searchBars.forEach(otherBar => {
                if (otherBar !== bar) otherBar.value = bar.value;
            });
            filterProducts(bar.value.toLowerCase());
            showSuggestions(bar, bar.value);
        });
        bar.addEventListener('focus', function() {
            showSuggestions(bar, bar.value);
        });
    });

    // --- Three Dot Quick Access Menu as Login Popup on Right ---
    const threeDotBtn = document.getElementById('threeDotMenuBtn');
    const threeDotDropdown = document.getElementById('threeDotDropdown');
    if (threeDotBtn && threeDotDropdown) {
        threeDotBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            // Position the dropdown as a popup on the right side of the screen
            threeDotDropdown.style.display = (threeDotDropdown.style.display === 'block') ? 'none' : 'block';
            threeDotDropdown.style.position = 'fixed';
            threeDotDropdown.style.top = '60px';
            threeDotDropdown.style.right = '32px';
            threeDotDropdown.style.left = 'auto';
            threeDotDropdown.style.zIndex = '3001';
        });
        // Hide dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!threeDotDropdown.contains(e.target) && e.target !== threeDotBtn) {
                threeDotDropdown.style.display = 'none';
            }
        });
    }

    // --- Floating Add to Cart Animation JS ---
    const allBuyBtns = document.querySelectorAll('.btn-buy');
    allBuyBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            const productCard = btn.closest('.product');
            if (!productCard) return;
            // Remove any existing float
            const oldFloat = productCard.querySelector('.added-to-cart-float');
            if (oldFloat) oldFloat.remove();
            // Create floating animation
            const floatDiv = document.createElement('div');
            floatDiv.className = 'added-to-cart-float';
            floatDiv.textContent = 'Added to cart!';
            productCard.appendChild(floatDiv);
            setTimeout(() => floatDiv.remove(), 1200);
        });
    });

    // --- Theme Switcher Button ---
    const themeBtn = document.createElement('button');
    themeBtn.textContent = '🎨 Theme';
    themeBtn.className = 'btn-style';
    themeBtn.style.position = 'fixed';
    themeBtn.style.top = '16px';
    themeBtn.style.right = '40px';
    themeBtn.style.bottom = '';
    themeBtn.style.zIndex = '4000';
    document.body.appendChild(themeBtn);
    const themes = [null, 'green-coral', 'indigo-pink', 'navy-mint'];
    let themeIdx = 0;
    themeBtn.addEventListener('click', function() {
        themeIdx = (themeIdx + 1) % themes.length;
        if (themes[themeIdx]) {
            document.documentElement.setAttribute('data-theme', themes[themeIdx]);
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    });
});