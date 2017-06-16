$(document).ready(function() {

    var accordeonItemIndex;
    var accordeonItemCount;
    var parentAccordeonH;

    // ----------------------------

    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------------

    var hide_element;

    // ----------------------------

    var attrDatapiker;
    var topCoor;
    var leftCoor;

    var parentEl;
    var indexDataPiker;

    // ----------------------------

    getFooterPosition();

    getPaymentsAdvantagesColsSize();

    getHeaderFixedPosition();

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // -----------------------

        getPaymentsAdvantagesColsSize();

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

    // ---------------------------------------------------------

    // ---------------------------------------------------------

    $(function() {

        $(".show_datepiker").click(function() {

            attrDatapiker = $(this).attr("data-datepiker-btn");
            topCoor = $(this).offset().top + $(this).height();
            leftCoor = $(this).offset().left;

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

        // var accordeonIndex;

        // var parentAccordeonH;

        var indexAccorderon;

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

        var indexList;
        var indexItemList;

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

    function getPaymentsAdvantagesColsSize() {

        $(".side-col").css({

            "width" : $(this).parent($(".payments-advantages") ).width() + "px"

        });

    }


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

        if( $(window).scrollTop() >= $(".header").height() ) {

            $(".header").addClass("fixed");

            $(".header").css({
                "top" : -1 * $(".header").outerHeight(true) + "px"
            });

            setTimeout(function() {
                $(".header").addClass("fixed-top");
            }, 700);

            $(".wrapper").css({
                "padding-top" : $(".header").height() + "px"
            });

        } else {

            $(".header").removeClass("fixed");

            $(".header").css({
                "top" : 0 + "px"
            });

            setTimeout(function() {
                $(".header").removeClass("fixed-top");
            }, 700);

            $(".wrapper").css({
                "padding-top" : 0 + "px"
            });

        }

    }



});
