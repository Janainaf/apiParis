import "./App.css";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Resto from "./Restaurants/Resto";
import News from "./News/News";

function App() {
  const [data, setData] = useState();

  const DisplayDate = (UTCDateTime) => {
    var date = new Date(UTCDateTime);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var formattedDate = day + "-" + month + "-" + year;
    return formattedDate;
  };

  useEffect(() => {
    fetch(
      `https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=br%C3%A9sil&facet=category&facet=tags&facet=address_name&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=access_type&facet=price_type`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const events = data && data.records.map((record) => record.fields);

  return (
    <div className="w-100  container-bg ">
      <div className="row w-100 justify-content-center ">
        <h2 className="my-5 text-center fw-bold">
          Événements Brésilien Paris ...
        </h2>
        <h6> ...soon with new features</h6>
        <div className="w-100  "></div>

        {events &&
          events.map((item, index) => (
            <div
              key={index}
              className="card col-md-3 rounded-5 p-3 m-4"
              align="center"
            >
              <div className="card_img-container mb-3">
                <img
                  src={item.cover_url}
                  alt="events paris"
                  className="card_img"
                />
              </div>
              <h5 className="card-title m-2">
                {" "}
                {item.title.substring(0, 30) + "..."}{" "}
              </h5>

              <p className="m-2"> Event: {item.price_type}</p>
              <p className="m-2"> Date: {DisplayDate(item.date_start)}</p>

              <button className="btn-events">
                <a href={item.url}>Link Event</a>
              </button>
            </div>
          ))}
      </div>
      <News />

      <Resto />
    </div>
  );
}

export default App;
