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
        },
        // Add more results
    ];

    return (
        <div className="page-container">
            <h1>Resultados</h1>
            <div className="results-grid">
                {results.map((result, index) => (
                    <div
                        key={index}
                        className="result-card"
                    >
                        <div className="status">{result.status}</div>
                        <div className="match-result">
                            <div className="team-result">
                                <img
                                    src={`/teams/${result.team1.toLowerCase()}.png`}
                                    alt={result.team1}
                                />
                                <span>{result.team1}</span>
                            </div>
                            <div className="score">{result.score}</div>
                            <div className="team-result">
                                <img
                                    src={`/teams/${result.team2.toLowerCase()}.png`}
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
