"use client";

import { IconChevronLeft, IconClockHour2, IconCopy } from "@tabler/icons-react";
import Link from "next/link";
import paychanguLogo from "@/public/paychangu.png";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { plans } from "@/data/pricing";
import { formatAmountWithCommas } from "@/utils/formatNumber";
import PaymentMethods from "@/components/PaymentMethods";

function CheckoutContent() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");
  const [selectedPlan, setSelectedPlan] = useState<String | null>(null);
  const [price, setPrice] = useState(0);
  const [selectedOption, setSelectedOption] = useState("monthly");
  const [method, setMethod] = useState("tnm");

  useEffect(() => {
    if (!plan) return;
    if (plan.length == 0) return;
    setSelectedPlan(plan);
  }, [plan]);

  useEffect(() => {
    if (!selectedPlan) return;
    const plan = plans.find((p) => p.name.toLowerCase() === selectedPlan);
    if (!plan) return;
    setPrice(plan.price);
  }, [selectedPlan]);

  const calcDiscount = (price: number): number => {
    const discount = price / 1.15;

    return discount;
  };

  return (
    <div className="fixed grid h-screen w-screen top-0 left-0 grid-cols-2 overflow-y-auto max-[900px]:flex max-[900px]:flex-col gap-10">
      <div className="flex flex-col pt-24 max-[900px]:pt-6 px-10 max-sm:px-4 min-[1440px]:px-[10vw]">
        <Link href={"/"} className="flex items-center space-x-1 w-fit">
          <IconChevronLeft className="h-4 w-4 opacity-50" />
          <span className="font-p1 font-semibold">Otowa</span>
        </Link>

        <div className="flex flex-col space-y-4 w-full pt-10">
          <span className="opacity-50">Customer details</span>
          <div className="grid grid-cols-2 gap-4 max-[480px]:grid-cols-1">
            <div className="flex flex-col space-y-1">
              <span className="px-1">First name</span>
              <input
                placeholder="e.g. Moses"
                className="w-full focus-within:outline-2 focus-within:outline-(--primary)/10 outline-0 px-2 h-8 rounded-[0.35rem] border border-[#E7E7E7] bg-[#F9F8F7]/85"
                type="text"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <span className="px-1">Last name</span>
              <input
                placeholder="e.g. Kaponda"
                className="w-full focus-within:outline-2 focus-within:outline-(--primary)/10 outline-0 px-2 h-8 rounded-[0.35rem] border border-[#E7E7E7] bg-[#F9F8F7]/85"
                type="text"
              />
            </div>
          </div>

          <div className="flex flex-col w-full space-y-1">
            <span className="px-1">
              Business name <span className="opacity-25">(optional)</span>
            </span>
            <input
              placeholder="e.g. Company plc"
              className="w-full focus-within:outline-2 focus-within:outline-(--primary)/10 outline-0 px-2 h-8 rounded-[0.35rem] border border-[#E7E7E7] bg-[#F9F8F7]/85"
              type="text"
            />
          </div>

          <div className="flex flex-col w-full space-y-1">
            <span className="px-1">Email </span>
            <input
              placeholder="e.g. m.kaponda@gmail.com"
              className="w-full focus-within:outline-2 focus-within:outline-(--primary)/10 outline-0 px-2 h-8 rounded-[0.35rem] border border-[#E7E7E7] bg-[#F9F8F7]/85"
              type="email"
            />
          </div>

          <div className="flex flex-col w-full space-y-1">
            <span className="px-1">Phone </span>
            <input
              placeholder="e.g. 0881234567"
              className="w-full focus-within:outline-2 focus-within:outline-(--primary)/10 outline-0 px-2 h-8 rounded-[0.35rem] border border-[#E7E7E7] bg-[#F9F8F7]/85"
              type="text"
            />
          </div>
        </div>
      </div>

      <div className="h-full max-sm:h-fit overflow-y-auto max-sm:pb-10 w-full border-l border-l-[#E7E7E7] bg-[#F9F8F7]/85 flex flex-col pt-16 max-[900px]:pt-4 px-10 max-sm:px-4 min-[1440px]:px-[10vw]">
        <div className="flex flex-col space-y-4 w-full pt-10 pr-10 max-sm:pr-0">
          <span className="opacity-50">Billing options</span>

          <div className="flex flex-col space-y-1.5">
            <div
              onClick={() => setSelectedOption("monthly")}
              className="w-full cursor-pointer flex items-center p-2 rounded-[0.35rem] border border-[#E7E7E7]"
            >
              <span
                style={{
                  transition: "ease 0.35s",
                }}
                className={`h-4 w-4 mr-2 flex ${
                  selectedOption == "monthly"
                    ? "border-5 border-(--primary)"
                    : "border border-[#E8E8E8]"
                }  rounded-full`}
              ></span>
              <div className="flex flex-col space-y-1">
                <span>Pay monthly</span>
                <span className="font-normal opacity-75">
                  K{formatAmountWithCommas(price.toFixed(2))}
                </span>
              </div>
            </div>

            <div
              onClick={() => setSelectedOption("yearly")}
              className="w-full cursor-pointer flex items-center p-2 rounded-[0.35rem] border border-[#E7E7E7]"
            >
              <span
                style={{
                  transition: "ease 0.35s",
                }}
                className={`h-4 w-4 mr-2 flex ${
                  selectedOption == "yearly"
                    ? "border-5 border-(--primary)"
                    : "border border-[#E8E8E8]"
                }  rounded-full`}
              ></span>
              <div className="flex flex-col space-y-1">
                <span>Pay Yeary</span>
                <span className="font-normal opacity-75">
                  K{formatAmountWithCommas(calcDiscount(price).toFixed(2))}
                </span>
              </div>

              <span className="p-1.5 font-p3 font-semibold ml-auto bg-[#E7F3FB] text-[#4896E3] rounded-[0.35rem]">
                Save 15%
              </span>
            </div>
          </div>

          <PaymentMethods method={method} setPaymethod={setMethod} />

          {method !== "bank" && (
            <div className="flex flex-col w-full space-y-1">
              <span className="px-1">Phone </span>
              <input
                placeholder={`e.g. ${
                  method == "tnm" ? "0881234567" : "0991234567"
                }`}
                className="w-full focus-within:outline-2 focus-within:outline-(--primary)/10 outline-0 px-2 h-8 rounded-[0.35rem] border border-[#E7E7E7] bg-[#F9F8F7]/85"
                type="text"
              />
            </div>
          )}
          {method == "bank" && (
            <div className="flex flex-col relative space-y-1.5  p-2 cursor-pointer  border  border-[#1E1E1E]/10 rounded-(--radius-s)">
              <div className="flex items-center">
                <span className="opacity-75">Acc number:</span>
                <div className="flex items-center ml-auto">
                  <span className=" cursor-pointer">2652455380</span>
                  <IconCopy className="ml-1 h-4 w-4 opacity-50" />
                </div>
              </div>

              <div className="flex items-center">
                <span className="opacity-75">Acc name:</span>
                <div className="flex items-center ml-auto">
                  <span className=" cursor-pointer">PayChangu</span>
                  <IconCopy className="ml-1 h-4 w-4 opacity-50" />
                </div>
              </div>

              <div className="flex items-center">
                <span className="opacity-75">Bank:</span>
                <div className="flex items-center ml-auto">
                  <span className=" cursor-pointer">Centenary Bank</span>
                  <IconCopy className="ml-1 h-4 w-4 opacity-50" />
                </div>
              </div>

              <span className="font-p3 opacity-75 flex items-center mx-auto">
                <IconClockHour2 className="h-3 w-3 mr-1 opacity-50" />
                Account expires in 45 mins
              </span>
            </div>
          )}

          <button
            style={{
              width: "100%",
              height: "2rem",
            }}
            className="cta"
          >
            Pay now
          </button>

          <div className="flex items-center justify-center">
            <Image
              src={paychanguLogo}
              alt="paychangu logo"
              className="h-3 w-3 grayscale"
            />
            <span className="ml-1 font-normal opacity-50 font-p3">
              Powered by PayChangu
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}

export default page;
