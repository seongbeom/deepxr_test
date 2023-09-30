"use client";

import { Button, Modal, Navbar } from "flowbite-react";
import { Link } from "@remix-run/react";
// import DeepXrLabLogo from "~/assets/images/deepxrlab-logo.svg";
import Facebook from "~/assets/images/facebook.svg";
import Google from "~/assets/images/google.svg";
import Close from "~/assets/images/close.svg";
import Person from "~/assets/images/person.svg";
import Gallery from "~/assets/images/gallery.svg";
import DeepXrLabLogoBlack from "~/assets/images/deepxrlab-logo-black.svg";
import DeepXrLabLogoSmallBlack from "~/assets/images/deepxrlab-logo-small-black.svg";
import React, { useState } from "react";
import { ArrowRightToBracket } from "~/components/icons/flowbite/ArrowRightToBracket";
import { ChevronRight } from "~/components/icons/flowbite/ChevronRight";

export default function Header() {
  // const location = useLocation();
  // const { pathname, search, hash } = location;
  // const isTransparent = pathname === "/";

  const [openLoginModal, setOpenLoginModal] = useState<string | undefined>();
  const [openLogoutModal, setOpenLogoutModal] = useState<string | undefined>();

  return (
    <Navbar
      fluid
      rounded
      className="py-6 px-4"
    >
      <div className="flex container lg:px-20 items-center flex-wrap items-center justify-between mx-auto">
        <Navbar.Brand href="/">
          <img
            alt="DeepXrLab Logo"
            className="mr-3 h-6 sm:h-9 hidden lg:block"
            src={DeepXrLabLogoBlack}
          />
          <img
            alt="DeepXrLab Logo"
            className="mr-3 h-6 sm:h-9 lg:hidden"
            src={DeepXrLabLogoSmallBlack}
          />
        </Navbar.Brand>
        <div className="flex md:order-2 items-center">
          <Button className="bg-xr-primary rounded-full" onClick={() => setOpenLoginModal("dismissible")}>
            <span className="md:text-xs lg:text-base">SIGN-IN / SIGN-UP</span>
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" className="md:text-xs lg:text-base">
            PRODUCT
          </Navbar.Link>
          <Navbar.Link href="#" className="md:text-xs lg:text-base">
            BLOG
          </Navbar.Link>
          <Navbar.Link href="#" className="md:text-xs lg:text-base">
            PRICING
          </Navbar.Link>
        </Navbar.Collapse>
      </div>
      {/* Login */}
      <Modal dismissible show={openLoginModal === "dismissible"} onClose={() => setOpenLoginModal(undefined)}>
        <Modal.Body>
          <div className={"flex flex-col p-6 relative"}>
            <button onClick={() => setOpenLoginModal(undefined)}>
              <img src={Close} className={"absolute top-0 right-0 w-4 h-4"} />
            </button>
            <div className={"text-[36px] text-center mb-2 font-semibold"}>Welcome</div>
            <div className={"font-heavitas text-[36px] text-center mb-6"}>MY MINI PET</div>
            <Button className={"bg-xr-primary text-white mb-4 flex items-center"} onClick={() => {
              setOpenLoginModal(undefined);
              setOpenLogoutModal("dismissible");
            }}>
              <img src={Google} className={"mr-2"} />
              SIGN IN WITH GOOGLE</Button>
            <Button className={"bg-xr-primary text-white mb-4 flex items-center"}>
              <img src={Facebook} className={"mr-2"} />
              LOGIN TO YOUR ACCOUNT
            </Button>
            <p className="">By clicking Continue with Google or facebook you agree to the DeepXRLab <Link to={"#"}
                                                                                                          className={"text-xr-primary underline"}>TOS
              and Privacy Policy.</Link></p>
          </div>
        </Modal.Body>
      </Modal>

      {/* Logout */}
      <Modal dismissible show={openLogoutModal === "dismissible"} onClose={() => setOpenLogoutModal(undefined)}>
        <Modal.Body>
          <div className={"flex flex-col p-6 relative"}>
            <button onClick={() => setOpenLogoutModal(undefined)}>
              <img src={Close} className={"absolute top-0 right-0 w-4 h-4"} />
            </button>
            <img src={Person} className={"w-20 h-20 rounded-full mx-auto mb-2"} />
            <div className={"text-[24px] text-center font-semibold"}>Google Nickname</div>
            <div className={"text-center"}>google@gmail.com</div>

            <div className={"my-4"}>
              <Link to={"/my-gallery"} onClick={() => {
                setOpenLogoutModal(undefined);
              }} className={"font-semibold mb-4 flex items-center"}>
                <img src={Gallery} className={"mr-2"} />
                Go to My Gallery
                <ChevronRight className={"w-4 h-4 ml-auto"} />
              </Link>
              <Link to={"/user-gallery"} onClick={() => {
                setOpenLogoutModal(undefined);
              }} className={"font-semibold mb-4 flex items-center"}>
                <img src={Gallery} className={"mr-2"} />
                Go to User Gallery
                <ChevronRight className={"w-4 h-4 ml-auto"} />
              </Link>
            </div>

            <Button className={"bg-xr-primary text-xr-white"} onClick={() => setOpenLogoutModal(undefined)}>
              <div className={"flex items-center"}>
                <p>
                  LOGOUT
                </p>
                <ArrowRightToBracket className={"w-4 h-4 ml-2"} />
              </div>
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </Navbar>

  );
}


