import { ImageWidget } from "apps/admin/widgets.ts";

interface PromoProps {
  /**
   * @description The main title text displayed in the promo.
   * @format text
   */
  title?: string;

  /**
   * @description The description text displayed below the title.
   * @format textarea
   */
  description?: string;

  /**
   * @description The background image for the promo.
   * @widget ImageWidget
   */
  backgroundImage?: ImageWidget;

  /**
   * @description The text displayed on the call-to-action button.
   * @format text
   */
  ctaText?: string;

  /**
   * @description The testimonials to display in the promo.
   */
  testimonials?: {
    /**
     * @format text
     */
    text?: string;
    /**
     * @format text
     */
    author?: string;
    /**
     * @format text
     */
    location?: string;
  }[];
}

export default function Promo({
  title = "Get 25 off during our one-time sale",
  description =
    "Most of our products are limited releases that won't come back. Get your favorite items while they're in stock.",
  backgroundImage =
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/6fe9404a-f69c-472a-b521-78f6c1f87326",
  ctaText = "Get access to our one-time sale",
  testimonials = [
    {
      text:
        "My order arrived super quickly. The product is even better than I hoped it would be. Very happy customer over here!",
      author: "Sarah Peters",
      location: "New Orleans",
    },
    {
      text:
        "I had to return a purchase that didn't fit. The whole process was so simple that I ended up ordering two new items!",
      author: "Kelly McPherson",
      location: "Chicago",
    },
    {
      text:
        "Now that I'm on holiday for the summer, I'll probably order a few more shirts. It's just so convenient, and I know the quality will always be there.",
      author: "Chris Paul",
      location: "Phoenix",
    },
  ],
}: PromoProps) {
  return (
    <div class="relative">
      <img
        src={backgroundImage}
        alt="Background"
        class="w-full h-auto object-cover object-center opacity-20"
      />
      <div class="absolute inset-0 flex flex-col items-center justify-center text-center p-4 md:p-8">
        <h2 class="text-2xl md:text-4xl font-bold mb-2 md:mb-4">{title}</h2>
        <p class="text-base md:text-xl mb-4 md:mb-8">{description}</p>
        <button class="bg-black text-white py-2 px-4 md:px-6 rounded-md">
          {ctaText}
        </button>
        <div class="mt-8 md:mt-12">
          <h3 class="text-lg md:text-2xl font-bold mb-2 md:mb-4">
            What are people saying?
          </h3>
          <div class="flex flex-col md:flex-row justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                class="card bg-base-200 shadow-xl m-2 md:m-4 max-w-md"
              >
                <div class="card-body">
                  <p class="text-base md:text-lg mb-2">{testimonial.text}</p>
                  <div class="card-actions justify-end">
                    <p class="text-sm md:text-base">
                      {testimonial.author}, {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
