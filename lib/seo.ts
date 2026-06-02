import type { Metadata } from "next";

import { getPublicEnv } from "@/lib/env";

export const seoDefaults = {
  siteName: "myClawTeam",
  title: "myClawTeam",
  titleTemplate: "%s | myClawTeam",
  description: "Agent Team for Founders. You just talk, we handle the rest.",
  locale: "en_US",
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
    },
    twitter: {
      card: "summary_large_image",
      title: metadataTitle,
      description,
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
