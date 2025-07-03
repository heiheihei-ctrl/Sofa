import {useState} from 'react';
import income from '../assets/common/income.png';
import icon1 from '../assets/common/offer1.png';
import icon2 from '../assets/common/offer2.png';
import icon3 from '../assets/common/offer3.png';
import progress from '../assets/main/progress.png';
import decome from '../assets/common/decome.png';

export default function Servicespage() {
  const [question, setQuestion] = useState([
    {
      id: 1,
      title: 'What is Hydrogen?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      isOpen: false,
    },
    {
      id: 2,
      title: 'What is Hydrogen?',
      content: '123123',
      isOpen: false,
    },
  ]);

  // 设置展开
  const setQuestionShow = (id) => {
    setQuestion(
      question.map((item) =>
        item.id === id ? {...item, isOpen: !item.isOpen} : item,
      ),
    );
  };
  return (
    <div>
      {/* 板块 */}
      <div className="pt-[120px] bg-[#F8F8F8]">
        <div className="w-[900px] mx-auto text-center">
          <p className="text-center">
            <span className="text-[36px]">What </span>
            <span className="font-bold text-[36px]">We Offer</span>
          </p>
        </div>
        {/* 板块 */}
        <div className="flex items-center px-[40px] justify-between mt-[80px] pb-[120px]">
          <div className="w-[500px] bg-[#fff] rounded-[16px] p-[24px] box-border">
            <img className="w-[80px] h-[80px]" src={icon1} alt="" />
            <h3 className="text-[26px] font-bold mt-[16px]">
              Factory-Direct Modular Furniture
            </h3>
            <p>
              Access premium designs and finishes at unbeatable value, shipped
              directly from our factory.
            </p>
          </div>
          <div className="w-[500px] bg-[#fff] rounded-[16px] p-[24px] box-border relative top-[40px]">
            <img className="w-[80px]" src={icon2} alt="" />
            <h3 className="text-[26px] font-bold mt-[16px]">
              Modular Customization
            </h3>
            <p>
              All products are based on a modular system—allowing tailored
              configurations while maintaining production efficiency.
            </p>
          </div>
          <div className="w-[500px] bg-[#fff] rounded-[16px] p-[24px] box-border">
            <img className="w-[80px]" src={icon3} alt="" />
            <h3 className="text-[26px] font-bold mt-[16px]">
              Whole-Home & Project Solutions
            </h3>
            <p>
              From individual customers to design professionals, we support
              custom furniture needs at both personal and project scales.
            </p>
          </div>
        </div>
      </div>
      {/* 板块 */}
      <div className="py-[120px] bg-[#fff] flex">
        <div className="bg-[url(../assets/common/service-bg.jpg)] w-[960px] h-[750px] bg-cover rounded-r-[20px] mr-[50px]"></div>
        <div>
          <div>
            <h2 style={{fontSize: '54px', fontWeight: 'normal'}}>
              Modular Customization
            </h2>
            <p className="font-bold" style={{fontSize: '54px'}}>
              Services
            </p>
          </div>
          <div>
            <h3 className="font-bold">
              1. Customize a Piece (for individual customers)
            </h3>
            <p style={{margin: '16px 0 0'}}>
              Use our online customization tool to:{' '}
            </p>
            <ul
              style={{
                listStyle: 'disc',
                listStylePosition: 'inside',
                margin: '16px 0 0',
              }}
            >
              <li>Select base modules </li>
              <li>Adjust size, color, material, and upholstery</li>
              <li>
                Visualize and configure your design directly on the website
              </li>
            </ul>
            <p className="font-bold">
              Fast, self-guided, and ideal for room-by-room upgrades
            </p>
          </div>
          <div className="mt-[16px]">
            <h3 className="font-bold">
              2. Customize a Project (for residential or commercial projects)
            </h3>
            <p style={{margin: '16px 0 0'}}>
              Use our online customization tool to:{' '}
            </p>
            <ul
              style={{
                listStyle: 'disc',
                listStylePosition: 'inside',
                margin: '16px 0 0',
              }}
            >
              <li>Select base modules </li>
              <li>Adjust size, color, material, and upholstery</li>
              <li>
                Visualize and configure your design directly on the website
              </li>
            </ul>
            <p className="font-bold">
              Fast, self-guided, and ideal for room-by-room upgrades
            </p>
          </div>
        </div>
      </div>
      {/* 板块 */}
      <div
        className="pt-[50px] pb-[60px] text-center px-[40px] border-box"
        style={{background: '#F8F8F8'}}
      >
        <p
          className="font-normal text-center w-[680px]"
          style={{margin: '0 auto'}}
        >
          <span className="text-[36px]">Our</span>
          <span className="font-bold text-[36px]"> Process</span>
        </p>
        <img className="my-[60px]" src={progress} alt="" />
      </div>
      {/* 板块 */}
      <div className="py-[120px] flex justify-between px-[100px]">
        <div className="w-[560px] mr-[50px]">
          <h2 style={{fontWeight: 'normal', fontSize: '54px'}}>
            Frequently <span className="font-bold">Asked Questions</span>
          </h2>
        </div>
        <div>
          {question.map((item) => (
            <div
              key={item.id}
              style={{border: item.isOpen ? '1px solid #282828' : ''}}
              className="p-[24px] bg-[#F8F8F8] rounded-[12px] w-[980px] mb-[16px]"
            >
              <div className="flex justify-between">
                <h3 className="text-[24px] font-bold">
                  What is your return policy?
                </h3>
                <img
                  onClick={(e) => setQuestionShow(item.id)}
                  className="w-[30px] h-[30px] cursor-pointer"
                  src={item.isOpen ? decome : income}
                  alt=""
                />
              </div>
              {/* 展开对应的数据 */}
              <p
                className="text-[18px]"
                style={{
                  display: item.isOpen ? 'block' : 'none',
                  margin: '10px 0 0',
                }}
              >
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
