const submitButton = document.querySelector(".submit-button");
const inputName = document.querySelector(".name-input");
const inputJob = document.querySelector(".job-input");

async function postFunction() {
  const response = await fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: inputName.value,
      job: inputJob.value,
    }),
  });
  const message = await response.json();

  !response.ok ? console.log("Error!") : console.log(message);
}

submitButton.addEventListener("click", () => {
  if (inputName.value != "" && inputJob.value != "") {
    postFunction();
    inputName.style.border = inputJob.style.border = "none";
    inputName.value = inputJob.value = "";
  } else {
    inputName.style.border = inputJob.style.border = "1px solid red";
  }
});
