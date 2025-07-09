import {useState} from 'react';

import aboutImage from '../assets/main/about.jpg';
import decome from '../assets/common/decome.png';
import income from '../assets/common/income.png';
import star1 from '../assets/common/star1.png';
import star2 from '../assets/common/star2.png';
import {useEffect} from 'react';

export default function Aboutpage() {
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

  // 请求
  const getInfo = async () => {
    const res = await fetch('/api/shopify');
    const data = await res.json();
    console.log(data);
  };

  // 初始化
  useEffect(() => {
    getInfo();
  }, []);

  // 设置展开
  const setQuestionShow = (id) => {
    setQuestion(
      question.map((item) =>
        item.id === id ? {...item, isOpen: !item.isOpen} : item,
      ),
    );
  };

  return (
    <div className="bg-[#F8F8F8]">
      <div className="px-[160px]">
        <div className="flex items-center">
          <div className="mr-[80px]">
            <h2>
              About <span>Us</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab.
            </p>
          </div>
          <div className="w-[855px] rounded-[20px] overflow-hidden shrink-0">
            <img src={aboutImage} alt="" />
          </div>
        </div>
        <div className="flex justify-between mt-[70px] pb-[120px]">
          <div className="w-[322px] h-[170px] border-box border-box rounded-[24px] py-[10px] px-[60px] bg-[#fff] text-[#000] grid place-content-center">
            <div className="flex flex-col items-center">
              <span className="text-[60px] font-bold">10+</span>
              <span className="text-[18px]">Years of Experience</span>
            </div>
          </div>
          <div className="w-[322px] h-[170px] border-box border-box rounded-[24px] py-[10px] px-[60px] bg-[#282828] text-[#fff] grid place-content-center relative mt-[50px]">
            <div className="flex flex-col items-center">
              <span className="text-[60px] font-bold">522+</span>
              <span className="text-[18px]">Completed Projects</span>
            </div>
          </div>
          <div className="w-[322px] h-[170px] border-box border-box rounded-[24px] py-[10px] px-[60px] bg-[#fff] text-[#000] grid place-content-center">
            <div className="flex flex-col items-center">
              <span className="text-[60px] font-bold">97%</span>
              <span className="text-[18px]">Happy Clients</span>
            </div>
          </div>
          <div className="w-[322px] h-[170px] border-box border-box rounded-[24px] py-[10px] px-[60px] bg-[#282828] text-[#fff] grid place-content-center relative mt-[50px]">
            <div className="flex flex-col items-center">
              <span className="text-[60px] font-bold">45+</span>
              <span className="text-[18px]">Awards & Recognitions</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fff] py-[120px]">
        <div className="text-center w-[900px] mx-auto">
          <h3 className="text-[54px]">
            Our <span className="font-bold">Team</span>
          </h3>
          <p className="text-[#282828]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-[30px] px-[100px] mt-[50px]">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="w-[100%] h-[440px] bg-[url(../assets/common/team.jpg)] bg-center bg-cover rounded-[24px] bg-no-repeat flex items-end pb-[14px]"
            >
              <div className="w-[90%] bg-[#fff] rounded-[16px] mx-auto p-[16px]">
                <h4
                  className="text-[22px] font-bold"
                  style={{margin: '0 0 8px'}}
                >
                  Jane Cooper
                </h4>
                <p className="text-[18px]">Founder & CEO</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-[120px] flex justify-between px-[100px]">
        <div className="w-[560px] mr-[50px]">
          <h2 style={{fontWeight: 'normal', fontSize: '54px'}}>
            Frequently <span className="font-bold">Asked Questions</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div>
          {question.map((item) => (
            <div
              key={item.id}
              className="p-[24px] bg-[#fff] rounded-[12px] w-[980px] mb-[16px]"
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
      <div className="bg-[#fff] py-[120px]">
        <div className="text-center w-[900px] mx-auto">
          <h3 className="text-[54px]">
            Client <span className="font-bold">Testimonials</span>
          </h3>
        </div>
        <div className="px-[40px] pb-[68px] bg-[#fff] pt-[172px]">
          <p className="font-normal text-center">
            <span className="text-[36px]">Client </span>
            <span className="font-bold text-[36px]">Testimonials</span>
          </p>
          <div className="flex justify-between mt-[50px]">
            {[1, 2, 3, 4].map((item) => {
              return (
                <div
                  key={item}
                  className="w-[370px] h-[506px] rounded-[18px] bg-[url(../assets/main/client.jpg)] bg-cover relative"
                >
                  <div className="bg-[#fff] w-[334px] rounded-[16px] absolute bottom-[30px] left-[50%] translate-x-[-50%] text-center py-[30px]">
                    <div className="mb-[12px]">
                      <h4 style={{fontSize: '18px', fontWeight: 'bold'}}>
                        Bang Upin
                      </h4>
                      <p style={{fontSize: '12px', color: '#7E7E7E'}}>
                        Pedagang Asongan
                      </p>
                    </div>
                    <p style={{fontSize: '14px', color: '#696969'}}>
                      “Terimakasih banyak, kini ruanganku menjadi lebih mewah
                      dan terlihat mahal“
                    </p>
                    <div className="flex justify-center mt-[20px]">
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
