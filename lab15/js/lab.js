/*
Lab 15: AJAX
Author: Kyla Florentino
Date: 2 Jun 2025
*/

const ajaxObj = {
    url: "https://yesno.wtf/api",
    data: {},
    type: "GET",
    dataType: "json"
}
  
// when user clicks button
$("#balls").click(function() {
    console.log("click");
    // use jquery ajax to fetch output
    $.ajax(ajaxObj)
    // callback for success - chained to ajax
    .done(function(data) {
      console.log("Success!");
      console.log(data);
      // extract the answer from data
      let answer = data.answer;
      let imgURL = data.image;
      let imageHTML = `<img src='${imgURL}'>`;
      // insert the output in the output div
      $("#output").html("<h3>" + answer + "</h3>");
      $("#output").append(imageHTML);
    })
    // callback for failure - chained to ajax
    .fail(function(xhr, status, errorThrown) {
      console.log(errorThrown + " Status:" + status );
    })
 })