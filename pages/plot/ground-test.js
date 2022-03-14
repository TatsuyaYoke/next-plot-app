import Head from 'next/head'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Graphs from '../components/graphs'
import { Button } from '@chakra-ui/react'

const GroundTest = () => {
    const [date, setDate] = useState([])
    const [tlms, setTlms] = useState({})
    const [tlmNames, setTlmNames] = useState([])
    
    const [keyword, setKeyword] = useState("")
    const [filteredTlmNames, setFilteredTlmNames] = useState([])

    const fetchTlmNames = async () => {
        const response = await axios.get('http://localhost:3000/api/fetch-tlm')
        const tlmNames = Object.keys(response.data)
        setTlmNames(() => tlmNames)
    }
    
    const filterTlmNames = () => {
        if (keyword === "") {
            setFilteredTlmNames(tlmNames)
            return
        }
      
        const filteredTlmNames = tlmNames.filter((tlmName) => {
           return tlmName.toLowerCase().search(keyword.toLowerCase()) !== -1 
        })
        setFilteredTlmNames(filteredTlmNames.length ? filteredTlmNames: ['Not found'])
    }

    useEffect(() => {
        fetchTlmNames()
    }, [])

    useEffect(() => {
        filterTlmNames()
    }, [keyword])
    
    const plotTelemetry = async () => {
        console.log('Plot')
        const response = await axios.get('http://localhost:3000/api/fetch-tlm')
        const { DATE, ...otherData } = response.data
        setDate(() => response.data['DATE'])
        setTlms(() => otherData)
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
            />
            { 
                filteredTlmNames.map((tlmName, index) => {
                    return (
                        <p key={ index }>{ tlmName }</p>
                        )
                    })
                }
            <Button onClick={ plotTelemetry } colorScheme="blue">Plot</Button>
            <div>
                <Graphs
                    date={ date } 
                    tlms={ tlms }
                />
            </div>
        </>
    )
}

export default GroundTest 