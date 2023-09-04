'use client';

import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "@remix-run/react";
export default function Jumbotron() {
  return (
    <section
      className="bg-center bg-no-repeat bg-jumbotron bg-gray-600 bg-blend-multiply bg-cover">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">펫
          AI 합성 Deep Toy</h1>
        <p className="mb-8 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 lg:px-48">딥엑스알랩 프로덕트의 주요 포인트딥엑스알랩
          프로덕트의 주요 포인트</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          {/*<a href="#"*/}
          {/*   className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900">*/}
          {/*  Get started*/}
          {/*  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"*/}
          {/*       viewBox="0 0 14 10">*/}
          {/*    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"*/}
          {/*          d="M1 5h12m0 0L9 1m4 4L9 9" />*/}
          {/*  </svg>*/}
          {/*</a>*/}
          <Button color="primary" size="lg" as={Link} to="/face">
            <p>
              Get started
            </p>
            <span className="ml-2 inline-flex items-center justify-center">
              <HiOutlineArrowRight className="w-5 h-5" />
            </span>

          </Button>
          <a href="#"
             className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
            Learn more
          </a>
        </div>
      </div>
    </section>
  )
}


