function closeModal(value) {

  var fecha = value.className.substring(11); 
  document.getElementsByClassName(fecha)[0].style.display = 'none';
  var html = document.documentElement;
  html.style.overflowY = 'auto';  
}

function switcherHistoric(value){

  var idBtn = value.id.substring(5);
  var tmp = [];
  var abt = [];
  var csm = [];
  var categDia = [];
  var categHora = [];
  value.className = 'focused';

  if(value.id === "daily"+idBtn) {
    categHora = document.getElementById('diarioHora'+idBtn).innerText.split(' ').slice(0,-1);
    for(var i=0;i<categHora.length;i++){
      categHora[i]=categHora[i]+":00";
    }
    chart.xAxis[0].update({categories: categHora}, true)
    document.getElementById('month'+idBtn).className = '';
    tmp = document.getElementById('diarioTmp'+idBtn).innerText.split(' ').slice(0,-1).map(Number);
    chart.series[1].update({data: tmp});
    abt = document.getElementById('diarioAbt'+idBtn).innerText.split(' ').slice(0,-1).map(Number);
    chart.series[0].update({data: abt});
    csm = document.getElementById('diarioCsm'+idBtn).innerText.split(' ').slice(0,-1).map(Number);
    chart.series[2].update({data: csm});

  }
  else {
    categDia = document.getElementById('mensalDia'+idBtn).innerText.replace(/\/2017/g, '').split(' ').slice(0,-1)
    chart.xAxis[0].update({categories: categDia}, true)
    document.getElementById('daily'+idBtn).className = ''; 
    tmp = document.getElementById('mensalTmp'+idBtn).innerText.split(' ').slice(0,-1).map(Number);
    chart.series[1].update({data: tmp});
    abt = document.getElementById('mensalAbt'+idBtn).innerText.split(' ').slice(0,-1).map(Number);
    chart.series[0].update({data: abt});
    csm = document.getElementById('mensalCsm'+idBtn).innerText.split(' ').slice(0,-1).map(Number);
    chart.series[2].update({data: csm});
  }
}

function switcher(value) {
  var substring = "focused";
  var current = value.id.substring(0,3)
  var serie;
  if (current ==="abt"){
    serie = 0;
  }else if (current ==="tmp"){
    serie = 1;
  }else if (current ==="csm"){
    serie = 2;
  }
  if(value.className.indexOf(substring) == -1){
    value.className += ' '+substring;
    chart.series[serie].show();
  }
  else {
    value.className = value.className.replace(substring, "");
    chart.series[serie].hide();
  }
}

function showSlider(value) {

  var tt= document.getElementsByClassName("subHeaderModal " + value)[0];

  if(tt.style.display === 'none' || tt.style.display === '') 
  {
    tt.style.display = 'block';
  }
  else {
    tt.style.display = 'none';
  }
}

function showList() {
  var list = document.getElementsByClassName('side');
  if(list[0].style.display === 'none' || list[0].style.display === '') 
  {
    list[0].style.display = 'block';
  }
  else {
    list[0].style.display = 'none';
  }
}

function showModal(value) {


  var html = document.documentElement;
  html.style.overflowY = 'hidden';
  var modal = "modal"+value.id;
  var chartContainer = "containerGraph"+value.id;

  var switchs = document.getElementsByClassName('switch');
  var len = switchs.length;
  for(var i = 0; i < len; i++) {
      switchs[i].className = "switch focused"; 
  }

  document.getElementById('month'+value.id).className = '';
  document.getElementById('daily'+value.id).className = 'focused';

  //Mostra modal
  var t1= document.getElementsByClassName(modal)[0];

  if(t1.style.display === 'none' || t1.style.display === '') 
  {
    t1.style.display = 'block';
  }
  else {
    t1.style.display = 'none';
  }

  var tmp = [];
  var abt = [];
  var csm = []; 
  var hr = []; 
  
  tmp = document.getElementById('diarioTmp'+value.id).innerText.split(' ').slice(0,-1).map(Number);
  abt = document.getElementById('diarioAbt'+value.id).innerText.split(' ').slice(0,-1).map(Number);
  csm = document.getElementById('diarioCsm'+value.id).innerText.split(' ').slice(0,-1).map(Number);
  hr = document.getElementById('diarioHora'+value.id).innerText.split(' ').slice(0,-1);
  for(var i=0;i<hr.length;i++){
    hr[i]=hr[i]+":00";
  }

  chart = Highcharts.chart(chartContainer, { 
    title: {
        text: null
    },
    yAxis: [{
      title: {
        text: null
      },
    },{
      temperatura: ['-40', '-30', '-20', '-10', '-5', '0', '5', '10', '20', '30', '40'],
      title: {
        text: null
      },
      opposite: true
    }],
    xAxis: {
        categories: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00','11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00','22:00', '23:00', '24:00' ]
    },
     credits: {
      enabled: false
    },
    labels: {
        items: [{
            style: {
                left: '50px',
                top: '18px',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
            }
        }]
    },
        plotOptions: {
        series: {
            color: '#199ed8'
        }
    },
    series: [{
        type: 'column',
        name: 'Abertura',
        data: abt,
    },

     {
        type: 'spline',
        name: 'Temperatura',
        data: tmp,
         color: '#f2a46e',
        marker: {
            lineWidth: 2,
            fillColor: '#f2a46e'
        },
        yAxis: 1
    },
         {
        type: 'spline',
        name: 'Consumo',
        data: csm,
         color: '#9aad04',
        marker: {
            lineWidth: 2,
            fillColor: '#9aad04'
        }
    }]
});

  chart.xAxis[0].update({categories: hr}, true)

}
