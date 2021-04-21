import React, { useEffect, useState } from "react";
import "./App.css";
import Loading from "./components/Loading";
import NavCompany from "./components/NavCompany";
import ShowInfo from "./components/ShowInfo";

function App() {
  const url = "https://course-api.com/react-tabs-project";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataIndex, setDataIndex] = useState(0);

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
    }, 0);
  }, []);

  if (loading) {
    return <Loading />;
  }

  const jobInfo = data[dataIndex];

  const handleClick = (idx) => {
    console.log(idx);
    setDataIndex(idx);
  };

  return (
    <main>
      <div className="title flex-center fd-col">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <section>
        <div className="btn-container">
          {data.map((item, index) => (
            <NavCompany
              dataIndex={dataIndex}
              key={item.id}
              name={item.company}
              handleClick={handleClick}
              index={index}
            />
          ))}
        </div>
        <div className="profile-info">
          <ShowInfo jobInfo={jobInfo} />
        </div>
      </section>
      <div className="flex-center">
        <button className="more-info-btn">MORE INFO</button>
      </div>
    </main>
  );
}

export default App;
