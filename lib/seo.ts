import type { Metadata } from "next";

import { getPublicEnv } from "@/lib/env";

export const seoDefaults = {
  siteName: "myClawTeam",
  title: "myClawTeam",
  titleTemplate: "%s | myClawTeam",
  tagline: "You just talk, we handle the rest",
  description: "Agent Team for Founders. You just talk, we handle the rest.",
  locale: "en_US",
  ogImage: {
    path: "/opengraph-image",
    width: 1200,
    height: 630,
  },
} as const;

const localSiteUrl = "http://localhost:8080";

export type CreateMetadataOptions = Readonly<{
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}>;

export function getSiteUrl(): string {
  if (!process.env.NEXT_PUBLIC_SITE_URL?.trim()) {
    return localSiteUrl;
  }

  return getPublicEnv().siteUrl;
}

export function createAbsoluteUrl(path = "/"): string {
  const siteUrl = getSiteUrl();
  return new URL(path, `${siteUrl}/`).toString();
}

export function createMetadata({
  title,
  description = seoDefaults.description,
  path = "/",
  noIndex = false,
}: CreateMetadataOptions = {}): Metadata {
  const canonical = createAbsoluteUrl(path);
  const ogImage = createAbsoluteUrl(seoDefaults.ogImage.path);
  const metadataTitle = title ?? seoDefaults.title;

  return {
    metadataBase: new URL(getSiteUrl()),
    title: title
      ? metadataTitle
      : {
          default: seoDefaults.title,
          template: seoDefaults.titleTemplate,
        },
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: seoDefaults.locale,
      siteName: seoDefaults.siteName,
      title: metadataTitle,
      description,
      url: canonical,
      images: [
        {
          url: ogImage,
          width: seoDefaults.ogImage.width,
          height: seoDefaults.ogImage.height,
          alt: `${seoDefaults.siteName}: ${seoDefaults.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadataTitle,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  };
}

export function createOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: seoDefaults.siteName,
    url: getSiteUrl(),
    slogan: seoDefaults.tagline,
  };
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
