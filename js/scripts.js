// User interface logic
$(function(){

  $("#submit").click(function(){
    var year= $("input#leap").val();
    var output=leapyear(year)
    $(".year").text(year)
    if(!output){
      $(".not").text("not");
    }
    else{
      $(".not").text("");

    }
    $("#output").show();

  });
});

// business Logic
var leapyear=function(year){
  if((year%4===0)&&(year%100!==0)||(year%400===0)){
    return true;
  }
  else{
    return false;
  }
};
