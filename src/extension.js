"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const fs = require("fs");
function activate(context) {
    let disposable = vscode.commands.registerCommand("extension.createFile", async () => {
        const folder = await vscode.window.showOpenDialog({
            canSelectFiles: false,
            canSelectFolders: true,
        });
        if (!folder) {
            return;
        }
        const fileName = await vscode.window.showInputBox({
            placeHolder: "Enter file name",
        });
        if (!fileName) {
            return;
        }
        const filePath = `${folder[0].path}/${fileName}`;
        if (fs.existsSync(filePath)) {
            vscode.window.showErrorMessage(`File ${fileName} already exists`);
            return;
        }
        fs.writeFileSync(filePath, "");
        vscode.window.showInformationMessage(`File ${fileName} created successfully`);
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map