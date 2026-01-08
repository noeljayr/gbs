
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import Link from "next/link";

function page() {
  return (
    <div className="flex flex-col pt-36 pb-10 px-10 min-[1440px]:px-[14vw] max-sm:px-4">
      <div className="flex flex-col">
        <h3>Contact us</h3>
        <p className="opacity-75 w-[54ch] max-sm:w-[65%]">
          Call us or chat with our support chat bot. We reply instantly do not
          hesitate.
        </p>
      </div>

      <div className="w-full grid gap-10 mt-10 grid-cols-2 max-sm:flex max-sm:flex-col">
        <div className="flex flex-col gap-10">
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
              href="tel:+265999636873"
              className="py-1.5 mt-4 text-center flex item-center justify-center w-full border rounded-[0.45rem] bg-white border-[#D9D9D9]"
            >
              <IconPhone
                strokeWidth={1.5}
                className="h-4 w-4 opacity-50 mr-2"
              />
              +265999636873
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
                href="tel:+265999636873"
                className="flex item-center"
              >
                <IconPhone
                  strokeWidth={1.5}
                  className="h-4 w-4 opacity-50 mr-2"
                />
                +265999636873
              </Link>

              <Link target="_blank" href="#" className="flex item-center">
                <IconBrandInstagram
                  strokeWidth={1.5}
                  className="h-4 w-4 opacity-50 mr-2"
                />
                otowa.ai
              </Link>

              <Link
                target="_blank"
                href="tel:+265999636873"
                className="flex item-center"
              >
                <IconMail
                  strokeWidth={1.5}
                  className="h-4 w-4 opacity-50 mr-2"
                />
                sales@otowa.ai
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
                otowa.ai
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
