
import * as vscode from 'vscode';
import { makeGet } from './cmd/makeGet';
import { makePost } from './cmd/makePost';
import { makeDel } from './cmd/makeDel';
import { makePut } from './cmd/makePut';
import { makeTrace } from './cmd/makeTrace';
import { getOptions } from './cmd/getOptions';

export function activate(context: vscode.ExtensionContext) {

	
	console.log("request penguin is in the chat");

	let makeGetDisposable = vscode.commands.registerCommand("makeget", makeGet);
	let makePostDisposable = vscode.commands.registerCommand("makepost", makePost);
	let makeDelDisposable = vscode.commands.registerCommand("makedel", makeDel);
	let makePutDisposable = vscode.commands.registerCommand("makeput", makePut);
	let makeTraceDisposable = vscode.commands.registerCommand("maketrace", makeTrace);
	let getOptionsDisposable = vscode.commands.registerCommand("getoptions", getOptions);
	context.subscriptions.push(makeGetDisposable, makePostDisposable, makeDelDisposable, makePutDisposable, makeTraceDisposable, getOptionsDisposable);

}

export function deactivate() {}
