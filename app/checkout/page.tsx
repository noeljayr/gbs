"use client";

import { IconChevronLeft, IconClockHour2, IconCopy } from "@tabler/icons-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { formatAmountWithCommas } from "@/utils/formatNumber";
import PaymentMethods from "@/components/PaymentMethods";
import {
  decodeReservationFromUrl,
  formatReservationForDisplay,
} from "@/utils/reservationUrl";
import { useRouter } from "nextjs-toploader/app";

interface ReservationData {
  from: string;
  destination: string;
  date: string;
  travelers: number;
}

function CheckoutContent() {
  const searchParams = useSearchParams();
  const [reservationData, setReservationData] =
    useState<ReservationData | null>(null);
  const [price, setPrice] = useState(0);
  const [method, setMethod] = useState("tnm");

  useEffect(() => {
    // Read reservation data from URL params using utility function
    const reservationData = decodeReservationFromUrl(searchParams);

    if (reservationData) {
      const displayData = formatReservationForDisplay(reservationData);
      setReservationData(displayData);
    }
  }, [searchParams]);

  useEffect(() => {
    // Calculate price based on number of travelers
    const basePrice = 50000;
    const totalPrice = reservationData
      ? basePrice * reservationData.travelers
      : basePrice;
    setPrice(totalPrice);
  }, [reservationData]);

  const getTicketDescription = () => {
    if (!reservationData) return "1 Ticket";
    const ticketText = reservationData.travelers === 1 ? "Ticket" : "Tickets";
    return `${reservationData.travelers} ${ticketText} from ${reservationData.from} to ${reservationData.destination}`;
  };

  if (!reservationData) {
    const router = useRouter();

    router.push("/");

    return <></>;
  }

  return (
    <div className="fixed grid h-screen w-screen top-0 left-0 grid-cols-2 overflow-y-hidden max-[900px]:grid-cols-1 max-[900px]:grid-rows-[60%_1fr] gap-10">
      <div className="flex flex-col w-full h-full overflow-y-auto pt-10 max-[900px]:px-4 pl-10">
        <Link href={"/"} className="flex items-center space-x-1 w-fit mb-10">
          <IconChevronLeft className="h-4 w-4 opacity-50" />
          <span className="font-p1 font-semibold">Gian{`'`}s Bus Services</span>
        </Link>

        <div className="flex flex-col space-y-4">
          <span className="opacity-50 font-p3">Customer details</span>
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

        <div className="flex flex-col space-y-4 mt-10 sm:pb-10">
          <span className="opacity-50 font-p3">Next of kin {`(Relative)`}</span>
          <div className="grid grid-cols-2 gap-4 max-[480px]:grid-cols-1">
            <div className="flex flex-col space-y-1">
              <span className="px-1">First name</span>
              <input
                placeholder="e.g. Joshua"
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
            <span className="px-1">Email </span>
            <input
              placeholder="e.g. j.kaponda@gmail.com"
              className="w-full focus-within:outline-2 focus-within:outline-(--primary)/10 outline-0 px-2 h-8 rounded-[0.35rem] border border-[#E7E7E7] bg-[#F9F8F7]/85"
              type="email"
            />
          </div>

          <div className="flex flex-col w-full space-y-1">
            <span className="px-1">Phone </span>
            <input
              placeholder="e.g. 0991234567"
              className="w-full focus-within:outline-2 focus-within:outline-(--primary)/10 outline-0 px-2 h-8 rounded-[0.35rem] border border-[#E7E7E7] bg-[#F9F8F7]/85"
              type="text"
            />
          </div>
        </div>
      </div>

      <div className="h-full max-sm:h-fit  w-full border-l border-l-[#E7E7E7] bg-[#F9F8F7]/85 flex flex-col pt-16 max-[900px]:pt-4 px-10 max-sm:px-4 min-[1440px]:px-[10vw]">
        <div className="flex flex-col space-y-4 w-full pt-10 pr-10 max-sm:pr-0">
          <span className="opacity-50 font-p3">Payment Details</span>

          <div className="flex flex-col space-y-1.5">
            <div className="w-full grid-cols-[1fr_auto] gap-4 flex items-center p-3 rounded-[0.35rem] border border-[#E7E7E7]">
              <span className="truncate w-full">{getTicketDescription()}</span>
              <span className="font-normal opacity-75">
                K{formatAmountWithCommas(price.toFixed(2))}
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
