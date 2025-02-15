
import * as vscode from 'vscode';
import { makeGet } from './cmd/makeGet';
import { makePost } from './cmd/makePost';
import { makeDel } from './cmd/makeDel';

export function activate(context: vscode.ExtensionContext) {

	
	console.log("request penguin is in the chat");

	let makeGetDisposable = vscode.commands.registerCommand("makeget", makeGet);
	let makePostDisposable = vscode.commands.registerCommand("makepost", makePost);
	let makeDelDisposable = vscode.commands.registerCommand("makedel", makeDel);
	context.subscriptions.push(makeGetDisposable, makePostDisposable, makeDelDisposable);

}

export function deactivate() {}
