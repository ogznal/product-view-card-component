import { type NextPage } from "next";
import Head from "next/head";
import { Montserrat, Fraunces } from "@next/font/google";

const monsterrat = Montserrat({
  weight: "500",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Product View Card Component</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-center bg-[#f2ebe3] ${monsterrat.className}`}
      >
        <div className="flex w-11/12 flex-col rounded-xl bg-white md:w-2/5 md:flex-row">
          <div className="basis-2/5 md:basis-1/2">
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet="/image-product-mobile.jpg"
              />
              <source
                media="(min-width: 769px)"
                srcSet="/image-product-desktop.jpg"
              />
              <img
                className="rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                src="/image-product-desktop.jpg"
                alt="product image"
              />
            </picture>
          </div>
          <div className="flex basis-3/5 flex-col justify-between p-8 md:basis-1/2">
            <p className="text-xs uppercase tracking-[.5em] text-[#6c7289]">
              perfume
            </p>
            <h1
              className={`md:text-4-xl text-3xl font-bold ${fraunces.className} my-3 md:my-0`}
            >
              Gabrielle Essence Eau De Parfum
            </h1>
            <p className="mb-4 text-sm font-light text-[#6c7289] md:mb-0">
              A floral, solar and voluptous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <p
              className={`flex items-center text-3xl text-[#3d8168] ${fraunces.className} mb-4 font-bold md:mb-0`}
            >
              $149.99
              <span className="ml-5 text-sm font-normal text-[#6c7289] line-through">
                $169.99
              </span>
            </p>
            <button className="inline-flex w-full place-content-center rounded-lg bg-[#3d8168] py-2.5 text-center font-medium text-white">
              {/* <img src="/icon-cart.svg" alt="cart icon" /> */}
              <svg
                width="15"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 mt-1 h-5 w-5"
              >
                <path
                  d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
                  fill="#FFF"
                />
              </svg>{" "}
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
