function display(conference) {
    var conferenceType = conference.getAttribute("data-college-type");
    alert(conferenceType + " is in the " + conference.innerHTML + " conference");
}