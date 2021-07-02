import "./News.css";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function News() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      `https://api.qwant.com/api/search/web?count=10&offset=0&q=fran%C3%A7a+uol&t=news&uiv=1`
    )
      .then((response) => response.json())
      .then((data) => {
        data = data.result;
        setData(data);
      });
  }, []);

  const events = data && data.items.map((record) => record.items);

  return (
    <div className="w-100  container-bg ">
      <div className="row w-100 justify-content-center ">
        <h2 className="my-5 text-center fw-bold">
          Les Nouvelles de la France ...soon
        </h2>
        <div className="w-100  "></div>

        {/* {events &&
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
          ))} */}
      </div>
    </div>
  );
}

export default News;
