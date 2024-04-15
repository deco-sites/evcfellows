import { useSignal } from "@preact/signals";

interface Props {
  iframeUrl: string;
}

function Iframe({ iframeUrl }: Props) {
  const loading = useSignal(true);

  function handleLoad() {
    loading.value = false;
  }

  return (
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
        class={`w-full h-[60vh] ${loading.value ? "hidden" : ""}`}
        frameborder="0"
      >
      </iframe>
    </div>
  );
}

export default Iframe;
