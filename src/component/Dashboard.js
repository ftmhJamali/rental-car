import { useLocation } from "react-router-dom";
import Layout from "../layout/layout";
import MainMenu from "./MainMenu";
import line5 from "../assets/images/Line-5.png";
import map from "../assets/images/Maps.png";
import { useState } from "react";
import line from "../assets/images/Line-dash.png";
import { Radio } from "@mui/material";
import arrow from "../assets/images/arrow-down.png";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { filteredCar } = useSelector((state) => state.car);
  const { car } = useLocation().state;
  const { locationPick } = useLocation().state;
  const { locationDrop } = useLocation().state;
  const { timeDrop } = useLocation().state;
  const { timePick } = useLocation().state;
  const { totalPrice } = useLocation().state;
  // const { pickValue } = useLocation().state;
  // const { dropValue } = useLocation().state;
  const [view, setView] = useState(false);

  console.log(car, locationPick);
  const [selectedValue, setSelectedValue] = useState("a");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Layout>
      <div className="flex font-Jakarta">
        <MainMenu />
        <div className="flex flex-col md:flex-row mt-36 md:mt-20">
          <div className="ms-10 py-2 px-2 mb-6 md:mb-96  bg-white flex justify-center flex-col rounded-lg">
            <p className="font-bold ms-6">Details Rental</p>
            <div className="flex justify-center w-full">
              <img className="my-3  md:w-11/12" alt="" src={map} />
            </div>
            <div className="flex justify-between items-center  ms-6 mt-4">
              <div className="flex items-center gap-x-3">
                <img
                  className="w-28 bg-carblue p-3 rounded-lg"
                  alt=""
                  src={car.image}
                />
                <div className="flex flex-col">
                  <p className="">{car.name}</p>
                  <p className="text-xs text-grayText">{car.carType}</p>
                </div>
              </div>
              <p className="text-xs me-6 text-grayText">
                #{car.gasoline}
                {car.id}
              </p>
            </div>
            <div className="flex my-4  ms-6">
              <Radio
                checked={selectedValue === "a"}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
              />
              <span className="font-Jakarta mt-2">Pick - Up</span>
            </div>
            <div className="flex gap-x-4 justify-center md:w-full ">
              <div className="flex flex-col w-28">
                <p>Locations</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-grayText">{locationPick}</p>
                  <img className="w-3 ms-8" alt="" src={arrow} />
                </div>
              </div>
              <img alt="" src={line} />
              <div className="flex flex-col w-32">
                <p>Date</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs  text-grayText">20 July 2022</p>
                  <img className="w-3 ms-8" alt="" src={arrow} />
                </div>
              </div>
              <img alt="" src={line} />
              <div className="flex flex-col w-28">
                <p>Time</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-grayText">{timePick}</p>
                  <img className="w-3 ms-8" alt="" src={arrow} />
                </div>
              </div>
            </div>

            <div className="flex my-4  ms-6">
              <Radio
                checked={selectedValue === "a"}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
              />
              <span className="font-Jakarta mt-2">Drop - Up</span>
            </div>
            <div className="flex gap-x-4 justify-center">
              <div className="flex flex-col w-28">
                <p>Locations</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-grayText">{locationDrop}</p>
                  <img className="w-3 ms-8" alt="" src={arrow} />
                </div>
              </div>
              <img alt="" src={line} />
              <div className="flex flex-col w-32">
                <p>Date</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-grayText">22 July 2022</p>
                  <img className="w-3 ms-8" alt="" src={arrow} />
                </div>
              </div>
              <img alt="" src={line} />
              <div className="flex flex-col w-28">
                <p>Time</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-grayText">{timeDrop}</p>
                  <img className="w-3 ms-8" alt="" src={arrow} />
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-8  ms-6">
              <img className="mb-4 me-6" alt="" src={line5} />
              <p>Total Rental Price</p>
              <div className="flex justify-between">
                <p className="text-xs text-grayText">
                  Overall price and includes rental discount
                </p>
                <p className="text-2xl">${totalPrice}.00</p>
              </div>
            </div>
          </div>
          <div className="flex gap-y-7 flex-col">
            {/* <div className="ms-5 h-72 bg-white rounded-lg px-4 flex flex-col py-2">
              <div>Top 5 Car Rental </div>
              <div></div>
            </div> */}
            <div className="ms-5  bg-white rounded-lg px-4 flex flex-col py-2">
              <div className="flex justify-between items-center">
                <div>Recent Transaction</div>
                <button
                  onClick={(e) => {
                    setView((prevState) => !prevState);
                    e.preventDefault();
                  }}
                  className="text-xs text-carblue"
                >
                  {view ? "Close" : "View All"}
                </button>
              </div>
              {filteredCar.slice(0, 7).map((car) => {
                return (
                  <div className="flex justify-between gap-x-6 my-4 items-center">
                    <img className="w-28" alt="" src={car.image} />
                    <div className="flex flex-col items-start">
                      <p className="text-sm">{car.name}</p>
                      <p className="text-xs text-grayText">{car.carType}</p>
                    </div>
                    <div></div>
                    <div className="hidden md:block"></div>
                    <div className="hidden md:block"></div>
                    <div className="hidden md:block"></div>
                    <div className="hidden md:block"></div>
                    <div></div>
                    <div className="flex flex-col items-start">
                      <p className="text-xs text-grayText">2{car.id} July</p>
                      <p>${car.price}.00</p>
                    </div>
                  </div>
                );
              })}
              <div className={`${view ? "" : "hidden"}`}>
                {filteredCar.slice(7, 14).map((car) => {
                  return (
                    <div className="flex justify-between gap-x-6 my-8 items-center">
                      <img className="w-28" alt="" src={car.image} />
                      <div className="flex flex-col items-start">
                        <p className="text-sm">{car.name}</p>
                        <p className="text-xs text-grayText">{car.carType}</p>
                      </div>
                      <div></div>
                      <div className="hidden md:block"></div>
                      <div className="hidden md:block"></div>
                      <div className="hidden md:block"></div>
                      <div className="hidden md:block"></div>
                      <div></div>
                      <div className="flex flex-col  items-start">
                        <p className="text-xs text-grayText">2{car.id} July</p>
                        <p>${car.price}.00</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
