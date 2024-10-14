import Container from "../layouts/Container";
import Flex from "../layouts/Flex";
import Heading from "../layouts/Heading";
import Products from "../layouts/Products";
export default function BestSellers() {
  return (
    <Container className="mt-[128px]">
      <Heading title="Our Bestsellers" />
      <Flex className="gap-x-10">
        <Products className="mt-12" badge={true} />
        <Products className="mt-12" badge={true} />
        <Products className="mt-12" badge={false} />
        <Products className="mt-12" badge={false} />
      </Flex>
    </Container>
  );
}
