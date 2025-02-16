import * as vscode from 'vscode';
import {exec, ExecException} from 'child_process';

export async function getOptions() {
    const addr = await vscode.window.showInputBox({
        placeHolder: "URL for Request",
        prompt: "Enter the resource to get options from",
    });

    if (addr) {
        exec(`curl -X OPTIONS ${addr} -i`, (e: ExecException | null, so: string, se: string) => {
            if (e) {
                vscode.window.showErrorMessage(`Error: ${e.message}}`);
                return;
            }
            if (se) {
                vscode.window.showErrorMessage(`stderr (non critical): ${se}`);
            } 

            vscode.window.showInformationMessage(`stdout: ${so}`);
        });
    }


    
}