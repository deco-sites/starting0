import { ImageWidget } from 'apps/admin/widgets.ts';

interface Props {
  /**
   * @title Logo
   * @format image
   */
  logo?: ImageWidget;
  /**
   * @title Navigation Links
   * @format rich-text
   */
  links?: string;
  /**
   * @title Call to Action Text
   * @format rich-text
   */
  ctaText?: string;
  /**
   * @title Call to Action Link
   * @format url
   */
  ctaLink?: string;
  /**
   * @title Background Color
   * @format color-input
   * @default #ffffff
   */
  bgColor?: string;
  /**
   * @title Text Color
   * @format color-input
   * @default #000000
   */
  textColor?: string;
}

export default function Header({
  logo = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  links = "Home|About|Services|Contact",
  ctaText = "Get Started",
  ctaLink = "#",
  bgColor = "#ffffff",
  textColor = "#000000",
}: Props) {
  const linksArray = links.split("|");

  return (
    <header
      class="flex justify-between items-center py-4 px-6 bg-[${bgColor}] text-[${textColor}]"
    >
      <a href="/" class="flex items-center">
        <img src={logo} alt="Logo" class="h-8 mr-2" />
        <span class="font-semibold text-xl">My Website</span>
      </a>
      <nav>
        <ul class="flex space-x-4">
          {linksArray.map((link) => (
            <li key={link}>
              <a href="#" class="hover:text-gray-500">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a
        href={ctaLink}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {ctaText}
      </a>
    </header>
  );
}