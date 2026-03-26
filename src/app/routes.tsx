import { createBrowserRouter } from "react-router";
import { RootLayout } from "./pages/RootLayout";
import { HomePage } from "./pages/HomePage";
import { QuotePage } from "./pages/QuotePage";
import { AboutPage } from "./pages/SobreNosotros";
import { PreguntasFrecuentesPage } from "./pages/PreguntasFrecuentesPage";
import { GaleriaPage } from "./pages/GaleriaPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "cotizar", Component: QuotePage },
      { path: "sobre-nosotros", Component: AboutPage },
      { path: "preguntas-frecuentes", Component: PreguntasFrecuentesPage },
      { path: "galeria", Component: GaleriaPage },
    ],
  },
]);