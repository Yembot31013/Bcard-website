import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContactUs from "components/ContactUs";
import Footer from "components/Footer";

const LandingPage = () => {
  return (
    <div className="px-[3rem] ">
      <section className="flex justify-between items-center mt-[7rem]">
        <div className="w-[50%]">
          <h1 className="text-5xl leading-[3.625rem] font-bold text-center">
            The card made for DAOs, by BanklessDAO.
          </h1>
          <p className="text-lg leading-[1.375rem] mt-[2rem] text-center">
            Pay in fiat, earn DAO tokens. Support your DAO with every swipe.
          </p>
          <form className="flex gap-4  mt-[2rem] justify-center">
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-400 px-4 py-2 rounded-md w-[18.25rem]"
            />
            <button className="w-[11.707rem] h-[2.719rem] rounded-[0.25rem] bg-gradient-to-r from-purple-600 to-indigo-600 px-[0.438rem]">
              Join our waitlist
            </button>
          </form>
        </div>
        <div>
          <Image
            priority
            src="/images/bcard.svg"
            className=""
            height={343}
            width={384}
            alt="bankless card"
          />
        </div>
      </section>

      <section className="mt-[13rem] flex justify-evenly items-center overflow-hidden  w-full">
        <div className="flex flex-col gap-[4rem]  w-[33.33%]">
          <div className="max-w-[24rem]">
            <div>
              <Image
                priority
                src="/images/earn.svg"
                className=""
                height={100}
                width={100}
                alt="earn"
              />
            </div>
            <h2 className="font-semibold text-[2rem] leading-[2.421rem]">
              {" "}
              Earn DAO tokens, increase token price
            </h2>
            <p className="text-lg leading-[1.375rem]">
              Every card purchase earns you cashback in DAO tokens purchased
              from a DEX, increasing token value.
            </p>
          </div>

          <div className="max-w-[24rem]">
            <div>
              <Image
                priority
                src="/images/onboard.svg"
                className=""
                height={100}
                width={100}
                alt="onboard"
              />
            </div>
            <h2 className="font-semibold text-[2rem] leading-[2.421rem]">
              {" "}
              Easily onboard new DAO members
            </h2>
            <p className="text-lg leading-[1.375rem]">
              With our easy-to-use mobile app, you can onboard new friends into
              your DAO with a simple download.
            </p>
          </div>
        </div>

        <div className=" w-[33.33%] flex justify-center items-center">
          <Image
            priority
            src="/images/phone.svg"
            className=""
            height={379}
            width={187.31}
            alt="bankless card"
          />
        </div>

        <div className="flex flex-col gap-[4rem]  w-[33.33%] items-end ">
          <div className="max-w-[24rem]">
            <div>
              <Image
                priority
                src="/images/support.svg"
                className=""
                height={100}
                width={100}
                alt="support"
              />
            </div>
            <h2 className="font-semibold text-[2rem] leading-[2.421rem]">
              Support your favourite DAOs
            </h2>
            <p className="text-lg leading-[1.375rem]">
              A percentage from every card payment goes to your DAO’s treasury,
              helping to fund their mission.
            </p>
          </div>

          <div className="max-w-[24rem]">
            <div>
              <Image
                priority
                src="/images/community.svg"
                className=""
                height={100}
                width={100}
                alt="community"
              />
            </div>
            <h2 className="font-semibold text-[2rem] leading-[2.421rem]">
              The community-owned card!
            </h2>
            <p className="text-lg leading-[1.375rem]">
              Bankless Card is by DAOs, for DAOs. Unlike centralized crypto
              cards, you have a say in how we build the future.
            </p>
          </div>
        </div>
        <div></div>
      </section>

     <ContactUs />
     <Footer />
    </div>
  );
};

export default LandingPage;