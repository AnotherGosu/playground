import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  heading: {
    fontWeight: 500,
    fontSize: 14,
    marginBottom: 8,
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  totalAmount: {
    padding: 4,
    fontWeight: 700,
    backgroundColor: "black",
    color: "white",
  },
});
