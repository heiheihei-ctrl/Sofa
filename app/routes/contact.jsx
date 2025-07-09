import whyIcon1 from '../assets/main/why-icon1.png';
import whyIcon2 from '../assets/main/why-icon2.png';
import whyIcon3 from '../assets/main/why-icon3.png';
import whyIcon4 from '../assets/main/why-icon4.png';
import contactIcon1 from '../assets/common/contact-icon1.png';
import contactIcon2 from '../assets/common/contact-icon2.png';
import contactIcon3 from '../assets/common/contact-icon3.png';

export default function Contactpage() {
  return (
    <div className="bg-[#F8F8F8] pb-[120px]">
      <div className="pt-[120px]">
        <div className="flex justify-between px-[40px]">
          <p className="w-[604px]">
            <span className="text-[36px]">Let's Build </span>
            <span className="font-bold text-[36px]">Something Together</span>
          </p>
          <div>
            <p>Feel free to reach out through any of the ways below.</p>
            <p>We’ll get back to you within 1–2 business days.</p>
          </div>
        </div>
        {/* 板块 */}
        <div className="flex items-center justify-between mt-[80px] pb-[120px] px-[40px]">
          <div
            className="w-[360px] h-[230px] bg-[#fff] rounded-[16px] p-[24px] box-border"
            style={{boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.12)'}}
          >
            <img className="w-[80px] h-[80px]" src={whyIcon1} alt="" />
            <h3>Easy Assembly</h3>
            <p>Set up in minutes with simple instructions and minimal tools.</p>
          </div>
          <div
            className="w-[360px] h-[230px] bg-[#fff] rounded-[16px] p-[24px] box-border relative top-[40px]"
            style={{boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.12)'}}
          >
            <img className="w-[80px] h-[80px]" src={whyIcon2} alt="" />
            <h3>Easy Assembly</h3>
            <p>Set up in minutes with simple instructions and minimal tools.</p>
          </div>
          <div
            className="w-[360px] h-[230px] bg-[#fff] rounded-[16px] p-[24px] box-border"
            style={{boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.12)'}}
          >
            <img className="w-[80px] h-[80px]" src={whyIcon3} alt="" />
            <h3>Easy Assembly</h3>
            <p>Set up in minutes with simple instructions and minimal tools.</p>
          </div>
          <div
            className="w-[360px] h-[230px] bg-[#fff] rounded-[16px] p-[24px] box-border relative top-[40px]"
            style={{boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.12)'}}
          >
            <img className="w-[80px] h-[80px]" src={whyIcon4} alt="" />
            <h3>Easy Assembly</h3>
            <p>Set up in minutes with simple instructions and minimal tools.</p>
          </div>
        </div>
        {/* 表单 */}
        <div className="flex justify-between bg-[#fff] py-[120px] px-[40px]">
          <div>
            <div className="bg-[url(../assets/main/contact-bg.jpg)] w-[790px] h-[900px] bg-cover rounded-[24px] relative">
              <div className="bg-[#fff] p-[16px] absolute rounded-[24px] bottom-[24px] left-[50%] translate-x-[-50%] w-[90%]">
                <p style={{fontSize: '22px'}}>
                  Follow us for the latest updates, design inspiration, and
                  modular living tips:
                </p>
                <div className="flex mt-[16px]">
                  <img
                    className="w-[55px] h-[55px] mr-[16px] cursor-pointer"
                    src={contactIcon1}
                    alt=""
                  />
                  <img
                    className="w-[55px] h-[55px] mr-[16px] cursor-pointer"
                    src={contactIcon2}
                    alt=""
                  />
                  <img
                    className="w-[55px] h-[55px] cursor-pointer"
                    src={contactIcon3}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-[760px] bg-[#fff] rounded-[24px] p-[40px]"
            style={{boxShadow: '0px 0px 20px 0px #0000001F'}}
          >
            <div className="flex flex-col">
              <span>Name</span>
              <input
                style={{border: '1px solid rgba(0,0,0,.3)'}}
                type="text"
                placeholder="Enter you name"
              />
            </div>
            <div className="flex flex-col mt-[30px]">
              <span>Email</span>
              <input
                style={{border: '1px solid rgba(0,0,0,.3)'}}
                type="text"
                placeholder="Enter you email"
              />
            </div>
            <div className="flex flex-col mt-[30px]">
              <span>Phone Number</span>
              <input
                style={{border: '1px solid rgba(0,0,0,.3)'}}
                type="text"
                placeholder="Enter you phone number"
              />
            </div>
            <div className="flex flex-col mt-[30px]">
              <span>Subject</span>
              <select
                name=""
                id=""
                style={{
                  border: '1px solid rgba(0,0,0,.3)',
                  margin: '4px 0 0',
                  height: '42px',
                  borderRadius: '4px',
                }}
                placeholder="Enter subject"
              >
                <option value="">Subject1</option>
                <option value="">Subject2</option>
                <option value="">Subject3</option>
                <option value="">Subject4</option>
              </select>
            </div>
            <div className="flex flex-col mt-[30px]">
              <span>Message</span>
              <textarea
                placeholder="Enter message here"
                style={{
                  border: '1px solid rgba(0,0,0,.3)',
                  margin: '4px 0 0',
                  height: '190px',
                  borderRadius: '4px',
                  padding: '20px',
                }}
              ></textarea>
            </div>
            <button className='w-[100%] h-[50px] bg-[#282828] rounded-full text-[#fff] mt-[40px] cursor-pointer'>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}
