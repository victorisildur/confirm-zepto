var tmpl = require('../html/confirm.html'),
    css  = require('../less/confirm.less');

var defaultOption = {
    negative: 'cancel',
    positive: 'ok'
};

/* @param: option{object}:
 *            title{string}
 *            negative{string}
 *            positive{string}
 *            callback{function}
 */
function confirm(option) {
    option = $.extend(defaultOption, option);
    if ($('.js-confirm').length === 0) {
        $('body').append(tmpl);
        $('.js-confirm .js-positive').on('click', function() {
            $('.js-confirm').hide();
            option.callback(true);
        });
        $('.js-confirm .js-negative').on('click', function() {
            $('.js-confirm').hide();
            option.callback(false);
        });
    }
    var confirmDiv = $('.js-confirm'),
        titleDiv = confirmDiv.find('.js-title'),
        negDiv = confirmDiv.find('.js-negative'),
        posDiv = confirmDiv.find('.js-positive');
    titleDiv.html(option.title);
    posDiv.html(option.positive);
    negDiv.html(option.negative);
    confirmDiv.show();
}

window.confirm = confirm;

