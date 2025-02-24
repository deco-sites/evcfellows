export { default } from "site/islands/IframeSection.tsx";
import type { Props } from "site/islands/IframeSection.tsx";
import { AppContext } from "site/apps/site.ts";

export const loader = async (props: Props, _req: Request, ctx: AppContext) => {
  return {
    ...props,
    device: ctx.device,
  }
}