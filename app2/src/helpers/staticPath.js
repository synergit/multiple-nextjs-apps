export default (path) => {
  if (process.env.ASSETPREFIX  && process.env.ASSETPREFIX != '') {
    return `${process.env.ASSETPREFIX}${path}`;
  }
  return path;
}
