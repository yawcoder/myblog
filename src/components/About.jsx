import React from 'react'
import Prismloader from './Prismloader'

const About = () => {

  const codeString = `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      nunito: ["nunito", "sans-serif"],
      pacifico: ["pacifico", "sans-serif"]
    }
  },
  plugins: [],
}`

  return (
    <div>
      <pre className="language-js">
        <code className="language-js">
          {codeString}
        </code>
      </pre>
      <Prismloader />
    </div>
  )
}

export default About