
// Function to calculate due date
function calculateDueDate() {
    var lastMenstrualDate = new Date(document.getElementById("last-menstrual-date").value);
    var estimatedDueDate = new Date(lastMenstrualDate.getTime() + 280 * 24 * 60 * 60 * 1000); // Assuming pregnancy lasts for 280 days
    document.getElementById("due-date-result").innerText = estimatedDueDate.toDateString();
}

// Function to calculate risk assessment
function calculateRiskAssessment() {
    var score = 0;
    var question1Answer = document.querySelector('input[name="question1"]:checked').value;
    var question2Answer = document.querySelector('input[name="question2"]:checked').value;

    // Assign scores based on answers
    if (question1Answer === 'yes') score += 1;
    if (question2Answer === 'no') score += 1;

    // Determine risk level based on score
    var riskLevel = '';
    if (score <= 1) {
        riskLevel = 'Low';
    } else if (score <= 2) {
        riskLevel = 'Moderate';
    } else {
        riskLevel = 'High';
    }

    document.getElementById("risk-assessment-result").innerText = riskLevel;
}

document.getElementById('language-select').addEventListener('change', function() {
  var selectedLanguage = this.value;
  var elementsToTranslate = document.querySelectorAll('[data-lang]');

  elementsToTranslate.forEach(function(element) {
    var translations = element.dataset.lang.split(',');

    if (translations.length > 0) {
      element.textContent = translations[selectedLanguage === 'tl' ? 1 : 0].trim();
    }
  });
});
