import Graph from './graph'

const Graphs = ({ date, tlms }) => {
  const plotlyColors = [
    '#636EFA',
    '#EF553B',
    '#00CC96',
    '#AB63FA',
    '#FFA15A',
    '#19D3F3',
    '#FF6692',
    '#B6E880',
    '#FF97FF',
    '#FECB52',
  ]
  const colorLength = plotlyColors.length

  return (
    <>
      {Object.keys(tlms).map((tlmName, index) => {
        const color = plotlyColors[index % colorLength]
        return (
          <Graph
            key={index}
            x={date}
            y={tlms[tlmName]}
            color={color}
            title={tlmName}
          />
        )
      })}
    </>
  )
}

export default Graphs
