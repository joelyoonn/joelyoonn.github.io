$(document).ready(function() {


    var allPs = $("p");
    console.log(allPs);

    var classp = $(".paragraph1");
    console.log(classp);

    var idp = $("#ptag");
    console.log(idp);

    allPs.html("Hi this is my new text")

    idp.html("this is another text i changed")

    idp.click(function(){
      $("img").attr("src","https://i.imgur.com/svwBYuz.jpg")
    })
    
    $(".paragraph1").click(function(){
      $("img").css("opacity","0.5")
    })
});
