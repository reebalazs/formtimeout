
# Form timeouts #

Allow forms to time out within a specified period. Works with Plone.

Installation: Use buildout to install the package. Then install it to Plone in Setup / Add Ons.

What it does: all forms submits are hijacked with ajax. There is a 30 s timeout involved. If this timeout happens, an alert is popped up. If the response arrives in order, it will be used
to replace the current page content: just like without the ajax.

Risks: Other components may also overwrite onSubmit. In this case either we work as we should, or
there is a problem, may depend really on which handler is bound first, and whether or not it will
stop event propagation. Needs to be tested with all cases really

I tested with: 

- Search button on main page (working)

- Search in extended search page: the timeout check will not happen, but that's ok because this
  is a place where the onSubmit is already overwritten, so the original handler wins, which means
  it works as expected.

- Document's edit page. The main submit works well.


Future possibilities:

- use some class to select / unselect <FORM> elements to process. (Currently all <FORM> are selected.)

- use a data-timeout='millis' attribute on the form if you want an alternate timeout (more than 10s)

