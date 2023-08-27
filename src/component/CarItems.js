import { Link } from "react-router-dom";
import Favorite from "@mui/icons-material/Favorite";
import people from "../assets/icons/profile-2user.png";
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import gasoline from "../assets/icons/gas.png";
import manual from "../assets/icons/Car.png";
import { useSelector } from "react-redux";
const CarItems = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const { filteredCar } = useSelector((state) => state.car);
  return (
    <>
      {filteredCar.map((car) => {
        return (
          <div className="bg-white w-80 p-4 rounded-lg " key={car.id}>
            <div className=" flex justify-between items-center">
              <p className="font-Jakarta">{car.name}</p>
              <div>
                <Checkbox
                  {...label}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                />
              </div>
            </div>
            <span className="font-Jakarta text-xs text-grayText">
              {car.carType}
            </span>
            <div className="gap-y-8 flex flex-row  md:flex-col justify-center my-14">
              <div className="flex w-72 md:w-60 justify-center px-1 md:px-0">
                <img className="w-full " alt={car.id} src={car.image} />
              </div>
              <div className="flex gap-y-3 flex-col md:flex-row gap-x-8 justify-between">
                <div className="flex text-grayText items-center">
                  <span className="w-6">
                    <img src={gasoline} alt="" />
                  </span>
                  <span className="ms-1">{car.gasoline}L</span>
                </div>
                <div className="flex text-grayText items-center">
                  <span className="w-6">
                    <img src={manual} alt="" />
                  </span>
                  <span className="ms-1">Manual</span>
                </div>
                <div className="flex text-grayText items-center">
                  <span className="w-6">
                    <img src={people} alt="" />
                  </span>
                  <span className="ms-1">{car.capacity}People</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-x-4 mt-5">
              <div className="flex">
                <span className="text-lg">${car.price}.00</span>
                <span className="font-Jakarta  text-grayText">/day</span>
              </div>

              <Link to={`car/${car.id}`} state={{ car }}>
                <button className="text-white bg-carblue rounded px-1 py-1">
                  Rent Now
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CarItems;
