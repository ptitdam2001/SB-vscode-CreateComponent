import * as vscode from "vscode";
import * as fs from "fs";
import { component, index, story, style, test } from "./templates";
import * as path from "path";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "extension.createFile",
    async () => {
      try {
        // handle target folder selection
        const folder = await vscode.window.showOpenDialog({
          canSelectFiles: false,
          canSelectFolders: true,
          defaultUri: vscode.workspace.workspaceFolders?.[0]?.uri,
        });
        if (!folder) {
          return;
        }

        // handle filename and destination path
        const fileName = await vscode.window.showInputBox({
          placeHolder: "Enter component name",
        });
        if (!fileName) {
          return;
        }
        const folderPath = path.join(folder[0].path, fileName);

        // check if folder already exists
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath, { recursive: true });
        } else {
          vscode.window.showErrorMessage(`Folder ${fileName} already exists`);
          return;
        }

        // create files with content
        fs.writeFileSync(path.join(folderPath, "index.tsx"), index(fileName));
        fs.writeFileSync(
          path.join(folderPath, `${fileName}.tsx`),
          component(fileName)
        );
        fs.writeFileSync(path.join(folderPath, `${fileName}.scss`), style);
        fs.writeFileSync(
          path.join(folderPath, `${fileName}.stories.tsx`),
          story(fileName)
        );
        fs.writeFileSync(
          path.join(folderPath, `${fileName}.test.tsx`),
          test(fileName)
        );

        vscode.window.showInformationMessage(
          `Component ${fileName} created successfully`
        );
      } catch (error) {
        vscode.window.showErrorMessage(
          "An error occurred while creating the file: " + (error as any).message
        );
      }
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
