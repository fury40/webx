from flask import Flask, render_template, request
import requests

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/weather', methods=['POST'])
def get_weather():
    city = request.form['city']
    api_key = 'ff9bbab469a04af5ab9185654242404'  # Replace 'YOUR_API_KEY' with your actual API key from WeatherAPI
    url = f'http://api.weatherapi.com/v1/current.json?key={api_key}&q={city}&aqi=no'
    
    response = requests.get(url)
    data = response.json()
    
    if 'error' not in data:
        weather_data = {
            'city': city,
            'temperature': data['current']['temp_c'],
            'description': data['current']['condition']['text']
        }
        return render_template('weather.html', weather=weather_data)
    else:
        error_message = data['error']['message']
        return render_template('error.html', message=error_message)

if __name__ == '__main__':
    app.run(debug=True)
