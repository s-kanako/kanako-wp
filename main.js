Pace.on('done', function(){
    $('.container').fadeIn();
});
    
// header
$(function () {
    $('.Toggle').click(function() {
        $(this).toggleClass('active');        

        if ($(this).hasClass('active')) {
            $('.NavMenu').addClass('active'); //クラスを付与
        } else {
            $('.NavMenu').removeClass('active'); //クラスを外す
        }
    });
    
    // リンク選択後自動的に閉まる
    $('.NavMenu a').click(function(){
        $('.NavMenu').removeClass('active');
        $('.Toggle').removeClass('active');
    });

    // リンク外クリック時自動的に閉まる
    $('.main').click(function () {
        $('.NavMenu').removeClass('active');
        $('.Toggle').removeClass('active');
    });
});

// faq
$(function(){
    $("#acMenu dt").on("click", function() {
        $(this).next().slideToggle();
        $(this).toggleClass("active");
    }); 

});


//スクロールの
$(function(){
	$(window).scroll(function (){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 300){
				$(this).addClass('scrollin');
			}
		});
	});
});
