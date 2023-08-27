// import { useSelector } from "react-redux";
import Layout from "../layout/layout";
import Category from "./Category";
// import gasoline from "../assets/icons/gas.png";
import CloseIcon from "@mui/icons-material/Close";
// import manual from "../assets/icons/Car.png";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
// import people from "../assets/icons/profile-2user.png";
import * as React from "react";
// import Checkbox from "@mui/material/Checkbox";
// import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
// import Favorite from "@mui/icons-material/Favorite";
import PickAndDrop from "./PickAndDrop";
import Footer from "./Footer";
// import { Link } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import CarItems from "./CarItems";

const Carlist = ({ isShow, setIsShow }) => {
  // const { filteredCar } = useSelector((state) => state.car);
  const [open, setOpen] = useLocalStorage(true);
  // console.log(car)

  // const label = { inputProps: { "aria-label": "Checkbox demo" } };
  // const [showCar,setShowCar]=useState(false)
  return (
    <>
      <Layout setIsShow={setIsShow}>
        <div className="flex">
          <Category setIsShow={setIsShow} isShow={isShow} />
          <div className="flex flex-col">
            <Dialog open={open}>
              <DialogTitle>
                <div className="w-full flex justify-end">
                  <button onClick={() => setOpen(!open)} className="text-xs">
                    <CloseIcon />
                  </button>
                </div>
              </DialogTitle>
              <DialogContent>
                <div className="flex flex-col gap-y-6">
                  <div>Welcome to my project 😉</div>
                  <div className="flex">
                    Email :
                    <p className="text-carblue">fatemehjamali7061@gmail.com</p>
                  </div>
                  <div className="text-xs flex justify-between text-grayText">
                    <p>react</p>
                    <p>redux</p>
                    <p>tailwind</p>
                    <p>MUI</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <PickAndDrop isShow={isShow} />
            <section
              className={`ms-9 mt-4 
              overflow-hidden 
              flex flex-col 
              justify-center 
              font-Jakarta ${isShow ? "md:ms-10" : "md:ms-28"}`}
            >
              <div
                className={`grid grid-cols-1 ms-5 gap-x-3 gap-y-4 ${
                  isShow ? " md:grid-cols-3" : "md:grid-cols-4 "
                }`}
              >
                <CarItems/>
                {/* {filteredCar.map((car) => {
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
                        <div className="flex justify-center px-6 md:px-0">
                          <img width="244 px" alt={car.id} src={car.image} />
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
                })} */}
                <div></div>

                <div></div>
              </div>
              <div className="flex justify-center ">
                <button className="text-white w-40 mb-12 mt-5 bg-carblue rounded h-10  py-2">
                  Show more car
                </button>
              </div>
            </section>
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default Carlist;
