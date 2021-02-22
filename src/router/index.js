import Login from "@/pages/login";
import LiveManage from "@/pages/live-manage";
import VideoManage from "@/pages/video-manage";
import CommentManage from "@/pages/comment-manage";
import CommentDetail from "@/pages/comment-detail";


const routes = [
    {
        path: "/",
        exact: true,
        component: Login
    },
    {
        path: "/login",
        component: Login
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
    },
    {
        path: "/detail",
        component: CommentDetail
    }
]

export default routes;