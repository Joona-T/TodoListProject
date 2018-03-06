//Add click listeners to list items.
// Listener strikethroughs the text by toggling "strikethrough" css class.
$("ul").on("click", "li", function() {
    $(this).toggleClass("strikethrough");
});

//Alternative (longer) way of writing above:
// $("li").click(function() {
//     if($(this).css("color") === "rgb(128, 128, 128)") {
//         $(this).css({
//             textDecoration: "none",
//             color: "black"
//         });
//     }
//     else {
//         $(this).css({
//             textDecoration: "line-through",
//             color: "gray"
//         });
//     }
// }); //$("li").click()

//Make "delete list item" buttons(spans) work.
$("ul").on("click", "li span", function(event) {
//Fade out the closest li (parent li in this case) of the "delete" button.
//We could also use parent() function.
    $(this).closest("li").fadeOut(500, function() {
        //After fade out, delete the list item.
        $(this).remove();
    });
    //Stop bubbling to prevent li click listener.
    event.stopPropagation();
})


//Make text input field add new list item.
$("input[name='newTask']").keypress(function(event) {
    
    //Save input value for a variable.
    var inputValue = $(this).val();

    //If user presses enter (which code = 13) and text field is not empty, add new list item.
    if(event.which === 13 && inputValue !== "") {
        //Add new list item with input field's text.
        $("#container ul").append("<li><span><i class='fas fa-trash'></i></span>" + inputValue + "</li>");
        //Empty the input text field.
        $(this).val("");
    }

}); //$("input[name='newTask']").keypress()

//Make hide button work.
$("#header button").on("click", function(){
    //Clicking the button toggles "hide" class for the input text field.
    $("input[name='newTask']").fadeToggle(300);
    //Change the button's icon accordingly.
    $(this).find("svg").toggleClass("fa-minus fa-plus");
    
});