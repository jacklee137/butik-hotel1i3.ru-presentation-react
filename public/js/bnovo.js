var timer_jq_loaded_for_bnovo_widget = timer_jq_loaded_for_bnovo_widget || undefined;
;(function (window) {
    const PROTOCOL = is_secure() ? 'https://' : 'http://';
    const DOMAIN = `${PROTOCOL}widget.reservationsteps.ru`;
    // const DOMAIN = `${PROTOCOL}staging-widget.reservationsteps.ru`;
    // const DOMAIN = `${PROTOCOL}widget.loc:8088`;

    var init_callbacks = init_callbacks || new Array();
    var timer_all_files_loaded = null;

    function is_secure() {
        return (location && location.protocol === 'https:');
    }

    function init(callback) {
        init_callbacks.push(callback);

        include_necessary_files();

        if (!timer_all_files_loaded) {
            timer_all_files_loaded = window.setInterval(execute_callbacks_when_all_loaded, 10);
        }
    }

    function include_necessary_files() {
        if (window.jQuery === undefined && timer_jq_loaded_for_bnovo_widget === undefined) {
            include_latest();
            timer_jq_loaded_for_bnovo_widget = window.setInterval(include_base64_when_jq_loaded, 10);
        } else if (window.jQuery !== undefined && window.jQuery.base64 === undefined) {
            // TODO: get rid of jQuery.base64
            include_base64();
        }
    }

    function execute_callbacks_when_all_loaded() {
        if (window && window.jQuery !== undefined && window.jQuery.base64 !== undefined) {
            window.clearInterval(timer_all_files_loaded);
            timer_all_files_loaded = null;
            execute_callbacks();
        }
    }

    function execute_callbacks() {
        for (var i = 0; i < init_callbacks.length; ++i) {
            attempt(init_callbacks[i]);
        }
        init_callbacks = new Array();
    }


    function include_base64_when_jq_loaded() {
        if (window && window.jQuery !== undefined) {
            window.clearInterval(timer_jq_loaded_for_bnovo_widget);

            if (window.jQuery.base64 === undefined) {
                include_base64();
            }
        }
    }

    function include_latest() {
        js = document.createElement('script');
        js.setAttribute('type', 'text/javascript');
        js.setAttribute('src', DOMAIN + '/js/jquery.js');
        document.getElementsByTagName('HEAD')[0].appendChild(js);
        return;
    }

    function include_base64() {
        var js = document.createElement('script');
        js.setAttribute('type', 'text/javascript');
        js.setAttribute('src', DOMAIN + '/js/base64.min.js');
        document.getElementsByTagName('HEAD')[0].appendChild(js);
        return;
    }

    function include_iframe_script() {
        var js = document.createElement('script');
        js.setAttribute('type', 'text/javascript');
        js.setAttribute('src', DOMAIN + '/iframe/library/dist/booking_iframe.js');
        document.getElementsByTagName('HEAD')[0].appendChild(js);
        return;
    }

    function hex_to_rgba(h, a) {
        var s = (h.charAt(0) == "#") ? h.substring(1, 7) : h,
            str = "rgba(" + parseInt(s.substring(0, 2), 16) + ", " + parseInt(s.substring(2, 4), 16) + ", " + parseInt(s.substring(4, 6), 16) + ", " + a + ")";
        return str;
    }

    function gogo(id, params) {
        if (!params.force_redirect) {
            include_iframe_script();
        }
        var el = window.document.getElementById(id),
            li,
            styles;
        if (el == null) return false;

        var c = window.document;

        // switch horizontal to vertical types at mobiles
        const maxWindowWidth = (params.switch_mobiles_width) ? params.switch_mobiles_width : 800;
        if (window.outerWidth < maxWindowWidth && params.switch_mobiles && params.switch_mobiles == 'on') {
            if (params.type === 'horizontal') {
                params.type = 'vertical';
            }
            if (params.type === 'horselect') {
                params.type = 'select';
            }

            // для мобильного вида виджета используем соответствующие параметры
            // настройки формы
            params.width = (params.width_mobile !== undefined) ? params.width_mobile : params.width;
            params.background = (params.background_mobile !== undefined) ? params.background_mobile : params.background;
            params.bg_alpha = (params.bg_alpha_mobile !== undefined) ? params.bg_alpha_mobile : params.bg_alpha;
            params.border = (params.border_mobile !== undefined) ? params.border_mobile : params.border;
            params.border_color = (params.border_color_mobile !== undefined) ? params.border_color_mobile : params.border_color;

            // настройки заголовока
            params.title = (params.title_mobile !== undefined) ? params.title_mobile : params.title;
            params.without_title = (params.without_title_mobile !== undefined) ? params.without_title_mobile : params.without_title;
            params.title_color = (params.title_color_mobile !== undefined) ? params.title_color_mobile : params.title_color;
            params.title_size = (params.title_size_mobile !== undefined) ? params.title_size_mobile : params.title_size;
        }
        li = c.createElement("style");
        if (li) {
            if (params._logo_background == "none") {
                li = c.createElement("style");
                if (li) {
                    styles = "#" + id + " a { display: none; } ";
                }
            } else {
                //styles = "#"+id+" a, #"+id+" a:hover {\r\nposition: absolute;\r\ntop: 0;\r\nleft: 100%;\r\nwidth: 4.2em;\r\nheight: 1.5em;\r\nline-height: 1.5em;\r\n";
                //styles += "margin: 0 0 0 1.5em;\r\nfont-size: 10px;\r\nfont-family: Arial;\r\nfont-weight: normal;\r\ntext-align: center;\r\ntext-decoration: none;\r\n";
                styles = "#" + id + " a {\r\nposition: absolute; right: 4px;  font-size: 9px;  line-height: 1em;  opacity: 0.5;  z-index: 100;\r\n";

                if (params._logo_textcolor) {
                    styles += "color: " + hex_to_rgba(params._logo_textcolor, '0.5') + "!important;\r\n";
                } else {
                    styles += "color: " + hex_to_rgba(params.btn_textcolor, '0.5') + "!important;\r\n";
                }
                // if (params._logo_background) {
                //     styles += "background: " + hex_to_rgba(params._logo_background, '0.4') + "!important;\r\n";
                // } else {
                //     styles += "background: " + hex_to_rgba(params.btn_background, '0.4') + "!important;\r\n";
                // }
                //styles += "border: none; -webkit-transform: rotate(90deg);\r\n-ms-transform: rotate(90deg);\r\ntransform: rotate(90deg);\r\n";
                //styles += "-webkit-transform-origin: 0% 0%;\r\n-ms-transform-origin: 0% 0%;\r\ntransform-origin: 0% 0%;\r\nz-index: 1101;}\r\n#"+id+" a:hover {\r\n";
                if (params._logo_textcolor) {
                    styles += "color: " + hex_to_rgba(params._logo_textcolor, '1') + "!important;\r\n";
                } else {
                    styles += "color: " + hex_to_rgba(params.btn_background, '1') + "!important;\r\n";
                }
                // if (params._logo_background) {
                //     styles += "background: " + hex_to_rgba(params._logo_background, '0.8') + "!important;\r\n}";
                // } else {
                //     styles += "background: " + hex_to_rgba(params.btn_background, '0.8') + "!important;\r\n}";
                // }
                styles += "transition: color .3s ease;\r\n";
                styles += "background: transparent !important;\r\n}";
                styles += "\r\n#" + id + " a:hover {\r\nopacity: 1;\r\n}";
                styles += "\r\n#" + id + " a:hover {\r\nopacity: 1;\r\n}";

                // module popup styles
                styles += "\r\n.bnovo_loading #booking_iframe{opacity:0}.bnovo_loading #bnovo_link{display:none}.bnovo_loading .bnovo_loading-spinner{display:block}.bnovo_loading-spinner{display:none;width:50px;height:50px;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1011}.bnovo_loading-spinner:after{content:' ';display:block;width:50px;height:50px;border-radius:50%;border:3px solid #fff;border-color:#fff transparent;animation:lds-dual-ring 1.2s linear infinite;opacity:.8}@keyframes lds-dual-ring{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.bnovo_module_overlay{content:'';position:fixed;top:0;right:0;bottom:0;left:0;backdrop-filter:blur(3px);background:rgba(0,0,0,.9);z-index:1000000;overflow:hidden}.bnovo_module_overlay__container{max-width:1320px;position:relative;width:100%;margin-bottom:auto;z-index: 1012;}.bnovo_module_overlay__block{overflow:auto;height:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;margin:24px auto 0;padding:0 24px}.bnovo_module_overlay:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;background:transparent url(https://online.bnovo.ru//public/img_v2/layout/primaryLayout_login.svg) no-repeat;pointer-events:none;z-index:-1;opacity:.03;background-size:contain}.bnovo_module_overlay__close{z-index: 1013!important;position:absolute;right:calc(50% - (1320px / 2) - 17px);top:8px;width:32px;height:32px;content:' ';cursor:pointer;border-radius:50%;transition:all .4s ease;z-index:1;background:#bcbcbc;box-shadow:-2px 1px 9px rgba(0,0,0,.4)}.bnovo_module_overlay__close:hover{transform:rotate(180deg);background:#fff}.bnovo_module_overlay__close:after,.bnovo_module_overlay__close:before,.bnovo_module_overlay__close:hover:after,.bnovo_module_overlay__close:hover:before{background-color:#000;position:absolute;left:15px;content:' ';height:18px;width:2px;top:7px}.bnovo_module_overlay__close:before{transform:rotate(45deg)}.bnovo_module_overlay__close:after{transform:rotate(-45deg)}@media only screen and (max-width:1400px){.bnovo_module_overlay__container{margin-top:0}.bnovo_module_overlay__block{padding:0 16px}.bnovo_module_overlay__close{right:8px;top:8px}}@media only screen and (max-width:980px){.bnovo_module_overlay__container{margin-top:0}.bnovo_module_overlay__close{right:2px;top:6px}.bnovo_module_overlay__block{margin:24px auto 0;padding:0 16px}}.no-scroll{overflow:hidden!important}\r\n";
            }
            jQuery(li).prepend(styles);
            document.getElementsByTagName('head')[0].appendChild(li);
        }
        var df = c.createElement("div"),
            g = {style: "clear:both; overflow: visible; position: relative; z-index: 1011"},
            h,
            wid = parseInt(params.width),
            widwid = (params.width.substr(params.width.length - 1) == "%") ? (wid + "%") : (wid + "px");
        widfr = (params.width.substr(params.width.length - 1) == "%") ? ("100%") : (wid);

        for (h in g) {
            df.setAttribute(h, g[h]);
        }
        el.setAttribute("style", "width: " + widwid + "; margin: 0 auto; position: relative;");
        jQuery(el).prepend(df);

        var f = c.createElement("iframe");
        g = {
            id: "_bn_iframe_" + id,
            name: "_bn_iframe_" + id,
            style: "z-index: 101; margin: 0;",
            frameborder: "0",
            border: "0",
            allowtransparency: "yes",
            height: "0",
            scrolling: "no",
            width: widfr
        };

        for (h in g) {
            f.setAttribute(h, g[h]);
            //jQuery.f.css(h, g[h]);
        }

        df.appendChild(f);
        window.addEventListener('message', function (event) {
            if (event.data.event === "bnovowidget_signal") {
                const $body = jQuery("body");
                const availableParams = [
                    'adults',
                    'children',
                    'currency',
                    'dfrom',
                    'dto',
                    'lang',
                    'onlyrooms',
                    'promoCode',
                    'uid',
                    'servicemode',
                    'firstroom',
                    'radius',
                    'utm_source',
                    'utm_medium',
                    'utm_campaign',
                    'utm_term',
                    'utm_content',
                ];

                // collect params for booking iframe
                let params = {
                    html_id: 'bnovo_module_overlay__booking_iframe',
                    height: 'auto',
                    width: '100%',
                    scroll_to_rooms: 1,
                    scrolling_container_selector: '.bnovo_module_overlay__block',
                    scrolling_element_selector: '.bnovo_module_overlay__container',
                    IsMobile: 0,
                    insidePopup: 1,
                };
                for (key in event.data.params) {
                    if (availableParams.includes(key)) {
                        if (key === 'onlyrooms') {
                            params['rooms'] = event.data.params[key]
                        } else {
                            params[key] = event.data.params[key]
                        }
                    }
                }

                // block body scrolling
                $body.addClass('no-scroll');

                // remove previous calls' popup container
                if (jQuery(".bnovo_module_overlay").length) {
                    jQuery(".bnovo_module_overlay").remove();
                }

                // create new iframe container
                let div = document.createElement("div");  // Create with DOM
                div.innerHTML = `
                    <div class="bnovo_module_overlay__close"></div>
                    <div class="bnovo_module_overlay__block bnovo_loading">
                        <div class="bnovo_loading-spinner"></div>
                        <div class="bnovo_module_overlay__container">
                            <div id="bnovo_module_overlay__booking_iframe" style="padding-bottom: 32px;position: relative;">
                                <div id="bn_iframe" style='position: absolute;right: 0;margin-top: 12px;font-family: "Proxima nova", "Helvetica Neue", "Cera Pro Medium", Arial, Helvetica, sans-serif;font-size: 12px;line-height: 1em;opacity: 0.5;z-index: 3;bottom:-12px;'>
                                    <div style='color: #1403FC !important; background: rgba(0, 0, 0, 0) !important;'>
                                        <a style='color: #fff !important;' href="http://bnovo.ru/" id="bnovo_link" target="_blank">Система управления отелем Bnovo ©</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <script type="text/javascript">var BookingPopupFrame = new BookingIframe(${JSON.stringify(params)});</script>
                `;
                div.classList.add('bnovo_module_overlay');
                div.style.display = 'none';
                $body.append(div);

                // init and show booking popup
                if (BookingPopupFrame) {
                    BookingPopupFrame.init();
                    if (event.data.params.radius && +event.data.params.radius > 0) {
                        jQuery("#bnovo_module_overlay__booking_iframe_iframe").css("border-radius", `${event.data.params.radius}px`);
                    }

                    jQuery(".bnovo_module_overlay").fadeIn("slow");

                    document.addEventListener("bnovo_iframe_loaded", function (event) {
                        setTimeout(() => {
                            jQuery(".bnovo_module_overlay__block").removeClass("bnovo_loading");
                        }, 600);
                    });
                    $body.on('click', '.bnovo_module_overlay__close', function (e) {
                        $body.removeClass('no-scroll');
                        jQuery(".bnovo_module_overlay").fadeOut("slow");
                    });
                } else {
                    console.warn("BookingPopupFrame is undefined")
                }
            }
        }, false);
        var src = DOMAIN + "/widget/?" + jQuery.param(params);
        if (is_secure()) src += '&_ssl=1';
        jQuery.ajaxSetup({
            cache: true
        });
        jQuery.getScript(src, function () {
            var fc = decode_utf8(jQuery.base64.decode(_bnovo_widget));
            // TODO: get rid of jQuery.base64
            // var fc = decode_utf8(atob(_bnovo_widget));
            var i = fc.document;
            f.contentDocument ? i = f.contentDocument : f.contentWindow && (i = f.contentWindow.document);
            i.open();
            i.write(fc);
            i.close();
        });
    }

    function decode_utf8(s) {
        return decodeURIComponent(escape(s));
    }

    function attempt(fn) {
        try {
            return fn();
        } catch (e) {
            if (window.console && window.console.log && window.console.log.apply) {
                window.console.log("Bnovo_Widget Error: ", e);
            }
        }
    }

    var Bnovo_Widget = {
        init: function (callback) {
            attempt(function () {
                return init(callback);
            });
        },
        open: function (id, params) {
            attempt(function () {
                return gogo(id, params);
            });
        }
    }

    window.Bnovo_Widget = Bnovo_Widget;

}(this.window || this));

window.topForLink = function (top) {
    var bnovo_link = document.getElementById('_bnovo_link_');
    if (bnovo_link) {
        bnovo_link.style.top = (top + 3) + 'px';
    }
}

function check_bn_form() {
    const widget_type = $('#type').val();
    const no_validate = $('#no_validate').val();
    if (!no_validate) {
        if (widget_type && ['vertical', 'horizontal'].includes(widget_type)) {
            if (!$('#uid').val() || $('#uid').val() === '') {
                $('#uid').closest(".ch_row").addClass('error');
                $('.accordion li').removeClass("accordion--current");
                $('li[data-form-group="main"]').addClass("accordion--current");
                return false;
            }
        }
        if (widget_type && ['select', 'horselect'].includes(widget_type)) {
            if (!$('#select_list').val() || $('#select_list').val() === '') {
                $('#select_list').closest(".ch_row").addClass('error');
                $('.accordion li').removeClass("accordion--current");
                $('li[data-form-group="main"]').addClass("accordion--current");
                return false;
            }
        }
    }

    return true;
}
