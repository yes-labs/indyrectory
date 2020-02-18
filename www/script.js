"use strict";

const $ = document.querySelector.bind(document);

(async function() {
  await initUI();
})();

async function initUI() {
  //$("#submit-project").addEventListener("click", showDialog("submit"));
}

function showDialog(name) {
  return (e) => {
    let dialog = $(`#${name}-dialog`);
    dialog.style.display = "flex";
  }
}
