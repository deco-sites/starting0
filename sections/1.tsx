import { ImageWidget } from 'apps/admin/widgets.ts';

interface Props {
  /**
   * @format rich-text
   */
  title?: string;
  /**
   * @format rich-text
   */
  description?: string;
  /**
   * @format rich-text
   */
  events: {
    /**
     * @format rich-text
     */
    year: string;
    /**
     * @format rich-text
     */
    event: string;
    /**
     * @format checkbox
     */
    completed?: boolean;
  }[];
  /**
   * @format color-input
   */
  textColor?: string;
}

export default function Timeline({
  title = "Timeline",
  description = "A timeline of important events",
  events = [
    {
      year: "1984",
      event: "First Macintosh computer",
      completed: true,
    },
    {
      year: "1998",
      event: "iMac",
      completed: true,
    },
    {
      year: "2001",
      event: "iPod",
      completed: true,
    },
    {
      year: "2007",
      event: "iPhone",
      completed: true,
    },
    {
      year: "2015",
      event: "Apple Watch",
      completed: true,
    },
  ],
  textColor = "#000000",
}: Props) {
  return (
    <div class="bg-white py-12 px-6">
      <h2 class="text-4xl md:text-5xl font-bold mb-4 text-center" style={{ color: textColor }}>
        {title}
      </h2>
      <p class="text-lg md:text-xl text-center mb-8" style={{ color: textColor }}>
        {description}
      </p>
      <div class="flex flex-col md:flex-row justify-center items-center">
        {events.map((event, index) => (
          <div
            key={index}
            class="flex flex-col items-center md:items-start md:mr-8 mb-8 md:mb-0"
          >
            <div
              class={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mb-2 ${
                event.completed ? "bg-green-500" : "bg-gray-400"
              }`}
              style={{ color: textColor }}
            >
              {event.year}
            </div>
            <div
              class="text-lg md:text-xl font-bold mb-2"
              style={{ color: textColor }}
            >
              {event.event}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}