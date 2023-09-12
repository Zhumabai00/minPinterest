$(document).ready(function() {
            //Таймер на странице ожидания оплаты
            $('.waiting-page__timer').countdown({until: 86399, 
                layout: 'через {hn}:{mn} отменяется автоматически'});
    
})