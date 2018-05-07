(function(){
    $('.content__comand__info').click(function(){
        if ($(this).hasClass('activ')){
            $(this).removeClass('activ');
        } else {
            &(this).addClass('activ').siblings().removeClass('active');

        } 
    });
})();