$(function () {
  $("#change-color").on({
    click: () => {
      $("p").css("color", "red");
    },
  });
  $("#change-text").on({
    click: () => {
      $("p").text("Hello!");
    },
  });
  $("#fade-out").on("click", function () {
    $("#target").fadeOut();
  });
  $("#fade-in").on("click", function () {
    $("#target").fadeIn();
  });
});
