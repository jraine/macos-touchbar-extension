'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Loaded the macOS touchbar controls');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let cmdPallette = vscode.commands.registerCommand('extension.openCommandPallette', () => {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        vscode.commands.executeCommand('workbench.action.showCommands')
    });
    let menuFile = vscode.commands.registerCommand('extension.openFileExplorer', () => {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        vscode.commands.executeCommand('workbench.view.explorer')
    });
    let menuSearch = vscode.commands.registerCommand('extension.openSearch', () => {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        vscode.commands.executeCommand('workbench.view.search')
    });
    let menuGit = vscode.commands.registerCommand('extension.openGit', () => {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        vscode.commands.executeCommand('workbench.view.scm')
    });
    let menuExt = vscode.commands.registerCommand('extension.openExt', () => {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        vscode.commands.executeCommand('workbench.view.extensions')
    });
    let menuClose = vscode.commands.registerCommand('extension.openClose', () => {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        vscode.commands.executeCommand('workbench.action.toggleSidebarVisibility')
    });

    context.subscriptions.push(cmdPallette);
    context.subscriptions.push(menuFile);
    context.subscriptions.push(menuSearch);
    context.subscriptions.push(menuGit);
    context.subscriptions.push(menuExt);
    context.subscriptions.push(menuClose);
}

// this method is called when your extension is deactivated
export function deactivate() {
}