// Import country data which includes country information and currency details
import countryData from './country-data.js';

// Store the country data for use in the application
const countryWithFlag = countryData;

// Get references to the "From" and "To" currency dropdown elements in the HTML
const fromCurrencySelect = document.getElementById('fromCurrency');
const toCurrencySelect = document.getElementById('toCurrency');

// Populate both dropdowns with country options
populateDropdown(fromCurrencySelect, countryWithFlag);
populateDropdown(toCurrencySelect, countryWithFlag);

/**
 * Function to populate a dropdown menu with country options.
 * Each option includes the country name, currency code, and a data attribute for currency code.
 *
 * @param {HTMLElement} selectElement - The dropdown element to populate
 * @param {Array} countryList - The list of countries to use for populating the dropdown
 */
function populateDropdown(selectElement, countryList) {
	// Sort the country list by country name in ascending order
	const sortedCountryList = countryList.sort((a, b) => {
		// Compare country names in a case-insensitive manner
		return a.country_name.localeCompare(b.country_name);
	});

	// Create the option elements for the dropdown using the sorted country data
	selectElement.innerHTML = sortedCountryList.map(country =>
		`<option value="${country.country_iso}" data-currency="${country.currency_code}">
			${country.country_name} (${country.currency_code})
		</option>` // Each option includes the country name and currency code
	).join(''); // Join the array of options into a single string
}

/**
 * Function to update the flag image based on the selected country in the dropdown.
 * If the flag fails to load, it sets a default placeholder image.
 *
 * @param {HTMLElement} selectElement - The dropdown element containing the selected country
 * @param {HTMLElement} imgElement - The image element to update with the country's flag
 */
function updateFlag(selectElement, imgElement) {
	// Find the selected country data using the dropdown's selected value
	const selectedCountry = countryWithFlag.find(country => country.country_iso === selectElement.value);
	if (selectedCountry) {
		// Set the flag image source to the selected country's flag
		imgElement.src = selectedCountry.country_flag;
		imgElement.onerror = () => {
			// Fallback image in case the flag image cannot be loaded
			imgElement.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTar_ouGael5ODlrC1kbFbKLpEPSJtTQqdaIg&s';
		};
	}
}

/**
 * Function to add a listener that updates the flag image when the selected country changes.
 *
 * @param {HTMLElement} selectElement - The dropdown element to listen to
 * @param {HTMLElement} imgElement - The image element to update
 */
function addFlagUpdateListener(selectElement, imgElement) {
		// Listen for change events on the dropdown
		selectElement.addEventListener('change', () => {
			updateFlag(selectElement, imgElement); // Update the flag image
	
			// Clear both input fields when the country selection changes
			document.getElementById('from_amount').value = ''; // Clear the 'from' amount input
			document.getElementById('to_amount').value = ''; // Clear the 'to' amount input
		});
}

// Add event listeners to both dropdowns to update the corresponding flags
addFlagUpdateListener(fromCurrencySelect, document.getElementById('fromFlag'));
addFlagUpdateListener(toCurrencySelect, document.getElementById('toFlag'));

// Optional: Set initial flags based on the first option in each dropdown
updateFlag(fromCurrencySelect, document.getElementById('fromFlag'));
updateFlag(toCurrencySelect, document.getElementById('toFlag'));

/**
 * Asynchronous function to fetch the exchange rate between two currencies.
 * 
 * @param {string} fromCurrency - The currency code to convert from
 * @param {string} toCurrency - The currency code to convert to
 * @returns {Promise<number|null>} - The exchange rate or null if an error occurs
 */
async function fetchExchangeRate(fromCurrency, toCurrency) {
	const apiUrl = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`; // Construct the API URL to fetch exchange rates
	try {
		// Fetch data from the exchange rate API
		const response = await fetch(apiUrl);
		const data = await response.json(); // Parse the response data as JSON
		return data.rates[toCurrency]; // Return the exchange rate for the target currency
	} catch (error) {
		// Log any errors that occur during the fetch
		console.error('Error fetching exchange rate:', error);
		return null; // Return null in case of an error
	}
}

// Add an event listener to the input for the amount to convert
document.getElementById('from_amount').addEventListener('input', async () => {
	const fromAmount = parseFloat(document.getElementById('from_amount').value); // Get the value from the input and convert it to a float
	// Get the selected currency codes from the dropdowns
	const fromCurrency = fromCurrencySelect.options[fromCurrencySelect.selectedIndex].dataset.currency; // Get currency code from 'from' dropdown
	const toCurrency = toCurrencySelect.options[toCurrencySelect.selectedIndex].dataset.currency; // Get currency code from 'to' dropdown

	// Check if the amount is greater than zero and both currencies are selected
	if (fromAmount > 0 && fromCurrency && toCurrency) {
		const exchangeRate = await fetchExchangeRate(fromCurrency, toCurrency); // Fetch the exchange rate

		if (exchangeRate) {
			const convertedAmount = (fromAmount * exchangeRate).toFixed(2); // Convert and format the amount to 2 decimal places
			document.getElementById('to_amount').value = convertedAmount; // Update the output field with the converted amount
		} else {
			document.getElementById('to_amount').value = 'Error'; // Show an error message if fetching the exchange rate fails
		}
	} else {
		document.getElementById('to_amount').value = ''; // Clear the output field if the input is invalid
	}
});
