import Radio from "@mui/material/Radio";
import { useState } from "react";
import line from "../assets/icons/Line 1.png";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
const PickAndDrop = ({ isShow }) => {
  const [selectedValue, setSelectedValue] = useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <section
      className={` w-full mt-36 md:mt-24  ${
        isShow ? "ms-4 me-0" : "md:ms-16 ms-2"
      }`}
    >
      <div className="flex  justify-center items-center flex-col ps-1 md:flex-row gap-y-5 gap-x-3">
        <div className={`bg-white  rounded-lg  ${isShow ? "" : "md:p-7"}`}>
          <div className="flex items-center">
            <Radio
              checked={selectedValue === "a"}
              onChange={handleChange}
              value="a"
              name="radio-buttons"
              inputProps={{ "aria-label": "A" }}
            />
            <span className="font-Jakarta ">Pick-Up</span>
          </div>
          <div className="flex items-center my-2 mx-5 flex-row justify-center">
            <div className="flex flex-col mx-3">
              <p className="font-Jakarta">Locations</p>
              <select
                className={`bg-white border-0 w-24  my-3 ${
                  isShow ? "md:w-36" : "md:w-40"
                }`}
                name="locations"
                id="locations"
              >
                <option>Select your city</option>
                <option>Rome</option>
                <option>Milan</option>
                <option>Naples</option>
                <option>Turin</option>
                <option>Palermo</option>
                <option>Genoa</option>
                <option>Bolonga</option>
                <option>Florence</option>
              </select>
            </div>
            <img src={line} alt="" />
            <div className="flex flex-col mx-3">
              <p className="font-Jakarta">Date</p>
              <input
                className={`bg-white outline-none border-0 w-24  my-3 ${
                  isShow ? "md:w-36" : "md:w-40"
                }`}
                type="date"
              />
            </div>
            <img src={line} alt="" />
            <div className="flex flex-col mx-3">
              <p className="font-Jakarta">Time</p>
              {/* <select
                className={`bg-white border-0 w-24  my-3 ${
                  isShow ? "md:w-36" : "md:w-40"
                }`}
                name="time"
                id="time"
              >
                <option>Select your time</option>
                <option>8:00 AM</option>
                <option>9:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>12:00 AM</option>
                <option>1:00 AM</option>
                <option>2:00 AM</option>
                <option>3:00 AM</option>
                <option>4:00 AM</option>
              </select> */}
              <input
                className={`bg-white border-0 outline-none w-24  my-3 ${
                  isShow ? "md:w-36" : "md:w-40"
                }`}
                type="time"
              />
            </div>
          </div>
        </div>

        <span className=" py-2 px-1 absolute rounded-lg text-white bg-carblue">
          <button style={{ width: "18px" }}>
            <ArrowUpwardIcon />
          </button>
          <button>
            <ArrowDownwardIcon />
          </button>
        </span>
        <div className={`bg-white  rounded-lg  ${isShow ? "" : "md:p-7"}`}>
          <Radio
            checked={selectedValue === "a"}
            onChange={handleChange}
            value="a"
            name="radio-buttons"
            inputProps={{ "aria-label": "A" }}
          />
          <span className="font-Jakarta ">Drop-Up</span>
          <div className="flex items-center my-2 mx-5 flex-row justify-center">
            <div className="flex flex-col mx-3">
              <p className="font-Jakarta">Locations</p>
              <select
                className={`bg-white border-0 w-24  my-3 ${
                  isShow ? "md:w-36" : "md:w-40"
                }`}
                name="locations"
                id="locations"
              >
                <option>Select your city</option>
                <option>Rome</option>
                <option>Milan</option>
                <option>Naples</option>
                <option>Turin</option>
                <option>Palermo</option>
                <option>Genoa</option>
                <option>Bolonga</option>
                <option>Florence</option>
              </select>
            </div>
            <img src={line} alt="" />
            <div className="flex flex-col mx-3">
              <p className="font-Jakarta">Date</p>
              {/* <select
                type="date"
                className={`bg-white border-0 w-24  my-3 ${
                  isShow ? "md:w-36" : "md:w-40"
                }`}
                name="date"
                id="date"
              >
                <option>Select your date</option>
               
              </select> */}
              <input
                className={`bg-white outline-none border-0 w-24  my-3 ${
                  isShow ? "md:w-36" : "md:w-40"
                }`}
                type="date"
              />
            </div>
            <img src={line} alt="" />
            <div className="flex flex-col mx-3">
              <p className="font-Jakarta">Time</p>
              <input
                className={`bg-white border-0 outline-none w-24  my-3 ${
                  isShow ? "md:w-36" : "md:w-40"
                }`}
                type="time"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickAndDrop;
