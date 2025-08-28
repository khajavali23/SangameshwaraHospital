! function(e) {
    "use strict";

    function t(t) {
        e(t).length > 0 && e(t).each((function() {
            var t = e(this).find("a");
            e(this).find(t).each((function() {
                e(this).on("click", (function() {
                    var t = e(this.getAttribute("href"));
                    t.length && (event.preventDefault(), e("html, body").stop().animate({
                        scrollTop: t.offset().top - 10
                    }, 1e3))
                }))
            }))
        }))
    }
    if (e(window).on("load", (function() {
            e(".preloader").fadeOut()
        })), e(".preloader").length > 0 && e(".preloaderCls").each((function() {
            e(this).on("click", (function(t) {
                t.preventDefault(), e(".preloader").css("display", "none")
            }))
        })), e(".nice-select").length && e(".nice-select").niceSelect(), e.fn.thmobilemenu = function(t) {
            var a = e.extend({
                menuToggleBtn: ".th-menu-toggle",
                bodyToggleClass: "th-body-visible",
                subMenuClass: "th-submenu",
                subMenuParent: "th-item-has-children",
                subMenuParentToggle: "th-active",
                meanExpandClass: "th-mean-expand",
                appendElement: '<span class="th-mean-expand"></span>',
                subMenuToggleClass: "th-open",
                toggleSpeed: 400
            }, t);
            return this.each((function() {
                var t = e(this);

                function n() {
                    t.toggleClass(a.bodyToggleClass);
                    var n = "." + a.subMenuClass;
                    e(n).each((function() {
                        e(this).hasClass(a.subMenuToggleClass) && (e(this).removeClass(a.subMenuToggleClass), e(this).css("display", "none"), e(this).parent().removeClass(a.subMenuParentToggle))
                    }))
                }
                t.find("li").each((function() {
                    var t = e(this).find("ul");
                    t.addClass(a.subMenuClass), t.css("display", "none"), t.parent().addClass(a.subMenuParent), t.prev("a").append(a.appendElement), t.next("a").append(a.appendElement)
                }));
                var s = "." + a.meanExpandClass;
                e(s).each((function() {
                    e(this).on("click", (function(t) {
                        var n;
                        t.preventDefault(), n = e(this).parent(), e(n).next("ul").length > 0 ? (e(n).parent().toggleClass(a.subMenuParentToggle), e(n).next("ul").slideToggle(a.toggleSpeed), e(n).next("ul").toggleClass(a.subMenuToggleClass)) : e(n).prev("ul").length > 0 && (e(n).parent().toggleClass(a.subMenuParentToggle), e(n).prev("ul").slideToggle(a.toggleSpeed), e(n).prev("ul").toggleClass(a.subMenuToggleClass))
                    }))
                })), e(a.menuToggleBtn).each((function() {
                    e(this).on("click", (function() {
                        n()
                    }))
                })), t.on("click", (function(e) {
                    e.stopPropagation(), n()
                })), t.find("div").on("click", (function(e) {
                    e.stopPropagation()
                }))
            }))
        }, e(".th-menu-wrapper").thmobilemenu(), e(window).scroll((function() {
            e(this).scrollTop() > 500 ? e(".sticky-wrapper").addClass("sticky") : e(".sticky-wrapper").removeClass("sticky")
        })), t(".onepage-nav"), t(".scroll-down"), e(".scroll-top")) {
        var a = document.querySelector(".scroll-top"),
            n = document.querySelector(".scroll-top path"),
            s = n.getTotalLength();
        n.style.transition = n.style.WebkitTransition = "none", n.style.strokeDasharray = s + " " + s, n.style.strokeDashoffset = s, n.getBoundingClientRect(), n.style.transition = n.style.WebkitTransition = "stroke-dashoffset 10ms linear";
        var o = function() {
            var t = e(window).scrollTop(),
                a = e(document).height() - e(window).height(),
                o = s - t * s / a;
            n.style.strokeDashoffset = o
        };
        o(), e(window).scroll(o);
        jQuery(window).on("scroll", (function() {
            jQuery(this).scrollTop() > 50 ? jQuery(a).addClass("show") : jQuery(a).removeClass("show")
        })), jQuery(a).on("click", (function(e) {
            return e.preventDefault(), jQuery("html, body").animate({
                scrollTop: 0
            }, 750), !1
        }))
    }
    e("[data-bg-src]").length > 0 && e("[data-bg-src]").each((function() {
        var t = e(this).attr("data-bg-src");
        e(this).css("background-image", "url(" + t + ")"), e(this).removeAttr("data-bg-src").addClass("background-image")
    })), e("[data-bg-color]").length > 0 && e("[data-bg-color]").each((function() {
        var t = e(this).attr("data-bg-color");
        e(this).css("background-color", t), e(this).removeAttr("data-bg-color")
    })), e("[data-border]").each((function() {
        var t = e(this).data("border");
        e(this).css("--th-border-color", t)
    })), e("[data-mask-src]").length > 0 && e("[data-mask-src]").each((function() {
        var t = e(this).attr("data-mask-src");
        e(this).css({
            "mask-image": "url(" + t + ")",
            "-webkit-mask-image": "url(" + t + ")"
        }), e(this).addClass("bg-mask"), e(this).removeAttr("data-mask-src")
    })), e(".th-slider").each((function() {
        var t = e(this),
            a = e(this).data("slider-options"),
            n = t.find(".slider-prev"),
            s = t.find(".slider-next"),
            o = t.find(".slider-pagination.pagi-number"),
            i = t.siblings(".slider-controller").find(".slider-pagination"),
            r = i.length ? i.get(0) : t.find(".slider-pagination").get(0),
            l = a.paginationType ? a.paginationType : "bullets",
            c = a.autoplay,
            d = {
                slidesPerView: 1,
                spaceBetween: a.spaceBetween ? a.spaceBetween : 24,
                loop: 0 != a.loop,
                speed: a.speed ? a.speed : 1e3,
                autoplay: c || {
                    delay: 6e3,
                    disableOnInteraction: !1
                },
                navigation: {
                    nextEl: s.get(0),
                    prevEl: n.get(0)
                },
                pagination: {
                    el: r,
                    type: l,
                    clickable: !0,
                    renderBullet: function(e, t) {
                        var a = e + 1,
                            n = a < 10 ? "0" + a : a;
                        return o.length ? '<span class="' + t + ' number">' + n + "</span>" : '<span class="' + t + '" aria-label="Go to Slide ' + n + '"></span>'
                    },
                    formatFractionCurrent: function(e) {
                        return e < 10 ? "0" + e : e
                    },
                    formatFractionTotal: function(e) {
                        return e < 10 ? "0" + e : e
                    }
                },
                on: {
                    slideChange: function() {
                        setTimeout((function() {
                            p.params.mousewheel.releaseOnEdges = !1
                        }), 500)
                    },
                    reachEnd: function() {
                        setTimeout((function() {
                            p.params.mousewheel.releaseOnEdges = !0
                        }), 750)
                    }
                }
            },
            u = JSON.parse(t.attr("data-slider-options"));
        u = e.extend({}, d, u);
        var p = new Swiper(t.get(0), u);
        p = new Swiper(t.find(".swiper-container").get(0), u);
        e(".slider-area").length > 0 && e(".slider-area").closest(".container").parent().addClass("arrow-wrap")
    })), e("[data-ani]").each((function() {
        var t = e(this).data("ani");
        e(this).addClass(t)
    })), e("[data-ani-delay]").each((function() {
        var t = e(this).data("ani-delay");
        e(this).css("animation-delay", t)
    })), e("[data-slider-prev], [data-slider-next]").on("click", (function() {
        var t = e(this).data("slider-prev") || e(this).data("slider-next"),
            a = e(t);
        if (a.length) {
            var n = a[0].swiper;
            n && (e(this).data("slider-prev") ? n.slidePrev() : n.slideNext())
        }
    })), e("#slider").on("input change", (t => {
        const a = t.target.value;
        e(".foreground-img").css("width", `${a}%`), e(".slider-button").css("left", `calc(${a}% - 18px)`)
    })), e(document).on("mouseover", ".hover-item", (function() {
        e(this).addClass("item-active"), e(".hover-item").removeClass("item-active"), e(this).addClass("item-active")
    })), e.fn.activateSliderThumbs = function(t) {
        var a = e.extend({
            sliderTab: !1,
            tabButton: ".tab-btn"
        }, t);
        return this.each((function() {
            var t = e(this),
                n = t.find(a.tabButton),
                s = e('<span class="indicator"></span>').appendTo(t),
                o = t.data("slider-tab"),
                i = e(o)[0].swiper;
            if (n.on("click", (function(t) {
                    t.preventDefault();
                    var n = e(this);
                    if (n.addClass("active").siblings().removeClass("active"), c(n), a.sliderTab) {
                        var s = n.index();
                        i.slideTo(s)
                    }
                })), a.sliderTab) {
                i.on("slideChange", (function() {
                    var e = i.realIndex,
                        t = n.eq(e);
                    t.addClass("active").siblings().removeClass("active"), c(t)
                }));
                var r = i.activeIndex,
                    l = n.eq(r);
                l.addClass("active").siblings().removeClass("active"), c(l)
            }

            function c(e) {
                var t = e.position(),
                    a = parseInt(e.css("margin-top")) || 0,
                    n = parseInt(e.css("margin-left")) || 0;
                s.css("--height-set", e.outerHeight() + "px"), s.css("--width-set", e.outerWidth() + "px"), s.css("--pos-y", t.top + a + "px"), s.css("--pos-x", t.left + n + "px")
            }
        }))
    }, e(".testi-thumb").length && e(".testi-thumb").activateSliderThumbs({
        sliderTab: !0,
        tabButton: ".tab-btn"
    }), e(".hero-thumb").length && e(".hero-thumb").activateSliderThumbs({
        sliderTab: !0,
        tabButton: ".tab-btn"
    }), e(".product-thumb").length && e(".product-thumb").activateSliderThumbs({
        sliderTab: !0,
        tabButton: ".tab-btn"
    });
    var i, r, l, c = ".ajax-contact",
        d = "is-invalid",
        u = '[name="email"]',
        p = '[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]',
        h = e(".form-messages");

    function m() {
        var t, a = e(c).serialize();
        t = function() {
            var t, a = !0;

            function n(n) {
                n = n.split(",");
                for (var s = 0; s < n.length; s++) t = c + " " + n[s], e(t).val() ? (e(t).removeClass(d), a = !0) : (e(t).addClass(d), a = !1)
            }
            n(p), e(u).val() && e(u).val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) ? (e(u).removeClass(d), a = !0) : (e(u).addClass(d), a = !1);
            return a
        }(), t && jQuery.ajax({
            url: e(c).attr("action"),
            data: a,
            type: "POST"
        }).done((function(t) {
            h.removeClass("error"), h.addClass("success"), h.text(t), e(c + ' input:not([type="submit"]),' + c + " textarea").val("")
        })).fail((function(e) {
            h.removeClass("success"), h.addClass("error"), "" !== e.responseText ? h.html(e.responseText) : h.html("Oops! An error occured and your message could not be sent.")
        }))
    }

    function g(t, a, n, s) {
        e(a).on("click", (function(a) {
            a.preventDefault(), e(t).addClass(s)
        })), e(t).on("click", (function(a) {
            a.stopPropagation(), e(t).removeClass(s)
        })), e(t + " > div").on("click", (function(a) {
            a.stopPropagation(), e(t).addClass(s)
        })), e(n).on("click", (function(a) {
            a.preventDefault(), a.stopPropagation(), e(t).removeClass(s)
        }))
    }

    function g(t, a, n, s) {
        e(a).on("click", (function(a) {
            a.preventDefault(), e(t).addClass(s)
        })), e(t).on("click", (function(a) {
            a.stopPropagation(), e(t).removeClass(s)
        })), e(t + " > div").on("click", (function(a) {
            a.stopPropagation(), e(t).addClass(s)
        })), e(n).on("click", (function(a) {
            a.preventDefault(), a.stopPropagation(), e(t).removeClass(s)
        }))
    }

    function f(t, a, n, s) {
        var o = t.text().split(a),
            i = "";
        o.length && (e(o).each((function(e, t) {
            i += '<span class="' + n + (e + 1) + '">' + t + "</span>" + s
        })), t.empty().append(i))
    }
    e(c).on("submit", (function(e) {
        e.preventDefault(), m()
    })), i = ".popup-search-box", r = ".searchClose", l = "show", e(".searchBoxToggler").on("click", (function(t) {
        t.preventDefault(), e(i).addClass(l)
    })), e(i).on("click", (function(t) {
        t.stopPropagation(), e(i).removeClass(l)
    })), e(i).find("form").on("click", (function(t) {
        t.stopPropagation(), e(i).addClass(l)
    })), e(r).on("click", (function(t) {
        t.preventDefault(), t.stopPropagation(), e(i).removeClass(l)
    })), g(".sidemenu-wrapper", ".sideMenuToggler", ".sideMenuCls", "show"), g(".shopping-cart", ".sideMenuToggler2", ".sideMenuCls", "show"), e(".popup-image").magnificPopup({
        type: "image",
        mainClass: "mfp-zoom-in",
        removalDelay: 260,
        gallery: {
            enabled: !0
        }
    }), e(".popup-video").magnificPopup({
        type: "iframe",
        mainClass: "mfp-zoom-in",
        removalDelay: 260
    }), e(".popup-content").magnificPopup({
        type: "inline",
        midClick: !0
    }), e("[data-theme-color]").length > 0 && e("[data-theme-color]").each((function() {
        var t = e(this).attr("data-theme-color");
        e(this).get(0).style.setProperty("--theme-color", t), e(this).removeAttr("data-theme-color")
    }));
    var v = {
        init: function() {
            return this.each((function() {
                f(e(this), "", "char", "")
            }))
        },
        words: function() {
            return this.each((function() {
                f(e(this), " ", "word", " ")
            }))
        },
        lines: function() {
            return this.each((function() {
                var t = "eefec303079ad17405c889e092e105b0";
                f(e(this).children("br").replaceWith(t).end(), t, "line", "")
            }))
        }
    };

    function b(e) {
        return parseInt(e, 10)
    }
    e.fn.lettering = function(t) {
        return t && v[t] ? v[t].apply(this, [].slice.call(arguments, 1)) : "letters" !== t && t ? (e.error("Method " + t + " does not exist on jQuery.lettering"), this) : v.init.apply(this, [].slice.call(arguments, 0))
    }, e(".discount-anime").lettering(), e.fn.sectionPosition = function(t, a) {
        e(this).each((function() {
            var n, s, o, i, r, l = e(this);
            n = Math.floor(l.height() / 2), s = l.attr(t), o = l.attr(a), i = b(e(o).css("padding-top")), r = b(e(o).css("padding-bottom")), "top-half" === s ? (e(o).css("padding-bottom", r + n + "px"), l.css("margin-top", "-" + n + "px")) : "bottom-half" === s && (e(o).css("padding-top", i + n + "px"), l.css("margin-bottom", "-" + n + "px"))
        }))
    };
    var y = "[data-sec-pos]";
    e(y).length && e(y).imagesLoaded((function() {
        e(y).sectionPosition("data-sec-pos", "data-pos-for")
    })), e(".filter-active").imagesLoaded((function() {
        var t = ".filter-active",
            a = ".filter-menu-active";
        if (e(t).length > 0) {
            var n = e(t).isotope({
                itemSelector: ".filter-item",
                filter: "*",
                masonry: {
                    columnWidth: 1
                }
            });
            e(a).on("click", "button", (function() {
                var t = e(this).attr("data-filter");
                n.isotope({
                    filter: t
                })
            })), e(a).on("click", "button", (function(t) {
                t.preventDefault(), e(this).addClass("active"), e(this).siblings(".active").removeClass("active")
            }))
        }
        e(".load-more-btn").on("click", (function() {
            var a = e(this).find("i");
            a.addClass("fa-spin-pulse"), setTimeout((function() {
                a.removeClass("fa-spin-pulse")
            }), 1e3);
            var n = e(this);
            setTimeout((function() {
                var a = n.prev(".load-more-active");
                0 === a.length && (a = n.closest(".container").find(".load-more-active")), a.find(".load-more.d-none, .accordion-card.style2.d-none, .filter-item.d-none").removeClass("d-none");
                e(t).isotope({
                    filter: "*"
                })
            }), 700)
        }))
    })), e(".masonary-active").imagesLoaded((function() {
        var t = ".masonary-active";
        e(t).length > 0 && e(t).isotope({
            itemSelector: ".filter-item",
            filter: "*",
            masonry: {
                columnWidth: 1
            }
        })
    })), e(".masonary-active, .woocommerce-Reviews .comment-list").imagesLoaded((function() {
        var t = ".masonary-active, .woocommerce-Reviews .comment-list";
        e(t).length > 0 && e(t).isotope({
            itemSelector: ".filter-item, .woocommerce-Reviews .comment-list li",
            filter: "*",
            masonry: {
                columnWidth: 1
            }
        }), e('[data-bs-toggle="tab"]').on("shown.bs.tab", (function(a) {
            e(t).isotope({
                filter: "*"
            })
        }))
    })), e(".counter-number").counterUp({
        delay: 10,
        time: 1e3
    }), e.fn.shapeMockup = function() {
        e(this).each((function() {
            var t = e(this),
                a = t.data("top"),
                n = t.data("right"),
                s = t.data("bottom"),
                o = t.data("left");
            t.css({
                top: a,
                right: n,
                bottom: s,
                left: o
            }).removeAttr("data-top").removeAttr("data-right").removeAttr("data-bottom").removeAttr("data-left").parent().addClass("shape-mockup-wrap")
        }))
    }, e(".shape-mockup") && e(".shape-mockup").shapeMockup(), e.fn.shapeMockup2 = function() {
        e(this).each((function() {
            var t = e(this),
                a = t.data("top"),
                n = t.data("right"),
                s = t.data("bottom"),
                o = t.data("left");
            t.css({
                top: a,
                right: n,
                bottom: s,
                left: o
            }).removeAttr("data-top").removeAttr("data-right").removeAttr("data-bottom").removeAttr("data-left").parent().addClass("shape-mockup-wrap2")
        }))
    }, e(".shape-mockup2") && e(".shape-mockup2").shapeMockup2(), e(".price_slider").slider({
        range: !0,
        min: 10,
        max: 100,
        values: [10, 75],
        slide: function(t, a) {
            e(".from").text("$" + a.values[0]), e(".to").text("$" + a.values[1])
        }
    }), e(".from").text("$" + e(".price_slider").slider("values", 0)), e(".to").text("$" + e(".price_slider").slider("values", 1)), e(".progress-bar").waypoint((function() {
        e(".progress-bar").css({
            animation: "animate-positive 1.8s",
            opacity: "1"
        })
    }), {
        offset: "75%"
    });
    const C = e(".panorama-img");
    if (C.length > 0) {
        const t = e(".image-container"),
            a = new PANOLENS.Viewer({
                container: t.get(0),
                autoRotate: !0,
                autoRotateSpeed: .5,
                controlBar: !1
            });
        C.each((function() {
            const t = e(this).attr("src"),
                n = new PANOLENS.ImagePanorama(t);
            a.add(n)
        }))
    }
    e(".th-screen").length && e(window).on("scroll", (function() {
        ! function(t, a = 0) {
            var n = e(window).scrollTop(),
                s = n + e(window).height(),
                o = e(t).offset().top;
            return o + e(t).height() - parseInt(a) <= s && o >= n
        }(".th-screen", 200) ? e(".th-screen").removeClass("th-visible"): e(".th-screen").addClass("th-visible")
    })), e("#ship-to-different-address-checkbox").on("change", (function() {
        e(this).is(":checked") ? e("#ship-to-different-address").next(".shipping_address").slideDown() : e("#ship-to-different-address").next(".shipping_address").slideUp()
    })), e(".woocommerce-form-login-toggle a").on("click", (function(t) {
        t.preventDefault(), e(".woocommerce-form-login").slideToggle()
    })), e(".woocommerce-form-coupon-toggle a").on("click", (function(t) {
        t.preventDefault(), e(".woocommerce-form-coupon").slideToggle()
    })), e(".shipping-calculator-button").on("click", (function(t) {
        t.preventDefault(), e(this).next(".shipping-calculator-form").slideToggle()
    })), e('.wc_payment_methods input[type="radio"]:checked').siblings(".payment_box").show(), e('.wc_payment_methods input[type="radio"]').each((function() {
        e(this).on("change", (function() {
            e(".payment_box").slideUp(), e(this).siblings(".payment_box").slideDown()
        }))
    })), e(".rating-select .stars a").each((function() {
        e(this).on("click", (function(t) {
            t.preventDefault(), e(this).siblings().removeClass("active"), e(this).parent().parent().addClass("selected"), e(this).addClass("active")
        }))
    })), e(".quantity-plus").each((function() {
        e(this).on("click", (function(t) {
            t.preventDefault();
            var a = e(this).siblings(".qty-input"),
                n = parseInt(a.val(), 10);
            isNaN(n) || a.val(n + 1)
        }))
    })), e(".quantity-minus").each((function() {
        e(this).on("click", (function(t) {
            t.preventDefault();
            var a = e(this).siblings(".qty-input"),
                n = parseInt(a.val(), 10);
            !isNaN(n) && n > 1 && a.val(n - 1)
        }))
    })), e(".color-switch-btns button").each((function() {
        const t = e(this),
            a = t.data("color");
        t.css("--theme-color", a), t.on("click", (function() {
            const t = e(this).data("color");
            e("body").css("--theme-color", t)
        }))
    })), e("[theme-color]").length > 0 && e("[theme-color]").each((function() {
        var t = e(this).attr("theme-color");
        e(this).get(0).style.setProperty("--theme-color", t), e(this).removeAttr("theme-color")
    })), e("[title-color]").length > 0 && e("[title-color]").each((function() {
        var t = e(this).attr("title-color");
        e(this).get(0).style.setProperty("--title-color", t), e(this).removeAttr("title-color")
    })), e(document).on("click", ".switchIcon", (function() {
        e(".color-scheme-wrap").toggleClass("active")
    }));
    var w = document.getElementById("filt-monthly"),
        k = document.getElementById("filt-yearly"),
        x = document.getElementById("switcher"),
        T = document.getElementById("monthly"),
        P = document.getElementById("yearly");
    e(".pricing-tabs").length && (w.addEventListener("click", (function() {
        x.checked = !1, w.classList.add("toggler--is-active"), k.classList.remove("toggler--is-active"), T.classList.remove("hide"), P.classList.add("hide")
    })), k.addEventListener("click", (function() {
        x.checked = !0, k.classList.add("toggler--is-active"), w.classList.remove("toggler--is-active"), T.classList.add("hide"), P.classList.remove("hide")
    })), x.addEventListener("click", (function() {
        k.classList.toggle("toggler--is-active"), w.classList.toggle("toggler--is-active"), T.classList.toggle("hide"), P.classList.toggle("hide")
    })));
    new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !0,
        live: !0
    });
    if ((new WOW).init(), e(".reveal").length) {
        gsap.registerPlugin(ScrollTrigger), document.querySelectorAll(".reveal").forEach((e => {
            let t = e.querySelector("img"),
                a = gsap.timeline({
                    scrollTrigger: {
                        trigger: e,
                        toggleActions: "play none none none"
                    }
                });
            a.set(e, {
                autoAlpha: 1
            }), a.from(e, 1, {
                xPercent: -100,
                ease: Power2.out
            }), a.from(t, 1, {
                xPercent: 100,
                scale: 1,
                delay: -1,
                ease: Power2.out
            })
        }))
    }
    if (e(".text-anime-style-1").length) {
        let e = .05,
            t = .5;
        document.querySelectorAll(".text-anime-style-1").forEach((a => {
            let n = new SplitText(a, {
                type: "chars, words"
            });
            gsap.from(n.words, {
                duration: 1,
                delay: t,
                x: 20,
                autoAlpha: 0,
                stagger: e,
                scrollTrigger: {
                    trigger: a,
                    start: "top 85%"
                }
            })
        }))
    }
    if (e(".text-anime-style-2").length) {
        let e = .03,
            t = 20,
            a = .1,
            n = "power2.out";
        document.querySelectorAll(".text-anime-style-2").forEach((s => {
            let o = new SplitText(s, {
                type: "chars, words"
            });
            gsap.from(o.chars, {
                duration: 2,
                delay: a,
                x: t,
                autoAlpha: 0,
                stagger: e,
                ease: n,
                scrollTrigger: {
                    trigger: s,
                    start: "top 85%"
                }
            })
        }))
    }
    if (e(".text-anime-style-3").length) {
        document.querySelectorAll(".text-anime-style-3").forEach((e => {
            e.animation && (e.animation.progress(1).kill(), e.split.revert()), e.split = new SplitText(e, {
                type: "lines,words,chars",
                linesClass: "split-line"
            }), gsap.set(e, {
                perspective: 400
            }), gsap.set(e.split.chars, {
                opacity: 0,
                x: "50"
            }), e.animation = gsap.to(e.split.chars, {
                scrollTrigger: {
                    trigger: e,
                    start: "top 90%"
                },
                x: "0",
                y: "0",
                rotateX: "0",
                opacity: 1,
                duration: 1,
                ease: Back.easeOut,
                stagger: .02
            })
        }))
    }
    window.addEventListener("contextmenu", (function(e) {
        e.preventDefault()
    }), !1), document.onkeydown = function(e) {
        return 123 != event.keyCode && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "I".charCodeAt(0)) && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "C".charCodeAt(0)) && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "J".charCodeAt(0)) && ((!e.ctrlKey || e.keyCode != "U".charCodeAt(0)) && void 0))))
    }
}(jQuery);



 const currentPage = location.pathname.split("/").pop(); // Get current page name
    const menuLinks = document.querySelectorAll(".main-menu a");

    menuLinks.forEach(link => {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage || (currentPage === "" && linkPage === "/")) {
            link.classList.add("active");
        }
    });



$('[data-bg-src]').each(function () {
  var bg = $(this).attr('data-bg-src');
  $(this).css('background-image', 'url(' + bg + ')');
});
