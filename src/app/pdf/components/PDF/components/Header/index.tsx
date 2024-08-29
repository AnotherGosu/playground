import { Text, View } from "@react-pdf/renderer";

import { styles } from "./styles";

export const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Billing Information</Text>

        <View style={styles.list}>
          <Text>John Doe</Text>
          <Text>johndoe@mail.com</Text>
          <Text>1234 Elm Street Springfield, IL 62704 United States</Text>
        </View>
      </View>

      <View>
        <Text style={styles.heading}>Invoice Information</Text>

        <View style={styles.list}>
          <Text>Invoice Number: INV-10245</Text>
          <Text>Invoice Date: August 26, 2024</Text>
          <Text>Due Date: September 26, 2024</Text>
        </View>
      </View>
    </View>
  );
};
