/**
 * Created by Shivam Mathur on 17-02-2016.
 */
window.onload = function(){
  if(window.innerWidth>900){
    $('.button-collapse').sideNav({
          menuWidth: 300, // Default is 240
          closeOnClick:false // Closes side-nav on <a> clicks, useful for Angular/Meteor
        }
    );
  }
  else{
    $('.button-collapse').sideNav({
          menuWidth: 300, // Default is 240
          closeOnClick:true// Closes side-nav on <a> clicks, useful for Angular/Meteor
        }
    );
  }
};
window.onresize = function(){
  if(window.innerWidth>900){
    $('.button-collapse').sideNav({
          menuWidth: 300, // Default is 240
          closeOnClick:false // Closes side-nav on <a> clicks, useful for Angular/Meteor
        }
    );
  }
  else{
    $('.button-collapse').sideNav({
          menuWidth: 300, // Default is 240
          closeOnClick:true// Closes side-nav on <a> clicks, useful for Angular/Meteor
        }
    );
  }
};

function closeNav(){
  $('.button-collapse').sideNav('hide');
}
// Initialize collapsible (uncomment the line below if you use the dropdown variation)
$('.collapsible').collapsible();