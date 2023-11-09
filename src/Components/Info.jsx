import React, { useState } from 'react';

const Info = () => {
    const [ime, setIme] = useState("");
    const [prezime, setPrezime] = useState("");
    const [putnik, setPutnik] = useState(false);


    function handleImeChange(e) {
        setIme(e.target.value);
    }
    function handlePrezimeChange(e) {
        setPrezime(e.target.value);
    }
    function handlePutnikChange(e) {
        setPutnik(e.target.checked);
    }

   return ( 
    <div>
        <div>
            <label>Ime:</label>
            <input value={ime} onChange={handleImeChange} />
        </div>
        <div>
            <label>Prezime:</label>
            <input value={prezime} onChange={handlePrezimeChange} />
        </div>
        <div>
            <label>
                <input type="checkbox" checked={putnik} onChange={handlePutnikChange} />Putnik sam
            </label>
        </div>

            <div>
                <p>Bok, ja sam {ime} {prezime}, rođen sam 1960 i {putnik ? "putnik sam" : "nisam putnik"}.</p>
            </div>
    </div>       
    );
    
}

export default Info ;
