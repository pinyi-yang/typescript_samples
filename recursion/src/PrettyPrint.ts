function PrettyPrint(dictionary: any, indent: string = ''): string {
  let result = ''
  for (let key in dictionary) {
    if (typeof dictionary[key] == 'object') {
      console.log(`${indent}${key}:`);
      result = result + `${indent}${key}:\n`+ PrettyPrint(dictionary[key], '  '+indent);
    } else {
      result = result +`${indent}${key}: ${dictionary[key]}\n`
      console.log(`${indent}${key}: ${dictionary[key]}`);
    }
  }
  return result;
}

var o1 = {"a": 1, "b": 2};
var o2 = {"a": 1, "b": 2, "c": {"name": "Bruce Wayne", "occupation": "Hero"}, "d": 4}
var o3 = {"a": 1, "b": 2, "c": {"name": "Bruce Wayne", "occupation": "Hero", "friends": {"spiderman": {"name": "Peter Parker"}, "superman": {"name": "Clark Kent"}}}, "d": 4}

// PrettyPrint(o1);
// PrettyPrint(o2);
console.log(PrettyPrint(o3));

