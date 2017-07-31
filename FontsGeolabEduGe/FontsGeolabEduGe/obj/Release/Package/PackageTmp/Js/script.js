(function () {
            [].slice.call(document.querySelectorAll('select.cs-select')).forEach(function (el) {
        new SelectFx(el);
    });
})();

$('.size').slider({
    formatter: function (value) {
        return value + "px";
    },
    min: 16,
    max: 65,
    value: 60,
    step: 1,
    focus: true
});

$('.weight').slider({
    formatter: function (value) {
        return value;
    },
    min: 100,
    max: 900,
    step: 100,
    value: 200,
    focus: true
});

$(".slider").on("mousedown", function () {
    $(this).children(".tooltip").css("opacity", "1");
});
$(".slider").on("mouseup", function () {
    $(this).children(".tooltip").css("opacity", "0");
});

$("input.size").on("change", function () {
    var size = $(this).val();
    $(this).parents(".font").children(".row").children(".font-example").children(".mgr0").children(".font-text").css("font-size", size + "px");
});

$(".weight").on("input change", function () {
    var weight = $(this).val();
    $(this).parents(".font").children(".row").children(".font-example").children(".mgr0").children(".font-text").css("font-weight", weight);
});

$(".btn-grey").on("mouseover", function () {
    var parent = $(this).parents(".font");
    parent.css("background-color", "rgba(98, 66, 149, 0.7)");
    $(this).attr('src', '../Images/download-white.png');
    $(this).css("opacity", "1");
    $(this).parents(".font").children(".row").children(".font-example").children(".mgr0").children(".font-text").css("color", "white");
    $(this).parents(".font").children(".row").children(".font-example").children(".font-author").css("color", "white");
    $(this).parents(".font").children(".row").children(".font-opts").children(".font-weight-div").children("p").css("color", "white");
    $(this).parents(".font").children(".row").children(".font-opts").children(".font-size-div").children("p").css("color", "white");
});

$(".btn-grey").on("mouseleave", function () {
    var parent = $(this).parents(".font");
    $(this).attr('src', '../Images/download-grey.png');
    $(this).css("opacity", "0.3");
    parent.css("background-color", "white");
    $(this).parents(".font").children(".row").children(".font-example").children(".mgr0").children(".font-text").css("color", "#7e7a7a");
    $(this).parents(".font").children(".row").children(".font-example").children(".font-author").css("color", "#aaaaaa");
    $(this).parents(".font").children(".row").children(".font-opts").children(".font-weight-div").children("p").css("color", "#624295");
    $(this).parents(".font").children(".row").children(".font-opts").children(".font-size-div").children("p").css("color", "#624295");
});

$(window).resize(function () {
    if (innerWidth < 1200 && innerWidth > 992) {
        $('.size').slider({
            max: 55,
            value: 48
        });
        $(".font-text").css("font-size", "55px");

    }
});

$(function () {
    if (innerWidth < 1200 && innerWidth > 992) {
        $('.size').slider({
            max: 55,
            value: 48
        });
        $(".font-text").css("font-size", "55px");

    }
});

$(window).resize(function () {
    if (innerWidth > 1200) {
        $('.size').slider({
            max: 65,
            value: 60
        });
        $(".font-text").css("font-size", "60px");

    }
});

$("a.show-content").on("click", function () {
    $(this).parents(".container").find(".text").removeClass("hidden-md-down hidden-sm-down");
    $(this).parents(".container").find(".font").removeClass("hidden-md-down hidden-sm-down");
    $(this).parents(".container").find(".des-row").removeClass("hidden-md-down hidden-sm-down");
    $(this).parents(".container").find(".designer").removeClass("hidden-md-down hidden-sm-down");
    $(this).parents(".container").find(".mentor").removeClass("hidden-md-down hidden-sm-down hidden-xs-down");
    $(this).hide();
});

$(function () {
    $(".designer:nth-child(4n-1)").addClass("hidden-sm-down");
    $(".designer:nth-child(4n)").addClass("hidden-md-down");
    $(".mentor:nth-child(5n)").addClass("hidden-md-down");
    $(".mentor:nth-child(5n-1)").addClass("hidden-sm-down");
    $(".mentor:nth-child(5n-2)").addClass("hidden-xs-down");
    $(".font:nth-child(4)").addClass("hidden-md-down");
    $(".font:nth-child(5)").addClass("hidden-md-down");

});



$('.cs-options').bind("DOMSubtreeModified", function () {
    console.log(1);
    filter();
});

$(".custom-control-input").on("change", function () {
    filter();
});
function filter() {
    var type = 0;
    if (document.getElementById('sans').checked) {
        type = 2;
    } else if (document.getElementById('serif').checked) {
        type = 1;
    }
    var range = $("#createDateRange").val();
    var writing = $("#writing").val();
    $("#search").attr("href", "/Home/Filter?createDateRange=" + range +"&writing="+writing+ "&type=" + type);
    $("#search").click();
}






