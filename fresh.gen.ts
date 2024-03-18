// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_app from "./routes/_app.tsx";
import * as $Contact from "./islands/Contact.tsx";
import * as $Header from "./islands/Header.tsx";
import * as $SliderJS from "./islands/SliderJS.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_app.tsx": $_app,
  },
  islands: {
    "./islands/Contact.tsx": $Contact,
    "./islands/Header.tsx": $Header,
    "./islands/SliderJS.tsx": $SliderJS,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
