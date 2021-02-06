import LiveCard from './child-cpn/live-card'

const LiveCards = ({ liveCards }) => {
    return (
        <div>
        <>
            {liveCards.map((liveCard) => (
                <LiveCard liveCard={liveCard}
                />
            ))}
        </>
        </div>
    )
}

export default LiveCards
