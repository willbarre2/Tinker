(function($) {
    $("#btnBlog1").on('click', function() {
        $(this).addClass('text-warning');
        $(".btn").not(this).removeClass('text-warning');
        $("#blogCards1").addClass('openBlogCard');
        $("#blogCards2").removeClass('openBlogCard');
        $("#blogCards3").removeClass('openBlogCard');
        $("#blogCards4").removeClass('openBlogCard');
    })

    $("#btnBlog2").on('click', function() {
        $(this).addClass('text-warning');
        $(".btn").not(this).removeClass('text-warning');
        $("#blogCards2").addClass('openBlogCard');
        $("#blogCards1").removeClass('openBlogCard');
        $("#blogCards3").removeClass('openBlogCard');
        $("#blogCards4").removeClass('openBlogCard');
    })

    $("#btnBlog3").on('click', function() {
        $(this).addClass('text-warning');
        $(".btn").not(this).removeClass('text-warning');
        $("#blogCards3").addClass('openBlogCard');
        $("#blogCards2").removeClass('openBlogCard');
        $("#blogCards1").removeClass('openBlogCard');
        $("#blogCards4").removeClass('openBlogCard');
    })

    $("#btnBlog4").on('click', function() {
        $(this).addClass('text-warning');
        $(".btn").not(this).removeClass('text-warning');
        $("#blogCards4").addClass('openBlogCard');
        $("#blogCards2").removeClass('openBlogCard');
        $("#blogCards3").removeClass('openBlogCard');
        $("#blogCards1").removeClass('openBlogCard');
    })

    $( document ).ready(function() {
        if($("#blogCards1").hasClass('openBlogCard')){
            $(this).addClass('text-warning');
        }
      });

})(jQuery);