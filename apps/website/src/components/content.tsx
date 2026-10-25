import { Link as RouterLink } from "@tanstack/react-router"
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react"

type LinkItem = { label: string; href: string }

export function Paragraphs({ body }: { body: string }) {
  return (
    <Stack gap="5">
      {body.split(/\n\n+/).map((paragraph, index) => (
        <Text key={`${paragraph.slice(0, 12)}-${index}`} color="ink" lineHeight="1.95">
          {paragraph}
        </Text>
      ))}
    </Stack>
  )
}

export function SectionHeader({
  heading,
  intro,
  tayal,
}: {
  heading: string
  intro?: string
  tayal?: string
}) {
  return (
    <Stack gap="3" maxW="3xl">
      <Heading as="h2" color="forest.900" fontSize={{ base: "2xl", md: "4xl" }} fontWeight="500">
        {heading}
      </Heading>
      {tayal && (
        <Text color="ochre.600" fontSize="sm" letterSpacing="0.08em">
          {tayal}（待校訂）
        </Text>
      )}
      {intro && <Paragraphs body={intro} />}
    </Stack>
  )
}

export function PageHero({
  eyebrow,
  title,
  tayal,
  body,
  links,
}: {
  eyebrow?: string
  title: string
  tayal?: string
  body: string
  links?: LinkItem[]
}) {
  return (
    <Box bg="forest.50" borderBottomWidth="1px" borderColor="border">
      <Container maxW="7xl" py={{ base: "16", md: "24" }}>
        <Stack gap="7" maxW="4xl">
          {eyebrow && (
            <Text color="ochre.600" fontSize="sm" fontWeight="700" letterSpacing="0.12em">
              {eyebrow}
            </Text>
          )}
          <Heading as="h1" color="forest.950" fontSize={{ base: "4xl", md: "6xl" }} fontWeight="500" lineHeight="1.1">
            {title}
          </Heading>
          {tayal && (
            <Text color="ochre.600" fontSize={{ base: "md", md: "lg" }} letterSpacing="0.08em">
              {tayal}（待校訂）
            </Text>
          )}
          <Box maxW="3xl">
            <Paragraphs body={body} />
          </Box>
          {links && (
            <HStack gap="4" wrap="wrap">
              {links.map((link, index) => (
                <Button key={link.href} asChild colorPalette={index === 0 ? "forest" : "gray"} variant={index === 0 ? "solid" : "outline"}>
                  <RouterLink to={link.href}>{link.label}</RouterLink>
                </Button>
              ))}
            </HStack>
          )}
        </Stack>
      </Container>
    </Box>
  )
}

export function ProseSection({
  heading,
  body,
  tayal,
}: {
  heading: string
  body: string
  tayal?: string
}) {
  return (
    <Stack gap="7" maxW="3xl">
      <SectionHeader heading={heading} tayal={tayal} />
      <Paragraphs body={body} />
    </Stack>
  )
}

export function ValueSection({
  heading,
  tayal,
  intro,
  items,
}: {
  heading: string
  tayal: string
  intro: string
  items: { key: string; name: string; heading: string; titleTayal: string; body: string }[]
}) {
  return (
    <Stack gap="10">
      <SectionHeader heading={heading} tayal={tayal} intro={intro} />
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: "10", md: "8" }}>
        {items.map((item) => (
          <Stack key={item.key} gap="3" borderTopWidth="2px" borderColor="ochre.500" pt="5">
            <Text color="sage.600" fontSize="sm">{item.name}</Text>
            <Heading as="h3" color="forest.900" fontSize="xl" fontWeight="600">{item.heading}</Heading>
            <Text color="ochre.600" fontSize="sm">{item.titleTayal}（待校訂）</Text>
            <Paragraphs body={item.body} />
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  )
}

export function TeamSection({
  heading,
  intro,
  items,
}: {
  heading: string
  intro: string
  items: { key: string; name: string; nameTayal: string; body: string }[]
}) {
  return (
    <Stack gap="10">
      <SectionHeader heading={heading} intro={intro} />
      <SimpleGrid columns={{ base: 1, md: 2 }} gapX={{ base: "8", md: "14" }} gapY="10">
        {items.map((item) => (
          <Stack key={item.key} gap="3" borderTopWidth="1px" borderColor="border" pt="5">
            <Heading as="h3" color="forest.900" fontSize="xl" fontWeight="600">{item.name}</Heading>
            <Text color="ochre.600" fontSize="sm">{item.nameTayal}（待校訂）</Text>
            <Paragraphs body={item.body} />
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  )
}

export function TextLink({ item }: { item: LinkItem }) {
  return (
    <Link asChild color="forest.700" fontWeight="600" textDecoration="underline">
      <RouterLink to={item.href}>{item.label}</RouterLink>
    </Link>
  )
}
