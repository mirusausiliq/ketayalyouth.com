import { z } from "zod";
const link = z.object({label:z.string(),href:z.string()});
const headingBody = z.object({heading:z.string(),body:z.string()});
const seo = z.object({title:z.string(),description:z.string()});
export const homeSchema = z.object({
 title:z.string(),slug:z.literal("home"),seo,
 hero:z.object({title:z.string(),titleTayal:z.string(),body:z.string(),primaryLink:link,secondaryLink:link}),
 introduction:headingBody,
 participation:headingBody.extend({links:z.array(link.extend({description:z.string()}))}),
 actions:headingBody.extend({featuredLimit:z.number().int().positive()}),
 updates:headingBody.extend({latestLimit:z.number().int().positive()}),
 closing:headingBody.extend({titleTayal:z.string(),link}),
});
export const aboutSchema = z.object({
 title:z.string(),slug:z.literal("about"),seo,
 hero:z.object({eyebrow:z.string(),title:z.string(),titleTayal:z.string(),body:z.string()}),
 values:z.object({heading:z.string(),titleTayal:z.string(),intro:z.string(),items:z.array(z.object({key:z.string(),name:z.string(),heading:z.string(),titleTayal:z.string(),body:z.string()}))}),
 teams:z.object({heading:z.string(),intro:z.string(),items:z.array(z.object({key:z.string(),name:z.string(),nameTayal:z.string(),body:z.string()}))}),
 collaboration:headingBody, community:headingBody,
 closing:headingBody.extend({links:z.array(link)})
});
export type HomePageContent = z.infer<typeof homeSchema>;
export type AboutPageContent = z.infer<typeof aboutSchema>;
