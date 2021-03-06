import LiveCard from './LiveCard'
import { Space } from 'antd';

const LiveCards = ({ liveCards, onDelete, onStatus, onDetail }) => {
    return (
        <div>
            <Space size={[60, 30]} wrap>
                {liveCards.map((liveCard) => (
                    <LiveCard liveCard={liveCard}
                        key={liveCard.videoId}
                        onDelete={onDelete}
                        onStatus={onStatus}
                        onDetail={onDetail} 
                    />
                ))}
            </Space>
        </div>
    )
}

export default LiveCards
