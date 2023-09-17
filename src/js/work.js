export default function hover() {
      /* Demo purposes only */
      const elements = document.querySelectorAll(".hover");

      // Loop through each element and add a mouseleave event listener
      elements.forEach(element => {
        element.addEventListener("mouseleave", () => {
          element.classList.remove("hover");
        });
      });
}