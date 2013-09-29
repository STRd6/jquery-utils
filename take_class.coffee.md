Take Class
==========

Take the named class from all the sibling elements. Perfect for something like
radio buttons.

    (($) ->
      $.fn.takeClass = (name) ->
        @addClass(name).siblings().removeClass(name)

        return this
    )(jQuery)
