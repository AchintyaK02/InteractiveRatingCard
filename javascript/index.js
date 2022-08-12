var selectedNumber = 0;

for(var i = 0 ; i< 5; i++){
    document.querySelectorAll(".number")[i].addEventListener("click" , function () {
        previousNumber = selectedNumber;
        selectedNumber = this.innerHTML;
        selectNumber(previousNumber , selectedNumber);
    });
}

function selectNumber(num1 ,num2){
  if(num1 !== 0){
      document.querySelectorAll(".number")[num1-1].classList.remove("selected");
  }
  document.querySelectorAll(".number")[num2-1].classList.add("selected");
}

document.querySelector(".submit-button").addEventListener("click" ,function(){
  if(selectedNumber == 0){
    alert("Please select a rating first");
  } else {
    document.querySelector(".rating-state").classList.add("hiddenCard");
    document.querySelector(".thankyou-state").classList.remove("hiddenCard");
    document.querySelector(".rating").innerHTML = selectedNumber;
  }

});
