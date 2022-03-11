import Head from 'next/head'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Plot from 'react-plotly.js'
import axios from 'axios'

const products = [
    "apple",
    "banana",
    "orange",
    "cheese cake",
    "banana cake",
    "apple juice",
    "orange juice"
]

const GroundTest = () => {
    const [date, setDate] = useState([])
    const [otherTlm, setOtherTlm] = useState({})
    const [tlmNames, setTlmNames] = useState([])
    const plotlyColors = ['#636EFA', '#EF553B', '#00CC96', '#AB63FA', '#FFA15A', '#19D3F3', '#FF6692', '#B6E880', '#FF97FF', '#FECB52'] 
    
    const [keyword, setKeyword] = useState("")
    const [showLists, setShowLists] = useState(false)
    const [filteredProducts, setFilteredProducts] = useState(products)

    const fetchTlmNames = async () => {
        const response = await axios.get('http://localhost:3000/api/fetch-tlm')
        const tlmNames = Object.keys(response.data)
        setTlmNames(() => tlmNames)
    }
    
    const filterProducts = () => {
        if (keyword === "") {
            setFilteredProducts(products)
            return
        }
      
        const searchKeywords = keyword
            .trim()
            .toLowerCase()
            .match(/[^\s]+/g);

        if (searchKeywords === null) {
            setFilteredProducts(products)
            return
        }
        const result = products.filter((product) =>
            searchKeywords.every((kw) => product.toLowerCase().indexOf(kw) !== -1)
        )
      
        setFilteredProducts(result.length ? result : ["No Item Found"])
    }

    useEffect(() => {
        // fetchTlmNames()
        filterProducts()
    }, [keyword])
    
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
            <input 
                onChange={e => setKeyword(e.target.value)}
                onClick={() => setShowLists(true)}
            />
            { 
                showLists && filteredProducts.map((v, i) => {
                    return (
                        <p key={ i }>{ v }</p>
                    )
                })
            }
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