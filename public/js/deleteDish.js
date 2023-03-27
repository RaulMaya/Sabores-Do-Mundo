const deleteDish = (id) =>
  fetch("/api/users/food", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(id),
  });

const noLoveBtn = document.getElementsByClassName("noLoveIt");

for (let i = 0; i < noLoveBtn.length; i++) {
  noLoveBtn[i].addEventListener("click", function () {
    console.log(this.id);
    this.classList.remove("btn-danger");
    this.classList.remove("noLoveIt");
    this.classList.add("btn-outline-danger");
    this.classList.add("loveIt");
    const dishToDelete = {
      id: this.id,
    };
    deleteDish(dishToDelete);
  });
}
