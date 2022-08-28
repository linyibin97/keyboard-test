import './App.css';
import React from 'react';
import layout75 from "./layout/75.js"
import layout87 from "./layout/87.js"
import { Radio, Drawer, Button, Switch } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const u = 60 // 1u为60px
const layouts = [layout87, layout75]
export default class App extends React.Component  {
  constructor() {
    super()
    this.state = {
      pressing: new Set(), //正在按的键
      pressed: new Set(), //按过的键
      settingsVisible: false,
      markPressedKey: false,
      layoutIndex: 0
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
  showSettings = () => {
    this.setState({ settingsVisible: true })
  }
  closeSettings = () => {
    this.setState({ settingsVisible: false })
  }
  layoutChange = (e) => {
    this.setState( { layoutIndex: e.target.value } )
  }
  changeMarkPressedKey = checked => {
    this.setState( { markPressedKey: checked } )
  }
  render() {
    const { pressing, pressed, settingsVisible, layoutIndex, markPressedKey } = this.state
    const layout = layouts[layoutIndex]
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
                    (markPressedKey && pressed.has(key.code) ? "pressedKey" : undefined)
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
        <Button
          className="SettingsButton"
          onClick={this.showSettings}
          shape="circle"
          icon={<SettingOutlined/>} 
        >
        </Button>
        <Drawer title="设置" placement="bottom" onClose={this.closeSettings} visible={settingsVisible}>
          <div className="settingsItem">
            <div className="settingsTitle">键盘配列</div>
            <Radio.Group defaultValue={layoutIndex}>
              {layouts.map((v, i) => 
                <Radio.Button 
                  value={i}
                  key={i}
                  onChange={this.layoutChange}
                >
                  {v.name}
                </Radio.Button>
              )}
            </Radio.Group>
          </div>
          <div className="settingsItem">
            <div className="settingsTitle">标记已按按键</div>
            <Switch
              defaultChecked={markPressedKey}
              onChange={this.changeMarkPressedKey}
            ></Switch>
          </div>
        </Drawer>
      </div>
    );
  }
};
