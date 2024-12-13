
$(function(){
    let currentIndex = 0;
    $("slider").hide().first().show();

    setInterval(function(){
        let nextIndex = (currentIndex + 1) % 4;
        $(".slider").eq(currentIndex).fadeOut(1200);
        $(".slider").eq(nextIndex).fadeIn(1200);

        currentIndex = nextIndex ;
    }, 4000);
})
