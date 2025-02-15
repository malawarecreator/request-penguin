
import * as vscode from 'vscode';
import { makeGet } from './cmd/makeGet';

export function activate(context: vscode.ExtensionContext) {

	
	console.log("request penguin is in the chat");

	let makeGetDisposable = vscode.commands.registerCommand("makeget", makeGet);

	context.subscriptions.push(makeGetDisposable);

}

export function deactivate() {}
