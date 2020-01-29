function makeStatChart(data){	
	let objs_sum = [];
	let objs_one = [];
	
	let sum = 0;
	for (day in data){
		obj_one = new Object();
		obj_one["x"] =  parseInt(data[day].split(",")[0]);
		obj_one["y"] = parseInt(data[day].split(",")[1]);
		objs_one.push(obj_one);
		
		obj_sum = new Object();
		obj_sum["x"] = obj_one["x"];
		sum += obj_one["y"];
		obj_sum["y"] = sum;
		objs_sum.push(obj_sum);
	}
	
	let datas = []
	let data1 = new Object();
	let data2 = new Object();
	
	data1["type"] = "splineArea";
	data1["showInLegend"] = true;
	data1["name"] = "累計確診病例";
	data1["dataPoints"] = objs_sum;
	data1["color"] = "#014D65",
	data1["fontColor"] = "#606c76",
	datas.push(data1);
	
	data2["type"] = "column";
	data2["showInLegend"] = true;
	data2["name"] = "當日確診病例";
	data2["dataPoints"] = objs_one;
	data2["color"] = "#B0C4DE",
	data2["fontColor"] = "#606c76",
	datas.push(data2);
	
	var chart = new CanvasJS.Chart("stat-chart-container", {
		animationEnabled: true,
		zoomEnabled: true,
		theme: "light1",
		backgroundColor:"#f4f5f6",
		title:{
			text: "全台疫情統計（總共"+sum+"人）",
			fontFamily: "'Noto Sans TC', sans-serif",
			fontColor:"#606c76",
			fontSize:20
		},
		axisX:{
			minimum: 121,
			title: "日期",
			interval: 1,
			fontColor:"#606c76",
			labelFontColor:"#606c76",
			crosshair: {
				enabled: true,
				snapToDataPoint: true
			}
		},
		axisY:{
			minimum: 0,
			title: "人",
			interval: 1,
			fontColor:"#606c76",
			labelFontColor:"#606c76"
		},
		toolTip: {
			shared: true
		},
		legend:{
			verticalAlign: "top",
			fontSize: 16,
			dockInsidePlotArea: true
		},
		dataPointWidth: 50,
		data: datas
	});
	chart.render();
	
}