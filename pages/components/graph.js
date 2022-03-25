import dynamic from 'next/dynamic'
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false })

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
        margin: {
          l: 50,
          r: 50,
          t: 20,
          b: 80,
        },
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
