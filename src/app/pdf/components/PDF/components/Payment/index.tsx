import { Text, View } from "@react-pdf/renderer";

import { PDF_ITEMS } from "@/constants/common";

import { formatPrice } from "@/lib/formatPrice";

import { styles } from "./styles";

export const Payment = () => {
  const subTotal = PDF_ITEMS.reduce(
    (prev, curr) => (prev += curr.quantity * Number(curr.unitPrice)),
    0,
  );
  const tax = (subTotal / 100) * 8;
  const shipping = 10;
  const total = subTotal + tax + shipping;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Payment Information</Text>

        <View style={styles.list}>
          <Text>Payment Method: Credit Card (Visa)</Text>
          <Text>Card Number: **** **** **** 1234</Text>
          <Text>Transaction ID: TRX-987654321</Text>
        </View>
      </View>

      <View>
        <Text style={styles.heading}>Totals</Text>

        <View style={styles.list}>
          <Text>{`Subtotal: ${formatPrice(subTotal)}`}</Text>

          <Text>{`Tax (8%): ${formatPrice(tax)}`}</Text>

          <Text>{`Shipping & Handling: ${formatPrice(shipping)}`}</Text>

          <Text style={styles.totalAmount}>{`Total Amount Due: ${formatPrice(
            total,
          )}`}</Text>
        </View>
      </View>
    </View>
  );
};
