import React from "react";
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// NOTE: import from root level, because same image is used at main README.md
import imgScheme from "../../../assets/visual_schema.jpg";
import { Header } from "@site/src/features/header";
import { Card, Section } from "@site/src/shared/ui";
// NOTE: Locate at index before of specific route-mapping while Node/SSR building
// "_" for excluding file from routing
import { features, concepts } from "./_config";
import styles from "./styles.module.css";

export default function HomePage() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Welcome"
      description="Structural methodology for frontend projects"
    >
      <Header />
      <main>
        <Section title="Features">
          {features.map((feature) => (
            <Card key={feature.title} size={12 / features.length} {...feature} />
          ))}
        </Section>
        <Section title="Concepts" withAltBg>
          {concepts.map((concept) => (
            <Card key={concept.title} size={12 / concepts.length} {...concept} />
          ))}
        </Section>
        <Section title="Scheme" rowClass={styles.scheme}>
          {/* 
            NOTE: Set fixed height for correct alignment from mobile devices
            @see https://t.me/c/1463227827/197935
          */}
          <img className={styles.schemeImg} src={imgScheme} alt="feature-sliced-scheme" />
        </Section>
      </main>
    </Layout>
  );
}