const submit = document.getElementById("button-submit");
const ratingForm = document.getElementById("rating-form");

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
}

submit.addEventListener("click", handleForSubmit);
