;(function ( $, window, undefined ) {
    'use strict';
    var pluginName = 'Slider3D',
    document = window.document,
    defaults = {

    };

    function Plugin( element, options ) {
        var t = this;
        t.$element = $(element);

        t.$el = $(t);
        //t.$body = $('body');
        t.opt = $.extend( {}, defaults, options) ;

        t._defaults = defaults;
        t._name = pluginName;

        t.init();
    }

    Plugin.prototype = {
        init: function() {
            //logic here
        }

    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if ( ! $.data(this, pluginName)) {
                $.data(this, pluginName, new Plugin( this, options ));
            }
        });
    };

}(jQuery, window));

