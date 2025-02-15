
import * as vscode from 'vscode';
import { makeGet } from './cmd/makeGet';
import { makePost } from './cmd/makePost';

export function activate(context: vscode.ExtensionContext) {

	
	console.log("request penguin is in the chat");

	let makeGetDisposable = vscode.commands.registerCommand("makeget", makeGet);
	let makePostDisposable = vscode.commands.registerCommand("makepost", makePost);
	context.subscriptions.push(makeGetDisposable, makePostDisposable);

}

export function deactivate() {}
