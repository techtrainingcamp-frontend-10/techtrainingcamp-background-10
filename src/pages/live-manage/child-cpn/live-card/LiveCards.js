import LiveCard from './LiveCard'

const LiveCards = ({ liveCards }) => {
    return (
        <div>
        <>
            {liveCards.map((liveCard) => (
                <LiveCard liveCard={liveCard} key={liveCard.id}
                />
            ))}
        </>
        </div>
    )
}

export default LiveCards
