console.log("js connected");

let container = document.getElementById("container");

/**
 * draw a grid of draggable boxes
 */

let gridBoxes = [
  { id: 1, label: "Box 1" },
  { id: 2, label: "Box 2" },
  { id: 3, label: "Box 3" },
  { id: 4, label: "Box 4" },
  { id: 5, label: "Box 5" },
  { id: 6, label: "Box 6" },
  { id: 7, label: "Box 7" },
  { id: 8, label: "Box 8" },
  { id: 9, label: "Box 9" },
  { id: 10, label: "Box 10" },
  { id: 11, label: "Box 11" },
  { id: 12, label: "Box 12" },
  { id: 13, label: "Box 13" },
  { id: 14, label: "Box 14" },
  { id: 15, label: "Box 15" },
  { id: 16, label: "Box 16" },
  { id: 17, label: "Box 17" },
  { id: 18, label: "Box 18" },
  { id: 19, label: "Box 19" },
  { id: 20, label: "Box 20" },
];

function renderGridBoxes() {
  console.log("called");
  gridBoxes.forEach((box) => {
    const boxElem = document.createElement("div");
    boxElem.className = "box";
    boxElem.textContent = box.label;
    boxElem.draggable = true;
    container.appendChild(boxElem);
  });
}

renderGridBoxes();
