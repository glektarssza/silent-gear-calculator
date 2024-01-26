import React from 'react';
import {createRoot} from 'react-dom/client';

async function domReady(timeout = Infinity): Promise<void> {
    if (document.readyState === 'complete') {
        return;
    }
    await new Promise<void>((resolve, reject) => {
        if (document.readyState === 'complete') {
            resolve();
            return;
        }
        let timer: number | null = null;
        const listener = () => {
            if (document.readyState === 'complete') {
                if (timer !== null) {
                    clearTimeout(timer);
                    timer = null;
                }
                document.removeEventListener('readystatechange', listener);
                resolve();
                return;
            }
        };
        if (isFinite(timeout) && timeout >= 0) {
            timer = setTimeout(() => {
                timer = null;
                document.removeEventListener('readystatechange', listener);
                reject(
                    new Error(
                        `DOM did not become ready to manipulate within ${timeout} milliseconds`
                    )
                );
            }, timeout);
        }
        document.addEventListener('readystatechange', listener);
    });
}

async function main(): Promise<void> {
    await domReady();
    const root = createRoot(
        document.getElementById('app') ??
            document.getElementById('root') ??
            document.body
    );
    root.render(<h1>Hello world!</h1>);
}

main()
    .then(() => {
        console.log('Application started normally');
    })
    .catch((err: Error) => {
        console.error('Fatal error during startup');
        console.error(err);
    });
