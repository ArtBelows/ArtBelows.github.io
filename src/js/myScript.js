var valPrice1 = 0, valPrice2 = 0, valPrice3 = 0, valTerm1 = 0, valTerm2 = 0, valTerm3 = 0;

$(document).ready(function()
{
    new WOW().init();
    
    $(window).scroll(function()
    {
        var scrollDistance = $(window).scrollTop();
        $(".section").each(function(i, el)
        {
            i -= 1;
            if($(el).offset().top - $("nav").outerHeight() <= scrollDistance)
            {
                $("nav a").each(function(i, el)
                {
                    if($(el).hasClass("active"))
                    {
                        $(el).removeClass("active");
                    }
                });
                $("nav li:eq(" + i + ")").find("a").addClass("active");
            }
        });
    });
    
    $('a[href^="#"]').click(function()
    {
        var valHref = $(this).attr("href");
        $('html, body').animate({scrollTop: $(valHeight).offset.top - $("nav").outerHeight()});
    });
    
    $("#select1 option").click(function()
    {
        valPrice1 = Number($(this).attr("money"));
        valTerm1 = Number($(this).attr("term"));
    });

    $("#select2 option").click(function()
    {
        valPrice2 = Number($(this).attr("money"));
        valTerm2 = Number($(this).attr("term"));
    });

    $("#select3 option").click(function()
    {
        valPrice3 = Number($(this).attr("money"));
        valTerm3 = Number($(this).attr("term"));
    });
    
    $("option").click(function()
    {
        var Price = valPrice1 + valPrice2 + valPrice3;
        var Term = valTerm1 + valTerm2 + valTerm3;
    
        $("p.money").text(Price + "$");
        $("p.term").text(Term + " дней");
    });
    
    setTimeout(function()
    {
        $("#staticBackdropButton").trigger("click");
    }, 30000);
    
    $(".image-link").magnificPopup({type:"image"});
    
    const config = {threshold: [1.0]};
    var observer = new IntersectionObserver(onEntry, config);
    var elements = $(".role");
    
    elements.each(function(i, el)
    {
        observer.observe(el);
    });
    
    $(".dot1").click(function()
    {
        $(this).addClass("selected_dot");
        $(".dot2").removeClass("selected_dot");
        $(".dot3").removeClass("selected_dot");
        $(".report1").addClass("rep_active");
        $(".report2").removeClass("rep_active");
        $(".report3").removeClass("rep_active");
    });
    
    $(".dot2").click(function()
    {
        $(".dot1").removeClass("selected_dot");
        $(this).addClass("selected_dot");
        $(".dot3").removeClass("selected_dot");
        $(".report1").removeClass("rep_active");
        $(".report2").addClass("rep_active");
        $(".report3").removeClass("rep_active");
    });
    
    $(".dot3").click(function()
    {
        $(".dot1").removeClass("selected_dot");
        $(".dot2").removeClass("selected_dot");
        $(this).addClass("selected_dot");
        $(".report1").removeClass("rep_active");
        $(".report2").removeClass("rep_active");
        $(".report3").addClass("rep_active");
    });
    
    $("form").submit(function(event)
    {
        if($("#name").val() == "" || $("#mail").val() == "" || $("#message").val() == "")
        {
            event.preventDefault();
            alert("У Вас пустое поле");
        }
    });
});

function onEntry(entry)
{
    entry.forEach(change =>
    {
        if(change.isIntersecting)
        {
            change.target.classList.add("roling");
            
            $('.roling').each(function()
            {
                $(this).prop('Counter',0).animate(
                {Counter: $(this).text()},
                {
                    duration: 2500,
                    easing: 'swing',
                    step: function(now)
                    {
                        $(this).text(Math.ceil(now));
                    }
                });
                if($("#spec").text("291"))
                {
                    $("#spec").text(292);
                }
            });
        }
    });
}