import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createRootRoute, createRoute, createRouter, RouterProvider } from "@tanstack/react-router"
import { Provider } from "./components/ui/provider"
import { Layout } from "./App"
import { AboutPage, CollectionPage, HomePage } from "./pages"
import "./global.css"

const rootRoute = createRootRoute({ component: Layout })
const homeRoute = createRoute({ getParentRoute: () => rootRoute, path: "/", component: HomePage })
const aboutRoute = createRoute({ getParentRoute: () => rootRoute, path: "/about", component: AboutPage })
const eventsRoute = createRoute({ getParentRoute: () => rootRoute, path: "/events", component: () => <CollectionPage kind="events" /> })
const membersRoute = createRoute({ getParentRoute: () => rootRoute, path: "/members", component: () => <CollectionPage kind="members" /> })
const peopleRoute = createRoute({ getParentRoute: () => rootRoute, path: "/people", component: () => <CollectionPage kind="members" /> })
const projectsRoute = createRoute({ getParentRoute: () => rootRoute, path: "/projects", component: () => <CollectionPage kind="projects" /> })
const routeTree = rootRoute.addChildren([homeRoute, aboutRoute, eventsRoute, membersRoute, peopleRoute, projectsRoute])
const router = createRouter({
  routeTree,
  basepath: import.meta.env.BASE_URL.replace(/\/$/, ""),
})

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
