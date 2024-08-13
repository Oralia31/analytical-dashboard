//Icons
import {
  RiBarChart2Line,
  RiMegaphoneLine,
  RiAdvertisementLine,
  RiLineChartLine,
} from "react-icons/ri";

//Data sidebar
export const sidebarItems = [
  {
    to: "",
    text: "Analíticas",
    icon: <RiBarChart2Line className="text-primary text-2xl" />,
  },
  {
    to: "google-ads",
    text: "Google Ads",
    icon: <RiMegaphoneLine className="text-primary text-2xl" />,
  },
  {
    to: "meta-ads",
    text: "Meta Ads",
    icon: <RiAdvertisementLine className="text-primary text-2xl" />,
  },
  {
    to: "metricas",
    text: "Métricas",
    icon: <RiLineChartLine className="text-primary text-2xl" />,
  },
];
