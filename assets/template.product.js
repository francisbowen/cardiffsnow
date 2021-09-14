!function(e) {
    function t(t) {
        for (var n, o, u = t[0], c = t[1], l = t[2], s = 0, p = []; s < u.length; s++)
            o = u[s],
            a[o] && p.push(a[o][0]),
            a[o] = 0;
        for (n in c)
            Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
        for (d && d(t); p.length; )
            p.shift()();
        return i.push.apply(i, l || []),
        r()
    }
    function r() {
        for (var e, t = 0; t < i.length; t++) {
            for (var r = i[t], n = !0, u = 1; u < r.length; u++) {
                var c = r[u];
                0 !== a[c] && (n = !1)
            }
            n && (i.splice(t--, 1),
            e = o(o.s = r[0]))
        }
        return e
    }
    var n = {}
      , a = {
        8: 0
    }
      , i = [];
    function o(t) {
        if (n[t])
            return n[t].exports;
        var r = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, o),
        r.l = !0,
        r.exports
    }
    o.m = e,
    o.c = n,
    o.d = function(e, t, r) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    o.t = function(e, t) {
        if (1 & t && (e = o(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (o.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var n in e)
                o.d(r, n, function(t) {
                    return e[t]
                }
                .bind(null, n));
        return r
    }
    ,
    o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return o.d(t, "a", t),
        t
    }
    ,
    o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    o.p = "";
    var u = window.shopifySlateJsonp = window.shopifySlateJsonp || []
      , c = u.push.bind(u);
    u.push = t,
    u = u.slice();
    for (var l = 0; l < u.length; l++)
        t(u[l]);
    var d = c;
    i.push([133, 0, 1]),
    r()
}({
    133: function(e, t, r) {
        "use strict";
        var n = r(18);
        r(23),
        (0,
        n.load)("*")
    },
    23: function(e, t, r) {
        "use strict";
        var n = m(r(39))
          , a = m(r(40))
          , i = r(57)
          , o = p(r(19))
          , u = p(r(56))
          , c = r(54)
          , l = r(18)
          , d = r(20)
          , s = m(r(32));
        function p(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e,
            t
        }
        function m(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var h = "hide"
          , f = ".gallery-slider"
          , v = ".product-images-slider"
          , y = {
            submitButton: "[data-submit-button]",
            submitButtonText: "[data-submit-button-text]",
            comparePrice: "[data-compare-price]",
            comparePriceText: "[data-compare-text]",
            priceWrapper: "[data-price-wrapper]",
            imageWrapper: "[data-product-image-wrapper]",
            visibleImageWrapper: "[data-product-image-wrapper]:not(.hide)",
            imageWrapperById: function(e) {
                return y.imageWrapper + "[data-image-id='" + e + "']"
            },
            productForm: "[data-product-form]",
            productPrice: "[data-product-price]",
            thumbnail: "[data-product-single-thumbnail]",
            thumbnailById: function(e) {
                return "[data-thumbnail-id='" + e + "']"
            },
            thumbnailActive: "[data-product-single-thumbnail][aria-current]",
            productOptions: "[data-product-option]",
            productOption1: '[data-product-option-position="1"]:checked',
            productOption2: '[data-product-option-position="2"]:checked',
            productOption3: '[data-product-option-position="3"]:checked'
        };
        var product_image_slider = $('.product-images.pdp-gallery');
        function S(e) {
            return e.replace(".00", "")
        }
        if (document.querySelector(f)) {
          var b = new s.default(f,{
            direction: "vertical",
            loop: !1,
            slidesPerView: 7,
            spaceBetween: 16,
            watchSlidesProgress: !0,
            watchSlidesVisibility: !0,
            watchOverflow: !0,
            freeMode: !0
          })
        }
      	if (document.querySelector(v)) {
          var g = new s.default(v,{
            thumbs: {
                swiper: b
            },
            scrollbar: {
                el: ".swiper-scrollbar",
                draggable: !1
            }
        });
        }
        var w = document.querySelector(".product-quantity");
        if (w) {
            var O = function(e) {
                e >= 10 ? T.value = 10 : e <= 0 && (T.value = 0)
            }
              , T = w.querySelector("input")
              , q = w.querySelector(".btn-minus")
              , L = w.querySelector(".btn-plus");
            T.addEventListener("input", function() {
                O(T.value)
            }),
            q.addEventListener("click", function() {
                var e = parseInt(T.value)
                  , t = parseInt(-1);
                T.value = e + t,
                O(T.value)
            }),
            L.addEventListener("click", function() {
                var e = parseInt(T.value)
                  , t = parseInt(1);
                T.value = e + t,
                O(T.value)
            })
        }

        var phantom_wax_inputs = $('.addon-product-variant .product-option input');     
        
        function getPahntomwasPrice() {
            if ($(phantom_wax_inputs).length > 0) {
                if (!$('.phantom-container').hasClass('disable')) {
                    if ($(phantom_wax_inputs).filter(':checked').attr('id') == 'pahntomwas-yes') {
                        var pahntomwas_price = parseInt($(phantom_wax_inputs).filter('#pahntomwas-yes').attr('data-price'));
                        console.log('pahntomwas_price = ', pahntomwas_price);
                        return pahntomwas_price;
                    }
                    else {
                        return 0;
                    }
                } else {
                    return 0;
                }
            } else {
                return 0;
            }
        }

        (0,l.register)("product", {
            onLoad: function() {
              
                console.log('hey');

                var e = this;
                return (0,
                a.default)(n.default.mark(function t() {
                    var r, a, c, l;
                    return n.default.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return r = document.querySelector(y.productForm),
                                t.next = 3,
                                e.getProductJson(r.dataset.productHandle);                                
                            case 3:
                                e.product = t.sent,
                                e.productForm = new i.ProductForm(r,e.product,{
                                    onOptionChange: e.onFormOptionChange.bind(e)
                                }),
                                $(phantom_wax_inputs).click(function() {
                                    e.renderPrice_phantom();
                                });                                
                                e.onThumbnailClick = e.onThumbnailClick.bind(e),
                                e.onThumbnailKeyup = e.onThumbnailKeyup.bind(e),
                                e.container.addEventListener("click", e.onThumbnailClick),
                                e.container.addEventListener("keyup", e.onThumbnailKeyup),
                                e.setVariants(e.product),
                                e.setSelect(),
                                a = document.querySelectorAll(".product-variant"),
                                document.querySelector(".select-overlay"),
                                a && a.forEach(function(e) {
                                    e.querySelectorAll(".product-option input").forEach(function(e, t) {
                                        e.classList.contains("unavailable") || !0
                                    })
                                }),
                                c = e.container.querySelector(y.submitButton),
                                l = e.container.querySelector(".added-overlay"),
                                c.addEventListener("click", function(t) {
                                    console.log('submit button clicked');
                                    console.log('e.product = ', e.product);
                                    console.log('e.getID', e.getID());
                                    t.preventDefault();
                                    var r = o.getVariantFromOptionArray(e.product, e.getID());
                                    l.classList.add("adding"),
                                    u.addItem(r.id, 1).then(function() {
                                        if($('input[name="addonpro"]:checked').val() != '') {
                                            var adonval = $('input[name="addonpro"]:checked').val();
                                            console.log('adonval = ', adonval);
                                            u.addItem(parseInt(adonval), 1);
                                        }
                                        u.getState().then(function(e) {
                                            console.log('state = ', u.getState());
                                            !function(e) {
                                                var t = document.getElementById("cart-btn")
                                                  , r = document.getElementById("cart-new")
                                                  , n = document.getElementById("cart-total")
                                                  , a = document.getElementById("cart-prev");
                                                t.classList.add("cart-changing"),
                                                r.innerHTML = e,
                                                setTimeout(function() {
                                                    t.classList.remove("cart-changing"),
                                                    a.innerHTML = e,
                                                    n.innerHTML = e;
                                                }, 1e3)
                                            }(e.item_count)
                                        })
                                    }),
                                    setTimeout(function() {
                                        l.classList.remove("adding")
                                    }, 3e3)
                                });
                            case 17:
                            case "end":
                                return t.stop()
                            }
                    }, t, e)
                }))()
            },            
            onUnload: function() {
                this.productForm.destroy(),
                this.removeEventListener("click", this.onThumbnailClick),
                this.removeEventListener("keyup", this.onThumbnailKeyup)
            },
            getProductJson: function(e) {
                return fetch("/products/" + e + ".js").then(function(e) {
                    return e.json()
                })
            },
            getID: function() {
                var e = this.container.querySelector(y.productOption1)
                  , t = this.container.querySelector(y.productOption2)
                  , r = this.container.querySelector(y.productOption3)
                  , n = [];
                return e && n.push(e.value),
                t && n.push(t.value),
                r && n.push(r.value),
                n
            },
            setSelect: function() {
                var e = document.querySelectorAll(".product-variant")
                  , t = document.querySelector(".select-overlay");
                if (e) {
                    var r = !1;
                    e.forEach(function(e) {
                        var t = !1;
                        e.querySelectorAll(".product-option input").forEach(function(e, r) {
                            e.checked && (t = !0)
                        }),
                        r = !!t
                    }),
                    r && t.classList.add("inactive")
                }
            },
            setVariants: function(e) {
                console.log('setVariants function');
                var t = this.container.querySelector(y.productOption1)
                  , r = this.container.querySelector(y.productOption2)
                  , n = this.container.querySelector(y.productOption3);
                this.container.querySelectorAll(y.productOptions).forEach(function(a) {
                    var i = []
                      , u = a.dataset.productOptionPosition
                      , c = null
                      , l = null
                      , d = null;
                    "1" === u ? (c = a.value,
                    r && (l = r.value),
                    n && (d = n.value)) : "2" === u ? (t && (c = t.value),
                    l = a.value,
                    n && (d = n.value)) : "3" === u && (t && (c = t.value),
                    r && (l = r.value),
                    d = a.value),
                    c && i.push(c),
                    l && i.push(l),
                    d && i.push(d);
                    var s = o.getVariantFromOptionArray(e, i);
                    null === s ? a.classList.add("unavailable") : (a.classList.remove("unavailable"),
                    a.setAttribute("data-variant", s.id))
                })
            },
            onFormOptionChange: function(e) {
                console.log('onFormOptionChange');
                console.log('e = ', e);

                var t = e.dataset.variant;
                console.log('t = ', t);
                this.updatePhantomButtons(t)
                this.renderImages(t),
                this.renderPrice(t),
                this.renderComparePrice(t),
                this.renderSubmitButton(t),
                this.setVariants(this.product),
                this.setSelect(),
                this.updateBrowserHistory(t)
            },
            updatePhantomButtons: function (e) {
                console.log('updatePhantomButtons');
                if (e.options.includes("Split") && e.options.includes("Pro Carbon")) {
                    console.log('need to hid phantom');
                    if (!$('.phantom-container').hasClass('disable'))
                        $('.phantom-container').addClass('disable');
                } else {
                    $('.phantom-container').removeClass('disable');
                }

                // for (var i = 0; i< e.options.length ; i++) {
                //     console.log('option = ', e.options[i]);
                //     if (e.options[i] == 'Split' || e.options[i] == 'Split')
                // }
            },
            renderPrice_phantom: function () {
                if (!$('.phantom-container').hasClass('disable')) {
                    var price_div = this.container.querySelector(y.productPrice);
                    var phatom_price = getPahntomwasPrice();
                    var original_price = parseInt(price_div.getAttribute('data-original-price'));
                    var total_price = phatom_price + original_price;
                    price_div.innerText = S((0, c.formatMoney)(total_price, theme.moneyFormat));
                }
            },
            renderPrice: function(e) {
                console.log('renderPrice function, e.price = ', e.price);
                var t = this.container.querySelector(y.productPrice);
                t.setAttribute('data-original-price', e.price);
                this.container.querySelector(y.priceWrapper).classList.toggle(h, !e),
                e && (t.innerText = S((0, c.formatMoney)(e.price + getPahntomwasPrice(), theme.moneyFormat)));
                e && (t.setAttribute('data-original-price', e.price));
            },
            onThumbnailClick: function(e) {
                var t = e.target.closest(y.thumbnail);
                t && (e.preventDefault(),
                this.renderFeaturedImage(t.dataset.thumbnailId),
                this.renderActiveThumbnail(t.dataset.thumbnailId))
            },
            onThumbnailKeyup: function(e) {
                if (13 === e.keyCode && e.target.closest(y.thumbnail)) {
                    var t = this.container.querySelector(y.visibleImageWrapper);
                    (0,
                    d.forceFocus)(t)
                }
            },
            renderSubmitButton: function(e) {
                var t = this.container.querySelector(y.submitButton)
                  , r = this.container.querySelector(y.submitButtonText);
                e ? e.available ? (t.disabled = !1,
                r.innerText = theme.strings.addToCart) : (t.disabled = !0,
                r.innerText = theme.strings.soldOut) : (t.disabled = !0,
                r.innerText = "Select Options")
            },
            renderImages: function(e) {
                console.log('renderImage function')
                e && null !== e.featured_image && (this.renderFeaturedImage(e.featured_image.id),
                this.renderActiveThumbnail(e.featured_image.id))
            },
            renderComparePrice: function(e) {
                if (e) {
                    var t = this.container.querySelector(y.comparePrice)
                      , r = this.container.querySelector(y.comparePriceText);
                    t && r && (e.compare_at_price > e.price ? (t.innerText = S((0,
                    c.formatMoney)(e.compare_at_price, theme.moneyFormat)),
                    r.classList.remove(h),
                    t.classList.remove(h)) : (t.innerText = "",
                    r.classList.add(h),
                    t.classList.add(h)))
                }
            },
            renderActiveThumbnail: function(e) {},
            renderFeaturedImage: function(e) {
                console.log('renderActiveThumbnail/renderFeaturedImage');
                console.log('image id = ', e);
                var t = this.container.querySelector(v + " .swiper-slide[data-image-id='" + e + "']");
                if (t) {
                    var r = this.container.querySelector(f + " .swiper-slide[data-thumbnail-id='" + e + "']");
                    var n = t.parentNode;
                    var a = r.parentNode.querySelector(".selected");
                    var i = Array.prototype.indexOf.call(n.children, t) - 1;
                    a && a.classList.remove("selected");
                    r.classList.add("selected");
                    console.log('slickgoto index = ', i)
                    g.slideTo(i);
                    product_image_slider.slick('slickGoTo', i);
                }
            },
            updateBrowserHistory: function(e) {
                var t = this.productForm.element.dataset.enableHistoryState;
                if (e && "true" === t) {
                    var r = (0,
                    i.getUrlWithVariant)(window.location.href, e.id);
                    window.history.replaceState({
                        path: r
                    }, "", r)
                }
            }
        })
    }
});
