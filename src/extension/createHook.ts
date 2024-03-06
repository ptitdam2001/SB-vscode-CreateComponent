import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

import { hook, index, test } from "../templates/hook";

export const createHook = async () => {
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
      placeHolder: "Enter Hook name without prefix 'use'",
    });
    if (!fileName) {
      return;
    }
    const finalFilename =
      "use" + fileName.charAt(0).toUpperCase() + fileName.slice(1);
    const folderPath = path.join(folder[0].path, finalFilename);

    // check if folder already exists
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    } else {
      vscode.window.showErrorMessage(`Folder ${finalFilename} already exists`);
      return;
    }

    // create files with content
    fs.writeFileSync(path.join(folderPath, "index.ts"), index(finalFilename));
    fs.writeFileSync(
      path.join(folderPath, `${finalFilename}.ts`),
      hook(finalFilename)
    );

    fs.writeFileSync(
      path.join(folderPath, `${finalFilename}.test.ts`),
      test(finalFilename)
    );

    vscode.window.showInformationMessage(
      `Hook ${finalFilename} created successfully`
    );
  } catch (error) {
    vscode.window.showErrorMessage(
      "/!\\ An error occurred while creating the file: " +
        (error as any).message
    );
  }
};
