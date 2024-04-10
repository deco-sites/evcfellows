import { useSignal } from "@preact/signals";

export interface Props {
  title?: string;
  iframeUrl: string;
  height?: number;
}

export default function ColumnSection(
  {
    title,
    iframeUrl,
    height,
  }: Props,
) {
  const loading = useSignal(true);

  function handleLoad() {
    loading.value = false;
  }

  return (
    <section class="px-32 bg-[#F1F1F1]">
      <div class="container py-8 w-full flex flex-col items-center justify-center text-[#3D3D3D] gap-7">
        <h1 class="font-galano font-extrabold text-4xl lg:text-5xl text-center">
          {title}
        </h1>

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
