let arr = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
]

function fn (arr) {
  const res = [];
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const id = arr[i].id;
    const pid = arr[i].pid;
    if (!map.get[id]) {
      map.set(id, { children: [] })
    }
    map.set(id, { ...arr[i], children: map.get(id)['children'] })
    const treeItem = map.get(id);
    if (pid === 0) {
      res.push(treeItem);
    } else {
      if (!map.get(pid)) {
        map.set(pid, { children: [] })
      }
      map.get(pid).children.push(treeItem)
    }
  }
  console.log(res)
}

let last = +new Date
fn(arr)
let now = +new Date
console.log(now - last)