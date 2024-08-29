import { Column, Row, Section } from "@react-email/components";

import { EMAIL_ITEMS } from "@/constants/common";

import { formatPrice } from "@/lib";

export const Accounting = () => {
  const subtotal = EMAIL_ITEMS.reduce((prev, curr) => {
    return (prev += Number(curr.price) * curr.quantity);
  }, 0);
  const tax = "10.50";
  const shipping = "5.99";
  const total = subtotal + Number(tax) + Number(shipping);

  return (
    <>
      <Section className="table-fixed text-sm">
        <Row>
          <Column className="w-3/6 px-2 py-0.5 font-medium" />
          <Column className="w-1/6 px-2 py-0.5 font-medium" />
          <Column className="w-1/6 px-2 py-0.5 font-medium">Subtotal</Column>
          <Column className="w-1/6 px-2 py-0.5 text-right">
            {formatPrice(subtotal)}
          </Column>
        </Row>

        <Row>
          <Column className="w-3/6 px-2 py-0.5 font-medium" />
          <Column className="w-1/6 px-2 py-0.5 font-medium" />
          <Column className="w-1/6 px-2 py-0.5 font-medium">Tax</Column>
          <Column className="w-1/6 px-2 py-0.5 text-right">
            {formatPrice(tax)}
          </Column>
        </Row>

        <Row>
          <Column className="w-3/6 px-2 py-0.5 font-medium" />
          <Column className="w-1/6 px-2 py-0.5 font-medium" />
          <Column className="w-1/6 px-2 py-0.5 font-medium">Shipping</Column>
          <Column className="w-1/6 px-2 py-0.5 text-right">
            {formatPrice(shipping)}
          </Column>
        </Row>

        <Row>
          <Column className="w-3/6 px-2 py-0.5 font-medium" />
          <Column className="w-1/6 px-2 py-0.5 font-medium" />
          <Column className="w-1/6 px-2 py-0.5 font-medium">Total</Column>
          <Column className="w-1/6 px-2 py-0.5 text-right font-semibold">
            {formatPrice(total)}
          </Column>
        </Row>
      </Section>
    </>
  );
};
