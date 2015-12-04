
var svrAds = "http://125.76.225.7:9200/Aers.svc/";
(function($) {
    $.extend({
        GetMth: function(_adparam, _moSucceeded, _moFailed) {
            $.ajax({
                type: "GET",
                url: svrAds + _adparam,
                contentType: "application/jsonp; charset=utf-8",
                dataType: "json",
                processdata: false,
                success: function(msg) {
                    _moSucceeded(msg)
                },
                error: function(msg) {
                    _moSucceeded(msg)
                }
            })
        },
        PostMth: function(_adparam, _adata, _moSucceeded, _moFailed) {
            $.ajax({
                type: "POST",
                url: svrAds + _adparam,
                contentType: "application/json; charset=utf-8",
                data: _adata,
                success: function(msg) {
                    _moSucceeded(msg)
                },
                error: function(msg) {
                    _moFailed(msg)
                }
            })
        },
        DateToStr: function(str) {
            var dt = new Date();
            if (str != '')
                dt = new Date(str.replace(new RegExp('-', 'g'), "/"));
            return "\/Date(" + dt.getTime() + "+0800)\/"
        },
        LeftPad: function pad(num, n) {
            return Array(n > num ? (n - ('' + num).length + 1) : 0).join(0) + num;
        },
        StrToDate: function(time, format) {
            var t = new Date(parseInt(time.replace("\/Date(", "").replace("+0800)\/", "")));
            var tf = function(i) {
                return (i < 10 ? '0' : '') + i
            };
            return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a) {
                switch (a) {
                    case 'yyyy':
                        return tf(t.getFullYear());
                        break;
                    case 'MM':
                        return tf(t.getMonth() + 1);
                        break;
                    case 'mm':
                        return tf(t.getMinutes());
                        break;
                    case 'dd':
                        return tf(t.getDate());
                        break;
                    case 'HH':
                        return tf(t.getHours());
                        break;
                    case 'ss':
                        return tf(t.getSeconds());
                        break;
                }
            })
        },
        modal: function(c, t, s) {
            var $modal = $("#buzzly-modal");
            if ($modal)
                $modal.remove();
            if (typeof t == 'undefined')
                t = '';
            if (typeof s == 'undefined')
                s = 1;
            $(document.body).append('<div class="am-modal am-modal-no-btn" tabindex="-1" id="buzzly-modal"><div class="am-modal-dialog"><div class="am-modal-hd">' + t + '<a href="javascript: void(0)" class="am-close am-close-spin" data-am-modal-close>&times;</a></div><div class="am-modal-bd">' + c + '</div></div></div>');
            var $modal = $("#buzzly-modal");
            $modal.modal({
                closeViaDimmer: s
            });
        },
        confirm: function(c, t, s, f) {
            var $confirm = $("#buzzly-confirm");
            if ($confirm)
                $confirm.remove();
            if (typeof t == 'undefined' || t == null)
                t = '';
            var _conhtml = '<div class="am-modal am-modal-confirm" tabindex="-1" id="buzzly-confirm"><div class="am-modal-dialog"><div class="am-modal-hd">' + t + '</div><div class="am-modal-bd">' + c + '</div><div class="am-modal-footer"><span class="am-modal-btn bl-modal-cancel" data-am-modal-cancel>取消</span><span class="am-modal-btn" data-am-modal-confirm>确定</span></div></div></div>';
            if (typeof f == 'undefined' || f == null)
                _conhtml = '<div class="am-modal am-modal-confirm" tabindex="-1" id="buzzly-confirm"><div class="am-modal-dialog"><div class="am-modal-hd">' + t + '</div><div class="am-modal-bd">' + c + '</div><div class="am-modal-footer"><span class="am-modal-btn" data-am-modal-confirm>确定</span></div></div></div>';
            $(document.body).append(_conhtml);
            var $confirm = $("#buzzly-confirm");
            $confirm.modal({
                closeViaDimmer: 0,
                relatedTarget: this,
                onConfirm: function() {
                    s();
                },
                // closeOnConfirm: false,
                onCancel: function() {
                    if (typeof f != 'undefined' && f != null)
                        f();
                }
            });
        },
        popup: function(t, c) {
            var $popup = $("#buzzly-popup");
            if ($popup)
                $popup.remove();
            $(document.body).append('<div class="am-popup" id="buzzly-popup"><div class="am-popup-inner"><div class="am-popup-hd"><h4 class="am-popup-title">' + t + '</h4><span data-am-modal-close class="am-close">&times;</span></div><div class="am-popup-bd am-scrollable-vertical" style="height:585px;">' + c + '</div></div></div> ');
            var $popup = $("#buzzly-popup");
            $popup.modal({
                closeViaDimmer: 0
            });
        },
        loading: function(s) {
            var $loading = $("#buzzly-loading");
            if ($loading)
                $loading.remove();
            if (typeof s == 'undefined' || s == null)
                s = "正在载入";
            $(document.body).append('<div class="am-modal am-modal-loading am-modal-no-btn" tabindex="-1" id="buzzly-loading"><div class="am-modal-dialog"><div class="am-modal-hd">' + s + '...</div><div class="am-modal-bd"><span class="am-icon-spinner am-icon-spin"></span></div></div></div>');
            var $loading = $("#buzzly-loading");
            //$loading.modal();
            return $("#buzzly-loading");
        },
        GetDateNow: function() {
            return "\/Date(" + new Date().getTime() + "+0800)\/"
        }
    })
})(jQuery);
/*(function($) {
    $.extend({
        CallSvrAjaxPostMth: function(_adparam, _adata, _moSucceeded, _moFailed) {
            $.ajax({
                type: "POST",
                url: svrAds + _adparam,
                contentType: "application/json; charset=utf-8",
                data: _adata,
                success: function(msg) {
                    _moSucceeded(msg)
                },
                error: function(msg) {
                    _moFailed(msg)
                }
            })
        },
    })
})(jQuery);*/
