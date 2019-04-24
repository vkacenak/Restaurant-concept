/* $(document).ready(function () {
    $('.menu-nav-item').click(function () {
        MenuReset();
        $(this).addClass('menu-nav-active')
    });
    $('.menu-breakfast').click(function (){
        $('.menu-breakfast-img').animate({
            right: '-30rem'
        }, 1000);
        $('.menu-breakfast-content').animate({
            opacity: '1',
           marginLeft: '8rem'
        }, 1000);
     });

     $('.menu-lunch').click(function (){
        $('.menu-lunch-img').animate({
    
            right: '-30rem'
        }, 1000);
     });

     $('.menu-dinner').click(function (){
        $('.menu-dinner-img').animate({
    
            right: '-30rem'
        }, 1000);
     });

     $('.menu-drinks').click(function (){
        $('.menu-drinks-img').animate({
    
            right: '-30rem'
        }, 1000);
     });

    function MenuReset() {
        $('.menu-nav-item').removeClass('menu-nav-active');
        $('.menu-breakfast-img').animate({
            right: '-70rem'
        }, 700);

        $('.menu-lunch').click(function (){
            $('.menu-lunch-img').animate({
                right: '-70rem'
            }, 700);
         });
    
         $('.menu-dinner').click(function (){
            $('.menu-dinner-img').animate({     
                right: '-70rem'
            }, 700);
         });
    

        $('.menu-drinks').click(function (){
            $('.menu-drinks-img').animate({      
                right: '-70rem'
            }, 700);
         });

    }



});
*/

 $(document).ready(function () {

    
     

    $("input[name$='menu-name']").click(function() {
        var course = $(this).val();
       $(".menu-nav-item").removeClass("menu-nav-item-active");
        $(".radio-"+ course).addClass("menu-nav-item-active");  
    $(".menu-content").removeClass('menu-content-animation');
    $('.menu-img').removeClass('menu-img-animation');
    $('.menu-'+ course + '-img').addClass('menu-img-animation');

    $(".menu-" + course + "-content").addClass('menu-content-animation');


})
});