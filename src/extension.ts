
import * as vscode from 'vscode';
import { makeGet } from './cmd/makeGet';
import { makePost } from './cmd/makePost';
import { makeDel } from './cmd/makeDel';
import { makePut } from './cmd/makePut';

export function activate(context: vscode.ExtensionContext) {

	
	console.log("request penguin is in the chat");

	let makeGetDisposable = vscode.commands.registerCommand("makeget", makeGet);
	let makePostDisposable = vscode.commands.registerCommand("makepost", makePost);
	let makeDelDisposable = vscode.commands.registerCommand("makedel", makeDel);
	let makePutDisposable = vscode.commands.registerCommand("makeput", makePut);
	context.subscriptions.push(makeGetDisposable, makePostDisposable, makeDelDisposable, makePutDisposable);

}

export function deactivate() {}
