$(document).ready(function() {
    $('.menu__burger').click(function(event) {
        $('.menu__burger, .menu-nav').toggleClass('active');
        $('body').toggleClass('lock');
    })
})

$(document).ready(function(){
    $('.slider').slick({
        arrows:true,            //стрелки
        dots:true,              //точки переключения слайдов
        adaptiveHeight:true,   //автоизменение высоты при разной высоте изображений (для .slick-track                           // ставим align-items:flex-start;) 
        slidesToShow:1,         //количество слайдов отображаемое за 1 раз на экране
        slidesToScroll:1,       //количество слайдов пролистываемых за 1 нажатие
        speed:1000,             //скорость пролистывания слайдов
        easing:'linear',         //тип анимации прокрутки
        infinite:true,           //бесконечность пролистывания слайдов
        initialSlide:1,          //стартовый слайд
        autoplay:true,           //автопроигрывание слайдов
        autoplaySpeed:3000,      //скорость прои автопроигрывании
        pauseOnFocus:true,      //паузы при наведении и фокусе
        pauseOnHover:true,
        pauseOnDotsHover:true,
        draggable:true,         //отвечает за перетаскивание мышью слайдов на пк
        swipe:true,             //свайп слайдов на телефонах
        touchThreshold:5,       //расстояния, которое нужно протянуть свайпом для переключения на след                              //слайд
        touchMove:true,         //отключает возможность тянуть фото при свайпе. но свайп работать будет
        waitForAnimate:true,  //если отключить, можно быстро прокручивать слайды не ожидая конца анимации
        centerMode:false,      //фокусируется на центральном слайде и дает ему класс .slick-center.                              //Используется если нужно затемнить боковые слайды и выделить центральный
        variableWidth:false,    // отобразит все слайды в ряд на экране скрывая края
        rows:1,                  //количество рядов в сладере
        slidesPerRow:1,          //слайды в ряду
        vertical:false,             //вертикальный слайдер
        verticalSwiping:false,      //вертикальный свайп при вертикальном слайдере
        
        
        appendArrows:$('.slider__arrows'),    // можно вытащить стрелки или точки из стандартного класса и закинуть их в                          свой созданный
        appendDots:$('.slider__dots')
    });
    
})