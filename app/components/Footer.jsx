import {NavLink} from 'react-router';

import logo from '../assets/header/logo2.png';

/**
 * @param {FooterProps}
 */
export function Footer({footer: footerPromise, header, publicStoreDomain}) {
  return (
    <div>
      <div className="w-full h-[296px] bg-[#282828] text-[#fff] py-[80px] px-[160px]">
        <div className="flex justify-between">
          <p className="w-[960px]">
            <span className="text-[44px]">
              Get Exclusive Offers and Be the First to
            </span>
            <span className="font-bold text-[44px]">
              Try Our Custom Builder Tool!
            </span>
          </p>
          <div className="bg-[#3D3D3D] rounded-full h-[70px] w-[470px] flex items-center justify-between px-[10px]">
            <input
              type="text"
              placeholder="Enter Your Email"
              style={{border: 'none', padding: '0 0 0 15px'}}
            />
            <button className="bg-[#FFFFFF] w-[138px] h-[50px] rounded-full text-[#000] cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="h-[380px] bg-[#E8E8E8] w-full px-[140px] pt-[100px] pb-[96px] border-box flex justify-between">
        <div className="mr-[226px]">
          <img className="w-[96px] h-[70px] mb-[16px]" src={logo} alt="" />
          <p className="w-[293px]">
            The advantage of hiring a workspace with us is that givees you
            comfortable service and all-around facilities.
          </p>
        </div>
        <div className="flex justify-between">
          <div className="mr-[134px]">
            <span>Quick Links</span>
            <div className="flex mt-[16px]">
              <ul>
                <li className="text-[#666]">Shop</li>
                <li className="text-[#666] mt-[16px]">Customize</li>
                <li className="text-[#666] mt-[16px]">Sustainability</li>
              </ul>
              <ul>
                <li className="text-[#666]">About</li>
                <li className="text-[#666] mt-[16px]">Contact</li>
              </ul>
            </div>
          </div>
          <div className="mr-[120px]">
            <span>Follow Us</span>
            <ul className="mt-[16px]">
              <li className="text-[#666] mt-[16px]">Facebook</li>
              <li className="text-[#666] mt-[16px]">Twitter</li>
              <li className="text-[#666] mt-[16px]">Instagram</li>
            </ul>
          </div>
          <div>
            <span>Newsletter</span>
            <div className="bg-[#DCDCDC] rounded-full h-[70px] w-[470px] flex items-center justify-between px-[10px]">
              <input
                type="text"
                placeholder="Enter Your Email"
                style={{border: 'none', padding: '0 0 0 15px'}}
              />
              <button className="bg-[#282828] w-[138px] h-[50px] rounded-full text-[#fff] cursor-pointer">
                Send Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * @param {{
 *   menu: FooterQuery['menu'];
 *   primaryDomainUrl: FooterProps['header']['shop']['primaryDomain']['url'];
 *   publicStoreDomain: string;
 * }}
 */
function FooterMenu({menu, primaryDomainUrl, publicStoreDomain}) {
  return (
    <nav className="footer-menu" role="navigation">
      {(menu || FALLBACK_FOOTER_MENU).items.map((item) => {
        if (!item.url) return null;
        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;
        const isExternal = !url.startsWith('/');
        return isExternal ? (
          <a href={url} key={item.id} rel="noopener noreferrer" target="_blank">
            {item.title}
          </a>
        ) : (
          <NavLink
            end
            key={item.id}
            prefetch="intent"
            style={activeLinkStyle}
            to={url}
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
}

const FALLBACK_FOOTER_MENU = {
  id: 'gid://shopify/Menu/199655620664',
  items: [
    {
      id: 'gid://shopify/MenuItem/461633060920',
      resourceId: 'gid://shopify/ShopPolicy/23358046264',
      tags: [],
      title: 'Privacy Policy',
      type: 'SHOP_POLICY',
      url: '/policies/privacy-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633093688',
      resourceId: 'gid://shopify/ShopPolicy/23358013496',
      tags: [],
      title: 'Refund Policy',
      type: 'SHOP_POLICY',
      url: '/policies/refund-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633126456',
      resourceId: 'gid://shopify/ShopPolicy/23358111800',
      tags: [],
      title: 'Shipping Policy',
      type: 'SHOP_POLICY',
      url: '/policies/shipping-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633159224',
      resourceId: 'gid://shopify/ShopPolicy/23358079032',
      tags: [],
      title: 'Terms of Service',
      type: 'SHOP_POLICY',
      url: '/policies/terms-of-service',
      items: [],
    },
  ],
};

/**
 * @param {{
 *   isActive: boolean;
 *   isPending: boolean;
 * }}
 */
function activeLinkStyle({isActive, isPending}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'white',
  };
}

/**
 * @typedef {Object} FooterProps
 * @property {Promise<FooterQuery|null>} footer
 * @property {HeaderQuery} header
 * @property {string} publicStoreDomain
 */

/** @typedef {import('storefrontapi.generated').FooterQuery} FooterQuery */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
