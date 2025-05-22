function Resultados() {
    const results = [
        {
            status: 'Finalizado',
            team1: 'Chelsea',
            team2: 'Man City',
            score: '2 - 2',
            date: '05 Aug 2024',
            scorers: {
                team1: ["Palmer 64'", "Jackson 15'"],
                team2: ["Haaland 35'", "Bryne 77'"],
            },
            gradient: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
            team1Logo: '/src/images/chelsea.png',
            team2Logo: '/src/images/mancity.png',
        },
        {
            status: 'Finalizado',
            team1: 'West Ham',
            team2: 'Leeds',
            score: '2 - 2',
            date: '27 Aug 2024',
            scorers: {
                team1: ["Johnson 15'", "Palmer 64'"],
                team2: ["Bamford 35'", "Bryne 77'"],
            },
            gradient: 'linear-gradient(135deg, #ef4444, #dc2626)',
            team1Logo: '/src/images/avfc.png',
            team2Logo: '/src/images/arsenal.png',
        },
    ];

    return (
        <div className="page-container">
            <h1>Resultados</h1>
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
                                <img
                                    src={result.team1Logo}
                                    alt={result.team1}
                                />
                                <span>{result.team1}</span>
                            </div>
                            <div className="score">{result.score}</div>
                            <div className="team-result">
                                <img
                                    src={result.team2Logo}
                                    alt={result.team2}
                                />
                                <span>{result.team2}</span>
                            </div>
                        </div>
                        <div className="scorers">
                            {result.scorers.team1.join(', ')} |{' '}
                            {result.scorers.team2.join(', ')}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Resultados;
