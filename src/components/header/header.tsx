import { component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
// import styles from "./header.css?inline";

export default component$(() => {
  const mobileMenuOpen = useSignal(false);

  // useStylesScoped$(styles);
  const navigation = [
    { name: "Product", href: "#" },
    { name: "Features", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "Company", href: "#" },
  ];
  return (
    <header>
      <div class="tw-absolute tw-inset-x-0 tw-top-[-10rem] tw--z-10 tw-transform-gpu tw-overflow-hidden tw-blur-3xl sm:tw-top-[-20rem] tw-w-full">
        <svg
          class="tw-relative tw-left-[calc(50%-11rem)] tw--z-10 tw-h-[21.1875rem] tw-max-w-none tw--translate-x-1/2 tw-rotate-[30deg] sm:tw-left-[calc(50%-30rem)] sm:tw-h-[42.375rem]"
          viewBox="0 0 1155 678">
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fill-opacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#9089FC" />
              <stop offset="1" stop-color="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div class="tw-px-6 tw-pt-6 lg:tw-px-8">
        <nav
          class="tw-flex tw-items-center tw-justify-between"
          aria-label="Global">
          <div class="tw-flex lg:tw-flex-1">
            <a href="#" class="tw--m-1.5 tw-p-1.5">
              <span class="tw-sr-only">Your Company</span>
              <img
                class="tw-h-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div class="tw-flex lg:tw-hidden">
            <button
              type="button"
              class="tw--m-2.5 tw-inline-flex tw-items-center tw-justify-center tw-rounded-md tw-p-2.5 tw-text-gray-700"
              onClick$={() => (mobileMenuOpen.value = true)}>
              <span class="tw-sr-only">Open main menu</span>
              <symbol
                class="tw-h-6 tw-w-6"
                viewBox="0 0 512 512"
                id="cil-hamburger-menu">
                <path
                  fill="#000000"
                  d="M80 96h352v32H80zm0 144h352v32H80zm0 144h352v32H80z"></path>
              </symbol>
              {/* <Bars3Icon class="tw-h-6 tw-w-6" aria-hidden="true" /> */}
            </button>
          </div>
          <div class="tw-hidden lg:tw-flex lg:tw-gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                class="tw-text-sm tw-font-semibold tw-leading-6 tw-text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div class="tw-hidden lg:tw-flex lg:tw-flex-1 lg:tw-justify-end">
            <a
              href="#"
              class="tw-text-sm tw-font-semibold tw-leading-6 tw-text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
});
