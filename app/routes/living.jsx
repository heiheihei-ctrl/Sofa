import living1 from "../assets/main/card1.jpg"
import goIcon from "../assets/common/go-icon.png"

export default function Livingpage() {
  return (
    <div className="bg-[#F8F8F8] pb-[120px]">
      <div className="w-[1600px] mx-auto mb-[40px] px-[40px]">
        <h2 style={{fontWeight:"normal",fontSize:'54px'}} className="text-center">Items In <span className="font-bold">This Room</span></h2>
        <div className="grid grid-cols-3 grid-rows-3 gap-[50px] w-[100%] mt-[50px]">
          <div className="bg-[#fff] rounded-[24px] justify-between border-box">
            <img className="h-[450px]" src={living1} alt="" />
            <div className="flex p-[24px] justify-between">
              <div className="flex flex-col">
                <span className="text-[22px]">Sofa</span><span className="font-bold text-[32px]">$70.00</span>
              </div>
              <img className="w-[65px] h-[65px] cursor-pointer" src={goIcon} alt="" />
            </div>
          </div>
          <div className="bg-[#fff] rounded-[24px] justify-between border-box">
            <img className="h-[450px]" src={living1} alt="" />
            <div className="flex p-[24px] justify-between">
              <div className="flex flex-col">
                <span className="text-[22px]">Sofa</span><span className="font-bold text-[32px]">$70.00</span>
              </div>
              <img className="w-[65px] h-[65px] cursor-pointer" src={goIcon} alt="" />
            </div>
          </div>
          <div className="bg-[#fff] rounded-[24px] justify-between border-box">
            <img className="h-[450px]" src={living1} alt="" />
            <div className="flex p-[24px] justify-between">
              <div className="flex flex-col">
                <span className="text-[22px]">Sofa</span><span className="font-bold text-[32px]">$70.00</span>
              </div>
              <img className="w-[65px] h-[65px] cursor-pointer" src={goIcon} alt="" />
            </div>
          </div>
          <div className="bg-[#fff] rounded-[24px] justify-between border-box">
            <img className="h-[450px]" src={living1} alt="" />
            <div className="flex p-[24px] justify-between">
              <div className="flex flex-col">
                <span className="text-[22px]">Sofa</span><span className="font-bold text-[32px]">$70.00</span>
              </div>
              <img className="w-[65px] h-[65px] cursor-pointer" src={goIcon} alt="" />
            </div>
          </div>
          <div className="bg-[#fff] rounded-[24px] justify-between border-box">
            <img className="h-[450px]" src={living1} alt="" />
            <div className="flex p-[24px] justify-between">
              <div className="flex flex-col">
                <span className="text-[22px]">Sofa</span><span className="font-bold text-[32px]">$70.00</span>
              </div>
              <img className="w-[65px] h-[65px] cursor-pointer" src={goIcon} alt="" />
            </div>
          </div>
          <div className="bg-[#fff] rounded-[24px] justify-between border-box">
            <img className="h-[450px]" src={living1} alt="" />
            <div className="flex p-[24px] justify-between">
              <div className="flex flex-col">
                <span className="text-[22px]">Sofa</span><span className="font-bold text-[32px]">$70.00</span>
              </div>
              <img className="w-[65px] h-[65px] cursor-pointer" src={goIcon} alt="" />
            </div>
          </div>
          <div className="bg-[#fff] rounded-[24px] justify-between border-box">
            <img className="h-[450px]" src={living1} alt="" />
            <div className="flex p-[24px] justify-between">
              <div className="flex flex-col">
                <span className="text-[22px]">Sofa</span><span className="font-bold text-[32px]">$70.00</span>
              </div>
              <img className="w-[65px] h-[65px] cursor-pointer" src={goIcon} alt="" />
            </div>
          </div>
          <div className="bg-[#fff] rounded-[24px] justify-between border-box">
            <img className="h-[450px]" src={living1} alt="" />
            <div className="flex p-[24px] justify-between">
              <div className="flex flex-col">
                <span className="text-[22px]">Sofa</span><span className="font-bold text-[32px]">$70.00</span>
              </div>
              <img className="w-[65px] h-[65px] cursor-pointer" src={goIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
