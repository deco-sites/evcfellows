import Banner, {
  Banner as IBanner,
} from "deco-sites/evcfellows/components/ui/Banner.tsx";

export interface Props {
  banner: IBanner;
}

function TitleSection(props: Props) {
  return (
    <div>
      <Banner banner={props.banner} />
    </div>
  );
}

export default TitleSection;
