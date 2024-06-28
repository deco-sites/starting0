import { ImageWidget } from 'apps/admin/widgets.ts';

interface Props {
  /**
   * @title Timeline Items
   * @format rich-text
   */
  items?: string;
}

export default function Timeline({ items = `1984 ✅|First Macintosh computer
1998 ✅|iMac
2001 ✅|iPod
2007 ✅|iPhone
2015 ✅|Apple Watch` }: Props) {
  const itemsArray = items.split('\n');

  return (
    <div class="flex flex-col md:flex-row md:justify-center md:items-start md:space-x-8">
      {itemsArray.map((item, index) => {
        const [year, description] = item.split('|');
        const isChecked = year.includes('✅');

        return (
          <div key={index} class="flex items-center mb-4 md:mb-0">
            <div class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 mr-4">
              {isChecked ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <div>
              <h3 class="text-lg font-semibold">{year.replace('✅', '')}</h3>
              <p class="text-gray-600">{description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}