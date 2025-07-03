import downIcon from '../assets/common/down.png';
import favorite from '../assets/common/favorite.png';
import star1 from '../assets/common/star1.png';
import star2 from '../assets/common/star2.png';

 export default function Shoppage() {
  return (
    <div className="bg-[#F8F8F8] px-[120px] py-[120px]">
      <div className='flex justify-end mb-[40px] items-center'>
        <span className='mr-[12px]'>Sort By</span>
        <select className='px-[20px] py-[10px] cursor-pointer rounded-[8px]' style={{border:'2px solid #575757'}}>
          <option value="1">Price: Low to High</option>
          <option value="2">Popularity</option>
        </select>
      </div>
      <div className="flex">
        <div className="bg-[#fff] w-[360px] rounded-[16px] p-[24px] mr-[50px]">
          <h3
            className="text-[24px] font-bold"
            style={{borderBottom: '1px solid #D4D4D4', padding: '0 0 10px'}}
          >
            Filter By
          </h3>
          <div
            className="mt-[16px]"
            style={{borderBottom: '1px solid #D4D4D4', padding: '0 0 10px'}}
          >
            <div className="flex items-center justify-between">
              <span className="text-[18px] font-bold">Availability</span>
              <img className="w-[24px] h-[24px]" src={downIcon} alt="" />
            </div>
            <div className="mt-[16px]">
              <input type="checkbox" id="scales" name="scales" checked />
              <label htmlFor="scales">In Stock</label>
            </div>
            <div>
              <input type="checkbox" id="stock" name="stock" checked />
              <label htmlFor="stock">Out of Stock</label>
            </div>
          </div>
          <div
            className="mt-[16px]"
            style={{borderBottom: '1px solid #D4D4D4', padding: '0 0 10px'}}
          >
            <div className="flex items-center justify-between">
              <span className="text-[18px] font-bold">Product Type</span>
              <img className="w-[24px] h-[24px]" src={downIcon} alt="" />
            </div>
            <div className="mt-[16px]">
              <input type="checkbox" id="scales" name="scales" checked />
              <label htmlFor="scales">Bedroom Furniture</label>
            </div>
            <div>
              <input type="checkbox" id="stock" name="stock" checked />
              <label htmlFor="stock">Outdoor</label>
            </div>
            <div>
              <input type="checkbox" id="stock" name="stock" checked />
              <label htmlFor="stock">Living Room</label>
            </div>
            <div>
              <input type="checkbox" id="stock" name="stock" checked />
              <label htmlFor="stock">Workspace</label>
            </div>
          </div>
          <div
            className="mt-[16px]"
            style={{borderBottom: '1px solid #D4D4D4', padding: '0 0 10px'}}
          >
            <div className="flex items-center justify-between">
              <span className="text-[18px] font-bold">Color</span>
              <img className="w-[24px] h-[24px]" src={downIcon} alt="" />
            </div>
            <div className="mt-[16px]">
              <input type="checkbox" id="scales" name="scales" checked />
              <label htmlFor="scales">Black</label>
            </div>
            <div>
              <input type="checkbox" id="stock" name="stock" checked />
              <label htmlFor="stock">White</label>
            </div>
            <div>
              <input type="checkbox" id="stock" name="stock" checked />
              <label htmlFor="stock">Red</label>
            </div>
            <div>
              <input type="checkbox" id="stock" name="stock" checked />
              <label htmlFor="stock">Green</label>
            </div>
            <div>
              <input type="checkbox" id="stock" name="stock" checked />
              <label htmlFor="stock">Blue</label>
            </div>
            <div>
              <input type="checkbox" id="stock" name="stock" checked />
              <label htmlFor="stock">Yellow</label>
            </div>
          </div>
          <div
            className="mt-[16px]"
            style={{borderBottom: '1px solid #D4D4D4', padding: '0 0 10px'}}
          >
            <div className="flex items-center justify-between">
              <span className="text-[18px] font-bold">Material</span>
              <img className="w-[24px] h-[24px]" src={downIcon} alt="" />
            </div>
            <div className="mt-[16px]">
              <input type="checkbox" id="scales" name="scales" checked />
              <label htmlFor="scales">Metal</label>
            </div>
            <div>
              <input type="checkbox" id="stock" name="stock" checked />
              <label htmlFor="stock">Wood</label>
            </div>
            <div>
              <input type="checkbox" id="stock" name="stock" checked />
              <label htmlFor="stock">Wooden</label>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 flex-1 gap-[20px]">
          {[1, 2, 3].map((item) => (
            <div key={item}>
              <div className="bg-[url(../assets/main/shop-sofa1.jpg)] h-[300px] bg-cover rounded-t-[16px] p-[16px] flex justify-end">
                <img className="w-[32px] h-[32px]" src={favorite} alt="" />
              </div>
              <div className="bg-[#fff] p-[24px] rounded-b-[16px]">
                <div className="flex justify-between">
                  <span>Sofa</span>
                  <div className="flex">
                    {[1, 2, 3, 4].map((item) => (
                      <img
                        className="w-[20px] h-[20px]"
                        src={star2}
                        alt=""
                        key={item}
                      />
                    ))}
                    <img className="w-[20px] h-[20px]" src={star1} alt="" />
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="text-[24px] line-through mr-[12px] text-[#535353]">
                    $30.00
                  </p>
                  <p className="font-bold text-[30px]">$25.00</p>
                </div>
                <div className="flex mt-[16px]">
                  <div className="w-[34px] h-[34px] border-2 border-[#535353] rounded-full grid place-content-center cursor-pointer mr-[6px]">
                    <div className="w-[24px] h-[24px] bg-[#935E0F] rounded-full"></div>
                  </div>
                  <div className="w-[34px] h-[34px] border-2 border-[#535353] rounded-full grid place-content-center cursor-pointer mr-[6px]">
                    <div className="w-[24px] h-[24px] bg-[#289821] rounded-full"></div>
                  </div>
                  <div className="w-[34px] h-[34px] border-2 border-[#535353] rounded-full grid place-content-center cursor-pointer">
                    <div className="w-[24px] h-[24px] bg-[#741D19] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
