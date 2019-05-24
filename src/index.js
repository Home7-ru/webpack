import $ from 'jquery';

import "popper.js"

import "./styles.css"
let a=15;

$(document).ready(function(){
    $("a").click(function(event){
        alert("As you can see, the link no longer took you to jquery.com");
        event.preventDefault();
    });
});

console.log("helo uord");