const shirtColor = $("#imageToSwap");
const selectedIcon = $("#gameImageSwap");

$("#shirtSave").click(function(event){
    event.preventDefault()
    console.log("click");
    console.log(selectedIcon.attr('src'));
    console.log(shirtColor.attr('src'));
    $.post("/api/tee", {
       color: shirtColor.attr('src'),
       icon: selectedIcon.attr('src')
    })
})