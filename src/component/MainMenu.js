import { Link } from "react-router-dom";
import homeIcone from "../assets/images/home.png";
import chart from "../assets/images/chart.png";
import Inbox from "../assets/images/message.png";
import calender from "../assets/images/calendar.png";
import Reimburse from "../assets/images/empty-wallet-change.png";
import car from "../assets/images/car-dash.png";
import help from "../assets/images/help.png";
import setting from "../assets/images/settingdash.png";
import dark from "../assets/images/briefcase.png";
import logout from "../assets/images/logoutd.png";
const MainMenu = () => {
  return (
    <section className=" mt-28 md:mt-14 ">
      <div className="ps-10 h-full  w-44 md:w-72 bg-white">
        <p className="font-Jakarta py-3 pt-9 mb-7 text-xs text-grayText">
          M A I N M E N U
        </p>

        <div className="flex flex-col font-Jakarta text-catText text-sm">
          <Link to="/dashboard">
            <div className="w-full ">
              <div className="flex  p-2 me-5 gap-x-2 bg-carblue text-white rounded-lg">
                <div className="w-5">
                  <img alt="" src={homeIcone} />
                </div>
                <p>Dashboard</p>
              </div>
            </div>
          </Link>

          <Link to="/">
            <div className="flex w-60 p-2 gap-x-2 mt-3 ">
              <div className="w-5">
                <img alt="" src={car} />
              </div>
              <p>Car Rent</p>
            </div>
          </Link>

          <Link>
            <div className="flex w-60 p-2 gap-x-2 mt-3  ">
              <div className="w-5">
                <img alt="" src={chart} />
              </div>
              <p>Insight</p>
            </div>
          </Link>

          <Link>
            <div className="flex w-60 p-2 gap-x-2 mt-3 ">
              <div className="w-5">
                <img alt="" src={Reimburse} />
              </div>
              <p>Reimburse</p>
            </div>
          </Link>

          <Link>
            <div className="flex w-60 p-2 gap-x-2 mt-3 ">
              <div className="w-5">
                <img alt="" src={Inbox} />
              </div>
              <p>Inbox</p>
            </div>
          </Link>

          <Link>
            <div className="flex w-60 p-2 gap-x-2 mt-3">
              <div className="w-5">
                <img alt="" src={calender} />
              </div>
              <p>Calender</p>
            </div>
          </Link>
        </div>

        <p className="font-Jakarta mt-7 py-4 text-xs text-grayText">
          P R E F E R E N C E S
        </p>
        <div className="flex flex-col font-Jakarta text-sm text-catText">
          <Link>
            <div className="flex w-60 p-2 gap-x-2 mt-3 ">
              <div className="w-5">
                <img alt="" src={setting} />
              </div>
              <p>Settings</p>
            </div>
          </Link>

          <Link>
            <div className="flex w-60 p-2 gap-x-2 mt-3 ">
              <div className="w-5">
                <img alt="" src={help} />
              </div>
              <p>Help & Center</p>
            </div>
          </Link>

          <Link>
            <div className="flex w-60 p-2 gap-x-2 mt-3 ">
              <div className="w-5">
                <img alt="" src={dark} />
              </div>
              <p>Dark Mode</p>
            </div>
          </Link>
        </div>
        <div className="w-fit hidden md:flex md:flex-col text-catText mb-3 font-Jakarta text-sm mt-12">
          <Link>
            <div className="flex w-60 p-2 gap-x-2 mt-3 ">
              <div className="w-5">
                <img alt="" src={logout} />
              </div>
              <p>Log Out</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MainMenu;
