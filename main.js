function calculateAge() {
    let dobInput = document.getElementById('dob').value;

    if (!dobInput) {
        alert('Please select a valid date.');
        return;
    }

    let dob = new Date(dobInput);
    let today = new Date();

    
    let age = today.getFullYear() - dob.getFullYear();
    let monthDiff = today.getMonth() - dob.getMonth();
    let dayDiff = today.getDate() - dob.getDate();
    
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    let resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.textContent = `Your Age: ${age} years`;
}




function subscribe(months, price, discount) {
    const discountedPrice = price - (price * (discount / 100));

    const today = new Date();
    const expirationDate = new Date();
    expirationDate.setMonth(today.getMonth() + months);
    
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = expirationDate.toLocaleDateString(undefined, options);
    const resultDiv = document.getElementById('resultt');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <strong>Subscription Plan Details:</strong><br>
        Duration: ${months} months<br>
        Discounted Price: $${discountedPrice.toFixed(2)}<br>
        Subscription Expires On: ${formattedDate}
    `;
}