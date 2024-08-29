import { Text, View } from "@react-pdf/renderer";

import { PDF_ITEMS } from "@/constants/common";

import { formatPrice } from "@/lib/formatPrice";

import { styles } from "./styles";

export const Table = () => {
  return (
    <View style={styles.table}>
      <View style={[styles.row, styles.head]}>
        <View style={[styles.column, { width: "10%" }]}>
          <Text>Item</Text>
        </View>

        <View style={[styles.column, { width: "45%" }]}>
          <Text>Name</Text>
        </View>

        <View style={[styles.column, { width: "15%" }]}>
          <Text>Quantity</Text>
        </View>

        <View style={[styles.column, { width: "15%" }]}>
          <Text>Unit Price</Text>
        </View>

        <View style={[styles.column, { width: "15%" }]}>
          <Text>Total</Text>
        </View>
      </View>

      <View>
        {PDF_ITEMS.map((item, idx) => (
          <View
            key={idx}
            style={styles.row}
          >
            <View style={[styles.column, { width: "10%" }]}>
              <Text>{idx + 1}</Text>
            </View>

            <View style={[styles.column, { width: "45%" }]}>
              <Text>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>

            <View style={[styles.column, { width: "15%" }]}>
              <Text>{item.quantity}</Text>
            </View>

            <View style={[styles.column, { width: "15%" }]}>
              <Text>{formatPrice(item.unitPrice)}</Text>
            </View>

            <View style={[styles.column, { width: "15%" }]}>
              <Text>{formatPrice(item.quantity * Number(item.unitPrice))}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
