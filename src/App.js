import React, { useEffect, useState } from "react";
import "./App.css";
import Loading from "./components/Loading";
import NavCompany from "./components/NavCompany";
import ShowInfo from "./components/ShowInfo";

function App() {
  const url = "https://course-api.com/react-tabs-project";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  const jobInfo = data[index];

  const handleClick = (idx) => {
    console.log(idx);
    setIndex(idx);
  };

  return (
    <main>
      <div>Experience</div>
      {data.map((item, index) => (
        <NavCompany
          key={item.id}
          name={item.company}
          handleClick={handleClick}
          index={index}
        />
      ))}
      <ShowInfo jobInfo={jobInfo} />
      <div>
        <button>MORE INFO</button>
      </div>
    </main>
  );
}

export default App;
