
jQuery(function () {

    DEFAULT_TIMEOUT = 10000;   // millis

    $('body').on('submit', 'form', function(evt) {
        var $form = $(this);
        var url = $form.attr('action');
        var parms = $form.serialize();
        $.ajax(url, {
            type: 'POST',
            data: parms,
            dataType: 'html',
            timeout: DEFAULT_TIMEOUT
        }).fail(function (xhr, textStatus) {
            if (textStatus == 'timeout') {
                alert('ERROR: The form submission has timed out.');
            } else {
                alert('ERROR: The form submission has failed. [' + textStatus + ']');
            }
        }).success(function(html) {
            var newDoc = document.open("text/html", "replace");
            newDoc.write(html);
            newDoc.close();
        });
        return false;
    });

});