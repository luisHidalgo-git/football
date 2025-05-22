function Horarios() {
    const matches = [
        {
            date: '27 Aug 2025',
            time: '09:30',
            team1: 'West-Ham',
            team2: 'Spurs',
            team1Logo: '/teams/west-ham.png',
            team2Logo: '/teams/spurs.png',
        },
        // Add more matches here
    ];

    return (
        <div className="page-container">
            <h1>Horarios</h1>
            <div className="matches-grid">
                {matches.map((match, index) => (
                    <div
                        key={index}
                        className="match-card"
                    >
                        <div className="team">
                            <img
                                src={match.team1Logo}
                                alt={match.team1}
                            />
                            <span>{match.team1}</span>
                        </div>
                        <div className="match-info">
                            <div>{match.date}</div>
                            <div>{match.time}</div>
                        </div>
                        <div className="team">
                            <img
                                src={match.team2Logo}
                                alt={match.team2}
                            />
                            <span>{match.team2}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Horarios;
