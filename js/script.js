$(".fam_list").hide();
$(".fam_btn").click(function(){
  $(".fam_list").slideToggle(100);
})


$(".sub_bg").hide();
$(".menu>li").mouseover(function(){
  $(this).children(".sub_bg").stop().slideDown(300);
})
$(".menu>li").mouseout(function(){
  $(this).children(".sub_bg").stop().slideUp(300);
})