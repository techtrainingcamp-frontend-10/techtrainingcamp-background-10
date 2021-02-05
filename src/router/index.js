import LiveManage from "@/pages/live-manage";
import VideoManage from "@/pages/video-manage";
import CommentManage from "@/pages/comment-manage";


const routes = [
    {
        path: "/",
        exact: true,
        component: LiveManage
    },
    {
        path: "/live",
        component: LiveManage
    },
    {
        path: "/video",
        component: VideoManage
    },
    {
        path: "/comment",
        component: CommentManage
    }
]

export default routes;