import { ImageWidget } from 'apps/admin/widgets.ts';

interface HomeSaleProps {
  /**
   * @format text
   */
  headline?: string;

  /**
   * @widget ImageWidget
   */
  image?: ImageWidget;

  /**
   * @format text
   */
  inputLabel?: string;

  /**
   * @format text
   */
  ctaText?: string;

  /**
   * @format text
   */
  ctaPhone?: string;
}

function teste(n1, n2) {
  return n1 + n2
}

export default function HomeSale({
  headline = 'Sell your home fast for the best price',
  image = 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10521/b8a01b19-763a-411a-9f07-93fac981d9d9',
  inputLabel = 'Enter your street address',
  ctaText = 'GET OFFER',
  ctaPhone = 'Or call 800-214-4426',
}: HomeSaleProps) {
  return (
    <div class="flex flex-col items-center justify-center p-4 bg-white">
      <h2 class="mb-2 text-2xl font-bold text-center text-gray-800">{headline}</h2>
      <img src={image} alt="House illustration" class="mb-6 w-full max-w-lg rounded-lg shadow-lg" />
      <div class="mb-6 w-full max-w-md">
        <input type="text" placeholder={inputLabel} class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
      </div>
      <button class="mb-4 px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline">
        {ctaText}
      </button>
      <p class="text-sm text-red-500">{ctaPhone}</p>
    </div>
  );
}