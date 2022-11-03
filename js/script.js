const row = ["Rad 1", "Rad 2", "Rad 3", "Rad 4", "Rad 5"];
console.log(row);

for (let i = 0; i < row.length; i++) {
  console.log(row[i]);
}

for (let i = 0; i < row.length; i++) {
  const h1Element = document.createElement("h1");
  document.body.appendChild(h1Element);
  h1Element.innerText = row[i];
  h1Element.style.backgroundColor = `hsl(140, 100%, 75%)`;
  h1Element.style.color = `hsl(240, 80%, 70%)`;
  document.body.style.textAlign = "center";

  if (row[i] == "Rad 2") {
    h1Element.style.fontSize = "3em";
    h1Element.style.backgroundColor = `hsl(143, 100%, 80%)`;
  } else if (row[i] == "Rad 3") {
    h1Element.style.fontSize = "4em";
    h1Element.style.backgroundColor = `hsl(159, 100%, 82%)`;
  } else if (row[i] == "Rad 4") {
    h1Element.style.fontSize = "5em";
    h1Element.style.backgroundColor = `hsl(178, 100%, 80%)`;
  } else if (row[i] == "Rad 5") {
    h1Element.style.fontSize = "6em";
    h1Element.style.backgroundColor = `hsl(201, 66%, 83%)`;
  }
}
const divcontainer = document.createElement("div");
document.body.appendChild(divcontainer);
divcontainer.style.display = "flex";
divcontainer.style.padding = "5rem";
divcontainer.style.border = "1px solid black";
divcontainer.style.justifyContent = "space-around";

for (let i = 0; i < 3; i++) {
  const div = document.createElement("div");
  divcontainer.appendChild(div);
  div.style.display = "flex";
  div.style.flexFlow = "column wrap";
  div.style.width = "4rem";
  div.style.padding = "1rem";
  div.style.backgroundColor = "hotpink";

  if (i === 0) {
    for (let i = 0; i < 10; i++) {
      const p = document.createElement("p");
      p.innerText = [i];
      p.style.display = "flex";
      p.style.flexFlow = "column nowrap";
      p.style.margin = "0px";
      div.appendChild(p);

      if (i % 2 == 0) {
        p.style.background = "black";
        p.style.color = "white";
      } else {
        p.style.backgroundColor = "white";
      }
      if (i == 4) {
        p.style.backgroundColor = null;
      }
    }
  } else if (i === 1) {
    for (let i = 9; i >= 0; i--) {
      const p = document.createElement("p");
      p.innerText = [i];
      p.style.display = "flex";
      p.style.flexFlow = "column nowrap";
      p.style.margin = "0px";
      p.style.textAlign = "center";
      div.appendChild(p);

      if (i % 2 == 0) {
        p.style.background = "black";
        p.style.color = "white";
      } else {
        p.style.backgroundColor = "white";
      }
      if (i == 8) {
        p.style.backgroundColor = null;
      }
    }
  } else if (i === 2) {
    const nletter = [
      "ett",
      "två",
      "tre",
      "fyra",
      "fem",
      "sex",
      "sju",
      "åtta",
      "nio",
      "tio",
    ];
    for (let i = 0; i < nletter.length; i++) {
      const p = document.createElement("p");
      p.innerText = nletter[i];
      p.style.display = "flex";
      p.style.flexFlow = "column nowrap";
      p.style.margin = "0px";
      p.style.textAlign = "right";
      div.appendChild(p);

      if (i % 2 == 0) {
        p.style.background = "black";
        p.style.color = "white";
      } else {
        p.style.backgroundColor = "white";
      }
      if (i == 5) {
        p.style.backgroundColor = null;
      }
    }
  }
}

