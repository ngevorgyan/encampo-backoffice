import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Camps = () => {
  const [camps, setCamps] = useState();
  const [showForm, setShowForm] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    (async () => {
      // const res = await axios.get("http://localhost:3002/lager");
      // setLagers(res.data);
    })();
  }, []);

  const showCampForm = () => {
    navigate("/camp/create");
  };

  return (
    <div>
      <h1>Лагера</h1>
      <div>
        <button onClick={showCampForm}>Добавить лагер</button>
      </div>
    </div>
  );
};

export default Camps;
