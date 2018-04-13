/**
 * Mageplaza
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Mageplaza.com license that is
 * available through the world-wide-web at this URL:
 * https://www.mageplaza.com/LICENSE.txt
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade this extension to newer
 * version in the future.
 *
 * @category    Mageplaza
 * @package     Mageplaza_SocialLogin
 * @copyright   Copyright (c) 2018 Mageplaza (http://www.mageplaza.com/)
 * @license     https://www.mageplaza.com/LICENSE.txt
 */

define([
    'jquery',
    'mage/translate',
    'mageplaza/core/jquery/popup',
    'maxx/agepopup/mousewheel',
    'maxx/agepopup/fancybox'
], function ($, $t) {
    $.widget('maxx.agepopup', {
        options: {
            /*General*/
            popup: '#social-login-popup',
            popupEffect: '',
            headerLink: '.header .links, .section-item-content .header.links',
            ajaxLoading: '#social-login-popup .ajax-loading',
            loadingClass: 'social-login-ajax-loading',
            errorMsgClass: 'message-error error message',
            successMsgClass: 'message-success success message'
        },
        _init: function () {
            $("#agepopupButton").fancybox({
                'titlePosition': 'inside',
                'transitionIn': 'none',
                'transitionOut': 'none',
                'hideOnOverlayClick' : false,
                'protect':true
            }).trigger('click');
        }

    });

    return $.maxx.agepopup;
});
