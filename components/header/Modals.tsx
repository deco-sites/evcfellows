import Modal from "deco-sites/evcfellows/components/ui/Modal.tsx";
import { lazy, Suspense } from "preact/compat";

import type { Props as MenuProps } from "deco-sites/evcfellows/components/header/Menu.tsx";
import Loading from "deco-sites/evcfellows/components/ui/Loading.tsx";
import { useUI } from "../../sdk/useUI.ts";

const Menu = lazy(() =>
  import("deco-sites/evcfellows/components/header/Menu.tsx")
);

interface Props {
  menu: MenuProps;
}

function Modals({ menu }: Props) {
  const { displayMenu } = useUI();

  return (
    <>
      <Modal
        title="Menu"
        mode="sidebar-left"
        loading="lazy"
        open={displayMenu.value}
        onClose={() => {
          displayMenu.value = false;
        }}
      >
        <Suspense fallback={<Loading />}>
          <Menu {...menu} />
        </Suspense>
      </Modal>
    </>
  );
}

export default Modals;
