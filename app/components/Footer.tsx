"use client";

import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <div className={"bg-footer bg-cover bg-center py-10 px-6 lg:py-[90px]"}>
      <div className={"container lg:px-20 mx-auto flex flex-col"}>
        <ul className={"text-xr-white grid grid-cols-1 lg:grid-cols-2"}>
          <li className={'text-[16px] font-semibold my-6'}>
            <Link to={"/"}>
              ABOUT
              <p className={'text-[14px] font-light'}>Connect with third-party tools that</p>
            </Link>
          </li>
          <li className={'text-[16px] font-semibold my-6'}>
            <Link to={"/"}>
              FAQ
              <p className={'text-[14px] font-light'}>Connect with third-party tools that</p>
            </Link>
          </li>
          <li className={'text-[16px] font-semibold my-6'}>
            <Link to={"/"}>
              PRIVACY
              <p className={'text-[14px] font-light'}>Connect with third-party tools that</p>
            </Link>
          </li>
          <li className={'text-[16px] font-semibold my-6'}>
            <Link to={"/"}>
              TERMS
              <p className={'text-[14px] font-light'}>Connect with third-party tools that</p>
            </Link>
          </li>
          <li className={'text-[16px] font-semibold my-6'}>
            <Link to={"/"}>
              CONTACT
              <p className={'text-[14px] font-light'}>Connect with third-party tools that</p>
            </Link>
          </li>
        </ul>
        <div className={'mt-5'}>2023 DeepXRLab, Inc. All Rights Reserved.</div>
      </div>
    </div>
  );
}


