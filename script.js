// Toggle journey board expansion
function toggleJourneyBoard() {
    document.getElementById("journeyBoard").classList.toggle("expanded");
}

// Toggle notice board
function toggleNoticeBoard() {
    alert("This is the Notice Board.");
}

// Function to toggle collapsible sections
function toggleSection(sectionId) {
    const content = document.getElementById(sectionId);
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}

// Function to display notice board information
document.querySelector(".notice-board").addEventListener("click", function() {
    alert("This is the Notice Board.");
});

document.querySelector(".pointer-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Your pointers have been submitted!");
});
