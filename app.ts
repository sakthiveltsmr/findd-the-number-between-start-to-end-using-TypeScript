let names: string = "sakthi";
console.log(names);

let find = (start: number, end: number): void => {
  let item: string = "";
  if (start < end) {
    for (let i: number = start; i <= end; i++) {
      item += `${i}`;
    }
    console.log(item);
  } else {
    console.error(Error);
  }
};

find(1, 5);
