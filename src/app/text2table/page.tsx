'use client'

import React, { useState } from 'react'
import Container from '../components/layouts/container'
import { Label, Textarea } from 'flowbite-react'

const Text2Table = () => {
    const [input, setInput] = useState("")
    const [output, setOutput] = useState("")
    const [preview, setPreview] = useState("Your preview should appear here")

    const handleInput = (e: any) => {
        var result = e.target.value;
        var prev = e.target.value;
        setInput(result)
        result = result.replace(/[&'`"<>]/g, function (match: string | number) {
            return {
                '&': '&amp;',
                "'": '&#x27;',
                '`': '&#x60;',
                '"': '&quot;',
                '<': '&lt;',
                '>': '&gt;',
            }[match]
        });
        result = prev.replace(/[&'`"<>]/g, function (match: string | number) {
            return {
                '&': '&amp;',
                "'": '&#x27;',
                '`': '&#x60;',
                '"': '&quot;',
                '<': '&lt;',
                '>': '&gt;',
            }[match]
        });
        result = result.replace(/\t/gim, "</td><td>");
        prev = prev.replace(/\t/gim, "</td><td class='px-6 py-4'>");
        result = result.replace(/^(.+?)$/gim, "<tr><td>$1</td></tr>");
        prev = prev.replace(/^(.+?)$/gim, "<tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'><td class='px-6 py-4'>$1</td></tr>");
        result = "<table>\n" + result + "</table>";
        prev = "<table class='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>\n" + prev + "</table>";
        setOutput(result)
        setPreview(prev)
    }
    return (
        <Container>
            <h1>Text2Table</h1>
            <p>Convert your Excel data into HTML.</p>
            <div className="max-w-full my-6">
                <div className="mb-6">
                    <div className="mb-2 block">
                        <Label htmlFor="input" value="Input" />
                    </div>
                    <Textarea id="input" value={input} placeholder="Paste your data from Excel here" required rows={6} onChange={(e) => handleInput(e)} />
                </div>
                <div className="mb-6">
                    <div className="mb-2 block">
                        <Label htmlFor="output" value="Output" />
                    </div>
                    <Textarea id="output" value={output} placeholder="Your data in HTML format should appear here" required rows={6} />
                </div>
                <div className="mb-6">
                    <div className="mb-2 block">
                        <Label htmlFor="preview" value="Preview" />
                    </div>
                    <div className='relative max-h-svh p-2 overflow-x-auto border text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-500 dark:bg-gray-800 rounded-lg' id="preview" dangerouslySetInnerHTML={{ __html: preview }}></div>
                </div>
            </div>
        </Container>
    )
}

export default Text2Table