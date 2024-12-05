import { type BlogPost, BlogPostPage } from "apps/blog/types.ts";
import Image from "apps/website/components/Image.tsx";
import PageNotFound from "site/components/PageNotFount.tsx";
import { IImage } from "site/sections/Blog.tsx";

interface Props {
  /**
   * @description The description of name.
   */
  page?: BlogPostPage | null;
  /**@title Esconder data */
  hideDate?: boolean;
  topImage: IImage;
  linkedinIcon: IImage;
  twitterIcon: IImage;
  link: string;
  linkText: string;
}

const PARAGRAPH_STYLES = "[&_p]:leading-[150%] [&_*]:mb-4 text-base";
const HEADING_STYLES =
  "[&>h1]:text-4xl [&>h1]:my-6 [&>h1]:font-bold [&>h2]:text-3xl [&>h2]:my-6 [&>h2]:font-bold [&>h3]:text-2xl [&>h3]:my-6 [&>h3]:font-bold [&>h4]:text-xl [&>h4]:my-6 [&>h4]:font-bold [&>h5]:text-lg [&>h5]:my-6 [&>h5]:font-bold [&>h6]:text-base [&>h6]:my-6 [&>h6]:font-bold";
const CODE_BLOCK_STYLES =
  "[&>pre]:bg-gray-100 [&>pre]:text-gray-800 [&>pre]:p-4 [&>pre]:font-mono [&>pre]:text-sm [&>pre]:border [&>pre]:rounded-md [&>pre]:overflow-x-auto [&>code]:block [&>code]:w-full";
const IMAGE_STYLES = "[&_img]:rounded-2xl [&_img]:w-full [&_img]:my-12";
const BLOCKQUOTE_STYLES =
  "[&>blockquote]:my-6 [&>blockquote]:border-l-2 [&>blockquote]:border-black [&>blockquote]:text-xl [&>blockquote]:italic [&>blockquote]:pl-6";

const CONTENT_STYLES = `max-w-3xl max-w-[1060px] px-12 mx-auto ${PARAGRAPH_STYLES} ${HEADING_STYLES} ${CODE_BLOCK_STYLES} ${IMAGE_STYLES} ${BLOCKQUOTE_STYLES}`;

const DEFAULT_AVATAR =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e";

const DEFAULT_PROPS: BlogPost = {
  title: "Blog title heading will go here",
  excerpt: "",
  authors: [
    {
      name: "Full name",
      email: "author@deco.cx",
      avatar: DEFAULT_AVATAR,
    },
  ],
  categories: [],
  date: "2022-01-01",
  image:
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9",
  slug: "blog-post",
  content:
    '<h1>Heading 1</h1><p>This is a paragraph under <strong>Heading 1</strong>. It can contain <em>italic</em> text, <strong>bold</strong> text, and even <code>code snippets</code>.</p><h2>Introduction</h2><p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p><p>Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.</p><h2>Heading 2</h2><p>More text can be placed here. This section is under <strong>Heading 2</strong>.</p><h3>Heading 3 with Code Block</h3><p>This is an example of a code block:</p><pre><code>// This is a code block console.log("Hello, World!");</code></pre><h4>Heading 4 with Image</h4><p>Below is an image:</p><img src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9" alt="Description of Image"><p><strong>Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.</strong></p><p>Collaboratively deploy intuitive partnerships whereas customized e-markets. Energistically maintain performance based strategic theme areas whereas just in time methodologies. Phosfluorescently drive functionalized intellectual capital and.</p><blockquote>"Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus."</blockquote><p>Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.<h2>Conclusion</h2><p>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p><p>Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.</p><p>Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.</p>',
};

export default function BlogPost({
  hideDate,
  page,
  topImage,
  link,
  linkedinIcon,
  twitterIcon,
  linkText,
}: Props) {
  const { title, authors, image, date, content } = page?.post || DEFAULT_PROPS;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  if (page?.post == null) return <PageNotFound />;
  return (
    <div className="w-full flex flex-col gap-20 container mx-auto px-4 md:px-0 py-12 lg:py-28 max-w-[1136px]">
      <div className="relative"></div>
      <div className="flex flex-wrap lg:flex-nowrap flex-row gap-12 lg:mx-auto">
        <Image
          className="lg:w-[425px] w-full"
          width={500}
          src={image || ""}
          height={416}
        />
        <div className="flex-col">
          <div className="flex gap-2 items-center">
            <div className="text-xs font-medium">
              {
                page.post.extraProps?.find(
                  (prop) => prop.key === "respondentsBurden"
                )?.value
              }
            </div>
            <p className={`${hideDate && "hidden"} text-xs font-medium`}>
              {formattedDate}
            </p>
          </div>
          <h1 className="text-[28px] lg:text-[40px] mt-12">{title}</h1>
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <p className="font-light mt-10 text-base">
                {"By " +
                  authors
                    ?.filter((author) => author?.name)
                    .map((author) => author.name)
                    .join(", ") +
                  ", " +
                  page.post.authors[0].company +
                  " " +
                  page.post.authors[0].jobTitle}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class={CONTENT_STYLES}
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      ></div>
      <div className="flex justify-center">
        <div className="flex justify-between max-w-[964px] flex-grow">
          <div className=" flex flex-row">
            {linkedinIcon?.src && (
              <a
                href={
                  page.post.extraProps?.find((prop) => prop.key === "linkedin")
                    ?.value
                }
              >
                <Image
                  src={linkedinIcon.src}
                  width={linkedinIcon.width || 100}
                  height={linkedinIcon.height}
                  alt={linkedinIcon.alt}
                />{" "}
              </a>
            )}
            <a
              href={
                page.post.extraProps?.find((prop) => prop.key === "twitter")
                  ?.value
              }
            >
              {" "}
              <Image
                src={twitterIcon.src}
                width={twitterIcon.width || 100}
                height={twitterIcon.height}
                alt={twitterIcon.alt}
              />{" "}
            </a>
          </div>
          <a className="text-sm" href={link}>
            {linkText}
          </a>
        </div>
      </div>
    </div>
  );
}
