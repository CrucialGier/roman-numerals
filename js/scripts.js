
$(document).ready(function() {
  $("#result").click(function(event) {
    debugger;
    event.preventDefault();
    var number = parseInt($("#input").val());
    var input = $("#input").val().split("").reverse();
    var inputN = input.map(function(stringNumber) {
      return parseInt(stringNumber);
    });
    var result = [];

    var digit1 = ["I", "II", "IIV", "IV", "V", "VI", "VII", "IIX", "IX"];
    var digit2 = ["X", "XX", "XXL", "XL", "L", "LX", "LXX", "XXC", "XC"];
    var digit3 = ["C", "CC", "CCD", "CD", "D", "DC", "DCC", "CCM", "CM"];
    var digit4 = ["M", "MM", "MMM"];

    if (number > 3999) {
      alert("Only numbers between 1 and 3,999 please");
    } else if (number <= 0){
      alert("Only posative numbers please");
    } else {
      for (var i = 0; i <= digit1.length; i++) {
        if (inputN[0] === i+1) {
          alert(digit1[i]);
          break;
        };
      };
      for (var i = 0; i <= digit2.length; i++) {
        if (inputN[1] === i+1) {
          alert(digit2[i]);
          break;
        };
      };
      for (var i = 0; i <= digit3.length; i++) {
        if (inputN[2] === i+1) {
          alert(digit3[i]);
          break;
        };
      };
      for (var i = 0; i <= digit4.length; i++) {
        if (inputN[3] === i+1) {
          alert(digit4[i]);
          break;
        };
      };
    };
  });
});
