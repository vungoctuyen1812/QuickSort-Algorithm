var items = []


function swap(items, leftIndex, rightIndex){
	var temp = items[leftIndex];
	items[leftIndex] = items[rightIndex];
	items[rightIndex] = temp;
}

function connect(items, left, right){
	var pivot = items[Math.floor((right + left)/2)],
		i = left,
		j = right;

	while(i <= j) {
		while(items[i] < pivot){
			i++
		}
		while(items[j] > pivot){
			j--
		}
		if( i <= j){
			swap(items, i, j);
			i++;
			j--;
		}
	}
	return i;
}

function quickSort(items, left, right){
	var index;
	if(items.length > 1){
		index = connect(items, left, right);
		if(left < index - 1){
			quickSort(items, left, index - 1);
		}
		if( index < right){
			quickSort(items, index, right)
		}
	}
	return items;
}

var btnAdd = document.getElementById('btn-add');
var showItems = document.getElementById('array-inputed');
btnAdd.addEventListener('click', add);

function add(){
	var inputData = document.getElementById('add-item')
	var valueInputed = parseInt(inputData.value);
	if(isNaN (valueInputed)){
		inputData.value = ""
		alert('Input some numbers please')
	}else{
		items.push(inputData.value);
		showItems.innerHTML = 'Array:  '+ items ;
		inputData.value = ""
	}
	
}


var btnShow = document.getElementById('show-result')
var result = document.getElementById('result')

btnShow.addEventListener('click' , showResult)

function showResult(){
	var sortedArray = quickSort(items, 0, items.length - 1);
	result.innerHTML = 'Sorted Array: <strong> ' +  sortedArray + '</strong>';
}

var btnReset = document.getElementById('reset')
btnReset.addEventListener('click', reset)

function reset(){
	items = []
	showItems.innerHTML = "Array:  "
	result.innerHTML = "Sorted Array:  "
}
