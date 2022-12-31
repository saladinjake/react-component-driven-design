export default function comparator(a:Comparable, b:Comparable) {
  if (a.Name < b.Name) {
    return -1;
  }
  if (a.Name > b.Name) {
    return 1;
  }
  return 0;
}

type Comparable = {
  Name: string;
};
