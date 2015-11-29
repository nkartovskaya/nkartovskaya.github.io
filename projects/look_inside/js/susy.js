$(function() {
    var overCount = 0;
    $('.container, header, aside, main, article, footer').mouseover(
        function() {
            overCount++;
            (function(self, currentOverCount) {
                setTimeout(function() {
                    if (overCount == currentOverCount) {
                        $('.hover').removeClass('hover');
                        $(self).addClass('hover');
                    }
                }, 150);
            })(this, overCount);

            return false;
        });
    $('.container').mouseleave(
        function() {
            overCount = 0;
            $('.hover').removeClass('hover');
        }
    );
});
