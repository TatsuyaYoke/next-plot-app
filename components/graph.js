import dynamic from 'next/dynamic'

// react-plotly.js は SSR に対応していないので、next/dynamic を用いてあげましょう！
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false })

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