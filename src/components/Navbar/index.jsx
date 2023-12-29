import React from "react";

import { Button, Img, Text } from "components";

const Navbar = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-row gap-2 items-center justify-between w-[14%] md:w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-12 items-center justify-start w-12"
            style={{ backgroundImage: "url('images/img_group.png')" }}
          >
            <div className="md:h-11 h-[22px] my-[11px] relative w-[92%]">
              <Img
                className="h-[22px] m-auto object-cover w-full"
                src="images/img_rectangle.png"
                alt="rectangle"
              />
              <Img
                className="absolute h-[18px] inset-x-[0] mx-auto top-[0]"
                src="images/img_television.svg"
                alt="television"
              />
            </div>
          </div>
          <Img
            className="h-[30px]"
            src="images/img_group_white_a700.svg"
            alt="group"
          />
        </div>
        <ul className="flex md:flex-col flex-row gap-10 md:hidden items-start justify-start sm:ml-[0] ml-[94px] sm:mt-0 my-2.5 w-auto md:w-full common-row-list">
          <li>
            <a href="javascript:">
              <div className="flex flex-row gap-1.5 items-start justify-between">
                <Text
                  className="text-white-A700 text-xl"
                  size="txtInterSemiBold20WhiteA700"
                >
                  Writing Centre
                </Text>
                <Img
                  className="h-5 w-5"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:" className="text-white-A700 text-xl">
              <Text size="txtInterSemiBold20WhiteA700">About Us</Text>
            </a>
          </li>
          <li>
            <a href="javascript:" className="text-white-A700 text-xl">
              <Text size="txtInterSemiBold20WhiteA700">Our Services</Text>
            </a>
          </li>
          <li>
            <a href="javascript:" className="text-white-A700 text-xl">
              <Text size="txtInterSemiBold20WhiteA700">How It Works</Text>
            </a>
          </li>
          <li>
            <a href="javascript:" className="text-white-A700 text-xl">
              <Text size="txtInterSemiBold20WhiteA700">FAQ</Text>
            </a>
          </li>
          <li>
            <a href="javascript:" className="text-white-A700 text-xl">
              <Text size="txtInterSemiBold20WhiteA700">Plagiarism Checker</Text>
            </a>
          </li>
        </ul>
        <a
          href="javascript:"
          className="sm:ml-[0] ml-[60px] sm:mt-0 my-[11px] text-white-A700 text-xl"
        >
          <Text size="txtInterSemiBold20WhiteA700">Login</Text>
        </a>
        <Button
          className="cursor-pointer font-inter font-semibold leading-[normal] min-w-[141px] ml-10 sm:ml-[0] text-center text-xl"
          shape="round"
          color="teal_900"
          size="xs"
          variant="fill"
        >
          New order
        </Button>
      </header>
    </>
  );
};

Navbar.defaultProps = {};

export default Navbar;
