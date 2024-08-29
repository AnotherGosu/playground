"use client";

import { Document, Page, PDFViewer, Font } from "@react-pdf/renderer";

import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Payment } from "./components/Payment";
import { Table } from "./components/Table";
import { Terms } from "./components/Terms";

Font.register({
  family: "Rubik",
  fonts: [
    {
      src: "http://fonts.gstatic.com/s/rubik/v3/o1vXYO8YwDpErHEAPAxpOg.ttf",
      fontWeight: 300,
    },
    {
      src: "http://fonts.gstatic.com/s/rubik/v3/4sMyW_teKWHB3K8Hm-Il6A.ttf",
      fontWeight: 400,
    },
    {
      src: "http://fonts.gstatic.com/s/rubik/v3/D4HihERG27s-BJrQ4dvkbw.ttf",
      fontWeight: 500,
    },
    {
      src: "http://fonts.gstatic.com/s/rubik/v3/m1GGHcpLe6Mb0_sAyjXE4g.ttf",
      fontWeight: 700,
    },
    {
      src: "http://fonts.gstatic.com/s/rubik/v3/mOHfPRl5uP4vw7-5-dbnng.ttf",
      fontWeight: 900,
    },
  ],
});

export const PDF = () => {
  return (
    <PDFViewer className="mx-auto h-full w-full max-w-5xl">
      <Document style={{ fontFamily: "Rubik" }}>
        <Page
          size="A4"
          style={{ padding: 20, fontSize: 10 }}
        >
          <Header />
          <Table />
          <Payment />
          <Terms />
          <Banner />
          <Footer />
        </Page>
      </Document>
    </PDFViewer>
  );
};
