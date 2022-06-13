import React from "react";
import ReactDOM from "react-dom";
import ReactApexChart from "react-apexcharts";


class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
              'United States', 'China', 'Germany'
            ],
          }
        },
      
      
      };
    }

  

    render() {
      return (
        
<div className="card">
    <p>Barras <img class="logoInformacoes" src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Icon_Information.svg"></img></p>
    <div id="barras" className="grafico">
    <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
    </div>
</div>
    );
}
}

//const domContainer = document.querySelector('root');
const domContainer = document.getElementById("root");
ReactDOM.render(React.createElement(ApexChart), domContainer);


export default ApexChart;