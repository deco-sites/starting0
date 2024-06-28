import { ImageWidget } from 'apps/admin/widgets.ts';

interface Props {
  /**
   * @format rich-text
   */
  title?: string;
  /**
   * @format textarea
   */
  description?: string;
  /**
   * @format color-input
   */
  textColor?: string;
  /**
   * @format color-input
   */
  backgroundColor?: string;
  image?: ImageWidget;
}

export default function StatsBanner({
  title = "My Website Stats",
  description = "Check out the latest stats for my website!",
  textColor = "#ffffff",
  backgroundColor = "#6b21a8",
  image = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
}: Props) {
  return (
    <div
      class="bg-cover bg-center py-12 px-6"
      style={{
        backgroundColor: backgroundColor,
        backgroundImage: `url(${image})`,
      }}
    >
      <div class="bg-opacity-75 rounded-lg p-6">
        <h2
          class="text-4xl md:text-5xl font-bold mb-4 text-center"
          style={{ color: textColor }}
        >
          {title}
        </h2>
        <p class="text-lg md:text-xl text-center" style={{ color: textColor }}>
          {description}
        </p>
      </div>
    </div>
  );
}