export function toHex(decimal) {
  return decimal.toString(16)
}

export function toDecimal(hex) {
  return parseInt(hex, 16)
}

export function decimalToHexChainId(decimalChainId) {
  return "0x" + toHex(decimalChainId);
}

export function hexToDecimalChainId(hexChainId) {
  return "0x" + toDecimal(hexChainId);
}

export function remove0xIfExists(chainId) {
  if (chainId.toString().includes("0x") && chainId.startsWith("0x")) {
    return chainId.substring(2, chainId.length);
  } else {
    return chainId;
  }
}