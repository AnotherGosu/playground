import { Text, View } from "@react-pdf/renderer";

import { styles } from "./styles";

export const Footer = () => {
  return (
    <View
      style={styles.container}
      fixed
    >
      <View style={styles.group}>
        <Text style={styles.heading}>Phone</Text>
        <Text>(555) 123-4567</Text>
      </View>

      <View style={styles.group}>
        <Text style={styles.heading}>Acme Corp</Text>
        <Text>9876 Maple Lane Springfield, IL 62701 United States</Text>
      </View>

      <View style={styles.group}>
        <Text style={styles.heading}>Email</Text>
        <Text>billing@acmecorp.com</Text>
      </View>
    </View>
  );
};
