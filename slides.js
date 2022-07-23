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
        $("#hamm").css('display', 'none')
        $("#list").css('display', 'block')
        $("#hammX").css('display', 'block')
    });
});
$('#hammX').click(function () {
    $("#list").css('display', 'none')
    $("#hamm").css('display', 'block')
    $("#hammX").css('display', 'none')

})