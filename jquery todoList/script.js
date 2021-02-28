//阻止預設送出表單
var liIndex = 0;
$(document).ready(function () {
  
  $("#list-items").html(localStorage.getItem("listItems"));

  $(".add-items").submit(function (event) {
    event.preventDefault();
    var item = $("#todo-list-item").val();



    //將表單列印出，歸零
    if (item) {
      liIndex +=1;
      $("#list-items").append(
        `<li><input class='checkbox' type='checkbox' id='${liIndex}'><label for='${liIndex}'>${item}
        </label><a class='remove'>x</a></li>`
      );
      localStorage.setItem("listItems", $("#list-items").html());
      $("#todo-list-item").val("");
    }
  });

  $(document).on("change", ".checkbox", function () {
    if ($(this).attr("checked")) {
      $(this).removeAttr("checked");
    } else {
      $(this).attr("checked", "checked");
    }

    $(this).parent().toggleClass("checked");
    localStorage.setItem("listItems", $("#list-items").html());
  });

  $(document).on("click", ".remove", function () {
    $(this).parent().remove();
    localStorage.setItem("listItems", $("#list-items").html());
  });
});
