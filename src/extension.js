"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const fs = require("fs");

function activate(context) {
  const createComponent = vscode.commands.registerCommand(
    "extension.createComponent",
    async () => {
      const folder = await vscode.window.showOpenDialog({
        canSelectFiles: false,
        canSelectFolders: true,
      });
      if (!folder) {
        return;
      }
      const fileName = await vscode.window.showInputBox({
        placeHolder: "Enter Component name",
      });
      if (!fileName) {
        return;
      }
      const filePath = `${folder[0].path}/${fileName}`;
      if (fs.existsSync(filePath)) {
        vscode.window.showErrorMessage(`Component ${fileName} already exists`);
        return;
      }
      fs.writeFileSync(filePath, "");
      vscode.window.showInformationMessage(
        `Component ${fileName} created successfully`
      );
    }
  );

  const createHook = vscode.commands.registerCommand(
    "extension.createHook",
    async () => {
      const folder = await vscode.commands.showOpenDialog({
        canSelectFiles: false,
        canSelectFolders: true,
      });

      if (!folder) {
        return;
      }

      const fileName = await vscode.window.showInputBox({
        placeHolder: "Enter Hook name",
      });
      if (!fileName) {
        return;
      }

      const filePath = `${folder[0].path}/${fileName}`;
      if (fs.existsSync(filePath)) {
        vscode.window.showErrorMessage(`Hook ${fileName} already exists`);
        return;
      }

      fs.writeFileSync(filePath, "");
      vscode.window.showInformationMessage(
        `Hook ${fileName} created successfully`
      );
    }
  );

  context.subscriptions.push(createComponent);
  context.subscriptions.push(createHook);
}

exports.activate = activate;

// This method is called when your extension is deactivated
function deactivate() {}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map
