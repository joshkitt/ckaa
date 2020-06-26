function show1() {
    $('#loading').hide();
    $('#c1').fadeIn(1500, show2);
}
function show2() {
    $('#c2').fadeIn(1500, show3);
}
function show3() {
    $('#c3').fadeIn(1500, show4);
}
function show4() {
    $('#c4').fadeIn(1500, show5);
}
function show5() {
    $('#c5').fadeIn(1500, show6);
}
function show6() {
    $('#c6').fadeIn(1500, show7);
}
function show7() {
    $('#c7').fadeIn(1500, showContent);
}
function showContent() {
    setTimeout(function (){
        $('#content > img').fadeTo(1000, .1);
        $('#main').fadeTo(1, .6);
        $('#main').fadeIn(1500, showInfo);
    }, 1000);
}
function showInfo() {
    $('#info').fadeIn(1500, showServices);
}
function showServices() {
    $('#services').fadeIn(1500, showServices2);
}
function showServices2() {
    $('#services2').fadeIn(1500, showLocation);
}
function showLocation() {
    $('#location').fadeIn(1500, showAddress);
}
function showAddress() {
    $('#address').fadeIn(1500);
}
