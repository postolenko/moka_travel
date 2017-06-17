$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    // ----------------------------

    var parentAccordeon;
    var accordeonItemTxtHeight;

    // ----------------------------

    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------------

    var hide_element;

    // ----------------------------

    var indexList;
    var indexItemList;

    // ----------------------------

    var attrDatapiker;
    var topCoor;
    var leftCoor;
    var parentEl;
    var indexDataPiker;

    // ----------------------------

    getFooterPosition();

    getHeaderFixedPosition();

    getPromoContentParams();

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // -----------------------

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        if( bodyWidth <= 768 ) {

            $(".main-nav-block").css({
                "top" : $(".header-site").height() + "px",
                "height" : $(window).height() - $(".header").height() + "px"
            });

        } else {

            $(".main-nav-block").css({
                "top" : 0 + "px",
                "height" : "auto"
            });

        }

        // -----------------------

        getPromoContentParams();

    });


    $(document).scroll(function() {

        getHeaderFixedPosition();

    });


    // ---------------------------------------------------------

    $(document).mouseup(function (e){

        hide_element = $(".date-picker");

        if (!hide_element.is(e.target)

            && hide_element.has(e.target).length === 0) {

            hide_element.fadeOut(300);
        }

    });

    // -----------------------------------------

    $(function() {

        $(".respmenubtn").click(function() {

            if( $(".main-nav-block").is(":hidden") ) {

                $(".main-nav-block").fadeIn(500);

                $(".main-nav-block").css({
                    "top" : $(".header-site").height() + "px",
                    "height" : $(window).height() - $(".header-site").height() + "px"
                });

                $(this).addClass("active");

            } else {

                $(".main-nav-block").fadeOut(500);

                $(this).removeClass("active");

            }

        });

    });

    // ---------------------------------------------------------

    $(function() {

        $(".show_datepiker").click(function() {

            attrDatapiker = $(this).attr("data-datepiker-btn");
            topCoor = $(this).offset().top + $(this).height();
            

            if(bodyWidth < 480) {

                leftCoor = ( bodyWidth - $("[data-datepiker = '"+ attrDatapiker +"']").outerWidth(true) ) / 2;

            } else {

                leftCoor = $(this).offset().left;

            }

            if( $("[data-datepiker = '"+ attrDatapiker +"']").is(":hidden") ) {

                $("[data-datepiker = '"+ attrDatapiker +"']").fadeIn(400);
                $("[data-datepiker = '"+ attrDatapiker +"']").offset({left : leftCoor , top : topCoor});

            } else {

                $("[data-datepiker = '"+ attrDatapiker +"']").fadeOut(300);

            }

        });

        $(".close-datepiker").click(function() {

            parentEl = $(this).parent();

            for(;;) {

                parentEl = parentEl.parent();

                if(parentEl.hasClass("date-picker")) {

                    break;

                }

            }

            if( parentEl.is(":visible") ) {

                parentEl.fadeOut(400);

            }

        });

        $(this).keydown(function(eventObject){

            if ( eventObject.which == 27) {

                $(".date-picker").fadeOut(300);

            }

        });

    });

    // ---------------------------------------------------------

    $(function() {

        $(".accordeon-item-title").click(function() {

            parentAccordeon = $(this).parent(".accordeon-item");

            if( $(this).next(".accordeon-item-txt-wrapp").height() > 0 ) {                

                $(this).next(".accordeon-item-txt-wrapp").animate({"height" : 0 + "px"}, 600);

                parentAccordeon.removeClass("active");

            } else {                      

                accordeonItemTxtHeight = $(this).next(".accordeon-item-txt-wrapp").children(".accordeon-item-txt").outerHeight();

                $(this).next(".accordeon-item-txt-wrapp").animate({"height" : accordeonItemTxtHeight + "px"}, 600);

                parentAccordeon.addClass("active");

                setTimeout(function() {

                    $(this).next(".accordeon-item-txt-wrapp").css({
                        "height" : "auto"
                    });

                    console.log("height auto");

                }, 700);

            }

        });

    });

    // ---------------------------------------------------------

    $(function() {

        // var indexList;
        // var indexItemList;

        for(indexList = 0; indexList <= $("ol.num-mark").length - 1; indexList++ ) {

            indexItemList = 0;

            for(indexItemList = 0; indexItemList <= $("ol.num-mark:eq("+ indexList +") li").length - 1; indexItemList++ ) {

                $("ol.num-mark:eq("+ indexList +") li:eq("+ indexItemList +")").prepend("<span class='item-list-num'>"+ ( indexItemList + 1 ) +".</span>");

            }

        }

    });

    // ---------------------------------------------------------

     $(function() {

        $(".scroll-height").click(function () {

            $("body,html").animate({

                scrollTop: $("#scroll_down_anchor").offset().top

            }, 1000);

            return false;

        });

    });


    // ---------------------------------------------------------


    function getFooterPosition() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        setFooterPositionInterval = setInterval(function() {

            contentCoor = $(".content").offset().top + $(".content").height();
            footerCoor = $(".footer").offset().top;

            if( contentCoor != footerCoor ) {

                $(".wrapper").css({"min-height" : $(window).height() + "px"});

                $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

                clearInterval(setFooterPositionInterval);

            }

        }, 35);

    }

    function getHeaderFixedPosition() {

        if( bodyWidth > 768 ) {

            if( $(window).scrollTop() >= $(".header-site").height() ) {

                $(".header-site").addClass("fixed");

                $(".header-site").css({
                    "top" : -1 * $(".header-site").outerHeight(true) + "px"
                });

                setTimeout(function() {

                    $(".header-site").addClass("fixed-top");

                }, 700);

                $("body").css({
                    "padding-top" : $(".header-site").height() + "px"
                });

            } else {

                $(".header-site").removeClass("fixed");

                $(".header-site").css({
                    "top" : 0 + "px"
                });

                setTimeout(function() {
                    $(".header-site").removeClass("fixed-top");
                }, 700);

                $("body").css({
                    "padding-top" : 0 + "px"
                });

            }

        } else {

            $("body").css({
                "padding-top" : 0 + "px"
            });

        }

    }

    function getPromoContentParams() {

        if( $(".promo-content").offset().top < $(".header-site").height() ) {

            $(".promo-content").css({
                "margin-top" : $(".header-site").height() + "px"
            });

        }

        $(".promo-block-sect").css({
            "min-height" : $(".center-block").height() + "px"
        });

    }

});
