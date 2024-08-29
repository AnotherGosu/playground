import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 20,
    bottom: 20,
    padding: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    border: "1px solid #e2e8f0",
  },
  heading: {
    fontWeight: 500,
  },
  group: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    fontWeight: 300,
  },
});
