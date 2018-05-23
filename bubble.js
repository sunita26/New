<!DOCTYPE html>
<html>
	<title>Bubble Sort</title>
	<head>
		<h4>Bubble sort <p id="original"></p>
		<p id="Bubble"></p>
		</h4>
<script>
function bubbleSort(numbers) {
	var length = numbers.length;
	for (var i = (length - 1); i >= 0; i--) {
		
		for (var j = (length - i); j > 0; j--) {
			
			if (numbers[j] < numbers[j - 1]) {
				var tmp = numbers[j];
				numbers[j] = numbers[j - 1];
				numbers[j - 1] = tmp;
			}
		}
	}
	document.getElementById("Bubble").innerHTML="After Sorting "+numbers;
		
}
var arr = [28,3,23,62,31,14];
document.getElementById("original").innerHTML=arr;
var n=bubbleSort(arr);
console.log(n);
</script> </head>

</html>

