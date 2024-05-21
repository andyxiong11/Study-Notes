```js
const openFile = (item) => {
  const link = document.createElement('a');
  link.href = item.url;
  link.setAttribute('download', item.name);
  link.click();
};
```