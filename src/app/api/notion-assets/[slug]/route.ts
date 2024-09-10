import { NextRequest, NextResponse } from "next/server";
import { notion } from "@/lib/notion";
import { resolveAssetURL, cacheControlHeader } from "@/lib/assetUtils";

// Fetch Notion content by slug
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });
  }

  try {
    // Fetch Notion page using the page ID or slug
    const pageData = await notion.pages.retrieve({
      page_id: slug, // or any mapping logic to convert slug to page ID
    });

    const content = await notion.blocks.children.list({
      block_id: slug,
    });

    // Optionally, resolve assets such as images and handle caching
    const assets = resolveAssetURL(content);

    // Apply appropriate caching headers for ISR
    return NextResponse.json(
      { content, assets },
      {
        headers: cacheControlHeader(),
      }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error?.message }, { status: 500 });
  }
}
