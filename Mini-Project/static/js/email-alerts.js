// Initialize EmailJS
emailjs.init("jXvXhNRsEHNLsbS8V");

// Prevent duplicate emails in same session
const sentAlerts = new Set();

function sendFinanceAlert(userId, message) {

    // Avoid duplicate alerts
    const key = userId + message;

    if (sentAlerts.has(key)) {
        return;
    }

    sentAlerts.add(key);

    emailjs.send(
        "service_83ifdsp",
        "template_5txq00d",
        {
            user_id: userId,
            message: message
        }
    )
    .then(function() {
        console.log("Finance alert email sent");
    })
    .catch(function(error) {
        console.log("Email failed:", error);
    });
}
