import * as ThumbHash from "thumbhash";
import sharp from "sharp";

// Image to ThumbHash
export async function generateBlurDataUrl(url: string) {
  const res = await fetch(url);
  const buffer = await res.arrayBuffer();

  const image = sharp(buffer).resize(64, 48, { fit: "inside" });
  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const binaryThumbHash = ThumbHash.rgbaToThumbHash(
    info.width,
    info.height,
    data
  );
  // console.log("binaryThumbHash:", Buffer.from(binaryThumbHash));

  // If you want to use base64 instead of binary...
  const thumbHashToBase64 = Buffer.from(binaryThumbHash).toString("base64");
  const thumbHashFromBase64 = Buffer.from(thumbHashToBase64, "base64");
  // console.log("thumbHashToBase64:", thumbHashToBase64);

  // ThumbHash to data URL (can be done on the client, not the server)
  const placeholderURL = ThumbHash.thumbHashToDataURL(binaryThumbHash);
  // console.log("placeholderURL:", placeholderURL);

  return placeholderURL;
}
