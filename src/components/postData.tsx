import React, { FC } from "react";

const PostData: FC<{postProps: PostProps}> = ({postProps}) => {
    return(
        <div>
            <p>{postProps.post.body}</p>
            <button onClick={() => postProps.selectPost(postProps.post)}/>
        </div>
    )
}

export {PostData};
