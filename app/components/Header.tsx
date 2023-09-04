"use client";

import { Button, Navbar } from "flowbite-react";
import { Link } from "@remix-run/react";
import DeepXrLabLogo from "~/assets/images/deepxrlab-logo.svg";
import DeepXrLabLogoDark from "~/assets/images/deepxrlab-logo-dark.svg";

export default function Header() {
  return (
    <Navbar
      fluid
      rounded
      className="py-6"
    >
      <div className="flex container lg:px-20 items-center flex-wrap items-center justify-between mx-auto">
        <Navbar.Brand href="/">
          <img
            alt="DeepXrLab Logo"
            className="mr-3 h-6 sm:h-9 dark:hidden"
            src={DeepXrLabLogo}
          />
          <img
            alt="DeepXrLab Logo"
            className="mr-3 h-6 sm:h-9 hidden dark:block"
            src={DeepXrLabLogoDark}
          />
        </Navbar.Brand>
        <div className="flex md:order-2 items-center">
          <Link to="/" className="mr-4 hidden md:block md:text-xs lg:text-base dark:text-white">
            Log in
          </Link>
          <Button color="primary">
            <span className="md:text-xs lg:text-base">Get started</span>
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" className="md:text-xs lg:text-base dark:text-white">
            Company
          </Navbar.Link>
          <Navbar.Link href="#" className="md:text-xs lg:text-base dark:text-white">
            Product
          </Navbar.Link>
          <Navbar.Link href="#" className="md:text-xs lg:text-base dark:text-white">
            Features
          </Navbar.Link>
          <Navbar.Link href="#" className="md:text-xs lg:text-base dark:text-white">
            Team
          </Navbar.Link>
          <Navbar.Link href="#" className="md:text-xs lg:text-base dark:text-white">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </div>
    </Navbar>

  );
}


