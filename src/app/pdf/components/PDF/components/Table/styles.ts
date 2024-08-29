import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  table: {
    marginBottom: 40,
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  column: {
    paddingHorizontal: 4,
    paddingVertical: 12,
  },
  head: {
    borderTop: "1px solid black",
    borderBottom: "1px solid black",
    fontWeight: 500,
  },
  description: {
    fontSize: 8,
    color: "#78716c",
  },
});
