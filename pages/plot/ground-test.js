import Head from 'next/head'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Plot from 'react-plotly.js'
import axios from 'axios'

const GroundTest = () => {
    const [date, setDate] = useState([])
    const [otherTlm, setOtherTlm] = useState({})
    const [tlmNames, setTlmNames] = useState([])
    const plotlyColors = ['#636EFA', '#EF553B', '#00CC96', '#AB63FA', '#FFA15A', '#19D3F3', '#FF6692', '#B6E880', '#FF97FF', '#FECB52'] 
    
    const fetchTlmNames = async () => {
        const response = await axios.get('http://localhost:3000/api/fetch-tlm')
        const tlmNames = Object.keys(response.data)
        setTlmNames(() => tlmNames)
    }
    
    useEffect(() => {
        fetchTlmNames()
    }, [])
    
    const plotTelemetry = async () => {
        console.log('Plot')
        const response = await axios.get('http://localhost:3000/api/fetch-tlm')
        const { DATE, ...otherData } = response.data
        setDate(() => response.data['DATE'])
        setOtherTlm(() => otherData)
    }
    return (
        <>
            <Head>
                <title>Ground Test Viewer</title>
            </Head>
            <h1>Ground Test Viewer</h1>
            <h2>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </h2>
            {
                tlmNames.map((tlmName, index) => {
                    return (
                        <p key={ index }>{ tlmName }</p>
                    )
                })
            }
            <button onClick={plotTelemetry}>Plot</button>
            <div>
                {
                    Object.keys(otherTlm).map((key, index) => {
                        const colorLength = plotlyColors.length
                        const color = plotlyColors[index % colorLength]
                        return (
                            <Plot
                                key={ index }
                                data={[
                                    {
                                        x: date,
                                        y: otherTlm[key],
                                        type: 'scattergl',
                                        mode: 'lines+markers',
                                        marker: { color: color }
                                    }
                                ]}
                                layout={{
                                    width: 500,
                                    height: 500,
                                    title: key 
                                }}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default GroundTest 