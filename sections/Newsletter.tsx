import { Head } from "$fresh/runtime.ts";
import { useScript } from "@deco/deco/hooks";
import BannerUI from "site/components/ui/Banner.tsx";

export default function Newsletter() {
  const loadScript = () => {
    const script = document.createElement("script");
    script.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    script.async = true;
    document.body.appendChild(script);
  };

  const image = {
    image: {
      mobile:
        "https://decoims.com/evcfellows/d331174c-cf9d-4adb-aeab-c927ae5beee2/55ff44e232ca674b.png",
      desktop:
        "https://decoims.com/evcfellows/1a184337-97ba-435a-ba91-c702b66add70/f3f98a70c5626e52.png",
      heightMobile: 456,
    },
    backgroundImage: {
      mobile:
        "https://decoims.com/evcfellows/662033b2-51e2-44f2-b7ad-c63cf1943900/453c69a77cc88fc9.png",
      desktop:
        "https://decoims.com/evcfellows/0983f461-72a8-47c2-ab2b-a04203850c10/2a02bf33b97d317d.png",
    },
  };

  return (
    <>
      <Head>
        <link
          href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>

      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: useScript(loadScript) }}
      >
      </script>

      <section>
        <div class="relative flex justify-center bg-[#1E1E1E] min-h-[500px] max-h-[500px] h-[500px]">
          <BannerUI banner={image} />

          <div class="absolute w-full flex flex-col items-center md:top-9 lg:top-14 px-4 py-2">
            <h2 class="font-galano text-center font-extrabold text-[32px] md:text-4xl lg:text-5xl text-[#D9D9D9] sm:mb-6 lg:mb-12 sm:mt-6">
              EVCF News – Acompanhe as Novidades do Ecossistema
            </h2>

            <div class="w-full">
              <div
                id="mc_embed_shell"
                class="flex items-center justify-center py-4"
              >
                <div id="mc_embed_signup" class="bg-white clear-left text-sm w-[600px] rounded-[10px]">
                  <form
                    action="https://emergingvcfellows.us8.list-manage.com/subscribe/post?u=8c991a6b91e52ff3336aa1f8c&amp;id=9279b6471c&amp;f_id=00bac1e2f0"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    class="validate"
                    target="_blank"
                  >
                    <div id="mc_embed_signup_scroll">
                      <div class="indicates-required">
                        <span class="asterisk">*</span> indica obrigatório
                      </div>
                      <div class="mc-field-group">
                        <label htmlFor="mce-EMAIL">
                          Endereço de e-mail <span class="asterisk">*</span>
                        </label>
                        <input
                          type="email"
                          name="EMAIL"
                          class="required email rounded-[10px]"
                          id="mce-EMAIL"
                          required
                        />
                      </div>
                      <div id="mce-responses" class="clear foot">
                        <div
                          class="response"
                          id="mce-error-response"
                          style={{ display: "none" }}
                        >
                        </div>
                        <div
                          class="response"
                          id="mce-success-response"
                          style={{ display: "none" }}
                        >
                        </div>
                      </div>
                      <div
                        aria-hidden="true"
                        style={{ position: "absolute", left: "-5000px" }}
                      >
                        <input
                          type="text"
                          name="b_8c991a6b91e52ff3336aa1f8c_9279b6471c"
                          tabIndex={-1}
                          defaultValue=""
                        />
                      </div>
                      <div class="optionalParent">
                        <div class="clear foot">
                          <input
                            type="submit"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                            class="button px-8 py-4 w-full h-[66px] bg-gradient-to-r from-blue-900 to-sky-400 rounded-[10px] text-lg text-white hover:opacity-90 transition cursor-pointer flex items-center justify-center font-bold"
                            value="Inscreva-se"
                          />
                          {
                            /* <p style={{ margin: "0px auto" }}>
                    <a
                      href="http://eepurl.com/i19BFs"
                      title="Mailchimp - marketing por e-mail fácil e divertido"
                    >
                      <span
                        style={{
                          display: "inline-block",
                          backgroundColor: "transparent",
                          borderRadius: "4px",
                        }}
                      >
                        <img
                          class="refferal_badge"
                          src="https://decoims.com/evcfellows/56c66f9f-a512-4cb9-b690-0f088fdb2fc1/847bb4d5d3c77187.svg"
                          alt="Intuit Mailchimp"
                          style={{
                            width: "220px",
                            height: "40px",
                            display: "flex",
                            padding: "2px 0px",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        />
                      </span>
                    </a>
                  </p> */
                          }
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
