/**
 * Created by Shivam Mathur on 17-02-2016.
 */
$('.button-collapse').sideNav();
window.onload = function () {

    $('.button-collapse').sideNav({ // Default is 240
            closeOnClick: true// Closes side-nav on <a> clicks, useful for Angular/Meteor
        }
    );

};
function initMap() {
    var myLatLng = {lat: -25.363, lng: 131.044};

    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        scrollwheel: false,
        zoom: 4
    });

    // Create a marker and set its position.
    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'Hello World!'
    });
}
function closeNav() {
    $('.button-collapse').sideNav('hide');
}
// Initialize collapsible (uncomment the line below if you use the dropdown variation)
$('.collapsible').collapsible();