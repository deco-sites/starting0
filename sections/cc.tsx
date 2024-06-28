import { HTMLWidget } from 'apps/admin/widgets.ts';

interface Props {
  /**
   * @format rich-text
   * @description The main title for the hero section
   */
  title?: string;
  /**
   * @format rich-text
   * @description The subtitle or description for the hero section
   */
  subtitle?: string;
  /**
   * @format color-input
   * @description The background color for the hero section
   */
  backgroundColor?: string;
  /**
   * @format color-input
   * @description The text color for the hero section
   */
  textColor?: string;
  /**
   * @description The HTML content for the hero section
   */
  content?: HTMLWidget;
}

export default function HeroSection({
  title = "Welcome to Our Website",
  subtitle = "Discover the best products and services",
  backgroundColor = "#f3e8ff",
  textColor = "#4c1d95",
  content,
}: Props) {
  return (
    <div
      class="bg-cover bg-center py-24 px-8 text-center"
      style={{ backgroundColor, color: textColor }}
    >
      <h1 class="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
      <p class="text-lg md:text-2xl mb-8">{subtitle}</p>
      {content?.html}
    </div>
  );
}