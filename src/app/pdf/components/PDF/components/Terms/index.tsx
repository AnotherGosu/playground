import { Text, View } from "@react-pdf/renderer";

import { styles } from "./styles";

export const Terms = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Terms & Conditions</Text>

      <Text>
        Thank you for your business! Please make the payment by the due date to
        avoid any late fees. All sales are final. No refunds or exchanges.
        Payment is due within 30 days of the invoice date. Late payments will
        incur a 5% fee.
      </Text>
    </View>
  );
};
