import './App.css';
import React from 'react';

function createKey(text, x, y, code, classStr="") {
  return {
    text,
    code,
    style: {
      position: "absolute",
      left: x * 60 + "px",
      top: y * 60 + "px"
    },
    className: ["Key", ...classStr.split(" ")].join(" ")
  }
}
const layout = {
  name: "ShengHuoLing 75",
  keys: [
    createKey(["Esc"], 0.5, 0.5, "Escape"),
    createKey(["F1"], 1.75, 0.5, "F1"),
    createKey(["F2"], 2.75, 0.5, "F2"),
    createKey(["F3"], 3.75, 0.5, "F3"),
    createKey(["F4"], 4.75, 0.5, "F4"),
    createKey(["F5"], 6, 0.5, "F5"),
    createKey(["F6"], 7, 0.5, "F6"),
    createKey(["F7"], 8, 0.5, "F7"),
    createKey(["F8"], 9, 0.5, "F8"),
    createKey(["F9"], 10.25, 0.5, "F9"),
    createKey(["F10"], 11.25, 0.5, "F10"),
    createKey(["F11"], 12.25, 0.5, "F11"),
    createKey(["F12"], 13.25, 0.5, "F12"),
    createKey(["Del"], 14.5, 0.5, "Delete"),
    createKey(["~", "`"], 0.5, 1.75, "Backquote"),
    createKey(["!", "1"], 1.5, 1.75, "Digit1"),
    createKey(["@", "2"], 2.5, 1.75, "Digit2"),
    createKey(["#", "3"], 3.5, 1.75, "Digit3"),
    createKey(["$", "4"], 4.5, 1.75, "Digit4"),
    createKey(["%", "5"], 5.5, 1.75, "Digit5"),
    createKey(["^", "6"], 6.5, 1.75, "Digit6"),
    createKey(["&", "7"], 7.5, 1.75, "Digit7"),
    createKey(["*", "8"], 8.5, 1.75, "Digit8"),
    createKey(["(", "9"], 9.5, 1.75, "Digit9"),
    createKey([")", "0"], 10.5, 1.75, "Digit0"),
    createKey(["_", "-"], 11.5, 1.75, "Minus"),
    createKey(["+", "="], 12.5, 1.75, "Equal"),
    createKey(["Backspace"], 13.5, 1.75, "Backspace", "w200"),
    createKey(["Tab"], 0.5, 2.75, "Tab", "w150"),
    createKey(["Q"], 2, 2.75, "KeyQ",),
    createKey(["W"], 3, 2.75, "KeyW"),
    createKey(["E"], 4, 2.75, "KeyE"),
    createKey(["R"], 5, 2.75, "KeyR"),
    createKey(["T"], 6, 2.75, "KeyT"),
    createKey(["Y"], 7, 2.75, "KeyY"),
    createKey(["U"], 8, 2.75, "KeyU"),
    createKey(["I"], 9, 2.75, "KeyI"),
    createKey(["O"], 10, 2.75, "KeyO"),
    createKey(["P"], 11, 2.75, "KeyP"),
    createKey(["{", "["], 12, 2.75, "BracketLeft"),
    createKey(["}", "]"], 13, 2.75, "BracketRight"),
    createKey(["|", "\\"], 14, 2.75, "Backslash", "w150"),
    createKey(["Caps Lock"], 0.5, 3.75, "CapsLock", "w175"),
    createKey(["A"], 2.25, 3.75, "KeyA"),
    createKey(["S"], 3.25, 3.75, "KeyS"),
    createKey(["D"], 4.25, 3.75, "KeyD"),
    createKey(["F"], 5.25, 3.75, "KeyF"),
    createKey(["G"], 6.25, 3.75, "KeyG"),
    createKey(["H"], 7.25, 3.75, "KeyH"),
    createKey(["J"], 8.25, 3.75, "KeyJ"),
    createKey(["K"], 9.25, 3.75, "KeyK"),
    createKey(["L"], 10.25, 3.75, "KeyL"),
    createKey([":", ";"], 11.25, 3.75, "Semicolon"),
    createKey(["\"", "\'"], 12.25, 3.75, "Quote"),
    createKey(["Enter"], 13.25, 3.75, "Enter", "w225"),
    createKey(["Shift"], 0.5, 4.75, "ShiftLeft", "w225"),
    createKey(["Z"], 2.75, 4.75, "KeyZ"),
    createKey(["X"], 3.75, 4.75, "KeyX"),
    createKey(["C"], 4.75, 4.75, "KeyC"),
    createKey(["V"], 5.75, 4.75, "KeyV"),
    createKey(["B"], 6.75, 4.75, "KeyB"),
    createKey(["N"], 7.75, 4.75, "KeyN"),
    createKey(["M"], 8.75, 4.75, "KeyM"),
    createKey(["<", ","], 9.75, 4.75, "Comma"),
    createKey([">", "."], 10.75, 4.75, "Period"),
    createKey(["?", "/"], 11.75, 4.75, "Slash"),
    createKey(["Shift"], 12.75, 4.75, "ShiftRight", "w175"),
    createKey(["Ctrl"], 0.5, 5.75, "ControlLeft", "w125"),
    createKey(["Meta"], 1.75, 5.75, "MetaLeft", "w125"),
    createKey(["Alt"], 3, 5.75, "AltLeft", "w125"),
    createKey([" "], 4.25, 5.75, "Space", "w625"),
    createKey(["Alt"], 10.5, 5.75, "AltRight"),
    createKey(["Fn"], 11.5, 5.75, ""),
    createKey(["Ctrl"], 12.5, 5.75, "ControlRight"),
    createKey(["↑"], 14.75, 5, "ArrowUp"),
    createKey(["←"], 13.75, 6, "ArrowLeft"),
    createKey(["↓"], 14.75, 6, "ArrowDown"),
    createKey(["→"], 15.75, 6, "ArrowRight"),
    createKey(["Ins"], 16, 1.75, "Insert"),
    createKey(["End"], 16, 2.75, "End"),
    createKey(["PgUp"], 16, 3.75, "PageUp"),
    createKey(["PgDn"], 16, 4.75, "PageDown"),
    createKey([" "], 16, 0.5, ""),
  ]
}

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
         <div className="Keyboard">
          {
            layout.keys.map((key, i) => (
              <div 
                key={i}
                className={
                  [
                    key.className,
                    (pressing.has(key.code) ? "pressingKey" : undefined),
                    (pressed.has(key.code) ? "pressedKey" : undefined)
                  ].join(" ")
                }
                style={key.style}
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
