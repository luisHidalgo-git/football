function Horarios() {
    const matches = [
        {
            date: '27 Aug 2025',
            time: '17:45',
            team1: 'West Ham',
            team2: 'Spurs',
            team1Logo: '/src/images/avfc.png',
            team2Logo: '/src/images/tottenham.png',
        },
        {
            date: '30 Aug 2025',
            time: '21:30',
            team1: 'Chelsea',
            team2: 'Leicester',
            team1Logo: '/src/images/chelsea.png',
            team2Logo: '/src/images/liverpool.png',
        },
        {
            date: '27 Aug 2025',
            time: '16:00',
            team1: 'Man City',
            team2: 'Leeds',
            team1Logo: '/src/images/mancity.png',
            team2Logo: '/src/images/arsenal.png',
        },
        {
            date: '30 Aug 2025',
            time: '15:30',
            team1: 'Southampton',
            team2: 'Everton',
            team1Logo: '/src/images/newcastle.png',
            team2Logo: '/src/images/everton.png',
        },
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
