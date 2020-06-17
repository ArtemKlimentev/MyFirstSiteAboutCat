




change.onclick=function(){
document.getElementById("phot").src="img/banner-2.png"
}
root.onclick=function(){
document.getElementById("phot").src="img/banner-1.jpg.png"
}
var popap=document.querySelector(".kont-popap");
var popapClose=document.querySelector(".close");
var form=document.querySelector(".popap");
var yes=document.querySelector(".yes");
var popapSub = document.querySelector('.popap-button')
var popapSub2 = document.querySelector('.popap-button2')
popap.addEventListener("click",function(evt){
  evt.preventDefault();
  form.classList.add("popap-show");
});
popapClose.addEventListener("click",function(evt){
    evt.preventDefault();
    form.classList.remove("popap-show");
});
popapSub.addEventListener('click',function(evt){
	evt.preventDefault();
    form.classList.remove("popap-show");
    yes.classList.add('yes-show');	
    
});
popapSub2.addEventListener('click',function(evt){
	evt.preventDefault();	
yes.classList.remove('yes-show')
});
