import * as vscode from 'vscode';

export async function makeDel() {
    const addr = await vscode.window.showInputBox({
        placeHolder: "URL to Resource (e.g. example.com/site.html or a query)",
        prompt: "Enter the URL"
    });

    if (addr) {
        fetch(addr, {
            method: "DELETE",
            
        }).then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error: ${res.status}`);
            } 
            return res.json();
        }).then(data => {
            vscode.window.showInformationMessage(`Success: ${data}`);
        }).catch(err => {
            vscode.window.showErrorMessage(`Error: ${err}`);
        });
    }
}