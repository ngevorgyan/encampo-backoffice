import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./camp-form.scss";

const CampForm = () => {
  const [countries, setCountries] = useState([]);
  const { register, handleSubmit } = useForm({ defaultValues: {} });
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(
      countries.find((item) => item.name === event.target.value)
    );
  };

  const onSubmit = (data) => console.log("formdata", data);

  useEffect(() => {
    (async () => {
      const res = await axios.get("http://localhost:3002/home/country");
      setCountries(res.data);
    })();
  }, []);

  return (
    <div>
      <h1>Форма</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form-content">
        <div className="item">
          <label htmlFor="title">Название</label>
          <input id="title" defaultValue="" {...register("title")} />
        </div>

        <div className="item">
          <label htmlFor="description">Описание</label>
          <textarea
            id="description"
            defaultValue=""
            style={{ height: "120px" }}
            {...register("description")}
          />
        </div>

        <div className="item">
          <label htmlFor="country">Country</label>
          <select
            id="country"
            {...register("country")}
            onChange={handleCountryChange}
          >
            <option value="">Select a country</option>
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <div className="item">
          <label htmlFor="city">Город</label>
          <select id="city" {...register("city")}>
            <option value="">Select a country</option>
            {selectedCountry &&
              selectedCountry.cities.map((city) => (
                <option key={city._id} value={city.name}>
                  {city.name}
                </option>
              ))}
          </select>
        </div>

        <div className="item">
          <label htmlFor="location">Расположение</label>
          <input id="location" defaultValue="" {...register("locationInfo")} />
        </div>

        <div className="item checkbox">
          <label htmlFor="isBitch">Лагерь на море</label>
          <input type="checkbox" {...register("isBitch")} />
        </div>
        <div className="item checkbox">
          <label htmlFor="isSport">Спортивные лагеря</label>
          <input type="checkbox" {...register("isSport")} />
        </div>
        <div className="item checkbox">
          <label htmlFor="isGroup">Едете группой</label>
          <input type="checkbox" {...register("isGroup")} />
        </div>
        <div className="item checkbox">
          <label htmlFor="isFamely">Едете с семьей</label>
          <input type="checkbox" {...register("isFamely")} />
        </div>
        <div className="item checkbox">
          <label htmlFor="isLanguage">С изучением языка</label>
          <input type="checkbox" {...register("isLanguage")} />
        </div>

        <div>
          <h3>Добавить программи</h3>
          <div className="item">
            <label htmlFor="location">Описание</label>
            <input
              id="location"
              defaultValue=""
              {...register("programs.title")}
            />
          </div>
          <div className="item">
            <label htmlFor="location">Расположение</label>
            <input
              id="location"
              defaultValue=""
              {...register("programs.price ")}
            />
          </div>
          <div className="item both">
            <label htmlFor="time-start">Расположение</label>
            <input
              id="time-start"
              defaultValue=""
              {...register("programs.timeStart")}
            />
            <input
              id="time-end"
              defaultValue=""
              placeholder="12"
              {...register("programs.timeEnd")}
            />
          </div>
          <div className="item both">
            <label htmlFor="date">Расположение</label>
            <input
              id="date"
              defaultValue="01:20:2024"
              {...register("programs.DateStart")}
            />
            <input
              id="date-end"
              defaultValue="12:20:2024"
              {...register("programs.dateEnd")}
            />
          </div>
          <div className="programs">
            <label htmlFor="city">Город</label>
            <select id="city" {...register("programs.currency")}>
              <option value="">Виберите</option>
              <option key="1" value="РУб">
                РУб
              </option>
              <option key="2" value="USD">
                USD
              </option>
              <option key="3" value="EUR">
                EUR
              </option>
            </select>
          </div>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default CampForm;
