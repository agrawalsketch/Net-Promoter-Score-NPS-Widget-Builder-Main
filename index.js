let rate;
let opinion = "";

$("button").click(function () {
  var $this = $(this);
  var $prevAll = $(this).prevAll();

  $("button").removeClass("detractor-hover passive-hover promoter-hover");

  var className = $this.attr("class") + "-hover";

  rate = $this.context.innerText;

  $this.addClass(className);
  $prevAll.addClass(className);
});

$("textarea").change(function () {
  console.log(this);
});

jQuery("#send-nps").click(function () {
  opinion = $("#textarea").val();
  if (rate <= 7 && opinion === "") {
    window.alert("Please give your valuable feedback in the given area below");
    return;
  }
  localStorage.setItem("Rating", rate);
  localStorage.setItem("Opinion", opinion)
  console.log(rate, opinion);
});
