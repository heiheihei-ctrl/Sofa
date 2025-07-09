import {Suspense} from 'react';
import {Await, NavLink, useAsyncValue} from 'react-router';
import {useAnalytics, useOptimisticCart} from '@shopify/hydrogen';
import {useAside} from '~/components/Aside';

//图片
import logo from '../assets/header/logo.png';
import search from '../assets/header/iconamoon_search.png';
import cacrt from '../assets/header/proicons_cart.png';

import HeaderCss from '../header.css?url';

/**
 * @param {HeaderProps}
 */
export function Header({header, isLoggedIn, cart, publicStoreDomain}) {
  const {shop, menu} = header;
  return (
    <div>
      <link rel="stylesheet" href={HeaderCss}></link>
      <header className="mt-[30px] relative" style={{padding: '0 30px'}}>
        {/* 列表 */}
        <ul className="flex w-[582px] justify-between absolute left-[50%] translate-x-[-50%] top-[20px] z-[2]">
          <li className="cursor-pointer">
            <a href={'/'}>Home</a>
          </li>
          <li className="cursor-pointer relative menu">
            <div className="flex">
              <a href={'/about'}>About</a>
              <img
                className="w-[22px] h-[22px]"
                src="../../app/assets/common/down.png"
                alt=""
              />
            </div>
            <ul className="bg-[#fff] rounded-[10px] absolute w-[160px] menu-hover opacity-0">
              <li className="cursor-pointer py-[10px] px-[10px]">
                <a href={'/story'}>Brand Story</a>
              </li>
              <li className="cursor-pointer py-[10px] px-[10px]">
                <a href={'/about'}>Behind Creation</a>
              </li>
            </ul>
          </li>
          <li className="cursor-pointer">
            <a href={'/shop'}>Shop</a>
          </li>
          <li className="cursor-pointer">
            <a href={'/customize'}>Customize</a>
          </li>
          <li className="cursor-pointer">
            <a href={'/services'}>Services & FAQ</a>
          </li>
          <li className="cursor-pointer">
            <a href={'/contact'}>Contact</a>
          </li>
        </ul>
        <div className="bg-red w-[100%] h-[950px] relative bg-[url('../assets/header/banner.png')] bg-contain bg-no-repeat pt-[24px]">
          {/* logo */}
          <img className="w-[188px] ml-[130px]" src={logo} alt="" />
          {/* 导航 */}
          {/* 按钮 */}
          <div className="flex items-center absolute top-[34px] right-[130px]">
            <img
              className="w-[30px] h-[30px] cursor-pointer"
              src={search}
              alt=""
            />
            <button className="bg-[#fff] rounded-full w-[50px] h-[50px] mx-[16px] cursor-pointer">
              <img className="w-[24px] h-[24px] mx-auto" src={cacrt} alt="" />
            </button>
            <button className="bg-[#fff] rounded-full px-[10px] py-[5px] text-[18px] w-[168px] h-[50px] cursor-pointer">
              Signup/Login
            </button>
          </div>
        </div>
        {/* 居中 */}
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[#fff]">
          <div className="h-[178px] w-[808px] mx-auto">
            <div className="bg-[#4D4D4D] w-[98px] h-[28px] rounded-full text-center leading-[28px]">
              30% Off
            </div>
            <div className="flex">
              <div className="flex flex-col mr-[30px]">
                <span className="text-[50px] font-bold">Modular Sofa</span>
                <span className="text-[18px]">
                  Lorem ipsum dolor sit amet, consectetur
                </span>
              </div>
              <div>
                <button className="w-[130px] h-[44px] bg-[#fff] rounded-full text-[#000] mr-[6px]">
                  Shop Now
                </button>
                <button className="w-[238px] h-[44px] border-1 rounded-full text-[#fff]">
                  Submit Custom Request
                </button>
              </div>
            </div>
          </div>
          <p className="text-[38px]">
            Create Your Life.<span className="font-bold">Everyday.</span>
          </p>
        </div>
      </header>
    </div>
  );
}

/**
 * @param {{
 *   menu: HeaderProps['header']['menu'];
 *   primaryDomainUrl: HeaderProps['header']['shop']['primaryDomain']['url'];
 *   viewport: Viewport;
 *   publicStoreDomain: HeaderProps['publicStoreDomain'];
 * }}
 */
export function HeaderMenu({
  menu,
  primaryDomainUrl,
  viewport,
  publicStoreDomain,
}) {
  const className = `header-menu-${viewport}`;
  const {close} = useAside();

  return (
    <nav className={className} role="navigation">
      {viewport === 'mobile' && (
        <NavLink
          end
          onClick={close}
          prefetch="intent"
          style={activeLinkStyle}
          to="/"
        >
          Home
        </NavLink>
      )}
      {(menu || FALLBACK_HEADER_MENU).items.map((item) => {
        if (!item.url) return null;

        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;
        return (
          <NavLink
            className="header-menu-item"
            end
            key={item.id}
            onClick={close}
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

/**
 * @param {Pick<HeaderProps, 'isLoggedIn' | 'cart'>}
 */
function HeaderCtas({isLoggedIn, cart}) {
  return (
    <nav className="header-ctas" role="navigation">
      <HeaderMenuMobileToggle />
      <NavLink prefetch="intent" to="/account" style={activeLinkStyle}>
        <Suspense fallback="Sign in">
          <Await resolve={isLoggedIn} errorElement="Sign in">
            {(isLoggedIn) => (isLoggedIn ? 'Account' : 'Sign in')}
          </Await>
        </Suspense>
      </NavLink>
      <SearchToggle />
      <CartToggle cart={cart} />
    </nav>
  );
}

function HeaderMenuMobileToggle() {
  const {open} = useAside();
  return (
    <button
      className="header-menu-mobile-toggle reset"
      onClick={() => open('mobile')}
    >
      <h3>☰</h3>
    </button>
  );
}

function SearchToggle() {
  const {open} = useAside();
  return (
    <button className="reset" onClick={() => open('search')}>
      Search
    </button>
  );
}

/**
 * @param {{count: number | null}}
 */
function CartBadge({count}) {
  const {open} = useAside();
  const {publish, shop, cart, prevCart} = useAnalytics();

  return (
    <a
      href="/cart"
      onClick={(e) => {
        e.preventDefault();
        open('cart');
        publish('cart_viewed', {
          cart,
          prevCart,
          shop,
          url: window.location.href || '',
        });
      }}
    >
      Cart {count === null ? <span>&nbsp;</span> : count}
    </a>
  );
}

/**
 * @param {Pick<HeaderProps, 'cart'>}
 */
function CartToggle({cart}) {
  return (
    <Suspense fallback={<CartBadge count={null} />}>
      <Await resolve={cart}>
        <CartBanner />
      </Await>
    </Suspense>
  );
}

function CartBanner() {
  const originalCart = useAsyncValue();
  const cart = useOptimisticCart(originalCart);
  return <CartBadge count={cart?.totalQuantity ?? 0} />;
}

const FALLBACK_HEADER_MENU = {
  id: 'gid://shopify/Menu/199655587896',
  items: [
    {
      id: 'gid://shopify/MenuItem/461609500728',
      resourceId: null,
      tags: [],
      title: 'Collections',
      type: 'HTTP',
      url: '/collections',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609533496',
      resourceId: null,
      tags: [],
      title: 'Blog',
      type: 'HTTP',
      url: '/blogs/journal',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609566264',
      resourceId: null,
      tags: [],
      title: 'Policies',
      type: 'HTTP',
      url: '/policies',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609599032',
      resourceId: 'gid://shopify/Page/92591030328',
      tags: [],
      title: 'About',
      type: 'PAGE',
      url: '/pages/about',
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
    color: isPending ? 'grey' : 'black',
  };
}

/** @typedef {'desktop' | 'mobile'} Viewport */
/**
 * @typedef {Object} HeaderProps
 * @property {HeaderQuery} header
 * @property {Promise<CartApiQueryFragment|null>} cart
 * @property {Promise<boolean>} isLoggedIn
 * @property {string} publicStoreDomain
 */

/** @typedef {import('@shopify/hydrogen').CartViewPayload} CartViewPayload */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
/** @typedef {import('storefrontapi.generated').CartApiQueryFragment} CartApiQueryFragment */
