import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import Plot from 'react-plotly.js'

const GroundTest = () => {

    const [date, setDate] = useState([])
    const [voltage, setVoltage] = useState([])
    
    const plotTelemetry = async () => {
        console.log('Plot')
        const response = await fetch('http://localhost:3000/api/fetch-tlm')
        const data = await response.json()
        setDate(() => data['DATE'])
        setVoltage(() => data['PCDU_BAT_VOLTAGE'])
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
            <button onClick={plotTelemetry}>Plot</button>
            <Plot
                data={[
                    {
                        x: date,
                        y: voltage,
                        type: 'scattergl',
                        mode: 'lines+markers',
                        marker: { color: 'red'}
                    },
                ]}
                layout={{
                    width: 500,
                    height: 500,
                    title: 'Tutorial Plot'
                }}
            />
        </>
    )
}

export default GroundTest 