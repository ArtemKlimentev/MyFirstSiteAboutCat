change.onclick=function(){
document.getElementById("phot").src="img/banner-2.png"
}
root.onclick=function(){
document.getElementById("phot").src="img/banner-1.jpg.png"
}
var popap=document.querySelector(".kont-popap");
var popapClose=document.querySelector(".close");
var form=document.querySelector(".popap");
popap.addEventListener("click",function(evt){
  evt.preventDefault();
  form.classList.add("vis");
});
popapClose.addEventListener("click",function(evt){
    evt.preventDefault();
    form.classList.remove("vis");
});
