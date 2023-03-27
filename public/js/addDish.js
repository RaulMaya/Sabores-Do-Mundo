const saveDish = (id) =>
  fetch("api/users/food", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(id),
  });

const loveBtn = document.getElementsByClassName("loveIt");

for (let i = 0; i < loveBtn.length; i++) {
  loveBtn[i].addEventListener("click", function () {
    console.log(this.id);
    const dishAddition = {
      id: this.id,
    };
    saveDish(dishAddition);
  });
}
