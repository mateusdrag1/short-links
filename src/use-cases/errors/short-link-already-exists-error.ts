export class ShortLinkAlreadyExistsError extends Error {
  constructor() {
    super('Short link already exists');
    this.name = 'ShortLinkAlreadyExistsError';
  }
}
