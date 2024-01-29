'use client'

import React, { useRef, useState } from 'react'
import Container from '../components/layouts/container'
import QRCode from 'react-qr-code'
import { Label, TextInput } from 'flowbite-react'

const Text2QR = () => {
    const inputRef = useRef<HTMLTextAreaElement | null>(null);
    const [input, setInput] = useState("")
    const handleInput = (e: any) => {
        setInput(e)
    }
    return (
        <Container>
            <h1>Text 2 QR</h1>
            <p>Convert your text become QR Codes.</p>
            <div className="max-w-full my-6">
                <div className="mb-6">
                    <div className="mb-2 block">
                        <Label htmlFor="input" value="Input" />
                    </div>
                    <TextInput id="input" value={input} placeholder="Paste your CSS here" required onChange={(e) => { setInput(e.target.value); handleInput(e.target.value) }} />
                </div>
            </div>
            <div style={{ height: "auto", margin: "0 auto", maxWidth: 256, width: "100%" }}>
                <QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value={input}
                    viewBox={`0 0 256 256`}
                />
            </div>
        </Container>

    )
}

export default Text2QR