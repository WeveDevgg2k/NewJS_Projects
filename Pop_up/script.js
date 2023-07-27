const popup = document.querySelector(".pop-up")
const cancelBtn = document.querySelector("#cancel-btn")


localStorage.removeItem("popupDisplayed")

document.addEventListener("mouseout", (ev) => {
  const isDisplayed = localStorage.getItem("popupDisplayed")
  if (!isDisplayed && ev.relatedTarget === null) {
    popup.style.display = "block"
  }
})

cancelBtn.addEventListener("click", () => {
  popup.style.display = "none"

  localStorage.setItem("popupDisplayed", true)
})