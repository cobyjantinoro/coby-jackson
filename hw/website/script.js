$(document).ready(function() {

  $("#logicButton").mouseover(function() {
    $("#logicButton").css("background-color", "dark orange")
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
    $("#text6").toggle(500)
  })
  $("#button7").click(function() {
    $("#text7").toggle(500)
  })
  $("#button8").click(function() {
    $("#text8").toggle(500)
  })
  $("#button9").click(function() {
    $("#text9").toggle(500)
  })
})
