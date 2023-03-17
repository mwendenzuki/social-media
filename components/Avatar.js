export default function Avatar ({size}) {
	let width = "w-12"
	if(size === "lg"){
		width = "w-24 md:w-36"
	}

	return(
		<div className={`${width} rounded-full overflow-hidden`}>
			<img src="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTR8ODA4Mjc4OTV8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
		</div>
	)
}