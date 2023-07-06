
$(function () {
// this is the date at the top of the page.
   var today = dayjs();
  $('#1a').text(today.format('dddd, MMM D, YYYY'));

  // this saves the text in the text box.
  $(".saveBtn").click(function funky() {
  var savedDiv = $(this).parent().attr("id")
  var divText = $(this).parent().children("textarea").val();
  localStorage.setItem(savedDiv, divText)
});

// saves the value inputed to each textbox.
$(".description").each(function() {
  var dynDiv = $(this).parent().attr("id")
  $(this).text(localStorage.getItem(dynDiv))
});

// changes the class to past, present, and future.
  var currentHour = today.hour() 

  $(".time-block").each(function () {
      let timeDiv = $(this).attr('id')
      if (currentHour == timeDiv) {
      $(this).addClass("present")
  
      } else if (currentHour < timeDiv) {
        $(this).addClass("future")
  
      } else if (currentHour > timeDiv) {
       $(this).addClass("past")
      }
    })
  


  
});
