// Logic gate functions
function AND(a, b) {
  return a && b;
}

function OR(a, b) {
  return a || b;
}

function NOT(a) {
  return !a;
}

function NAND(a, b) {
  return !(a && b);  // NAND gate is the inverse of AND
}

function NOR(a, b) {
  return !(a || b);  // NOR gate is the inverse of OR
}

// Event listeners for buttons
document.getElementById("and-btn").addEventListener("click", function() {
  let a = document.getElementById("input-a").checked;
  let b = document.getElementById("input-b").checked;
  document.getElementById("output").textContent = `AND Output: ${AND(a, b)}`;
});

document.getElementById("or-btn").addEventListener("click", function() {
  let a = document.getElementById("input-a").checked;
  let b = document.getElementById("input-b").checked;
  document.getElementById("output").textContent = `OR Output: ${OR(a, b)}`;
});

document.getElementById("not-btn").addEventListener("click", function() {
  let a = document.getElementById("input-a").checked;
  document.getElementById("output").textContent = `NOT Output: ${NOT(a)}`;
});

document.getElementById("nand-btn").addEventListener("click", function() {
  let a = document.getElementById("input-a").checked;
  let b = document.getElementById("input-b").checked;
  document.getElementById("output").textContent = `NAND Output: ${NAND(a, b)}`;
});

document.getElementById("nor-btn").addEventListener("click", function() {
  let a = document.getElementById("input-a").checked;
  let b = document.getElementById("input-b").checked;
  document.getElementById("output").textContent = `NOR Output: ${NOR(a, b)}`;
});
