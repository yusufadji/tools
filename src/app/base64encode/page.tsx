'use client'

import React, { useRef, useState } from 'react'
import Container from '../components/layouts/container'
import { Label, TextInput } from 'flowbite-react'

const Base64Encode = () => {
    const [input, setInput] = useState("")
    const [output, setOutput] = useState("")
    const handleInput = (e: any) => {
        setInput(e)
        encode(e).then((encoded: any) => setOutput(encoded))
    }
    const encode = (...parts: any) => {
        return new Promise(resolve => {
            const reader = new FileReader();
            reader.onload = () => {
                const offset = (reader?.result as string)?.indexOf(",") + 1;
                resolve(reader?.result?.slice(offset));
            };
            reader.readAsDataURL(new Blob(parts));
        });
    }
    return (
        <Container>
            <h1>Base64 Encode</h1>
            <p>Encode string into Base64 format</p>

            <div className="max-w-full my-6">
                <div className="mb-6">
                    <div className="mb-2 block">
                        <Label htmlFor="input" value="Input" />
                    </div>
                    <TextInput id="input" value={input} placeholder="Enter text here" required onChange={(e) => { setInput(e.target.value); handleInput(e.target.value) }} />
                </div>
            </div>
            <div className="max-w-full my-6">
                <div className="mb-6">
                    <div className="mb-2 block">
                        <Label htmlFor="output" value="Output" />
                    </div>
                    <TextInput id="output" value={output} placeholder="Encoded text" />
                </div>
            </div>
        </Container>
    )
}

export default Base64Encode