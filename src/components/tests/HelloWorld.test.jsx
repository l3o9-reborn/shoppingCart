import {render, screen } from "@testing-library/react"
import {it, expect} from "vitest"
import { HelloWorld } from "../HelloWorld"


it("renders Hello World",()=>{
    render(<HelloWorld/>)
    expect(screen.getByText(/hello world/i)).toBeInTheDocument()
})