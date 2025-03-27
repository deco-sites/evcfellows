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
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4600/2aed496f-8a37-4414-868b-eea522083eed",
      desktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4600/e06d024c-6033-4553-aeb6-3998b49ac8d5",
      heightMobile: 456,
    },
    backgroundImage: {
      mobile:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4600/59282c4f-d719-482d-b3b9-46bebfe53963",
      desktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4600/ff135d8f-5913-4ba8-a5d3-43e73563685e",
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
                <style>
                  {`#mc_embed_signup {
          background: #fff;
          clear: left;
          font: 14px Helvetica, Arial, sans-serif;
          width: 600px;
        }`}
                </style>
                <div id="mc_embed_signup">
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
                          class="required email"
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
                            class="button"
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
                          src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
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
