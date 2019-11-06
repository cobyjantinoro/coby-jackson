$(document).ready(function() {


  $("#logicButton").mouseover(function() {
    $("#logicButton").css("background-color", "dark blue")
  })


  $("h1").mouseleave(function() {
    $("button").css("background-color", "rgb(22, 54, 150)")
  })

  $(".sd").hide()


  $("#button1").click(function() {
    $("#text1").toggle(500)
  })

  $("#button2").click(function() {
    $("#text2").toggle(500)
  })
  $("#button3").click(function() {
    $("#text3").toggle(500)
  })
  $("#button4").click(function() {
    $("#text4").toggle(500)
  })
  $("#button5").click(function() {
    $("#text5").toggle(500)
  })

  $("#button6").click(function() {
    $("#text6").slideToggle(500)

  })

  $("#visible").hide()


  var ab = true

  $("#logicButton").click(function() {
    if (ab == true) {
      $("#visible").hide()
      ab = false
      $("#logicButton").html("Show")
    } else {
      $("#visible").show()
      ab = true
      $("#logicButton").html("Hide")
    }
  })


  var i;
  var learn = ["https://www.visitcopenhagen.com"]

  $("#learnButton").click(function() {
    for (i = 0; i < learn.length; i++) {
      $("#more").append(learn[i] + "<br>")
    }
  })
})
