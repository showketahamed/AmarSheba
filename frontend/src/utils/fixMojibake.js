function decodeText(value) {
  try {
    const bytes = Uint8Array.from(value, (character) => character.charCodeAt(0));
    return new TextDecoder('utf-8', { fatal: false }).decode(bytes);
  } catch {
    return value;
  }
}

export function fixMojibake(value) {
  if (typeof value === 'string') {
    return decodeText(value);
  }

  if (Array.isArray(value)) {
    return value.map(fixMojibake);
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, fixMojibake(item)]),
    );
  }

  return value;
}
