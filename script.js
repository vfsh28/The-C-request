function nextScreen(number) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById("screen" + number).classList.add("active");

  window.scrollTo(0, 0);
}


function answer(next, type) {

  if (type === "onTime") {
    document.getElementById("departureResponse").innerHTML = `
      <div class="status">⚠ UNUSUAL RESPONSE DETECTED</div>
      <p class="system-message">
        PROCEEDING WITH CAUTION.
      </p>
    `;
  }

  if (type === "mst") {
    document.getElementById("departureResponse").innerHTML = `
      <div class="status">⚠ DELAY ANTICIPATED</div>
      <p class="system-message">
        AS EXPECTED.
      </p>
    `;
  }

  nextScreen(next);
}


function ageAnswer() {
  nextScreen(6);
}


function handsomeAnswer() {
  nextScreen(8);
}


function runChecks() {

  nextScreen(10);

  setTimeout(() => {
    document.getElementById("check1").innerHTML =
      "VERIFYING CREW............. ✓";
  }, 700);

  setTimeout(() => {
    document.getElementById("check2").innerHTML =
      "AGE CHECK.................. ✓";
  }, 1400);

  setTimeout(() => {
    document.getElementById("check3").innerHTML =
      "HANDSOMENESS CHECK......... ✓";
  }, 2100);

  setTimeout(() => {
    document.getElementById("check4").innerHTML =
      "PUNCTUALITY................ QUESTIONABLE";
  }, 2800);

  setTimeout(() => {
    nextScreen(11);
  }, 4300);
}

function accessFlightPlan() {

  nextScreen(13);

  setTimeout(() => {
    document.getElementById("access1").innerHTML =
      "VERIFYING CLEARANCE......... ✓";
  }, 800);

  setTimeout(() => {
    document.getElementById("access2").innerHTML =
      "DECRYPTING FLIGHT PLAN...... ✓";
  }, 1600);

  setTimeout(() => {
    document.getElementById("access3").innerHTML =
      "BIRTHDAY MESSAGE............ ✓";
  }, 2400);

  setTimeout(() => {
    document.getElementById("access3").innerHTML =
      "ACCESS GRANTED.............. ✓";
  }, 3200);

  setTimeout(() => {
    nextScreen(12);
  }, 4200);
}
