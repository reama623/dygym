export function capitalize() {
  return this.replace(/^[a-z]/g, (x) => x.toUpperCase());
}

String.prototype.capitalize = capitalize;
