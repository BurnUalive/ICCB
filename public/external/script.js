/**
 * Created by Shivam Mathur on 16-04-2016.
 */
window.onload = function(){
    var a = document.getElementsByTagName('iframe');
    a[0].heigth = window.innerHeight+'px';
};
window.resize = function(){
    var a = document.getElementsByTagName('iframe');
    a[0].heigth = window.innerHeight+'px';
};