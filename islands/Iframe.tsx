import { useSignal } from "@preact/signals";

interface Props {
  url: string;
}

function Iframe({ url }: Props) {
  const loading = useSignal(true);

  const handleIframeLoad = () => {
    loading.value = false;
  };

  return (
    <div className="iframe-wrapper">
      {
        /* {loading.value && (
        <span className="loading loading-spinner loading-lg text-blue-700"></span>
      )} */
      }
      <iframe
        src={url}
        class="w-full h-screen"
        frameborder="0"
      >
      </iframe>
    </div>
  );
}

export default Iframe;
