/*
Lab 16: JSON and APIs
Author: Kyla Florentino
Date: 5 June 2025
*/

const comicObj = {
    url: "https://xkcd.com/614/info.0.json",
    // data: {};
    type: "GET",
    dataType: "json"
};

$.ajax(comicObj)
    // callback for success - chained to ajax
    .done(function(data) {
      console.log("Success!");
      console.log(data);
      // extract the answer from data
      let title = data.title;
      let text = data.transcript;
      let imgURL = data.img;
      let imageHTML = `<img src='${imgURL}'>`;
      // insert the output in the output div
      $("#output").html("<h3>" + title + "</h3>" + "<p>" + text + "</p>");
      $("#output").append(imageHTML);
    })
    // callback for failure - chained to ajax
    .fail(function(xhr, status, errorThrown) {
      console.log(errorThrown + " Status:" + status );
    })