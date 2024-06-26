export function checkNonUTF8Characters(str) {
  const encoder = new TextEncoder();
  const utf8Array = encoder.encode(str);
  const decoder = new TextDecoder('utf-8', { fatal: true });

  try {
    decoder.decode(utf8Array);
    return false;
  } catch (e) {
    return true;
  }
}

export function checkNonAsciiCharacters(item) {
  const nonAsciiValues = Object.values(item).some(str =>
    checkNonUTF8Characters(str)
  );
  return nonAsciiValues;
}
