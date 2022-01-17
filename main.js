// $("#blog-trigger").click(function () {
//     $("#blog").hide()
// })


    $("#hide").click(function () {
        $("p").hide();
    });
    $("#show").click(function () {
        $("p").show();
    });

    $("#trigger").click(function(){
        console.log("hello")
        if($('div').is(':visible')){
            $('div').hide()
        }else{
            $('div').show()
        }
    })

    $("#trigger-color").click(function(){
        $("#groundcolor").css("background-color","rgba(232, 81, 54, 1.0)");
    })


    $("#trigger-color2").click(function(){
        
        $("#groundcolor").css("background-color",function(){
            var r = Math.floor( Math.random()*256)
            var g = Math.floor( Math.random()*256)
            var b = Math.floor( Math.random()*256)
            var a = (Math.floor( Math.random()*10))/10
            console.log("rgba("+r+","+g+","+b+","+a+")");
            return "rgba("+r+","+g+","+b+","+a+")"
        })

    });

   





    //     if($('#blog').css('visibility') == 'hidden')){
    //         $("#blog").show()
    //     }else{
    //         $("#blog").hide()
    //     }
    // })
