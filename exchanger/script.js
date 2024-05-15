function exchange() {
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;
    const amount = document.getElementById('amount').value;

    fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_UZhPvz7HVxs6GBJgGr8BUsAyrFLIo7uUTU5YP8uK&base_currency=${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            if (!data.data || !data.data[toCurrency]) {
                throw new Error('Currency conversion not available.');
            }
            const rate = data.data[toCurrency];
            const result = amount * rate;
            document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
        })
        .catch(error => {
            console.error('Error fetching exchange rates:', error);
            document.getElementById('result').innerText = 'Error fetching exchange rates. Please try again later.';
        });
}
