import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import MyCalendar from "./Calendar";

const Sidebar = () => {
	return (
		<div className='border-r border-slate-500 p-4 flex flex-col'>
			<SearchInput />
			<div className='divider px-3'></div>
			<Conversations />

			<LogoutButton /> 
			<MyCalendar/>
			</div>

	);
};
export default Sidebar;