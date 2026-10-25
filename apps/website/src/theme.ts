import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        forest: {
          50: { value: "#eff4ee" },
          100: { value: "#dce9dc" },
          700: { value: "#315744" },
          900: { value: "#173b2d" },
          950: { value: "#102d23" },
        },
        sage: {
          100: { value: "#e9eeea" },
          600: { value: "#64776d" },
        },
        ochre: {
          500: { value: "#b66f43" },
          600: { value: "#985a35" },
        },
        paper: { value: "#fbfaf6" },
        paperMuted: { value: "#e9e5dc" },
        ink: { value: "#24332c" },
        border: { value: "#d8ded6" },
      },
      fonts: {
        heading: { value: "Iowan Old Style, Palatino Linotype, serif" },
        body: { value: "Inter, Noto Sans TC, sans-serif" },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
