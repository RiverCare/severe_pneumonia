function makeTopChart(data){
	let data1 = data[0]
	let data2 = data[1];

	let outside = parseInt(data1[0]);
	let inside = parseInt(data1[1]);
	let sum = outside+inside;
	
	var chart1 = new CanvasJS.Chart("top-chart-container1", {
		theme: "light2",
		exportFileName: "Doughnut Chart",
		animationEnabled: true,
		backgroundColor:"#f4f5f6",
		title:{
			text: "台灣最新疫情（總共"+sum+"人）",
			fontFamily: "'Noto Sans TC', sans-serif",
			fontColor:"#606c76",
			fontSize:20
		},
		legend:{
			cursor: "pointer",
			itemclick: explodePie
		},
		width:700,
		height:400,
		data: [{
			type: "doughnut",
			innerRadius: 110,
			showInLegend: true,
			toolTipContent: "#percent%",
			indexLabel: "{name} - {y} 人",
			dataPoints: [
				{ y: outside, name: "境外移入" },
				{ y: inside, name: "本土病例" }
			]
		}]
	});
	chart1.render();

	function explodePie (e) {
		if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
			e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
		} else {
			e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
		}
		e.chart.render();
	}
	
	for (i = 0; i< data[1].length; i++){
		data[1][i] = data[1][i].split(",");
		data[1][i][1] = parseInt(data[1][i][1]);
	}
	
	var chart2 = new CanvasJS.Chart("top-chart-container2", {
		theme: "light2",
		animationEnabled: true,
		title:{
			text: "台灣最新各縣市病例統計",
			backgroundColor:"#f4f5f6",
			fontFamily: "'Noto Sans TC', sans-serif",
			fontColor:"#606c76",
			fontSize:20
		},
		backgroundColor:"#f4f5f6",
		height:600,
		width:700,
		axisX:{
			labelFontSize:15
		},
		axisY:{
			interval:10,
			labelFontSize:15,
		},
		dataPointWidth: 20,
		data: [
		{
			type: "bar",
			color: "#014D65",
			indexLabel: "{label} - {y} 人",
			indexLabelFontSize:10,
			dataPoints: [
				{ label: "基隆市", y: data[1][0][1] },
				{ label: "新竹縣", y: data[1][4][1] },
				{ label: "宜蘭縣", y: data[1][5][1] },
				{ label: "苗栗縣", y: data[1][6][1] },
				{ label: "南投縣", y: data[1][8][1] },
				{ label: "花蓮縣", y: data[1][9][1] },
				{ label: "桃園市", y: data[1][3][1] },
				{ label: "雲林縣", y: data[1][11][1] },
				{ label: "彰化縣", y: data[1][10][1] },
				{ label: "嘉義縣", y: data[1][12][1] },
				{ label: "台南市", y: data[1][13][1] },
				{ label: "台東縣", y: data[1][15][1] },
				{ label: "高雄市", y: data[1][14][1] },
				{ label: "屏東縣", y: data[1][16][1] },
				{ label: "台中市", y: data[1][7][1] },
				{ label: "澎湖縣", y: data[1][17][1] },
				{ label: "新北市", y: data[1][1][1] },
				{ label: "金門縣", y: data[1][18][1] },
				{ label: "台北市", y: data[1][2][1] },
				{ label: "連江縣", y: data[1][19][1] }
			]
		}
		]
	});
	chart2.render();
}