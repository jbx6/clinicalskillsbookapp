let pages = document.getElementById("pages");

let interventionsButton = document.getElementById("interventionsButton");
let incidentsButton = document.getElementById("incidentsButton");

let interventionsHtml = `
<div class="clinicalwrapper">
<table class="tg">
<thead>
    <tr>
        <th class="tg-wwtp" colspan="2">DETAILS</th>
        <th class="tg-wwtp">INCIDENT</th>
        <th class="tg-wwtp">REFLECTION</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td class="tg-ldtq">DATE</td>
        <td class="tg-ldtq">INTERVENTION</td>
        <td class="tg-ldtq">DETAILS</td>
        <td class="tg-ldtq">OUTCOME / NOTES</td>
    </tr>
    <tr>
        <td class="tg-dwa0">4 May 2015</td>
        <td class="tg-dwa0">io access</td>
        <td class="tg-dwa0" rowspan="3">65 YOM Myocardial Infarction, transfer to PPCI. Pain score of 8/10.</td>
        <td class="tg-dwa0" rowspan="3">Monitor mmHg, EtCo2, RR, etc. Titrate morphine to effect<br>while being cautious of adverse effects, events, interactions, etc.</td>
    </tr>
    <tr>
        <td class="tg-ldtq">CAD No. </td>
        <td class="tg-ldtq">INDICATION</td>
    </tr>
    <tr>
        <td class="tg-t1kf">877</td>
        <td class="tg-t1kf">cardiac <br>arrest</td>
    </tr>
</tbody>
</table>
</div>`;

let incidentsHtml = `
<div class="clinicalwrapper">
<table class="tg">
<thead>
  <tr>
    <th class="tg-wwtp">DETAILS</th>
    <th class="tg-wwtp">INCIDENT</th>
    <th class="tg-wwtp">REFLECTION</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-ldtq">DATE</td>
    <td class="tg-ldtq">DETAILS</td>
    <td class="tg-ldtq">OUTCOME / NOTES</td>
  </tr>
  <tr>
    <td class="tg-dwa0">4 May 2015</td>
    <td class="tg-dwa0" rowspan="3">65 YOM Myocardial Infarction, transfer to PPCI. Pain score of 8/10.</td>
    <td class="tg-dwa0" rowspan="3">Monitor mmHg, EtCo2, RR, etc. Titrate morphine to effect<br>while being cautious of adverse effects, events, interactions, etc.</td>
  </tr>
  <tr>
    <td class="tg-ldtq">CAD No. </td>
  </tr>
  <tr>
    <td class="tg-t1kf">877</td>
  </tr>
</tbody>
</table>
</div>`;

function renderInterventionsHtml() {
    pages.innerHTML = interventionsHtml;
}

function renderIncidentsHtml() {
    pages.innerHTML = incidentsHtml;
}

let testHtml = `
<div class="clinicalwrapper">
<p>Please choose from a button below to proceed!</p>
</div<`;

function testRender() {
    pages.innerHTML = testHtml;
}


interventionsButton.addEventListener('click', renderInterventionsHtml)
incidentsButton.addEventListener('click', renderIncidentsHtml)

testRender()