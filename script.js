const byteSize = (str) => {
  // write your code here
	// let len=0;
	var arr=str.split('');
	return arr.length;
};

// Do not change the code below
const str = prompt("Enter some string.")
alert(byteSize(str));
