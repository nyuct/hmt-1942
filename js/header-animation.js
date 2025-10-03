	// header scroll effect
	var lastKnownScrollY = 0
	var currentScrollY = 0
	var ticking = false
	var idOfHeader = "logo"
	var idOfHeader2 = "menu"
	var eleHeader = null
	var eleHeader2 = null
	const classes = {
		pinned: "header-pin",
		pinnedMenu: "header-pin-menu",
		unpinned: "header-unpin",
		watch: "watch"
	}
	function onScroll(scrollValue) {
        // console.log('iniu')
		currentScrollY = scrollValue
		requestTick()
	}
	function requestTick() {
		if (!ticking) {
			requestAnimationFrame(update)
		}
		ticking = true
	}
	function update() {
		if (currentScrollY < lastKnownScrollY) {
			pin()
		} else if (currentScrollY > lastKnownScrollY) {
			unpin()
		}
		lastKnownScrollY = currentScrollY
		ticking = false
	}
	function pin() {
		if (eleHeader.classList.contains(classes.unpinned) || eleHeader2.classList.contains(classes.pinnedMenu)) {
			// console.log('pin')
			eleHeader.classList.remove(classes.unpinned)
			eleHeader2.classList.remove(classes.unpinned) 
			document.getElementById(classes.watch).classList.remove('slide-right')
			eleHeader.classList.add(classes.pinned)
			eleHeader2.classList.add(classes.pinnedMenu)
			eleHeader2.classList.add('delayed-pin');
			document.getElementById(classes.watch).classList.add('slide-left')
		}
	}
	function unpin() {
		if (eleHeader.classList.contains(classes.pinned) || !eleHeader.classList.contains(classes.unpinned) || !eleHeader2.classList.contains(classes.pinnedMenu)) {
			// console.log('unpin')
			eleHeader.classList.remove(classes.pinned)
			eleHeader2.classList.remove(classes.pinnedMenu)
			eleHeader2.classList.remove('delayed-pin');
			document.getElementById(classes.watch).classList.remove('slide-left')
			eleHeader.classList.add(classes.unpinned)
			eleHeader2.classList.add(classes.unpinned)
			document.getElementById(classes.watch).classList.add('slide-right')
		}
	}
	function clock() {
		eleHeader = document.getElementById(idOfHeader)
		eleHeader2 = document.getElementById(idOfHeader2)
		
		var watch = document.getElementById('watch')
		var hour = document.getElementById('hour')
		var mins = document.getElementById('mins')
		var secs = document.getElementById('secs')
		setInterval(function () {
			var time = new Date()
			function netHours(h) {var net;if (h > 12) {net = h - 12}return net}
			hour.style.transform = 'translate(-50%, -50%) rotate(' + (time.getHours() * 30 + time.getMinutes()/2 - 180) + 'deg)'
			mins.style.transform = 'translate(-50%, -50%) rotate(' + ((time.getMinutes() * 6) - 180) + 'deg)'
			secs.style.transform = 'translate(-50%, -50%) rotate(' + ((time.getSeconds() * 6) - 180) + 'deg)'
			
		}, 1000)
	}
	clock();
	// window.addEventListener("scroll", function (event) {
	// 	console.log('asfkj;lk')
	// 	const scrollPosition = window.scrollY
	// 	if (scrollPosition <= window.innerHeight / 2) {
	// 		document.getElementById("header").classList.remove(classes.pinned)
	// 	}
	// })
