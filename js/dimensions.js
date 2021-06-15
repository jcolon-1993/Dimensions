$(function()
{
  /*A variable called listHeight
  is created to store the height of
  the page container */
  var listHeight = $("#page").height();

  /* The height of the page is
  written at the end of the list
  using the .append () method. */
  $("ul").append("<p>Height: " + listHeight + "px</p>");

  /* The selector picks all the <li>
  elements and sets their width to
  50% of their current width using
  the .width() method. */
  $("li").width("50%");

  /* These two statements set
  the width of the first list item to
  125 pixels and the width of the
  second list item to be 75% of
  the width it was when the page
  loaded. */
  $("li#one").width(125);
  $("li#two").width("75%");
});
