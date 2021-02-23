import { Comment, List, Button } from 'antd';
import React from 'react'
import { useState, useEffect } from 'react'

import { DetailWrapper } from './style';
import { getComment } from "@/services/manage";

export default function CommentDetail(props) {
    const videoId = props.location.query.videoId;
    const [list, setList] = useState([])

    useEffect(() => {
        getComment(videoId).then(res => {
            setList(res.data);
            console.log(res.data);
        });
    },
        [videoId]
    )

    return (
        <DetailWrapper className="wrap-v2">
            <List
                className="comment-list"
                header={`${list.length} 条评论`}
                itemLayout="horizontal"
                dataSource={list}
                renderItem={item => (
                    <li >
                        <Comment
                            actions={[<Button className="edit" type="text">编辑</Button>, <Button className="delete" type="text">删除</Button>]}
                            content={item.comment}
                            datetime={item.updatedAt}
                        />
                    </li>
                )}
            />
        </DetailWrapper>
    )
}
