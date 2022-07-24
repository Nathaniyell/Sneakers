$(document).ready(function () {
    $('#img1').click(function () {
        $('#firstImage').attr('src', 'images/img4.jpg')
    });
    $('#img2').click(function () {
        $('#firstImage').attr('src', 'images/img3.jpg')
    });
    $('#img3').click(function () {
        $('#firstImage').attr('src', 'images/img2.jpg')
    })
    $('#img4').click(function () {
        $('#firstImage').attr('src', 'images/img5.jpg')
    });

    $("#hamm").click(function () {
            $("#list").slideToggle('slow', ()=>{
            $("#hamm").hide()
            $("#hammX").show()
        })
       
    });
    $('#hammX').click(function () {
        $("#list").slideToggle('slow', ()=>{
            $("#hamm").show()
            $("#hammX").hide()
        })
      })
});
