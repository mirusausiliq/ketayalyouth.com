import { useEffect } from "react"
import { Box, Container, HStack, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import { aboutPage, eventsPage, homePage, membersPage, projectsPage } from "./content/pages"
import { PageHero, Paragraphs, ProseSection, SectionHeader, TeamSection, TextLink, ValueSection } from "./components/content"

function usePageMetadata(title: string, description: string) {
  useEffect(() => {
    document.title = title
    const descriptionTag = document.querySelector('meta[name="description"]')
    descriptionTag?.setAttribute("content", description)
  }, [description, title])
}

export function HomePage() {
  const page = homePage
  usePageMetadata(page.seo.title, page.seo.description)
  return (
    <>
      <PageHero title={page.hero.title} tayal={page.hero.titleTayal} body={page.hero.body} links={[page.hero.primaryLink, page.hero.secondaryLink]} />
      <Container maxW="7xl" py={{ base: "16", md: "24" }}>
        <Stack gap={{ base: "20", md: "32" }}>
          <ProseSection heading={page.introduction.heading} body={page.introduction.body} />
          <Stack gap="8">
            <SectionHeader heading={page.participation.heading} intro={page.participation.body} />
            <SimpleGrid columns={{ base: 1, md: 2 }} gap="6">
              {page.participation.links.map((item) => (
                <Box key={item.href} borderTopWidth="1px" borderColor="border" pt="5">
                  <Stack gap="2">
                    <TextLink item={item} />
                    <Text color="ink" lineHeight="1.8">{item.description}</Text>
                  </Stack>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <ProseSection heading={page.actions.heading} body={page.actions.body} />
          <ProseSection heading={page.updates.heading} body={page.updates.body} />
          <Box bg="sage.100" p={{ base: "8", md: "14" }}>
            <Stack gap="6" maxW="3xl">
              <SectionHeader heading={page.closing.heading} tayal={page.closing.titleTayal} />
              <Paragraphs body={page.closing.body} />
              <HStack><TextLink item={page.closing.link} /></HStack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </>
  )
}

export function AboutPage() {
  const page = aboutPage
  usePageMetadata(page.seo.title, page.seo.description)
  return (
    <>
      <PageHero eyebrow={page.hero.eyebrow} title={page.hero.title} tayal={page.hero.titleTayal} body={page.hero.body} />
      <Container maxW="7xl" py={{ base: "16", md: "24" }}>
        <Stack gap={{ base: "20", md: "32" }}>
          <ValueSection
            heading={page.values.heading}
            tayal={page.values.titleTayal}
            intro={page.values.intro}
            items={page.values.items}
          />
          <TeamSection {...page.teams} />
          <ProseSection heading={page.collaboration.heading} body={page.collaboration.body} />
          <ProseSection heading={page.community.heading} body={page.community.body} />
          <Stack gap="6" maxW="3xl">
            <SectionHeader heading={page.closing.heading} />
            <Paragraphs body={page.closing.body} />
            <HStack gap="5" wrap="wrap">
              {page.closing.links.map((item) => <TextLink key={item.href} item={item} />)}
            </HStack>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}

type CollectionKind = "events" | "members" | "projects"

export function CollectionPage({ kind }: { kind: CollectionKind }) {
  const page = kind === "events" ? eventsPage : kind === "members" ? membersPage : projectsPage
  usePageMetadata(page.seo.title, page.seo.description)

  return (
    <>
      <PageHero title={page.title} tayal="" body={page.seo.description} />
      <Container maxW="7xl" py={{ base: "16", md: "24" }}>
        <Stack gap="10">
          {kind === "events" && eventsPage.items.map((item) => (
            <Box key={`${item.date}-${item.title}`} borderTopWidth="1px" borderColor="border" pt="6">
              <Stack direction={{ base: "column", md: "row" }} gap="8">
                {item.coverImage && (
                  <Image src={`${import.meta.env.BASE_URL}${item.coverImage.replace(/^\//, "")}`} alt={`${item.title}活動照片`} w={{ base: "full", md: "sm" }} h={{ base: "56", md: "52" }} objectFit="cover" />
                )}
                <Box>
                  <Text color="ochre.600" fontSize="sm">{item.date} · {item.type}</Text>
                  <Text color="forest.900" fontFamily="heading" fontSize={{ base: "2xl", md: "3xl" }} mt="2">{item.title}</Text>
                  <Paragraphs body={item.contents} />
                </Box>
              </Stack>
            </Box>
          ))}
          {kind === "members" && membersPage.items.map((item, index) => (
            <Box key={`${item.year}-${item.name}-${index}`} borderTopWidth="1px" borderColor="border" pt="6">
              <Stack direction={{ base: "column", sm: "row" }} gap="6">
                {item.profileImage && (
                  <Box flexShrink="0" w={{ base: "full", sm: "28" }} h={{ base: "64", sm: "28" }} overflow="hidden">
                    <Image src={`${import.meta.env.BASE_URL}${item.profileImage.replace(/^\//, "")}`} alt={item.profileImageAlt} w="full" h="full" objectFit="cover" />
                  </Box>
                )}
                <Box>
                  <Text color="ochre.600" fontSize="sm">{item.year} · {item.type}</Text>
                  <Text color="forest.900" fontFamily="heading" fontSize={{ base: "2xl", md: "3xl" }} mt="2">{item.name}</Text>
                  <Text color="sage.600" mt="1">{item.title}</Text>
                  <Text color="ink" mt="4">部落：{item.village}</Text>
                  <Text color="ink" mt="2">族語認證：{item.certification}</Text>
                  <Text color="ink" mt="2">學習／經歷：{item.study}</Text>
                  <Text color="ink" mt="2">專長：{item.profession}</Text>
                </Box>
              </Stack>
            </Box>
          ))}
          {kind === "projects" && projectsPage.items.map((item, index) => (
            <Box key={`${item.date}-${item.village}-${index}`} borderTopWidth="1px" borderColor="border" pt="6">
              <Stack direction={{ base: "column", md: "row" }} gap="8">
                {item.coverImage && (
                  <Image src={`${import.meta.env.BASE_URL}${item.coverImage.replace(/^\//, "")}`} alt={`${item.village}田野紀錄`} w={{ base: "full", md: "sm" }} h={{ base: "56", md: "52" }} objectFit="cover" />
                )}
                <Box>
                  <Text color="ochre.600" fontSize="sm">{item.date}</Text>
                  <Text color="forest.900" fontFamily="heading" fontSize={{ base: "2xl", md: "3xl" }} mt="2">{item.village}</Text>
                  <Text color="sage.600" mt="1">{item.area}</Text>
                  <Text color="ink" mt="4">受訪者：{item.受訪者}</Text>
                  <Text color="ink" mt="2">田調內容：{item.田調內容}</Text>
                  <Text color="ink" mt="2">田調成員：{item.田調成員}</Text>
                  {item.gallery.length > 1 && (
                    <HStack gap="3" mt="6" wrap="wrap">
                      {item.gallery.slice(1).map((image) => (
                        <Image key={image} src={`${import.meta.env.BASE_URL}${image.replace(/^\//, "")}`} alt={`${item.village}田野紀錄照片`} w="24" h="20" objectFit="cover" />
                      ))}
                    </HStack>
                  )}
                </Box>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Container>
    </>
  )
}
