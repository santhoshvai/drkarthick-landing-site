import React from "react";
import { Link } from "gatsby";

type Hospital = {
  title: string;
  address: string;
  phone: string;
  mapLink: string;
};

const Sundaram: Hospital = {
  title: "Sundaram Hospital",
  address:
    "No. 17, EVR Rd, Aruna Nagar, Puthur, Thillai Nagar, Tiruchirappalli, Tamil Nadu - 620017",
  phone: "+91 431 402 4444",
  mapLink:
    "https://www.google.com/maps/place/Sundaram+hospitals/@10.813914,78.677558,16z/data=!4m5!3m4!1s0x0:0x96216d6caf8900a5!8m2!3d10.8139141!4d78.6775579?hl=en",
};

const Vaishali: Hospital = {
  title: "Vaishali Hospital",
  address:
    "No 159, Salai Rd, Thillai Nagar East, North East Extension, Thillai Nagar, Tiruchirappalli, Tamil Nadu - 620003",
  phone: "+91 431 276 6888",
  mapLink:
    "https://www.google.com/maps/place/Vaishali+Hospital/@10.827019,78.68548,16z/data=!4m5!3m4!1s0x0:0x96f5fe5d0a900a31!8m2!3d10.8270189!4d78.6854795?hl=en",
};

const Hospitals: Hospital[] = [Sundaram, Vaishali];

function HospitalsRoll() {
  return (
    <>
      <div className="columns is-multiline">
        <div className="column is-12 has-text-centered">
          <h1>Consulting Hospitals</h1>
        </div>
        {Hospitals.map(({ title, address, phone, mapLink }) => (
          <div className="is-parent column is-6  has-text-centered" key={title}>
            <div className={`blog-list-item tile is-child box notification`}>
              <img
                src={"/img/business-black-18dp.svg"}
                alt="KV"
                style={{ width: "18px" }}
              />
              <p className="has-text-weight-bold">{title}</p>
              <img
                src={"/img/place-black-18dp.svg"}
                alt="KV"
                style={{ width: "18px" }}
              />
              <p>{address}</p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",

                  // backgroundColor: "pink",
                  justifyContent: "center",
                  alignItems: "center",
                  // height: "72px",
                }}
              >
                <img
                  src={"/img/call-black-18dp.svg"}
                  alt={`call ${phone}`}
                  style={{
                    position: "relative",
                    width: "18px",
                    right: "8px",
                    top: "2px",
                  }}
                />
                <a className="has-text-weight-medium" href={`tel:${phone}`}>
                  {phone}
                </a>
              </div>
              <div
                className="column is-12 has-text-centered"
                style={{ marginTop: "8px" }}
              >
                <a
                  className="button"
                  href={mapLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Map →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HospitalsRoll;
