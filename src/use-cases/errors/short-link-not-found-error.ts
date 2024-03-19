export class ShortLinkNotFoundError extends Error {
  constructor() {
    super('Short link not found');
    this.name = 'ShortLinkNotFoundError';
  }
}
