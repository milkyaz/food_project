import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <Root />,
    //   loader: rootLoader,
    //   children: [
    //     {
    //       path: "team",
    //       element: <Team />,
    //       loader: teamLoader,
    //     },
    //   ],
    // },
  ]);
  return (
    <>
      <Header />
      <main className="container content">
        <RouterProvider router={router} />
      </main>
      <Footer />
    </>
  );
}

export default App;

