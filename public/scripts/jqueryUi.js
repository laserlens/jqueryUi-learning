$( function() {
//allows the elemnets inside the div row to highlight when selected
$( "#selectable" ).selectable();
// elements inside the div row
// makes the drag me element draggable
$( "#uiElement1" ).draggable();
//makes the strech me element strechy
$( "#uiElement2" ).resizable();
//applies both strechy and drag ablity to the element
$( "#uiElement3" ).draggable().resizable();


});//end of jquery function
