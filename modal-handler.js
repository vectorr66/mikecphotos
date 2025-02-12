// modal-handler.js

export function initializeModal() {
    document.addEventListener("DOMContentLoaded", function () {
        // Create modal structure
        var modal = document.createElement("div");
        modal.id = "modal-container";
        modal.style.display = "none"; // Hide initially
        modal.innerHTML = `
            <div id="modal-content">
                <button id="modal-close">&times;</button>
                <iframe id="modal-iframe" src=""></iframe>
            </div>
        `;
        document.body.appendChild(modal);

        var iframe = document.getElementById("modal-iframe");
        var closeButton = document.getElementById("modal-close");

        // Event listener for multiple images
        document.querySelectorAll(".open-modal").forEach(button => {
            button.addEventListener("click", function () {
