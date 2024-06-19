import axios from "axios";
import React, { useState } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import "./Home.scss";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await axios.get("http://localhost:3002/home/country");
      setCountries(res.data.map((item) => ({ id: item._id, ...item })));
    })();
  }, []);

  const addCountry = async () => {
    if (!country.trim().length) {
      return;
    }

    try {
      const res = await axios.post("http://localhost:3002/home/country", {
        countryName: country.trim(),
      });

      const c = { id: res.data._id, ...res.data };
      setCountries((prev) => [...prev, c]);
      setSelectedCountry(c);
      setCountry("");
    } catch (err) {
      console.log("Error messsage", err.message);
    }
  };

  const addCity = async () => {
    if (!city.trim().length) {
      return;
    }

    try {
      const res = await axios.post("http://localhost:3002/home/city", {
        name: city.trim(),
        countryId: selectedCountry._id,
      });

      const c = { id: res.data._id, ...res.data };

      setSelectedCountry((prev) => {
        return { ...prev, cities: [...prev.cities, c] };
      });
      setCountries((prev) => {
        return prev.map((item) => {
          if (item._id === selectedCountry._id) {
            return { ...item, cities: [...item.cities, c] };
          }

          return item;
        });
      });

      setCity("");
    } catch (err) {
      console.log("Error messsage", err.message);
    }
  };

  return (
    <div className="home-page">
      <h1>Home Page</h1>

      <h2>Добавить страны и города</h2>
      <section className="country-city">
        <div className="countries">
          <h3>Страны</h3>
          <div className="country-form">
            <input
              onChange={(e) => setCountry(e.target.value)}
              value={country}
            />
            <button onClick={addCountry}>Добавить</button>
          </div>
          <ul>
            {countries.map((item) => (
              <li
                key={item.id}
                className={
                  selectedCountry && selectedCountry._id === item._id
                    ? "active"
                    : ""
                }
                onClick={() => {
                  setSelectedCountry(item);
                }}
              >
                {item.name}
                {`       (${item.cities.length})`}
              </li>
            ))}
          </ul>
        </div>
        <div className="cities">
          <h3>Города {selectedCountry && `(${selectedCountry.name})`}</h3>
          {selectedCountry && (
            <div className="country-form">
              <input onChange={(e) => setCity(e.target.value)} value={city} />
              <button onClick={addCity}>Добавить</button>
            </div>
          )}
          <ul>
            {selectedCountry &&
            selectedCountry?.cities &&
            !!selectedCountry?.cities.length ? (
              selectedCountry.cities.map((c) => <li key={c._id}>{c.name}</li>)
            ) : (
              <p style={{ marginTop: "33px" }}>Пусто</p>
            )}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
