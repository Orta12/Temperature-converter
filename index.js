function main() {
	const celsius = document.getElementById("celsius").value;
	const celsius1 = document.getElementById("celsius1");
	fahrenheit1.textContent = (celsius * 1.8) + 32;
}

function main1() {
	const fahrenheit = document.getElementById("fahrenheit").value;
	const fahrenheit1 = document.getElementById("fahrenheit1");
	celsius1.textContent = (fahrenheit - 32) * .5556;
}
