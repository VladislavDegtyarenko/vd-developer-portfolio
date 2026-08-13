import { syncBlogAssets } from "../src/utils/notion/syncBlogAssets";

const args = process.argv.slice(2);

const readOption = (name: string) => {
  const inlineOption = args.find((arg) => arg.startsWith(`${name}=`));

  if (inlineOption) {
    return inlineOption.slice(name.length + 1);
  }

  const optionIndex = args.indexOf(name);

  if (optionIndex >= 0) {
    return args[optionIndex + 1];
  }

  return undefined;
};

const main = async () => {
  const slug = readOption("--slug");
  const force = args.includes("--force");
  const hasSlugOption = args.some(
    (arg) => arg === "--slug" || arg.startsWith("--slug=")
  );

  if (args.includes("--help")) {
    console.log(`Usage: pnpm sync-blog-assets -- [options]

Options:
  --slug <slug>  Synchronize one published post instead of every post
  --force        Download Notion file images even when the local path exists
  --help         Show this help`);
    return;
  }

  if (hasSlugOption && !slug) {
    throw new Error("--slug requires a value");
  }

  const assets = await syncBlogAssets({ slug, force });

  for (const asset of assets) {
    const identifier =
      asset.kind === "cover" ? "cover" : `block ${asset.blockId}`;
    const destination = asset.localPath ?? asset.resolvedUrl ?? "no image";

    console.log(
      `${asset.status.padEnd(10)} ${asset.slug} (${identifier}) -> ${destination}`
    );
  }

  const localAssets = assets.filter(({ localPath }) => localPath);
  const externalAssets = assets.filter(({ status }) => status === "external");
  const missingAssets = assets.filter(({ status }) => status === "missing");

  console.log(
    `Synchronized ${localAssets.length} local asset(s); ${externalAssets.length} external and ${missingAssets.length} missing image(s) were unchanged.`
  );
};

main().catch((error) => {
  console.error(
    `Blog asset synchronization failed: ${
      error instanceof Error ? error.message : String(error)
    }`
  );
  process.exitCode = 1;
});
