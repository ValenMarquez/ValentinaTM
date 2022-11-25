$(document).ready(function(){
    $window - $(window);

    $('#intro').height($window.height());
    $window.scroll(function(){
        $('div.background').each(function(index,item){
            let $scroll = $(item);
            let yPos = -($window.scrollTop()/$scroll.data('speed'));
            let coord= '50% ' + yPos + 'px';
            $scroll.css ({backgroundPosition: coords});
        })
    })
})
