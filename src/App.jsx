import axios from "axios";
import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
const api = "https://pokeapi.co/api/v2/pokemon/";
function App() {
  const [data, setData] = useState([]);
  console.log(data)

  async function getService() {
    const res = await axios.get(api);
    console.log(res)
    setData(res.data.results);
    // setData(res);
  }
  useEffect(() => {
    getService();
  }, []);

  return (
    <>
      <div className="container">
        <div className="container-top">
          <h1>GEEKS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            dicta beatae sit iste praesentium in quibusdam repudiandae quod
            suscipit, cupiditate saepe deleniti totam amet eos doloribus sequi,
            ducimus temporibus minus!
          </p>
        </div>
        <div className="container-geeks">
          <div className="blocks">
            {data.map((item, index) => (
              <>
                

                  <div key={index} className="block">
                  <img src="https://circus-land.ru/upload/iblock/7c4/cherepashki-nindzya-geroi-010-all.jpg" alt="" />
                  <p>{item.name}</p>
                </div>
              </>
                
            ))}
          </div>
          <div className="text"></div>
        </div>
      </div>
    </>
  );
}

export default App;
