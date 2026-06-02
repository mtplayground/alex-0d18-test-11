type EnvSource = Record<string, string | undefined>;

export type PublicEnv = Readonly<{
  siteUrl: string;
  plausibleDomain?: string;
}>;

export const publicEnvKeys = {
  siteUrl: "NEXT_PUBLIC_SITE_URL",
  plausibleDomain: "NEXT_PUBLIC_PLAUSIBLE_DOMAIN",
} as const;

function readRequired(name: string, source: EnvSource): string {
  const value = source[name]?.trim();

  if (!value) {
    throw new Error(
      `Missing required environment variable: ${name}. Set it in .env.local or the build environment.`,
    );
  }

  return value;
}

function readOptional(name: string, source: EnvSource): string | undefined {
  const value = source[name]?.trim();
  return value ? value : undefined;
}

function normalizePublicUrl(name: string, value: string): string {
  let url: URL;

  try {
    url = new URL(value);
  } catch {
    throw new Error(
      `Invalid environment variable: ${name} must be an absolute URL.`,
    );
  }

  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new Error(
      `Invalid environment variable: ${name} must use http or https.`,
    );
  }

  return url.toString().replace(/\/$/, "");
}

export function getPublicEnv(source: EnvSource = process.env): PublicEnv {
  const siteUrl = normalizePublicUrl(
    publicEnvKeys.siteUrl,
    readRequired(publicEnvKeys.siteUrl, source),
  );
  const plausibleDomain = readOptional(publicEnvKeys.plausibleDomain, source);

  return {
    siteUrl,
    ...(plausibleDomain ? { plausibleDomain } : {}),
  };
}
