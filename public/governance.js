let pages = document.getElementById("pages")

let governanceOptionButton = document.getElementById("governanceOptionButton");
let coursesOptionButton = document.getElementById("coursesOptionButton");

let governanceHtml = `
<div class="governancewrapper">
<table class="tg">
<thead>
  <tr>
    <th class="tg-wwtp">DETAILS: Cases Discussed / Team Training</th>
    <th class="tg-wwtp">INCIDENT: Discussion Points</th>
    <th class="tg-wwtp">WITNESSED</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-dwa0"><br>Date: Monitor mmHg, EtCo2, RR, etc. Titrate morphine to effect while being cautious <br><br>of adverse effects, events, interactions, etc.<br></td>
    <td class="tg-dwa0">65 YOM Myocardial Infarction, transfer to PPCI. <br><br>Pain score of 8/10.</td>
    <td class="tg-9zh8"><span style="font-weight:400;font-style:italic">Sign:</span></td>
  </tr>
</tbody>
</table>
</div>`;

let incidentsHtml = `
<div class="governancewrapper">
<table class="tg">
<thead>
  <tr>
    <th class="tg-wwtp">DETAILS: Training, conferences or Courses</th>
    <th class="tg-wwtp">LEARNING POINTS: Reflections</th>
    <th class="tg-wwtp">WITNESSED</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-dwa0"><br>Date: Monitor mmHg, EtCo2, RR, etc. Titrate morphine to effect while being cautious <br><br>of adverse effects, events, interactions, etc.<br></td>
    <td class="tg-dwa0">65 YOM Myocardial Infarction, transfer to PPCI. <br><br>Pain score of 8/10.</td>
    <td class="tg-9zh8"><span style="font-weight:400;font-style:italic">Sign:</span></td>
  </tr>
</tbody>
</table>
</div>`;

function renderGovernanceOptionHtml() {
    pages.innerHTML = governanceHtml;
}

function renderCoursesOptionHtml() {
    pages.innerHTML = incidentsHtml;
}

let testHtml = `
<div class="governancewrapper">
<p>Please choose from a button below to proceed!</p>
</div<`;

function testRender() {
    pages.innerHTML = testHtml;
}


governanceOptionButton.addEventListener('click', renderGovernanceOptionHtml)
coursesOptionButton.addEventListener('click', renderCoursesOptionHtml)

testRender()