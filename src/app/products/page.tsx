import { Container, Title } from "@mantine/core";
import Filters from "./_components/filters";
import ListingGrid from "./_components/listing-grid";

export default function page() {
  return (
    <Container component="section" size="xl" py={40}>
      <Title order={1}>Our Apple Collection</Title>
      <Filters mt={20} />
      <ListingGrid
        cols={{ base: 1, xs: 2, sm: 3, md: 4 }}
        spacing={30}
        mt={40}
      />
    </Container>
  );
}
