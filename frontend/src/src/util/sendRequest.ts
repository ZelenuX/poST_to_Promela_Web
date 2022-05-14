export function sendRequest<R>(url: string, params?: { [p: string]: string }, body?: any) : Promise<R> {
    let paramsString: string | undefined = params
        ? Object.entries(params).reduce((prev, [key, value]) => {
            return `${prev}&${key}=${value}`;
        }, "")
        : "";
    paramsString !== "" && (paramsString = "?" + paramsString.slice(1));

    return new Promise<R>((resolve, reject) => {
        let bodyString = body ? JSON.stringify(body) : undefined;
        if (bodyString && bodyString.length > 0 && bodyString[0] === '"') {
            bodyString = bodyString.slice(1, bodyString.length - 1);
        }
        fetch(`${url}${paramsString}`, {
            method: body ? "POST" : "GET",
            body: bodyString
        }).then(response => {
            if (response.status / 100 !== 2) {
                reject(`Failed to fetch: ${response.statusText} (status ${response.status})`)
            }
            response.text().then(text => {
                if (text.length > 0 && text[0] === '{') {
                    resolve(JSON.parse(text));
                }
                else {
                    resolve(text as unknown as R);
                }
            }, error => {
                reject(error.toString());
            })
        }, error => {
            reject(error.toString());
        });
    });
}
