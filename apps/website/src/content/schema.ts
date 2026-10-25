import { z } from "zod"

const linkSchema = z.object({ label: z.string(), href: z.string() })
const headingBodySchema = z.object({ heading: z.string(), body: z.string() })
const seoSchema = z.object({ title: z.string(), description: z.string() })

export const homeSchema = z.object({
  title: z.string(),
  slug: z.literal("home"),
  seo: seoSchema,
  hero: z.object({
    title: z.string(),
    titleTayal: z.string(),
    body: z.string(),
    primaryLink: linkSchema,
    secondaryLink: linkSchema,
  }),
  introduction: headingBodySchema,
  participation: headingBodySchema.extend({
    links: z.array(linkSchema.extend({ description: z.string() })),
  }),
  actions: headingBodySchema.extend({ featuredLimit: z.number().int().positive() }),
  updates: headingBodySchema.extend({ latestLimit: z.number().int().positive() }),
  closing: headingBodySchema.extend({ titleTayal: z.string(), link: linkSchema }),
})

export const aboutSchema = z.object({
  title: z.string(),
  slug: z.literal("about"),
  seo: seoSchema,
  hero: z.object({
    eyebrow: z.string(),
    title: z.string(),
    titleTayal: z.string(),
    body: z.string(),
  }),
  values: z.object({
    heading: z.string(),
    titleTayal: z.string(),
    intro: z.string(),
    items: z.array(
      z.object({
        key: z.string(),
        name: z.string(),
        heading: z.string(),
        titleTayal: z.string(),
        body: z.string(),
      }),
    ),
  }),
  teams: z.object({
    heading: z.string(),
    intro: z.string(),
    items: z.array(
      z.object({
        key: z.string(),
        name: z.string(),
        nameTayal: z.string(),
        body: z.string(),
      }),
    ),
  }),
  collaboration: headingBodySchema,
  community: headingBodySchema,
  closing: headingBodySchema.extend({ links: z.array(linkSchema) }),
})

const pageSchema = z.object({
  title: z.string(),
  slug: z.string(),
  seo: seoSchema,
})

export const eventsSchema = pageSchema.extend({
  slug: z.literal("events"),
  items: z.array(
    z.object({
      date: z.string(),
      type: z.string(),
      title: z.string(),
      contents: z.string(),
      coverImage: z.string().optional(),
    }),
  ),
})

export const membersSchema = pageSchema.extend({
  slug: z.literal("members"),
  items: z.array(
    z.object({
      year: z.string(),
      type: z.string(),
      title: z.string(),
      name: z.string(),
      village: z.string(),
      certification: z.string(),
      study: z.string(),
      profession: z.string(),
      profileImage: z.string(),
      profileImageAlt: z.string(),
    }),
  ),
})

export const projectsSchema = pageSchema.extend({
  slug: z.literal("projects"),
  items: z.array(
    z.object({
      date: z.string(),
      area: z.string(),
      village: z.string(),
      受訪者: z.string(),
      田調內容: z.string(),
      田調成員: z.string(),
      coverImage: z.string(),
      gallery: z.array(z.string()),
    }),
  ),
})

export type HomePageContent = z.infer<typeof homeSchema>
export type AboutPageContent = z.infer<typeof aboutSchema>
export type EventsPageContent = z.infer<typeof eventsSchema>
export type MembersPageContent = z.infer<typeof membersSchema>
export type ProjectsPageContent = z.infer<typeof projectsSchema>
