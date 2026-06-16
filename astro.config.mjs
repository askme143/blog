import { defineConfig } from "astro/config";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserPage = repoName.endsWith(".github.io");
const base =
  process.env.BASE_PATH ??
  (process.env.GITHUB_ACTIONS && repoName && !isUserPage ? `/${repoName}` : "/");

export default defineConfig({
  output: "static",
  base
});
