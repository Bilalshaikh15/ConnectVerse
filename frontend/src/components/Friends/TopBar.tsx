import friendIcon from "../../assets/icons/friends.svg";
import helpIcon from "../../assets/icons/help.svg";
import msgIcon from "../../assets/icons/messageIcon.svg";
import InboxPopup from "../Dashboard/InboxPopup";

/**
 * Topbar component represents the section containing various buttons and icons.
 *
 */

function TopBar() {
  return (
    <div className="w-full text-white py-4 px-4 h-16 border-b-raisin-black border-b-2 items-center justify-between flex gap-6">
      {/* User Profile Button : Will be used later to open profile modal */}
      <div className="flex">
        <button className="flex font-semibold gap-2 text-sm items-center pr-5 border-r border-arsenic">
          <img className="mr-1" src={friendIcon} /> Friends
        </button>
        {/*  Buttons for online all pending blocked add friend */}
        <div className="flex gap-6 [&>button]:shrink-0 [&>button]:p-[5px] [&>button]:rounded-md [&>button]:text-base">
          <button className=" bg-[#202225] ml-5">Online</button>
          <button className="">All</button>
          <button className="">Pending</button>
          <button className="">Blocked</button>
          <button className="bg-[#248046] text-white">Add Friend</button>
        </div>
      </div>
      <div className="flex gap-6">
        <button>
          <img src={msgIcon} />
        </button>
        {/* Inbox Popup */}
        <InboxPopup />
        <button>
          <img src={helpIcon} />
        </button>
      </div>
    </div>
  );
}

export default TopBar;
