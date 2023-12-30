let pages = document.getElementById("pages");
let administrationDateTimeInput = document.getElementById("administrationDateTime");
let medicationAdministeredInput = document.getElementById("medicationAdministered");
let cadNumberInput = document.getElementById("cadNumber");
let medicationIndicationInput = document.getElementById("medicationIndication");
let detailsTextAreaInput = document.getElementById("detailsTextArea");
let outcomeNotesTextAreaInput = document.getElementById("outcomeNotesTextArea");
let submitMedicationSubmissionButton = document.getElementById("submitMedicationSubmission");
let submissionOutputElement = document.getElementById("submissionOutput");

function returnDateTime() {
    let dateTime = administrationDateTimeInput.value;
    let dateTimeFormatted = "Date and Time: " + dateTime

    return dateTimeFormatted;
}

function returnMedicationAdminstered() {
    let medicationAdministered = medicationAdministeredInput.value;
    let medicationAdministeredFormatted = "Medication: " + medicationAdministered;

    return medicationAdministeredFormatted;
}

function returnCadNumber() {
    let cadNumber = cadNumberInput.value;
    let cadNumberFormatted = "CAD/ Incident Number: " + cadNumber;

    return cadNumberFormatted;
}

function returnIndication() {
    let indication = medicationIndicationInput.value;
    let indicationFormatted = "Indication: " + indication;

    return indicationFormatted;
}

function returnDetails() {
    let details = detailsTextAreaInput.value;
    let detailsFormatted = "Details: " + details;

    return detailsFormatted;
}

function returnOutcomeNotes() {
    let outcomeNotes = outcomeNotesTextAreaInput.value;
    let outcomeNotesFormatted = "Outcome/ Notes: " + outcomeNotes

    return outcomeNotesFormatted;
}

// ... (Your existing code)

function renderToScreenAndDownload() {
    const dateTime = returnDateTime();
    const medicationAdministered = returnMedicationAdminstered();
    const cadNumber = returnCadNumber();
    const indication = returnIndication();
    const details = returnDetails();
    const outcomeNotes = returnOutcomeNotes();

    // Display results on the screen
    submissionOutputElement.innerText = "";
    submissionOutputElement.innerText = dateTime + "\n";
    submissionOutputElement.innerText += medicationAdministered + "\n";
    submissionOutputElement.innerText += cadNumber + "\n";
    submissionOutputElement.innerText += indication + "\n";
    submissionOutputElement.innerText += details + "\n";
    submissionOutputElement.innerText += outcomeNotes + "\n";

    // Generate a blob with the text content
    const textContent = `${dateTime}\n${medicationAdministered}\n${cadNumber}\n${indication}\n${details}\n${outcomeNotes}`;
    const blob = new Blob([textContent], { type: "text/plain" });

    // Create a download link
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "medication_submission.txt";

    // Create a button for the user to initiate the download
    const downloadButton = document.createElement("button");
    // Add a class to the button
    downloadButton.classList.add("tab");

    const tabDiv = document.createElement("div")
    tabDiv.classList.add("tabs")
    tabDiv.appendChild(downloadButton)
    const br = document.createElement("br");
    downloadButton.textContent = "Download Medication Submission";
    downloadButton.addEventListener("click", function () {
        // Programmatically click the hidden download link
        downloadLink.click();
    });

    // Append the button to the document
    submissionOutputElement.appendChild(br);
    submissionOutputElement.appendChild(tabDiv);
}

submitMedicationSubmissionButton.addEventListener("click", renderToScreenAndDownload);