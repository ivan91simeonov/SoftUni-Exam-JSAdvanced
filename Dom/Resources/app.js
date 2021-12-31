window.addEventListener("load", solve);

function solve() {
  const [clName, phone] = document.querySelectorAll("#right input");
  const description = document.getElementById("description");
  const type = document.getElementById("type-product");

  document.querySelector("#right button").addEventListener("click", onClick);

  function onClick(e) {
    e.preventDefault();
    const received = document.getElementById("received-orders");

    if (
      clName.value == "" ||
      phone.value == "" ||
      description.value == "" ||
      type.value == ""
    ) {
      return;
    }

    const div = document.createElement("div");
    div.className = "container";

    received.appendChild(div);

    const h2 = document.createElement("h2");
    h2.textContent = `Product type for repair: ${type.value}`;
    div.appendChild(h2);

    const h3 = document.createElement("h3");
    h3.textContent = `Client information: ${clName.value}, ${phone.value}`;
    div.appendChild(h3);

    const h4 = document.createElement("h4");
    h4.textContent = `Description of the problem: ${description.value}`;
    div.appendChild(h4);

    const startBtn = document.createElement("button");
    startBtn.className = "start-btn";
    startBtn.textContent = "Start repair";
    div.appendChild(startBtn);

    const finishBtn = document.createElement("button");
    finishBtn.className = "finish-btn";
    finishBtn.textContent = "Finish repair";
    finishBtn.disabled = true;
    div.appendChild(finishBtn);

    startBtn.addEventListener("click", (e) => {
      e.target.disabled = true;
      finishBtn.disabled = false;

      finishBtn.addEventListener("click", (e) => {
        const completed = document.getElementById("completed-orders");
        const bt1 = e.target.parentElement.children[3];
        const btn2 = e.target.parentElement.children[4];

        bt1.remove();
        btn2.remove();
        completed.appendChild(div);

        document
          .querySelector("#completed-orders button")
          .addEventListener("click", (e) => {
            div.remove();
          });
      });
    });

    clName.value = "";
    description.value = "";
    phone.value = "";
  }
}
