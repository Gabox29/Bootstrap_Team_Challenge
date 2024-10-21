// Wait for the DOM to fully load before running any scripts
document.addEventListener('DOMContentLoaded', function () {
  // Select the button by its ID
  const button = document.getElementById('myButton');

  // Add a click event listener to the button
  button.addEventListener('click', function () {
      alert('Button clicked!');
  });
});