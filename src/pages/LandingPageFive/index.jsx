import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Navbar from "components/Navbar";

const LandingPageFivePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-end justify-end mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="h-[1084px] md:h-[1229px] sm:h-[1321px] md:px-5 relative w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-start m-auto p-4 w-full"
              style={{ backgroundImage: "url('images/img_group7.png')" }}
            >
              <div className="flex flex-col items-start justify-start mb-[129px] w-[91%] md:w-full">
                <Navbar className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center w-full" />
                <Text
                  className="mt-[213px] md:text-5xl text-[70px] text-white-A700"
                  size="txtInterSemiBold70"
                >
                  <>
                    Let writing bucket <br />
                    assist you write <br />
                    your paper
                  </>
                </Text>
                <Text
                  className="mt-[81px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtInterMedium24"
                >
                  From the beginning to end
                </Text>
                <div className="bg-white-A700 flex sm:flex-col flex-row sm:gap-10 gap-[438px] h-[84px] md:h-auto items-center justify-start max-w-[752px] mt-[47px] pl-10 sm:pl-5 pr-3 py-[9px] rounded-[10px] w-full">
                  <Text
                    className="text-black-900_33 text-xl w-auto"
                    size="txtInterSemiBold20"
                  >
                    Tell us the topic you’re stuck with
                  </Text>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[193px] text-center text-xl"
                    shape="round"
                    color="light_blue_600"
                    size="md"
                    variant="fill"
                  >
                    Get Started
                  </Button>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[100px] w-1/2 md:w-full">
                  <div className="flex flex-col gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-10 w-10"
                      src="images/img_vector.svg"
                      alt="vector"
                    />
                    <Text
                      className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-auto"
                      size="txtInterMedium24"
                    >
                      Easy Process
                    </Text>
                  </div>
                  <div className="flex flex-col gap-5 items-center justify-start ml-32 md:ml-[0] md:mt-0 mt-1.5 w-auto">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                    <Text
                      className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-auto"
                      size="txtInterMedium24"
                    >
                      24/7 on Demand
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[189px] md:mt-0 mt-[3px] w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-auto"
                      size="txtInterMedium24"
                    >
                      on Time
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[1084px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_maskgroup.png"
              alt="maskgroup"
            />
          </div>
          <Text
            className="mt-[150px] md:text-5xl text-[64px] text-center text-teal-900"
            size="txtInterBold64"
          >
            <>
              How our paper writing <br />
              service works
            </>
          </Text>
          <div className="md:h-[481px] h-[559px] mt-[92px] md:px-5 relative w-full">
            <div className="absolute md:h-[389px] h-[552px] inset-[0] justify-center m-auto w-full">
              <div className="absolute bg-white-A700 bottom-[0] flex flex-col items-center justify-start left-[6%] p-[19px] rounded-[10px] shadow-bs w-[22%]">
                <div className="flex flex-col gap-6 items-start justify-start mb-[67px] w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-teal-900 sm:text-xl"
                    size="txtInterExtraBold24"
                  >
                    01
                  </Text>
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-teal-900 w-auto"
                    size="txtInterSemiBold32"
                  >
                    Place an order
                  </Text>
                  <Text
                    className="max-w-[310px] md:max-w-full text-black-900 text-xl"
                    size="txtInterRegular20"
                  >
                    In the first step, the client provides the details and
                    instructions how they would expect their paper to be
                    written.
                  </Text>
                </div>
              </div>
              <Img
                className="absolute h-[212px] inset-x-[0] mx-auto object-cover top-[0] md:w-full"
                src="images/img_group313.png"
                alt="group313"
              />
            </div>
            <div className="absolute bg-white-A700 bottom-[11%] flex flex-col items-center justify-start left-[28%] p-[19px] rounded-[10px] shadow-bs w-[22%]">
              <div className="flex flex-col gap-6 items-start justify-start mb-[67px] w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-teal-900 sm:text-xl w-auto"
                  size="txtInterExtraBold24"
                >
                  02
                </Text>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-teal-900 w-auto"
                  size="txtInterSemiBold32"
                >
                  We contact you
                </Text>
                <Text
                  className="max-w-[310px] md:max-w-full text-black-900 text-xl"
                  size="txtInterRegular20"
                >
                  Our dedicated support team contacts the client on
                  clarifications and writer selection for the client.{" "}
                </Text>
              </div>
            </div>
            <div className="absolute bg-white-A700 bottom-[0] flex-col hidden items-start justify-start p-[19px] right-[28%] rounded-[10px] shadow-bs">
              <Text
                className="md:ml-[0] ml-[7px] text-2xl md:text-[22px] text-teal-900 sm:text-xl"
                size="txtInterExtraBold24"
              >
                03
              </Text>
              <Text
                className="md:ml-[0] ml-[7px] mt-[26px] md:text-3xl sm:text-[28px] text-[32px] text-teal-900"
                size="txtInterSemiBold32"
              >
                Make payment
              </Text>
              <Text
                className="mb-[67px] md:ml-[0] ml-[7px] mt-5 text-black-900 text-xl"
                size="txtInterRegular20"
              >
                <>
                  Once the client has been informed on the availability <br />
                  of a writer, they make payment through our credit or debit
                  card. Several payment options are support such as Master Card
                  and Visa. The money is held in escrow and not released
                  immediately.{" "}
                </>
              </Text>
            </div>
            <div className="absolute bg-white-A700 bottom-[11%] flex flex-col items-center justify-start p-[19px] right-[6%] rounded-[10px] shadow-bs w-[22%]">
              <div className="flex flex-col gap-6 items-start justify-start mb-[67px] w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-teal-900 sm:text-xl w-auto"
                  size="txtInterExtraBold24"
                >
                  04
                </Text>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-teal-900 w-auto"
                  size="txtInterSemiBold32"
                >
                  Receive a paper
                </Text>
                <Text
                  className="max-w-[310px] md:max-w-full text-black-900 text-xl"
                  size="txtInterRegular20"
                >
                  Our writer works on the order and delivers the paper to the
                  client. Once the client approves the paper, the money is
                  released and the paper is available for download.{" "}
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Button
          className="cursor-pointer font-semibold leading-[normal] min-w-[201px] mr-[104px] mt-10 text-2xl md:text-[22px] text-center sm:text-xl"
          shape="round"
          color="light_blue_600"
          size="md"
          variant="fill"
        >
          New order
        </Button>
        <div className="flex flex-col items-center mt-[276px] w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[1318px] items-center justify-start max-w-[1712px] mx-auto p-[18px] md:px-5 w-full"
            style={{ backgroundImage: "url('images/img_group366.png')" }}
          >
            <div className="flex flex-col gap-[58px] items-center justify-start mb-[231px] w-[91%] md:w-full">
              <Text
                className="md:text-5xl text-[64px] text-center text-teal-900"
                size="txtInterBold64"
              >
                <>
                  Discover the benefits <br />
                  of our service
                </>
              </Text>
              <div className="md:h-[2012px] h-[839px] relative w-full">
                <div className="border border-solid border-teal-900 flex flex-col h-full items-center justify-start mx-auto p-[45px] md:px-10 sm:px-5 rounded-[20px] w-[33%]">
                  <div className="flex flex-col items-center justify-start my-2.5 w-full">
                    <div className="bg-light_blue-600 flex flex-col items-center justify-start rounded-[50%] w-[110px]">
                      <Img
                        className="h-[43px]"
                        src="images/img_bookmark.svg"
                        alt="bookmark"
                      />
                    </div>
                    <Text
                      className="mt-[39px] md:text-3xl sm:text-[28px] text-[32px] text-teal-900"
                      size="txtInterSemiBold32"
                    >
                      Affordable Prices
                    </Text>
                    <Text
                      className="mt-5 text-black-900 text-xl w-full"
                      size="txtInterRegular20"
                    >
                      Our prices are very affordable and at the same time
                      guarantee that you get a a quality paper
                    </Text>
                  </div>
                </div>
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                  <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="border border-solid border-teal-900 flex md:flex-1 flex-col items-center justify-center p-[45px] md:px-10 sm:px-5 rounded-[20px] w-[33%] md:w-full">
                        <div className="flex flex-col items-center justify-start my-2.5 w-full">
                          <div className="bg-light_blue-600 flex flex-col items-center justify-start rounded-[50%] w-[110px]">
                            <Img
                              className="h-[53px] w-[53px]"
                              src="images/img_bxsupport.svg"
                              alt="bxsupport"
                            />
                          </div>
                          <Text
                            className="mt-[42px] md:text-3xl sm:text-[28px] text-[32px] text-teal-900"
                            size="txtInterSemiBold32"
                          >
                            {" "}
                            24/7 Customer Support
                          </Text>
                          <Text
                            className="mt-[17px] text-black-900 text-xl w-full"
                            size="txtInterRegular20"
                          >
                            Our dedicated client support team is available 24/7
                            all across the globe.{" "}
                          </Text>
                        </div>
                      </div>
                      <div className="border border-solid border-teal-900 flex md:flex-1 flex-col items-center justify-center p-[45px] md:px-10 sm:px-5 rounded-[20px] shadow-bs1 w-[33%] md:w-full">
                        <div className="flex flex-col gap-10 items-center justify-start my-2.5 w-auto sm:w-full">
                          <div className="bg-light_blue-600 flex flex-col items-center justify-start rounded-[50%] w-[110px]">
                            <Img
                              className="h-[49px]"
                              src="images/img_file.svg"
                              alt="file"
                            />
                          </div>
                          <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                            <Text
                              className="md:text-3xl sm:text-[28px] text-[32px] text-teal-900"
                              size="txtInterSemiBold32"
                            >
                              Formatting is Free{" "}
                            </Text>
                            <Text
                              className="text-black-900 text-xl w-full"
                              size="txtInterRegular20"
                            >
                              We format the paper according to your instructions
                              free of charge.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div
                        className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[410px] items-center justify-end p-[37px] sm:px-5 w-[33%] md:w-full"
                        style={{
                          backgroundImage: "url('images/img_group8.svg')",
                        }}
                      >
                        <div className="flex flex-col items-center justify-start mb-[11px] mt-[19px] w-[97%] md:w-full">
                          <div className="flex flex-col gap-10 items-center justify-start w-auto sm:w-full">
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-[110px] items-center justify-start p-[23px] sm:px-5 w-[110px]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group10.svg')",
                              }}
                            >
                              <Img
                                className="h-[61px] w-[61px]"
                                src="images/img_dashiconsprivacy.svg"
                                alt="dashiconsprivac"
                              />
                            </div>
                            <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                              <Text
                                className="md:text-3xl sm:text-[28px] text-[32px] text-teal-900"
                                size="txtInterSemiBold32"
                              >
                                {" "}
                                Confidentiality
                              </Text>
                              <Text
                                className="text-black-900 text-xl w-full"
                                size="txtInterRegular20"
                              >
                                We use the most up to date and proven technology
                                to ensure that any information that you share
                                with us is kept private and confidential.{" "}
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border border-solid border-teal-900 flex md:flex-1 flex-col items-center justify-center p-[45px] md:px-10 sm:px-5 rounded-[20px] w-[33%] md:w-full">
                        <div className="flex flex-col gap-10 items-center justify-start my-2.5 w-auto sm:w-full">
                          <div className="bg-light_blue-600 flex flex-col items-center justify-start rounded-[50%] w-[110px]">
                            <Img
                              className="h-[70px] w-[71px]"
                              src="images/img_tablerurgent.svg"
                              alt="tablerurgent"
                            />
                          </div>
                          <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                            <Text
                              className="md:text-3xl sm:text-[28px] text-[32px] text-teal-900"
                              size="txtInterSemiBold32"
                            >
                              Urgent Assignments
                            </Text>
                            <Text
                              className="text-black-900 text-xl w-full"
                              size="txtInterRegular20"
                            >
                              Our service can help you on assignments with tight
                              deadlines.{" "}
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[410px] items-center justify-center p-9 sm:px-5 w-[33%] md:w-full"
                        style={{
                          backgroundImage: "url('images/img_group8.svg')",
                        }}
                      >
                        <div className="flex flex-col gap-[42px] items-center justify-start my-[19px] w-[97%] md:w-full">
                          <Img
                            className="h-[110px] w-[110px]"
                            src="images/img_group360.svg"
                            alt="group360"
                          />
                          <div className="flex flex-col gap-[17px] items-end justify-start w-full">
                            <Text
                              className="md:text-3xl sm:text-[28px] text-[32px] text-teal-900"
                              size="txtInterSemiBold32"
                            >
                              {" "}
                              Wide Range of Subjects
                            </Text>
                            <Text
                              className="mr-[3px] text-black-900 text-xl w-full"
                              size="txtInterRegular20"
                            >
                              We have experts in many disciples who can help you
                              out.{" "}
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-20 items-center justify-start max-w-[1528px] mt-[39px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[33px] items-center justify-start w-[83%] md:w-full">
              <Text
                className="md:text-5xl text-[64px] text-center text-teal-900"
                size="txtInterBold64"
              >
                Who Are the Experts?{" "}
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                size="txtInterRegular24"
              >
                <>
                  Our experts are carefully selected through a rigorous process.
                  They are <br />
                  mostly the alumni of some of the world’s top universities.{" "}
                </>
              </Text>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[56%] md:w-full">
                <div className="flex relative w-[58%] md:w-full">
                  <div className="h-[92px] my-auto w-[73%]">
                    <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[0] my-auto w-[47%]">
                      <Img
                        className="h-[77px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
                        src="images/img_rectangle12.png"
                        alt="rectangleTwelve"
                      />
                    </div>
                    <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[56%]">
                      <Img
                        className="h-[92px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
                        src="images/img_rectangle12_92x162.png"
                        alt="rectangleTwelve_One"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start ml-[-2.49px] mt-3 w-[28%] z-[1]">
                    <Img
                      className="h-[63px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
                      src="images/img_rectangle12_63x112.png"
                      alt="rectangleTwelve_Two"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[33px] w-[18%] md:w-full">
                  <Img
                    className="h-[70px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
                    src="images/img_rectangle12_70x124.png"
                    alt="rectangleTwelve_Three"
                  />
                </div>
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[22px] w-[17%] md:w-full">
                  <Img
                    className="h-[65px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
                    src="images/img_rectangle12_65x116.png"
                    alt="rectangleTwelve_Four"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[18px] items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-10 items-end justify-start w-full">
                  <List
                    className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-teal-900 flex flex-1 flex-col gap-[38px] items-center justify-start sm:ml-[0] pb-[37px] rounded-[20px] w-full">
                      <div className="h-[329px] relative w-full">
                        <Img
                          className="h-[329px] m-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-full"
                          src="images/img_rectangle23.png"
                          alt="rectangleTwentyThree"
                        />
                        <div className="absolute bg-light_blue-600 flex flex-col items-center justify-end left-[0] p-[5px] rounded-[18px] top-[0] w-[19%]">
                          <div className="flex flex-row items-center justify-center w-[88%] md:w-full">
                            <Img
                              className="h-4 my-1 w-4"
                              src="images/img_star1.svg"
                              alt="starOne"
                            />
                            <Text
                              className="ml-[3px] text-center text-white-A700 text-xl"
                              size="txtInterRegular20WhiteA700"
                            >
                              4.8
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                          size="txtInterBold24"
                        >
                          Jane Cooper
                        </Text>
                        <Text
                          className="text-center text-white-A700 text-xl"
                          size="txtInterMedium20"
                        >
                          Economics
                        </Text>
                      </div>
                    </div>
                    <div className="bg-teal-900 flex flex-1 flex-col gap-9 items-center justify-start sm:ml-[0] pb-[37px] rounded-[20px] w-full">
                      <div className="h-[329px] relative w-full">
                        <Img
                          className="h-[329px] m-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-full"
                          src="images/img_rectangle23_329x364.png"
                          alt="rectangleTwentyThree"
                        />
                        <div className="absolute bg-light_blue-600 flex flex-col items-center justify-end left-[0] p-[5px] rounded-[18px] top-[0] w-[19%]">
                          <div className="flex flex-row items-center justify-center w-[88%] md:w-full">
                            <Img
                              className="h-4 my-1 w-4"
                              src="images/img_star1_16x16.svg"
                              alt="starOne"
                            />
                            <Text
                              className="ml-[3px] text-center text-white-A700 text-xl"
                              size="txtInterRegular20WhiteA700"
                            >
                              4.8
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[9px] items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                          size="txtInterBold24"
                        >
                          Charles Watt
                        </Text>
                        <Text
                          className="text-center text-white-A700 text-xl"
                          size="txtInterMedium20"
                        >
                          Law
                        </Text>
                      </div>
                    </div>
                    <div className="bg-teal-900 flex flex-1 flex-col gap-[38px] items-center justify-start sm:ml-[0] pb-[35px] rounded-[20px] w-full">
                      <div className="h-[329px] relative w-full">
                        <Img
                          className="h-[329px] m-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-full"
                          src="images/img_rectangle23_1.png"
                          alt="rectangleTwentyThree"
                        />
                        <div className="absolute bg-light_blue-600 flex flex-col items-center justify-end left-[0] p-[5px] rounded-[18px] top-[0] w-[19%]">
                          <div className="flex flex-row items-center justify-center w-[88%] md:w-full">
                            <Img
                              className="h-4 my-1 w-4"
                              src="images/img_star1_1.svg"
                              alt="starOne"
                            />
                            <Text
                              className="ml-[3px] text-center text-white-A700 text-xl"
                              size="txtInterRegular20WhiteA700"
                            >
                              4.8
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                          size="txtInterBold24"
                        >
                          Becky Sam
                        </Text>
                        <Text
                          className="text-center text-white-A700 text-xl"
                          size="txtInterMedium20"
                        >
                          Microbiology
                        </Text>
                      </div>
                    </div>
                    <div className="bg-teal-900 flex flex-1 flex-col gap-[35px] items-center justify-start sm:ml-[0] pb-[37px] rounded-[20px] w-full">
                      <div className="h-[329px] relative w-full">
                        <Img
                          className="h-[329px] m-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-full"
                          src="images/img_rectangle23_2.png"
                          alt="rectangleTwentyThree"
                        />
                        <div className="absolute bg-light_blue-600 flex flex-col items-center justify-end left-[0] p-[5px] rounded-[18px] top-[0] w-[19%]">
                          <div className="flex flex-row items-center justify-center w-[88%] md:w-full">
                            <Img
                              className="h-4 my-1 w-4"
                              src="images/img_star1_2.svg"
                              alt="starOne"
                            />
                            <Text
                              className="ml-[3px] text-center text-white-A700 text-xl"
                              size="txtInterRegular20WhiteA700"
                            >
                              4.8
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[9px] items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                          size="txtInterBold24"
                        >
                          Ben Smith
                        </Text>
                        <Text
                          className="text-center text-white-A700 text-xl"
                          size="txtInterMedium20"
                        >
                          Music
                        </Text>
                      </div>
                    </div>
                  </List>
                  <Img
                    className="h-[60px]"
                    src="images/img_group336.svg"
                    alt="group336"
                  />
                </div>
              </div>
              <Button
                className="cursor-pointer font-semibold leading-[normal] min-w-[291px] text-2xl md:text-[22px] text-center sm:text-xl"
                shape="round"
                color="light_blue_600"
                size="md"
                variant="fill"
              >
                Become an expert
              </Button>
            </div>
          </div>
          <div className="bg-gradient  flex flex-col items-center justify-end mt-40 p-[63px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1528px] mt-1.5 mx-auto w-full">
              <Text
                className="md:text-5xl text-[64px] text-center text-white-A700"
                size="txtInterBold64WhiteA700"
              >
                Pricing
              </Text>
              <Text
                className="mt-[33px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                size="txtInterRegular24WhiteA700"
              >
                <>
                  How much will my paper cost? Use the calculator below to
                  perform <br />
                  the calculation.{" "}
                </>
              </Text>
              <div className="bg-white-A700 flex flex-col items-center justify-start mt-10 p-[46px] md:px-10 sm:px-5 rounded-[15px] shadow-bs w-full">
                <div className="flex flex-col items-center justify-start mb-[19px] mt-2.5 w-full">
                  <div className="flex flex-col md:gap-10 gap-20 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                      <div className="border border-solid border-teal-900 flex flex-row gap-[88px] items-center justify-start px-5 py-2.5 rounded-[10px] w-auto">
                        <div className="flex flex-col gap-[13px] items-start justify-start w-auto">
                          <Text
                            className="text-base text-center text-teal-900 w-auto"
                            size="txtInterRegular16"
                          >
                            Type of essay
                          </Text>
                          <Text
                            className="text-black-900 text-xl w-auto"
                            size="txtInterSemiBold20Black900"
                          >
                            Essay(any category)
                          </Text>
                        </div>
                        <Img
                          className="h-[30px] w-[30px]"
                          src="images/img_arrowdown_teal_900.svg"
                          alt="arrowdown_One"
                        />
                      </div>
                      <div className="border border-solid border-teal-900 flex flex-row gap-[88px] items-center justify-start px-5 py-2.5 rounded-[10px] w-auto">
                        <div className="flex flex-col gap-[13px] items-start justify-start w-auto">
                          <Text
                            className="text-base text-center text-teal-900 w-auto"
                            size="txtInterRegular16"
                          >
                            Academic level
                          </Text>
                          <Text
                            className="text-black-900 text-xl w-auto"
                            size="txtInterSemiBold20Black900"
                          >
                            High school
                          </Text>
                        </div>
                        <Img
                          className="h-[30px] w-[30px]"
                          src="images/img_arrowdown_teal_900.svg"
                          alt="arrowdown_Two"
                        />
                      </div>
                      <div className="border border-solid border-teal-900 flex sm:flex-1 flex-row gap-[88px] items-center justify-start px-5 py-2.5 rounded-[10px] w-auto sm:w-full">
                        <div className="flex flex-col gap-[13px] items-start justify-start w-auto">
                          <Text
                            className="text-base text-center text-teal-900 w-auto"
                            size="txtInterRegular16"
                          >
                            Pages
                          </Text>
                          <Text
                            className="text-black-900 text-xl w-auto"
                            size="txtInterSemiBold20Black900"
                          >
                            250 words
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center w-[47%]">
                          <Button
                            className="flex h-[59px] items-center justify-center rounded-[29px] w-[59px]"
                            color="teal_900_5e"
                            size="xs"
                            variant="fill"
                          >
                            <Img
                              className="h-[35px]"
                              src="images/img_antdesignplusoutlined.svg"
                              alt="antdesignplusou"
                            />
                          </Button>
                          <Text
                            className="ml-[19px] text-black-900 text-xl"
                            size="txtInterSemiBold20Black900"
                          >
                            1
                          </Text>
                          <Button
                            className="flex h-[59px] items-center justify-center ml-[19px] rounded-[29px] w-[59px]"
                            color="teal_900_0c"
                            size="xs"
                            variant="fill"
                          >
                            <Img
                              className="h-[35px]"
                              src="images/img_bxminus.svg"
                              alt="bxminus"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="border border-solid border-teal-900 flex flex-row gap-[88px] items-center justify-start px-5 py-2.5 rounded-[10px] w-auto">
                        <div className="flex flex-col gap-[13px] items-start justify-start w-auto">
                          <Text
                            className="text-base text-center text-teal-900 w-auto"
                            size="txtInterRegular16"
                          >
                            Deadline
                          </Text>
                          <Text
                            className="text-black-900 text-xl w-auto"
                            size="txtInterSemiBold20Black900"
                          >
                            4h ($44 per page)
                          </Text>
                        </div>
                        <Img
                          className="h-[30px] w-[30px]"
                          src="images/img_arrowdown_teal_900.svg"
                          alt="arrowdown_Three"
                        />
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Text
                        className="md:mt-0 mt-[23px] text-black-900 text-xl"
                        size="txtInterMedium20Black900"
                      >
                        Delivery time:
                      </Text>
                      <Text
                        className="ml-2.5 md:ml-[0] md:mt-0 mt-[21px] text-2xl md:text-[22px] text-teal-900 sm:text-xl"
                        size="txtInterBold24Teal900"
                      >
                        Today, at 6:45pm
                      </Text>
                      <div className="flex md:flex-1 flex-row gap-2.5 items-center justify-center md:ml-[0] ml-[305px] md:mt-0 mt-3 w-[10%] md:w-full">
                        <Text
                          className="text-black-900 text-xl"
                          size="txtInterMedium20Black900"
                        >
                          Price:{" "}
                        </Text>
                        <Text
                          className="text-4xl sm:text-[32px] md:text-[34px] text-teal-900"
                          size="txtInterBold36"
                        >
                          $44
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-semibold leading-[normal] min-w-[212px] md:ml-[0] ml-[423px] text-2xl md:text-[22px] text-center sm:text-xl"
                        shape="round"
                        color="light_blue_600"
                        size="md"
                        variant="fill"
                      >
                        Place order
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-[193px] items-center justify-start max-w-[1530px] mt-[156px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-start w-[95%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[122px] items-center justify-start w-full">
                <Text
                  className="md:text-5xl text-[64px] text-center text-teal-900"
                  size="txtInterBold64"
                >
                  Our guarantees
                </Text>
                <List
                  className="sm:flex-col flex-row md:gap-10 gap-[113px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[42px] justify-start w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[94px] items-center justify-start md:ml-[0] ml-[146px] p-[18px] w-[22%] md:w-full"
                        style={{
                          backgroundImage: "url('images/img_group11.svg')",
                        }}
                      >
                        <Img
                          className="h-[57px]"
                          src="images/img_file_white_a700.svg"
                          alt="file"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col gap-[17px] justify-start w-full">
                              <Text
                                className="md:ml-[0] ml-[22px] md:text-3xl sm:text-[28px] text-[32px] text-teal-900"
                                size="txtInterSemiBold32"
                              >
                                Plagiarism Free Paper{" "}
                              </Text>
                              <Text
                                className="text-black-900 text-xl w-full"
                                size="txtInterRegular20"
                              >
                                We make use of our internal software to ensure
                                that the paper that is delivered to you is
                                original.{" "}
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[39px] justify-start w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[94px] items-center justify-end md:ml-[0] ml-[146px] p-[18px] w-[22%] md:w-full"
                        style={{
                          backgroundImage: "url('images/img_group11.svg')",
                        }}
                      >
                        <Img
                          className="h-[57px]"
                          src="images/img_file_white_a700_57x49.svg"
                          alt="file"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col gap-5 items-center justify-start w-full">
                              <Text
                                className="md:text-3xl sm:text-[28px] text-[32px] text-teal-900"
                                size="txtInterSemiBold32"
                              >
                                Free Revisions
                              </Text>
                              <Text
                                className="text-black-900 text-xl w-full"
                                size="txtInterRegular20"
                              >
                                Have you spotted some issues about you paper?
                                Worry not we guarantee an update in your paper
                                and send it back ASAP.{" "}
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[42px] justify-start w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[94px] items-center justify-start md:ml-[0] ml-[146px] p-4 w-[22%] md:w-full"
                        style={{
                          backgroundImage: "url('images/img_group11.svg')",
                        }}
                      >
                        <Img
                          className="h-[57px] my-0.5"
                          src="images/img_cashbackicon2.svg"
                          alt="cashbackiconTwo"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                              <Text
                                className="md:text-3xl sm:text-[28px] text-[32px] text-teal-900"
                                size="txtInterSemiBold32"
                              >
                                <>Money Back Guarantee</>
                              </Text>
                              <Text
                                className="text-black-900 text-xl w-full"
                                size="txtInterRegular20"
                              >
                                We seek to ensure that the best quality of your
                                paper is provided. If we are not able to provide
                                the quality service, then we give you a refund.{" "}
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-[125px] items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col justify-start w-full">
                  <Text
                    className="md:ml-[0] ml-[564px] md:text-5xl text-[64px] text-center text-teal-900"
                    size="txtInterBold64"
                  >
                    Testimonials
                  </Text>
                  <div className="border border-solid border-teal-900 flex sm:flex-col flex-row sm:gap-10 gap-16 items-center justify-center md:ml-[0] ml-[517px] mt-[73px] md:pr-10 sm:pr-5 pr-[63px] rounded-[15px] w-[33%] md:w-full">
                    <Button
                      className="cursor-pointer font-semibold leading-[normal] min-w-[247px] rounded-bl-[15px] rounded-tl-[15px] md:text-3xl sm:text-[28px] text-[32px] text-center"
                      color="light_blue_600"
                      size="sm"
                      variant="fill"
                    >
                      Students
                    </Button>
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-teal-900_87"
                      size="txtInterSemiBold32Teal90087"
                    >
                      Experts
                    </Text>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mr-2.5 mt-16 w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col relative w-full">
                      <div className="border border-solid border-teal-900 flex flex-col gap-[39px] items-center justify-center mx-auto p-[61px] md:px-10 sm:px-5 rounded-[20px] w-full">
                        <Text
                          className="mt-1.5 text-black-900 text-center text-xl"
                          size="txtInterRegular20"
                        >
                          <>
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation <br />
                            veniam consequat sunt nostrud amet.
                            <br />
                            velit mollit. Exercitation veniam consequat sunt
                            nostrud amet.
                          </>
                        </Text>
                        <div className="flex flex-col gap-2 items-center justify-start mb-[21px]">
                          <Text
                            className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                            size="txtInterBold24Black900"
                          >
                            Jane Cooper
                          </Text>
                          <Text
                            className="text-black-900 text-center text-xl"
                            size="txtInterMedium20Black900"
                          >
                            Yale University
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-[151px] mt-[-44px] mx-auto rounded-[50%] w-[151px] z-[1]"
                        src="images/img_ellipse4.png"
                        alt="ellipseFour"
                      />
                    </div>
                    <div className="flex flex-col relative w-full">
                      <div className="border border-solid border-teal-900 flex flex-col gap-[37px] items-center justify-center mx-auto p-[61px] md:px-10 sm:px-5 rounded-[20px] w-full">
                        <Text
                          className="mt-1.5 text-black-900 text-center text-xl"
                          size="txtInterRegular20"
                        >
                          <>
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation <br />
                            veniam consequat sunt nostrud amet.
                            <br />
                            velit mollit. Exercitation veniam consequat sunt
                            nostrud amet.
                          </>
                        </Text>
                        <div className="flex flex-col gap-2.5 items-center justify-start mb-[21px]">
                          <Text
                            className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                            size="txtInterBold24Black900"
                          >
                            Samuel Ben
                          </Text>
                          <Text
                            className="text-black-900 text-center text-xl"
                            size="txtInterMedium20Black900"
                          >
                            Oxford University
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-[151px] mt-[-44px] mx-auto rounded-[50%] w-[151px] z-[1]"
                        src="images/img_ellipse4_151x151.png"
                        alt="ellipseFour"
                      />
                    </div>
                    <div className="flex flex-col relative w-full">
                      <div className="border border-solid border-teal-900 flex flex-col gap-[39px] items-center justify-center mx-auto p-[61px] md:px-10 sm:px-5 w-full">
                        <Text
                          className="mt-1.5 text-black-900 text-center text-xl"
                          size="txtInterRegular20"
                        >
                          <>
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation <br />
                            veniam consequat sunt nostrud amet.
                            <br />
                            velit mollit. Exercitation veniam consequat sunt
                            nostrud amet.
                          </>
                        </Text>
                        <div className="flex flex-col gap-2 items-center justify-start mb-[21px]">
                          <Text
                            className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                            size="txtInterBold24Black900"
                          >
                            Becky Paul
                          </Text>
                          <Text
                            className="text-black-900 text-center text-xl"
                            size="txtInterMedium20Black900"
                          >
                            Nile University
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-[151px] mt-[-44px] mx-auto rounded-[50%] w-[151px] z-[1]"
                        src="images/img_ellipse4_1.png"
                        alt="ellipseFour"
                      />
                    </div>
                  </List>
                  <Img
                    className="h-[60px] md:ml-[0] ml-[1384px] mt-8"
                    src="images/img_group336.svg"
                    alt="group337"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <Img
                    className="h-[696px] md:h-auto object-cover rounded-[20px]"
                    src="images/img_rectangle6.png"
                    alt="rectangleSix"
                  />
                  <div className="flex flex-col gap-5 items-end justify-start">
                    <div className="flex flex-col gap-10 items-center justify-start w-full">
                      <Text
                        className="md:text-5xl text-[64px] text-teal-900"
                        size="txtInterBold64"
                      >
                        <>
                          Our support takes <br />
                          care of you 24/7
                        </>
                      </Text>
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
                        size="txtInterRegular24"
                      >
                        Once you hire a writer, you get our professional
                        customer support team to walk with you every step of the
                        way 24/7
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-semibold leading-[normal] min-w-[207px] text-2xl md:text-[22px] text-center sm:text-xl"
                      shape="round"
                      color="light_blue_600"
                      size="md"
                      variant="fill"
                    >
                      Contact us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[174px] w-full">
            <div className="md:h-[1370px] sm:h-[851px] h-[882px] md:px-5 relative w-full">
              <div className="absolute bg-teal-900 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto pl-4 py-4 w-full">
                <div className="flex flex-col items-start justify-start mt-[258px] w-full">
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[94px] w-[85%] md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtInterBold24"
                      >
                        Info
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[410px] sm:mt-0 mt-[3px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtInterBold24"
                      >
                        Legal & Policies
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[197px] sm:mt-0 mt-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtInterBold24"
                      >
                        Company
                      </Text>
                      <Text
                        className="mb-[3px] sm:ml-[0] ml-[257px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtInterBold24"
                      >
                        Customer Services
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row gap-3 items-start justify-start mt-5 w-[96%] md:w-full">
                      <div className="flex flex-col items-start justify-start md:mt-0 mt-[9px] w-[3%] md:w-full">
                        <Img
                          className="h-6 ml-1 md:ml-[0] w-6"
                          src="images/img_checkmark.svg"
                          alt="checkmark"
                        />
                        <Img
                          className="h-6 mt-4 w-6"
                          src="images/img_call.svg"
                          alt="call"
                        />
                        <Img
                          className="h-6 mt-[25px] w-6"
                          src="images/img_akariconslocation.svg"
                          alt="akariconslocati"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[91%] md:w-full">
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtInterRegular20WhiteA700"
                          >
                            support@writingbucket.com
                          </Text>
                          <a
                            href="javascript:"
                            className="md:ml-[0] ml-[148px] text-white-A700 text-xl"
                          >
                            <Text size="txtInterRegular20WhiteA700">
                              Privacy Policy
                            </Text>
                          </a>
                          <Text
                            className="md:ml-[0] ml-[248px] text-white-A700 text-xl"
                            size="txtInterRegular20WhiteA700"
                          >
                            About Us
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[282px] text-white-A700 text-xl"
                            size="txtInterRegular20WhiteA700"
                          >
                            FAQ
                          </Text>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[21px] w-[94%] md:w-full">
                          <Text
                            className="mb-0.5 text-white-A700 text-xl"
                            size="txtInterRegular20WhiteA700"
                          >
                            2-955-866-5646
                          </Text>
                          <a
                            href="javascript:"
                            className="mb-0.5 md:ml-[0] ml-[252px] text-white-A700 text-xl"
                          >
                            <Text size="txtInterRegular20WhiteA700">
                              Terms & Conditions
                            </Text>
                          </a>
                          <Text
                            className="md:ml-[0] ml-[196px] md:mt-0 mt-0.5 text-white-A700 text-xl"
                            size="txtInterRegular20WhiteA700"
                          >
                            Become An Expert
                          </Text>
                          <Text
                            className="mb-0.5 md:ml-[0] ml-[194px] text-white-A700 text-xl"
                            size="txtInterRegular20WhiteA700"
                          >
                            Reviews
                          </Text>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[416px] mt-[21px] w-[67%] md:w-full">
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtInterRegular20WhiteA700"
                          >
                            Cookie Policy
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[252px] text-white-A700 text-xl"
                            size="txtInterRegular20WhiteA700"
                          >
                            Honor Code
                          </Text>
                          <Text
                            className="ml-64 md:ml-[0] text-white-A700 text-xl"
                            size="txtInterRegular20WhiteA700"
                          >
                            Expert Ratings
                          </Text>
                        </div>
                        <div className="flex flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[416px] mt-[23px] w-[69%] md:w-full">
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtInterRegular20WhiteA700"
                          >
                            Data Security
                          </Text>
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtInterRegular20WhiteA700"
                          >
                            Writing Examples
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[1206px] mt-[23px] text-white-A700 text-xl"
                      size="txtInterRegular20WhiteA700"
                    >
                      Project Types
                    </Text>
                  </div>
                  <Line className="bg-white-A700_33 h-px mt-[51px] w-full" />
                  <div className="flex md:flex-col flex-row gap-[39px] items-center justify-start md:ml-[0] ml-[94px] mt-[15px] w-[91%] md:w-full">
                    <div className="flex flex-row gap-2 items-center justify-between w-[14%] md:w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[47px] items-center justify-start w-12"
                        style={{
                          backgroundImage: "url('images/img_group.png')",
                        }}
                      >
                        <div className="md:h-11 h-[22px] my-[11px] relative w-[92%]">
                          <Img
                            className="h-[22px] m-auto object-cover w-full"
                            src="images/img_rectangle.png"
                            alt="rectangle_One"
                          />
                          <Img
                            className="absolute h-[17px] inset-x-[0] mx-auto top-[0]"
                            src="images/img_television.svg"
                            alt="television_One"
                          />
                        </div>
                      </div>
                      <Img
                        className="h-[29px]"
                        src="images/img_group_white_a700.svg"
                        alt="group_One"
                      />
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[85%] md:w-full">
                      <Line className="bg-white-A700_33 h-[70px] md:h-px md:w-full w-px" />
                      <Text
                        className="ml-5 md:ml-[0] text-base text-white-A700"
                        size="txtInterRegular16WhiteA700"
                      >
                        © 2022 Writing Bucket All Rights Reserved
                      </Text>
                      <div className="flex flex-col items-center justify-start md:ml-[0] ml-[729px] w-[18%] md:w-full">
                        <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                          <Img
                            className="h-10 w-10"
                            src="images/img_cibapplepay.svg"
                            alt="cibapplepay"
                          />
                          <Img
                            className="h-8 w-8"
                            src="images/img_cibgooglepay.svg"
                            alt="cibgooglepay"
                          />
                          <Img
                            className="h-8 w-8"
                            src="images/img_settings.svg"
                            alt="settings"
                          />
                          <Img
                            className="h-8 w-8"
                            src="images/img_bxlmastercard.svg"
                            alt="bxlmastercard"
                          />
                          <Img
                            className="h-6 w-6"
                            src="images/img_bxlpaypal.svg"
                            alt="bxlpaypal"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-gradient  border border-black-900 border-solid flex md:flex-col flex-row md:gap-10 gap-40 inset-x-[0] items-center justify-start mx-auto p-[66px] md:px-10 sm:px-5 rounded-[20px] shadow-bs1 top-[0] w-[81%]">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                  size="txtInterBold48"
                >
                  Get professional help with your paper
                </Text>
                <div className="h-16 md:h-[157px] mb-[93px] md:mt-0 mt-[78px] relative w-[18%] md:w-full">
                  <div className="bg-light_blue-600 flex flex-col h-full items-start justify-start m-auto px-10 sm:px-5 py-5 rounded-[10px] w-[226px]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                    />
                  </div>
                  <div className="absolute bottom-[22%] flex flex-row gap-1 inset-x-[0] items-center justify-center mx-auto w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                      size="txtInterSemiBold24"
                    >
                      Order now
                    </Text>
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_biarrowright.svg"
                      alt="biarrowright"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start mt-[1589px] md:px-10 sm:px-5 px-[95px] w-full">
          <div className="flex flex-col gap-[25px] items-center justify-end w-[2%] md:w-full">
            <Img
              className="h-6 w-6"
              src="images/img_checkmark.svg"
              alt="checkmark_One"
            />
            <Img className="h-6 w-6" src="images/img_call.svg" alt="call_One" />
            <Img className="h-6 w-6" src="images/img_call.svg" alt="call_Two" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageFivePage;
