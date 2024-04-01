//const config = require("./config.js")
//const pre = require("./pre.js")
module.exports = async (kernel) => {
  let script = {
    run: [{
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/ashawkey/InTeX app",
        ]
      }
    }, {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "pip install -r requirements.txt",
          "pip install gradio"
        ],
      }
    }, {
      method: "script.start",
      params: {
        uri: "https://github.com/cocktailpeanutlabs/torch.git/install.js",
        params: {
          venv: "{{path.resolve(cwd, 'app/env')}}"
        }
      }
    }, {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "pip install git+https://github.com/NVlabs/nvdiffrast"
        ],
      }
//    }, {
//      method: "fs.share",
//      params: {
//        venv: "app/env"
//      }
    }, {
      method: "notify",
      params: {
        html: "Click the 'start' tab to get started!"
      }
    }]
  }
//  let pre_command = pre(config, kernel)
//  if (pre_command) {
//    script.run[1].params.message = [pre_command].concat(script.run[1].params.message)
//  }
  return script
}
