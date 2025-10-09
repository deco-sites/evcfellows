import "preact";

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      // deno-lint-ignore no-explicit-any
      "text-node": any;
    }
  }
}

export {};
