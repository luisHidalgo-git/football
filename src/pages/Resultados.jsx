function Resultados() {
    const results = [
        {
            status: 'Finalizado',
            team1: 'Chelsea',
            team2: 'Man City',
            score: '2 - 2',
            date: '01 Aug 2024',
            scorers: {
                team1: ["Jackson 15'", "Palmer 64'"],
                team2: ["Haaland 35'", "Bryne 77'"],
            },
            gradient: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
            team1Logo: '/src/images/chelsea.png',
            team2Logo: '/src/images/mancity.png',
        },
        {
            status: 'Finalizado',
            team1: 'Arsenal',
            team2: 'Brighton',
            score: '3 - 1',
            date: '11 Aug 2024',
            scorers: {
                team1: ["Saka 15'", "Martinelli 64'", "Martinelli 91'"],
                team2: ["March 2'"],
            },
            gradient: 'linear-gradient(135deg, #ef4444, #dc2626)',
            team1Logo: '/src/images/arsenal.png',
            team2Logo: '/src/images/liverpool.png',
        },
        {
            status: '60:35',
            team1: 'West Ham',
            team2: 'Leeds',
            score: '2 - 2',
            date: '21 Aug 2024',
            scorers: {
                team1: ["Jackson 15'", "Palmer 64'"],
                team2: ["Haaland 35'", "Bryne 77'"],
            },
            gradient: 'linear-gradient(135deg, #fbbf24, #d97706)',
            team1Logo: '/src/images/avfc.png',
            team2Logo: '/src/images/arsenal.png',
        },
        {
            status: '88:35',
            team1: 'Aston Villa',
            team2: 'Man United',
            score: '1 - 1',
            date: '21 Aug 2024',
            scorers: {
                team1: ["Watkins 15'"],
                team2: ["Fernandes 35'"],
            },
            gradient: 'linear-gradient(135deg, #60a5fa, #dc2626)',
            team1Logo: '/src/images/avfc.png',
            team2Logo: '/src/images/manunited.png',
        },
    ];

    return (
        <div className="page-container">
            <h1>
                Resultados
                <span>🔔</span>
            </h1>
            <div className="results-grid">
                {results.map((result, index) => (
                    <div
                        key={index}
                        className="result-card"
                        style={{ background: result.gradient }}
                    >
                        <div className="status">{result.status}</div>
                        <div className="match-result">
                            <div className="team-result">
                                <img src={result.team1Logo} alt={result.team1} />
                                <span>{result.team1}</span>
                            </div>
                            <div className="score">{result.score}</div>
                            <div className="team-result">
                                <img src={result.team2Logo} alt={result.team2} />
                                <span>{result.team2}</span>
                            </div>
                        </div>
                        <div className="scorers">
                            {result.scorers.team1.join(', ')} | {result.scorers.team2.join(', ')}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Resultados;