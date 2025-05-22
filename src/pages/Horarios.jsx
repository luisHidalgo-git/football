function Horarios() {
    const matches = [
        {
            date: '27 Aug 2025',
            time: '09:30',
            team1: 'West-Ham',
            team2: 'Spurs',
            team1Logo: '/src/images/avfc.png',
            team2Logo: '/src/images/tottenham.png',
        },
        {
            date: '27 Aug 2025',
            time: '10:00',
            team1: 'Man City',
            team2: 'Leeds Unit',
            team1Logo: '/src/images/mancity.png',
            team2Logo: '/src/images/arsenal.png',
        },
        {
            date: '29 Aug 2025',
            time: '19:40',
            team1: 'Arsenal',
            team2: 'Brighton',
            team1Logo: '/src/images/arsenal.png',
            team2Logo: '/src/images/liverpool.png',
        },
        {
            date: '30 Aug 2025',
            time: '11:30',
            team1: 'Chelsea',
            team2: 'Leicester',
            team1Logo: '/src/images/chelsea.png',
            team2Logo: '/src/images/liverpool.png',
        },
        {
            date: '30 Aug 2025',
            time: '15:10',
            team1: 'SouthHam',
            team2: 'Everton',
            team1Logo: '/src/images/newcastle.png',
            team2Logo: '/src/images/everton.png',
        },
        {
            date: '31 Aug 2025',
            time: '19:40',
            team1: 'Aston Villa',
            team2: 'Man United',
            team1Logo: '/src/images/avfc.png',
            team2Logo: '/src/images/manunited.png',
        },
        {
            date: '31 Aug 2025',
            time: '19:40',
            team1: 'Brighton',
            team2: 'Leeds Unit',
            team1Logo: '/src/images/liverpool.png',
            team2Logo: '/src/images/arsenal.png',
        },
    ];

    return (
        <div className="page-container">
            <h1>
                <button className="icon-button">☰</button>
                <span className="page-title">Horarios</span>
                <button className="icon-button">🔔</button>
            </h1>
            <div className="matches-grid">
                {matches.map((match, index) => (
                    <div key={index} className="match-card">
                        <div className="team">
                            <img src={match.team1Logo} alt={match.team1} />
                            <span>{match.team1}</span>
                        </div>
                        <div className="match-info">
                            <div>{match.date}</div>
                            <div>{match.time}</div>
                        </div>
                        <div className="team">
                            <img src={match.team2Logo} alt={match.team2} />
                            <span>{match.team2}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Horarios;