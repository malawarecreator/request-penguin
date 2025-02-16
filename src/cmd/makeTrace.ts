import * as vscode from 'vscode';
import { ExecException, exec } from 'child_process';

export async function makeTrace() {
    const addr = await vscode.window.showInputBox({
        placeHolder: "URL for Request",
        prompt: "Enter the resource for loopback"
    });

    exec(`curl -v -X TRACE ${addr}`, (e: ExecException | null, so: string, se: string) => {
        if (e) {
            vscode.window.showErrorMessage(e.message);
            return;
        } 
        if (se) {
            vscode.window.showErrorMessage(`stderr: ${se}`);
        } 
        vscode.window.showInformationMessage(`stdout: ${so}`);
    });

    
}