$('#img1').click(function(){
    $('#firstImage').attr('src', 'images/img4.jpg')
});
$('#img2').click(function(){
    $('#firstImage').attr('src', 'images/img3.jpg')
});
$('#img3').click(function(){
    $('#firstImage').attr('src', 'images/img2.jpg')
})
$('#img4').click(function(){
    $('#firstImage').attr('src', 'images/img5.jpg')
});

$(".hamburger").click(function(){
    $("#list").css('display', 'block')
    $("#list").mouseleave(()=>{
        $("#list").fadeOut(1500)
    })
});


    $('#footer').mouseenter(function(){
        $('.footerDetails').css('display', 'block')
        $('#footer').mouseleave(function(){
            $('.footerDetails').fadeOut(1000)
        })
    })


