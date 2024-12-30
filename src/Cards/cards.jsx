function GenerateCards({ logements }) {
    return (
        <div className="logements-container">
            {logements.map((logement) => (
                <div key={logement.id} className="logement-card">
                    <img src={logement.cover} alt={logement.title} />
                    <figcaption>{logement.title}</figcaption>
                  </div>
            ))}
            </div>
    );
}

export default GenerateCards