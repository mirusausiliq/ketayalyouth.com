import aboutJson from "../../../../content/pages/about.json"
import eventsJson from "../../../../content/pages/events.json"
import homeJson from "../../../../content/pages/home.json"
import membersJson from "../../../../content/pages/members.json"
import projectsJson from "../../../../content/pages/projects.json"
import { aboutSchema, eventsSchema, homeSchema, membersSchema, projectsSchema } from "./schema"

export const homePage = homeSchema.parse(homeJson)
export const aboutPage = aboutSchema.parse(aboutJson)
export const eventsPage = eventsSchema.parse(eventsJson)
export const membersPage = membersSchema.parse(membersJson)
export const projectsPage = projectsSchema.parse(projectsJson)
