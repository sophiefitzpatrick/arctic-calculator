function doCalculation(event) {
	const userValue = document.getElementById("input").value;
	const resultValue = parseInt(userValue) * 0.000432
	const resultHTML = document.getElementById("result").innerHTML = `<p id='resulttext'> ${userValue} miles equates to approximately ${resultValue.toFixed(2)}m2 of melted arctic ice.</p>`;
	return resultValue;
}


