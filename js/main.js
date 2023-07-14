/*
 Platform.js <https://mths.be/platform>
 Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 Copyright 2011-2013 John-David Dalton
 Available under MIT license <https://mths.be/mit>
*/
(function() {
	function c(e) {
		e = String(e);
		return e.charAt(0).toUpperCase() + e.slice(1)
	}

	function g(e, E) {
		var H = -1,
			u = e ? e.length : 0;
		if ("number" == typeof u && -1 < u && u <= x)
			for (; ++H < u;) E(e[H], H, e);
		else b(e, E)
	}

	function a(e) {
		e = String(e).replace(/^ +| +$/g, "");
		return /^(?:webOS|i(?:OS|P))/.test(e) ? e : c(e)
	}

	function b(e, E) {
		for (var H in e) F.call(e, H) && E(e[H], H, e)
	}

	function m(e) {
		return null == e ? c(e) : z.call(e).slice(8, -1)
	}

	function h(e, E) {
		var H = null != e ? typeof e[E] : "number";
		return !/^(?:boolean|number|string|undefined)$/.test(H) &&
			("object" == H ? !!e[E] : !0)
	}

	function d(e) {
		return String(e).replace(/([ -])(?!$)/g, "$1?")
	}

	function q(e, E) {
		var H = null;
		g(e, function(u, l) {
			H = E(H, u, l, e)
		});
		return H
	}

	function k(e) {
		function E(U) {
			return q(U, function(f, K) {
				var Z = K.pattern || d(K);
				!f && (f = RegExp("\\b" + Z + " *\\d+[.\\w_]*", "i").exec(e) || RegExp("\\b" + Z + " *\\w+-[\\w]*", "i").exec(e) || RegExp("\\b" + Z + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(e)) && ((f = String(K.label && !RegExp(Z, "i").test(K.label) ? K.label : f).split("/"))[1] && !/[\d.]+/.test(f[0]) && (f[0] +=
					" " + f[1]), K = K.label || K, f = a(f[0].replace(RegExp(Z, "i"), K).replace(RegExp("; *(?:" + K + "[_-])?", "i"), " ").replace(RegExp("(" + K + ")[-_.]?(\\w)", "i"), "$1 $2")));
				return f
			})
		}

		function H(U) {
			return q(U, function(f, K) {
				return f || (RegExp(K + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(e) || 0)[1] || null
			})
		}
		var u = v,
			l = e && "object" == typeof e && "String" != m(e);
		l && (u = e, e = null);
		var C = u.navigator || {},
			D = C.userAgent || "";
		e || (e = D);
		var Q = l ? !!C.likeChrome : /\bChrome\b/.test(e) && !/internal|\n/i.test(z.toString()),
			X = l ? "Object" : "ScriptBridgingProxyObject",
			W = l ? "Object" : "Environment",
			O = l && u.java ? "JavaPackage" : m(u.java),
			S = l ? "Object" : "RuntimeObject";
		W = (O = /\bJava/.test(O) && u.java) && m(u.environment) == W;
		var N = O ? "a" : "\u03b1",
			Y = O ? "b" : "\u03b2",
			L = u.document || {},
			P = u.operamini || u.opera,
			G = y.test(G = l && P ? P["[[Class]]"] : m(P)) ? G : P = null,
			n, T = e;
		l = [];
		var V = null,
			R = e == D;
		D = R && P && "function" == typeof P.version && P.version();
		var I = function(U) {
				return q(U, function(f, K) {
					return f || RegExp("\\b" + (K.pattern || d(K)) + "\\b", "i").exec(e) && (K.label ||
						K)
				})
			}([{
				label: "EdgeHTML",
				pattern: "Edge"
			}, "Trident", {
				label: "WebKit",
				pattern: "AppleWebKit"
			}, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
			A = function(U) {
				return q(U, function(f, K) {
					return f || RegExp("\\b" + (K.pattern || d(K)) + "\\b", "i").exec(e) && (K.label || K)
				})
			}(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
					label: "Microsoft Edge",
					pattern: "Edge"
				}, "Midori", "Nook Browser",
				"PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
					label: "Samsung Internet",
					pattern: "SamsungBrowser"
				}, "SeaMonkey", {
					label: "Silk",
					pattern: "(?:Cloud9|Silk-Accelerated)"
				}, "Sleipnir", "SlimBrowser", {
					label: "SRWare Iron",
					pattern: "Iron"
				}, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
					label: "Opera Mini",
					pattern: "OPiOS"
				}, "Opera", {
					label: "Opera",
					pattern: "OPR"
				}, "Chrome", {
					label: "Chrome Mobile",
					pattern: "(?:CriOS|CrMo)"
				}, {
					label: "Firefox",
					pattern: "(?:Firefox|Minefield)"
				}, {
					label: "Firefox for iOS",
					pattern: "FxiOS"
				},
				{
					label: "IE",
					pattern: "IEMobile"
				}, {
					label: "IE",
					pattern: "MSIE"
				}, "Safari"
			]),
			J = E([{
					label: "BlackBerry",
					pattern: "BB10"
				}, "BlackBerry", {
					label: "Galaxy S",
					pattern: "GT-I9000"
				}, {
					label: "Galaxy S2",
					pattern: "GT-I9100"
				}, {
					label: "Galaxy S3",
					pattern: "GT-I9300"
				}, {
					label: "Galaxy S4",
					pattern: "GT-I9500"
				}, {
					label: "Galaxy S5",
					pattern: "SM-G900"
				}, {
					label: "Galaxy S6",
					pattern: "SM-G920"
				}, {
					label: "Galaxy S6 Edge",
					pattern: "SM-G925"
				}, {
					label: "Galaxy S7",
					pattern: "SM-G930"
				}, {
					label: "Galaxy S7 Edge",
					pattern: "SM-G935"
				}, "Google TV", "Lumia", "iPad",
				"iPod", "iPhone", "Kindle", {
					label: "Kindle Fire",
					pattern: "(?:Cloud9|Silk-Accelerated)"
				}, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
					label: "Wii U",
					pattern: "WiiU"
				}, "Wii", "Xbox One", {
					label: "Xbox 360",
					pattern: "Xbox"
				}, "Xoom"
			]),
			M = function(U) {
				return q(U, function(f, K, Z) {
					return f || (K[J] || K[/^[a-z]+(?: +[a-z]+\b)*/i.exec(J)] || RegExp("\\b" + d(Z) + "(?:\\b|\\w*\\d)", "i").exec(e)) && Z
				})
			}({
				Apple: {
					iPad: 1,
					iPhone: 1,
					iPod: 1
				},
				Archos: {},
				Amazon: {
					Kindle: 1,
					"Kindle Fire": 1
				},
				Asus: {
					Transformer: 1
				},
				"Barnes & Noble": {
					Nook: 1
				},
				BlackBerry: {
					PlayBook: 1
				},
				Google: {
					"Google TV": 1,
					Nexus: 1
				},
				HP: {
					TouchPad: 1
				},
				HTC: {},
				LG: {},
				Microsoft: {
					Xbox: 1,
					"Xbox One": 1
				},
				Motorola: {
					Xoom: 1
				},
				Nintendo: {
					"Wii U": 1,
					Wii: 1
				},
				Nokia: {
					Lumia: 1
				},
				Samsung: {
					"Galaxy S": 1,
					"Galaxy S2": 1,
					"Galaxy S3": 1,
					"Galaxy S4": 1
				},
				Sony: {
					PlayStation: 1,
					"PlayStation Vita": 1
				}
			}),
			B = function(U) {
				return q(U, function(f, K) {
					var Z = K.pattern || d(K);
					if (!f && (f = RegExp("\\b" + Z + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(e))) {
						var aa = f,
							ca = K.label || K,
							da = {
								"10.0": "10",
								"6.4": "10 Technical Preview",
								"6.3": "8.1",
								"6.2": "8",
								"6.1": "Server 2008 R2 / 7",
								"6.0": "Server 2008 / Vista",
								"5.2": "Server 2003 / XP 64-bit",
								"5.1": "XP",
								"5.01": "2000 SP1",
								"5.0": "2000",
								"4.0": "NT",
								"4.90": "ME"
							};
						Z && ca && /^Win/i.test(aa) && !/^Windows Phone /i.test(aa) && (da = da[/[\d.]+$/.exec(aa)]) && (aa = "Windows " + da);
						aa = String(aa);
						Z && ca && (aa = aa.replace(RegExp(Z, "i"), ca));
						f = aa = a(aa.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/,
							"$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
					}
					return f
				})
			}(["Windows Phone", "Android", "CentOS", {
					label: "Chrome OS",
					pattern: "CrOS"
				}, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X",
				"Macintosh", "Mac", "Windows 98;", "Windows "
			]);
		I && (I = [I]);
		M && !J && (J = E([M]));
		if (n = /\bGoogle TV\b/.exec(J)) J = n[0];
		/\bSimulator\b/i.test(e) && (J = (J ? J + " " : "") + "Simulator");
		"Opera Mini" == A && /\bOPiOS\b/.test(e) && l.push("running in Turbo/Uncompressed mode");
		"IE" == A && /\blike iPhone OS\b/.test(e) ? (n = k(e.replace(/like iPhone OS/, "")), M = n.manufacturer, J = n.product) : /^iP/.test(J) ? (A || (A = "Safari"), B = "iOS" + ((n = / OS ([\d_]+)/i.exec(e)) ? " " + n[1].replace(/_/g, ".") : "")) : "Konqueror" != A || /buntu/i.test(B) ? M && "Google" != M &&
			(/Chrome/.test(A) && !/\bMobile Safari\b/i.test(e) || /\bVita\b/.test(J)) || /\bAndroid\b/.test(B) && /^Chrome/.test(A) && /\bVersion\//i.test(e) ? (A = "Android Browser", B = /\bAndroid\b/.test(B) ? B : "Android") : "Silk" == A ? (/\bMobi/i.test(e) || (B = "Android", l.unshift("desktop mode")), /Accelerated *= *true/i.test(e) && l.unshift("accelerated")) : "PaleMoon" == A && (n = /\bFirefox\/([\d.]+)\b/.exec(e)) ? l.push("identifying as Firefox " + n[1]) : "Firefox" == A && (n = /\b(Mobile|Tablet|TV)\b/i.exec(e)) ? (B || (B = "Firefox OS"), J || (J = n[1])) : !A ||
			(n = !/\bMinefield\b/i.test(e) && /\b(?:Firefox|Safari)\b/.exec(A)) ? (A && !J && /[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(n + "/") + 8)) && (A = null), (n = J || M || B) && (J || M || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(B)) && (A = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(B) ? B : n) + " Browser")) : "Electron" == A && (n = (/\bChrome\/([\d.]+)\b/.exec(e) || 0)[1]) && l.push("Chromium " + n) : B = "Kubuntu";
		D || (D = H(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", d(A),
			"(?:Firefox|Minefield|NetFront)"
		]));
		if (n = "iCab" == I && 3 < parseFloat(D) && "WebKit" || /\bOpera\b/.test(A) && (/\bOPR\b/.test(e) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(e) && !/^(?:Trident|EdgeHTML)$/.test(I) && "WebKit" || !I && /\bMSIE\b/i.test(e) && ("Mac OS" == B ? "Tasman" : "Trident") || "WebKit" == I && /\bPlayStation\b(?! Vita\b)/i.test(A) && "NetFront") I = [n];
		"IE" == A && (n = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1]) ? (A += " Mobile", B = "Windows Phone " + (/\+$/.test(n) ? n : n + ".x"), l.unshift("desktop mode")) : /\bWPDesktop\b/i.test(e) ?
			(A = "IE Mobile", B = "Windows Phone 8.x", l.unshift("desktop mode"), D || (D = (/\brv:([\d.]+)/.exec(e) || 0)[1])) : "IE" != A && "Trident" == I && (n = /\brv:([\d.]+)/.exec(e)) && (A && l.push("identifying as " + A + (D ? " " + D : "")), A = "IE", D = n[1]);
		if (R) {
			if (h(u, "global"))
				if (O && (n = O.lang.System, T = n.getProperty("os.arch"), B = B || n.getProperty("os.name") + " " + n.getProperty("os.version")), W) {
					try {
						D = u.require("ringo/engine").version.join("."), A = "RingoJS"
					} catch (U) {
						(n = u.system) && n.global.system == u.system && (A = "Narwhal", B || (B = n[0].os || null))
					}
					A ||
						(A = "Rhino")
				} else "object" == typeof u.process && !u.process.browser && (n = u.process) && ("object" == typeof n.versions && ("string" == typeof n.versions.electron ? (l.push("Node " + n.versions.node), A = "Electron", D = n.versions.electron) : "string" == typeof n.versions.nw && (l.push("Chromium " + D, "Node " + n.versions.node), A = "NW.js", D = n.versions.nw)), A || (A = "Node.js", T = n.arch, B = n.platform, D = (D = /[\d.]+/.exec(n.version)) ? D[0] : null));
			else m(n = u.runtime) == X ? (A = "Adobe AIR", B = n.flash.system.Capabilities.os) : m(n = u.phantom) == S ? (A = "PhantomJS",
				D = (n = n.version || null) && n.major + "." + n.minor + "." + n.patch) : "number" == typeof L.documentMode && (n = /\bTrident\/(\d+)/i.exec(e)) ? (D = [D, L.documentMode], (n = +n[1] + 4) != D[1] && (l.push("IE " + D[1] + " mode"), I && (I[1] = ""), D[1] = n), D = "IE" == A ? String(D[1].toFixed(1)) : D[0]) : "number" == typeof L.documentMode && /^(?:Chrome|Firefox)\b/.test(A) && (l.push("masking as " + A + " " + D), A = "IE", D = "11.0", I = ["Trident"], B = "Windows");
			B = B && a(B)
		}
		D && (n = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(D) || /(?:alpha|beta)(?: ?\d)?/i.exec(e + ";" + (R && C.appMinorVersion)) ||
			/\bMinefield\b/i.test(e) && "a") && (V = /b/i.test(n) ? "beta" : "alpha", D = D.replace(RegExp(n + "\\+?$"), "") + ("beta" == V ? Y : N) + (/\d+\+?/.exec(n) || ""));
		if ("Fennec" == A || "Firefox" == A && /\b(?:Android|Firefox OS)\b/.test(B)) A = "Firefox Mobile";
		else if ("Maxthon" == A && D) D = D.replace(/\.[\d.]+/, ".x");
		else if (/\bXbox\b/i.test(J)) "Xbox 360" == J && (B = null), "Xbox 360" == J && /\bIEMobile\b/.test(e) && l.unshift("mobile mode");
		else if (!/^(?:Chrome|IE|Opera)$/.test(A) && (!A || J || /Browser|Mobi/.test(A)) || "Windows CE" != B && !/Mobi/i.test(e))
			if ("IE" ==
				A && R) try {
				null === u.external && l.unshift("platform preview")
			} catch (U) {
				l.unshift("embedded")
			} else(/\bBlackBerry\b/.test(J) || /\bBB10\b/.test(e)) && (n = (RegExp(J.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(e) || 0)[1] || D) ? (n = [n, /BB10/.test(e)], B = (n[1] ? (J = null, M = "BlackBerry") : "Device Software") + " " + n[0], D = null) : this != b && "Wii" != J && (R && P || /Opera/.test(A) && /\b(?:MSIE|Firefox)\b/i.test(e) || "Firefox" == A && /\bOS X (?:\d+\.){2,}/.test(B) || "IE" == A && (B && !/^Win/.test(B) && 5.5 < D || /\bWindows XP\b/.test(B) && 8 < D || 8 == D && !/\bTrident\b/.test(e))) &&
				!y.test(n = k.call(b, e.replace(y, "") + ";")) && n.name && (n = "ing as " + n.name + ((n = n.version) ? " " + n : ""), y.test(A) ? (/\bIE\b/.test(n) && "Mac OS" == B && (B = null), n = "identify" + n) : (n = "mask" + n, A = G ? a(G.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(n) && (B = null), R || (D = null)), I = ["Presto"], l.push(n));
			else A += " Mobile";
		if (n = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1]) {
			n = [parseFloat(n.replace(/\.(\d)$/, ".0$1")), n];
			if ("Safari" == A && "+" == n[1].slice(-1)) A = "WebKit Nightly", V = "alpha", D = n[1].slice(0, -1);
			else if (D ==
				n[1] || D == (n[2] = (/\bSafari\/([\d.]+\+?)/i.exec(e) || 0)[1])) D = null;
			n[1] = (/\bChrome\/([\d.]+)/i.exec(e) || 0)[1];
			537.36 == n[0] && 537.36 == n[2] && 28 <= parseFloat(n[1]) && "WebKit" == I && (I = ["Blink"]);
			R && (Q || n[1]) ? (I && (I[1] = "like Chrome"), n = n[1] || (n = n[0], 530 > n ? 1 : 532 > n ? 2 : 532.05 > n ? 3 : 533 > n ? 4 : 534.03 > n ? 5 : 534.07 > n ? 6 : 534.1 > n ? 7 : 534.13 > n ? 8 : 534.16 > n ? 9 : 534.24 > n ? 10 : 534.3 > n ? 11 : 535.01 > n ? 12 : 535.02 > n ? "13+" : 535.07 > n ? 15 : 535.11 > n ? 16 : 535.19 > n ? 17 : 536.05 > n ? 18 : 536.1 > n ? 19 : 537.01 > n ? 20 : 537.11 > n ? "21+" : 537.13 > n ? 23 : 537.18 > n ? 24 : 537.24 > n ? 25 : 537.36 >
				n ? 26 : "Blink" != I ? "27" : "28")) : (I && (I[1] = "like Safari"), n = (n = n[0], 400 > n ? 1 : 500 > n ? 2 : 526 > n ? 3 : 533 > n ? 4 : 534 > n ? "4+" : 535 > n ? 5 : 537 > n ? 6 : 538 > n ? 7 : 601 > n ? 8 : "8"));
			I && (I[1] += " " + (n += "number" == typeof n ? ".x" : /[.+]/.test(n) ? "" : "+"));
			"Safari" == A && (!D || 45 < parseInt(D)) && (D = n)
		}
		"Opera" == A && (n = /\bzbov|zvav$/.exec(B)) ? (A += " ", l.unshift("desktop mode"), "zvav" == n ? (A += "Mini", D = null) : A += "Mobile", B = B.replace(RegExp(" *" + n + "$"), "")) : "Safari" == A && /\bChrome\b/.exec(I && I[1]) && (l.unshift("desktop mode"), A = "Chrome Mobile", D = null, /\bOS X\b/.test(B) ?
			(M = "Apple", B = "iOS 4.3+") : B = null);
		D && 0 == D.indexOf(n = /[\d.]+$/.exec(B)) && -1 < e.indexOf("/" + n + "-") && (B = String(B.replace(n, "")).replace(/^ +| +$/g, ""));
		I && !/\b(?:Avant|Nook)\b/.test(A) && (/Browser|Lunascape|Maxthon/.test(A) || "Safari" != A && /^iOS/.test(B) && /\bSafari\b/.test(I[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(A) && I[1]) && (n = I[I.length - 1]) && l.push(n);
		l.length && (l = ["(" + l.join("; ") + ")"]);
		M && J && 0 > J.indexOf(M) && l.push("on " + M);
		J && l.push((/^on /.test(l[l.length -
			1]) ? "" : "on ") + J);
		if (B) {
			var ba = (n = / ([\d.+]+)$/.exec(B)) && "/" == B.charAt(B.length - n[0].length - 1);
			B = {
				architecture: 32,
				family: n && !ba ? B.replace(n[0], "") : B,
				version: n ? n[1] : null,
				toString: function() {
					var U = this.version;
					return this.family + (U && !ba ? " " + U : "") + (64 == this.architecture ? " 64-bit" : "")
				}
			}
		}(n = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(T)) && !/\bi686\b/i.test(T) ? (B && (B.architecture = 64, B.family = B.family.replace(RegExp(" *" + n), "")), A && (/\bWOW64\b/i.test(e) || R && /\w(?:86|32)$/.test(C.cpuClass || C.platform) && !/\bWin64; x64\b/i.test(e)) &&
			l.unshift("32-bit")) : B && /^OS X/.test(B.family) && "Chrome" == A && 39 <= parseFloat(D) && (B.architecture = 64);
		e || (e = null);
		u = {};
		u.description = e;
		u.layout = I && I[0];
		u.manufacturer = M;
		u.name = A;
		u.prerelease = V;
		u.product = J;
		u.ua = e;
		u.version = A && D;
		u.os = B || {
			architecture: null,
			family: null,
			version: null,
			toString: function() {
				return "null"
			}
		};
		u.parse = k;
		u.toString = function() {
			return this.description || ""
		};
		u.version && l.unshift(D);
		u.name && l.unshift(A);
		B && A && (B != String(B).split(" ")[0] || B != A.split(" ")[0] && !J) && l.push(J ? "(" + B + ")" : "on " +
			B);
		l.length && (u.description = l.join(" "));
		return u
	}
	var t = {
			"function": !0,
			object: !0
		},
		v = t[typeof window] && window || this,
		p = t[typeof exports] && exports;
	t = t[typeof module] && module && !module.nodeType && module;
	var w = p && t && "object" == typeof global && global;
	!w || w.global !== w && w.window !== w && w.self !== w || (v = w);
	var x = Math.pow(2, 53) - 1,
		y = /\bOpera/;
	w = Object.prototype;
	var F = w.hasOwnProperty,
		z = w.toString,
		r = k();
	"function" == typeof define && "object" == typeof define.amd && define.amd ? (v.platform = r, define(function() {
			return r
		})) : p &&
		t ? b(r, function(e, E) {
			p[E] = e
		}) : v.platform = r
}).call(this);

function buildIOSMeta() {
	for (var c = [{
			name: "viewport",
			content: "width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
		}, {
			name: "apple-mobile-web-app-capable",
			content: "yes"
		}, {
			name: "apple-mobile-web-app-status-bar-style",
			content: "black"
		}], g = 0; g < c.length; g++) {
		var a = document.createElement("meta");
		a.name = c[g].name;
		a.content = c[g].content;
		var b = window.document.head.querySelector('meta[name="' + a.name + '"]');
		b && b.parentNode.removeChild(b);
		window.document.head.appendChild(a)
	}
}

function hideIOSFullscreenPanel() {
	jQuery(".xxx-ios-fullscreen-message").css("display", "none");
	jQuery(".xxx-ios-fullscreen-scroll").css("display", "none");
	jQuery(".xxx-game-iframe-full").removeClass("xxx-game-iframe-iphone-se")
}

function buildIOSFullscreenPanel() {
	jQuery("body").append('<div class="xxx-ios-fullscreen-message"><div class="xxx-ios-fullscreen-swipe"></div></div><div class="xxx-ios-fullscreen-scroll"></div>')
}

function showIOSFullscreenPanel() {
	jQuery(".xxx-ios-fullscreen-message").css("display", "block");
	jQuery(".xxx-ios-fullscreen-scroll").css("display", "block")
}

function __iosResize() {
	window.scrollTo(0, 0);
	if ("iPhone" === platform.product) switch (window.devicePixelRatio) {
		case 2:
			switch (window.innerWidth) {
				case 568:
					320 !== window.innerHeight && jQuery(".xxx-game-iframe-full").addClass("xxx-game-iframe-iphone-se");
					break;
				case 667:
					375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
					break;
				default:
					hideIOSFullscreenPanel()
			}
			break;
		case 3:
			switch (window.innerWidth) {
				case 736:
					414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
					break;
				case 724:
					375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
					break;
				default:
					hideIOSFullscreenPanel()
			}
			break;
		default:
			hideIOSFullscreenPanel()
	}
}

function iosResize() {
	__iosResize();
	setTimeout(function() {
		__iosResize()
	}, 500)
}
$(document).ready(function() {
	platform && "iPhone" === platform.product && "Safari" === platform.name && (buildIOSFullscreenPanel(), buildIOSMeta())
});
jQuery(window).resize(function() {
	platform && "iPhone" === platform.product && "Safari" === platform.name && iosResize()
});
(function() {
	var c = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
		g = "undefined" !== typeof module && module.exports,
		a = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
		b = function() {
			for (var d, q = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),
					"webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
				], k = 0, t = q.length, v = {}; k < t; k++)
				if ((d = q[k]) && d[1] in c) {
					for (k = 0; k < d.length; k++) v[q[0][k]] =
						d[k];
					return v
				} return !1
		}(),
		m = {
			change: b.fullscreenchange,
			error: b.fullscreenerror
		},
		h = {
			request: function(d) {
				var q = b.requestFullscreen;
				d = d || c.documentElement;
				if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) d[q]();
				else d[q](a && Element.ALLOW_KEYBOARD_INPUT)
			},
			exit: function() {
				c[b.exitFullscreen]()
			},
			toggle: function(d) {
				this.isFullscreen ? this.exit() : this.request(d)
			},
			onchange: function(d) {
				this.on("change", d)
			},
			onerror: function(d) {
				this.on("error", d)
			},
			on: function(d, q) {
				var k = m[d];
				k && c.addEventListener(k, q, !1)
			},
			off: function(d,
				q) {
				var k = m[d];
				k && c.removeEventListener(k, q, !1)
			},
			raw: b
		};
	b ? (Object.defineProperties(h, {
		isFullscreen: {
			get: function() {
				return !!c[b.fullscreenElement]
			}
		},
		element: {
			enumerable: !0,
			get: function() {
				return c[b.fullscreenElement]
			}
		},
		enabled: {
			enumerable: !0,
			get: function() {
				return !!c[b.fullscreenEnabled]
			}
		}
	}), g ? module.exports = h : window.screenfull = h) : g ? module.exports = !1 : window.screenfull = !1
})();
this.createjs = this.createjs || {};
(function() {
	function c(a) {
		this.Container_constructor();
		this.spriteSheet = a
	}
	var g = createjs.extend(c, createjs.Container);
	g.addChild = function(a) {
		return null == a ? a : 1 < arguments.length ? this.addChildAt.apply(this, Array.prototype.slice.call(arguments).concat([this.children.length])) : this.addChildAt(a, this.children.length)
	};
	g.addChildAt = function(a, b) {
		var m = arguments.length,
			h = arguments[m - 1];
		if (0 > h || h > this.children.length) return arguments[m - 2];
		if (2 < m) {
			for (var d = 0; d < m - 1; d++) this.addChildAt(arguments[d], h + d);
			return arguments[m -
				2]
		}
		if (!(1 <= a._spritestage_compatibility)) return console && console.log("Error: You can only add children of type SpriteContainer, Sprite, BitmapText, or DOMElement [" + a.toString() + "]"), a;
		if (4 >= a._spritestage_compatibility) {
			m = a.spriteSheet;
			if (!m || !m._images || 1 < m._images.length || this.spriteSheet && this.spriteSheet !== m) return console && console.log("Error: A child's spriteSheet must be equal to its parent spriteSheet and only use one image. [" + a.toString() + "]"), a;
			this.spriteSheet = m
		}
		a.parent && a.parent.removeChild(a);
		a.parent = this;
		this.children.splice(b, 0, a);
		return a
	};
	g.toString = function() {
		return "[SpriteContainer (name=" + this.name + ")]"
	};
	createjs.SpriteContainer = createjs.promote(c, "Container")
})();
this.createjs = this.createjs || {};
(function() {
	function c(a, b, m) {
		this.Stage_constructor(a);
		this._preserveDrawingBuffer = b || !1;
		this._antialias = m || !1;
		this._viewportHeight = this._viewportWidth = 0;
		this._webGLContext = this._projectionMatrix = null;
		this._webGLErrorDetected = !1;
		this._clearColor = null;
		this._maxTexturesPerDraw = 1;
		this._indicesBuffer = this._indices = this._verticesBuffer = this._vertices = this._shaderProgram = this._maxIndicesPerDraw = this._maxBoxesPerDraw = this._maxBoxesPointsPerDraw = null;
		this._currentBoxIndex = -1;
		this._drawTexture = null;
		this._initializeWebGL()
	}
	[createjs.SpriteContainer, createjs.Sprite, createjs.BitmapText, createjs.Bitmap, createjs.DOMElement].forEach(function(a, b) {
		a.prototype._spritestage_compatibility = b + 1
	});
	var g = createjs.extend(c, createjs.Stage);
	c.NUM_VERTEX_PROPERTIES = 5;
	c.POINTS_PER_BOX = 4;
	c.NUM_VERTEX_PROPERTIES_PER_BOX = c.POINTS_PER_BOX * c.NUM_VERTEX_PROPERTIES;
	c.INDICES_PER_BOX = 6;
	c.MAX_INDEX_SIZE = Math.pow(2, 16);
	c.MAX_BOXES_POINTS_INCREMENT = c.MAX_INDEX_SIZE / 4;
	g._get_isWebGL = function() {
		return !!this._webGLContext
	};
	try {
		Object.defineProperties(g, {
			isWebGL: {
				get: g._get_isWebGL
			}
		})
	} catch (a) {}
	g.addChild = function(a) {
		return null == a ? a : 1 < arguments.length ? this.addChildAt.apply(this, Array.prototype.slice.call(arguments).concat([this.children.length])) : this.addChildAt(a, this.children.length)
	};
	g.addChildAt = function(a, b) {
		var m = arguments.length,
			h = arguments[m - 1];
		if (0 > h || h > this.children.length) return arguments[m - 2];
		if (2 < m) {
			for (var d = 0; d < m - 1; d++) this.addChildAt(arguments[d], h + d);
			return arguments[m - 2]
		}
		if (!(1 <= a._spritestage_compatibility)) return console && console.log("Error: You can only add children of type SpriteContainer, Sprite, Bitmap, BitmapText, or DOMElement. [" +
			a.toString() + "]"), a;
		if (!a.image && !a.spriteSheet && 4 >= a._spritestage_compatibility) return console && console.log("Error: You can only add children that have an image or spriteSheet defined on them. [" + a.toString() + "]"), a;
		a.parent && a.parent.removeChild(a);
		a.parent = this;
		this.children.splice(b, 0, a);
		return a
	};
	g.update = function(a) {
		this.canvas && (this.tickOnUpdate && this.tick(a), this.dispatchEvent("drawstart"), this.autoClear && this.clear(), (a = this._setWebGLContext()) ? this.draw(a, !1) : (a = this.canvas.getContext("2d"),
			a.save(), this.updateContext(a), this.draw(a, !1), a.restore()), this.dispatchEvent("drawend"))
	};
	g.clear = function() {
		if (this.canvas) {
			var a = this._setWebGLContext();
			a ? a.clear(a.COLOR_BUFFER_BIT) : (a = this.canvas.getContext("2d"), a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1))
		}
	};
	g.draw = function(a, b) {
		return "undefined" !== typeof WebGLRenderingContext && (a === this._webGLContext || a instanceof WebGLRenderingContext) ? (this._drawWebGLKids(this.children, a), !0) : this.Stage_draw(a, b)
	};
	g.updateViewport = function(a, b) {
		this._viewportWidth = a;
		this._viewportHeight = b;
		this._webGLContext && (this._webGLContext.viewport(0, 0, this._viewportWidth, this._viewportHeight), this._projectionMatrix || (this._projectionMatrix = new Float32Array([0, 0, 0, 0, 0, 1, -1, 1, 1])), this._projectionMatrix[0] = 2 / a, this._projectionMatrix[4] = -2 / b)
	};
	g.clearImageTexture = function(a) {
		a.__easeljs_texture = null
	};
	g.toString = function() {
		return "[SpriteStage (name=" + this.name + ")]"
	};
	g._initializeWebGL = function() {
		this._clearColor = {
			r: 0,
			g: 0,
			b: 0,
			a: 0
		};
		this._setWebGLContext()
	};
	g._setWebGLContext = function() {
		this.canvas ? this._webGLContext && this._webGLContext.canvas === this.canvas || this._initializeWebGLContext() : this._webGLContext = null;
		return this._webGLContext
	};
	g._initializeWebGLContext = function() {
		var a = {
			depth: !1,
			alpha: !0,
			preserveDrawingBuffer: this._preserveDrawingBuffer,
			antialias: this._antialias,
			premultipliedAlpha: !0
		};
		if (a = this._webGLContext = this.canvas.getContext("webgl", a) || this.canvas.getContext("experimental-webgl", a)) this._maxTexturesPerDraw =
			1, this._setClearColor(this._clearColor.r, this._clearColor.g, this._clearColor.b, this._clearColor.a), a.enable(a.BLEND), a.blendFuncSeparate(a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA, a.ONE, a.ONE_MINUS_SRC_ALPHA), a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), this._createShaderProgram(a), this._webGLErrorDetected ? this._webGLContext = null : (this._createBuffers(a), this.updateViewport(this._viewportWidth || this.canvas.width || 0, this._viewportHeight || this.canvas.height || 0))
	};
	g._setClearColor = function(a, b, m, h) {
		this._clearColor.r =
			a;
		this._clearColor.g = b;
		this._clearColor.b = m;
		this._clearColor.a = h;
		this._webGLContext && this._webGLContext.clearColor(a, b, m, h)
	};
	g._createShaderProgram = function(a) {
		var b = this._createShader(a, a.FRAGMENT_SHADER, "precision mediump float;uniform sampler2D uSampler0;varying vec3 vTextureCoord;void main(void) {vec4 color = texture2D(uSampler0, vTextureCoord.st);gl_FragColor = vec4(color.rgb, color.a * vTextureCoord.z);}"),
			m = this._createShader(a, a.VERTEX_SHADER, "attribute vec2 aVertexPosition;attribute vec3 aTextureCoord;uniform mat3 uPMatrix;varying vec3 vTextureCoord;void main(void) {vTextureCoord = aTextureCoord;gl_Position = vec4((uPMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);}");
		if (!this._webGLErrorDetected && b && m) {
			var h = a.createProgram();
			a.attachShader(h, b);
			a.attachShader(h, m);
			a.linkProgram(h);
			a.getProgramParameter(h, a.LINK_STATUS) ? (h.vertexPositionAttribute = a.getAttribLocation(h, "aVertexPosition"), h.textureCoordAttribute = a.getAttribLocation(h, "aTextureCoord"), h.sampler0uniform = a.getUniformLocation(h, "uSampler0"), a.enableVertexAttribArray(h.vertexPositionAttribute), a.enableVertexAttribArray(h.textureCoordAttribute), h.pMatrixUniform = a.getUniformLocation(h, "uPMatrix"), a.useProgram(h),
				this._shaderProgram = h) : this._webGLErrorDetected = !0
		}
	};
	g._createShader = function(a, b, m) {
		b = a.createShader(b);
		a.shaderSource(b, m);
		a.compileShader(b);
		return a.getShaderParameter(b, a.COMPILE_STATUS) ? b : (this._webGLErrorDetected = !0, null)
	};
	g._createBuffers = function(a) {
		this._verticesBuffer = a.createBuffer();
		a.bindBuffer(a.ARRAY_BUFFER, this._verticesBuffer);
		var b = 4 * c.NUM_VERTEX_PROPERTIES;
		a.vertexAttribPointer(this._shaderProgram.vertexPositionAttribute, 2, a.FLOAT, a.FALSE, b, 0);
		a.vertexAttribPointer(this._shaderProgram.textureCoordAttribute,
			3, a.FLOAT, a.FALSE, b, 8);
		this._indicesBuffer = a.createBuffer();
		this._setMaxBoxesPoints(a, c.MAX_BOXES_POINTS_INCREMENT)
	};
	g._setMaxBoxesPoints = function(a, b) {
		this._maxBoxesPointsPerDraw = b;
		this._maxBoxesPerDraw = this._maxBoxesPointsPerDraw / c.POINTS_PER_BOX | 0;
		this._maxIndicesPerDraw = this._maxBoxesPerDraw * c.INDICES_PER_BOX;
		a.bindBuffer(a.ARRAY_BUFFER, this._verticesBuffer);
		this._vertices = new Float32Array(this._maxBoxesPerDraw * c.NUM_VERTEX_PROPERTIES_PER_BOX);
		a.bufferData(a.ARRAY_BUFFER, this._vertices, a.DYNAMIC_DRAW);
		this._indices = new Uint16Array(this._maxIndicesPerDraw);
		for (var m = 0, h = this._indices.length; m < h; m += c.INDICES_PER_BOX) {
			var d = m * c.POINTS_PER_BOX / c.INDICES_PER_BOX;
			this._indices[m] = d;
			this._indices[m + 1] = d + 1;
			this._indices[m + 2] = d + 2;
			this._indices[m + 3] = d;
			this._indices[m + 4] = d + 2;
			this._indices[m + 5] = d + 3
		}
		a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this._indicesBuffer);
		a.bufferData(a.ELEMENT_ARRAY_BUFFER, this._indices, a.STATIC_DRAW)
	};
	g._setupImageTexture = function(a, b) {
		if (b && (b.naturalWidth || b.getContext || 2 <= b.readyState)) {
			var m =
				b.__easeljs_texture;
			m || (m = b.__easeljs_texture = a.createTexture(), a.bindTexture(a.TEXTURE_2D, m), a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, b), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.NEAREST), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE));
			return m
		}
	};
	g._drawWebGLKids = function(a, b, m) {
		for (var h, d, q = this.snapToPixelEnabled, k, t = 0, v = 0, p = 0, w =
				0, x = this._vertices, y = c.NUM_VERTEX_PROPERTIES_PER_BOX, F = c.MAX_INDEX_SIZE, z = this._maxBoxesPerDraw - 1, r = 0, e = a.length; r < e; r++)
			if (h = a[r], h.isVisible()) {
				k = h.image || h.spriteSheet && h.spriteSheet._images[0];
				var E = k.__easeljs_texture;
				if (E || (E = this._setupImageTexture(b, k))) {
					d = h._props.matrix;
					d = (m ? d.copy(m) : d.identity()).appendTransform(h.x, h.y, h.scaleX, h.scaleY, h.rotation, h.skewX, h.skewY, h.regX, h.regY);
					var H = 0,
						u = 1,
						l = 0,
						C = 1;
					4 === h._spritestage_compatibility ? (v = t = 0, p = k.width, w = k.height) : 2 === h._spritestage_compatibility ?
						(v = h.spriteSheet.getFrame(h.currentFrame), C = v.rect, t = -v.regX, v = -v.regY, p = t + C.width, w = v + C.height, H = C.x / k.width, l = C.y / k.height, u = H + C.width / k.width, C = l + C.height / k.height) : (k = null, 3 === h._spritestage_compatibility && h._updateText());
					!m && 4 >= h._spritestage_compatibility && E !== this._drawTexture && (this._drawToGPU(b), this._drawTexture = E);
					if (null !== k) {
						k = ++this._currentBoxIndex * y;
						var D = d.a,
							Q = d.b,
							X = d.c,
							W = d.d,
							O = d.tx,
							S = d.ty;
						q && h.snapToPixel && (O = O + (0 > O ? -.5 : .5) | 0, S = S + (0 > S ? -.5 : .5) | 0);
						x[k] = t * D + v * X + O;
						x[k + 1] = t * Q + v * W + S;
						x[k + 5] = t * D + w * X + O;
						x[k + 6] = t * Q + w * W + S;
						x[k + 10] = p * D + w * X + O;
						x[k + 11] = p * Q + w * W + S;
						x[k + 15] = p * D + v * X + O;
						x[k + 16] = p * Q + v * W + S;
						x[k + 2] = x[k + 7] = H;
						x[k + 12] = x[k + 17] = u;
						x[k + 3] = x[k + 18] = l;
						x[k + 8] = x[k + 13] = C;
						x[k + 4] = x[k + 9] = x[k + 14] = x[k + 19] = h.alpha;
						this._currentBoxIndex === z && (this._drawToGPU(b), this._drawTexture = E, this._maxBoxesPointsPerDraw < F && (this._setMaxBoxesPoints(b, this._maxBoxesPointsPerDraw + c.MAX_BOXES_POINTS_INCREMENT), z = this._maxBoxesPerDraw - 1))
					}
					h.children && (this._drawWebGLKids(h.children, b, d), z = this._maxBoxesPerDraw - 1)
				}
			} m ||
			this._drawToGPU(b)
	};
	g._drawToGPU = function(a) {
		if (this._drawTexture) {
			var b = this._currentBoxIndex + 1;
			a.activeTexture(a.TEXTURE0);
			a.bindTexture(a.TEXTURE_2D, this._drawTexture);
			a.uniform1i(this._shaderProgram.sampler0uniform, 0);
			a.bindBuffer(a.ARRAY_BUFFER, this._verticesBuffer);
			a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this._indicesBuffer);
			a.uniformMatrix3fv(this._shaderProgram.pMatrixUniform, !1, this._projectionMatrix);
			a.bufferSubData(a.ARRAY_BUFFER, 0, this._vertices);
			a.drawElements(a.TRIANGLES, b * c.INDICES_PER_BOX,
				a.UNSIGNED_SHORT, 0);
			this._currentBoxIndex = -1;
			this._drawTexture = null
		}
	};
	createjs.SpriteStage = createjs.promote(c, "Stage")
})();
var s_iScaleFactor = 1,
	s_iOffsetX, s_iOffsetY, s_oMultiplier;
(function(c) {
	(jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(c) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(c.substr(0,
		4))
})(navigator.userAgent || navigator.vendor || window.opera);
$(window).resize(function() {
	sizeHandler()
});
$(window).blur(function() {
	null !== s_oMain && s_oMain.stopUpdate()
});
$(window).focus(function() {
	null !== s_oMain && s_oMain.startUpdate()
});

function trace(c) {
	console.log(c)
}

function getSize(c) {
	var g = c.toLowerCase(),
		a = window.document,
		b = a.documentElement;
	if (void 0 === window["inner" + c]) c = b["client" + c];
	else if (window["inner" + c] != b["client" + c]) {
		var m = a.createElement("body");
		m.id = "vpw-test-b";
		m.style.cssText = "overflow:scroll";
		var h = a.createElement("div");
		h.id = "vpw-test-d";
		h.style.cssText = "position:absolute;top:-1000px";
		h.innerHTML = "<style>@media(" + g + ":" + b["client" + c] + "px){body#vpw-test-b div#vpw-test-d{" + g + ":7px!important}}</style>";
		m.appendChild(h);
		b.insertBefore(m, a.head);
		c = 7 == h["offset" + c] ? b["client" + c] : window["inner" + c];
		b.removeChild(m)
	} else c = window["inner" + c];
	return c
}
$(window).ready(function() {
	sizeHandler()
});
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
	window.matchMedia("(orientation: portrait)").matches && sizeHandler();
	window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function getIOSWindowHeight() {
	return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
}

function getHeightOfIOSToolbars() {
	var c = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
	return 1 < c ? c : 0
}

function sizeHandler() {
	window.scrollTo(0, 1);
	if ($("#canvas")) {
		var c = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? getIOSWindowHeight() : getSize("Height");
		var g = getSize("Width");
		_checkOrientation(g, c);
		var a = Math.min(c / CANVAS_HEIGHT, g / CANVAS_WIDTH),
			b = CANVAS_WIDTH * a,
			m = CANVAS_HEIGHT * a;
		if (m < c) {
			var h = c - m;
			m += h;
			b += CANVAS_WIDTH / CANVAS_HEIGHT * h
		} else b < g && (h = g - b, b += h, m += CANVAS_HEIGHT / CANVAS_WIDTH * h);
		h = c / 2 - m / 2;
		var d = g / 2 - b / 2,
			q = CANVAS_WIDTH / b;
		if (d * q < -EDGEBOARD_X || h * q < -EDGEBOARD_Y) a = Math.min(c / (CANVAS_HEIGHT - 2 *
			EDGEBOARD_Y), g / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), b = CANVAS_WIDTH * a, m = CANVAS_HEIGHT * a, h = (c - m) / 2, d = (g - b) / 2, q = CANVAS_WIDTH / b;
		s_iOffsetX = -1 * d * q;
		s_iOffsetY = -1 * h * q;
		0 <= h && (s_iOffsetY = 0);
		0 <= d && (s_iOffsetX = 0);
		null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
		null !== s_oSelectCharacter && s_oSelectCharacter.refreshButtonPos(s_iOffsetX, s_iOffsetY);
		null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
		null !== s_oCreditsPanel && s_oCreditsPanel.refreshButtonPos(s_iOffsetX, s_iOffsetY);
		$("#canvas").css("width",
			b + "px");
		$("#canvas").css("height", m + "px");
		$("#canvasbg").css("width", b + "px");
		$("#canvasbg").css("height", m + "px");
		$("#canvas_interface").css("width", b + "px");
		$("#canvas_interface").css("height", m + "px");
		0 > h || (h = (c - m) / 2);
		$("#canvas").css("top", h + "px");
		$("#canvasbg").css("top", h + "px");
		$("#canvas_interface").css("top", h + "px");
		$("#canvas").css("left", d + "px");
		$("#canvasbg").css("left", d + "px");
		$("#canvas_interface").css("left", d + "px");
		s_oMultiplier = a;
		fullscreenHandler()
	}
}

function isIOS() {
	for (var c = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";"); c.length;)
		if (navigator.platform === c.pop()) return s_bIsIphone = !0;
	return s_bIsIphone = !1
}

function playSound(c, g, a) {
	return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[c].play(), s_aSounds[c].volume(g), s_aSounds[c].loop(a), s_aSounds[c]) : null
}

function stopSound(c) {
	!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[c].stop()
}

function setVolume(c, g) {
	!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[c].volume(g)
}

function setMute(c, g) {
	!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[c].mute(g)
}

function createBitmap(c, g, a) {
	var b = new createjs.Bitmap(c),
		m = new createjs.Shape;
	g && a ? m.graphics.beginFill("#fff").drawRect(0, 0, g, a) : m.graphics.beginFill("#ff0").drawRect(0, 0, c.width, c.height);
	b.hitArea = m;
	return b
}

function createSprite(c, g, a, b, m, h) {
	c = null !== g ? new createjs.Sprite(c, g) : new createjs.Sprite(c);
	g = new createjs.Shape;
	g.graphics.beginFill("#000000").drawRect(-a, -b, m, h);
	c.hitArea = g;
	return c
}

function _checkOrientation(c, g) {
	s_bMobile && ENABLE_CHECK_ORIENTATION && (c > g ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
		s_oMain.stopUpdate()))
}

function randomFloatBetween(c, g, a) {
	"undefined" === typeof a && (a = 2);
	return parseFloat(Math.min(c + Math.random() * (g - c), g).toFixed(a))
}

function rotateVector2D(c, g) {
	var a = g.getX() * Math.cos(c) + g.getY() * Math.sin(c),
		b = g.getX() * -Math.sin(c) + g.getY() * Math.cos(c);
	g.set(a, b)
}

function tweenVectorsOnX(c, g, a) {
	return c + a * (g - c)
}

function shuffle(c) {
	for (var g = c.length, a, b; 0 !== g;) b = Math.floor(Math.random() * g), --g, a = c[g], c[g] = c[b], c[b] = a;
	return c
}

function bubbleSort(c) {
	do {
		var g = !1;
		for (var a = 0; a < c.length - 1; a++) c[a] > c[a + 1] && (g = c[a], c[a] = c[a + 1], c[a + 1] = g, g = !0)
	} while (g)
}

function compare(c, g) {
	return c.index > g.index ? -1 : c.index < g.index ? 1 : 0
}

function easeLinear(c, g, a, b) {
	return a * c / b + g
}

function easeInQuad(c, g, a, b) {
	return a * (c /= b) * c + g
}

function easeInSine(c, g, a, b) {
	return -a * Math.cos(c / b * (Math.PI / 2)) + a + g
}

function easeInCubic(c, g, a, b) {
	return a * (c /= b) * c * c + g
}

function getTrajectoryPoint(c, g) {
	var a = new createjs.Point,
		b = (1 - c) * (1 - c),
		m = c * c;
	a.x = b * g.start.x + 2 * (1 - c) * c * g.traj.x + m * g.end.x;
	a.y = b * g.start.y + 2 * (1 - c) * c * g.traj.y + m * g.end.y;
	return a
}

function formatTime(c) {
	c /= 1E3;
	var g = Math.floor(c / 60);
	c = Math.floor(c - 60 * g);
	var a = "";
	a = 10 > g ? a + ("0" + g + ":") : a + (g + ":");
	return 10 > c ? a + ("0" + c) : a + c
}

function degreesToRadians(c) {
	return c * Math.PI / 180
}

function checkRectCollision(c, g) {
	var a = getBounds(c, .9);
	var b = getBounds(g, .98);
	return calculateIntersection(a, b)
}

function calculateIntersection(c, g) {
	var a, b, m, h;
	var d = c.x + (a = c.width / 2);
	var q = c.y + (b = c.height / 2);
	var k = g.x + (m = g.width / 2);
	var t = g.y + (h = g.height / 2);
	d = Math.abs(d - k) - (a + m);
	q = Math.abs(q - t) - (b + h);
	return 0 > d && 0 > q ? (d = Math.min(Math.min(c.width, g.width), -d), q = Math.min(Math.min(c.height, g.height), -q), {
		x: Math.max(c.x, g.x),
		y: Math.max(c.y, g.y),
		width: d,
		height: q,
		rect1: c,
		rect2: g
	}) : null
}

function getBounds(c, g) {
	var a = {
		x: Infinity,
		y: Infinity,
		width: 0,
		height: 0
	};
	if (c instanceof createjs.Container) {
		a.x2 = -Infinity;
		a.y2 = -Infinity;
		var b = c.children,
			m = b.length,
			h;
		for (h = 0; h < m; h++) {
			var d = getBounds(b[h], 1);
			d.x < a.x && (a.x = d.x);
			d.y < a.y && (a.y = d.y);
			d.x + d.width > a.x2 && (a.x2 = d.x + d.width);
			d.y + d.height > a.y2 && (a.y2 = d.y + d.height)
		}
		Infinity == a.x && (a.x = 0);
		Infinity == a.y && (a.y = 0);
		Infinity == a.x2 && (a.x2 = 0);
		Infinity == a.y2 && (a.y2 = 0);
		a.width = a.x2 - a.x;
		a.height = a.y2 - a.y;
		delete a.x2;
		delete a.y2
	} else {
		if (c instanceof createjs.Bitmap) {
			m =
				c.sourceRect || c.image;
			h = m.width * g;
			var q = m.height * g
		} else if (c instanceof createjs.Sprite)
			if (c.spriteSheet._frames && c.spriteSheet._frames[c.currentFrame] && c.spriteSheet._frames[c.currentFrame].image) {
				m = c.spriteSheet.getFrame(c.currentFrame);
				h = m.rect.width;
				q = m.rect.height;
				b = m.regX;
				var k = m.regY
			} else a.x = c.x || 0, a.y = c.y || 0;
		else a.x = c.x || 0, a.y = c.y || 0;
		b = b || 0;
		h = h || 0;
		k = k || 0;
		q = q || 0;
		a.regX = b;
		a.regY = k;
		m = c.localToGlobal(0 - b, 0 - k);
		d = c.localToGlobal(h - b, q - k);
		h = c.localToGlobal(h - b, 0 - k);
		b = c.localToGlobal(0 - b, q - k);
		a.x =
			Math.min(Math.min(Math.min(m.x, d.x), h.x), b.x);
		a.y = Math.min(Math.min(Math.min(m.y, d.y), h.y), b.y);
		a.width = Math.max(Math.max(Math.max(m.x, d.x), h.x), b.x) - a.x;
		a.height = Math.max(Math.max(Math.max(m.y, d.y), h.y), b.y) - a.y
	}
	return a
}

function NoClickDelay(c) {
	this.element = c;
	window.Touch && this.element.addEventListener("touchstart", this, !1)
}

function shuffle(c) {
	for (var g = c.length, a, b; 0 < g;) b = Math.floor(Math.random() * g), g--, a = c[g], c[g] = c[b], c[b] = a;
	return c
}
NoClickDelay.prototype = {
	handleEvent: function(c) {
		switch (c.type) {
			case "touchstart":
				this.onTouchStart(c);
				break;
			case "touchmove":
				this.onTouchMove(c);
				break;
			case "touchend":
				this.onTouchEnd(c)
		}
	},
	onTouchStart: function(c) {
		c.preventDefault();
		this.moved = !1;
		this.element.addEventListener("touchmove", this, !1);
		this.element.addEventListener("touchend", this, !1)
	},
	onTouchMove: function(c) {
		this.moved = !0
	},
	onTouchEnd: function(c) {
		this.element.removeEventListener("touchmove", this, !1);
		this.element.removeEventListener("touchend",
			this, !1);
		if (!this.moved) {
			c = document.elementFromPoint(c.changedTouches[0].clientX, c.changedTouches[0].clientY);
			3 == c.nodeType && (c = c.parentNode);
			var g = document.createEvent("MouseEvents");
			g.initEvent("click", !0, !0);
			c.dispatchEvent(g)
		}
	}
};
(function() {
	function c(a) {
		var b = {
			focus: "visible",
			focusin: "visible",
			pageshow: "visible",
			blur: "hidden",
			focusout: "hidden",
			pagehide: "hidden"
		};
		a = a || window.event;
		a.type in b ? document.body.className = b[a.type] : (document.body.className = this[g] ? "hidden" : "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
	}
	var g = "hidden";
	g in document ? document.addEventListener("visibilitychange", c) : (g = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", c) : (g = "webkitHidden") in
	document ? document.addEventListener("webkitvisibilitychange", c) : (g = "msHidden") in document ? document.addEventListener("msvisibilitychange", c) : "onfocusin" in document ? document.onfocusin = document.onfocusout = c : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = c
})();

function ctlArcadeResume() {
	null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
	null !== s_oMain && s_oMain.stopUpdate()
}

function getParamValue(c) {
	for (var g = window.location.search.substring(1).split("&"), a = 0; a < g.length; a++) {
		var b = g[a].split("=");
		if (b[0] == c) return b[1]
	}
}

function fullscreenHandler() {
	ENABLE_FULLSCREEN && !1 !== screenfull.enabled && (s_bFullscreen = screen.height < window.innerHeight + 3 && screen.height > window.innerHeight - 3 ? !0 : !1, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut(), null !== s_oSelectCharacter && s_oSelectCharacter.resetFullscreenBut())
}
if (screenfull.enabled) screenfull.on("change", function() {
	s_bFullscreen = screenfull.isFullscreen;
	null !== s_oInterface && s_oInterface.resetFullscreenBut();
	null !== s_oMenu && s_oMenu.resetFullscreenBut();
	null !== s_oSelectCharacter && s_oSelectCharacter.resetFullscreenBut()
});
var s_szGameID = "b0fc5ae335324d50beb9225d0c7e7664";
window.GD_OPTIONS = {
	gameId: s_szGameID,
	onEvent: function(c) {
		switch (c.name) {
			case "SDK_GAME_START":
				s_bAdShown = !1;
				s_oMain && s_oMain.startUpdate();
				break;
			case "SDK_GAME_PAUSE":
				s_bAdShown = !0;
				s_oMain && s_oMain.stopUpdate();
				break;
			case "SDK_READY":
				$("#div_display_id").css("display", "block"), "undefined" !== typeof gdsdk && "undefined" !== gdsdk.showAd && gdsdk.showAd(gdsdk.AdType.Display, {
					containerId: "div_display_id"
				}).then(function() {
					return console.info("showAd(gdsdk.AdType.Display) resolved.")
				})["catch"](function(g) {
					return console.info(g)
				})
		}
	}
};
(function(c, g, a) {
	var b = c.getElementsByTagName(g)[0];
	c.getElementById(a) || (c = c.createElement(g), c.id = a, c.src = "main.min.js", b.parentNode.insertBefore(c, b))
})(document, "script", "gamedistribution-jssdk");
var s_bAdShown = !1;

function CSpriteLibrary() {
	var c = {},
		g, a, b, m, h, d;
	this.init = function(q, k, t) {
		g = {};
		b = a = 0;
		m = q;
		h = k;
		d = t
	};
	this.addSprite = function(q, k) {
		if (!c.hasOwnProperty(q)) {
			var t = new Image;
			c[q] = g[q] = {
				szPath: k,
				oSprite: t,
				bLoaded: !1
			};
			a++
		}
	};
	this.getSprite = function(q) {
		return c.hasOwnProperty(q) ? c[q].oSprite : null
	};
	this._onSpritesLoaded = function() {
		a = 0;
		h.call(d)
	};
	this._onSpriteLoaded = function() {
		m.call(d);
		++b === a && this._onSpritesLoaded()
	};
	this.loadSprites = function() {
		for (var q in g) g[q].oSprite.oSpriteLibrary = this, g[q].oSprite.szKey =
			q, g[q].oSprite.onload = function() {
				this.oSpriteLibrary.setLoaded(this.szKey);
				this.oSpriteLibrary._onSpriteLoaded(this.szKey)
			}, g[q].oSprite.onerror = function(k) {
				var t = k.currentTarget;
				setTimeout(function() {
					g[t.szKey].oSprite.src = g[t.szKey].szPath
				}, 500)
			}, g[q].oSprite.src = g[q].szPath
	};
	this.setLoaded = function(q) {
		c[q].bLoaded = !0
	};
	this.isLoaded = function(q) {
		return c[q].bLoaded
	};
	this.getNumSprites = function() {
		return a
	}
}
var CANVAS_WIDTH = 690,
	CANVAS_HEIGHT = 960,
	EDGEBOARD_X = 75,
	EDGEBOARD_Y = 75,
	FPS = 30,
	DISABLE_SOUND_MOBILE = !1,
	STATE_LOADING = 0,
	STATE_MENU = 1,
	STATE_HELP = 1,
	STATE_GAME = 3,
	ON_MOUSE_DOWN = 0,
	ON_MOUSE_UP = 1,
	ON_MOUSE_OVER = 2,
	ON_MOUSE_OUT = 3,
	ON_DRAG_START = 4,
	ON_DRAG_END = 5,
	IDLE_DELAY = 1,
	ENEMY_ATTACK_OCCURR, ENEMY_MIN_ACTION_TIME, ENEMY_MAX_ACTION_TIME, ENEMY_MIN_GUARD_TIME, ENEMY_MAX_GUARD_TIME, ENEMY_HP, PLAYER_HP, PLAYER_STAMINA, STAMINA_PUNCH_LIMIT, ENEMY_KO = 30,
	PLAYER_KO = 30,
	PLAYER_MIN_HP_KO = 15,
	STAMINA_REGEN_TIME = 120,
	KO_REGEN_TIME =
	2E3,
	ENEMY_MIN_HP_KO = 15,
	STAMINA_REGEN_SPEED, IDLE = "idle",
	GUARD = "guard",
	JAB = "jab",
	HOOK_R = "hook_r",
	HOOK_L = "hook_l",
	UPPERCUT = "uppercut",
	GETPUNCHED = "get_punched",
	KO = "ko",
	s_aBw_Frame = [];
s_aBw_Frame[IDLE] = 9;
s_aBw_Frame[GUARD] = 10;
s_aBw_Frame[JAB] = 10;
s_aBw_Frame[HOOK_R] = 9;
s_aBw_Frame[HOOK_L] = 9;
s_aBw_Frame[UPPERCUT] = 10;
s_aBw_Frame[GETPUNCHED] = 5;
s_aBw_Frame[KO] = 13;
var s_aBb_En_Frame = [];
s_aBb_En_Frame[IDLE] = 9;
s_aBb_En_Frame[GUARD] = 10;
s_aBb_En_Frame[JAB] = 10;
s_aBb_En_Frame[HOOK_R] = 9;
s_aBb_En_Frame[HOOK_L] = 10;
s_aBb_En_Frame[UPPERCUT] = 11;
s_aBb_En_Frame[GETPUNCHED] = 5;
s_aBb_En_Frame[KO] = 24;
var s_aBb_Frame = [];
s_aBb_Frame[IDLE] = 9;
s_aBb_Frame[GUARD] = 10;
s_aBb_Frame[JAB] = 10;
s_aBb_Frame[HOOK_R] = 9;
s_aBb_Frame[HOOK_L] = 9;
s_aBb_Frame[UPPERCUT] = 10;
s_aBb_Frame[GETPUNCHED] = 5;
s_aBb_Frame[KO] = 13;
var s_aBw_En_Frame = [];
s_aBw_En_Frame[IDLE] = 9;
s_aBw_En_Frame[GUARD] = 10;
s_aBw_En_Frame[JAB] = 10;
s_aBw_En_Frame[HOOK_R] = 9;
s_aBw_En_Frame[HOOK_L] = 10;
s_aBw_En_Frame[UPPERCUT] = 11;
s_aBw_En_Frame[GETPUNCHED] = 5;
s_aBw_En_Frame[KO] = 24;
var s_aSt_Decrese = [];
s_aSt_Decrese[JAB] = 15;
s_aSt_Decrese[HOOK_R] = 17;
s_aSt_Decrese[HOOK_L] = 20;
s_aSt_Decrese[UPPERCUT] = 30;
var s_aFrameHit = [];
s_aFrameHit[JAB] = 4;
s_aFrameHit[HOOK_R] = 4;
s_aFrameHit[HOOK_L] = 5;
s_aFrameHit[UPPERCUT] = 6;
var s_aDamage = [],
	ANIMATION_OFFSET_ENEMY = [];
ANIMATION_OFFSET_ENEMY[IDLE] = {
	xb: 0,
	yb: 0,
	xw: 0,
	yw: 0
};
ANIMATION_OFFSET_ENEMY[GUARD] = {
	xb: 0,
	yb: 0,
	xw: 0,
	yw: 0
};
ANIMATION_OFFSET_ENEMY[JAB] = {
	xb: 5,
	yb: 0,
	xw: 0,
	yw: 0
};
ANIMATION_OFFSET_ENEMY[HOOK_R] = {
	xb: -20,
	yb: 0,
	xw: 0,
	yw: 0
};
ANIMATION_OFFSET_ENEMY[HOOK_L] = {
	xb: -20,
	yb: 0,
	xw: 0,
	yw: 0
};
ANIMATION_OFFSET_ENEMY[UPPERCUT] = {
	xb: -30,
	yb: 0,
	xw: 0,
	yw: 0
};
ANIMATION_OFFSET_ENEMY[GETPUNCHED] = {
	xb: 20,
	yb: 0,
	xw: 0,
	yw: 0
};
var PARTICLE_OFFSET_PLAYER = [];
PARTICLE_OFFSET_PLAYER[JAB] = {
	xp: -50,
	yp: -70
};
PARTICLE_OFFSET_PLAYER[HOOK_R] = {
	xp: -5,
	yp: -70
};
PARTICLE_OFFSET_PLAYER[HOOK_L] = {
	xp: -35,
	yp: -70
};
PARTICLE_OFFSET_PLAYER[UPPERCUT] = {
	xp: -15,
	yp: -70
};
var ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION;

function CPreloader() {
	var c, g;
	this._init = function() {
		s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
		s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
		s_oSpriteLibrary.loadSprites();
		g = new CContainer(0, 0)
	};
	this.unload = function() {
		g.removeAllChildren();
		s_oStage.removeChild(c)
	};
	this.hide = function() {
		var a = this;
		setTimeout(function() {
			a.unload();
			s_oMain.gotoMenu()
		}, 1E3)
	};
	this._onImagesLoaded = function() {};
	this._onAllImagesLoaded = function() {
		this.attachSprites();
		s_oMain.preloaderReady()
	};
	this.attachSprites = function() {
		var a = s_oSpriteLibrary.getSprite("bg_menu");
		a = createBitmap(a);
		a = new CChild(0, 0, a, g);
		g.addChild(a);
		c = new createjs.BitmapText("0%", s_oSpriteSheetBoxing);
		c.regX = c.getBounds().width / 2;
		c.regY = c.getBounds().height / 2;
		c.x = CANVAS_WIDTH / 2;
		c.y = CANVAS_HEIGHT - 150;
		s_oStage.addChild(c)
	};
	this.refreshLoader = function(a) {
		c.text = a + "%";
		100 === a && s_oMain._onRemovePreloader()
	};
	this._init()
}

function CVersusPanel() {
	var c, g, a, b, m, h, d;
	this._init = function() {
		c = createBitmap(s_oSpriteLibrary.getSprite("bg_pselection"));
		s_oStage.addChild(c);
		0 === s_iPlayerSelected ? (b = new createjs.BitmapText(TEXT_BOXERW, s_oSpriteSheetBoxing), b.regX = b.getBounds().width / 2, b.regY = b.getBounds().height / 2, b.x = 270, b.y = 350, m = new createjs.BitmapText(TEXT_BOXERB, s_oSpriteSheetBoxing), m.regX = m.getBounds().width / 2, m.regY = m.getBounds().height / 2, m.x = 460, m.y = 750, g = createBitmap(s_oSpriteLibrary.getSprite("bw_versus")), a = createBitmap(s_oSpriteLibrary.getSprite("bb_versus"))) :
			(b = new createjs.BitmapText(TEXT_BOXERB, s_oSpriteSheetBoxing), b.regX = b.getBounds().width / 2, b.regY = b.getBounds().height / 2, b.x = 270, b.y = 350, m = new createjs.BitmapText(TEXT_BOXERW, s_oSpriteSheetBoxing), m.regX = m.getBounds().width / 2, m.regY = m.getBounds().height / 2, m.x = 460, m.y = 750, g = createBitmap(s_oSpriteLibrary.getSprite("bb_versus")), a = createBitmap(s_oSpriteLibrary.getSprite("bw_versus")));
		b.visible = !1;
		m.visible = !1;
		g.x = 0;
		g.y = 250;
		g.regX = g.getBounds().width / 2;
		g.regY = g.getBounds().height / 2;
		a.x = CANVAS_WIDTH;
		a.y =
			650;
		a.regX = a.getBounds().width / 2;
		a.regY = a.getBounds().height / 2;
		d = new createjs.BitmapText("Loading...", s_oSpriteSheetBoxing);
		d.regX = d.getBounds().width / 2;
		d.regY = d.getBounds().height / 2;
		d.x = CANVAS_WIDTH / 2;
		d.y = 850;
		s_oStage.addChild(g);
		s_oStage.addChild(a);
		s_oStage.addChild(b);
		s_oStage.addChild(m);
		s_oStage.addChild(d);
		createjs.Tween.get(g).to({
			x: 250
		}, 700);
		createjs.Tween.get(a).to({
			x: 440
		}, 700);
		h = createBitmap(s_oSpriteLibrary.getSprite("vs"));
		h.regX = h.getBounds().width / 2;
		h.regY = h.getBounds().height / 2;
		h.x =
			CANVAS_WIDTH / 2;
		h.y = CANVAS_HEIGHT / 2;
		s_oStage.addChild(h);
		h.scaleX = h.scaleY = 2.5;
		h.alpha = .6;
		h.visible = !0;
		createjs.Tween.get(h).to({
			scaleX: 1,
			scaleY: 1,
			alpha: 1
		}, 400, createjs.Ease.cubicIn).call(function() {
			b.scaleX = b.scaleY = 2;
			b.alpha = .8;
			b.visible = !0;
			createjs.Tween.get(b).to({
				scaleX: 1,
				scaleY: 1,
				alpha: 1
			}, 400, createjs.Ease.elasticOut).call(function() {
				m.scaleX = m.scaleY = 2;
				m.alpha = .8;
				m.visible = !0;
				createjs.Tween.get(m).to({
					scaleX: 1,
					scaleY: 1,
					alpha: 1
				}, 400, createjs.Ease.elasticOut).call(function() {})
			})
		})
	};
	this.setIndex =
		function(q) {
			s_oStage.setChildIndex(c, q);
			s_oStage.setChildIndex(g, q);
			s_oStage.setChildIndex(a, q);
			s_oStage.setChildIndex(b, q);
			s_oStage.setChildIndex(m, q);
			s_oStage.setChildIndex(h, q);
			s_oStage.setChildIndex(d, q)
		};
	this.unload = function() {
		s_oStage.removeChild(c);
		s_oStage.removeChild(g);
		s_oStage.removeChild(a);
		s_oStage.removeChild(b);
		s_oStage.removeChild(m);
		s_oStage.removeChild(h);
		s_oStage.removeChild(d)
	};
	this._init()
}

function CMain(c, g) {
	var a, b = 0,
		m = 0,
		h = STATE_LOADING,
		d, q;
	this.initContainer = function() {
		s_oCanvas = document.getElementById("canvas");
		location.search.match(/c/i) ? (s_oStage = new createjs.Stage("canvas"), s_oStageBg = new createjs.Stage("canvasbg"), s_oStageInterface = new createjs.Stage("canvas_interface")) : (s_oStage = new createjs.SpriteStage("canvas", !1, !1), s_oStageBg = new createjs.SpriteStage("canvasbg", !1, !1), s_oStageInterface = new createjs.SpriteStage("canvas_interface", !1, !1));
		createjs.Touch.enable(s_oStage);
		s_bMobile = jQuery.browser.mobile;
		!1 === s_bMobile && (s_oStage.enableMouseOver(20), $("body").on("contextmenu", "#canvas", function(t) {
			return !1
		}));
		s_iPrevTime = (new Date).getTime();
		createjs.Ticker.addEventListener("tick", this._update);
		createjs.Ticker.framerate = FPS;
		navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
		s_oSpriteLibrary = new CSpriteLibrary;
		d = new CPreloader;
		new CBitmapFont
	};
	this.preloaderReady = function() {
		this._loadImages();
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
		a = !0
	};
	this.soundLoaded = function(t) {
		b++;
		d.refreshLoader(Math.floor(b / m * 100))
	};
	this._initSounds = function() {
		var t = [];
		t.push({
			path: "./sounds/",
			filename: "start_match",
			loop: !1,
			volume: 1,
			ingamename: "start_match"
		});
		t.push({
			path: "./sounds/",
			filename: "crowd_desperation",
			loop: !1,
			volume: 1,
			ingamename: "crowd_desperation"
		});
		t.push({
			path: "./sounds/",
			filename: "crowd_exultance",
			loop: !1,
			volume: 1,
			ingamename: "crowd_exultance"
		});
		t.push({
			path: "./sounds/",
			filename: "crowd_idle",
			loop: !1,
			volume: 1,
			ingamename: "crowd_idle"
		});
		t.push({
			path: "./sounds/",
			filename: "ko",
			loop: !1,
			volume: 1,
			ingamename: "ko"
		});
		t.push({
			path: "./sounds/",
			filename: "falling",
			loop: !1,
			volume: 1,
			ingamename: "falling"
		});
		t.push({
			path: "./sounds/",
			filename: "punch_left",
			loop: !1,
			volume: 1,
			ingamename: "punch_left"
		});
		t.push({
			path: "./sounds/",
			filename: "punch_right",
			loop: !1,
			volume: 1,
			ingamename: "punch_right"
		});
		t.push({
			path: "./sounds/",
			filename: "uppercut",
			loop: !1,
			volume: 1,
			ingamename: "uppercut"
		});
		t.push({
			path: "./sounds/",
			filename: "1",
			loop: !1,
			volume: 1,
			ingamename: "1"
		});
		t.push({
			path: "./sounds/",
			filename: "2",
			loop: !1,
			volume: 1,
			ingamename: "2"
		});
		t.push({
			path: "./sounds/",
			filename: "3",
			loop: !1,
			volume: 1,
			ingamename: "3"
		});
		t.push({
			path: "./sounds/",
			filename: "4",
			loop: !1,
			volume: 1,
			ingamename: "4"
		});
		t.push({
			path: "./sounds/",
			filename: "5",
			loop: !1,
			volume: 1,
			ingamename: "5"
		});
		t.push({
			path: "./sounds/",
			filename: "6",
			loop: !1,
			volume: 1,
			ingamename: "6"
		});
		t.push({
			path: "./sounds/",
			filename: "7",
			loop: !1,
			volume: 1,
			ingamename: "7"
		});
		t.push({
			path: "./sounds/",
			filename: "8",
			loop: !1,
			volume: 1,
			ingamename: "8"
		});
		t.push({
			path: "./sounds/",
			filename: "9",
			loop: !1,
			volume: 1,
			ingamename: "9"
		});
		t.push({
			path: "./sounds/",
			filename: "soundtrack",
			loop: !0,
			volume: 1,
			ingamename: "soundtrack"
		});
		m += t.length;
		s_aSounds = [];
		for (var v = 0; v < t.length; v++) s_aSounds[t[v].ingamename] = new Howl({
			src: [t[v].path + t[v].filename + ".mp3"],
			autoplay: !1,
			preload: !0,
			loop: t[v].loop,
			volume: t[v].volume,
			onload: s_oMain.soundLoaded
		})
	};
	this._loadImages = function() {
		s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
		s_oSpriteLibrary.addSprite("button", "./sprites/button.png");
		s_oSpriteLibrary.addSprite("but_play",
			"./sprites/but_play.png");
		s_oSpriteLibrary.addSprite("but_defence", "./sprites/but_defence.png");
		s_oSpriteLibrary.addSprite("energy_bar", "./sprites/energy_bar.png");
		s_oSpriteLibrary.addSprite("fill_energy", "./sprites/fill_energy.png");
		s_oSpriteLibrary.addSprite("mask_energy", "./sprites/mask_energy.png");
		s_oSpriteLibrary.addSprite("fill_stamina", "./sprites/fill_stamina.png");
		s_oSpriteLibrary.addSprite("energy_avatar_white", "./sprites/energy_avatar_white.png");
		s_oSpriteLibrary.addSprite("energy_avatar_black",
			"./sprites/energy_avatar_black.png");
		s_oSpriteLibrary.addSprite("icon_energy", "./sprites/icon_energy.png");
		s_oSpriteLibrary.addSprite("icon_stamina", "./sprites/icon_stamina.png");
		s_oSpriteLibrary.addSprite("countdown_panel_white", "./sprites/countdown_panel_white.png");
		s_oSpriteLibrary.addSprite("countdown_panel_black", "./sprites/countdown_panel_black.png");
		s_oSpriteLibrary.addSprite("countdown_panel_continue_white", "./sprites/countdown_panel_continue_white.png");
		s_oSpriteLibrary.addSprite("countdown_panel_continue_black",
			"./sprites/countdown_panel_continue_black.png");
		s_oSpriteLibrary.addSprite("logo", "./sprites/logo.png");
		s_oSpriteLibrary.addSprite("logo_text", "./sprites/choose_player_text.png");
		s_oSpriteLibrary.addSprite("bw_selection", "./sprites/bw_selection.png");
		s_oSpriteLibrary.addSprite("bb_selection", "./sprites/bb_selection.png");
		s_oSpriteLibrary.addSprite("bw_versus", "./sprites/bw_versus.png");
		s_oSpriteLibrary.addSprite("bb_versus", "./sprites/bb_versus.png");
		s_oSpriteLibrary.addSprite("ko_white", "./sprites/ko_player.png");
		s_oSpriteLibrary.addSprite("ko_black", "./sprites/ko_enemy.png");
		s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
		s_oSpriteLibrary.addSprite("bg_pselection", "./sprites/bg_mod_menu.jpg");
		s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
		s_oSpriteLibrary.addSprite("fade", "./sprites/fade.png");
		s_oSpriteLibrary.addSprite("vs", "./sprites/vs.png");
		s_oSpriteLibrary.addSprite("but_exit_big", "./sprites/but_exit_big.png");
		s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
		s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
		s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
		s_oSpriteLibrary.addSprite("audio_icon2", "./sprites/audio_icon2.png");
		s_oSpriteLibrary.addSprite("bg_help_1", "./sprites/bg_help_1.png");
		s_oSpriteLibrary.addSprite("bg_help_2", "./sprites/bg_help_2.png");
		s_oSpriteLibrary.addSprite("but_fight", "./sprites/but_fight.png");
		s_oSpriteLibrary.addSprite("but_skip", "./sprites/but_skip.png");
		s_oSpriteLibrary.addSprite("but_credits",
			"./sprites/but_credits.png");
		s_oSpriteLibrary.addSprite("logo_credits", "./sprites/logo_credits.png");
		s_oSpriteLibrary.addSprite("hit_area", "./sprites/hit_area.png");
		s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
		for (var t = 0; 5 > t; t++) s_oSpriteLibrary.addSprite("particle_" + t, "./sprites/particle/particle_" + t + ".png");
		m += s_oSpriteLibrary.getNumSprites();
		s_oSpriteLibrary.loadSprites()
	};
	this._onImagesLoaded = function() {
		b++;
		d.refreshLoader(Math.floor(b / m * 100))
	};
	this._onAllImagesLoaded =
		function() {};
	this._onRemovePreloader = function() {
		try {
			checkMoreGames(s_szGameID, "bottom-left", ["sport", "multiplayer"], [], -1, "violet")
		} catch (t) {}
		d.unload();
		s_oSoundTrack = playSound("soundtrack", 1, !0);
		this.gotoMenu()
	};
	this.gotoMenu = function() {
		try {
			showMoreGames()
		} catch (t) {}
		new CMenu;
		h = STATE_MENU
	};
	this.gotoPSelection = function() {
		new CSelectCharacter
	};
	this.gotoGame = function() {
		q = new CGame(k);
		h = STATE_GAME
	};
	this.gotoHelp = function() {
		new CHelp;
		h = STATE_HELP
	};
	this.stopUpdate = function() {
		a = !1;
		createjs.Ticker.paused = !0;
		$("#block_game").css("display", "block");
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || Howler.mute(!0)
	};
	this.startUpdate = function() {
		s_iPrevTime = (new Date).getTime();
		a = !0;
		createjs.Ticker.paused = !1;
		$("#block_game").css("display", "none");
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || !s_bAudioActive || s_bAdShown || Howler.mute(!1)
	};
	this.playAllSounds = function(t) {
		Howler.mute(!t)
	};
	this._update = function(t) {
		if (!1 !== a) {
			var v = (new Date).getTime();
			s_iTimeElaps = v - s_iPrevTime;
			s_iCntTime += s_iTimeElaps;
			s_iCntFps++;
			s_iPrevTime =
				v;
			1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
			h === STATE_GAME && q.update();
			s_oStage.update(t)
		}
	};
	s_oMain = this;
	var k = c;
	ENABLE_FULLSCREEN = c.fullscreen;
	ENABLE_CHECK_ORIENTATION = c.check_orientation;
	this.initContainer()
}
var s_bMobile, s_bLoadedPlayerWhite = !1,
	s_bLoadedPlayerBlack = !1,
	s_bAudioActive = !0,
	s_iPlayerSelected = 0,
	s_iCntTime = 0,
	s_iTimeElaps = 0,
	s_iPrevTime = 0,
	s_iCntFps = 0,
	s_iCurFps = 0,
	s_oDrawLayer, s_oStage, s_oStageBg, s_oStageInterface, s_oMain = null,
	s_oSpriteLibrary, s_oCanvas, s_oSoundTrack = null,
	s_bFullscreen = !1;

function CSelectButton(c, g, a, b) {
	var m, h, d, q;
	this._init = function(k, t, v, p) {
		h = [];
		d = [];
		var w = new createjs.SpriteSheet({
			images: [v],
			frames: {
				width: v.width / 2,
				height: v.height,
				regX: v.width / 2 / 2,
				regY: v.height / 2
			},
			animations: {
				state_true: [0],
				state_false: [1]
			}
		});
		m = p;
		q = createSprite(w, "state_" + m, v.width / 2 / 2, v.height / 2, v.width / 2, v.height);
		q.x = k;
		q.y = t;
		q.stop();
		s_oStage.addChild(q);
		this._initListener()
	};
	this.unload = function() {
		q.off("mousedown", this.buttonDown);
		q.off("pressup", this.buttonRelease);
		s_oStage.removeChild(q)
	};
	this._initListener = function() {
		q.on("mousedown", this.buttonDown);
		q.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function(k, t, v) {
		h[k] = t;
		d[k] = v
	};
	this.setActive = function(k) {
		m = k;
		q.gotoAndStop("state_" + m)
	};
	this.buttonRelease = function() {
		q.scaleX = 1;
		q.scaleY = 1;
		m = !m;
		q.gotoAndStop("state_" + m);
		h[ON_MOUSE_UP] && h[ON_MOUSE_UP].call(d[ON_MOUSE_UP], m)
	};
	this.buttonDown = function() {
		q.gotoAndStop("state_false");
		h[ON_MOUSE_DOWN] && h[ON_MOUSE_DOWN].call(d[ON_MOUSE_DOWN])
	};
	this.setPosition = function(k, t) {
		q.x = k;
		q.y = t
	};
	this._init(c, g, a, b)
}

function CToggle(c, g, a, b, m) {
	var h, d, q, k, t, v;
	this._init = function(w, x, y, F) {
		d = [];
		q = [];
		var z = new createjs.SpriteSheet({
			images: [y],
			frames: {
				width: y.width / 2,
				height: y.height,
				regX: y.width / 2 / 2,
				regY: y.height / 2
			},
			animations: {
				state_true: [0],
				state_false: [1]
			}
		});
		h = F;
		v = createSprite(z, "state_" + h, y.width / 2 / 2, y.height / 2, y.width / 2, y.height);
		v.x = w;
		v.y = x;
		v.stop();
		s_bMobile || (v.cursor = "pointer");
		p.addChild(v);
		this._initListener()
	};
	this.unload = function() {
		v.off("mousedown", k);
		v.off("pressup", t);
		p.removeChild(v)
	};
	this._initListener =
		function() {
			k = v.on("mousedown", this.buttonDown);
			t = v.on("pressup", this.buttonRelease)
		};
	this.addEventListener = function(w, x, y) {
		d[w] = x;
		q[w] = y
	};
	this.setActive = function(w) {
		h = w;
		v.gotoAndStop("state_" + h)
	};
	this.buttonRelease = function() {
		v.scaleX = 1;
		v.scaleY = 1;
		h = !h;
		v.gotoAndStop("state_" + h);
		d[ON_MOUSE_UP] && d[ON_MOUSE_UP].call(q[ON_MOUSE_UP], h)
	};
	this.buttonDown = function() {
		v.scaleX = .9;
		v.scaleY = .9;
		d[ON_MOUSE_DOWN] && d[ON_MOUSE_DOWN].call(q[ON_MOUSE_DOWN])
	};
	this.setPosition = function(w, x) {
		v.x = w;
		v.y = x
	};
	var p = m;
	this._init(c,
		g, a, b)
}

function CGfxButton(c, g, a, b) {
	var m, h, d, q, k;
	this._init = function(v, p, w) {
		m = [];
		h = [];
		k = createBitmap(w);
		k.x = v;
		k.y = p;
		k.regX = w.width / 2;
		k.regY = w.height / 2;
		s_bMobile || (k.cursor = "pointer");
		t.addChild(k);
		this._initListener()
	};
	this.unload = function() {
		k.off("mousedown", d);
		k.off("pressup", q);
		t.removeChild(k)
	};
	this.setVisible = function(v) {
		k.visible = v
	};
	this.getVisible = function(v) {
		return k.visible
	};
	this._initListener = function() {
		d = k.on("mousedown", this.buttonDown);
		q = k.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function(v,
		p, w) {
		m[v] = p;
		h[v] = w
	};
	this.buttonRelease = function() {
		k.scaleX = 0 <= k.scaleX ? 1 : -1;
		k.scaleY = 1;
		m[ON_MOUSE_UP] && m[ON_MOUSE_UP].call(h[ON_MOUSE_UP]);
		t.update()
	};
	this.buttonDown = function() {
		k.scaleX = 0 <= k.scaleX ? .9 : -.9;
		k.scaleY = .9;
		m[ON_MOUSE_DOWN] && m[ON_MOUSE_DOWN].call(h[ON_MOUSE_DOWN]);
		b.update()
	};
	this.setPosition = function(v, p) {
		k.x = v;
		k.y = p
	};
	this.setX = function(v) {
		k.x = v
	};
	this.setY = function(v) {
		k.y = v
	};
	this.setScaleX = function(v) {
		k.scaleX = v
	};
	this.setScaleY = function(v) {
		k.scaleY = v
	};
	this.getButtonImage = function() {
		return k
	};
	this.getX = function() {
		return k.x
	};
	this.getY = function() {
		return k.y
	};
	var t = b;
	this._init(c, g, a);
	return this
}

function CMenu() {
	var c, g, a, b, m, h, d, q, k, t, v, p, w, x, y = null,
		F = null;
	this._init = function() {
		768 <= getSize("Width") && $("#div_display_id").css("display", "block");
		d = CANVAS_WIDTH / 2;
		q = CANVAS_HEIGHT - 190;
		k = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
		s_oStage.addChild(k);
		var z = s_oSpriteLibrary.getSprite("but_play");
		t = new CGfxButton(d, q, z, s_oStage);
		t.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) z = s_oSpriteLibrary.getSprite("audio_icon"), m = CANVAS_WIDTH -
			z.height / 2 - 10, h = z.height / 2 + 10, p = new CToggle(m, h, z, s_bAudioActive, s_oStage), p.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
		z = s_oSpriteLibrary.getSprite("but_credits");
		a = z.height / 2 + 10;
		b = z.height / 2 + 10;
		w = new CGfxButton(a, b, z, s_oStage);
		w.addEventListener(ON_MOUSE_UP, this._onCredits, this);
		z = window.document;
		var r = z.documentElement;
		y = r.requestFullscreen || r.mozRequestFullScreen || r.webkitRequestFullScreen || r.msRequestFullscreen;
		F = z.exitFullscreen || z.mozCancelFullScreen || z.webkitExitFullscreen || z.msExitFullscreen;
		!1 === ENABLE_FULLSCREEN && (y = !1);
		y && screenfull.enabled && (z = s_oSpriteLibrary.getSprite("but_fullscreen"), c = a + z.width / 2 + 10, g = b, x = new CToggle(c, g, z, s_bFullscreen, s_oStage), x.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
		v = createBitmap(s_oSpriteLibrary.getSprite("fade"));
		s_oStage.addChild(v);
		createjs.Tween.get(v).to({
			alpha: 0
		}, 500).call(function() {
			v.visible = !1
		});
		this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
		isIOS() || (s_oSoundTrack = playSound("soundtrack", 1, !0));
		setVolume("soundtrack", 1)
	};
	this.unload =
		function() {
			s_oStage.removeAllChildren();
			if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) p.unload(), p = null;
			y && screenfull.enabled && x.unload();
			s_oMenu = null
		};
	this.refreshButtonPos = function(z, r) {
		t.setPosition(d, q - r);
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || p.setPosition(m - z, h + r);
		y && screenfull.enabled && x.setPosition(c + s_iOffsetX, g + s_iOffsetY);
		w.setPosition(a + z, r + b)
	};
	this._onCredits = function() {
		new CCreditsPanel
	};
	this._onAudioToggle = function() {
		Howler.mute(s_bAudioActive);
		s_bAudioActive = !s_bAudioActive
	};
	this._onButPlayRelease =
		function() {
			$("#div_display_id").css("display", "none");
			"undefined" !== typeof gdsdk && "undefined" !== gdsdk.showAd && gdsdk.showAd();
			try {
				hideMoreGames()
			} catch (z) {}
			this.unload();
			s_oMain.gotoPSelection();
			$(s_oMain).trigger("start_session")
		};
	this.resetFullscreenBut = function() {
		y && screenfull.enabled && x.setActive(s_bFullscreen)
	};
	this._onFullscreenRelease = function() {
		s_bFullscreen ? F.call(window.document) : y.call(window.document.documentElement);
		sizeHandler()
	};
	s_oMenu = this;
	this._init()
}
var s_oMenu = null;

function CGame(c) {
	var g = !1,
		a = !1,
		b = !1,
		m = !1,
		h = !1,
		d = !1,
		q = !1,
		k = !1,
		t = !1,
		v = !1,
		p = !1,
		w = !1,
		x = !1,
		y = !0,
		F = !1,
		z, r = 0,
		e = 0,
		E = 0,
		H = 0,
		u, l, C, D, Q, X = 0,
		W, O, S, N, Y, L, P, G, n, T, V, R, I, A, J, M, B;
	this._init = function(f) {
		$(s_oMain).trigger("start_level", 1);
		G = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
		s_oStageBg.addChild(G);
		u = PLAYER_HP;
		l = ENEMY_HP;
		C = PLAYER_STAMINA;
		D = PLAYER_KO;
		Q = ENEMY_KO;
		0 === s_iPlayerSelected ? (n = createBitmap(s_oSpriteLibrary.getSprite("countdown_panel_white")), T = createBitmap(s_oSpriteLibrary.getSprite("countdown_panel_black")),
			V = createBitmap(s_oSpriteLibrary.getSprite("countdown_panel_continue_white")), R = createBitmap(s_oSpriteLibrary.getSprite("countdown_panel_continue_black")), I = createBitmap(s_oSpriteLibrary.getSprite("ko_white")), A = createBitmap(s_oSpriteLibrary.getSprite("ko_black"))) : (n = createBitmap(s_oSpriteLibrary.getSprite("countdown_panel_black")), T = createBitmap(s_oSpriteLibrary.getSprite("countdown_panel_white")), V = createBitmap(s_oSpriteLibrary.getSprite("countdown_panel_continue_black")), R = createBitmap(s_oSpriteLibrary.getSprite("countdown_panel_continue_white")),
			I = createBitmap(s_oSpriteLibrary.getSprite("ko_black")), A = createBitmap(s_oSpriteLibrary.getSprite("ko_white")));
		n.regX = n.getBounds().width / 2;
		n.regY = n.getBounds().height / 2;
		n.x = CANVAS_WIDTH / 2;
		n.y = CANVAS_HEIGHT / 2;
		n.visible = !1;
		s_oStage.addChild(n);
		T.regX = T.getBounds().width / 2;
		T.regY = T.getBounds().height / 2;
		T.x = CANVAS_WIDTH / 2;
		T.y = CANVAS_HEIGHT / 2;
		T.visible = !1;
		s_oStage.addChild(T);
		V.alpha = .3;
		V.regX = V.getBounds().width / 2;
		V.regY = V.getBounds().height / 2;
		V.x = CANVAS_WIDTH / 2 - 4;
		V.y = CANVAS_HEIGHT / 2 + 4;
		V.visible = !1;
		s_oStage.addChild(V);
		R.alpha = .3;
		R.regX = R.getBounds().width / 2;
		R.regY = R.getBounds().height / 2;
		R.x = CANVAS_WIDTH / 2 - 4;
		R.y = CANVAS_HEIGHT / 2 + 4;
		R.visible = !1;
		s_oStage.addChild(R);
		I.regX = I.getBounds().width / 2;
		I.regY = I.getBounds().height / 2;
		I.x = CANVAS_WIDTH / 2;
		I.y = CANVAS_HEIGHT / 2;
		I.visible = !1;
		s_oStage.addChild(I);
		A.regX = A.getBounds().width / 2;
		A.regY = A.getBounds().height / 2;
		A.x = CANVAS_WIDTH / 2;
		A.y = CANVAS_HEIGHT / 2;
		A.visible = !1;
		s_oStage.addChild(A);
		M = new createjs.BitmapText("1", s_oSpriteSheetBoxing);
		M.visible = !1;
		M.regX =
			M.getBounds().width / 2;
		M.regY = M.getBounds().height / 2;
		M.x = CANVAS_WIDTH / 2;
		M.y = 200;
		s_oStage.addChild(M);
		B = new createjs.BitmapText("Prepare to fight!", s_oSpriteSheetBoxing);
		B.visible = !1;
		B.regX = B.getBounds().width / 2;
		B.regY = B.getBounds().height / 2;
		B.x = CANVAS_WIDTH / 2;
		B.y = 0;
		s_oStage.addChild(B);
		f && (P = new CEnemy(CANVAS_WIDTH / 2, 1E3), L = new CPlayer(CANVAS_WIDTH / 2, CANVAS_HEIGHT), k = !1);
		N = new CInterface;
		s_oInterface.setPlayerHp(u);
		s_oInterface.setPlayerStamina(C);
		s_oInterface.setEnemyHp(l);
		this.changePlayerState(IDLE);
		s_oStageBg.update();
		J = new CHelpPanel;
		setVolume("soundtrack", 0, 3);
		p = !0
	};
	this._preloadPW = function() {
		s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoadedPW, this);
		for (var f = 0; f < s_aBw_Frame[IDLE]; f++) s_oSpriteLibrary.addSprite("bw_idle_" + f, "./sprites/bw_idle/bw_idle_" + f + ".png");
		for (f = 0; f < s_aBw_Frame[GUARD]; f++) s_oSpriteLibrary.addSprite("bw_guard_" + f, "./sprites/bw_guard/bw_guard_" + f + ".png");
		for (f = 0; f < s_aBw_Frame[JAB]; f++) s_oSpriteLibrary.addSprite("bw_jab_" + f, "./sprites/bw_jab/bw_jab_" + f +
			".png");
		for (f = 0; f < s_aBw_Frame[HOOK_R]; f++) s_oSpriteLibrary.addSprite("bw_hook_r_" + f, "./sprites/bw_hook_right/bw_hook_right_" + f + ".png");
		for (f = 0; f < s_aBw_Frame[HOOK_L]; f++) s_oSpriteLibrary.addSprite("bw_hook_l_" + f, "./sprites/bw_hook_left/bw_hook_left_" + f + ".png");
		for (f = 0; f < s_aBw_Frame[UPPERCUT]; f++) s_oSpriteLibrary.addSprite("bw_uppercut_" + f, "./sprites/bw_uppercut/bw_uppercut_" + f + ".png");
		for (f = 0; f < s_aBw_Frame[GETPUNCHED]; f++) s_oSpriteLibrary.addSprite("bw_get_punched_" + f, "./sprites/bw_get_punched/bw_get_punched_" +
			f + ".png");
		for (f = 0; f < s_aBw_Frame[KO]; f++) s_oSpriteLibrary.addSprite("bw_ko_" + f, "./sprites/bw_ko/bw_ko_" + f + ".png");
		for (f = 0; f < s_aBb_En_Frame[IDLE]; f++) s_oSpriteLibrary.addSprite("bb_en_idle_" + f, "./sprites/bb_en_idle/bb_en_idle_" + f + ".png");
		for (f = 0; f < s_aBb_En_Frame[GUARD]; f++) s_oSpriteLibrary.addSprite("bb_en_guard_" + f, "./sprites/bb_en_guard/bb_en_guard_" + f + ".png");
		for (f = 0; f < s_aBb_En_Frame[JAB]; f++) s_oSpriteLibrary.addSprite("bb_en_jab_" + f, "./sprites/bb_en_jab/bb_en_jab_" + f + ".png");
		for (f = 0; f < s_aBb_En_Frame[HOOK_R]; f++) s_oSpriteLibrary.addSprite("bb_en_hook_r_" +
			f, "./sprites/bb_en_hook_right/bb_en_hook_right_" + f + ".png");
		for (f = 0; f < s_aBb_En_Frame[HOOK_L]; f++) s_oSpriteLibrary.addSprite("bb_en_hook_l_" + f, "./sprites/bb_en_hook_left/bb_en_hook_left_" + f + ".png");
		for (f = 0; f < s_aBb_En_Frame[UPPERCUT]; f++) s_oSpriteLibrary.addSprite("bb_en_uppercut_" + f, "./sprites/bb_en_uppercut/bb_en_uppercut_" + f + ".png");
		for (f = 0; f < s_aBb_En_Frame[GETPUNCHED]; f++) s_oSpriteLibrary.addSprite("bb_en_get_punched_" + f, "./sprites/bb_en_get_punched/bb_en_get_punched_" + f + ".png");
		for (f = 0; f < s_aBb_En_Frame[KO]; f++) s_oSpriteLibrary.addSprite("bb_en_ko_" +
			f, "./sprites/bb_en_ko/bb_en_ko_" + f + ".png");
		s_oSpriteLibrary.loadSprites()
	};
	this._preloadPB = function() {
		s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoadedPB, this);
		for (var f = 0; f < s_aBb_Frame[IDLE]; f++) s_oSpriteLibrary.addSprite("bb_idle_" + f, "./sprites/bb_idle/bb_idle_" + f + ".png");
		for (f = 0; f < s_aBb_Frame[GUARD]; f++) s_oSpriteLibrary.addSprite("bb_guard_" + f, "./sprites/bb_guard/bb_guard_" + f + ".png");
		for (f = 0; f < s_aBb_Frame[JAB]; f++) s_oSpriteLibrary.addSprite("bb_jab_" + f, "./sprites/bb_jab/bb_jab_" +
			f + ".png");
		for (f = 0; f < s_aBb_Frame[HOOK_R]; f++) s_oSpriteLibrary.addSprite("bb_hook_r_" + f, "./sprites/bb_hook_right/bb_hook_right_" + f + ".png");
		for (f = 0; f < s_aBb_Frame[HOOK_L]; f++) s_oSpriteLibrary.addSprite("bb_hook_l_" + f, "./sprites/bb_hook_left/bb_hook_left_" + f + ".png");
		for (f = 0; f < s_aBb_Frame[UPPERCUT]; f++) s_oSpriteLibrary.addSprite("bb_uppercut_" + f, "./sprites/bb_uppercut/bb_uppercut_" + f + ".png");
		for (f = 0; f < s_aBb_Frame[GETPUNCHED]; f++) s_oSpriteLibrary.addSprite("bb_get_punched_" + f, "./sprites/bb_get_punched/bb_get_punched_" +
			f + ".png");
		for (f = 0; f < s_aBb_Frame[KO]; f++) s_oSpriteLibrary.addSprite("bb_ko_" + f, "./sprites/bb_ko/bb_ko_" + f + ".png");
		for (f = 0; f < s_aBw_En_Frame[IDLE]; f++) s_oSpriteLibrary.addSprite("bw_en_idle_" + f, "./sprites/bw_en_idle/bw_en_idle_" + f + ".png");
		for (f = 0; f < s_aBw_En_Frame[GUARD]; f++) s_oSpriteLibrary.addSprite("bw_en_guard_" + f, "./sprites/bw_en_guard/bw_en_guard_" + f + ".png");
		for (f = 0; f < s_aBw_En_Frame[JAB]; f++) s_oSpriteLibrary.addSprite("bw_en_jab_" + f, "./sprites/bw_en_jab/bw_en_jab_" + f + ".png");
		for (f = 0; f < s_aBw_En_Frame[HOOK_R]; f++) s_oSpriteLibrary.addSprite("bw_en_hook_r_" +
			f, "./sprites/bw_en_hook_right/bw_en_hook_right_" + f + ".png");
		for (f = 0; f < s_aBw_En_Frame[HOOK_L]; f++) s_oSpriteLibrary.addSprite("bw_en_hook_l_" + f, "./sprites/bw_en_hook_left/bw_en_hook_left_" + f + ".png");
		for (f = 0; f < s_aBw_En_Frame[UPPERCUT]; f++) s_oSpriteLibrary.addSprite("bw_en_uppercut_" + f, "./sprites/bw_en_uppercut/bw_en_uppercut_" + f + ".png");
		for (f = 0; f < s_aBw_En_Frame[GETPUNCHED]; f++) s_oSpriteLibrary.addSprite("bw_en_get_punched_" + f, "./sprites/bw_en_get_punched/bw_en_get_punched_" + f + ".png");
		for (f = 0; f < s_aBw_En_Frame[KO]; f++) s_oSpriteLibrary.addSprite("bw_en_ko_" +
			f, "./sprites/bw_en_ko/bw_en_ko_" + f + ".png");
		s_oSpriteLibrary.loadSprites()
	};
	this._onAllImagesLoadedPW = function() {
		s_bLoadedPlayerWhite = !0;
		P = new CEnemy(CANVAS_WIDTH / 2, 1E3);
		L = new CPlayer(CANVAS_WIDTH / 2, CANVAS_HEIGHT);
		U.setIndex(L.getMaxIndex());
		w = !0
	};
	this._onAllImagesLoadedPB = function() {
		s_bLoadedPlayerBlack = !0;
		P = new CEnemy(CANVAS_WIDTH / 2, 1E3);
		L = new CPlayer(CANVAS_WIDTH / 2, CANVAS_HEIGHT);
		U.setIndex(L.getMaxIndex());
		w = !0
	};
	this.onAllAnimPlayed = function() {
		1 === X ? (w = !1, U.unload(), this._init(!1), X = 0) : X++
	};
	this._onImagesLoaded =
		function() {};
	this._initHammer = function() {
		Y = new Hammer(document.getElementById("canvas"));
		Y.get("swipe").set({
			direction: Hammer.DIRECTION_ALL
		});
		Y.get("swipe").set({
			velocity: .005
		});
		Y.get("swipe").set({
			threshold: .1
		});
		Y.on("tap", function(f) {
			C >= STAMINA_PUNCH_LIMIT && !y && (C <= s_aSt_Decrese[JAB] && (d = !0), (1 > s_oMultiplier ? f.center.y / s_oMultiplier : f.center.y * s_oMultiplier) < S && ba._swipeControl("tap"))
		});
		Y.on("swipeleft", function(f) {
			C >= STAMINA_PUNCH_LIMIT && !y && (C <= s_aSt_Decrese[HOOK_R] && (d = !0), (1 > s_oMultiplier ?
				f.center.y / s_oMultiplier : f.center.y * s_oMultiplier) < S && ba._swipeControl("left"))
		});
		Y.on("swiperight", function(f) {
			C >= STAMINA_PUNCH_LIMIT && !y && (C <= s_aSt_Decrese[HOOK_L] && (d = !0), (1 > s_oMultiplier ? f.center.y / s_oMultiplier : f.center.y * s_oMultiplier) < S && ba._swipeControl("right"))
		});
		Y.on("swipeup", function(f) {
			C >= STAMINA_PUNCH_LIMIT && !y && (C <= s_aSt_Decrese[UPPERCUT] && (d = !0), (1 > s_oMultiplier ? f.center.y / s_oMultiplier : f.center.y * s_oMultiplier) < S && ba._swipeControl("up"))
		})
	};
	this._swipeControl = function(f) {
		if (p) switch (f) {
			case "left":
				q ||
					m || h || (k = q = !0, L.changeState("hook_r"), s_oInterface.setGuardButVisibilty(!1));
				break;
			case "right":
				q || m || h || (k = q = !0, L.changeState("hook_l"), s_oInterface.setGuardButVisibilty(!1));
				break;
			case "up":
				q || m || h || (k = q = !0, L.changeState("uppercut"), s_oInterface.setGuardButVisibilty(!1));
				break;
			case "tap":
				q || m || h || (k = q = !0, L.changeState("jab"), s_oInterface.setGuardButVisibilty(!1))
		}
	};
	this.unload = function() {
		s_oStage.removeAllChildren();
		s_oStageBg.removeAllChildren();
		s_oStageInterface.removeAllChildren();
		s_oStageBg.update();
		s_oGame = null;
		$("#canvas_interface").css("display", "none")
	};
	this.onExit = function() {
		this.unload();
		s_oMain.gotoMenu();
		stopSound("crowd_idle");
		$(s_oMain).trigger("end_session");
		$(s_oMain).trigger("end_level", 1);
		$(s_oMain).trigger("show_interlevel_ad")
	};
	this.onRestart = function() {
		this.unload();
		s_oMain.gotoGame();
		$(s_oMain).trigger("restart_level", 1);
		$(s_oMain).trigger("show_interlevel_ad")
	};
	this.changePlayerState = function(f) {
		L.changeState(f)
	};
	this.setTapLimit = function(f) {
		S = f
	};
	this.getPBlocked = function() {
		return q
	};
	this.setPBlocked = function(f) {
		q = f
	};
	this.getPIsPunching = function() {
		return k
	};
	this.setPIsPunching = function(f) {
		k = f
	};
	this.getPGuard = function() {
		return t
	};
	this.setPGuard = function(f) {
		t = f
	};
	this.setEGuard = function(f) {
		v = f
	};
	this.getEGuard = function() {
		return v
	};
	this.hitEnemy = function(f) {
		v ? (--l, --Q, P.moveGuard()) : (P.changeState(GETPUNCHED), q = !0, d ? (l -= f / 2, Q -= f / 2) : (l -= f, Q -= f));
		0 > l && (l = 0);
		s_oInterface.setEnemyHp(l);
		if (0 >= l || 1 >= Q) h = !0, P.changeState(KO), playSound("crowd_exultance", 1, !1);
		d = !1
	};
	this.hitPlayer = function(f) {
		t ?
			(C -= 3, --u, L.moveGuard()) : (C -= 5, u -= f, D = 10 > C ? D - 2 * f : D - f, this.setPIsPunching(!1), L.changeState(GETPUNCHED), q = !0);
		0 > u && (u = 0);
		s_oInterface.setPlayerHp(u);
		if (0 >= u || 1 >= D) s_oInterface.setGuardButVisibilty(!1), m = !0, L.changeState(KO), playSound("crowd_exultance", 1, !1);
		0 > C && (C = 0);
		s_oInterface.setPlayerStamina(C);
		d = !1
	};
	this.gamePause = function() {
		p = !1
	};
	this.gameResume = function() {
		p = !0
	};
	this.reduceStamina = function(f) {
		C -= f;
		0 > C && (C = 0);
		s_oInterface.setPlayerStamina(C)
	};
	this.regenStamina = function() {
		C += STAMINA_REGEN_SPEED;
		C > PLAYER_STAMINA && (C = PLAYER_STAMINA);
		s_oInterface.setPlayerStamina(C);
		g = !1
	};
	this.getKoP = function() {
		return m
	};
	this.getKoE = function() {
		return h
	};
	this.regenKoP = function() {
		D += 1;
		a = !1
	};
	this.regenKoE = function() {
		Q += 1;
		b = !1
	};
	this.playParticle = function(f, K) {
		v || (x = !0, W = f, O = K)
	};
	this.stopParticle = function() {
		x = !1
	};
	this.playerKo = function() {
		this.gamePause();
		P.setVisible(!1);
		L.setVisible(!1);
		s_oInterface.setGuardButVisibilty(!1);
		s_oInterface.setEnergyVisibility(!1);
		F = n.visible = !0;
		u >= PLAYER_MIN_HP_KO ? (z = Math.floor(8 *
			Math.random() + 3), D = u <= PLAYER_KO ? u : PLAYER_KO) : z = 100
	};
	this.enemyKo = function() {
		this.gamePause();
		L.setVisible(!1);
		P.setVisible(!1);
		s_oInterface.setGuardButVisibilty(!1);
		s_oInterface.setEnergyVisibility(!1);
		F = T.visible = !0;
		l >= ENEMY_MIN_HP_KO ? (z = Math.floor(8 * Math.random() + 3), Q = l <= ENEMY_KO ? l : ENEMY_KO) : z = 100
	};
	this._wakeUp = function() {
		L.changeState(IDLE);
		P.changeState(IDLE);
		q = k = !1;
		n.visible = !1;
		T.visible = !1;
		V.visible = !1;
		R.visible = !1;
		s_oInterface.setGuardButVisibilty(!0);
		s_oInterface.setEnergyVisibility(!0);
		h =
			m = !1;
		P.setVisible(!0);
		P.setIsActing(!1);
		L.setVisible(!0);
		this.gameResume();
		M.visible = !1;
		r = 0
	};
	this.closeHelpPanel = function() {
		J.unload();
		y = !1;
		stopSound("soundtrack");
		playSound("crowd_idle", 1, !0);
		playSound("start_match", 1, !1);
		s_oGame._initHammer();
		$("#canvas_interface").css("display", "block")
	};
	this.update = function() {
		w && (L.playAllAnim(), P.playAllAnim());
		p && !y && (e += s_iTimeElaps, e > STAMINA_REGEN_TIME && !k && C < PLAYER_STAMINA && !g && (e = 0, g = !0, this.regenStamina()), E += s_iTimeElaps, E > KO_REGEN_TIME && (D < PLAYER_KO &&
			0 < D && !a && (E = 0, a = !0, this.regenKoP()), Q < ENEMY_KO & 0 < D && !b && (E = 0, b = !0, this.regenKoE())), L.update(), P.update(), x && N.playParticle(W, O));
		F && (H += s_iTimeElaps, 1E3 < H && (H = 0, r += 1, 10 >= r ? (M.visible = !0, M.text = "" + r, r === z && (F = !1, M.visible = !1, B.visible = !0, m ? (V.visible = !0, createjs.Tween.get(V).to({
			alpha: 1
		}, 500)) : (R.visible = !0, createjs.Tween.get(R).to({
			alpha: 1
		}, 500)), createjs.Tween.get(B).to({
			y: CANVAS_HEIGHT / 2
		}, 300), setTimeout(function() {
				createjs.Tween.get(B).to({
					y: 0
				}, 300).call(function() {
					ba._wakeUp();
					B.visible = !0
				})
			},
			2E3)), r !== z && 10 > r && playSound("" + r, 1, !1)) : (playSound("ko", 1, !1), s_oInterface.setKoButVisibility(!0), F = !1, M.visible = !1, m ? (I.scaleX = I.scaleY = 3, I.alpha = .6, I.visible = !0, createjs.Tween.get(I).to({
			scaleX: 1,
			scaleY: 1,
			alpha: 1
		}, 400, createjs.Ease.elasticOut).call(function() {})) : (A.scaleX = I.scaleY = 3, A.alpha = .6, A.visible = !0, createjs.Tween.get(A).to({
			scaleX: 1,
			scaleY: 1,
			alpha: 1
		}, 400, createjs.Ease.elasticOut).call(function() {})))))
	};
	ENEMY_ATTACK_OCCURR = c.enemy_attack_occurr;
	ENEMY_MIN_ACTION_TIME = c.enemy_min_action_time;
	ENEMY_MAX_ACTION_TIME = c.enemy_max_action_time;
	ENEMY_MIN_GUARD_TIME = c.enemy_min_guard_time;
	ENEMY_MAX_GUARD_TIME = c.enemy_max_guard_time;
	ENEMY_HP = c.enemy_hp;
	PLAYER_HP = c.player_hp;
	PLAYER_STAMINA = c.player_stamina;
	STAMINA_REGEN_SPEED = c.player_stamina_regen_speed;
	STAMINA_PUNCH_LIMIT = c.stamina_punch_limit;
	s_aDamage[JAB] = c.jab_damage;
	s_aDamage[HOOK_R] = c.hook_left_damage;
	s_aDamage[HOOK_L] = c.hook_right_damage;
	s_aDamage[UPPERCUT] = c.uppercut_damage;
	s_oGame = this;
	var ba = this;
	if (0 === s_iPlayerSelected)
		if (s_bLoadedPlayerWhite) this._init(!0);
		else {
			var U = new CVersusPanel;
			this._preloadPW()
		}
	else s_bLoadedPlayerBlack ? this._init(!0) : (U = new CVersusPanel, this._preloadPB())
}
var s_oEndPanel, s_oGame;

function CInterface() {
	var c, g, a, b, m, h, d, q, k = 0,
		t, v, p, w, x, y, F, z, r, e, E, H, u, l, C, D, Q, X, W, O, S, N, Y, L = null,
		P = null;
	this._init = function() {
		d = CANVAS_WIDTH / 2;
		q = CANVAS_HEIGHT - 70;
		var G = s_oSpriteLibrary.getSprite("but_defence");
		p = new CGfxButton(d, q, G, s_oStage);
		p.setVisible(!0);
		p.addEventListener(ON_MOUSE_UP, this._onGuardButReleased, this);
		p.addEventListener(ON_MOUSE_DOWN, this._onGuardButPressed, this);
		G = s_oSpriteLibrary.getSprite("fill_energy");
		r = createBitmap(G);
		r.regY = G.height;
		r.rotation = 180;
		r.x = 92;
		r.y = 385;
		s_oStageInterface.addChild(r);
		e = createBitmap(s_oSpriteLibrary.getSprite("mask_energy"));
		e.rotation = 180;
		e.regY = G.height;
		e.x = 92;
		e.y = 385;
		e.scaleY = 0;
		s_oStageInterface.addChild(e);
		G = s_oSpriteLibrary.getSprite("energy_bar");
		z = createBitmap(G);
		z.regY = G.height;
		z.rotation = 180;
		z.x = 102;
		z.y = 375;
		s_oStageInterface.addChild(z);
		G = s_oSpriteLibrary.getSprite("fill_stamina");
		D = createBitmap(G);
		D.regY = G.height;
		D.rotation = 180;
		D.x = 112;
		D.y = 385;
		s_oStageInterface.addChild(D);
		Q = createBitmap(s_oSpriteLibrary.getSprite("mask_energy"));
		Q.x = 96;
		Q.y = 385;
		Q.scaleY =
			0;
		s_oStageInterface.addChild(Q);
		G = s_oSpriteLibrary.getSprite("energy_bar");
		C = createBitmap(G);
		C.regY = G.height;
		C.rotation = 180;
		C.x = 122;
		C.y = 375;
		s_oStageInterface.addChild(C);
		G = s_oSpriteLibrary.getSprite("fill_energy");
		W = createBitmap(G);
		W.x = 576;
		W.y = 190;
		s_oStageInterface.addChild(W);
		O = createBitmap(s_oSpriteLibrary.getSprite("mask_energy"));
		O.rotation = 180;
		O.x = 592;
		O.y = 641;
		O.scaleY = 0;
		s_oStageInterface.addChild(O);
		X = createBitmap(s_oSpriteLibrary.getSprite("energy_bar"));
		X.x = 566;
		X.y = 180;
		s_oStageInterface.addChild(X);
		0 === s_iPlayerSelected ? (E = createBitmap(s_oSpriteLibrary.getSprite("energy_avatar_white")), S = createBitmap(s_oSpriteLibrary.getSprite("energy_avatar_black"))) : (E = createBitmap(s_oSpriteLibrary.getSprite("energy_avatar_black")), S = createBitmap(s_oSpriteLibrary.getSprite("energy_avatar_white")));
		E.x = 63;
		E.y = 820;
		s_oStageInterface.addChild(E);
		S.x = 551;
		S.y = 160;
		s_oStageInterface.addChild(S);
		H = createBitmap(s_oSpriteLibrary.getSprite("icon_energy"));
		H.x = 77;
		H.y = 800;
		s_oStageInterface.addChild(H);
		u = createBitmap(s_oSpriteLibrary.getSprite("icon_stamina"));
		u.x = 98;
		u.y = 800;
		s_oStageInterface.addChild(u);
		l = createBitmap(s_oSpriteLibrary.getSprite("icon_energy"));
		l.x = 577;
		l.y = 200;
		s_oStageInterface.addChild(l);
		G = s_oSpriteLibrary.getSprite("but_exit");
		m = CANVAS_WIDTH - 40;
		h = 50;
		F = new CGfxButton(m, h, G, s_oStage);
		F.addEventListener(ON_MOUSE_UP, this._onExitButReleased, this);
		!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (a = CANVAS_WIDTH - 120, b = 50, y = new CToggle(a, b, s_oSpriteLibrary.getSprite("audio_icon2"), s_bAudioActive, s_oStage), y.addEventListener(ON_MOUSE_UP, this._onAudioToggle,
			this), G = s_oSpriteLibrary.getSprite("but_fullscreen"), c = a - G.width / 2 - 10) : (G = s_oSpriteLibrary.getSprite("but_fullscreen"), c = CANVAS_WIDTH - 120);
		g = 50;
		var n = window.document,
			T = n.documentElement;
		L = T.requestFullscreen || T.mozRequestFullScreen || T.webkitRequestFullScreen || T.msRequestFullscreen;
		P = n.exitFullscreen || n.mozCancelFullScreen || n.webkitExitFullscreen || n.msExitFullscreen;
		!1 === ENABLE_FULLSCREEN && (L = !1);
		L && screenfull.enabled && (Y = new CToggle(c, g, G, s_bFullscreen, s_oStage), Y.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease,
			this));
		G = s_oSpriteLibrary.getSprite("but_exit_big");
		w = new CGfxButton(CANVAS_WIDTH / 2 - 100, CANVAS_HEIGHT - 250, G, s_oStage);
		w.setVisible(!1);
		w.addEventListener(ON_MOUSE_UP, this._onExitButReleased, this);
		G = s_oSpriteLibrary.getSprite("but_restart");
		x = new CGfxButton(CANVAS_WIDTH / 2 + 100, CANVAS_HEIGHT - 250, G, s_oStage);
		x.setVisible(!1);
		x.addEventListener(ON_MOUSE_UP, this._onRestartButReleased, this);
		N = [];
		for (n = 0; 5 > n; n++) G = s_oSpriteLibrary.getSprite("particle_" + n), N[n] = createBitmap(G), N[n].visible = !1, N[n].x = CANVAS_WIDTH /
			2 - 100, N[n].y = 300, s_oStage.addChild(N[n]);
		t = N[0].x;
		v = N[0].y;
		this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
		s_oStageInterface.update()
	};
	this.unload = function() {
		L && screenfull.enabled && Y.unload();
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) y.unload(), y = null;
		F.unload();
		w.unload();
		p.unload();
		x.unload()
	};
	this.refreshButtonPos = function(G, n) {
		p.setPosition(d, q - n);
		F.setPosition(m - G, h + n);
		s_oGame.setTapLimit(q - n);
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || y.setPosition(a - G, b + n);
		L && screenfull.enabled && Y.setPosition(c -
			s_iOffsetX, g + s_iOffsetY);
		s_oStageInterface.update()
	};
	this._onGuardButReleased = function() {
		// s_oGame.getPIsPunching() || s_oGame.getKoP() || (s_oGame.changePlayerState(IDLE),
        // //  s_oGame.setPBlocked(!1),
        //   s_oGame.setPGuard(!1))
	};
	this._onGuardButPressed = function() {
		// s_oGame.getPIsPunching() || s_oGame.getKoP() || (s_oGame.changePlayerState(GUARD),
        // //  s_oGame.setPBlocked(!0),
        //   s_oGame.setPGuard(!0))
	};
	this._onExitButReleased = function() {
		$("#div_display_id").css("display", "none");
		s_oGame.onExit()
	};
	this._onAudioToggle = function() {
		Howler.mute(s_bAudioActive);
		s_bAudioActive = !s_bAudioActive
	};
	this.resetFullscreenBut = function() {
		L && screenfull.enabled && Y.setActive(s_bFullscreen)
	};
	this._onFullscreenRelease = function() {
		s_bFullscreen ? P.call(window.document) : L.call(window.document.documentElement);
		sizeHandler()
	};
	this._onRestartButReleased = function() {
		$("#div_display_id").css("display", "none");
		s_oGame.onRestart()
	};
	this.setGuardButVisibilty = function(G) {
		p.setVisible(G)
	};
	this.getGuardButVisibilty = function() {
		return p.getVisible()
	};
	this.setPlayerHp = function(G) {
		e.scaleY =
			1 - G / PLAYER_HP;
		s_oStageInterface.update()
	};
	this.setPlayerStamina = function(G) {
		Q.scaleY = 1 - G / PLAYER_STAMINA;
		s_oStageInterface.update()
	};
	this.setEnemyHp = function(G) {
		O.scaleY = 1 - G / ENEMY_HP;
		s_oStageInterface.update()
	};
	this.setKoButVisibility = function(G) {
		$("#div_display_id").css("display", "block");
		w.setVisible(G);
		x.setVisible(G);
		s_oStageInterface.update()
	};
	this.setEnergyVisibility = function(G) {
		z.visible = G;
		r.visible = G;
		e.visible = G;
		C.visible = G;
		D.visible = G;
		Q.visible = G;
		X.visible = G;
		W.visible = G;
		O.visible = G;
		E.visible =
			G;
		S.visible = G;
		l.visible = G;
		H.visible = G;
		u.visible = G;
		s_oStageInterface.update()
	};
	this.playParticle = function(G, n) {
		0 === k ? (N[0].visible = !0, N[0].x += G, N[0].y += n) : (N[k - 1].visible = !1, N[k - 1].x = t, N[k - 1].y = v, N[k].x += G, N[k].y += n, N[k].visible = !0);
		k++;
		5 === k && (s_oGame.stopParticle(), N[4].visible = !1, k = 0)
	};
	s_oInterface = this;
	this._init();
	return this
}
var s_oInterface = null;

function CHelpPanel() {
	var c, g, a, b, m, h = 0;
	this._init = function() {
		c = createBitmap(s_oSpriteLibrary.getSprite("bg_help_" + (h + 1)));
		c.regX = c.getBounds().width / 2;
		c.regY = c.getBounds().height / 2;
		c.x = CANVAS_WIDTH / 2;
		c.y = CANVAS_HEIGHT / 2;
		s_oStage.addChild(c);
		g = new createjs.BitmapText("HOW TO PLAY", s_oSpriteSheetBoxing);
		g.regX = g.getBounds().width / 2;
		g.regY = g.getBounds().height / 2;
		g.x = CANVAS_WIDTH / 2;
		g.y = 180;
		s_oStage.addChild(g);
		var q = s_oSpriteLibrary.getSprite("but_skip");
		a = new CGfxButton(CANVAS_WIDTH - 165, CANVAS_HEIGHT -
			120, q, s_oStage);
		a.addEventListener(ON_MOUSE_UP, this._onSkipButtonPressedNext, this);
		q = s_oSpriteLibrary.getSprite("but_skip");
		b = new CGfxButton(165, CANVAS_HEIGHT - 120, q, s_oStage);
		b.addEventListener(ON_MOUSE_UP, this._onSkipButtonPressedPrevious, this);
		b.setScaleX(-1);
		q = s_oSpriteLibrary.getSprite("but_fight");
		m = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 130, q, s_oStage);
		m.addEventListener(ON_MOUSE_UP, s_oGame.closeHelpPanel, this)
	};
	this._onSkipButtonPressedNext = function() {
		h += 1;
		2 === h && (h = 0);
		c.image = s_oSpriteLibrary.getSprite("bg_help_" +
			(h + 1))
	};
	this._onSkipButtonPressedPrevious = function() {
		--h; - 1 === h && (h = 1);
		c.image = s_oSpriteLibrary.getSprite("bg_help_" + (h + 1))
	};
	this.unload = function() {
		s_oStage.removeChild(d);
		s_oStage.removeChild(c);
		s_oStage.removeChild(g);
		a.unload();
		b.unload();
		m.unload()
	};
	var d = this;
	this._init()
}

function CPlayer(c, g) {
	var a = 1,
		b = 1,
		m, h = "idle",
		d, q, k, t, v, p, w, x, y;
	this._init = function(F, z) {
		d = new CContainer(F, z);
		if (0 === s_iPlayerSelected) {
			q = [];
			for (var r, e = 0; e < s_aBw_Frame[IDLE]; e++) {
				r = "bw_idle_" + e;
				r = s_oSpriteLibrary.getSprite(r);
				var E = createBitmap(r);
				q[e] = new CChild(0, 0, E, d);
				q[e].setVisible(!1);
				q[e].setRegX(r.width / 2);
				q[e].setRegY(r.height);
				d.addChild(q[e])
			}
			q[0].setVisible(!0);
			t = [];
			for (e = 0; e < s_aBw_Frame[JAB]; e++) r = "bw_jab_" + e, r = s_oSpriteLibrary.getSprite(r), E = createBitmap(r), t[e] = new CChild(0, 0, E, d),
				t[e].setVisible(!1), t[e].setRegX(r.width / 2), t[e].setRegY(r.height), d.addChild(t[e]);
			v = [];
			for (e = 0; e < s_aBw_Frame[HOOK_R]; e++) r = "bw_hook_r_" + e, r = s_oSpriteLibrary.getSprite(r), E = createBitmap(r), v[e] = new CChild(0, 0, E, d), v[e].setVisible(!1), v[e].setRegX(r.width / 2), v[e].setRegY(r.height), d.addChild(v[e]);
			p = [];
			for (e = 0; e < s_aBw_Frame[HOOK_L]; e++) r = "bw_hook_l_" + e, r = s_oSpriteLibrary.getSprite(r), E = createBitmap(r), p[e] = new CChild(0, 0, E, d), p[e].setVisible(!1), p[e].setRegX(r.width / 2), p[e].setRegY(r.height), d.addChild(p[e]);
			w = [];
			for (e = 0; e < s_aBw_Frame[UPPERCUT]; e++) r = "bw_uppercut_" + e, r = s_oSpriteLibrary.getSprite(r), E = createBitmap(r), w[e] = new CChild(0, 0, E, d), w[e].setVisible(!1), w[e].setRegX(r.width / 2), w[e].setRegY(r.height), d.addChild(w[e]);
			x = [];
			for (e = 0; e < s_aBw_Frame[GETPUNCHED]; e++) r = "bw_get_punched_" + e, r = s_oSpriteLibrary.getSprite(r), E = createBitmap(r), x[e] = new CChild(0, 0, E, d), x[e].setVisible(!1), x[e].setRegX(r.width / 2), x[e].setRegY(r.height), d.addChild(x[e]);
			y = [];
			for (e = 0; e < s_aBw_Frame[KO]; e++) r = "bw_ko_" + e, r = s_oSpriteLibrary.getSprite(r),
				E = createBitmap(r), y[e] = new CChild(0, 0, E, d), y[e].setVisible(!1), y[e].setRegX(r.width / 2), y[e].setRegY(r.height), d.addChild(y[e]);
			k = [];
			for (e = 0; e < s_aBw_Frame[GUARD]; e++) r = "bw_guard_" + e, r = s_oSpriteLibrary.getSprite(r), E = createBitmap(r), k[e] = new CChild(0, 0, E, d), k[e].setVisible(!1), k[e].setRegX(r.width / 2), k[e].setRegY(r.height), d.addChild(k[e])
		} else {
			q = [];
			for (e = 0; e < s_aBb_Frame[IDLE]; e++) r = "bb_idle_" + e, r = s_oSpriteLibrary.getSprite(r), E = createBitmap(r), q[e] = new CChild(0, 0, E, d), q[e].setVisible(!1), q[e].setRegX(r.width /
				2), q[e].setRegY(r.height), d.addChild(q[e]);
			q[0].setVisible(!0);
			t = [];
			for (e = 0; e < s_aBb_Frame[JAB]; e++) r = "bb_jab_" + e, r = s_oSpriteLibrary.getSprite(r), E = createBitmap(r), t[e] = new CChild(0, 0, E, d), t[e].setVisible(!1), t[e].setRegX(r.width / 2), t[e].setRegY(r.height), d.addChild(t[e]);
			v = [];
			for (e = 0; e < s_aBb_Frame[HOOK_R]; e++) r = "bb_hook_r_" + e, r = s_oSpriteLibrary.getSprite(r), E = createBitmap(r), v[e] = new CChild(0, 0, E, d), v[e].setVisible(!1), v[e].setRegX(r.width / 2), v[e].setRegY(r.height), d.addChild(v[e]);
			p = [];
			for (e = 0; e <
				s_aBb_Frame[HOOK_L]; e++) r = "bb_hook_l_" + e, r = s_oSpriteLibrary.getSprite(r), E = createBitmap(r), p[e] = new CChild(0, 0, E, d), p[e].setVisible(!1), p[e].setRegX(r.width / 2), p[e].setRegY(r.height), d.addChild(p[e]);
			w = [];
			for (e = 0; e < s_aBb_Frame[UPPERCUT]; e++) r = "bb_uppercut_" + e, r = s_oSpriteLibrary.getSprite(r), E = createBitmap(r), w[e] = new CChild(0, 0, E, d), w[e].setVisible(!1), w[e].setRegX(r.width / 2), w[e].setRegY(r.height), d.addChild(w[e]);
			x = [];
			for (e = 0; e < s_aBb_Frame[GETPUNCHED]; e++) r = "bb_get_punched_" + e, r = s_oSpriteLibrary.getSprite(r),
				E = createBitmap(r), x[e] = new CChild(0, 0, E, d), x[e].setVisible(!1), x[e].setRegX(r.width / 2), x[e].setRegY(r.height), d.addChild(x[e]);
			y = [];
			for (e = 0; e < s_aBb_Frame[KO]; e++) r = "bb_ko_" + e, r = s_oSpriteLibrary.getSprite(r), E = createBitmap(r), y[e] = new CChild(0, 0, E, d), y[e].setVisible(!1), y[e].setRegX(r.width / 2), y[e].setRegY(r.height), d.addChild(y[e]);
			k = [];
			for (e = 0; e < s_aBb_Frame[GUARD]; e++) r = "bb_guard_" + e, r = s_oSpriteLibrary.getSprite(r), E = createBitmap(r), k[e] = new CChild(0, 0, E, d), k[e].setVisible(!1), k[e].setRegX(r.width /
				2), k[e].setRegY(r.height), d.addChild(k[e])
		}
		m = s_oStage.getChildIndex(E)
	};
	this._onJabHit = function() {
		s_oGame.hitEnemy(s_aDamage[JAB])
	};
	this._onHookRHit = function() {
		s_oGame.hitEnemy(s_aDamage[HOOK_R])
	};
	this._onHookLHit = function() {
		s_oGame.hitEnemy(s_aDamage[HOOK_L])
	};
	this._onUppercutHit = function() {
		s_oGame.hitEnemy(s_aDamage[UPPERCUT])
	};
	this._animIdle = function() {
		0 === b ? (q[8].setVisible(!1), q[0].setVisible(!0)) : (q[b - 1].setVisible(!1), q[b].setVisible(!0));
		b++;
		b > s_aBw_Frame[IDLE] - 1 && (b = 0)
	};
	this._animGuard = function() {
		0 ===
			b ? (k[9].setVisible(!1), k[0].setVisible(!0)) : (k[b - 1].setVisible(!1), k[b].setVisible(!0));
		b++;
		b > s_aBw_Frame[GUARD] - 1 && (b = 0)
	};
	this._animJab = function() {
		0 === b ? t[0].setVisible(!0) : (t[b - 1].setVisible(!1), t[b].setVisible(!0));
		b === s_aFrameHit[JAB] && (s_oGame.playParticle(PARTICLE_OFFSET_PLAYER[JAB].xp, PARTICLE_OFFSET_PLAYER[JAB].yp), this._onJabHit(), !1 === s_oGame.getEGuard() && playSound("punch_left", 1, !1));
		2 === b && s_oGame.reduceStamina(s_aSt_Decrese[JAB]);
		b++;
		b > s_aBw_Frame[JAB] - 1 && (q[0].setVisible(!0), this.changeState("idle")
			// s_oGame.setPBlocked(!1),
             
            // s_oGame.setPIsPunching(!1), s_oInterface.setGuardButVisibilty(!0)
            )
	};
	this._animHookR = function() {
		0 === b ? v[0].setVisible(!0) : (v[b - 1].setVisible(!1), v[b].setVisible(!0));
		b === s_aFrameHit[HOOK_R] && (s_oGame.playParticle(PARTICLE_OFFSET_PLAYER[HOOK_R].xp, PARTICLE_OFFSET_PLAYER[HOOK_R].yp), this._onHookRHit(), !1 === s_oGame.getEGuard() && playSound("punch_right", 1, !1));
		2 === b && s_oGame.reduceStamina(s_aSt_Decrese[HOOK_R]);
		b++;
		b > s_aBw_Frame[HOOK_R] - 1 && (q[0].setVisible(!0), this.changeState("idle")
			// s_oGame.setPBlocked(!1), 
            // s_oGame.setPIsPunching(!1), s_oInterface.setGuardButVisibilty(!0)
            )
	};
	this._animHookL = function() {
		0 === b ? p[0].setVisible(!0) : (p[b - 1].setVisible(!1), p[b].setVisible(!0));
		b === s_aFrameHit[HOOK_L] && (s_oGame.playParticle(PARTICLE_OFFSET_PLAYER[HOOK_L].xp, PARTICLE_OFFSET_PLAYER[HOOK_L].yp), this._onHookLHit(), !1 === s_oGame.getEGuard() && playSound("punch_left", 1, !1));
		2 === b && s_oGame.reduceStamina(s_aSt_Decrese[HOOK_L]);
		b++;
		b > s_aBw_Frame[HOOK_L] - 1 && (q[0].setVisible(!0), this.changeState("idle")
			// s_oGame.setPBlocked(!1), 
            // s_oGame.setPIsPunching(!1), s_oInterface.setGuardButVisibilty(!0)
            )
	};
	this._animUppercut = function() {
		0 === b ? w[0].setVisible(!0) : (w[b - 1].setVisible(!1), w[b].setVisible(!0));
		b === s_aFrameHit[UPPERCUT] && (s_oGame.playParticle(PARTICLE_OFFSET_PLAYER[UPPERCUT].xp, PARTICLE_OFFSET_PLAYER[UPPERCUT].yp), this._onUppercutHit(), !1 === s_oGame.getEGuard() && playSound("uppercut", 1, !1));
		2 === b && s_oGame.reduceStamina(s_aSt_Decrese[UPPERCUT]);
		b++;
		b > s_aBw_Frame[UPPERCUT] - 1 && (q[0].setVisible(!0), this.changeState("idle")
			// s_oGame.setPBlocked(!1),
            //  s_oGame.setPIsPunching(!1), s_oInterface.setGuardButVisibilty(!0)
             )
	};
	this._animGetPunched = function() {
		0 === b ? x[0].setVisible(!0) : (x[b - 1].setVisible(!1), x[b].setVisible(!0));
		b++;
		b > s_aBw_Frame[GETPUNCHED] - 1 && (q[0].setVisible(!0), this.changeState("idle")
        // s_oGame.setPBlocked(!1),
        //  s_oInterface.setGuardButVisibilty(!0)
         )
	};
	this._animKo = function() {
		0 === b ? (s_oInterface.setGuardButVisibilty(!1), y[0].setVisible(!0)) : (y[b - 1].setVisible(!1), y[b].setVisible(!0));
		8 === b && playSound("falling", 1, !1);
		b++;
		b > s_aBw_Frame[KO] - 1 && s_oGame.playerKo()
	};
	this.changeState = function(F) {
		F === GUARD && k[0].setVisible(!0);
		"get_punched" === F && x[0].setVisible(!0);
		"ko" === F && y[0].setVisible(!0);
		F === IDLE && q[0].setVisible(!0);
		switch (h) {
			case IDLE:
				for (var z = 0; z < s_aBw_Frame[IDLE]; z++) q[z].setVisible(!1);
				a = 1;
				break;
			case GUARD:
				for (z = 0; z < s_aBw_Frame[GUARD]; z++) k[z].setVisible(!1);
				a = 1;
				break;
			case JAB:
				for (z = 0; z < s_aBw_Frame[JAB]; z++) t[z].setVisible(!1);
				a = 1;
				break;
			case HOOK_R:
				for (z = 0; z < s_aBw_Frame[HOOK_R]; z++) v[z].setVisible(!1);
				a =
					1;
				break;
			case HOOK_L:
				for (z = 0; z < s_aBw_Frame[HOOK_L]; z++) p[z].setVisible(!1);
				a = 1;
				break;
			case UPPERCUT:
				for (z = 0; z < s_aBw_Frame[UPPERCUT]; z++) w[z].setVisible(!1);
				a = 1;
				break;
			case GETPUNCHED:
				for (z = 0; z < s_aBw_Frame[GETPUNCHED]; z++) x[z].setVisible(!1);
				a = 1;
				break;
			case KO:
				for (z = 0; z < s_aBw_Frame[KO]; z++) y[z].setVisible(!1);
				a = 1
		}
		h = F;
		b = 0
	};
	this.moveGuard = function() {
		d.setTween({
			y: d.getY() + 30
		}, 100, function() {
			d.setTween({
				y: d.getY() - 30
			}, 100)
		})
	};
	this.setVisible = function(F) {
		d.setVisible(F)
	};
	this.getMaxIndex = function() {
		return m
	};
	this.playAllAnim = function() {
		switch (h) {
			case IDLE:
				b < s_aBw_Frame[IDLE] - 1 ? (0 === b ? q[0].setVisible(!0) : (q[b - 1].setVisible(!1), q[b].setVisible(!0)), b++) : (b = 0, this.changeState(GUARD));
				break;
			case GUARD:
				b < s_aBw_Frame[GUARD] - 1 ? (0 === b ? k[0].setVisible(!0) : (k[b - 1].setVisible(!1), k[b].setVisible(!0)), b++) : (b = 0, this.changeState(JAB));
				break;
			case JAB:
				b < s_aBw_Frame[JAB] - 1 ? (0 === b ? t[0].setVisible(!0) : (t[b - 1].setVisible(!1), t[b].setVisible(!0)), b++) : (b = 0, this.changeState(HOOK_R));
				break;
			case HOOK_R:
				b < s_aBw_Frame[HOOK_R] -
					1 ? (0 === b ? v[0].setVisible(!0) : (v[b - 1].setVisible(!1), v[b].setVisible(!0)), b++) : (b = 0, this.changeState(HOOK_L));
				break;
			case HOOK_L:
				b < s_aBw_Frame[HOOK_L] - 1 ? (0 === b ? p[0].setVisible(!0) : (p[b - 1].setVisible(!1), p[b].setVisible(!0)), b++) : (b = 0, this.changeState(UPPERCUT));
				break;
			case UPPERCUT:
				b < s_aBw_Frame[UPPERCUT] - 1 ? (0 === b ? w[0].setVisible(!0) : (w[b - 1].setVisible(!1), w[b].setVisible(!0)), b++) : (b = 0, this.changeState(GETPUNCHED));
				break;
			case GETPUNCHED:
				b < s_aBw_Frame[GETPUNCHED] - 1 ? (0 === b ? x[0].setVisible(!0) : (x[b - 1].setVisible(!1),
					x[b].setVisible(!0)), b++) : (b = 0, this.changeState(KO));
				break;
			case KO:
				b < s_aBw_Frame[KO] - 1 ? (0 === b ? y[0].setVisible(!0) : (y[b - 1].setVisible(!1), y[b].setVisible(!0)), b++) : (s_oGame.onAllAnimPlayed(), this.changeState(IDLE))
		}
	};
	this.update = function() {
		switch (h) {
			case IDLE:
				a !== IDLE_DELAY || s_oGame.getKoE() ? a++ : (a = 0, this._animIdle());
				break;
			case GUARD:
				a === IDLE_DELAY ? (a = 0, this._animGuard()) : a++;
				break;
			case JAB:
				a !== IDLE_DELAY || s_oGame.getKoE() ? a++ : (a = 0, this._animJab());
				break;
			case HOOK_R:
				a !== IDLE_DELAY || s_oGame.getKoE() ?
					a++ : (a = 0, this._animHookR());
				break;
			case HOOK_L:
				a !== IDLE_DELAY || s_oGame.getKoE() ? a++ : (a = 0, this._animHookL());
				break;
			case UPPERCUT:
				a !== IDLE_DELAY || s_oGame.getKoE() ? a++ : (a = 0, this._animUppercut());
				break;
			case GETPUNCHED:
				a === IDLE_DELAY && 0 < PLAYER_KO && !s_oGame.getKoE() ? (a = 0, this._animGetPunched()) : a++;
				break;
			case KO:
				a === IDLE_DELAY ? (a = 0, this._animKo()) : a++
		}
	};
	this._init(c, g)
}

function CEnemy(c, g) {
	var a = !1,
		b = 1,
		m, h = 0,
		d = 1,
		q = "idle",
		k, t, v, p, w, x, y, F, z, r, e = ["jab", "jab", "hook_l", "hook_r", "uppercut"];
	this._init = function(E, H) {
		k = new CContainer(E, H);
		if (0 === s_iPlayerSelected) {
			v = [];
			for (var u, l = 0; l < s_aBb_En_Frame[IDLE]; l++) {
				u = "bb_en_idle_" + l;
				u = s_oSpriteLibrary.getSprite(u);
				var C = createBitmap(u);
				v[l] = new CChild(0, 0, C, k);
				v[l].setVisible(!1);
				v[l].setRegX(u.width / 2);
				v[l].setRegY(u.height);
				k.addChild(v[l])
			}
			v[0].setVisible(!0);
			w = [];
			for (l = 0; l < s_aBb_En_Frame[JAB]; l++) u = "bb_en_jab_" + l, u = s_oSpriteLibrary.getSprite(u),
				C = createBitmap(u), w[l] = new CChild(0, 0, C, k), w[l].setVisible(!1), w[l].setRegX(u.width / 2 + ANIMATION_OFFSET_ENEMY[JAB].xb), w[l].setRegY(u.height + ANIMATION_OFFSET_ENEMY[JAB].yb), k.addChild(w[l]);
			x = [];
			for (l = 0; l < s_aBb_En_Frame[HOOK_R]; l++) u = "bb_en_hook_r_" + l, u = s_oSpriteLibrary.getSprite(u), C = createBitmap(u), x[l] = new CChild(0, 0, C, k), x[l].setVisible(!1), x[l].setRegX(u.width / 2 + ANIMATION_OFFSET_ENEMY[HOOK_R].xb), x[l].setRegY(u.height), k.addChild(x[l]);
			y = [];
			for (l = 0; l < s_aBb_En_Frame[HOOK_L]; l++) u = "bb_en_hook_l_" +
				l, u = s_oSpriteLibrary.getSprite(u), C = createBitmap(u), y[l] = new CChild(0, 0, C, k), y[l].setVisible(!1), y[l].setRegX(u.width / 2 + ANIMATION_OFFSET_ENEMY[HOOK_L].xb), y[l].setRegY(u.height), k.addChild(y[l]);
			F = [];
			for (l = 0; l < s_aBb_En_Frame[UPPERCUT]; l++) u = "bb_en_uppercut_" + l, u = s_oSpriteLibrary.getSprite(u), C = createBitmap(u), F[l] = new CChild(0, 0, C, k), F[l].setVisible(!1), F[l].setRegX(u.width / 2 + ANIMATION_OFFSET_ENEMY[UPPERCUT].xb), F[l].setRegY(u.height), k.addChild(F[l]);
			p = [];
			for (l = 0; l < s_aBb_En_Frame[GUARD]; l++) u = "bb_en_guard_" +
				l, u = s_oSpriteLibrary.getSprite(u), C = createBitmap(u), p[l] = new CChild(0, 0, C, k), p[l].setVisible(!1), p[l].setRegX(u.width / 2), p[l].setRegY(u.height), k.addChild(p[l]);
			z = [];
			for (l = 0; l < s_aBb_En_Frame[GETPUNCHED]; l++) u = "bb_en_get_punched_" + l, u = s_oSpriteLibrary.getSprite(u), C = createBitmap(u), z[l] = new CChild(0, 0, C, k), z[l].setVisible(!1), z[l].setRegX(u.width / 2 + ANIMATION_OFFSET_ENEMY[GETPUNCHED].xb), z[l].setRegY(u.height), k.addChild(z[l]);
			r = [];
			for (l = 0; l < s_aBb_En_Frame[KO]; l++) u = "bb_en_ko_" + l, u = s_oSpriteLibrary.getSprite(u),
				C = createBitmap(u), r[l] = new CChild(0, 0, C, k), r[l].setVisible(!1), r[l].setRegX(u.width / 2), r[l].setRegY(u.height), k.addChild(r[l])
		} else {
			v = [];
			for (l = 0; l < s_aBw_En_Frame[IDLE]; l++) u = "bw_en_idle_" + l, u = s_oSpriteLibrary.getSprite(u), C = createBitmap(u), v[l] = new CChild(0, 0, C, k), v[l].setVisible(!1), v[l].setRegX(u.width / 2), v[l].setRegY(u.height), k.addChild(v[l]);
			v[0].setVisible(!0);
			w = [];
			for (l = 0; l < s_aBw_En_Frame[JAB]; l++) u = "bw_en_jab_" + l, u = s_oSpriteLibrary.getSprite(u), C = createBitmap(u), w[l] = new CChild(0, 0, C, k), w[l].setVisible(!1),
				w[l].setRegX(u.width / 2 + ANIMATION_OFFSET_ENEMY[JAB].xb), w[l].setRegY(u.height + ANIMATION_OFFSET_ENEMY[JAB].yb), k.addChild(w[l]);
			x = [];
			for (l = 0; l < s_aBw_En_Frame[HOOK_R]; l++) u = "bw_en_hook_r_" + l, u = s_oSpriteLibrary.getSprite(u), C = createBitmap(u), x[l] = new CChild(0, 0, C, k), x[l].setVisible(!1), x[l].setRegX(u.width / 2 + ANIMATION_OFFSET_ENEMY[HOOK_R].xb), x[l].setRegY(u.height), k.addChild(x[l]);
			y = [];
			for (l = 0; l < s_aBw_En_Frame[HOOK_L]; l++) u = "bw_en_hook_l_" + l, u = s_oSpriteLibrary.getSprite(u), C = createBitmap(u), y[l] = new CChild(0,
				0, C, k), y[l].setVisible(!1), y[l].setRegX(u.width / 2 + ANIMATION_OFFSET_ENEMY[HOOK_L].xb), y[l].setRegY(u.height), k.addChild(y[l]);
			F = [];
			for (l = 0; l < s_aBw_En_Frame[UPPERCUT]; l++) u = "bw_en_uppercut_" + l, u = s_oSpriteLibrary.getSprite(u), C = createBitmap(u), F[l] = new CChild(0, 0, C, k), F[l].setVisible(!1), F[l].setRegX(u.width / 2 + ANIMATION_OFFSET_ENEMY[UPPERCUT].xb), F[l].setRegY(u.height), k.addChild(F[l]);
			p = [];
			for (l = 0; l < s_aBw_En_Frame[GUARD]; l++) u = "bw_en_guard_" + l, u = s_oSpriteLibrary.getSprite(u), C = createBitmap(u), p[l] =
				new CChild(0, 0, C, k), p[l].setVisible(!1), p[l].setRegX(u.width / 2), p[l].setRegY(u.height), k.addChild(p[l]);
			z = [];
			for (l = 0; l < s_aBw_En_Frame[GETPUNCHED]; l++) u = "bw_en_get_punched_" + l, u = s_oSpriteLibrary.getSprite(u), C = createBitmap(u), z[l] = new CChild(0, 0, C, k), z[l].setVisible(!1), z[l].setRegX(u.width / 2 + ANIMATION_OFFSET_ENEMY[GETPUNCHED].xb), z[l].setRegY(u.height), k.addChild(z[l]);
			r = [];
			for (l = 0; l < s_aBw_En_Frame[KO]; l++) u = "bw_en_ko_" + l, u = s_oSpriteLibrary.getSprite(u), C = createBitmap(u), r[l] = new CChild(0, 0, C, k),
				r[l].setVisible(!1), r[l].setRegX(u.width / 2), r[l].setRegY(u.height), k.addChild(r[l])
		}
		m = ENEMY_MAX_ACTION_TIME
	};
	this._animIdle = function() {
		0 === d ? (v[8].setVisible(!1), v[0].setVisible(!0)) : (v[d - 1].setVisible(!1), v[d].setVisible(!0));
		d++;
		d > s_aBb_En_Frame[IDLE] - 1 && (d = 0)
	};
	this._animGuard = function() {
		0 === d ? (p[9].setVisible(!1), p[0].setVisible(!0)) : (p[d - 1].setVisible(!1), p[d].setVisible(!0));
		d++;
		d > s_aBb_En_Frame[GUARD] - 1 && (d = 0)
	};
	this._animJab = function() {
		0 === d ? w[0].setVisible(!0) : (w[d - 1].setVisible(!1), w[d].setVisible(!0));
		d === s_aFrameHit[JAB] && (this._onJabHit(), !1 === s_oGame.getPGuard() && playSound("punch_left", 1, !1));
		d++;
		d > s_aBb_En_Frame[JAB] - 1 && (v[0].setVisible(!0), a = !1, this.changeState("idle"))
	};
	this._animHookR = function() {
		0 === d ? x[0].setVisible(!0) : (x[d - 1].setVisible(!1), x[d].setVisible(!0));
		d === s_aFrameHit[HOOK_R] && (this._onHookRHit(), !1 === s_oGame.getPGuard() && playSound("punch_right", 1, !1));
		d++;
		d > s_aBb_En_Frame[HOOK_R] - 1 && (v[0].setVisible(!0), a = !1, this.changeState("idle"))
	};
	this._animHookL = function() {
		0 === d ? y[0].setVisible(!0) :
			(y[d - 1].setVisible(!1), y[d].setVisible(!0));
		d === s_aFrameHit[HOOK_L] && (this._onHookLHit(), !1 === s_oGame.getPGuard() && playSound("punch_left", 1, !1));
		d++;
		d > s_aBb_En_Frame[HOOK_L] - 1 && (v[0].setVisible(!0), a = !1, this.changeState("idle"))
	};
	this._animUppercut = function() {
		0 === d ? F[0].setVisible(!0) : (F[d - 1].setVisible(!1), F[d].setVisible(!0));
		d === s_aFrameHit[UPPERCUT] && (this._onUppercutHit(), !1 === s_oGame.getPGuard() && playSound("uppercut", 1, !1));
		d++;
		d > s_aBb_En_Frame[UPPERCUT] - 1 && (v[0].setVisible(!0), a = !1, this.changeState("idle"))
	};
	this._animGetPunched = function() {
		0 === d ? (a = !0, z[0].setVisible(!0)) : (z[d - 1].setVisible(!1), z[d].setVisible(!0));
		d++;
		d > s_aBb_En_Frame[GETPUNCHED] - 1 && (a = !1, v[0].setVisible(!0), this.changeState("idle"))
	};
	this._animKo = function() {
		0 === d ? (a = !0, r[0].setVisible(!0)) : (r[d - 1].setVisible(!1), r[d].setVisible(!0));
		11 === d && playSound("falling", 1, !1);
		d++;
		d > s_aBb_En_Frame[KO] - 1 && s_oGame.enemyKo()
	};
	this._onJabHit = function() {
		s_oGame.hitPlayer(s_aDamage[JAB])
	};
	this._onHookRHit = function() {
		s_oGame.hitPlayer(s_aDamage[HOOK_R])
	};
	this._onHookLHit = function() {
		s_oGame.hitPlayer(s_aDamage[HOOK_L])
	};
	this._onUppercutHit = function() {
		s_oGame.hitPlayer(s_aDamage[UPPERCUT])
	};
	this.changeState = function(E) {
		"get_punched" === E && z[0].setVisible(!0);
		"ko" === E && r[0].setVisible(!0);
		switch (q) {
			case IDLE:
				for (var H = 0; H < s_aBb_En_Frame[IDLE]; H++) v[H].setVisible(!1);
				b = 1;
				break;
			case GUARD:
				for (H = 0; H < s_aBb_En_Frame[GUARD]; H++) p[H].setVisible(!1);
				b = 1;
				break;
			case JAB:
				for (H = 0; H < s_aBb_En_Frame[JAB]; H++) w[H].setVisible(!1);
				b = 1;
				break;
			case HOOK_R:
				for (H = 0; H < s_aBb_En_Frame[HOOK_R]; H++) x[H].setVisible(!1);
				b = 1;
				break;
			case HOOK_L:
				for (H = 0; H < s_aBb_En_Frame[HOOK_L]; H++) y[H].setVisible(!1);
				b = 1;
				break;
			case UPPERCUT:
				for (H = 0; H < s_aBb_En_Frame[UPPERCUT]; H++) F[H].setVisible(!1);
				b = 1;
				break;
			case GETPUNCHED:
				for (H = 0; H < s_aBb_En_Frame[GETPUNCHED]; H++) z[H].setVisible(!1);
				b = 1;
				break;
			case KO:
				for (H = 0; H < s_aBb_En_Frame[KO]; H++) r[H].setVisible(!1);
				b = 1
		}
		q = E;
		d = 0
	};
	this._init(c, g);
	this.moveGuard = function() {
		k.setTween({
			y: k.getY() + 30
		}, 100, function() {
			k.setTween({
				y: k.getY() - 30
			}, 100)
		})
	};
	this._action = function() {
		Math.floor(100 * Math.random() +
			1) > ENEMY_ATTACK_OCCURR ? (this.changeState("guard"), s_oGame.setEGuard(!0), this._guardRelease()) : this.changeState(e[Math.floor(5 * Math.random())])
	};
	this._guardRelease = function() {
		setTimeout(function() {
			null === s_oGame || s_oGame.getKoE() || (t.changeState("idle"), a = !1, s_oGame.setEGuard(!1))
		}, Math.floor(Math.random() * ENEMY_MAX_GUARD_TIME + ENEMY_MIN_GUARD_TIME))
	};
	this.setVisible = function(E) {
		k.setVisible(E)
	};
	this.setIsActing = function(E) {
		a = E
	};
	this.playAllAnim = function() {
		switch (q) {
			case IDLE:
				d < s_aBb_En_Frame[IDLE] -
					1 ? (0 === d ? v[0].setVisible(!0) : (v[d - 1].setVisible(!1), v[d].setVisible(!0)), d++) : (d = 0, this.changeState(GUARD));
				break;
			case GUARD:
				d < s_aBb_En_Frame[GUARD] - 1 ? (0 === d ? p[0].setVisible(!0) : (p[d - 1].setVisible(!1), p[d].setVisible(!0)), d++) : (d = 0, this.changeState(JAB));
				break;
			case JAB:
				d < s_aBb_En_Frame[JAB] - 1 ? (0 === d ? w[0].setVisible(!0) : (w[d - 1].setVisible(!1), w[d].setVisible(!0)), d++) : (d = 0, this.changeState(HOOK_R));
				break;
			case HOOK_R:
				d < s_aBb_En_Frame[HOOK_R] - 1 ? (0 === d ? x[0].setVisible(!0) : (x[d - 1].setVisible(!1), x[d].setVisible(!0)),
					d++) : (d = 0, this.changeState(HOOK_L));
				break;
			case HOOK_L:
				d < s_aBb_En_Frame[HOOK_L] - 1 ? (0 === d ? y[0].setVisible(!0) : (y[d - 1].setVisible(!1), y[d].setVisible(!0)), d++) : (d = 0, this.changeState(UPPERCUT));
				break;
			case UPPERCUT:
				d < s_aBb_En_Frame[UPPERCUT] - 1 ? (0 === d ? F[0].setVisible(!0) : (F[d - 1].setVisible(!1), F[d].setVisible(!0)), d++) : (d = 0, this.changeState(GETPUNCHED));
				break;
			case GETPUNCHED:
				d < s_aBb_En_Frame[GETPUNCHED] - 1 ? (0 === d ? z[0].setVisible(!0) : (z[d - 1].setVisible(!1), z[d].setVisible(!0)), d++) : (d = 0, this.changeState(KO));
				break;
			case KO:
				d < s_aBb_En_Frame[KO] - 1 ? (0 === d ? r[0].setVisible(!0) : (r[d - 1].setVisible(!1), r[d].setVisible(!0)), d++) : (s_oGame.onAllAnimPlayed(), this.changeState(IDLE))
		}
	};
	this.update = function() {
		a || (h += s_iTimeElaps);
		h > m && !a && !s_oGame.getKoP() && !s_oGame.getKoE() && (h = 0, a = !0, m = Math.random() * (ENEMY_MAX_ACTION_TIME - ENEMY_MIN_ACTION_TIME) + ENEMY_MIN_ACTION_TIME, this._action());
		switch (q) {
			case IDLE:
				b !== IDLE_DELAY || s_oGame.getKoP() ? b++ : (b = 0, this._animIdle());
				break;
			case GUARD:
				b !== IDLE_DELAY || s_oGame.getKoP() ? b++ :
					(b = 0, this._animGuard());
				break;
			case JAB:
				b !== IDLE_DELAY || s_oGame.getKoP() ? b++ : (b = 0, this._animJab());
				break;
			case HOOK_R:
				b !== IDLE_DELAY || s_oGame.getKoP() ? b++ : (b = 0, this._animHookR());
				break;
			case HOOK_L:
				b !== IDLE_DELAY || s_oGame.getKoP() ? b++ : (b = 0, this._animHookL());
				break;
			case UPPERCUT:
				b !== IDLE_DELAY || s_oGame.getKoP() ? b++ : (b = 0, this._animUppercut());
				break;
			case GETPUNCHED:
				b !== IDLE_DELAY || s_oGame.getKoP() ? b++ : (b = 0, this._animGetPunched());
				break;
			case KO:
				b === IDLE_DELAY ? (b = 0, this._animKo()) : b++
		}
		t = this
	}
}

function CSelectCharacter() {
	var c, g, a, b, m, h, d, q, k, t, v, p, w, x, y, F = null,
		z = null;
	this._init = function() {
		a = CANVAS_WIDTH / 2;
		b = 60;
		d = createBitmap(s_oSpriteLibrary.getSprite("bg_pselection"));
		s_oStage.addChild(d);
		t = createBitmap(s_oSpriteLibrary.getSprite("logo_text"));
		t.regX = 165;
		t.x = a;
		t.y = b;
		s_oStage.addChild(t);
		var r = s_oSpriteLibrary.getSprite("bw_selection");
		q = new CSelectButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 600, r, !0);
		q.addEventListener(ON_MOUSE_UP, this._onButChooseWhite, this);
		r = s_oSpriteLibrary.getSprite("bb_selection");
		k = new CSelectButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 300, r, !0);
		k.addEventListener(ON_MOUSE_UP, this._onButChooseBlack, this);
		v = new createjs.BitmapText(TEXT_BOXERW, s_oSpriteSheetBoxing);
		v.regX = v.getBounds().width / 2;
		v.regY = v.getBounds().height / 2;
		v.x = CANVAS_WIDTH / 2 + 50;
		v.y = 463;
		s_oStage.addChild(v);
		p = new createjs.BitmapText(TEXT_BOXERB, s_oSpriteSheetBoxing);
		p.regX = p.getBounds().width / 2;
		p.regY = p.getBounds().height / 2;
		p.x = CANVAS_WIDTH / 2 + 65;
		p.y = CANVAS_HEIGHT - 200;
		s_oStage.addChild(p);
		if (!1 === DISABLE_SOUND_MOBILE ||
			!1 === s_bMobile) r = s_oSpriteLibrary.getSprite("audio_icon"), m = CANVAS_WIDTH - 40, h = 50, x = new CToggle(m, h, r, s_bAudioActive, s_oStage), x.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
		r = window.document;
		var e = r.documentElement;
		F = e.requestFullscreen || e.mozRequestFullScreen || e.webkitRequestFullScreen || e.msRequestFullscreen;
		z = r.exitFullscreen || r.mozCancelFullScreen || r.webkitExitFullscreen || r.msExitFullscreen;
		!1 === ENABLE_FULLSCREEN && (F = !1);
		F && screenfull.enabled && (r = s_oSpriteLibrary.getSprite("but_fullscreen"),
			c = r.width / 4 + 10, g = 50, y = new CToggle(c, g, r, s_bFullscreen, s_oStage), y.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
		this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
		w = createBitmap(s_oSpriteLibrary.getSprite("fade"));
		s_oStage.addChild(w);
		createjs.Tween.get(w).to({
			alpha: 0
		}, 500).call(function() {
			w.visible = !1
		})
	};
	this.unload = function() {
		F && screenfull.enabled && y.unload();
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) x.unload(), x = null;
		s_oStage.removeAllChildren();
		s_oSelectCharacter = null
	};
	this.refreshButtonPos =
		function(r, e) {
			!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || x.setPosition(m - r, h + e);
			F && screenfull.enabled && y.setPosition(c + s_iOffsetX, g + s_iOffsetY);
			t.y = e + b
		};
	this._onButChooseWhite = function() {
		s_iPlayerSelected = 0;
		this.unload();
		setTimeout(function() {
			s_oMain.gotoGame()
		}, 200)
	};
	this._onButChooseBlack = function() {
		s_iPlayerSelected = 1;
		this.unload();
		setTimeout(function() {
			s_oMain.gotoGame()
		}, 200)
	};
	this._onAudioToggle = function() {
		Howler.mute(s_bAudioActive);
		s_bAudioActive = !s_bAudioActive
	};
	this.resetFullscreenBut = function() {
		F &&
			screenfull.enabled && y.setActive(s_bFullscreen)
	};
	this._onFullscreenRelease = function() {
		s_bFullscreen ? z.call(window.document) : F.call(window.document.documentElement);
		sizeHandler()
	};
	s_oSelectCharacter = this;
	this._init()
}
var s_oSelectCharacter = null;

function CContainer(c, g) {
	var a = !0,
		b = 0,
		m = 0,
		h = 0,
		d = 1,
		q = 1,
		k = 1,
		t;
	this._init = function(p, w) {
		b = p;
		m = w;
		t = []
	};
	this.addChild = function() {
		for (var p = 0; p < arguments.length; p++) s_oStage.addChild(arguments[p].getChild()), t.push(arguments[p]), arguments[p].setAllParameter(this)
	};
	this.removeChild = function() {
		for (var p = 0; p < arguments.length; p++)
			for (var w = 0; w < t.length; w++) arguments[p] === t[w] && (t.splice(1, w), s_oStage.removeChild(arguments[p].getChild()))
	};
	this.removeAllChildren = function() {
		for (var p = 0; p < t.length; p++) s_oStage.removeChild(t[p].getChild())
	};
	this.setX = function(p) {
		b = p;
		for (p = 0; p < t.length; p++) t[p].getChild().x = t[p].getX() + b
	};
	this.getX = function() {
		return b
	};
	this.setY = function(p) {
		m = p;
		for (p = 0; p < t.length; p++) t[p].getChild().y = t[p].getY() + m
	};
	this.getY = function() {
		return m
	};
	this.setScaleX = function(p) {
		d = p;
		for (p = 0; p < t.length; p++) {
			var w = t[p].getChild().regX,
				x = t[p].getChild().x - b;
			t[p].setRegX(x);
			t[p].getChild().scaleX = t[p].getScaleX() * d;
			t[p].setRegX(w)
		}
	};
	this.getScaleX = function() {
		return d
	};
	this.setScaleY = function(p) {
		q = p;
		for (p = 0; p < t.length; p++) t[p].getChild().scaleY =
			t[p].getScaleY() * q
	};
	this.getScaleY = function() {
		return q
	};
	this.setAlpha = function(p) {
		k = p;
		for (p = 0; p < t.length; p++) t[p].getChild().alpha = t[p].getAlpha() * k
	};
	this.getAlpha = function() {
		return k
	};
	this.setVisible = function(p) {
		a = p;
		for (p = 0; p < t.length; p++) t[p].getChild().visible = t[p].getVisible() && a
	};
	this.getVisible = function() {
		return a
	};
	this.setTween = function(p, w, x) {
		for (var y = 0; y < t.length; y++) {
			for (var F = p, z = Object.keys(F).length, r = 0; r < z; r++) switch (Object.keys(F)[r]) {
				case "x":
					b = p.x;
					F.x += t[y].getX();
					break;
				case "y":
					m =
						p.y;
					F.y += t[y].getY();
					break;
				case "scaleX":
					d = p.scaleX;
					F.scaleX *= t[y].getScaleX();
					break;
				case "scaleY":
					q = p.scaleY;
					F.scaleY *= t[y].getScaleY();
					break;
				case "alpha":
					k = p.alpha, F.alpha *= t[y].getAlpha()
			}
			createjs.Tween.get(t[y].getChild()).to(F, w).call(function() {
				"function" === typeof x && v._onTweenFinish(x)
			})
		}
	};
	this._onTweenFinish = function(p) {
		h++;
		h === t.length && (h = 0, p())
	};
	this._testTween = function() {
		for (var p = 0; p < t.length; p++) {
			var w = b - t[p].getChild().x;
			t[p].setRegX(w);
			t[1].setX(75);
			createjs.Tween.get(t[p].getChild()).to({
					scaleX: .5
				},
				3E3)
		}
	};
	var v = this;
	this._init(c, g)
}

function CChild(c, g, a, b) {
	var m = !0,
		h, d, q, k, t, v, p, w, x;
	this._init = function(y, F, z, r) {
		m = !0;
		h = y;
		d = F;
		k = q = 0;
		p = v = t = 1;
		w = z;
		x = r;
		"undefined" !== typeof x ? (w.x = x.getX() + h, w.y = x.getY() + d, w.scaleX = x.getScaleX() * t, w.scaleY = x.getScaleY() * v, x.addChild(this)) : (w.x = h, w.y = d)
	};
	this.setAllParameter = function(y) {
		x = y;
		w.x = x.getX() + h;
		w.y = x.getY() + d;
		w.scaleX = x.getScaleX() * t;
		w.scaleY = x.getScaleY() * v;
		w.regX = q;
		w.regY = k;
		w.alpha = p;
		w.visible = m
	};
	this.setX = function(y) {
		h = y;
		w.x = "undefined" !== typeof x ? x.getX() + h : h
	};
	this.getX = function() {
		return h
	};
	this.setY = function(y) {
		d = y;
		w.y = "undefined" !== typeof x ? x.getY() + d : d
	};
	this.getY = function() {
		return d
	};
	this.setRegX = function(y) {
		q = y;
		w.regX = q
	};
	this.getRegX = function() {
		return q
	};
	this.setRegY = function(y) {
		k = y;
		w.regY = k
	};
	this.getRegY = function() {
		return k
	};
	this.setScaleX = function(y) {
		t = y;
		w.scaleX = "undefined" !== typeof x ? x.getScaleX() * t : t
	};
	this.getScaleX = function() {
		return t
	};
	this.setScaleY = function(y) {
		v = y;
		w.scaleY = "undefined" !== typeof x ? x.getScaleY() * v : v
	};
	this.getScaleY = function() {
		return v
	};
	this.setAlpha = function(y) {
		p =
			y;
		w.alpha = "undefined" !== typeof x ? x.getAlpha() * p : p
	};
	this.getAlpha = function() {
		return p
	};
	this.setVisible = function(y) {
		m = y;
		w.visible = "undefined" !== typeof x ? x.getVisible && m : m
	};
	this.getVisible = function() {
		return m
	};
	this.getChild = function() {
		return w
	};
	this._init(c, g, a, b)
}

function CBitmapFont() {
	this._init = function() {
		s_oSpriteSheetBoxing = new createjs.SpriteSheet({
			images: ["./sprites/boxer_font.png"],
			frames: [
				[203, 100, 7, 5, 0, -3, 79],
				[142, 206, 13, 49, 0, 0, 14],
				[376, 196, 23, 22, 0, 0, 9],
				[349, 0, 45, 49, 0, -1, 14],
				[0, 0, 29, 59, 0, 0, 9],
				[211, 0, 44, 50, 0, 0, 13],
				[275, 197, 38, 38, 0, 2, 19],
				[413, 196, 12, 22, 0, 0, 9],
				[29, 0, 19, 59, 0, 0, 9],
				[48, 0, 19, 59, 0, -1, 9],
				[313, 196, 29, 28, 0, 0, 13],
				[237, 198, 38, 38, 0, 2, 19],
				[399, 196, 14, 22, 0, 0, 49],
				[455, 196, 17, 11, 0, 0, 33],
				[425, 196, 14, 14, 0, -1, -20],
				[67, 0, 18, 59, 0, 0, 9],
				[90, 157, 30, 49, 0, 0,
					14
				],
				[489, 98, 20, 49, 0, 0, 14],
				[406, 147, 28, 49, 0, 0, 14],
				[330, 49, 31, 49, 0, 0, 14],
				[105, 59, 33, 49, 0, 0, 14],
				[178, 155, 29, 49, 0, 0, 14],
				[350, 147, 28, 49, 0, 0, 14],
				[279, 98, 30, 49, 0, 0, 14],
				[309, 98, 30, 49, 0, 0, 14],
				[236, 149, 29, 49, 0, 0, 14],
				[223, 204, 14, 43, 0, -1, 20],
				[197, 0, 14, 51, 0, 0, 20],
				[189, 204, 34, 47, 0, 0, 18],
				[342, 196, 34, 24, 0, 0, 27],
				[155, 206, 34, 47, 0, 0, 18],
				[322, 147, 28, 49, 0, 0, 14],
				[394, 0, 44, 49, 0, -1, 14],
				[339, 98, 30, 49, 0, 0, 14],
				[0, 108, 31, 49, 0, 0, 14],
				[93, 108, 31, 49, 0, 0, 14],
				[124, 108, 31, 49, 0, 0, 14],
				[434, 147, 27, 49, 0, -1, 14],
				[79, 206, 25, 49, 0, 0, 14],
				[217,
					100, 31, 49, 0, -1, 14
				],
				[369, 98, 30, 49, 0, 0, 14],
				[488, 147, 20, 49, 0, -1, 14],
				[461, 147, 27, 49, 0, 0, 14],
				[267, 49, 32, 49, 0, 0, 14],
				[53, 206, 26, 49, 0, 0, 14],
				[438, 0, 38, 49, 0, 0, 14],
				[423, 49, 31, 49, 0, 0, 14],
				[429, 98, 30, 49, 0, 0, 14],
				[149, 157, 29, 49, 0, 0, 14],
				[135, 0, 31, 57, 0, 0, 14],
				[459, 98, 30, 49, 0, 0, 14],
				[120, 157, 29, 49, 0, 0, 14],
				[171, 57, 32, 49, 0, -1, 14],
				[186, 106, 31, 49, 0, 0, 14],
				[155, 106, 31, 49, 0, 0, 14],
				[302, 0, 47, 49, 0, 0, 14],
				[38, 59, 34, 49, 0, 0, 14],
				[138, 57, 33, 49, 0, 0, 14],
				[378, 147, 28, 49, 0, 0, 14],
				[103, 0, 16, 59, 0, 0, 9],
				[85, 0, 18, 59, 0, 0, 9],
				[119, 0, 16, 59, 0, 0, 9],
				[472, 196, 34, 10, 0, 0, 63],
				[439, 196, 16, 13, 0, 1, 2],
				[0, 157, 30, 49, 0, 0, 14],
				[248, 99, 31, 49, 0, 0, 14],
				[454, 49, 31, 49, 0, 0, 14],
				[361, 49, 31, 49, 0, 0, 14],
				[485, 49, 27, 49, 0, -1, 14],
				[104, 206, 25, 49, 0, 0, 14],
				[392, 49, 31, 49, 0, -1, 14],
				[30, 157, 30, 49, 0, 0, 14],
				[129, 206, 13, 49, 0, 0, 14],
				[0, 206, 27, 49, 0, 0, 14],
				[203, 51, 32, 49, 0, 0, 14],
				[27, 206, 26, 49, 0, 0, 14],
				[0, 59, 38, 49, 0, 0, 14],
				[31, 108, 31, 49, 0, 0, 14],
				[399, 98, 30, 49, 0, 0, 14],
				[207, 155, 29, 49, 0, 0, 14],
				[166, 0, 31, 57, 0, 0, 14],
				[60, 157, 30, 49, 0, 0, 14],
				[265, 148, 29, 49, 0, 0, 14],
				[235, 50, 32, 49, 0, -1, 14],
				[62, 108, 31, 49,
					0, 0, 14
				],
				[299, 49, 31, 49, 0, 0, 14],
				[255, 0, 47, 49, 0, 0, 14],
				[476, 0, 34, 49, 0, 0, 14],
				[72, 59, 33, 49, 0, 0, 14],
				[294, 147, 28, 49, 0, 0, 14]
			],
			animations: {
				" ": 0,
				"!": 1,
				'"': 2,
				"#": 3,
				$: 4,
				"%": 5,
				"\u20ac": 6,
				"'": 7,
				"(": 8,
				")": 9,
				"*": 10,
				"+": 11,
				",": 12,
				"-": 13,
				".": 14,
				"/": 15,
				0: 16,
				1: 17,
				2: 18,
				3: 19,
				4: 20,
				5: 21,
				6: 22,
				7: 23,
				8: 24,
				9: 25,
				":": 26,
				";": 27,
				"<": 28,
				"=": 29,
				">": 30,
				"?": 31,
				"@": 32,
				A: 33,
				B: 34,
				C: 35,
				D: 36,
				E: 37,
				F: 38,
				G: 39,
				H: 40,
				I: 41,
				J: 42,
				K: 43,
				L: 44,
				M: 45,
				N: 46,
				O: 47,
				P: 48,
				Q: 49,
				R: 50,
				S: 51,
				T: 52,
				U: 53,
				V: 54,
				W: 55,
				X: 56,
				Y: 57,
				Z: 58,
				"[": 59,
				"//": 60,
				"]": 61,
				_: 62,
				"\u00ec": 63,
				a: 64,
				b: 65,
				c: 66,
				d: 67,
				e: 68,
				f: 69,
				g: 70,
				h: 71,
				i: 72,
				j: 73,
				k: 74,
				l: 75,
				m: 76,
				n: 77,
				o: 78,
				p: 79,
				q: 80,
				r: 81,
				s: 82,
				t: 83,
				u: 84,
				v: 85,
				w: 86,
				x: 87,
				y: 88,
				z: 89
			}
		})
	};
	this._init()
}
var s_oSpriteSheetBoxing;

function CCreditsPanel() {
	var c, g, a, b, m, h;
	this._init = function() {
		_oBgMenu = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
		s_oStage.addChild(_oBgMenu);
		m = createBitmap(s_oSpriteLibrary.getSprite("hit_area"));
		a = m.on("click", function() {});
		s_oStage.addChild(m);
		var d = s_oSpriteLibrary.getSprite("but_exit");
		c = CANVAS_WIDTH - d.height / 2 - 10;
		g = d.height / 2 + 10;
		b = new CGfxButton(c, g, d, s_oStage);
		b.addEventListener(ON_MOUSE_UP, this.unload, this);
		d = s_oSpriteLibrary.getSprite("logo_credits");
		_oLogo = createBitmap(d);
		_oLogo.regX =
			d.width / 2;
		_oLogo.regY = d.height / 2;
		_oLogo.x = CANVAS_WIDTH / 2;
		_oLogo.y = 540;
		s_oStage.addChild(_oLogo);
		h = new createjs.BitmapText("www.codethislab.com", s_oSpriteSheetBoxing);
		h.regX = h.getBounds().width / 2;
		h.regY = h.getBounds().height / 2;
		h.x = CANVAS_WIDTH / 2;
		h.y = 630;
		h.scaleX = h.scaleY = .8;
		s_oStage.addChild(h);
		this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
	};
	this.unload = function() {
		m.off("click", a);
		b.unload();
		b = null;
		s_oStage.removeChild(_oBgMenu);
		s_oStage.removeChild(m);
		s_oStage.removeChild(_oLogo);
		s_oStage.removeChild(h);
		s_oCreditsPanel = null
	};
	this.refreshButtonPos = function(d, q) {
		b.setPosition(c - d, g + q)
	};
	s_oCreditsPanel = this;
	this._init()
}
var s_oCreditsPanel = null;