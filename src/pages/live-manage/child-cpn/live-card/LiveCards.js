import LiveCard from './LiveCard'
import { Space } from 'antd';

const LiveCards = ({ liveCards }) => {
    return (
        <div>
        <Space size={[60, 30]} wrap>
            {liveCards.map((liveCard) => (
                <LiveCard liveCard={liveCard} key={liveCard.id}
                />
            ))}
         </Space>
         </div>
    )
}

export default LiveCards
