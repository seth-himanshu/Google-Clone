import { TbGridDots } from "react-icons/tb";
import ProfileRing from "../assets/profile-ring.svg";

const ProfileIcon = () => {
    return <div className="flex gap-2" >
        <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
            <TbGridDots size={20} color="#5f668" />
        </span>
        <span className="h-10 w-10 relative flex jussstify-center items-center">
            <img src={ProfileRing} className="absolute" />
            <span className="h-10 w-10 rounded-full overflow-hidden">
                <img src="https://dergipark.org.tr/assets/app/images/buddy_sample.png" className="h-full w-full object cover" />
            </span>
        </span>
    </div>;
};

export default ProfileIcon;
