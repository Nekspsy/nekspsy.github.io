/*
 * jQuery mmenu screenReader add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(i){var t="mmenu",n="screenReader";i[t].addons[n]={setup:function(){var a=this,h=this.opts[n],o=this.conf[n];s=i[t].glbl,"boolean"==typeof h&&(h={aria:h,text:h}),"object"!=typeof h&&(h={}),h=this.opts[n]=i.extend(!0,{},i[t].defaults[n],h),h.aria&&(this.bind("initAddons:after",function(){this.bind("initMenu:after",function(){this.trigger("initMenu:after:sr-aria")}),this.bind("initNavbar:after",function(){this.trigger("initNavbar:after:sr-aria",arguments[0])}),this.bind("openPanel:start",function(){this.trigger("openPanel:start:sr-aria",arguments[0])}),this.bind("close:start",function(){this.trigger("close:start:sr-aria")}),this.bind("close:finish",function(){this.trigger("close:finish:sr-aria")}),this.bind("open:start",function(){this.trigger("open:start:sr-aria")}),this.bind("open:finish",function(){this.trigger("open:finish:sr-aria")})}),this.bind("updateListview",function(){this.$pnls.find("."+e.listview).children().each(function(){a.__sr_aria(i(this),"hidden",i(this).is("."+e.hidden))})}),this.bind("openPanel:start",function(i){var t=this.$menu.find("."+e.panel).not(i).not(i.parents("."+e.panel)),n=i.add(i.find("."+e.vertical+"."+e.opened).children("."+e.panel));this.__sr_aria(t,"hidden",!0),this.__sr_aria(n,"hidden",!1)}),this.bind("closePanel",function(i){this.__sr_aria(i,"hidden",!0)}),this.bind("initPanels:after",function(t){var n=t.find("."+e.prev+", ."+e.next).each(function(){a.__sr_aria(i(this),"owns",i(this).attr("href").replace("#",""))});this.__sr_aria(n,"haspopup",!0)}),this.bind("initNavbar:after",function(i){var t=i.children("."+e.navbar);this.__sr_aria(t,"hidden",!i.hasClass(e.hasnavbar))}),h.text&&(this.bind("initlistview:after",function(i){var t=i.find("."+e.listview).find("."+e.fullsubopen).parent().children("span");this.__sr_aria(t,"hidden",!0)}),"parent"==this.opts.navbar.titleLink&&this.bind("initNavbar:after",function(i){var t=i.children("."+e.navbar),n=!!t.children("."+e.prev).length;this.__sr_aria(t.children("."+e.title),"hidden",n)}))),h.text&&(this.bind("initAddons:after",function(){this.bind("setPage:after",function(){this.trigger("setPage:after:sr-text",arguments[0])})}),this.bind("initNavbar:after",function(n){var r=n.children("."+e.navbar),a=r.children("."+e.title).text(),s=i[t].i18n(o.text.closeSubmenu);a&&(s+=" ("+a+")"),r.children("."+e.prev).html(this.__sr_text(s))}),this.bind("initListview:after",function(n){var s=n.data(r.parent);if(s&&s.length){var h=s.children("."+e.next),d=h.nextAll("span, a").first().text(),f=i[t].i18n(o.text[h.parent().is("."+e.vertical)?"toggleSubmenu":"openSubmenu"]);d&&(f+=" ("+d+")"),h.html(a.__sr_text(f))}}))},add:function(){e=i[t]._c,r=i[t]._d,a=i[t]._e,e.add("sronly")},clickAnchor:function(i,t){}},i[t].defaults[n]={aria:!0,text:!0},i[t].configuration[n]={text:{closeMenu:"Close menu",closeSubmenu:"Close submenu",openSubmenu:"Open submenu",toggleSubmenu:"Toggle submenu"}},i[t].prototype.__sr_aria=function(i,t,n){i.prop("aria-"+t,n)[n?"attr":"removeAttr"]("aria-"+t,n)},i[t].prototype.__sr_text=function(i){return'<span class="'+e.sronly+'">'+i+"</span>"};var e,r,a,s}(jQuery);