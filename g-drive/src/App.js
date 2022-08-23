import './App.css';

import { GoogleSpreadsheet } from 'google-spreadsheet';
import React, { useEffect } from 'react';

import creds from './cred/credentials.json';

function App() {
    const doc = new GoogleSpreadsheet(creds.sheet_id);

    const gSheetInit = async() => {
        try {
            await doc.useServiceAccountAuth(creds);
            await doc.loadInfo();
        } catch (e) {
            console.error('Error LoadDocInfo: ', e);
        }
    };

    (async function() {
        await gSheetInit()
        console.log(doc.title);
    }());


    return ( < div className = 'App' > < p > Hello world < /p> </div > );
}

export default App;