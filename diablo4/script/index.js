$(function(){

    $("body").fadeIn(2000)

    $(".wrap").fullpage({
        scrollingSpeed: 1000,
        navigation: false,
        menu: ".main",
        anchors: ["","one","two","three","four","five","six","seven","eight"],
    
        afterLoad :function(anchorLink, index){
                var x = index.index
            if(x == 7){
                $("#sc8::before").css("filter","brightness(0)")
                $(".sc8_in").delay(500).fadeIn(1000)
                $(".sc8_right").delay(1000).fadeIn(1000)
            }else{
                $(".sc8_in").fadeOut()
                $(".sc8_right").fadeOut()
                $(".price_t li").removeClass("on")
            }
            if(x == 0){
            }
        }
    })
    $(".close").click(function(){
        $("#pop").hide()
    })
    $(".sc3_in .more-txt").click(function(){
        var x = window.open("","","")
        x.location.href = "https://www.youtube.com/watch?v=Y8z-9Za0Jcw"
    })

    $(".cl_t li").eq(0).siblings().hide()
    $(".clp li").eq(0).siblings().hide()
    $(".classes li").click(function(){
        var x = $(this).index()
        $(this).siblings().removeClass("on")
        $(this).addClass("on")
        $(".cl_t li").fadeOut()
        $(".cl_t li").eq(x).fadeIn()
        $(".clp li").fadeOut()
        $(".clp li").eq(x).fadeIn()
    })
    $(".wo_t ul li").eq(0).siblings().hide()
    $(".wo_b li").eq(0).siblings().hide()
    $(".world li").click(function(){
        var y = $(this).index()
        $(this).siblings().removeClass("on")
        $(this).addClass("on")
        $(".wo_t ul li").fadeOut()
        $(".wo_t ul li").eq(y).fadeIn()
        $(".wo_b li").fadeOut()
        $(".wo_b li").eq(y).fadeIn()
    })
    $(".price li .edi").click(function(){
        var px = $(this).parent().index()
        console.log(px)
        var ptx = 0
        $(".price_t li").removeClass("on")
        for(ptx = 0; ptx <= px; ptx++){
            $(".price_t li").eq(ptx).addClass("on")
        }
    })

})