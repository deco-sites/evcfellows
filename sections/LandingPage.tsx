import Image from "apps/website/components/Image.tsx";
import { useScript } from "@deco/deco/hooks";
import Icon from "$store/components/ui/Icon.tsx";

/** @title {{{text}}} */
export interface Option {
  text: string;
}

/** @title {{{text}}} */
export interface Button {
  text: string;
  url: string;
}

export interface LandingPageProps {
  /* Section 1 */
  section_1: {
    title: string;
    subtitle: string;
    text: string;
    button: Button;
  };

  /* Section 2 */
  section_2: {
    title: string;
    button: Button;
    option: Option[];
  };

  /* Section 3 */
  section_3: {
    title: string;
    subtitle: string;
    button: Button;
    option: Option[];
  };

  /* Section 4 */
  section_4: {
    title: string;
    /** @title text */
    option: Option[];
    button: Button;
  };

  /* Section 5 */
  section_5: {
    title: string;
  };

  /* Socials */
  socials: {
    email: string;
    linkedin: string;
    instagram: string;
  };
}

export default function LandingPage({
  section_1,
  section_2,
  section_3,
  section_4,
  section_5,
  socials,
}: LandingPageProps) {
  const loadScript = () => {
    const script = document.createElement("script");
    script.src = "/js/effects.js";
    script.async = true;
    document.body.appendChild(script);
  };

  return (
    <>
      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: useScript(loadScript) }}
      />

      <section id="landing-page" class="is-ready">
        <div class="site-wrapper">
          <div class="site-main">
            <div class="inner">
              <div
                id="image01"
                class="image-component instance-1 style-1"
                data-position="center"
              >
                <span class="frame">
                  <Image
                    src="https://assets.decocache.com/evcfellows/feddaa47-851d-457c-9107-1903d84729b3/logo-evc.png"
                    alt=""
                    width={289}
                    height={80}
                  />
                </span>
              </div>

              <hr
                id="divider01"
                class="divider-component instance-1 style-1 full screen"
              />

              <div
                id="container02"
                class="container-component instance-2 style-1 columns"
                style="opacity: 0;"
              >
                <div class="wrapper">
                  <div class="inner" data-onvisible-trigger="1">
                    <div>
                      <h2 id="text04" class="text-component instance-4 style-1">
                        {section_1.title.split(" ").map((char, i) => (
                          <>
                            <text-node
                              key={i}
                              style="opacity: 0; transform: translateY(0.375rem);"
                            >
                              {char}
                            </text-node>
                            {" "}
                          </>
                        ))}
                      </h2>
                      <ul
                        id="buttons04"
                        class="buttons-component instance-4 style-1"
                        style="opacity: 0; transform: translateY(0.375rem);"
                      >
                        <li>
                          <a
                            href={section_1.button.url}
                            class="n01"
                            role="button"
                            target="_blank"
                          >
                            {section_1.button.text}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3
                        id="text03"
                        class="text-component instance-3 style-2"
                        style="opacity: 0; transform: translateX(0.375rem);"
                      >
                        {section_1.subtitle}
                      </h3>
                      <p
                        id="text12"
                        class="text-component instance-12 style-3"
                        style="opacity: 0; transform: translateX(0.375rem);"
                      >
                        {section_1.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="container01"
                class="container-component instance-1 style-2 default full screen"
              >
                <div class="wrapper">
                  <div class="inner" data-onvisible-trigger="1">
                    <h2 id="text01" class="text-component instance-1 style-5">
                      {section_2.title.split(" ").map((char, i) => (
                        <>
                          <text-node
                            key={i}
                            style="opacity: 0; transform: translateY(0.375rem);"
                          >
                            {char}
                          </text-node>
                          {" "}
                        </>
                      ))}
                    </h2>
                    <p
                      id="text13"
                      class="text-component instance-13 style-4"
                      style="opacity: 0; transform: translateX(0.375rem);"
                    >
                      <span class="p">
                        {section_2.option.map((item) => (
                          <>
                            {item.text}
                            <br />
                          </>
                        ))}
                      </span>
                    </p>
                    <ul
                      id="buttons05"
                      class="buttons-component instance-5 style-2"
                      style="opacity: 0; transform: translateY(0.375rem);"
                    >
                      <li>
                        <a
                          href={section_2.button.url}
                          class="n01"
                          role="button"
                          target="_blank"
                        >
                          {section_2.button.text}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                id="container03"
                class="container-component instance-3 style-1 columns"
                style="opacity: 1;"
              >
                <div class="wrapper">
                  <div
                    class="inner"
                    data-onvisible-trigger="1"
                    data-reorder="1,0"
                  >
                    <div>
                      <h3
                        id="text09"
                        class="text-component instance-9 style-2"
                        style="opacity: 1; transform: none;"
                      >
                        {section_3.subtitle}
                      </h3>
                      <p
                        id="text08"
                        class="text-component instance-8 style-3"
                        style="opacity: 1; transform: none;"
                      >
                        <span class="p">
                          {section_3.option.map((item) => (
                            <>
                              {item.text}
                              <br />
                            </>
                          ))}
                        </span>
                      </p>
                    </div>
                    <div>
                      <h2 id="text06" class="text-component instance-6 style-1">
                        {section_3.title.split(" ").map((char, i) => (
                          <>
                            <text-node
                              key={i}
                              style="opacity: 0; transform: translateY(0.375rem);"
                            >
                              {char}
                            </text-node>
                            {" "}
                          </>
                        ))}
                      </h2>
                      <ul
                        id="buttons03"
                        class="buttons-component instance-3 style-1"
                        style="opacity: 1; transform: none;"
                      >
                        <li>
                          <a
                            href={section_3.button.url}
                            class="n01"
                            role="button"
                            target="_blank"
                          >
                            {section_3.button.text}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="container05"
                class="container-component instance-5 style-2 default full screen"
              >
                <div class="wrapper">
                  <div class="inner" data-onvisible-trigger="1">
                    <p id="text02" class="text-component instance-2 style-5">
                      {section_4.title.split(" ").map((char, i) => (
                        <>
                          <text-node
                            key={i}
                            style="opacity: 0; transform: translateY(0.375rem);"
                          >
                            {char}
                          </text-node>
                          {" "}
                        </>
                      ))}
                    </p>
                    <h2
                      id="text10"
                      class="text-component instance-10 style-4"
                      style="opacity: 1; transform: none;"
                    >
                      <span class="p">
                        {section_4.option.map((item) => (
                          <>
                            {item.text}
                            <br />
                          </>
                        ))}
                      </span>
                    </h2>
                    <ul
                      id="buttons02"
                      class="buttons-component instance-2 style-2"
                      style="opacity: 1; transform: none;"
                    >
                      <li>
                        <a
                          href={section_4.button.url}
                          class="n01"
                          role="button"
                          target="_blank"
                        >
                          {section_4.button.text}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                id="container04"
                class="container-component instance-4 style-1 columns"
                style="opacity: 1;"
              >
                <div class="wrapper">
                  <div class="inner" data-onvisible-trigger="1">
                    <div>
                      <h2 id="text07" class="text-component instance-7 style-1">
                        {section_5.title.split(" ").map((char, i) => (
                          <>
                            <text-node
                              key={i}
                              style="opacity: 0; transform: translateY(0.375rem);"
                            >
                              {char}
                            </text-node>
                            {" "}
                          </>
                        ))}
                      </h2>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>

              <hr
                id="divider02"
                class="divider-component instance-2 style-1 full screen"
              />

              <ul id="icons01" class="icons-component instance-1 style-1">
                <li style="opacity: 1; transform: none;">
                  <a
                    class="n01"
                    href={`mailto:${socials.email}`}
                    target="_blank"
                    role="button"
                  >
                    <Icon id="Email" size={28} />
                    <span class="label">Email</span>
                  </a>
                </li>
                <li style="opacity: 1; transform: none;">
                  <a
                    class="n02"
                    href={socials.linkedin}
                    target="_blank"
                    role="button"
                  >
                    <Icon id="Linkedin" size={28} />
                    <span class="label">LinkedIn</span>
                  </a>
                </li>
                <li style="opacity: 1; transform: none;">
                  <a
                    class="n03"
                    href={socials.instagram}
                    role="button"
                    target="_blank"
                  >
                    <Icon id="Instagram" size={28} />
                    <span class="label">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
