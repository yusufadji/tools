'use client'

import React, { useRef, useState } from 'react'
import Container from '../components/layouts/container'
import { Label, TextInput } from 'flowbite-react'

const Base64Decode = () => {
    const [input, setInput] = useState("")
    const [output, setOutput] = useState("")
    const handleInput = (e: any) => {
        setInput(e)
        decode(e, null).then((decoded: any) => setOutput(decoded))
    }
    const decode = async (text: any, charset: any | null) => {
        if (text != null || "") {
            return fetch(`data:text/plain;charset=${charset};base64,` + text).then(response => response.text());
        }
    }
    return (
        <Container>
            <h1>Base64 Decode</h1>
            <p>Decode string into Base64 format</p>

            <div className="max-w-full my-6">
                <div className="mb-6">
                    <div className="mb-2 block">
                        <Label htmlFor="input" value="Input" />
                    </div>
                    <TextInput id="input" value={input} placeholder="Enter encoded text here" required onChange={(e) => { setInput(e.target.value); handleInput(e.target.value) }} />
                </div>
            </div>
            <div className="max-w-full my-6">
                <div className="mb-6">
                    <div className="mb-2 block">
                        <Label htmlFor="output" value="Output" />
                    </div>
                    <TextInput id="output" value={output} placeholder="Decoded text" />
                </div>
            </div>
        </Container>
    )
}

export default Base64Decode