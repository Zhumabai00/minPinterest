//Выделение и снятие выделения главного чекбокса в зависимости от чекнутых побочных чекбоксов
let allCheckBox = document.querySelector('.delayed-page__item-all');
let otherCheckBoxes = document.querySelectorAll('.delayed-page__item-input');


otherCheckBoxes.forEach(item => {
  item.addEventListener("click", function () {
    let checkBoxes = document.querySelectorAll('.delayed-page__item-input:checked');
    allCheckBox.checked = checkBoxes.length == otherCheckBoxes.length;
  })
});


allCheckBox.addEventListener("click", function () {
  otherCheckBoxes.forEach(item => item.checked = allCheckBox.checked)
})


//На странице viewed
let allCheckBoxViewed = document.querySelector('.delayed-page__item-all');
let otherCheckBoxesViewed = document.querySelectorAll('.viewed-page__input');

otherCheckBoxesViewed.forEach(item => {
  item.addEventListener("click", function () {
    let checkBoxesViewed = document.querySelectorAll('.viewed-page__input:checked');
    allCheckBoxViewed.checked = checkBoxesViewed.length == otherCheckBoxesViewed.length;
  })
});


allCheckBoxViewed.addEventListener("click", function () {
  otherCheckBoxesViewed.forEach(item => item.checked = allCheckBoxViewed.checked)
})

//Выделение и снятие выделения главного чекбокса в зависимости от чекнутых побочных чекбоксов
let allCheckBoxBasket = document.querySelector('.basket-page__item-all');
let otherCheckBoxesBasket = document.querySelectorAll('.basket-page__input');

otherCheckBoxesBasket.forEach(item => {
  item.addEventListener("click", function () {
    let checkBoxesBasket = document.querySelectorAll('.basket-page__input:checked');
    allCheckBoxBasket.checked = checkBoxesBasket.length == otherCheckBoxesBasket.length;
  })
});


allCheckBoxBasket.addEventListener("click", function () {
  otherCheckBoxesBasket.forEach(item => item.checked = allCheckBoxBasket.checked)
});
