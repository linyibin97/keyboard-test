import createKey from "./utils"

export default {
    name: "75",
    keyboard: {
       w: 17.5,
       h: 7.5
    },
    keys: [
        createKey(["Esc"], "Escape", 0.5, 0.5),
        createKey(["F1"], "F1", 1.75, 0.5),
        createKey(["F2"], "F2", 2.75, 0.5),
        createKey(["F3"], "F3", 3.75, 0.5),
        createKey(["F4"], "F4", 4.75, 0.5),
        createKey(["F5"], "F5", 6, 0.5),
        createKey(["F6"], "F6", 7, 0.5),
        createKey(["F7"], "F7", 8, 0.5),
        createKey(["F8"], "F8", 9, 0.5),
        createKey(["F9"], "F9", 10.25, 0.5),
        createKey(["F10"], "F10", 11.25, 0.5),
        createKey(["F11"], "F11", 12.25, 0.5),
        createKey(["F12"], "F12", 13.25, 0.5),
        createKey(["Del"], "Delete", 14.5, 0.5),
        createKey(["~", "`"], "Backquote", 0.5, 1.75),
        createKey(["!", "1"], "Digit1", 1.5, 1.75),
        createKey(["@", "2"], "Digit2", 2.5, 1.75),
        createKey(["#", "3"], "Digit3", 3.5, 1.75),
        createKey(["$", "4"], "Digit4", 4.5, 1.75),
        createKey(["%", "5"], "Digit5", 5.5, 1.75),
        createKey(["^", "6"], "Digit6", 6.5, 1.75),
        createKey(["&", "7"], "Digit7", 7.5, 1.75),
        createKey(["*", "8"], "Digit8", 8.5, 1.75),
        createKey(["(", "9"], "Digit9", 9.5, 1.75),
        createKey([")", "0"], "Digit0", 10.5, 1.75),
        createKey(["_", "-"], "Minus", 11.5, 1.75),
        createKey(["+", "="], "Equal", 12.5, 1.75),
        createKey(["Backspace"], "Backspace", 13.5, 1.75, 2),
        createKey(["Tab"], "Tab", 0.5, 2.75, 1.5),
        createKey(["Q"], "KeyQ", 2, 2.75),
        createKey(["W"], "KeyW", 3, 2.75),
        createKey(["E"], "KeyE", 4, 2.75),
        createKey(["R"], "KeyR", 5, 2.75),
        createKey(["T"], "KeyT", 6, 2.75),
        createKey(["Y"], "KeyY", 7, 2.75),
        createKey(["U"], "KeyU", 8, 2.75),
        createKey(["I"], "KeyI", 9, 2.75),
        createKey(["O"], "KeyO", 10, 2.75),
        createKey(["P"], "KeyP", 11, 2.75),
        createKey(["{", "["], "BracketLeft", 12, 2.75),
        createKey(["}", "]"], "BracketRight", 13, 2.75),
        createKey(["|", "\\"], "Backslash", 14, 2.75, 1.5),
        createKey(["Caps Lock"], "CapsLock", 0.5, 3.75, 1.75),
        createKey(["A"], "KeyA", 2.25, 3.75),
        createKey(["S"], "KeyS", 3.25, 3.75),
        createKey(["D"], "KeyD", 4.25, 3.75),
        createKey(["F"], "KeyF", 5.25, 3.75),
        createKey(["G"], "KeyG", 6.25, 3.75),
        createKey(["H"], "KeyH", 7.25, 3.75),
        createKey(["J"], "KeyJ", 8.25, 3.75),
        createKey(["K"], "KeyK", 9.25, 3.75),
        createKey(["L"], "KeyL", 10.25, 3.75),
        createKey([":", ";"], "Semicolon", 11.25, 3.75),
        createKey(["\"", "\'"], "Quote", 12.25, 3.75),
        createKey(["Enter"], "Enter", 13.25, 3.75, 2.25),
        createKey(["Shift"], "ShiftLeft", 0.5, 4.75, 2.25),
        createKey(["Z"], "KeyZ", 2.75, 4.75),
        createKey(["X"], "KeyX", 3.75, 4.75),
        createKey(["C"], "KeyC", 4.75, 4.75),
        createKey(["V"], "KeyV", 5.75, 4.75),
        createKey(["B"], "KeyB", 6.75, 4.75),
        createKey(["N"], "KeyN", 7.75, 4.75),
        createKey(["M"], "KeyM", 8.75, 4.75),
        createKey(["<", ","], "Comma", 9.75, 4.75),
        createKey([">", "."], "Period", 10.75, 4.75),
        createKey(["?", "/"], "Slash", 11.75, 4.75),
        createKey(["Shift"], "ShiftRight", 12.75, 4.75, 1.75),
        createKey(["Ctrl"], "ControlLeft", 0.5, 5.75, 1.25),
        createKey(["Meta"], "MetaLeft", 1.75, 5.75, 1.25),
        createKey(["Alt"], "AltLeft", 3, 5.75, 1.25),
        createKey([" "], "Space", 4.25, 5.75, 6.25),
        createKey(["Alt"], "AltRight", 10.5, 5.75),
        createKey(["Fn"], "", 11.5, 5.75),
        createKey(["Ctrl"], "ControlRight", 12.5, 5.75),
        createKey(["???"], "ArrowUp", 14.75, 5),
        createKey(["???"], "ArrowLeft", 13.75, 6),
        createKey(["???"], "ArrowDown", 14.75, 6),
        createKey(["???"], "ArrowRight", 15.75, 6),
        createKey(["Ins"], "Insert", 16, 1.75),
        createKey(["End"], "End", 16, 2.75),
        createKey(["PgUp"], "PageUp", 16, 3.75),
        createKey(["PgDn"], "PageDown", 16, 4.75),
        createKey([" "], "", 16, 0.5),
    ]
}