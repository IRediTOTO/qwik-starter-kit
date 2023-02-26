import {
  component$,
  useBrowserVisibleTask$,
  useContext,
  useSignal,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { onAuthStateChanged } from "firebase/auth";
import { UserContext } from "~/contexts/user.context";
import { firebaseApp, firebaseAuth } from "~/firebase/config";

// import { Dialog } from "@headlessui/react";
// import { Dialog } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default component$(() => {
  const signal = useSignal(false);
  const user = useContext(UserContext);
  // console.log("useContext user", user);

  return (
    <>
      <button
        onClick$={() => {
          console.log("onClick user", user.email);
          signal.value = !signal.value;
        }}>
        click
      </button>
      <div class={signal.value ? "tw-text-red-500" : "tw-text-green-500"}>
        test
      </div>
      <div class="sm:first-letter:!tw-text-red-50 tw-relative tw-px-6 lg:tw-px-8">
        <div class="tw-mx-auto tw-max-w-2xl tw-py-32 sm:tw-py-48 lg:tw-py-56">
          <div class="tw-hidden sm:tw-mb-8 sm:tw-flex sm:tw-justify-center">
            <div class="tw-relative tw-rounded-full tw-py-1 tw-px-3 tw-text-sm tw-leading-6 tw-text-gray-600 tw-ring-1 tw-ring-gray-900/10 hover:tw-ring-gray-900/20">
              Announcing our next round of funding.{" "}
              <a href="#" class="tw-font-semibold tw-text-indigo-600">
                <span class="tw-absolute tw-inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div class="tw-text-center">
            <h1 class="tw-text-4xl tw-font-bold tw-tracking-tight tw-text-gray-900 sm:tw-text-6xl">
              Data to enrich your online business
            </h1>
            <p class="tw-mt-6 tw-text-lg tw-leading-8 tw-text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div class="tw-mt-10 tw-flex tw-items-center tw-justify-center tw-gap-x-6">
              <a
                href="#"
                class="tw-rounded-md tw-bg-indigo-600 tw-px-3.5 tw-py-1.5 tw-text-base tw-font-semibold tw-leading-7 tw-text-white tw-shadow-sm hover:tw-bg-indigo-500 focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-2 focus-visible:tw-outline-indigo-600">
                Get started
              </a>
              <a
                href="#"
                class="tw-text-base tw-font-semibold tw-leading-7 tw-text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div class="tw-absolute tw-inset-x-0 tw-top-[calc(100%-13rem)] tw--z-10 tw-transform-gpu tw-overflow-hidden tw-blur-3xl sm:tw-top-[calc(100%-30rem)]">
          <svg
            class="tw-relative tw-left-[calc(50%+3rem)] tw-h-[21.1875rem] tw-max-w-none tw--translate-x-1/2 sm:tw-left-[calc(50%+36rem)] sm:tw-h-[42.375rem]"
            viewBox="0 0 1155 678">
            <path
              fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
              fill-opacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
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
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
