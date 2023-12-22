'use client'

import React, { useState, useRef, useEffect } from 'react'
import Container from '../components/layouts/container'
import { Button, Label, Textarea, Toast, ToggleSwitch, CustomFlowbiteTheme } from 'flowbite-react'
import { HiCheck } from 'react-icons/hi';

const customToast: CustomFlowbiteTheme['toast'] = {
    "root": {
        "base": "flex items-center w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400 transition",
        "closed": "opacity-0 ease-out"
    },
    "toggle": {
        "base": "-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white",
        "icon": "h-5 w-5 shrink-0"
    }
}

const MinifyCSS = () => {
    const inputRef = useRef<HTMLTextAreaElement | null>(null);
    const outputRef = useRef<HTMLTextAreaElement | null>(null);
    const [input, setInput] = useState("")
    const [output, setOutput] = useState("")
    const [stripComment, setStripComment] = useState(false)
    const [superCompact, setSuperCompact] = useState(false)
    const [betterIndentation, setBetterIndentation] = useState(false)
    const [keepLastComma, setKeepLastComma] = useState(false)
    const [isOutputCopied, setIsOutputCopied] = useState(false)
    const [isFieldCleared, setIsFieldCleared] = useState(false)

    useEffect(() => {
        compressCSS(input)
    }, [stripComment, superCompact, betterIndentation, keepLastComma])

    const compressCSS = (e: any) => {
        var a = e
        var c = /@(media|-w|-m|-o|keyframes|page)(.*?)\{([\s\S]+?)?\}\}/gi
        var n = a
        var t = n.length
        n = stripComment || superCompact ? n.replace(/\/\*[\w\W]*?\*\//gm, "") : n.replace(/(\n+)?(\/\*[\w\W]*?\*\/)(\n+)?/gm, "\n$2\n"), n = n.replace(/([\n\r\t\s ]+)?([\,\:\;\{\}]+?)([\n\r\t\s ]+)?/g, "$2"), n = superCompact ? n : n.replace(/\}(?!\})/g, "}\n"), n = betterIndentation ? n.replace(c, function (e: any) {
            return e.replace(/\n+/g, "\n  ")
        }) : n.replace(c, function (e: any) {
            return e.replace(/\n+/g, "")
        }), n = betterIndentation && !superCompact ? n.replace(/\}\}/g, "}\n}") : n, n = betterIndentation && !superCompact ? n.replace(/@(media|-w|-m|-o|keyframes)(.*?)\{/g, "@$1$2{\n  ") : n, n = keepLastComma ? n.replace(/;\}/g, "}") : n.replace(/\}/g, ";}").replace(/;+\}/g, ";}").replace(/\};\}/g, "}}"), n = n.replace(/\:0(px|em|pt)/gi, ":0"), n = n.replace(/ 0(px|em|pt)/gi, " 0"), n = n.replace(/\s+\!important/gi, "!important"), n = n.replace(/(^\n+|\n+$)/, ""), setOutput(n)
    }
    const handleSelectAll = () => {
        if (outputRef.current) {
            outputRef.current.focus();
            outputRef.current.select();
        }
        if (output) {
            setIsOutputCopied(true)
        }
    }
    const handleClearField = () => {
        setInput("")
        setOutput("")
        if (input != "" && output != "") {
            setIsFieldCleared(true)
        }
    }
    const handleInput = (e: any) => {
        compressCSS(e)
    }
    return (
        <Container>
            <h1>Minify CSS</h1>
            <p>Compress your CSS as small as possible to reduce its size and improve your SEO.</p>
            <div className="max-w-full my-6">
                <div className="mb-6">
                    <div className="mb-2 block">
                        <Label htmlFor="input" value="Input" />
                    </div>
                    <Textarea id="input" ref={inputRef} value={input} placeholder="Paste your CSS here" required rows={6} onChange={(e) => { setInput(e.target.value); handleInput(e.target.value) }} />
                </div>
                <div className="mb-6">
                    <h2>Options</h2>
                    <div className="w-fit grid grid-rows-4 gap-2">
                        <ToggleSwitch checked={stripComment} label="Strip all comments" onChange={setStripComment} ></ToggleSwitch>
                        <ToggleSwitch checked={superCompact} label="Super compact" onChange={setSuperCompact} ></ToggleSwitch>
                        <ToggleSwitch checked={betterIndentation} label="Keep indentation" onChange={setBetterIndentation} ></ToggleSwitch>
                        <ToggleSwitch checked={keepLastComma} label="Remove last semicolon" onChange={setKeepLastComma} ></ToggleSwitch>
                    </div>
                </div>
                <div className="mb-6">
                    <div className="mb-2 block">
                        <Label htmlFor="output" value="Output" />
                    </div>
                    <Textarea id="output" ref={outputRef} value={output} placeholder="Your compressed CSS should appear here" required rows={6} />
                </div>
                <div className="mb-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    <Button onClick={handleSelectAll} color="light">Select All</Button>
                    <Button onClick={handleClearField} color="light">Clear Field</Button>
                </div>
            </div>
            <div className="grid grid-rows-1 gap-4 fixed right-8 bottom-8">
                {isOutputCopied && (
                    <Toast theme={customToast}>
                        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
                            <HiCheck className="h-5 w-5" />
                        </div>
                        <div className="ml-3 text-sm font-normal">Copied to clipboard</div>
                        <Toast.Toggle onDismiss={() => setIsOutputCopied(false)} />
                    </Toast>
                )}
                {isFieldCleared && (
                    <Toast theme={customToast}>
                        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
                            <HiCheck className="h-5 w-5" />
                        </div>
                        <div className="ml-3 text-sm font-normal">Field successfully cleared</div>
                        <Toast.Toggle onDismiss={() => setIsFieldCleared(false)} />
                    </Toast>
                )}
            </div>
        </Container>
    )
}

export default MinifyCSS