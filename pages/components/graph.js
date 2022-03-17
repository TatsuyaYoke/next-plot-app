import Plot from 'react-plotly.js' 

const Graph = (props) => {
   return (
      <Plot
        key={ props.key } 
        data={[
            {
                x: props.x,
                y: props.y,
                type: 'scattergl',
                mode: 'lines+markers',
                marker: { color: props.color } 
            }
        ]}
        layout={{
            width: 500,
            height: 500,
            // title: props.title
            xaxis: {
                tickformat: '%m-%d, %H:%M',
                tickangle: -45,
                dtick: 3 * 60 * 60 * 1000 // milliseconds
            }
        }}
      /> 
   ) 
} 

export default Graph