
let homeButton = document.getElementById("homeButton");
let profileButton = document.getElementById("profileButton");
let airwaysButton = document.getElementById("airwayButton");
let medicationButton = document.getElementById("medicationButton");
let clinicalButton = document.getElementById("clinicalButton");
let governanceButton = document.getElementById("governanceButton");

function navigate(page) {
      // Redirect to the index.html page
      window.location.href = `${page}.html`;
}

homeButton.addEventListener("click", function() {
    navigate('index')
})
profileButton.addEventListener("click", function() {
    navigate("profile")
})
airwaysButton.addEventListener("click", function() {
    navigate("airways")
})
medicationButton.addEventListener("click", function() {
    navigate("medication")
})
clinicalButton.addEventListener("click", function() {
    navigate("clinical")
})
governanceButton.addEventListener("click", function() {
    navigate("governance")
})