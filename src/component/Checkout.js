import heart from "../assets/icons/heart.png";
import bell from "../assets/icons/bell.png";
import Radio from "@mui/material/Radio";
import setting from "../assets/icons/setting.png";
import moment from "moment";
import sequrity from "../assets/images/security.png";
import Footer from "./Footer";
import Rating from "@mui/material/Rating";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { peymentToggle } from "../features/Car/CarSlice";
import { Link, useLocation } from "react-router-dom";
import line from "../assets/images/Line-check.png";
import { useFormik } from "formik";
import * as Yup from "yup";

const Checkout = ({pickValue,setPickValue,dropValue,setDropValue}) => {
  const { car } = useLocation().state;
  // console.log(car);
  const { peyment } = useSelector((state) => state.car);
  const [selectedValue, setSelectedValue] = useState("a");
  const [locationPick, setLocationPick] = useState("");
  const [locationDrop, setLocationDrop] = useState("");
  const [timeDrop, setTimeDrop] = useState("");
  const [timePick, setTimePick] = useState("");
  // console.log(timeDrop, timePick);
  // console.log(locationPick, locationDrop);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const [value, setValue] = useState(4);

  const onChangeDate = (e) => {
    const newDate = moment(new Date(e.target.value));
    setPickValue(newDate);
    //console.log(newDate); //value picked from date picker
  };

  const onChangeDateDrop = (e) => {
    const newDate = moment(new Date(e.target.value));
    setDropValue(newDate);
    //console.log(newDate); //value picked from date picker
  };

  let resultDay = dropValue.diff(pickValue, "days");

  const totalPrice = car.price * resultDay;


  //console.log(pickValue._i);



  const initialValues = {
    name: "",
    phoneNumber: "",
    address: "",
    town: "",
    firstTerms: false,
    secondTerms: false,
  };
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is requierd")
      .min(3, "Name length is invalid"),
    phoneNumber: Yup.string()
      .required("phoneNumber is required")
      .min(8, "phoneNumber length is invalid")
      .matches(phoneRegExp, "Phone number is not valid"),
    address: Yup.string()
      .required("address is required")
      .min(20, "address length is invalid"),
    town: Yup.string()
      .required("town is required")
      .min(3, "town length is invalid"),
    firstTerms: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
    secondTerms: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
  });
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });
  return (
    <>
      <div className="bg-white w-screen overflow-hidden top-0 flex z-50 justify-between fixed border-b border-bg-gray">
        <div className="flex w-full justify-between pe-6 md:pe-12">
          <div className="flex justify-between w-full">
            <h2 className="text-carblue font-Jakarta text-2xl font-bold m-4 ps-0 md:ps-9">
              MORENT
            </h2>
            <button className="w-8 visible md:hidden border border-bg-gray rounded-full h-8 mt-4 ">
              {/* <img src={user} alt="heart" width="13 rem" height="18 px"/> */}
              <PersonIcon style={{ color: "#596780" }} />
            </button>
          </div>
          <div className="hidden md:flex gap-x-3 h-8 mt-4 md:visible ">
            <button className="border border-bg-gray rounded-full px-2">
              <img src={heart} alt="heart" width="23px" height="18 px" />
            </button>
            <button className="border border-bg-gray rounded-full px-2">
              <img src={bell} alt="heart" width="25px" height="18 px" />
            </button>
            <button className="border border-bg-gray rounded-full px-2">
              <img src={setting} alt="heart" width="25px" height="18 px" />
            </button>
            <button className="border border-bg-gray rounded-full px-1">
              <PersonIcon style={{ color: "#596780" }} />
            </button>
          </div>
        </div>
      </div>
      <section className="mt-20 mb-10 mx-9 font-Jakarta">
        <div className="flex gap-7 flex-col-reverse w-full md:flex-row">
          <div className="flex flex-col gap-y-5">
            <div className="bg-white rounded-lg pb-4">
              <div className="flex flex-col p-4">
                <h3>Billing Info</h3>
                <div className="flex justify-between w-full">
                  <p className="text-grayText text-xs">
                    Please enter your billing info
                  </p>
                  <p className="text-grayText text-xs">Step 1 of 4</p>
                </div>
                <form onSubmit={formik.handleSubmit} className="mt-4 text-sm">
                  <div className="flex gap-x-6 flex-col md:flex-row">
                    <div className="flex flex-col gap-y-3">
                      <div className="flex flex-col">
                        <label htmlFor="Name" className="text-sm mb-3">
                          Name
                        </label>
                        {formik.errors.name && formik.touched.name && (
                          <div className="text-heartred text-xs mb-2">
                            {formik.errors.name}
                          </div>
                        )}
                        <input
                          className="md:w-96 focus:outline-none bg-bg-gray rounded-md p-3"
                          placeholder="Name"
                          name="name"
                          value={formik.values.name}
                          {...formik.getFieldProps("name")}
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="Address" className="text-sm mb-3">
                          Address
                        </label>
                        {formik.errors.address && formik.touched.address && (
                          <div className="text-heartred text-xs mb-2">
                            {formik.errors.address}
                          </div>
                        )}
                        <input
                          className="md:w-96 focus:outline-none bg-bg-gray rounded-md p-3"
                          placeholder="Address"
                          name="address"
                          value={formik.values.address}
                          {...formik.getFieldProps("address")}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-y-3">
                      <div className="flex flex-col">
                        <label htmlFor="PhoneNumber" className="text-sm mb-3">
                          Phone Number
                        </label>
                        {formik.errors.phoneNumber &&
                          formik.touched.phoneNumber && (
                            <div className="text-heartred text-xs mb-2">
                              {formik.errors.phoneNumber}
                            </div>
                          )}
                        <input
                          className="md:w-96 focus:outline-none bg-bg-gray rounded-md p-3"
                          placeholder="Phone Number"
                          name="phoneNumber"
                          value={formik.values.phoneNumber}
                          {...formik.getFieldProps("phoneNumber")}
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="TownorCity" className="text-sm mb-3">
                          Town / City
                        </label>
                        {formik.errors.town && formik.touched.town && (
                          <div className="text-heartred text-xs mb-2">
                            {formik.errors.town}
                          </div>
                        )}
                        <input
                          className="md:w-96 focus:outline-none bg-bg-gray rounded-md p-3"
                          placeholder="Town or city"
                          name="town"
                          value={formik.values.town}
                          {...formik.getFieldProps("town")}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="bg-white rounded-lg pb-4">
              <div className="flex flex-col p-4">
                <h3>Rental Info</h3>
                <div className="flex justify-between w-full">
                  <p className="text-grayText text-xs">
                    Please select your rental date
                  </p>
                  <p className="text-grayText text-xs">Step 2 of 4</p>
                </div>
                <div className="flex my-4">
                  <Radio
                    checked={selectedValue === "a"}
                    onChange={handleChange}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                  />
                  <span className="font-Jakarta mt-2">Pick - Up</span>
                </div>
                <div className="flex flex-col md:flex-row text-sm gap-x-7">
                  <div className="flex flex-col gap-y-3">
                    <div className="flex flex-col gap-y-3">
                      <label>Locations</label>
                      <select
                        value={locationPick}
                        className="md:w-96
                       focus:outline-none
                        text-grayText
                        bg-bg-gray 
                        rounded-md p-3"
                        onChange={(e) => setLocationPick(e.target.value)}
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
                    <div className="flex flex-col gap-y-3">
                      <label>Time</label>
                      <input
                        type="time"
                        value={timePick}
                        onChange={(e) => setTimePick(e.target.value)}
                        className="md:w-96 focus:outline-none text-grayText bg-bg-gray rounded-md p-3"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <label>Date</label>
                    <div className="w-96">
                      <input
                        style={{
                          border: "none",
                          backgroundColor: "#F6F7F9",
                          height: "40px",
                          width: " 334px",
                        }}
                        type="date"
                        className="md:w-96 border-none focus:outline-none text-grayText bg-bg-gray rounded-md p-3"
                        value={pickValue}
                        onChange={onChangeDate}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex my-4">
                  <Radio
                    checked={selectedValue === "a"}
                    onChange={handleChange}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                  />
                  <span className="font-Jakarta mt-2">Drop - Off</span>
                </div>
                <div className="flex flex-col md:flex-row text-sm gap-x-7">
                  <div className="flex flex-col gap-y-3">
                    <div className="flex flex-col gap-y-3">
                      <label>Locations</label>
                      <select
                        value={locationDrop}
                        className="md:w-96
                       focus:outline-none
                        text-grayText
                        bg-bg-gray 
                        rounded-md p-3"
                        onChange={(e) => setLocationDrop(e.target.value)}
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
                    <div className="flex flex-col gap-y-3">
                      <label>Time</label>

                      <input
                        type="time"
                        value={timeDrop}
                        onChange={(e) => setTimeDrop(e.target.value)}
                        className="md:w-96 focus:outline-none text-grayText bg-bg-gray rounded-md p-3"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <label>Date</label>

                    <div className="w-96">
                      <input
                        style={{
                          border: "none",
                          backgroundColor: "#F6F7F9",
                          height: "40px",
                          width: " 334px",
                        }}
                        type="date"
                        className="md:w-96 border-none focus:outline-none text-grayText bg-bg-gray rounded-md p-3"
                        value={dropValue}
                        onChange={onChangeDateDrop}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg pb-4">
              <div className="flex flex-col p-4">
                <h3>Payment Method</h3>
                <div className="flex justify-between w-full ">
                  <p className="text-grayText text-xs">
                    Please enter your payment method
                  </p>
                  <p className="text-grayText text-xs ">Step 3 of 4</p>
                </div>
                <div className=" m-3 flex flex-col">
                  {peyment.map((p) => {
                    return (
                      <div
                        key={p.id}
                        className="flex p-4 bg-bg-gray my-2 rounded-md flex-col"
                      >
                        <div className="flex">
                          <input
                            checked={p.checked}
                            type="radio"
                            name={p.name}
                            onChange={(e) =>
                              dispatch(peymentToggle({ id: p.id }))
                            }
                          />
                          <span className="my-3">{p.name}</span>
                        </div>
                        <div
                          className={`flex flex-col md:flex-row gap-x-4 text-sm ${
                            p.checked ? "" : "hidden"
                          }`}
                        >
                          <div className="flex flex-col gap-y-4">
                            <div className="flex flex-col gap-y-2">
                              <label>Card Number</label>
                              <input
                                className="md:w-96 focus:outline-none text-grayText rounded-md p-3"
                                type="text"
                                placeholder="Card Number"
                              />
                            </div>
                            <div className="flex flex-col gap-y-2">
                              <label>Card Holder</label>
                              <input
                                className="md:w-96 focus:outline-none text-grayText rounded-md p-3"
                                type="text"
                                placeholder="Card Holder"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-y-4">
                            <div className="flex flex-col gap-y-2">
                              <label>Expration Date</label>
                              <input
                                className="md:w-96 focus:outline-none text-grayText rounded-md p-3"
                                type="text"
                                placeholder="DD / MM / YY"
                              />
                            </div>
                            <div className="flex flex-col gap-y-3">
                              <label>CVC</label>
                              <input
                                className="md:w-96 focus:outline-none text-grayText rounded-md p-3"
                                type="text"
                                placeholder="CVC"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg pb-4">
              <div className="flex flex-col p-4">
                <h3>Confirmation</h3>
                <div className="flex justify-between mb-3">
                  <p className="text-grayText text-xs">
                    We are getting to the end. Just few clicks and your rental
                    is ready!
                  </p>
                  <p className="text-grayText text-xs">Step 4 of 4</p>
                </div>
                <form className="flex flex-col">
                  <div className="flex gap-x-2 text-sm p-4 bg-bg-gray my-2 rounded-md ">
                    <input
                      checked={formik.values.firstTerms}
                      name="firstTerms"
                      value={true}
                      type="checkbox"
                      onChange={formik.handleChange}
                    />
                    <p>
                      I agree with sending an Marketing and newsletter emails.
                      No spam, promissed!
                    </p>
                  </div>
                  <div className="flex gap-x-2 text-sm p-4 bg-bg-gray my-2 rounded-md ">
                    <input
                      checked={formik.values.secondTerms}
                      name="secondTerms"
                      value={true}
                      type="checkbox"
                      onChange={formik.handleChange}
                    />
                    <p>
                      I agree with our terms and conditions and privacy policy.
                    </p>
                  </div>
                </form>
                <Link
                  to="/dashboard"
                  state={{
                    totalPrice,
                    car,
                    locationDrop,
                    locationPick,
                    timeDrop,
                    timePick,
                    
                  }}
                >
                  <button
                    // disabled={!formik.isValid}
                    className="text-white w-32 disabled:bg-grayText mb-12 mt-5 bg-carblue rounded  py-2"
                  >
                    Rent Now
                  </button>
                </Link>
                <div className="w-8">
                  <img src={sequrity} alt="" width="26 px" height="28px" />
                </div>
                <div className="flex flex-col text-sm mt-4 gap-y-2">
                  <p>All your data are safe</p>
                  <p className="text-grayText text-xs">
                    We are using the most advanced security to provide you the
                    best experience ever.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg h-96 ">
            <div className="flex flex-col p-4">
              <h3>Rental Summary</h3>
              <p className="text-grayText text-xs">
                Prices may change depending on the length of the rental and the{" "}
                <br /> price of your rental car.
              </p>
              <div className="flex gap-x-4 mt-6">
                <div className="bg-carblue rounded-md w-32 px-2 py-6">
                  <img src={car.image} alt="" />
                </div>
                <div className="flex flex-col mt-4">
                  <h1 className="text-2xl">{car.name}</h1>
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
                </div>
              </div>
              <div className="my-4">
                <img src={line} alt="" />
              </div>
              <div className="flex justify-between">
                <p className="text-grayText text-xs">Subtotal</p>
                <p>${car.price}.00</p>
              </div>
              <div className="flex justify-between">
                <p className="text-grayText text-xs">Days</p>
                <p>{resultDay}</p>
              </div>
              <form className="flex px-2 pb-2 mt-2 bg-bg-gray rounded-md">
                <input
                  type="text"
                  className="bg-bg-gray w-full text-xs mt-2 focus:outline-none"
                  placeholder="Apply promo code"
                />
                <button className="p-0 m-0 text-xs w-20">Apply now</button>
              </form>
              <div className="flex mt-4 justify-between">
                <div className="flex flex-col">
                  <p>Total Rental Price</p>
                  <p className="text-grayText text-xs">
                    Overall price and includes rental discount
                  </p>
                </div>
                <p className="text-2xl">${totalPrice}.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Checkout;
