import { Column, Heading, Row, Section } from "@react-email/components";

import { EMAIL_ITEMS } from "@/constants/common";

import { formatPrice } from "@/lib";

export const Items = () => {
  return (
    <>
      <Heading
        as="h2"
        className="mb-1 font-semibold"
      >
        Items Purchased
      </Heading>

      <Section className="table-fixed text-sm">
        <Row className="bg-slate-200">
          <Column className="w-3/6 px-2 py-0.5 font-medium">Item</Column>
          <Column className="w-1/6 px-2 py-0.5 font-medium">Quantity</Column>
          <Column className="w-1/6 px-2 py-0.5 font-medium">Price</Column>
          <Column className="w-1/6 px-2 py-0.5 text-right font-medium">
            Total
          </Column>
        </Row>

        {EMAIL_ITEMS.map(({ name, quantity, price }, idx) => {
          const total = formatPrice(Number(price) * quantity);

          return (
            <Row key={idx}>
              <Column className="w-3/6 px-2 py-0.5">{name}</Column>
              <Column className="w-1/6 px-2 py-0.5">{quantity}</Column>
              <Column className="w-1/6 px-2 py-0.5">
                {formatPrice(price)}
              </Column>
              <Column className="w-1/6 px-2 py-0.5 text-right">{total}</Column>
            </Row>
          );
        })}
      </Section>
    </>
  );
};
