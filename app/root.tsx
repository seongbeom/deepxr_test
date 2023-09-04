import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

import { getUser } from "~/session.server";
import stylesheet from "~/tailwind.css";
import Header from "~/components/Header";
import MegaMenu from "~/components/MegaMenu";
import { CustomFlowbiteTheme, DarkThemeToggle, Flowbite } from "flowbite-react";

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

export const loader = async ({ request }: LoaderArgs) => {
  return json({ user: await getUser(request) });
};

export default function App() {
  return (
    <html lang="en" className="h-full">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <Meta />
      <Links />
    </head>
    <body className="h-full">


    <Flowbite theme={{ theme: customTheme }}>
      <div className="bg-white dark:bg-deepxr-bg-dark">
        <Header />
        <Outlet />
        <MegaMenu />
      </div>
      <DarkThemeToggle />
    </Flowbite>

    <ScrollRestoration />
    <Scripts />
    <LiveReload />
    </body>
    </html>
  );
}
