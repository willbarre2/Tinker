(function($) {
    $("#btnBlog1").on('click', function() {
        $("#blogCards1").addClass('openBlogCard');
        $("#blogCards2").removeClass('openBlogCard');
        $("#blogCards3").removeClass('openBlogCard');
        $("#blogCards4").removeClass('openBlogCard');
    })

    $("#btnBlog2").on('click', function() {
        $("#blogCards2").addClass('openBlogCard');
        $("#blogCards1").removeClass('openBlogCard');
        $("#blogCards3").removeClass('openBlogCard');
        $("#blogCards4").removeClass('openBlogCard');
    })

    $("#btnBlog3").on('click', function() {
        $("#blogCards3").addClass('openBlogCard');
        $("#blogCards2").removeClass('openBlogCard');
        $("#blogCards1").removeClass('openBlogCard');
        $("#blogCards4").removeClass('openBlogCard');
    })

    $("#btnBlog4").on('click', function() {
        $("#blogCards4").addClass('openBlogCard');
        $("#blogCards2").removeClass('openBlogCard');
        $("#blogCards3").removeClass('openBlogCard');
        $("#blogCards1").removeClass('openBlogCard');
    })

    $( document ).ready(function() {
        if($("#blogCards1").hasClass('openBlogCard')){
            $("#btnBlog1").css('color', 'orange !important');
        }
      });

})(jQuery);