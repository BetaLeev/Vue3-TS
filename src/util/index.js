function stringfy(data) {
  const type = typeof data;
  if (type === "string") {
    return `"${data}"`;
  }

  if (type === "number") {
    return `${data}`;
  }

  if (type === "object") {
    if (Array.isArray(data)) {
      const result = data.map((item) => {
        return `${stringfy(item)}`;
      });
      return `[${result}]`;
    }
    const result = Object.keys(data).map((key) => {
      const value = stringfy(data[key]);
      return `"${key}":${value}`;
    });
    return `{${result}}`;
  }
}

const data = {
  name: "leev",
  sex: "male",
  age: 10,
  hobbies: ["girls", "women", "drink"],
  people: {
    name: "alice",
    age: 12,
  },
};
const result = stringfy(data);
const json = JSON.stringify(data);
console.log(result);
console.log(json);
