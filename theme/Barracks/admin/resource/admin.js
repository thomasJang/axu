/**
 * Barracks-2 v0.2
 * 2014.12.26 tom : mobile > ax-scroll-top 추가
 */

var topMenu_data = [
    {_id: "m01", label: "대시보드", url: "index.html"},
    {
        _id: "m02", label: "<span>상품관리</span>", url: "content.html", cn: [
        {_id: "m0201", label: "상품관리 서브 A", url: "#ax"},
        {
            _id: "m0202", label: "<span>상품관리 서브 B</span>", url: "#ax", cn: [
            {_id: "m020201", label: "상품관리 서브 B > A", url: "content.html"},
            {_id: "m020202", label: "상품관리 서브 B > B", url: "content.html"},
            {_id: "m020201", label: "상품관리 서브 B > C", url: "content.html"},
            {_id: "m020202", label: "상품관리 서브 B > D", url: "content.html"},
            {_id: "m020203", label: "상품관리 서브 B > E", url: "content.html"}
        ]
        },
        {_id: "m0203", label: "상품관리 서브 C", url: "content.html"}
    ]
    },
    {
        _id: "m03", label: "주문/배송관리", url: "content-1.html", cn: [
        {_id: "m0301", label: "주문관리 서브 A", url: "#ax"},
        {_id: "m0302", label: "주문관리 서브 B", url: "#ax"},
        {
            _id: "m0303", label: "배송관리 서브 A", url: "content-1.html", cn: [
            {_id: "m030301", label: "배송관리 서브 A > A", url: "content-1.html"},
            {_id: "m030302", label: "배송관리 서브 A > B", url: "content-1.html"},
            {_id: "m030301", label: "배송관리 서브 A > C", url: "content-1.html"},
            {_id: "m030302", label: "배송관리 서브 A > D", url: "content-1.html"},
            {_id: "m030303", label: "배송관리 서브 A > E", url: "content-1.html"}
        ]
        }
    ]
    },
    {_id: "m04", label: "정산관리", url: "content-2.html"},
    {_id: "m05", label: "판매자 정보 관리", url: "content.html"},
    {_id: "m06", label: "공지사항", url: "content.html"},
    {_id: "m07", label: "통계", url: "content.html"}
];

var sideMenu_data = [
    {_id: "m01", label: '<i class="axi axi-windows"></i> 대시보드', url: "index.html", target: "_self"},
    {_id: "m02", label: '<i class="axi axi-asterisk"></i> 상품관리', url: "content.html", target: "_self"},
    {_id: "m03", label: '<i class="axi axi-columns"></i> 주문/배송관리', url: "content-1.html", target: "_self"},
    {_id: "m04", label: '<i class="axi axi-pagelines"></i> 정산관리', url: "content-2.html", target: "_self"},
    {_id: "m05", label: '<i class="axi axi-sitemap"></i> 사이드메뉴 C', url: "content.html", target: "_self"},
    {_id: "m06", label: '<i class="axi axi-archive"></i> 사이드메뉴 D', url: "content.html", target: "_self"},
    {_id: "m07", label: '<i class="axi axi-line-chart"></i> 사이드메뉴 E', url: "content.html", target: "_self"}
];

var topMenu = new AXTopDownMenu();
var mobileMenu = new AXMobileMenu();
var loginInfoModal = new AXMobileModal();
var fcObj = {
    pageStart: function () {

        // ax-header가 존재 하는 경우
        if (jQuery(".ax-header").get(0)) {
            fcObj.bindEvent();
            fcObj.bindTopMenu();
            fcObj.bindSideMenu();
        }

        try {
            fnObj.pageStart();
        } catch (e) {

        }
        this.theme.init();
    },
    pageResize: function () {
        fcObj.setAsideMenu();
    },
    setAsideMenu: function () {
        if (!jQuery(".ax-aside").get(0)) return;

        if (!jQuery(".ax-aside-box").data("status")) {
            if (axf.clientWidth() <= 1024 && axf.clientWidth() >= 767) {
                jQuery(".ax-aside-menu").addClass("on");
                jQuery(".ax-aside-box").hide();
            } else if (axf.clientWidth() > 1024) {
                jQuery(".ax-aside-menu").removeClass("on");
                jQuery(".ax-aside-box").show();
            }
        }
    },
    bindEvent: function () {
        fcObj.setAsideMenu();

        axdom(".AXCheckbox").find("input").bind("click", function () {
            if (this.checked)this.checked = true; else this.checked = false;
            if (jQuery(this).parent().hasClass("checked")) jQuery(this).parent().removeClass("checked");
            else jQuery(this).parent().addClass("checked");
        });

        axdom(".ax-aside-menu").bind("click", function () {
            var elem = jQuery(".ax-aside-box");
            elem.toggle();
            if (elem.css('display') == 'none') {
                elem.data("status", "open");
                jQuery(".ax-content").addClass("expand");
                jQuery(".ax-aside-menu").addClass("on");
            } else {
                elem.data("status", "close");
                jQuery(".ax-content").removeClass("expand");
                jQuery(".ax-aside-menu").removeClass("on");
            }
            axdom(window).resize();
        });
    },
    bindTopMenu: function () {
        topMenu.setConfig({
            targetID: "ax-top-menu",
            parentMenu: {
                className: "parentMenu"
            },
            childMenu: {
                className: "childMenu",
                hasChildClassName: "expand", // script 방식에서만 지원 됩니다.
                align: "center",
                valign: "top",
                margin: {top: 0, left: 0},
                arrowClassName: "varrow2",
                arrowMargin: {top: 1, left: 0}
            },
            childsMenu: {
                className: "childsMenu",
                hasChildClassName: "expand",
                align: "left",
                valign: "top",
                margin: {top: -4, left: 0},
                arrowClassName: "harrow",
                arrowMargin: {top: 13, left: 1}
            },
            onComplete: function () {
                if (window.page_menu_id) topMenu.setHighLightOriginID(window.page_menu_id);
            }
        });
        topMenu.setTree(topMenu_data);


        axdom("#mx-top-menu-handle").bind("click", function () {
            mobileMenu.open();
        });

        mobileMenu.setConfig({
            reserveKeys: {
                primaryKey: "parent_srl",
                labelKey: "label",
                urlKey: "link",
                targetKey: "target",
                addClassKey: "ac",
                subMenuKey: "cn"
            },
            onclick: function () { // 메뉴 클릭 이벤트
                mobileMenu.close();
                location.href = this.url;
            }
        });
        mobileMenu.setTree(topMenu_data);


        loginInfoModal.setConfig({
            width: 300, height: 160,
            head: {
                close: {
                    onclick: function () {

                    }
                }
            },
            onclose: function () {
                trace("close bind");
            }
        });
        axdom("#mx-loginfo-handle").bind("click", function () {
            var obj = loginInfoModal.open();
            obj.modalHead.html('<div class="modal-log-info-title">Login Info</div>');
            obj.modalBody.html('<div class="modal-log-info-wrap"><ul class="ax-loginfo">' + axdom("#ax-loginfo").html() + '</ul><div style="clear:both;"></div></div>');
        });

    },
    bindSideMenu: function () {
        var po = [], _target = axdom("#ax-aside-ul");
        var active_menu_id = window.page_menu_id;
        for (var mi = 0; mi < sideMenu_data.length; mi++) {
            po.push('<li><a href="' + sideMenu_data[mi].url + '" target="' + sideMenu_data[mi].target + '" ');
            if(active_menu_id == sideMenu_data[mi]._id) po.push(' class="active"');
            po.push('>');
            po.push(sideMenu_data[mi].label);
            po.push('</a></li>')
        }
        _target.empty();
        _target.append(po.join(''));
    },

    theme: {
        sel: null,
        init: function () {
            var themes = [
                ["cocker", "cocker"],
                ["cocker-dark", "bulldog"],
                ["cocker-dark-red", "cocker"],
                ["cacao", "kakao"],
                ["cacao-dark", "kakao"]
            ];
            var po = [];
            $.each(themes, function () {
                po.push('<option value="', this[0], '/', this[1], '">', this[0], '</option>');
            });
            fcObj.theme.sel = jQuery("#theme-select");
            fcObj.theme.sel.html(po.join(''));

            var _theme;
            if ((_theme = axf.getCookie("axutheme"))) {
                fcObj.theme.sel.val(_theme);
                fcObj.theme.change(_theme);
            }
            fcObj.theme.sel.bind("change", function (e) {
                fcObj.theme.change(e.target.value);
            });
        },
        change: function (theme) {
            var t = theme.split("/");
            jQuery("#axu-theme-admin").attr("href", "ui/" + t[0] + "/admin.css");
            jQuery("#axu-theme-axisj").attr("href", "http://cdno.axisj.com/axisj/ui/" + t[1] + "/AXJ.min.css?v=" + axf.timekey());
            axf.setCookie("axutheme", theme);
        }
    }
};

jQuery(document.body).ready(function () {
    fcObj.pageStart()
});
jQuery(window).resize(function () {
    fcObj.pageResize();
});

// 2014-12-26 AXU, admin.js add script
jQuery(document.body).ready(function () {
    jQuery(document.body).append('<div class="ax-scroll-top"><a href="javascript:window.scroll(0, 0);"><i class="axi axi-ion-arrow-up-c"></i> TOP</a></div>');
    window.scroll_top_handle = jQuery(".ax-scroll-top");
});

jQuery(window).bind("scroll", function () {
    if (jQuery(document.body).scrollTop() > 60) {
        window.scroll_top_handle.addClass("on");
    } else {
        window.scroll_top_handle.removeClass("on");
    }
});