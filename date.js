
module.exports = getDay;

function getDay() {
    var today = new Date();
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var date = today.toLocaleDateString("en-US", options);
    return date;
}
