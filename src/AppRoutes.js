import { WeatherExplorer } from "./pages/WeatherExplorer";

const AppRoutes = [
  {
    index: true,
    element: <WeatherExplorer />
  },
  {
    path: '/weather',
    element: <WeatherExplorer />
  } 
];

export default AppRoutes;
