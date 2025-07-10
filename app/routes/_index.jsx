import {useEffect, useState} from 'react';
import {Await, Link} from 'react-router';
import {Suspense} from 'react';
import {Image} from '@shopify/hydrogen';
import {ProductItem} from '~/components/ProductItem';

import whyIcon1 from '../assets/main/why-icon1.png';
import whyIcon2 from '../assets/main/why-icon2.png';
import whyIcon3 from '../assets/main/why-icon3.png';
import whyIcon4 from '../assets/main/why-icon4.png';

import goIcon from '../assets/common/go-icon.png';
import card1 from '../assets/main/card1.jpg';
import progress from '../assets/main/progress.png';
import happen from '../assets/main/happen.png';
import star1 from '../assets/common/star1.png';
import star2 from '../assets/common/star2.png';

import {getProducts} from '../api';

/**
 * @type {MetaFunction}
 */
export const meta = () => {
  return [{title: 'Hydrogen | Home'}];
};

/**
 * @param {LoaderFunctionArgs} args
 */
export async function loader(args) {
  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args);

  // Await the critical data required to render initial state of the page
  const criticalData = await loadCriticalData(args);

  return {...deferredData, ...criticalData};
}

/**
 * Load data necessary for rendering content above the fold. This is the critical data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 * @param {LoaderFunctionArgs}
 */
async function loadCriticalData({context}) {
  const [{collections}] = await Promise.all([
    context.storefront.query(FEATURED_COLLECTION_QUERY),
    // Add other queries here, so that they are loaded in parallel
  ]);

  return {
    featuredCollection: collections.nodes[0],
  };
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 * @param {LoaderFunctionArgs}
 */
function loadDeferredData({context}) {
  const recommendedProducts = context.storefront
    .query(RECOMMENDED_PRODUCTS_QUERY)
    .catch((error) => {
      // Log query errors, but don't throw them so the page can still render
      console.error(error);
      return null;
    });

  return {
    recommendedProducts,
  };
}

export default function Homepage() {
  /** @type {LoaderReturnData} */
  let [products, setProducts] = useState([]);
  let [type, setType] = useState('Living');

  // 去详情页
  const goDetail = (name) => {
    return () => {
      window.location.href = `http://t3qie0-pr.myshopify.com/products/${name}`;
    };
  };

  // 选择分类
  const chooseType = (type) => {
    setType(type);
    getList(type);
  };

  const getList = async (productType) => {
    try {
      if(productType == 'Living') {
        productType = 'Living Room';
      }
      let res = await getProducts({numProducts: 2, productType});
      setProducts(res.data.nodes);
    } catch (error) {
      alert(error);
    }
  };
  // 获取所有商品
  useEffect(() => {
    getList(type);
  }, []);

  return (
    <div className="bg-[#F8F8F8]">
      {/* Why Choose Us */}
      <div className="pt-[120px]">
        <p className="text-center">
          <span className="text-[36px]">Why</span>
          <span className="font-bold text-[36px]"> Choose Us</span>
        </p>
        {/* 板块 */}
        <div className="flex items-center px-[40px] justify-between mt-[80px] pb-[120px]">
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
      </div>
      {/* 快速分类 */}
      <div className="bg-[#fff] py-[80px]">
        <div className="px-[40px] mx-auto">
          <p className="font-normal mx-auto px-[40px]">
            <span className="text-[36px]">Quick </span>
            <span className="font-bold text-[36px]">Categories</span>
          </p>
          <div className="mt-[50px] flex justify-between">
            <div className="w-[700px] h-[750px] mr-[50px] shrink-0 rounded-[18px] bg-[url(../assets/main/quick-icon1.jpg)] bg-cover relative">
              <div className="w-[662px] flex flex-start bg-[#fff] rounded-[16px] border-box p-[16px] absolute bottom-[24px] left-[50%] translate-x-[-50%]">
                <div>
                  <h4 className="text-[24px] font-bold" style={{margin: 0}}>
                    Living
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,
                  </p>
                </div>
                <img
                  className="w-[50px] h-[50px] cursor-pointer"
                  src={goIcon}
                  alt=""
                />
              </div>
            </div>
            {/* 一行两个 四宫格排列 */}
            <div className="grid grid-cols-2 grid-rows-2 w-[100%] gap-[50px]">
              <div className="h-[350px] rounded-[18px] bg-[url(../assets/main/quick-icon1.jpg)] bg-cover relative">
                <div className="w-[346px] flex flex-start bg-[#fff] rounded-[16px] border-box p-[16px] absolute bottom-[24px] left-[50%] translate-x-[-50%]">
                  <div>
                    <h4 className="text-[24px] font-bold" style={{margin: 0}}>
                      Living
                    </h4>
                    <p>Lorem ipsum dolor sit amet, consect adipiscing elit.</p>
                  </div>
                  <img
                    className="w-[50px] h-[50px] cursor-pointer"
                    src={goIcon}
                    alt=""
                  />
                </div>
              </div>
              <div className="h-[350px] rounded-[18px] bg-[url(../assets/main/quick-icon1.jpg)] bg-cover relative">
                <div className="w-[346px] flex flex-start bg-[#fff] rounded-[16px] border-box p-[16px] absolute bottom-[24px] left-[50%] translate-x-[-50%]">
                  <div>
                    <h4 className="text-[24px] font-bold" style={{margin: 0}}>
                      Living
                    </h4>
                    <p>Lorem ipsum dolor sit amet, consect adipiscing elit.</p>
                  </div>
                  <img
                    className="w-[50px] h-[50px] cursor-pointer"
                    src={goIcon}
                    alt=""
                  />
                </div>
              </div>
              <div className="h-[350px] rounded-[18px] bg-[url(../assets/main/quick-icon1.jpg)] bg-cover relative">
                <div className="w-[346px] flex flex-start bg-[#fff] rounded-[16px] border-box p-[16px] absolute bottom-[24px] left-[50%] translate-x-[-50%]">
                  <div>
                    <h4 className="text-[24px] font-bold" style={{margin: 0}}>
                      Living
                    </h4>
                    <p>Lorem ipsum dolor sit amet, consect adipiscing elit.</p>
                  </div>
                  <img
                    className="w-[50px] h-[50px] cursor-pointer"
                    src={goIcon}
                    alt=""
                  />
                </div>
              </div>
              <div className="h-[350px] rounded-[18px] bg-[url(../assets/main/quick-icon1.jpg)] bg-cover relative">
                <div className="w-[346px] flex flex-start bg-[#fff] rounded-[16px] border-box p-[16px] absolute bottom-[24px] left-[50%] translate-x-[-50%]">
                  <div>
                    <h4 className="text-[24px] font-bold" style={{margin: 0}}>
                      Living
                    </h4>
                    <p>Lorem ipsum dolor sit amet, consect adipiscing elit.</p>
                  </div>
                  <img
                    className="w-[50px] h-[50px] cursor-pointer"
                    src={goIcon}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Products*/}
      <div className="py-[120px]">
        <p className="font-normal text-center">
          <span className="text-[36px]">Featured </span>
          <span className="font-bold text-[36px]">Products</span>
        </p>
        {/* tabs */}
        <div className="flex justify-center bg-[#E4E4E4] rounded-full w-[660px] mx-auto p-[6px] gap-[16px] my-[50px]">
          <div
            style={{
              background: type == 'Living' ? '#282828' : '',
              color: type == 'Living' ? '#fff' : '',
            }}
            className="px-[16px] py-[14px] text-[18px] rounded-full cursor-pointer"
            onClick={() => {
              chooseType('Living');
            }}
          >
            Living Room
          </div>
          <div
            style={{
              background: type == 'Bedroom' ? '#282828' : '',
              color: type == 'Bedroom' ? '#fff' : '',
            }}
            className="px-[16px] py-[14px] text-[18px] rounded-full cursor-pointer"
            onClick={() => {
              chooseType('Bedroom');
            }}
          >
            Bedroom
          </div>
          <div
            style={{
              background: type == 'Workspace' ? '#282828' : '',
              color: type == 'Workspace' ? '#fff' : '',
            }}
            className="px-[16px] py-[14px] text-[18px] rounded-full cursor-pointer"
            onClick={() => {
              chooseType('Workspace');
            }}
          >
            Workspace
          </div>
          <div
            style={{
              background: type == 'Outdoor' ? '#282828' : '',
              color: type == 'Outdoor' ? '#fff' : '',
            }}
            className="px-[16px] py-[14px] text-[18px] rounded-full cursor-pointer"
            onClick={() => {
              chooseType('Outdoor');
            }}
          >
            Outdoor
          </div>
          <div
            style={{
              background: type == 'Storage' ? '#282828' : '',
              color: type == 'Storage' ? '#fff' : '',
            }}
            className="px-[16px] py-[14px] text-[18px] rounded-full cursor-pointer"
            onClick={() => {
              chooseType('Storage');
            }}
          >
            Storage
          </div>
        </div>
        {/* 购物车 */}
        <div className="grid grid-cols-3 gap-[50px] px-[40px]">
          {products.map((item) => {
            return (
              <div
                key={item.id}
                className="rounded-[24px] bg-[#fff] overflow-hidden"
              >
                <img src={item.featuredMedia.image.url} alt="" />
                <div className="flex justify-between p-[24px] border-box">
                  <div>
                    <div className="flex items-center">
                      <span className="text-[22px] mr-[16px]">
                        {item.title}
                      </span>
                      <span className="bg-[#282828] px-[10px] py-[5px] text-center text-[12px] rounded-full text-[#fff]">
                        30% Off
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-[32px] font-bold mr-[16px]">
                        ${item.priceRangeV2.maxVariantPrice.amount}
                      </span>
                      <span>${item.priceRangeV2.minVariantPrice.amount}</span>
                    </div>
                  </div>
                  <img
                    className="w-[50px] h-[50px] cursor-pointer"
                    src={goIcon}
                    alt=""
                    onClick={goDetail(item.handle)}
                  />
                </div>
              </div>
            );
          })}
          {/* <div className="rounded-[24px] bg-[#fff] overflow-hidden">
            <img src={card1} alt="" />
            <div className="flex justify-between p-[24px] border-box">
              <div>
                <div className="flex items-center">
                  <span className="text-[22px] mr-[16px]">Sofa</span>
                  <span className="bg-[#282828] px-[10px] py-[5px] text-center text-[12px] rounded-full text-[#fff]">
                    30% Off
                  </span>
                </div>
                <div className="flex items-end">
                  <span className="text-[32px] font-bold mr-[16px]">
                    $49.00
                  </span>
                  <span>$70.00</span>
                </div>
              </div>
              <img
                className="w-[50px] h-[50px] cursor-pointer"
                src={goIcon}
                alt=""
              />
            </div>
          </div>
          <div className="rounded-[24px] bg-[#fff] overflow-hidden">
            <img src={card1} alt="" />
            <div className="flex justify-between p-[24px] border-box">
              <div>
                <div className="flex items-center">
                  <span className="text-[22px] mr-[16px]">Sofa</span>
                  <span className="bg-[#282828] px-[10px] py-[5px] text-center text-[12px] rounded-full text-[#fff]">
                    30% Off
                  </span>
                </div>
                <div className="flex items-end">
                  <span className="text-[32px] font-bold mr-[16px]">
                    $49.00
                  </span>
                  <span>$70.00</span>
                </div>
              </div>
              <img
                className="w-[50px] h-[50px] cursor-pointer"
                src={goIcon}
                alt=""
              />
            </div>
          </div>
          <div className="rounded-[24px] bg-[#fff] overflow-hidden">
            <img src={card1} alt="" />
            <div className="flex justify-between p-[24px] border-box">
              <div>
                <div className="flex items-center">
                  <span className="text-[22px] mr-[16px]">Sofa</span>
                  <span className="bg-[#282828] px-[10px] py-[5px] text-center text-[12px] rounded-full text-[#fff]">
                    30% Off
                  </span>
                </div>
                <div className="flex items-end">
                  <span className="text-[32px] font-bold mr-[16px]">
                    $49.00
                  </span>
                  <span>$70.00</span>
                </div>
              </div>
              <img
                className="w-[50px] h-[50px] cursor-pointer"
                src={goIcon}
                alt=""
              />
            </div>
          </div>
          <div className="rounded-[24px] bg-[#fff] overflow-hidden">
            <img src={card1} alt="" />
            <div className="flex justify-between p-[24px] border-box">
              <div>
                <div className="flex items-center">
                  <span className="text-[22px] mr-[16px]">Sofa</span>
                  <span className="bg-[#282828] px-[10px] py-[5px] text-center text-[12px] rounded-full text-[#fff]">
                    30% Off
                  </span>
                </div>
                <div className="flex items-end">
                  <span className="text-[32px] font-bold mr-[16px]">
                    $49.00
                  </span>
                  <span>$70.00</span>
                </div>
              </div>
              <img
                className="w-[50px] h-[50px] cursor-pointer"
                src={goIcon}
                alt=""
              />
            </div>
          </div>
          <div className="rounded-[24px] bg-[#fff] overflow-hidden">
            <img src={card1} alt="" />
            <div className="flex justify-between p-[24px] border-box">
              <div>
                <div className="flex items-center">
                  <span className="text-[22px] mr-[16px]">Sofa</span>
                  <span className="bg-[#282828] px-[10px] py-[5px] text-center text-[12px] rounded-full text-[#fff]">
                    30% Off
                  </span>
                </div>
                <div className="flex items-end">
                  <span className="text-[32px] font-bold mr-[16px]">
                    $49.00
                  </span>
                  <span>$70.00</span>
                </div>
              </div>
              <img
                className="w-[50px] h-[50px] cursor-pointer"
                src={goIcon}
                alt=""
              />
            </div>
          </div>
          <div className="rounded-[24px] bg-[#fff] overflow-hidden">
            <img src={card1} alt="" />
            <div className="flex justify-between p-[24px] border-box">
              <div>
                <div className="flex items-center">
                  <span className="text-[22px] mr-[16px]">Sofa</span>
                  <span className="bg-[#282828] px-[10px] py-[5px] text-center text-[12px] rounded-full text-[#fff]">
                    30% Off
                  </span>
                </div>
                <div className="flex items-end">
                  <span className="text-[32px] font-bold mr-[16px]">
                    $49.00
                  </span>
                  <span>$70.00</span>
                </div>
              </div>
              <img
                className="w-[50px] h-[50px] cursor-pointer"
                src={goIcon}
                alt=""
              />
            </div>
          </div> */}
        </div>
      </div>
      {/* Customize Your Furniture */}
      <div className="bg-[#fff] pt-[50px] pb-[60px] text-center px-[40px] border-box">
        <p
          className="font-normal text-center w-[680px]"
          style={{margin: '0 auto'}}
        >
          <span className="text-[36px]">Customize Your Furniture in</span>
          <span className="font-bold text-[36px]"> Three Simple Steps</span>
        </p>
        <img className="my-[60px]" src={progress} alt="" />
        {/* 轮播 */}
        <div className="mx-auto text-center">
          <h5 className="text-[32px] font-bold">Choose Your Space</h5>
          <p className="text-[12px]">
            Select the pre-approved layout category that best matches your room.
          </p>
        </div>
        <div className="overflow-auto scrollbar-hidden">
          <div className="flex mt-[30px]">
            <div className="shrink-0 bg-[url(../assets/main/space1.jpg)] relative w-[385px] h-[406px] rounded-[24px] bg-cover mr-[20px]">
              <div className="p-[16px] bg-[#fff] font-bold absolute bottom-[12px] w-[360px] rounded-[16px] left-[50%] translate-x-[-50%] text-left">
                Living Room
              </div>
            </div>
            <div className="shrink-0 bg-[url(../assets/main/space1.jpg)] relative w-[385px] h-[406px] rounded-[24px] bg-cover mr-[20px]">
              <div className="p-[16px] bg-[#fff] font-bold absolute bottom-[12px] w-[360px] rounded-[16px] left-[50%] translate-x-[-50%] text-left">
                Living Room
              </div>
            </div>
            <div className="shrink-0 bg-[url(../assets/main/space1.jpg)] relative w-[385px] h-[406px] rounded-[24px] bg-cover mr-[20px]">
              <div className="p-[16px] bg-[#fff] font-bold absolute bottom-[12px] w-[360px] rounded-[16px] left-[50%] translate-x-[-50%] text-left">
                Living Room
              </div>
            </div>
            <div className="shrink-0 bg-[url(../assets/main/space1.jpg)] relative w-[385px] h-[406px] rounded-[24px] bg-cover mr-[20px]">
              <div className="p-[16px] bg-[#fff] font-bold absolute bottom-[12px] w-[360px] rounded-[16px] left-[50%] translate-x-[-50%] text-left">
                Living Room
              </div>
            </div>
            <div className="shrink-0 bg-[url(../assets/main/space1.jpg)] relative w-[385px] h-[406px] rounded-[24px] bg-cover mr-[20px]">
              <div className="p-[16px] bg-[#fff] font-bold absolute bottom-[12px] w-[360px] rounded-[16px] left-[50%] translate-x-[-50%] text-left">
                Living Room
              </div>
            </div>
            <div className="shrink-0 bg-[url(../assets/main/space1.jpg)] relative w-[385px] h-[406px] rounded-[24px] bg-cover mr-[20px]">
              <div className="p-[16px] bg-[#fff] font-bold absolute bottom-[12px] w-[360px] rounded-[16px] left-[50%] translate-x-[-50%] text-left">
                Living Room
              </div>
            </div>
            <div className="shrink-0 bg-[url(../assets/main/space1.jpg)] relative w-[385px] h-[406px] rounded-[24px] bg-cover mr-[20px]">
              <div className="p-[16px] bg-[#fff] font-bold absolute bottom-[12px] w-[360px] rounded-[16px] left-[50%] translate-x-[-50%] text-left">
                Living Room
              </div>
            </div>
          </div>
        </div>
        {/* next按钮 */}
        <button className="w-[180px] h-[50px] mt-[30px] rounded-full text-[#fff] text-[18px] bg-[#282828] cursor-pointer">
          Next
        </button>
      </div>
      {/* How We */}
      <div className="h-[770px] pt-[120px] pb-[50px] bg-[#F8F8F8] flex pl-[40px]">
        <div className="mr-[200px]">
          <h2
            className="text-[34px]"
            style={{fontWeight: 'normal', fontSize: '34px'}}
          >
            How We <br />
            <span className="font-bold text-[34px]">Make It Happen</span>
          </h2>
          <p>
            All our furniture is designed to be modular — reducing manufacturing
            complexity, material waste, and turnaround time. At present,
            customers can either purchase ready-made collections or submit their
            own drawings, material samples, and mood boards for customized
            pieces (with a design service fee). In the near future, our online
            platform will enable users to build and configure modular furniture
            directly on the website and place orders instantly.
          </p>
          {/* next按钮 */}
          <button className="w-[180px] h-[50px] mt-[30px] rounded-full text-[#fff] text-[18px] bg-[#282828] cursor-pointer">
            Learn More
          </button>
        </div>
        <img src={happen} alt="" />
      </div>
      {/* Client Testimonials */}
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
                    “Terimakasih banyak, kini ruanganku menjadi lebih mewah dan
                    terlihat mahal“
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
  );
}

/**
 * @param {{
 *   collection: FeaturedCollectionFragment;
 * }}
 */
function FeaturedCollection({collection}) {
  if (!collection) return null;
  const image = collection?.image;
  return (
    <Link
      className="featured-collection"
      to={`/collections/${collection.handle}`}
    >
      {image && (
        <div className="featured-collection-image">
          <Image data={image} sizes="100vw" />
        </div>
      )}
      <h1>{collection.title}</h1>
    </Link>
  );
}

/**
 * @param {{
 *   products: Promise<RecommendedProductsQuery | null>;
 * }}
 */
function RecommendedProducts({products}) {
  return (
    <div className="recommended-products">
      <h2>Recommended Products</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {(response) => (
            <div className="recommended-products-grid">
              {response
                ? response.products.nodes.map((product) => (
                    <ProductItem key={product.id} product={product} />
                  ))
                : null}
            </div>
          )}
        </Await>
      </Suspense>
      <br />
    </div>
  );
}

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
`;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    featuredImage {
      id
      url
      altText
      width
      height
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`;

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('react-router').MetaFunction<T>} MetaFunction */
/** @typedef {import('storefrontapi.generated').FeaturedCollectionFragment} FeaturedCollectionFragment */
/** @typedef {import('storefrontapi.generated').RecommendedProductsQuery} RecommendedProductsQuery */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
