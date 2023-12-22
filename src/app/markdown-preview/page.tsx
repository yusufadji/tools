'use client'

import React, { useRef, useState } from 'react'
import Container from '../components/layouts/container'
import { Label, Textarea } from 'flowbite-react';
import ReactMarkdown from 'react-markdown';


const MarkdownPreview = () => {
    const inputRef = useRef<HTMLTextAreaElement | null>(null)
    const [input, setInput] = useState("")

    const handleInput = (e: any) => {
        setInput(e)
    }

    return (
        <Container>
            <h1>Markdown Preview</h1>
            <p>Type your markdown here and display it previews instantly.</p>
            <div className="max-w-full my-6">
                <div className="mb-6">
                    <div className="mb-2 block">
                        <Label htmlFor="input" value="Input" />
                    </div>
                    <Textarea id="input" ref={inputRef} value={input} placeholder="Paste your Markdown here" required rows={6} onChange={(e) => { setInput(e.target.value); handleInput(e.target.value) }} />
                </div>
                <div className="mb-6">
                    <h2>Preview</h2>
                    <p>Your preview should appear below.</p>
                    <ReactMarkdown className="mt-4">{input}</ReactMarkdown>
                </div>
            </div>
        </Container>
    )
}

export default MarkdownPreview