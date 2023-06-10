import { Link, useLocation } from "react-router-dom";
import Layout from "../layout/layout";
import gasoline from "../assets/icons/gas.png";
import manual from "../assets/icons/Car.png";
import people from "../assets/icons/profile-2user.png";
import open from "../assets/images/Vector-open.png";
import Category from "./Category";
import Checkbox from "@mui/material/Checkbox";
import Rating from "@mui/material/Rating";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Footer from "./Footer";
import avatar from "../assets/images/avatar1.png";
import { useState } from "react";
import { useSelector } from "react-redux";
const CarDetail = ({ setIsShow, isShow }) => {
  const { filteredCar } = useSelector((state) => state.car);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const { car } = useLocation().state;
  console.log(car.description);
  const [value, setValue] = useState(4);
  return (
    <>
      <Layout setIsShow={setIsShow}>
        <div className="flex">
          <Category setIsShow={setIsShow} isShow={isShow} />
          <div className="flex font-Jakarta flex-col">
            <section className={` mt-36 md:mt-24  ${isShow ? " me-0" : ""}`}>
              <div className="flex  justify-center flex-col md:flex-row gap-x-11  ">
                <div className="flex flex-col justify-start">
                  <div
                    className={`bg-carblue rounded-lg mt-2 flex justify-start flex-col p-9 ${
                      isShow ? "" : "p-14 text-xl "
                    }`}
                  >
                    <p className="text-white mb-2 text-xl">
                      {car.carType}s with the best <br /> design and
                      acceleration.
                    </p>
                    <p className="text-white mb-2 text-xs font-light mt-5">
                      Safety and comfort while driving a <br />
                      futuristic and elegant sports car
                    </p>
                    <div className="mt-4 flex w-full justify-center">
                      <img className="w-64" src={car.image} alt={car.id} />
                    </div>
                  </div>
                  <div className="flex my-3 md:ms-0 ms-3">
                    <div className="bg-carblue rounded-lg py-6 px-2">
                      <img className="w-28 h-10" src={car.image} alt="" />
                    </div>
                    <div className="bg-carblue rounded-lg py-6 px-2 mx-8">
                      <img className="w-28 h-10" src={car.image} alt="" />
                    </div>
                    <div className="bg-carblue rounded-lg px-2 py-6">
                      <img className="w-28 h-10" src={car.image} alt="" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center my-2 bg-white rounded-lg p-7 flex-col">
                  <div className="flex justify-between w-full">
                    <p className="text-lg">{car.name}</p>
                    <div className="items-center">
                      <Checkbox
                        {...label}
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                      />
                    </div>
                  </div>
                  <div className="flex w-full justify-start">
                    <Rating
                      size="small"
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                    <p className="text-xs text-grayText">440+ Reviewer</p>
                  </div>
                  <p className="text-grayslate leading-loose text-xs mt-6">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                    <br /> sed diam nonummy nibh euismod tincidunt ut laoreet
                    dolore <br /> magna aliquam erat volutpat. Ut wisi enim ad
                    minim veniam
                  </p>
                  <div className="flex justify-between w-full mt-7">
                    <div className="flex flex-col">
                      <p className="text-grayText mb-4">TypeCar</p>
                      <p className="text-grayText">Steering </p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-grayslate mb-4">{car.carType}</p>
                      <p className="text-grayslate">Manual </p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-grayText mb-4">Capacity</p>
                      <p className="text-grayText">Gasoline </p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-grayslate mb-4">{car.capacity} Preson</p>
                      <p className="text-grayslate">{car.gasoline} L</p>
                    </div>
                  </div>

                  <div className="flex justify-between w-full mt-14">
                    <p className="text-lg">
                      ${car.price}.00
                      <span className="text-xs text-grayText">/days</span>
                    </p>
                    <Link to="/checkout" state={{ car }}>
                      <button className="text-white bg-carblue rounded px-4 py-2">
                        Rent Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            <div
              className={`flex flex-col md:w-3/4 md:ms-36  p-4 ${
                isShow ? "w-3/4 ms-36" : "md:ms-72"
              }`}
            >
              <div className=" bg-white rounded-lg p-3">
                <div className="flex gap-x-2 mb-6">
                  <p>Reviews</p>
                  <span className="text-white bg-carblue rounded text-sm items-center flex justify-center px-3 py-0">
                    {car.description.length}
                  </span>
                </div>
                {car.description.map((des) => {
                  return (
                    <div className="flex flex-col">
                      <div className="flex ">
                        <div>
                          <img
                            width="56 px"
                            height="56px"
                            src={avatar}
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col ms-3">
                          <div className="flex w-full justify-between">
                            <p>{des.name}</p>
                            <p className="text-xs text-grayslate">
                              21 July 2022
                            </p>
                          </div>
                          <div className="flex w-full justify-between">
                            <p className="text-xs text-grayslate">
                              CEO at Amazon
                            </p>
                            <Rating
                              name="half-rating"
                              defaultValue={3}
                              precision={0.5}
                              size="small"
                              readOnly
                            />
                          </div>
                          <div className="text-xs text-grayslate my-4">
                            {des.text}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="w-full items-center mb-4 flex h-2 mt-5 justify-center">
                  <button className="text-grayText text-sm">show all</button>
                  <button>
                    <img className="items-center mt-1 ms-2" src={open} alt="" />
                  </button>
                </div>
              </div>
              <div className=" flex text-sm w-full my-10 justify-between">
                <p className="text-grayText">Recent Car</p>
                <p className="text-carblue">View All</p>
              </div>
              <div className="flex justify-center w-full">
                <div
                  className={`grid grid-cols-1 gap-x-8 gap-y-4 ${
                    isShow ? " md:grid-cols-3" : "md:grid-cols-4 "
                  }`}
                >
                  {filteredCar.map((car) => {
                    return (
                      <div
                        className="bg-white w-72 p-2 rounded-lg "
                        key={car.id}
                      >
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
                          <div className="flex justify-center px-6 md:px-0">
                            <img width="244 px" alt={car.id} src={car.image} />
                          </div>
                          <div className="flex gap-y-3 flex-col md:flex-row gap-x-8 justify-between">
                            <div className="flex text-grayText items-center">
                              <span>
                                <img src={gasoline} alt="" width="30.5 px" />{" "}
                              </span>
                              <span className="ms-1">{car.gasoline}L</span>
                            </div>
                            <div className="flex text-grayText items-center">
                              <span>
                                <img src={manual} alt="" width="35.5 px" />{" "}
                              </span>
                              <span className="ms-1">Manual</span>
                            </div>
                            <div className="flex text-grayText items-center">
                              <span>
                                <img src={people} alt="" width="35.5 px" />{" "}
                              </span>
                              <span className="ms-1">{car.capacity}People</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between gap-x-4 mt-5">
                          <div className="flex">
                            <span className="text-lg">${car.price}.00</span>
                            <span className="font-Jakarta  text-grayText">
                              /day
                            </span>
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
                  <div></div>
                  <div className="flex justify-center ">
                    <button className="text-white w-40 mb-12 mt-5 bg-carblue rounded  py-2">
                      Show more car
                    </button>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default CarDetail;
