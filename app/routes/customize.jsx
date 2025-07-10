import leftIcon from '../assets/common/left1.png';
import rightIcon from '../assets/common/right1.png';
import leftIcon2 from '../assets/common/left-icon.png';
import rightIcon2 from '../assets/common/right-icon.png';
import rightIcon3 from '../assets/common/right-icon2.png';
import stock from '../assets/main/slide-stock.jpg';
export default function Customizepage() {
  return (
    <div>
      <div className="flex justify-between bg-[#F8F8F8] py-[120px] px-[160px]">
        <div className='mr-[80px]'>
          <div className="w-[786px] h-[850px] relative rounded-[24px] bg-[url(../assets/main/shop-sofa1.jpg)] bg-cover bg-center">
            <img
              className="w-[70px] h-[70px] absolute left-[-35px] top-[50%] translate-y-[-50%] cursor-pointer"
              src={leftIcon}
              alt=""
            />
            <img
              className="w-[70px] h-[70px] absolute right-[-35px] top-[50%] translate-y-[-50%] cursor-pointer"
              src={rightIcon}
              alt=""
            />
          </div>
          <div className="flex justify-between items-center">
            <img
              className="w-[30px] h-[30px] cursor-pointer"
              src={leftIcon2}
              alt=""
            />
            <div className="w-[105px] h-[155px] bg-[url(../assets/main/slide1.png)] bg-contain bg-no-repeat bg-center"></div>
            <div className="w-[105px] h-[155px] bg-[url(../assets/main/slide2.png)] bg-contain bg-no-repeat bg-center"></div>
            <div className="w-[105px] h-[155px] bg-[url(../assets/main/slide3.png)] bg-contain bg-no-repeat bg-center"></div>
            <div className="w-[105px] h-[155px] bg-[url(../assets/main/slide4.jpg)] bg-contain bg-no-repeat bg-center"></div>
            <img
              className="w-[30px] h-[30px] cursor-pointer"
              src={rightIcon2}
              alt=""
            />
          </div>
        </div>
        <div>
          <div className='pb-[24px] border-b-[2px] border-[#eee]'>
            <h2 style={{margin: 0,fontSize:'60px'}}>Sofa</h2>
            <div className='my-[24px] flex items-center'>
              <span className='text-[#525252] text-[32px] line-through mr-[12px]'>$30.00</span>
              <span className='text-[44px] font-bold'>$25.00</span>
            </div>
            <p>
              Belgian designer Mathias de Ferm brings an eye for architectural
              detail to the Striata collection. Distinguished by a barrelback
              silhouette wrapped in handwoven all-weather rope, the collection
              features refined reeded detail on a sustainably harvested premium
              solid teak frame. A slender opening at the back allows for a
              whisper of light to stream through. Luxury, reticulated seat
              cushions offer optimum performance and comfort. Frame is
              guaranteed for life.
            </p>
            <p style={{margin:'16px 0 0'}} className='mt-[16px] font-bold'>Also Available In Aluminum</p>
            <p style={{margin:'16px 0 0'}} className='mt-[16px] font-bold'>Shop the entire Collection</p>
          </div>
          <div className='mt-[24px]'>
            <div className='flex justify-between items-center'>
              <p style={{fontSize:'20px',fontWeight:'bold'}}>Select From 7 Stocked and 87 special order Fabrics</p>
              <img className="w-[24px] h-[24px]" src={rightIcon3} alt="" />
            </div>
            <img className='w-[100%] h-[90px] mt-[16px]' src={stock} alt="" />
          </div>
          <div className='mt-[24px] pb-[24px] border-b-[2px] border-[#eee]'>
            <p style={{fontSize:'20px',fontWeight:'bold'}}>Finish Options</p>
            <div className='flex mt-[16px]'>
              <div className='bg-[url(../assets/main/slide-teak1.png)] w-[135px] h-[140px] rounded-[12px] p-[8px] mr-[16px] flex flex-col justify-end'>
                <div className='bg-[#fff] p-[8px] rounded-[8px]'>Natural Teak</div>
              </div>
              <div className='bg-[url(../assets/main/slide-teak2.png)] w-[135px] h-[140px] rounded-[12px] p-[8px] flex flex-col justify-end'>
                <div className='bg-[#fff] p-[8px] rounded-[8px]'>Aged Teak</div>
              </div>
            </div>
          </div>
          <div className='bg-[#fff] p-[16px] rounded-[8px] flex items-center justify-between w-[100%] mt-[24px]'>
            <span style={{fontSize:'20px'}}>View In Stock Items</span>
            <img className='w-[24px] h-[24px]' src={rightIcon3} alt="" />
          </div>
          <div className='bg-[#fff] p-[16px] rounded-[8px] flex items-center justify-between w-[100%] mt-[24px]'>
            <span style={{fontSize:'20px'}}>Details</span>
            <img className='w-[24px] h-[24px]' src={rightIcon3} alt="" />
          </div>
          <div className='bg-[#fff] p-[16px] rounded-[8px] flex items-center justify-between w-[100%] mt-[24px]'>
            <span style={{fontSize:'20px'}}>Dimensions</span>
            <img className='w-[24px] h-[24px]' src={rightIcon3} alt="" />
          </div>
          <div className='bg-[#fff] p-[16px] rounded-[8px] flex items-center justify-between w-[100%] mt-[24px]'>
            <span style={{fontSize:'20px'}}>Care</span>
            <img className='w-[24px] h-[24px]' src={rightIcon3} alt="" />
          </div>
        </div>
        <div className='py-[120px] px-[160px]'>
          
        </div>
      </div>
    </div>
  );
}
