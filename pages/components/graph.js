import Plot from 'react-plotly.js'

const Graph = ({ x, y, color, _title }) => {
  return (
    <Plot
      data={[
        {
          x: x,
          y: y,
          type: 'scattergl',
          mode: 'lines+markers',
          marker: { color: color },
        },
      ]}
      layout={{
        width: 500,
        height: 500,
        // title: title
        xaxis: {
          tickformat: '%m-%d, %H:%M',
          tickangle: -45,
          dtick: 3 * 60 * 60 * 1000, // milliseconds
        },
      }}
    />
  )
}

export default Graph
