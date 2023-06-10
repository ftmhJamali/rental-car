
import filter from "../assets/icons/filter.png";
import search from "../assets/icons/search-normal.png";
import heart from "../assets/icons/heart.png";
import bell from "../assets/icons/bell.png";
import setting from "../assets/icons/setting.png";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch } from "react-redux";
import { searchTitle } from "../features/Car/CarSlice";
const Navigation = ({ setIsShow }) => {
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    console.log(e.target.value);
    dispatch(searchTitle({ value: e.target.value }));
  };
  return (
    <div>
      <div className="bg-white w-screen overflow-hidden flex z-50 justify-between fixed border-b border-bg-gray">
        <div className="flex justify-start flex-col md:flex-row columns-3">
          <div className="flex justify-between">
            <h2 className="text-carblue font-Jakarta text-2xl font-bold m-4 ps-0 md:ps-9">
              MORENT
            </h2>
            <button className="w-8 visible md:hidden border border-bg-gray rounded-full h-8 mt-4 ">
              {/* <img src={user} alt="heart" width="13 rem" height="18 px"/> */}
              <PersonIcon style={{ color: "#596780" }} />
            </button>
          </div>

          <form className=" w-96 md:w-80 h-8 m-4 border rounded-full border-grayText pt-1 ps-2">
            <button className="pe-2" type="submit">
              <img src={search} alt="filter" width="16px" height="18px" />{" "}
            </button>
            <input
              onChange={handleSearch}
              className="w-80 md:w-64 focus:outline-none"
              type="search"
              placeholder="Search somthing here"
            />
            <button
              onClick={(e) => {
                setIsShow(true);
                e.preventDefault();
              }}
              type="filter"
              className="items-end"
            >
              <img
                style={{ color: "#596780" }}
                src={filter}
                alt="filter"
                width="16px"
                height="18px"
              />{" "}
            </button>
          </form>

          <div className="w-0 h-0  md:w-56"></div>
          <div className="w-0 h-0  md:w-56"></div>
          <div className="w-0 h-0 md:w-56"></div>
          <div className="w-0 h-0  md:w-32"></div>

          <div className="hidden md:flex gap-x-3 h-8 mt-4 md:visible ">
            <button className="border border-bg-gray rounded-full px-2">
              <img src={heart} alt="heart" width="15 rem" height="18 px" />
            </button>
            <button className="border border-bg-gray rounded-full px-2">
              <img src={bell} alt="heart" width="17 rem" height="18 px" />
            </button>
            <button className="border border-bg-gray rounded-full px-2">
              <img src={setting} alt="heart" width="16 rem" height="18 px" />
            </button>
            <button className="border border-bg-gray rounded-full px-1">
              <PersonIcon style={{ color: "#596780" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
