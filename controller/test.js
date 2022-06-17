import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const key = process.env.WEATHER_KEY;

export async function apaAjaBole(req, res) {
  try {
    const array = [];
    for (let number = 1; number <= 100; number++) {
      if (number % 5 === 0 && number % 3 === 0) {
        array.push("ApaBole");
      } else if (number % 3 === 0) {
        array.push("Apa");
      } else if (number % 5 === 0) {
        array.push("Bole");
      } else {
        array.push(number);
      }
    }
    return res.json({ success: true, message: array });
  } catch (err) {
    return res.status(500).json({ success: true, message: err.message });
  }
}
export async function weatherApp(req, res) {
  try {
    const data = [];
    const fetch = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=-6.162829856242026&lon=106.82881820823393&units=metric&cnt=7&appid=${key}`
    );
    const restructure = fetch.data.list.map((datas) => {
      const format = new Date(datas.dt * 1000);
      data.push(`${format} : ${datas.main.temp}°C`);
    });
    return res.status(200).json({ success: true, message: data });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
}
