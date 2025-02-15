import * as vscode from 'vscode';

export async function makePut() {
    const addr = await vscode.window.showInputBox({
        placeHolder: "URL for Request",
        prompt: "Enter URL for PUT"
    });

    const data = await vscode.window.showInputBox({
        placeHolder: "JSON for PUT",
        prompt: "Enter JSON for PUT",
    });


    if (addr) {
        fetch(addr, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body:data
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