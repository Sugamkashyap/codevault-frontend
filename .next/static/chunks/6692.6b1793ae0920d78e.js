"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6692],{6692:function(e,t,r){function wordRegexp(e){return RegExp("^(("+e.join(")|(")+"))\\b")}r.r(t),r.d(t,{webIDL:function(){return D}});var n=["Clamp","Constructor","EnforceRange","Exposed","ImplicitThis","Global","PrimaryGlobal","LegacyArrayClass","LegacyUnenumerableNamedProperties","LenientThis","NamedConstructor","NewObject","NoInterfaceObject","OverrideBuiltins","PutForwards","Replaceable","SameObject","TreatNonObjectAsNull","TreatNullAs","EmptyString","Unforgeable","Unscopeable"],a=wordRegexp(n),i=["unsigned","short","long","unrestricted","float","double","boolean","byte","octet","Promise","ArrayBuffer","DataView","Int8Array","Int16Array","Int32Array","Uint8Array","Uint16Array","Uint32Array","Uint8ClampedArray","Float32Array","Float64Array","ByteString","DOMString","USVString","sequence","object","RegExp","Error","DOMException","FrozenArray","any","void"],o=wordRegexp(i),c=["attribute","callback","const","deleter","dictionary","enum","getter","implements","inherit","interface","iterable","legacycaller","maplike","partial","required","serializer","setlike","setter","static","stringifier","typedef","optional","readonly","or"],l=wordRegexp(c),m=["true","false","Infinity","NaN","null"],u=wordRegexp(m),s=wordRegexp(["callback","dictionary","enum","interface"]),f=wordRegexp(["typedef"]),d=/^[:<=>?]/,p=/^-?([1-9][0-9]*|0[Xx][0-9A-Fa-f]+|0[0-7]*)/,y=/^-?(([0-9]+\.[0-9]*|[0-9]*\.[0-9]+)([Ee][+-]?[0-9]+)?|[0-9]+[Ee][+-]?[0-9]+)/,b=/^_?[A-Za-z][0-9A-Z_a-z-]*/,g=/^_?[A-Za-z][0-9A-Z_a-z-]*(?=\s*;)/,h=/^"[^"]*"/,A=/^\/\*.*?\*\//,k=/^\/\*.*/,w=/^.*?\*\//;let D={name:"webidl",startState:function(){return{inComment:!1,lastToken:"",startDef:!1,endDef:!1}},token:function(e,t){var r=function(e,t){if(e.eatSpace())return null;if(t.inComment)return e.match(w)?t.inComment=!1:e.skipToEnd(),"comment";if(e.match("//"))return e.skipToEnd(),"comment";if(e.match(A))return"comment";if(e.match(k))return t.inComment=!0,"comment";if(e.match(/^-?[0-9\.]/,!1)&&(e.match(p)||e.match(y)))return"number";if(e.match(h))return"string";if(t.startDef&&e.match(b))return"def";if(t.endDef&&e.match(g))return t.endDef=!1,"def";if(e.match(l))return"keyword";if(e.match(o)){var r=t.lastToken,n=(e.match(/^\s*(.+?)\b/,!1)||[])[1];return":"===r||"implements"===r||"implements"===n||"="===n?"builtin":"type"}return e.match(a)?"builtin":e.match(u)?"atom":e.match(b)?"variable":e.match(d)?"operator":(e.next(),null)}(e,t);if(r){var n=e.current();t.lastToken=n,"keyword"===r?(t.startDef=s.test(n),t.endDef=t.endDef||f.test(n)):t.startDef=!1}return r},languageData:{autocomplete:n.concat(i).concat(c).concat(m)}}}}]);