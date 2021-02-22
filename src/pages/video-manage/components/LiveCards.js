import LiveCard from './LiveCard'
import { Space } from 'antd';

const LiveCards = ({ liveCards , onDelete , onStatus }) => {
    return (
        <div>
        <Space size={[60, 30]} wrap>
            {liveCards.map((liveCard) => (
                <LiveCard liveCard={liveCard} 
                    key={liveCard.videoId}
                    onDelete={onDelete}
                    onStatus={onStatus}
                />
            ))}
         </Space>
         </div>
    )
}

export default LiveCards
