import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

import stylesheet from "~/tailwind.css";
import Header from "~/components/Header";
import { CustomFlowbiteTheme, Flowbite } from "flowbite-react";
import Footer from "~/components/Footer";

const customTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      "primary": "text-white dark:text-black bg-green-700 border border-transparent enabled:hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-gray-200 dark:enabled:hover:bg-gray-300 dark:focus:ring-gray-300"
    },
  }
};


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : [])
];

export default function App() {
  return (
    <html lang="en" className="h-full">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link href="https://fonts.cdnfonts.com/css/heavitas" rel="stylesheet" />
      <Meta />
      <Links />
    </head>
    <body className="h-full">

    <Flowbite theme={{ theme: customTheme }}>
      <div className="bg-white overflow-x-hidden">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Flowbite>

    <ScrollRestoration />
    <Scripts />
    <LiveReload />
    </body>
    </html>
  );
}
