// Get elements from the DOM
const costInput = document.getElementById('cost');
const litersInput = document.getElementById('liters');
const calculateButton = document.getElementById('calculate');
const totalCostElement = document.getElementById('totalCost');

// Calculate total cost when the button is clicked
calculateButton.addEventListener('click', function() {
    const costPerLiter = parseFloat(costInput.value);
    const liters = parseFloat(litersInput.value);
    const totalCost = costPerLiter * liters;

    totalCostElement.textContent = `Total cost: $${totalCost.toFixed(2)}`;
});
