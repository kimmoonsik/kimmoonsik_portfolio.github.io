$(function(){  
    $(".btn_top").hide();

    $(window).scroll(function(){
        // 메인페이지 상단 디자인 바
        if($(this).scrollTop() > $("header").height()){
            //$("header h1::after").hide();
            $("header h1").removeClass("on");
        }else if($("header h1").hasClass("main")){
            $("header h1").addClass("on");
        }

        // 탑버튼
        if ($(window).scrollTop() >= 200) { 
            $(".btn_top").fadeIn();
        }else {
            $(".btn_top").fadeOut();
        }

    });

    // 서브페이지 메인비주얼 페럴렉스
    $.stellar({
        horizontalScrolling: false,
        hideDistantElements: false
      });

    // 탑버튼
    $(".btn_top").click(function(){
        $("body, html").animate({scrollTop:0}, 500);
    })

    // 포폴 상세 이미지
    $(window).resize(function(){
        if($(window).width() > 640){
            $(".portpolio > img").attr("src", $(".portpolio > img").attr("src").replace("m_","p_"));
        }else{
            $(".portpolio > img").attr("src", $(".portpolio > img").attr("src").replace("p_","m_"));
        }
    }).trigger("resize");;


});
