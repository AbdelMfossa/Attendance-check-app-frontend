import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';

export const form = () => {
  const inputs = [...document.querySelectorAll(".js-input")];

  inputs.forEach(inp => {
    inp.onfocus = function () {
      const label = document.querySelector(`#label-${inp.id}`);

      label.classList.add("form-label-focused");
      label.classList.add("form-label-focused-color");
      inp.classList.add("form-label-focused-color");
    }

    inp.onblur = function () {
      const label = document.querySelector(`#label-${inp.id}`);

      label.classList.remove("form-label-focused-color");

      if (inp.value.length === 0) {
        label.classList.remove("form-label-focused");
      }
    }
  });
}

export function respon() {
  let mainInterface = document.getElementById("interface");

  mainInterface.style.height = `${window.innerHeight - 100}px`;

  window.onresize = function() {
    mainInterface.style.height = `${window.innerHeight - 100}px`;
  }
}
