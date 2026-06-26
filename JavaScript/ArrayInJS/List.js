const list = () => {
  let arr = [];
  let pos = 0;
  const put = (num) => {
    arr[pos] = num;
    pos++;
  };

  const get = (pos) => {
    return arr[pos];
  };

  const remove = (pos) => {
    arr[pos] = null;
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != null) {
        temp[i] = arr[i];
      }
    }
    arr = temp;
  };

  const show = () => {
    return arr;
  }
};