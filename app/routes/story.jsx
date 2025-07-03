import story from '../assets/main/story.jpg';
import whyIcon1 from '../assets/main/why-icon1.png';
import whyIcon2 from '../assets/main/why-icon2.png';
import whyIcon3 from '../assets/main/why-icon3.png';
import whyIcon4 from '../assets/main/why-icon4.png';

export default function Storypage() {
  return (
    <div className="bg-[#F8F8F8]">
      <div className="flex justify-between py-[120px] px-[40px]">
        <div className="w-[695px] mr-[50px]">
          <h2 style={{fontWeight: 'normal', fontSize: '54px'}}>
            Brand <span className="font-bold">Story</span>
          </h2>
          <p>
            At Carve Creation, we believe furniture should move with you —
            giving you the freedom to create your life, every day.
          </p>
          <p>
            At Carve Creation, we believe furniture should move with you —
            giving you the freedom to create your life, every day.
          </p>
          <p>
            At Carve Creation, we believe furniture should move with you —
            giving you the freedom to create your life, every day.
          </p>
          <p>
            At Carve Creation, we believe furniture should move with you —
            giving you the freedom to create your life, every day.
          </p>
          <p>
            At Carve Creation, we believe furniture should move with you —
            giving you the freedom to create your life, every day.
          </p>
        </div>
        <img
          style={{borderRadius: '20px'}}
          className="w-[855px]"
          src={story}
          alt=""
        />
      </div>
      {/* 板块二 */}
      <div className="w-[1000px] mx-auto mb-[40px] px-[40px]">
        <p className="text-center">
          From compact city apartments to growing family homes, Carve Creation
          delivers modular furniture that evolves with every stage of your life.
          Quick to assemble, easy to expand, and timeless by design, our
          collections let you customize your environment with ease and
          confidence.
        </p>
      </div>
      {/* 板块三 */}
      <div className="flex justify-between px-[40px] pb-[120px]">
        <img
          className="w-[785px] h-[820px]"
          style={{borderRadius: '20px'}}
          src={story}
          alt=""
        />
        <div className="grid grid-rows-2 gap-[30px] h-[820px]">
          <img
            className="w-[785px] h-[395px]"
            style={{borderRadius: '20px'}}
            src={story}
            alt=""
          />
          <img
            className="w-[785px] h-[395px]"
            style={{borderRadius: '20px'}}
            src={story}
            alt=""
          />
        </div>
      </div>
      {/* 板块四 */}
      <div className="pt-[120px] bg-[#fff]">
        <div className="w-[900px] mx-auto text-center">
          <p className="text-center">
            <span className="text-[36px]">At Carve Creation</span>
            <span className="font-bold text-[36px]"> We stand for</span>
          </p>
          <p className='mt-[10px]'>
            We are proud to support a future where smart living, sustainable
            choices, and beautiful design come together seamlessly.
          </p>
        </div>
        {/* 板块 */}
        <div className="flex items-center px-[40px] justify-between mt-[80px] pb-[120px]">
          <div
            className="w-[360px] h-[230px] bg-[#fff] rounded-[16px] p-[24px] box-border"
            style={{boxShadow: '0px 0px 2rgba0px 0px (0, 0, 0, 0.12)'}}
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
      </div>
    </div>
  );
}
