import * as vscode from "vscode";

import { createComponent } from "./extension/createComponent";
import { createHook } from "./extension/createHook";

export function activate(context: vscode.ExtensionContext) {
  const createComponentCommand = vscode.commands.registerCommand(
    "extension.createComponent",
    createComponent
  );
  const createHookCommand = vscode.commands.registerCommand(
    "extension.createHook",
    createHook
  );

  context.subscriptions.push(createComponentCommand);
  context.subscriptions.push(createHookCommand);
}

// This method is called when your extension is deactivated
export function deactivate() {}
