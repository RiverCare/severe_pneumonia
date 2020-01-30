function makeStatChart(loc,data){	
	switch(loc){
	case 0:
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
		
		var chart1 = new CanvasJS.Chart("stat-chart-container1", {
			animationEnabled: true,
			zoomEnabled: true,
			theme: "light1",
			backgroundColor:"#f4f5f6",
			title:{
				text: "台灣疫情統計（總共"+sum+"人）",
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
		chart1.render();
		break;
	case 1:
		let total = parseInt(data[0]);
		let dead = parseInt(data[1]);
		let cured = parseInt(data[2]);
		let treat = total - dead - cured;
		var chart2 = new CanvasJS.Chart("stat-chart-container2", {
			theme: "light2",
			exportFileName: "Doughnut Chart",
			animationEnabled: true,
			backgroundColor:"#f4f5f6",
			title:{
				text: "全球最新疫情（總共"+total+"人）",
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
					{ y: treat, name: "治療中" },
					{ y: cured, name: "治癒" },
					{ y: dead, name: "死亡" }
				]
			}]
		});
		chart2.render();

		function explodePie (e) {
			if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
				e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
			} else {
				e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
			}
			e.chart.render();
		}
	}
}