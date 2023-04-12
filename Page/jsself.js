
    $(function () {

        $('a').click(function () {
            var id = $(this).attr('id').replace("a", "");
            //divquote
            if ($("#p" + id).is(":hidden")) {
                $("#p" + id).show();
            } else {
                $("p").hide();
            }
            return false;
        });
        $('#search').keyup(function () {
            // Search text
            var text = $(this).val();
            // Hide all content class element
            $('.item').hide();

            // Search and show
            $('.words:contains("' + text + '")').parent().show();

        });
    });