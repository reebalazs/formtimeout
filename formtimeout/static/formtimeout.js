
jQuery(function () {

    $('body').on('submit', 'form', function(evt) {
        var $form = $(this);
        var url = $form.attr('action');
        var parms = $form.serialize();
        console.log('submitted', url, parms);
        $.ajax(url, {
            method: 'POST',
            data: parms,
            format: 'html',
            timeout: 3000
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