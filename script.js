const submit = document.getElementById("button-submit");
const ratingForm = document.getElementById("rating-form");
const cardContent = document.getElementById("card_content");
const thankYouContent = document.getElementById("ty_container");
const tyHeading = document.getElementById("ty_heading");
function handleForSubmit(event) {
  event.preventDefault();

  const radioButtons = ratingForm.querySelectorAll('input[name="rating"]');

  let selectedValue = null;

  radioButtons.forEach(function (radioButton) {
    if (radioButton.checked) {
      selectedValue = radioButton.value;
    }
  });

  if (selectedValue != null) {
    console.log("Selected rating is:", selectedValue);
  } else {
    console.log("Please choose a value");
  }

  tyHeading.innerHTML = `You selected ${selectedValue} out of 5`;
  cardContent.style.display = "none";
  thankYouContent.style.display = "flex";
}

submit.addEventListener("click", handleForSubmit);
