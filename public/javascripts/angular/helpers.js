/**
 * Created by Shivam Mathur on 17-02-2016.
 */
$('.button-collapse').sideNav();
window.onload = function(){

    $('.button-collapse').sideNav({ // Default is 240
          closeOnClick:true// Closes side-nav on <a> clicks, useful for Angular/Meteor
        }
    );

};

function closeNav(){
  $('.button-collapse').sideNav('hide');
}
// Initialize collapsible (uncomment the line below if you use the dropdown variation)
$('.collapsible').collapsible();