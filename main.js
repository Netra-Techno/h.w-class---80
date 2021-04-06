function Get_Paragraph1() {
    var inputs = [];
    for (var i = 1; i <= 6; i++) {
        inputs.push(document.getElementById("para1_input_box_" + i).value);
    }
    inputs.join("");
    document.getElementById("Show_Paragraph1").innerHTML = inputs.join("");

}