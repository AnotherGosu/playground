import { Container, Heading, Hr } from "@react-email/components";

import { Accounting } from "./components/Accounting";
import { Billing } from "./components/Billing";
import { Footer } from "./components/Footer";
import { Greeting } from "./components/Greeting";
import { Help } from "./components/Help";
import { Items } from "./components/Items";
import { Payment } from "./components/Payment";
import { Summary } from "./components/Summary";

export const Preview = () => {
  return (
    <Container>
      <Heading className="bg-slate-200 p-1 text-center text-xl font-bold">
        Receipt
      </Heading>

      <Greeting />

      <Hr className="my-2" />

      <Summary />

      <Hr className="my-2" />

      <Billing />

      <Hr className="my-2" />

      <Items />

      <Hr className="my-2" />

      <Accounting />

      <Hr className="my-2" />

      <Payment />

      <Hr className="my-2" />

      <Help />

      <Footer />
    </Container>
  );
};
