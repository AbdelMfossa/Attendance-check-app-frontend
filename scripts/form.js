

export const form = () => {
  const inputs = [...document.querySelectorAll(".js-input")];

  inputs.forEach(inp => {
    inp.onfocus = function() {
      const label = document.querySelector(`#label-${inp.id}`);

      label.classList.add("form-label-focused");
      label.classList.add("form-label-focused-color");
      inp.classList.add("form-label-focused-color");
    }

    inp.onblur = function() {
      const label = document.querySelector(`#label-${inp.id}`);

      label.classList.remove("form-label-focused-color");

      if (inp.value.length === 0) {
        label.classList.remove("form-label-focused");
      }
    }
  });
}
