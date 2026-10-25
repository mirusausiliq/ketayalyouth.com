import { Link as RouterLink, Outlet } from "@tanstack/react-router"
import { Box, Container, Flex, HStack, Link, Text } from "@chakra-ui/react"

function SiteHeader() {
  return (
    <Box as="header" borderBottomWidth="1px" borderColor="border">
      <Container maxW="7xl" py={{ base: "4", md: "5" }}>
        <Flex align="center" justify="space-between" gap="6">
          <Link asChild color="forest.900" fontWeight="700" letterSpacing="0.04em">
            <RouterLink to="/">泰雅語語推青年團</RouterLink>
          </Link>
          <HStack as="nav" aria-label="主要導覽" gap={{ base: "4", md: "7" }}>
            <Link asChild color="forest.900" fontSize="sm">
              <RouterLink to="/">首頁</RouterLink>
            </Link>
            <Link asChild color="forest.900" fontSize="sm">
              <RouterLink to="/about">關於我們</RouterLink>
            </Link>
            <Link asChild color="forest.900" fontSize="sm">
              <RouterLink to="/events">活動</RouterLink>
            </Link>
            <Link asChild color="forest.900" fontSize="sm">
              <RouterLink to="/members">成員</RouterLink>
            </Link>
            <Link asChild color="forest.900" fontSize="sm">
              <RouterLink to="/projects">田野</RouterLink>
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

function SiteFooter() {
  return (
    <Box as="footer" bg="forest.950" color="paper" mt="24">
      <Container maxW="7xl" py="8">
        <Flex justify="space-between" gap="5" wrap="wrap">
          <Text fontSize="sm">泰雅語語推青年團</Text>
          <Text color="paperMuted" fontSize="sm">
            共根、共長、共行
          </Text>
        </Flex>
      </Container>
    </Box>
  )
}

export function Layout() {
  return (
    <>
      <SiteHeader />
      <Box as="main">
        <Outlet />
      </Box>
      <SiteFooter />
    </>
  )
}
