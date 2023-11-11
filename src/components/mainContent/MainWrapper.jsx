import Header from "../header/Header";
import Categories from "../categories/Categories";
import Settings from "../Settings/Settings";
import "./MainWrapper.css";
import Dua from "../duas/Dua";

const MainWrapper = ({ handleIsShow }) => {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-6">
        <Header handleIsShow={handleIsShow} />
      </div>
      <div className="col-span-6 mt-[27px] flex gap-[33px]">
        <div className="w-[320px] bg-white overflow-hidden h-[80vh] rounded-[10px] overflow-y-auto border-[0.5px] p-0 border-[#E2E2E2]">
          <Categories />
        </div>

        <div className="h-[100vh] scroll-smooth flex-1 overflow-y-auto">
          <Dua />
        </div>

        <div
          id="setting_1"
          className="w-[227px] bg-white rounded-[32px] h-[80vh] overflow-y-auto border-[0.5px] border-[rgb(226,226,226)]"
        >
          <Settings />
        </div>
      </div>
    </div>
  );
};

export default MainWrapper;
