import React, { useEffect } from 'react';
import { Terminal } from 'primereact/terminal';
import { TerminalService } from 'primereact/terminalservice';
import { ProgressBar } from 'primereact/progressbar';

export default function EasterEgg() {
    const commandHandler = (text) => {
        let response;
        let argsIndex = text.indexOf(' ');
        let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

        switch (command) {
            case 'date':
                const date = new Date();
                const joursemaine = date.getDay();
                let ghjornu;
                const jours = ['Duminica', 'Luni', 'Marti', 'Marcuri', 'Ghjovi', 'Vennari', 'Sabbatu'];
                for (let i = 0; i < jours.length; i++) {
                    if (joursemaine === i) {
                        ghjornu = jours[i];
                        break;
                    }
                }
                if (ghjornu === 'Marti') {
                    ghjornu.style.backgroundColor = "red";
                    response = `Oghjè siamu u ${date.toLocaleDateString("fr")} è sò ${ghjornu}`;
                } else {
                    response = `Oghjè siamu u ${date.toLocaleDateString("fr")} è sò ${ghjornu}`;
                }
                break;

            case 'greet':
                response = 'Saulte, o fratè, cumu và ? ' + text.substring(argsIndex + 1) + '!';
                break;

            case 'random':
                response = Math.floor(Math.round(Math.random() * 100)) + (Math.random());
                if (response < 50) { response = null; }
                else { response = 'Vostru N°: ' + response; }
                break;

            case 'clear':
                response = null;
                break;

            default:
                response = 'Unknown command: ' + command;
                break;
        }

        if (response)
            TerminalService.emit('response', response);
        else
            TerminalService.emit('clear');
    };

    useEffect(() => {
        TerminalService.on('command', commandHandler);

        return () => {
            TerminalService.off('command', commandHandler);
        };
    }, []);

    return (
        <section className="basic-page">
            <style>
                {`@keyframes p-progressbar-indeterminate-anim {
                    0% {
                        left: -45%;
                        right: 100%;
                    }
                    60% {
                        left: 100%;
                        right: -70%;
                    }
                    100% {
                        left: 100%;
                        right: -80%;
                    }
                }`}
            </style>
            <h1 id="ee-title">Vous m'avez trouvé ?</h1>

            <p id="ee-desc">
                Bien le bonjour !
                Si vous êtes ici, c'est soit que vous avez eu une chance incroyable, soit que vous avez réfléchi avec votre tête.
                Félicitations ! <br />
                ... <br />
                Qu'est-ce que vous attendez ? Il n'y a rien d'autre à voir ici. Ah, c'est ce que vous voyez en dessous qui vous intrigue ?
                C'est vrai qu'il y a un petit secret. Mais pour le découvrir, il faut trouver un mot.
            </p>

            <br />
            <br />

            <h2 id="ee-guess">Indices :</h2>

            <ul>
                <li id="ee-guess-1">Rien n'est aléatoire.</li>
                <li id="ee-guess-2">Avez-vous bien lu ?</li>
                <li id="ee-guess-3">Quel jour sommes-nous ? (6 chances sur 7 de vous tromper)</li>
            </ul>

            <ProgressBar
                mode="indeterminate"
                style={{ height: '6px', backgroundColor: '#fedc97', borderColor: '#3d4f3c' }}
            ></ProgressBar>

            <div className="card terminal-demo">
                <h3 id="ee-term-title">U Terminal</h3>
                <p id="ee-term-desc">
                    Stampittà "<strong>date</strong>" to display the current date, "<strong>greet {'{0}'}</strong>" for a message, "<strong>random</strong>" to get a random number and "<strong>clear</strong>" to clear all commands.
                </p>

                <Terminal
                    welcomeMessage="Benvenutu su l'AdececShell."
                    prompt="adecec -c"
                    pt={{
                        root: 'bg-gray-900 text-white border-round',
                        prompt: 'text-gray-400 mr-2',
                        command: 'text-primary-300',
                        response: 'text-primary-300'
                    }}
                />
            </div>
        </section>
    );
}