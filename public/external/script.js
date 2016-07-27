/**
 * Created by Shivam Mathur on 16-04-2016.
 */
window.onload = function(){
    console.log(window.innerHeight+'px');
    var a = document.getElementsByTagName('iframe');
    console.log(a);
    console.log(a[0]);
    a[0].heigth = window.innerHeight+'px';
};
window.resize = function(){
    console.log(window.innerHeight+'px');
    var a = document.getElementsByTagName('iframe');
    console.log(a);
    console.log(a[0]);
    a[0].heigth = window.innerHeight+'px';
};