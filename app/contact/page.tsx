
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import Link from "next/link";

function page() {
  return (
    <div className="flex flex-col pt-16 pb-10">
      <div className="flex flex-col">
        <h3>Contact us</h3>
        <p className="opacity-75 w-[65ch] max-sm:w-[90%]">
          Connect with us your way whether by email, phone, social media, or a quick direct message. We’re here to respond promptly and keep the conversation flowing.
        </p>
      </div>

      <div className="w-full grid gap-10 mt-16 grid-cols-2 max-sm:flex max-sm:flex-col">
        <div className="flex flex-col space-y-6">
          <span className="font-semibold font-p1">Write us an email</span>
          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1 max-sm:gap-6">
            <div className="flex flex-col w-full space-y-1 5">
              <span  className="px-0.5">First name</span>
              <input placeholder="e.g John" className="w-full h-8 px-2 font-medium outline-0 bg-[#F9F8F7]/80 border border-[#E7E7E7] rounded-[0.45rem]" type="text" />
            </div>

            <div className="flex flex-col w-full space-y-1 5">
              <span className="px-0.5">Last name</span>
              <input placeholder="e.g Banda" className="w-full h-8 px-2 font-medium outline-0 bg-[#F9F8F7]/80 border border-[#E7E7E7] rounded-[0.45rem]" type="text" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1 max-sm:gap-6">
            <div className="flex flex-col w-full space-y-1 5">
              <span className="px-0.5">Email</span>
              <input placeholder="e.g  john.b@gmail.com" className="w-full h-8 px-2 font-medium outline-0 bg-[#F9F8F7]/80 border border-[#E7E7E7] rounded-[0.45rem]" type="text" />
            </div>

            <div className="flex flex-col w-full space-y-1 5">
              <span  className="px-0.5">Phone</span>
              <input placeholder="e.g  +26588123457" className="w-full h-8 px-2 font-medium outline-0 bg-[#F9F8F7]/80 border border-[#E7E7E7] rounded-[0.45rem]" type="text" />
            </div>
          </div>

           <div className="flex flex-col w-full space-y-1 5">
              <span  className="px-0.5">Subject</span>
              <input placeholder="e.g Your interest" className="w-full h-8 px-2 font-medium outline-0 bg-[#F9F8F7]/80 border border-[#E7E7E7] rounded-[0.45rem]" type="text" />
            </div>


          <div className="flex flex-col w-full space-y-1 5">
              <span  className="px-0.5">Message</span>
              <textarea placeholder="Ask your questions. We're listening..." className="w-full p-2 font-medium outline-0 bg-[#F9F8F7]/80 border border-[#E7E7E7] rounded-[0.45rem] resize-none h-30"  />
            </div>

            <button className="cta w-full h-8">Send message</button>
        </div>
        <div className="flex flex-col gap-10 bg-[#FCFCFC] border border-[#E6E6E6] p-4 py-6 rounded-2xl">
          <div className="flex flex-col gap-2">
            <span className="font-p1 font-semibold">Call us</span>
            <p className="opacity-75 font-normal">
              We’re here to assist you whether it’s answering your questions or
              offering guidance with your purchases. You can reach us by phone:
            </p>
            <ul className="list-disc pl-8 opacity-75">
              <li className="font-normal">Monday to Friday: 9am - 8pm</li>
              <li className="font-normal">Saturday and Sunday: 2pm - 4pm</li>
            </ul>

            <Link
              target="_blank"
              href="tel:+265 888 88 888"
              className="py-1.5 mt-4 text-center flex item-center justify-center w-full border rounded-[0.45rem] bg-white border-[#D9D9D9]"
            >
              <IconPhone
                strokeWidth={1.5}
                className="h-4 w-4 opacity-50 mr-2"
              />
              +265 888 88 888
            </Link>
          </div>

          <span className=" h-px w-full  bg-[#1E1E1E]/5 mx-auto" />

          <div className="flex flex-col gap-2">
            <span className="font-p1">Follow us on socials</span>
            <p className="opacity-75 font-normal">
              We are very active on most of the popular social media apps.
              Follow us so you never miss an update, or contact us there.
            </p>
            <div className="grid grid-cols-2 mt-4  gap-6 max-sm:gap-4">
              <Link
                target="_blank"
                href="tel:+265 888 88 888"
                className="flex item-center"
              >
                <IconPhone
                  strokeWidth={1.5}
                  className="h-4 w-4 opacity-50 mr-2"
                />
                +265 888 88 888
              </Link>

              <Link target="_blank" href="#" className="flex item-center">
                <IconBrandInstagram
                  strokeWidth={1.5}
                  className="h-4 w-4 opacity-50 mr-2"
                />
                g_b_s
              </Link>

              <Link
                target="_blank"
                href="mailto:info@gianbuses.com"
                className="flex item-center"
              >
                <IconMail
                  strokeWidth={1.5}
                  className="h-4 w-4 opacity-50 mr-2"
                />
                info@gianbuses.com
              </Link>

              <Link
                target="_blank"
                href="tel:+265999636873"
                className="flex item-center"
              >
                <IconBrandFacebook
                  strokeWidth={1.5}
                  className="h-4 w-4 opacity-50 mr-2"
                />
                Gian Bus Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
