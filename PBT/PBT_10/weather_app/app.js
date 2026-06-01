const input = document.getElementById('cityInput');
const btn = document.getElementById('searchBtn');
const statusArea = document.getElementById('statusArea');
const resultArea = document.getElementById('weatherResult');
const historyList = document.getElementById('historyList');

let history = JSON.parse(localStorage.getItem('weatherHistory')) || [];

function renderHistory() {
    historyList.innerHTML = '';
    history.forEach(city => {
        const li = document.createElement('li');
        li.className = 'history-item';
        li.textContent = city;
        li.onclick = () => fetchWeather(city);
        historyList.appendChild(li);
    });
}

async function fetchWeather(city) {
    statusArea.textContent = "Đang tải...";
    resultArea.innerHTML = "";

    try {
        const response = await fetch(`https://wttr.in/${city}?format=j1`);
        if (!response.ok) throw new Error("Không tìm thấy thành phố");
        
        const data = await response.json();
        const cur = data.current_condition[0];
        
        resultArea.innerHTML = `
            <h2>${city}</h2>
            <p>Nhiệt độ: ${cur.temp_C}°C</p>
            <p>Độ ẩm: ${cur.humidity}%</p>
            <p>Thời tiết: ${cur.weatherDesc[0].value}</p>
        `;
        statusArea.textContent = "";

        // Update history
        if (!history.includes(city)) {
            history.unshift(city);
            history = history.slice(0, 5);
            localStorage.setItem('weatherHistory', JSON.stringify(history));
            renderHistory();
        }
    } catch (err) {
        statusArea.textContent = "Lỗi: " + err.message;
    }
}

btn.onclick = () => {
    if (input.value) fetchWeather(input.value);
};

renderHistory();