import { expect, test } from "@playwright/test";

const sections = [
  {
    id: "hero",
    heading: "Agent Team for Founders",
    copy: "You just talk, we handle the rest",
  },
  {
    id: "value-proposition",
    heading: "A software team that works where your product already lives.",
    copy: "GitHub-native",
  },
  {
    id: "how-it-works",
    heading: "From first conversation to operated product.",
    copy: "Plan",
  },
  {
    id: "features",
    heading: "Built for founders who need working software, not ceremony.",
    copy: "Production-ready output",
  },
] as const;

test("landing page renders cleanly across responsive viewports", async ({
  page,
}) => {
  const consoleErrors: string[] = [];

  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });
  page.on("pageerror", (error) => {
    consoleErrors.push(error.message);
  });

  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Agent Team for Founders",
    }),
  ).toBeVisible();
  await expect(
    page.locator("#hero").getByText("myClawTeam", { exact: true }),
  ).toBeVisible();
  await expect(
    page.locator("#hero").getByText("You just talk, we handle the rest"),
  ).toBeVisible();

  const cta = page.getByRole("link", {
    name: "Start a conversation with myClawTeam",
  });
  await expect(cta).toBeVisible();
  await expect(cta).toHaveAttribute("href", "#hero");

  for (const section of sections) {
    const sectionRoot = page.locator(`#${section.id}`);

    await sectionRoot.scrollIntoViewIfNeeded();
    await expect(sectionRoot).toBeInViewport();
    await expect(
      sectionRoot.getByRole("heading", { name: section.heading }),
    ).toBeVisible();
    await expect(sectionRoot.getByText(section.copy)).toBeVisible();
  }

  const footer = page.getByRole("contentinfo");
  await footer.scrollIntoViewIfNeeded();
  await expect(footer).toBeInViewport();
  await expect(footer.getByText("myClawTeam", { exact: true })).toBeVisible();
  await expect(footer.getByRole("link")).toHaveCount(4);

  expect(consoleErrors).toEqual([]);
});
