const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""} `}>
					<span className='label-text text-gray-300'>Male</span>
					<input
						type='checkbox'
						className='hidden'
						checked={selectedGender === "male"}
						onChange={() => onCheckboxChange("male")}
					/>

            <span className={`checkbox border-2 border-white rounded w-5 h-5 flex items-center justify-center ${selectedGender === "male" ? "bg-green-600" : ""}`}>
            {selectedGender === "male" && <svg className="w-3 h-3 text-white fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.158 13.696L3.5 10l1.166-1.168 2.492 2.492 5.58-5.58L16 6.3 8.65 13.696z" clip-rule="evenodd"/></svg>}
           </span>

				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer  ${selectedGender === "female" ? "selected" : ""}`}>
					<span className='label-text text-gray-300'>Female</span>
					<input
						type='checkbox'
						className='hidden'
						checked={selectedGender === "female"}
						onChange={() => onCheckboxChange("female")}
					/>
           <span className={`checkbox border-2 border-white rounded w-5 h-5 flex items-center justify-center ${selectedGender === "female" ? "bg-green-600" : ""}`}>
            {selectedGender === "female" && <svg className="w-3 h-3 text-white fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.158 13.696L3.5 10l1.166-1.168 2.492 2.492 5.58-5.58L16 6.3 8.65 13.696z" clip-rule="evenodd"/></svg>}
           </span>

				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;
