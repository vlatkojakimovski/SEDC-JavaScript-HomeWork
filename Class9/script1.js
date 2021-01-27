let name = $("#name");
let btn = $("#btn");

btn.click (function(){
    btn.after(`<p> Hello there ${name.val()} </p>`);
})


