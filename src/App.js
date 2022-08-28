import './App.css';
import React from 'react';
import layout75 from "./layout/75.js"
import layout87 from "./layout/87.js"

const u = 60 // 1u为60px
const layout = layout87
export default class App extends React.Component  {
  constructor() {
    super()
    this.state = {
      text: [],
      pressing: new Set(), //正在按的键
      pressed: new Set() //按过的键
    }
  }
  componentDidMount() {
    document.onkeydown = e => {
      const { pressing } = this.state
      pressing.add(e.code)
      console.log(pressing)
      this.setState({ pressing })
      console.log("down", e)
      e.preventDefault()
    }
    document.onkeyup = e => {
      const { pressing, pressed } = this.state
      pressing.delete(e.code)
      pressed.add(e.code)
      console.log(pressing, pressed)
      this.setState({ pressing, pressed })
      console.log("up", e)
      e.preventDefault()
    }
  }
  render() {
    const { pressing, pressed } = this.state
    return (
      <div className="App">
        <div 
          className="Keyboard"
          style={{
            width: layout.keyboard.w * u + "px",
            height: layout.keyboard.h * u + "px"
          }}
        >
          {
            layout.keys.map((key, i) => (
              <div 
                key={i}
                className={
                  [
                    "Key",
                    (pressing.has(key.code) ? "pressingKey" : undefined),
                    (pressed.has(key.code) ? "pressedKey" : undefined)
                  ].join(" ")
                }
                style={{
                  position: "absolute",
                  left: key.x * u + "px",
                  top: key.y * u + "px",
                  width: key.w * u + "px",
                  height: key.h * u + "px"
                }}
              >
                <div className="KeyTop">
                  {key.text.map((text, j) => (
                    <div key={i+" "+j}>
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
};
