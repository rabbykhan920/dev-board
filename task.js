    const cardButtons = document.querySelectorAll('.task-card button');
const activityLogMessages = document.getElementById('activityLog');
const clearHistoryBtn = document.getElementById('clear-history');

// Button click logic
cardButtons.forEach((btn) => {
  btn.addEventListener('click', function () {
    // Disable button
    btn.disabled = true;
    btn.classList.add('opacity-50', 'cursor-not-allowed');

    // Get card heading (h2 tag)
    const card = btn.closest('.task-card');
    const taskTitle = card.querySelector('h2').innerText;

    // Current time
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    // Create log entry
    const p = document.createElement('p');
    p.innerText = `You have completed the task "${taskTitle}" at ${hours}:${minutes} ${ampm}`;
    p.classList.add('text-black', 'text-sm', 'font-medium');

    activityLogMessages.prepend(p);

    alert('Board updated successfully');
  });
});

// Clear history button
if (clearHistoryBtn) {
  clearHistoryBtn.addEventListener('click', () => {
    activityLogMessages.innerHTML = '';
  });
}
