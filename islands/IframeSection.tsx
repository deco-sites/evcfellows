import { useSignal } from "@preact/signals";
import { Device } from "apps/website/matchers/device.ts";

export interface Props {
  title?: string;
  /** @format html */
  description?: string;
  iframeUrl: string;
  height?: number;
  display?: "desktop" | "mobile" | "both";
  /** @hide true */
  device?: Device;
}

export default function IframeSection(
  {
    title,
    description,
    iframeUrl,
    height,
    display = "both",
    device,
  }: Props,
) {
  const loading = useSignal(true);

  function handleLoad() {
    loading.value = false;
  }

  if (
    (device === "desktop" && display === "mobile") ||
    (device === "mobile" && display === "desktop")
  ) {
    return null;
  }

  return (
    <section class="px-3 lg:px-32 bg-[#F1F1F1]">
      <div class="container py-8 w-full flex flex-col items-center justify-center text-[#3D3D3D] gap-7">
        <h1 class="font-galano font-extrabold text-3xl lg:text-4xl text-center">
          {title}
        </h1>

        {description && (
          <div
            class="text-[#3D3D3D] list-disc w-[400px] flex justify-center font-roboto font-normal mb-4"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}

        <div class="w-full rounded-lg drop-shadow-lg overflow-hidden">
          {loading.value && (
            <div class="w-full h-[500px] flex items-center justify-center">
              <span className="loading loading-bars loading-lg text-blue-500">
              </span>
            </div>
          )}
          <iframe
            src={iframeUrl}
            onLoad={handleLoad}
            preload="true"
            class={`w-full ${height ? "h-[" + height + "vh]" : "h-screen"} ${
              loading.value ? "hidden" : ""
            }`}
            frameborder="0"
          >
          </iframe>
        </div>
      </div>
    </section>
  );
}
