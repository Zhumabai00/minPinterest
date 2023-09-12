$(document).ready(function () {
    $("#basket-counter").text(`(${$(".basket-page").children('.delayed-page__item').length})`);
    let lastDelivery,
        lastCard;
    //Включение/выключение режима редактирования
    let = isEdit = false;
    $("#basket-edit").click(function () {
        if (isEdit) {
            $(".delayed-page__window").css("display", "none");
            $('.basket-page__item-config').css("display", "flex");
            $('.basket-page__item-remove').css("display", "none");
            $(this).text('Выбрать');
            isEdit = false;
        } else {
            $(".delayed-page__window").css("display", "flex");
            $('.basket-page__item-config').css("display", "none");
            $('.basket-page__item-remove').css("display", "flex");
            $(this).text('Отменить');
            isEdit = true;
        }
    });


    //продукты
    let orderingProducts = {
        products: [
            {
                id: 'product1',
                price: 1000,
                priceWithDiscount: 900,
                value: 1,
                isSelected: 0,
                image: './img/1.jpg',
            },
            {
                id: 'product2',
                price: 1300,
                priceWithDiscount: 1170,
                value: 1,
                isSelected: 0,
                image: './img/2.jpg',
            },
            {
                id: 'product3',
                price: 1000,
                priceWithDiscount: 900,
                value: 1,
                isSelected: 0,
                image: './img/3.jpg',
            }
        ],
        discount: {
            value: 10,
            requirement: 5990,
        },
        delivery: 1200,
        orderingPageDelivery: "—",
        generateProductImages() {
            for (let i = 0; i < this.products.length; i++) {
                if (this.products[i].isSelected) {
                    $("#basket-discount-images").append(`<img src=${this.products[i].image} alt='product'>`);
                    $("#basket-discount-images-small").append(`<img src=${this.products[i].image} alt='product'>`)
                }
            }
        },
        changeProductValue(id, value) {
            for (let i = 0; i < this.products.length; i++) {
                if (id === this.products[i].id) {
                    this.products[i].value = value;
                    console.log(this.products[i].priceWithDiscount);
                    break;
                }
            };
        },
        changeProductSelected(id, value) {
            for (let i = 0; i < this.products.length; i++) {
                if (id === this.products[i].id) {
                    this.products[i].isSelected = value;
                    break;
                }
            };
        },
        allChangeProductSelected(value) {
            this.products.map(product => product.isSelected = value);
        },
        deleteProduct(id) {
            for (let i = 0; i < this.products.length; i++) {
                if (id === this.products[i].id) {
                    this.products.splice(i, 1);
                    break;
                }
            };
        },
        deleteSelectedProducts() {
            let productsArr = [];
            for (let i = 0; i < this.products.length; i++) {
                if (this.products[i].isSelected) {
                    productsArr.push(this.products[i].id);
                }
            };
            for (let i = 0; i < productsArr.length; i++) {
                let productIndex = this.products.indexOf(this.products.find(product => product.id === productsArr[i]));
                this.products.splice(productIndex, 1);
            }
        },
        calcSelectedProducts() {
            let value = 0;
            for (let i = 0; i < this.products.length; i++) {
                if (this.products[i].isSelected) {
                    value += 1;
                }
            }
            return value;
        },
        calcTotalProductsPrice(isDiscount = false) {
            let priceWithoutDiscount = this.products.reduce((acc, num) => acc + num.price * num.value, 0)
            if (isDiscount) {
                if (priceWithoutDiscount >= this.discount.requirement) {
                    return priceWithoutDiscount * (1 - +this.discount.value / 100);
                } else {
                    return priceWithoutDiscount;
                }
            } else {
                return priceWithoutDiscount;
            }
        },
        allPrice() {
            return this.calcTotalProductsPrice(this.discount.value) + this.delivery;
        },
        allPriceBasket() {
            return this.products.reduce((acc, num) => num.isSelected ? acc + num.price * num.value : acc, 0);
        },
        allPriceBasketWithDiscount(isDiscount = false) {
            let allPriceWithDiscount = this.products.reduce((acc, num) => num.isSelected ? acc + num.price * num.value : acc, 0);
            if (isDiscount) {
                if (allPriceWithDiscount >= this.discount.requirement) {
                    return allPriceWithDiscount * (1 - +this.discount.value / 100);
                } else {
                    return allPriceWithDiscount;
                }
            } else {
                return allPriceWithDiscount;
            }
        }
    };

    function declOfNum(n, text_forms) {
        n = Math.abs(n) % 100;
        var n1 = n % 10;
        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 == 1) { return text_forms[0]; }
        return text_forms[2];
    }
    let productsWord = ['товар', 'товара', 'товаров'];

    const updatePrice = () => {
        $(".status-delivery-price").text(orderingProducts.delivery);
        $("#products-value, #products-value-2").text(orderingProducts.products.length);
        $("#products-price, #products-price-2").text(orderingProducts.calcTotalProductsPrice(orderingProducts.discount.value));
        $("#ordering-total-price, #all-price").text(orderingProducts.allPrice());
        $("#total-price-basket, #total-price-basket-window").text(orderingProducts.allPriceBasket());
        $("#products-selected-value, #basket-discount-products-value").text(orderingProducts.calcSelectedProducts());
        $("#total-price-basket-with-discount, #total-price-discount-1, #discount-price-basket-window").text(orderingProducts.allPriceBasketWithDiscount(orderingProducts.discount.value));
        $("#basket-discount-images, #basket-discount-images-small").html('');
        orderingProducts.generateProductImages();
        $("#products-counter-word").text(declOfNum(+orderingProducts.calcSelectedProducts(), productsWord));
        $("#full-products-price").text(orderingProducts.calcTotalProductsPrice());
        $("#full-ordering-total-price, #full-all-price").text(orderingProducts.calcTotalProductsPrice() + orderingProducts.delivery);

        if (orderingProducts.orderingPageDelivery === "—") {
            $(".all-price, #delivery-price").text("—");
            $(".ordering-total-price-tenge").css("display", "none");
            $(".ordering-page__total-price").css("align-items", "auto");
        } else {
            $(".ordering-total-price-tenge").css("display", "inline");
            $(".ordering-page__total-price").css("align-items", "flex-end");
            $("#delivery-price").text(orderingProducts.orderingPageDelivery);
        }

        if (orderingProducts.calcSelectedProducts() > 0) {
            $("#to-basket-discount").css("display", "block");
            $("#to-basket-discount-text").text("Подробнее");
        } else {
            $("#to-basket-discount").css("display", "none");
        }

        if (orderingProducts.calcSelectedProducts() > 0 && orderingProducts.allPriceBasket() > orderingProducts.discount.requirement) {
            $(".basket-page__item-new, #show-basket-discount, #user-discount-block").css("display", "block");
            $("#to-basket-discount-text").text(`Скидка -${orderingProducts.discount.value}%`);
        } else {
            $(".basket-page__item-new, #show-basket-discount, #user-discount-block").css("display", "none");
        }
    }
    updatePrice();

    //Удаление продуктов
    $(".basket-page__item-delete, .basket-page__item-delay").click(function () {
        let productId = $(this).parent().siblings(".delayed-page__item-content").children(".basket-page__item-bottom").children(".basket-page__item-counter").children(".basket-page__item-value").attr("id");
        $(this).parent().parent().remove();
        orderingProducts.deleteProduct(productId);
        updatePrice();
        $("#basket-counter").text(`(${$(".basket-page").children('.delayed-page__item').length})`);
    });

    $(".basket-page__item-remove").click(function () {
        let productId = $(this).siblings(".delayed-page__item-content").children(".basket-page__item-bottom").children(".basket-page__item-counter").children(".basket-page__item-value").attr("id");
        $(this).parent().remove();
        orderingProducts.deleteProduct(productId);
        updatePrice();
        $("#basket-counter").text(`(${$(".basket-page").children('.delayed-page__item').length})`);
    });

    //Выделение всех чекбоксов
    let isAllSelect = false;
    $(".select-all").click(function () {
        if (isAllSelect) {
            $("input[type=checkbox]").prop('checked', false);
            $('.basket-page__item').addClass('posiv').removeClass('select');
            orderingProducts.allChangeProductSelected(0);
            updatePrice();
            isAllSelect = false;
        } else {
            $("input[type=checkbox]").prop('checked', true);
            $('.basket-page__item').addClass('select').removeClass('posiv');
            orderingProducts.allChangeProductSelected(1);
            updatePrice();
            isAllSelect = true;
        }
    });

    //Удаление выделенных чекбоксов по кнопке в меню редактирования
    $('.checkboxes').on('change', function () {
        $(this).is(':checked') ?
            $(this).parent().parent().addClass('select').removeClass('posiv')
            :
            $(this).parent().parent().addClass('posiv').removeClass('select');
    });

    $('.basket-page__window-delay, .basket-page__window-remove').click(function () {
        $('div.select').remove();
        orderingProducts.deleteSelectedProducts();
        updatePrice();
        $("#basket-counter").text(`(${$(".basket-page").children('.delayed-page__item').length})`);
    });

    //Клик на чекбокс в корзине
    $(document).on("click", ".custom-checkbox-basket", function () {
        let productId = $(this).siblings(".delayed-page__item-content").children(".basket-page__item-bottom").children(".basket-page__item-counter").children(".basket-page__item-value").attr("id");
        let productIsSelect = $(this).children("input:checked").length;
        orderingProducts.changeProductSelected(productId, productIsSelect);
        updatePrice();
    })

    // кнопки плюс минус в корзине
    $(document).on("click", ".basket-page_product-minus", function () {
        var parent = $(this).closest(".basket-page__item-counter");
        var item = parent.find(".basket-page__item-value");
        let itemId = item.attr("id");
        if (item.val() > 1) {
            item.val((parseInt(item.val()) - 1));
        }
        orderingProducts.changeProductValue(itemId, +item.val());
        updatePrice();
    });

    $(document).on("click", ".basket-page__product-plus", function () {
        var parent = $(this).closest(".basket-page__item-counter");
        var item = parent.find(".basket-page__item-value");
        let itemId = item.attr("id");
        item.val(parseInt(item.val()) + 1);
        orderingProducts.changeProductValue(itemId, +item.val());
        updatePrice();
    });

    //кнопки плюс минус на странице оформления
    $(document).on("click", ".ordering-page_product-minus", function () {
        var parent = $(this).closest(".ordering-page__item-counter");
        var item = parent.find(".ordering-page__item-value");
        let itemId = item.attr("id");
        if (item.val() > 1) {
            item.val(parseInt(item.val()) - 1);
        }
        orderingProducts.changeProductValue(itemId, +item.val());
        updatePrice();
    });

    $(document).on("click", ".ordering-page__product-plus", function () {
        var parent = $(this).closest(".ordering-page__item-counter");
        var item = parent.find(".ordering-page__item-value");
        let itemId = item.attr("id");
        item.val(parseInt(item.val()) + 1);
        orderingProducts.changeProductValue(itemId, +item.val());
        updatePrice();
    });

    //Клик по количеству товаров
    $(document).on("click", ".basket-page__item-value", function () {
        let parent = $(this).closest(".basket-page__item-counter");
        let item = parent.find(".basket-page__item-value");
        parent.addClass("basket-page__counter-open");
        item.addClass("basket-page__value-open");
        parent.children().css("display", "block");
    })

    $(window).scroll(function () {
        $(".basket-page__item-counter").removeClass("basket-page__counter-open");
        $(".basket-page__item-value").removeClass("basket-page__value-open");
        $(".basket-page__item-counter").children(".basket-page_product-config").css("display", "none");
    })

    //Окно смены способа оплаты на странице оформления заказа
    // if (deliv = true){
    $("#to-change-payment").click(function (event) {
        event.preventDefault();

        $("#shadow").fadeIn(297, function () {
            $("body").css("overflow", "hidden");
            $("#payment-change-window")
                .animate({ opacity: 1, top: "40%" }, 0);
        });
    });


    $("#shadow, #close-payment-change").click(function () {
        $("#payment-change-window").animate({ opacity: 0, top: "200%" }, 1, function () {
            $("body").css("overflow", "auto");
            $("#shadow").fadeOut(500);
        });
    });
    // } else {alert('Выбирете способ доставки')};

    //Смена способа оплаты
    $(".payment-change__form-label").click(function () {
        let name = '';
        if ($(this).children(".payment-change__info").children(".payment-change__text").children().length == 0) {
            name = $(this).children(".payment-change__info").children(".payment-change__text").html();
        } else {
            name = $(this).children(".payment-change__info").children(".payment-change__text").children("span").html();
        }//chuckd
        if (!lastCard) {
            lastCard = $(this).children(".custom-checkbox-span")
        }
        lastCard.removeClass('chuckd');
        $(this).children(".custom-checkbox-span").addClass('chuckd')
        lastCard = $(this).children(".custom-checkbox-span")
        $("#change-payment-name").text(name);
        $("#change-payment-subtext").text("Ещё");
    })

    //Окно смены способа Доставки на странице оформления заказа




    // let deliv = document.getElementById('to-delivery-window');
    // let paym = document.getElementById('to-change-payment');

    // deliv = false;
    // paym = false;



    $("#to-delivery-window").click(function (event) {
        event.preventDefault();
        $("#shadow").fadeIn(297, function () {
            $("body").css("overflow", "hidden");
            $("#delivery-change-window")
                .animate({ opacity: 1, top: "40%" }, 1);
            // deliv = true;
        });

    });




    $("#shadow, #close-delivery-change").click(function () {
        $("#delivery-change-window").animate({ opacity: 0, top: "200%" }, 1, function () {
            $("body").css("overflow", "auto");
            $("#shadow").fadeOut(500);
        });
    });

    //p5
    const checks = document.querySelectorAll('.check');
    checks.forEach(function (ch) {
        ch.addEventListener('click', function () {
            var that = this;
            checks.forEach(function (ch2) {
                if (ch2 != that)
                    ch2.checked = false;
            });
        });
    });

    // Смена способа доставки

    $(".delivery-change__form-label").click(function () {
        let name = '';
        let value = $(this).children("input").val();
        if ($(this).children(".payment-change__info").children(".payment-change__text").children().length == 0) {
            name = $(this).children(".payment-change__info").children(".payment-change__text").html();
        } else {
            name = $(this).children(".payment-change__info").children(".payment-change__text").children("span").html();
        }
        if (!lastDelivery) {
            lastDelivery = $(this).children(".custom-checkbox-span")
        }
        lastDelivery.removeClass('chuckd');
        $(this).children(".custom-checkbox-span").addClass('chuckd')
        lastDelivery = $(this).children(".custom-checkbox-span")
        $("#change-delivery-name").text(name);
        $("#change-delivery-subtext").text("Ещё");
        orderingProducts.delivery = +value;
        orderingProducts.orderingPageDelivery = +value;
        updatePrice();
    })

    let noteValue = '';
    $("#write-note-button").click(function () {
        if (noteValue !== '') {
            $(".ordering-page__block-note").css({ "display": "-webkit-box", "margin": "0 8px 0 16px" });
            $(".ordering-page__block-note").text(noteValue);
            $('.ordering-page__note-subtext').css("display", "none");
        } else {
            $('.ordering-page__note-subtext').css("display", "block");
            $(".ordering-page__block-note").css({ "display": "none", "margin": "0" });
        }
    });



    //счётчик примечания
    $('.write-note__form-textarea').on("input", function () {
        const maxlength = $(this).attr("maxlength");
        const currentLength = $(this).val().length;

        $(this).siblings('.write-note__form-counter').children('.chars-current').html(currentLength);
        $(this).siblings('.write-note__form-counter').children('.chars-total').html(maxlength);
        noteValue = $(this).val();
    });

    //Окно добавления адреса на странице оформления заказа
    $("#to-adress-window").click(function (event) {
        event.preventDefault();
        $("#shadow").fadeIn(297, function () {
            $("body").css("overflow", "hidden");
            $("#address-window")
                .animate({ opacity: 1, top: "0" }, 0);
        });
    });

    $("#close-address").click(function () {
        $(".address-window__form-input").removeClass("error-border");
        $(".address-window-error").remove();
        $("#address-window").animate({ opacity: 0, top: "200%" }, 300, function () {
            $("body").css("overflow", "auto");
            $("#shadow").fadeOut(500);
        });
    });

    $('body').on('input', 'input[type="number"][maxlength]', function () {
        if (this.value.length > this.maxLength) {
            this.value = this.value.slice(0, this.maxLength);
        }
    });

    $("#address-window-button").click(function () {
        let fio = $('#fio').val();
        let phone = $('#phone').val();
        let address = $('#address').val();
        let height = $('#height').val();
        let weight = $('#weight').val();

        $(".address-window-error").remove();

        if (fio.length > 1 && phone.length === 16 && address.length > 1 && height.length > 1 && weight.length > 1) {
            $(".ordering-page__address").html(address);
            $(".ordering-page__name").text(fio);
            $(".order-page__user-phone").text(phone);
            $(".ordering-page__block-address").css("display", "none");

            $("#address-window").animate({ opacity: 0, top: "200%" }, 300, function () {
                $("body").css("overflow", "auto");
                $("#shadow").fadeOut(297);
            });
        }

        if (fio.length < 1) {
            $('#fio').css("border", "1px solid red");
            $('#fio').after('<span class="address-window-error text-font-14">Заполните ФИО</span>');
        }
        if (phone.length < 16) {
            $('#phone').css("border", "1px solid red");
            $('#phone').after('<span class="address-window-error text-font-14">Заполните номер телефона</span>');
        }
        if (address.length < 1) {
            $('#address').css("border", "1px solid red");
            $('#address').after('<span class="address-window-error text-font-14">Заполните адрес</span>');
        }
        if (height.length < 1) {
            $('#height').css("border", "1px solid red");
            $('#height').after('<span class="address-window-error text-font-14">Заполните рост</span>');
        }
        if (weight.length < 1) {
            $('#weight').css("border", "1px solid red");
            $('#weight').after('<span class="address-window-error text-font-14">Заполните вес</span>');
        }
    });

    $('.address-window__form-input').on('input', function () {
        $(this).css("border", "solid 1px transparent");
        $(this).siblings("span").remove();
    })

    $("#phone").on('click', function () {
        $(this).css("border", "solid 1px transparent");
        $(this).siblings("span").remove();
    })


    let isOpenFullAddress = false;
    $("#to-open-full-address").on('click', function () {
        if (isOpenFullAddress) {
            $(this).children(".order-status__block-text").children(".status-page__switch-image").removeClass("status-page__switch-rotate");
            $(this).children(".order-status__block-text").children(".waiting-page__code").removeClass('waiting-page__code-open');
            $(this).children(".order-status__block-text").css("align-items", "center");
            isOpenFullAddress = false;
        } else {
            $(this).children(".order-status__block-text").children(".status-page__switch-image").addClass("status-page__switch-rotate");
            $(this).children(".order-status__block-text").children(".waiting-page__code").addClass('waiting-page__code-open');
            $(this).children(".order-status__block-text").css("align-items", "flex-start");
            isOpenFullAddress = true;
        }
    })

    $(".address-window__form-input").focus(function () {
        $(this).siblings(".address-window__img-wrapper").css("opacity", "1");
    })

    $(".address-window__form-input").focusout(function () {
        $(this).siblings(".address-window__img-wrapper").css("opacity", "0");
    })

    $(document).on("click", ".address-window__img-wrapper", function () {
        $(this).siblings(".address-window__form-input").val('');
    });

    //Окно детализации цены на странице оформления товаров
    $("#to-detailed-price-window").click(function (event) {
        event.preventDefault();
        $("#shadow").fadeIn(297, function () {
            $("body").css("overflow", "hidden");
            $("#detailed-price-window")
                .animate({ opacity: 1, top: "30%" }, 0);
        });
    });

    $("#shadow, #close-detailed-price").click(function () {
        $("#detailed-price-window").animate({ opacity: 0, top: "200%" }, 300, function () {
            $("body").css("overflow", "auto");
            $("#shadow").fadeOut(500);
        });
    });

    let changeDiscount = (discount = '', discountBlock = '') => {
        if (!discount && !discountBlock) {
            $("#selected-discount").html($(".detailed-price__form-label:first-child").html());
            $("#selected-discount").children(".detailed-price__label-header").children(".ordering-page__block-column:last-child").html($(".detailed-price__form-label:first-child").children(".detailed-price__label-header").children(".ordering-page__block-column").children(".detailed-price__header-subtext").html());
        } else {
            $("#selected-discount").html(discountBlock);
            $("#selected-discount").children(".detailed-price__label-header").children(".ordering-page__block-column:last-child").html(discount).addClass("detailed-price__header-subtext");
        }
    }
    changeDiscount();

    $(".detailed-price__form-label").click(function () {
        let discountBlock = $(this).html();
        let discountName = $(this).children(".detailed-price__label-header").children(".ordering-page__block-column").children(".detailed-price__header-text").html();
        let discount = $(this).children(".detailed-price__label-header").children(".ordering-page__block-column").children(".detailed-price__header-subtext").html();
        $(".change-discount-name").text(discountName).addClass('text-font-16').css("font-size", "16px");
        $("#ordering-discount").text(discount).addClass('text-font-16').css("font-size", "16px");
        changeDiscount(discount, discountBlock);
    })

    //Окно акций и скидок на странице оформления товаров
    $("#to-discount-window").click(function (event) {
        event.preventDefault();
        $("#shadow").fadeIn(297, function () {
            $("body").css("overflow", "hidden");
            $("#discount-window")
                .animate({ opacity: 1, top: "30%" }, 0);
        });
    });

    $("#shadow, #close-discount-window, #discount-window-button").click(function () {
        $("#discount-window").animate({ opacity: 0, top: "200%" }, 10, function () {
            $("body").css("overflow", "auto");
            $("#shadow").fadeOut(297);
        });
    });

    //Копирование кода
    $('#copy-code').click(function () {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($('#order-code').text()).select();
        document.execCommand("copy");
        $temp.remove();

        setTimeout(() => {
            $('#done-favorites').css("display", "flex");
        }, 0)
        setTimeout(() => {
            $('#done-favorites').css("display", "none");
        }, 2000)

    });

    $('#copy-code-2').click(function () {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($('#order-code-2').text()).select();
        document.execCommand("copy");
        $temp.remove();

        setTimeout(() => {
            $('#done-favorites').css("display", "flex");
        }, 0)
        setTimeout(() => {
            $('#done-favorites').css("display", "none");
        }, 2000)

    });

    $('#copy-track').click(function () {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($('#track-code').text()).select();
        document.execCommand("copy");
        $temp.remove();

        setTimeout(() => {
            $('#done-favorites').css("display", "flex");
        }, 0)
        setTimeout(() => {
            $('#done-favorites').css("display", "none");
        }, 2000)

    });

    //Показать/скрыть статусы на странице статусов заказа
    let timelineIsOpen = false;
    $(".status-page__switch").click(function () {
        if (!timelineIsOpen) {
            $(".timeline").css("display", "flex");
            $(this).children(".status-page__switch-title").text("Скрыть");
            $(this).children("img").removeClass("status-page__switch-image").addClass("status-page__switch-rotate");
            timelineIsOpen = true;
        } else {
            $(".timeline:not(:first-child)").css("display", "none");
            $(this).children(".status-page__switch-title").text("Показать");
            $(this).children("img").removeClass("status-page__switch-rotate").addClass("status-page__switch-image");
            timelineIsOpen = false;
        }
    })

    //Окно акций и скидок на странице корзины
    $("#to-basket-discount").click(function (event) {
        event.preventDefault();
        $("#shadow").fadeIn(297, function () {
            $("body").css("overflow", "hidden");
            $(".basket-page__panel").css("z-index", "51");
            $("#basket-discount-window")
                .animate({ opacity: 1, top: "15%" }, 0);
        });
    });

    $("#shadow, #close-basket-discount").click(function () {
        $("#basket-discount-window").animate({ opacity: 0, top: "200%" }, 300, function () {
            $("body").css("overflow", "auto");
            $(".basket-page__panel").css("z-index", "2");
            $("#shadow").fadeOut(297);
        });
    });

    let basketDiscountIsHidden = false;
    $("#show-basket-discount").click(function () {
        if (!basketDiscountIsHidden) {
            $(".basket-discount__hidden").css("display", "block");
            $(".basket-discount__block-arrow").addClass("basket-discount__block-rotate").removeClass("basket-discount__block-arrow");
            basketDiscountIsHidden = true;
        } else {
            $(".basket-discount__hidden").css("display", "none");
            $(".basket-discount__block-rotate").addClass("basket-discount__block-arrow").removeClass("basket-discount__block-rotate");
            basketDiscountIsHidden = false;
        }
    })

    if ($(".my-orders__list").children('.waiting-page__info').length === 0) {
        $(".myorders-zero").css("display", "block");
    } else {
        $(".myorders-zero").css("display", "none");
    }

    // вызов модального окна добавления в корзину
    $(".delayed-page__item-recalls").click(function (event) {
        event.preventDefault();
        $("#shadow").fadeIn(297, function () {
            $("body").css("overflow", "hidden");
            $('#add-basket').addClass('add-basket-open');
            $("#add-basket")
                .css("display", "block")
                .animate({ opacity: 1 }, 198);
        });
    });

    $("#add-basket__close, #btn-to-basket, #shadow").click(function () {
        $("body").css("overflow", "auto");
        $('#add-basket').removeClass('add-basket-open');
        $("#add-basket").animate({ opacity: 0 }, 198, function () {
            $(this).css("display", "none");
            $("#shadow").fadeOut(297);
        });
    });

    $(document).on("click", ".minus", function () {
        var parent = $(this).closest(".add-basket__count-el");
        var item = parent.find(".add-basket__count-number");
        if (item.val() >= 1) {
            item.val(parseInt(item.val()) - 1);
        }
    });

    $(document).on("click", ".plus", function () {
        var parent = $(this).closest(".add-basket__count-el");
        var item = parent.find(".add-basket__count-number");
        item.val(parseInt(item.val()) + 1);
    });

    $("img.add-basket__color-zoom").click(function (event) {
        event.preventDefault();
        $("#shadow-dark-2").fadeIn(297, function () {
            $("#add-basket__color-window")
                .css("visibility", "visible")
                .animate({ opacity: 1 }, 198);
            $("div.container")
                .css("margin", "0");
        });
    });

    $("#add-basket__color-close, #shadow-dark-2").click(function () {
        $("#add-basket__color-window").animate({ opacity: 0 }, 198, function () {
            $(this).css("visibility", "hidden");
            $("#shadow-dark-2").fadeOut(297);
            $("div.container")
                .css("margin", "0 8px");
        });
    });
})

