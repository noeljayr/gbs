import airtel from "@/public/airtel.png";
import tnm from "@/public/tnm.png";
import centenary from "@/public/centenary.png";
import Image from "next/image";
import { IconCircleCheckFilled } from "@tabler/icons-react";

type Props = {
  method: string;
  setPaymethod: (method: string) => void;
};
function PaymentMethods({ method, setPaymethod }: Props) {
  return (
    <div className="w-full grid-cols-3 grid gap-2">
      <div
        onClick={() => setPaymethod("tnm")}
        className="flex flex-col items-center relative justify-center p-2 cursor-pointer aspect-video border  border-[#1E1E1E]/10 rounded-(--radius-s)"
      >
        <Image className="h-10 w-10 mb-1.5" src={tnm} alt="TNM mpamba" />

        <span className="font-p3 opacity-75">TNM Mpamba</span>
        {method == "tnm" && (
          <IconCircleCheckFilled
            color="var(--primary)"
            className="h-4 w-4 absolute right-0.5 top-0.5"
          />
        )}
      </div>
      <div
        onClick={() => setPaymethod("airtel")}
        className="flex flex-col items-center relative justify-center p-2 cursor-pointer aspect-video border  border-[#1E1E1E]/10 rounded-(--radius-s)"
      >
        <Image className="h-10 w-10 mb-1.5" src={airtel} alt="airtle money" />

        <span className="font-p3 opacity-75">Airtel Money</span>
        {method == "airtel" && (
          <IconCircleCheckFilled
            color="var(--primary)"
            className="h-4 w-4 absolute right-0.5 top-0.5"
          />
        )}
      </div>

      <div
        onClick={() => setPaymethod("bank")}
        className="flex flex-col items-center relative justify-center p-2 cursor-pointer aspect-video border  border-[#1E1E1E]/10 rounded-(--radius-s)"
      >
        <Image
          className="h-10 w-10 mb-1.5"
          src={centenary}
          alt="airtel money"
        />

        <span className="font-p3 opacity-75">Instant Bank transfer</span>

        {method == "bank" && (
          <IconCircleCheckFilled
            color="var(--primary)"
            className="h-4 w-4 absolute right-0.5 top-0.5"
          />
        )}
      </div>
    </div>
  );
}

export default PaymentMethods;
