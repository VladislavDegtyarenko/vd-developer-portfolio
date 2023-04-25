function textByChars(text) {
  if (!text) return;
  if (text?.trim().length === 0) return text;

  const chars = text.split("");
  const divsOfChars = chars.map((char, index) => (
    <span key={index} style={{ display: "inline-block" }}>
      {char === " " ? "\u00A0" : char}
    </span>
  ));
  return divsOfChars;
}

export default textByChars;
