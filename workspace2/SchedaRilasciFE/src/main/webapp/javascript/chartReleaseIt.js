$.getJSON('http://localhost:8080/SchedaRilasci/releaseIT', function (result) {
	var label = [], data= [];
	for(var item in result){
        data.push(result[item].slice(0,1).toString());
        label.push(result[item].slice(1,2).toString());
    }
	var obj=data;
	var ctx = document.getElementById('myChart').getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: label,
			datasets: [{
				label: 'ReleaseIT',
				//backgroundColor: "rgba(77,156,53,1)",
				borderColor: "rgba(77,156,53,1)",
				data: data
			}, {
				label: 'Deroghe',
				//backgroundColor: "rgba(190,17,16,1)",
				borderColor: "rgba(190,17,16,1)",
				data: [30, 29, 5, 5, 20, 3, 10]
			}]
		}
	});
});







