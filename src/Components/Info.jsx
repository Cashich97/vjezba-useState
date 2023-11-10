import React, { useEffect, useState } from 'react';

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

    // Komentar: Provjera za ispis alerta kad su ispunjeni određeni uvjeti
    function banner() {
        if (ime && putnik) {  // Komentar: Provjerava se i "ime" i "putnik" vrijednosti
            window.alert(`Bok, ja sam ${ime} ${prezime}, rođen sam 1960 i ${putnik ? "Putnik sam" : "Nisam putnik"}.`);
        }
    }

    useEffect(() => {
        // Komentar: Provjera za ispis alerta kad su ispunjeni određeni uvjeti
        if (ime && putnik) {
            alert(ime + ", dogodila se promjena u stanju putnika!");
        }
    }, [putnik]); // Komentar: Na promjenu "putnik" se prikazuje alert

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
            <div>
                {/* Komentar: Dodan je "banner" gumb */}
                <button onClick={banner}>Pozdrav!</button>
            </div>
        </div>       
    );
}

export default Info;
