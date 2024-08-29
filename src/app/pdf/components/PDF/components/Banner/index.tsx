import { Image as PDFImage } from "@react-pdf/renderer";

import { styles } from "./styles";

export const Banner = () => {
  return (
    <PDFImage
      style={styles.banner}
      src="https://images.unsplash.com/photo-1649624428605-e3567d6fbbf4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
  );
};
