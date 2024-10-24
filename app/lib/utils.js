export function convertTopObj(doc) {
  doc._id = doc._id.toString();
  return doc;
}

export const round = (num) => {
  Math.round((num + Number.EPSILON) * 100) / 100;
};
