google.charts.load('current', {packages:["orgchart"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Name');
  data.addColumn('string', 'higher');

  // For each orgchart box, provide the name, manager, and tooltip to show.
  data.addRows([
    [{v:'OTList', f:'Охрана труда'},
     ''],
    ['правовые', 'OTList'],
		['лечебно-профилактические', 'OTList'],
    ['санитарно-гигиенические', 'OTList'],
    ['социально-экономические', 'OTList'],
    ['организационно-технические', 'OTList'],
    ['реабилитационные', 'OTList'],
    ['иные.', 'OTList'],
  ]);

  // Create the chart.
  var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
  // Draw the chart, setting the allowHtml option to true for the tooltips.
  chart.draw(data, {allowHtml:true});
}