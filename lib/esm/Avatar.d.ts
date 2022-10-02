import React from "react";
interface Props {
    avatar: {
        photoURL?: string | null | undefined;
        username?: string;
        userId: string;
        width?: string;
        height?: string;
        avatarSize?: string;
    };
}
declare const Avatar: React.FC<Props>;
export default Avatar;
