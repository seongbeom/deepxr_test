'use client';

import { Button } from "flowbite-react";
import { Link } from "@remix-run/react";
import { ArrowRight } from "~/components/icons/flowbite/ArrowRight";
export default function Jumbotron() {
  return (
    <section
      className="bg-center bg-no-repeat bg-jumbotron bg-gray-300 bg-blend-multiply bg-cover">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">펫
          AI 합성 MY MINI PET</h1>
        <p className="mb-8 text-lg font-normal text-xr-white lg:text-xl sm:px-16 lg:px-48">딥엑스알랩 프로덕트의 주요 포인트딥엑스알랩
          프로덕트의 주요 포인트</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Button className={'bg-xr-primary rounded-full'} size="lg" as={Link} to="/face">
            <p>
              GET STARTED
            </p>
            <span className="ml-2 inline-flex items-center justify-center">
              <ArrowRight className={'text-xr-white w-4 h-4'} />
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}


