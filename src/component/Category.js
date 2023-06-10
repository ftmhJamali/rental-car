import close from "../assets/icons/Group33824.png";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCapacity, togglePrice, toggleType } from "../features/Car/CarSlice";

const Category = ({ isShow, setIsShow }) => {
  const { type } = useSelector((state) => state.car);
  const { capacity } = useSelector((state) => state.car);
  // console.log(type,capacity)
 
  const [value, setValue] = useState([20, 100]);
  const handleChange = (event, newValue) => {
    setValue(newValue);

     //console.log(newValue[0],newValue[1])
     dispatch(togglePrice({minPrice:newValue[0],maxPrice:newValue[1]}))
  };
  
  

  function valuetext(value) {
    return `${value}$`;
  }
  const dispatch = useDispatch();
  return (
    <section className=" mt-28 md:mt-14 ">
      <div
        className={`ps-10 h-full  w-44 md:w-80 bg-white ${
          isShow ? "" : "hidden"
        }`}
      >
        <div className="flex justify-between">
          <p className="font-Jakarta py-3 pt-7 text-xs text-grayText">TYPE</p>
          <button
            onClick={(e) => {
              setIsShow(false);
              e.preventDefault();
            }}
            className="pe-4  md:hidden"
          >
            <img src={close} alt="close" width="12px" />
          </button>
        </div>
        <div className="flex flex-col font-Jakarta text-catText">
          {type.map((type) => {
            return (
              <div className="flex my-3">
                <input
                  type="checkbox"
                  checked={type.checked}
                  name={type.name}
                  onChange={(e) => dispatch(toggleType({ id: type.id }))}
                />
                <label htmlFor={type.name} className="ms-2">
                  {type.name}
                </label>
              </div>
            );
          })}
        </div>

        <p className="font-Jakarta py-4 text-xs text-grayText">CAPACITY</p>
        <div className="flex flex-col font-Jakarta text-catText">
          {capacity.map((capacity) => {
            return (
              <div className="flex my-3">
                <input
                  type="checkbox"
                  checked={capacity.checked}
                  name={capacity.name}
                  onChange={(e) =>
                    dispatch(toggleCapacity({ id: capacity.id }))
                  }
                />
                <label htmlFor={capacity.name} className="ms-2">
                  {capacity.name} Person
                </label>
              </div>
            );
          })}
        </div>
        <div className="w-fit hidden md:flex md:flex-col">
          <p className="font-Jakarta py-3 text-xs text-grayText">PRICE</p>
          <Box sx={{ width: 230 }}>
            <Slider
            
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            />
          </Box>
          <p className="font-Jakarta pt-1 text-sm ">Max $100.00</p>
        </div>
      </div>
    </section>
  );
};

export default Category;
