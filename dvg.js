document.getElementById('dataType').addEventListener('change', function() {
    const inputOptions = document.getElementById('inputOptions');
    if (this.value === 'numeric') {
      inputOptions.innerHTML = `
        <div>
          <label for="xAxisInput">X-Axis Data:</label>
          <input type="text" id="xAxisInput" placeholder="Enter X-axis data separated by commas">
        </div>
        <div>
          <label for="yAxisInput">Y-Axis Data:</label>
          <input type="text" id="yAxisInput" placeholder="Enter Y-axis data separated by commas">
        </div>
      `;
    } else if (this.value === 'categorical') {
      inputOptions.innerHTML = `
        <div>
          <label for="xAxisInput">X-Axis Data:</label>
          <input type="text" id="xAxisInput" placeholder="Enter X-axis data separated by commas (categories)">
        </div>
        <div>
          <label for="yAxisInput">Y-Axis Data:</label>
          <input type="text" id="yAxisInput" placeholder="Enter Y-axis data separated by commas">
        </div>
      `;
    }
  });
  
  document.getElementById('submitData').addEventListener('click', () => {
    const dataType = document.getElementById('dataType').value;
    const xAxisInput = document.getElementById('xAxisInput').value;
    const yAxisInput = document.getElementById('yAxisInput').value;
    const graphType = document.getElementById('graphType').value;
    let xData, yData;
  
    if (dataType === 'numeric') {
      xData = xAxisInput.split(',').map(Number);
      yData = yAxisInput.split(',').map(Number);
    } else if (dataType === 'categorical') {
      xData = xAxisInput.split(',');
      yData = yAxisInput.split(',').map(Number);
    }
  
    let graphData;
  
    if (graphType === 'bar') {
        graphData = [{
            x: xData,
            y: yData,
            type: 'bar'
          }];
        } else if (graphType === 'line') {
          graphData = [{
            x: xData,
            y: yData,
            mode: 'lines',
            type: 'scatter'
          }];
        } else if (graphType === 'pie') {
          graphData = [{
            values: yData,
            labels: xData,
            type: 'pie'
          }];
        }
      
        const layout = {
          title: 'Graph',
          showlegend: false
        };
      
        Plotly.newPlot('graph', graphData, layout);
      });
      
      document.getElementById('resetGraph').addEventListener('click', () => {
        document.getElementById('graph').innerHTML = ''; // Clear the graph
        document.getElementById('xAxisLabel').value = ''; // Clear the x-axis input
        document.getElementById('yAxisLabel').value = ''; // Clear the y-axis input
        document.getElementById('xAxisInput').value = ''; // Clear the x-axis input
        document.getElementById('yAxisInput').value = ''; // Clear the y-axis input
      });
      
      document.getElementById('submitData').addEventListener('click', () => {
        const xAxisLabel = document.getElementById('xAxisLabel').value;
        const yAxisLabel = document.getElementById('yAxisLabel').value;
      
        // ... (existing code for processing data and creating graphData) ...
      
        const layout = {
          title: 'Graph',
          xaxis: {
            title: {
              text: xAxisLabel
            }
          },
          yaxis: {
            title: {
              text: yAxisLabel
            }
          },
          showlegend: false
        };
      
        Plotly.newPlot('graph', graphData, layout);
      });
      
      