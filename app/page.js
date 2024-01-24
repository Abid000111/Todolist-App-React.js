"use client";
import React, { useState } from "react";

const page = () => {
	const [title, settitle] = useState("");
	const [desc, setdesc] = useState("");
	const [mainTask, setmainTask] = useState([]);
	const submitHandler = (e) => {
		e.preventDefault();
		setmainTask([...mainTask, { title, desc }]);
		settitle("");
		setdesc("");
		console.log(mainTask);
	};

	const deleteHandler = (i) => {
		let copytask = [...mainTask];
		copytask.splice(i, 1);
		setmainTask(copytask);
	};

	let renderTask = <h2 className="pb-[3vw]">No Task Available</h2>;
	if (mainTask.length > 0) {
		renderTask = mainTask.map((t, i) => {
			return (
				<>
					<li key={i} className="relative flex items-center justify-between">
						<div className="flex items-center">
							<h3 className="text-[1.5vw] mb-[3vw]">{t.title}</h3>
							<h4 className="w-[65vw] ml-[3vw] mb-[3vw] text-[1vw]">{t.desc}</h4>
						</div>
						<button
							onClick={() => {
								deleteHandler(i);
							}}
							className="mb-[3vw] text-[0.8vw] font-bold h-[1.5vw] w-[5vw] bg-red-600 rounded-[10vw]"
						>
							Delete
						</button>
					</li>
				</>
			);
		});
	}

	return (
		<>
			<div>
				<header className="h-[4vw] box-border bg-red-400 text-[2vw] font-bold flex justify-center items-center">
					My Todo List
				</header>
				<form onSubmit={submitHandler}>
					<div className="relative">
						<textarea
							className="pl-[0.5vw] pt-[0.5vw] ml-[7vw] mt-[4vw] h-[3vw] w-[30vw] text-black text-[1vw]"
							placeholder="Enter title here..."
							value={title}
							onChange={(e) => {
								// console.log(e.target.value);
								settitle(e.target.value);
								// console.log(title);
							}}
						></textarea>
						<textarea
							className="pl-[0.5vw] pt-[0.5vw] ml-[8.5vw] mt-[4vw] h-[3vw] w-[30vw] text-black text-[1vw]"
							placeholder="Enter description here..."
							value={desc}
							onChange={(e) => {
								setdesc(e.target.value);
							}}
						></textarea>
						<button className="absolute bottom-[5%] bg-red-600 text-[1.3vw] font-bold h-[3vw] w-[8vw] rounded-[10vw] ml-[8.5vw]">
							Add task
						</button>
					</div>
					<div></div>
				</form>
				{/* <hr className="mt-[2vw]" /> */}
				<div className="bg-slate-500 min-h-[7vw] m-[4vw] pl-[3vw] pr-[3vw] pt-[3vw] flex justify-center flex-col">
					<ul>{renderTask}</ul>
				</div>
				<div className="h-[3vw] w-screen bg-transparent"></div>
			</div>
		</>
	);
};

export default page;
