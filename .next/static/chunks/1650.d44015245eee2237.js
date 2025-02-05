"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1650],{1650:function(e,t,r){function mkVBScript(e){var t="error";function wordRegexp(e){return RegExp("^(("+e.join(")|(")+"))\\b","i")}var r=RegExp("^[\\+\\-\\*/&\\\\\\^<>=]"),n=RegExp("^((<>)|(<=)|(>=))"),a=RegExp("^[\\.,]"),i=RegExp("^[\\(\\)]"),o=RegExp("^[A-Za-z][_A-Za-z0-9]*"),c=wordRegexp(["and","or","not","xor","is","mod","eqv","imp"]),b=["WScript","err","debug","RegExp"],u=["clear","execute","raise","replace","test","write","writeline","close","open","state","eof","update","addnew","end","createobject","quit"].concat(["description","firstindex","global","helpcontext","helpfile","ignorecase","length","number","pattern","source","value","count"]);b=b.concat(["vbBlack","vbRed","vbGreen","vbYellow","vbBlue","vbMagenta","vbCyan","vbWhite","vbBinaryCompare","vbTextCompare","vbSunday","vbMonday","vbTuesday","vbWednesday","vbThursday","vbFriday","vbSaturday","vbUseSystemDayOfWeek","vbFirstJan1","vbFirstFourDays","vbFirstFullWeek","vbGeneralDate","vbLongDate","vbShortDate","vbLongTime","vbShortTime","vbObjectError","vbOKOnly","vbOKCancel","vbAbortRetryIgnore","vbYesNoCancel","vbYesNo","vbRetryCancel","vbCritical","vbQuestion","vbExclamation","vbInformation","vbDefaultButton1","vbDefaultButton2","vbDefaultButton3","vbDefaultButton4","vbApplicationModal","vbSystemModal","vbOK","vbCancel","vbAbort","vbRetry","vbIgnore","vbYes","vbNo","vbCr","VbCrLf","vbFormFeed","vbLf","vbNewLine","vbNullChar","vbNullString","vbTab","vbVerticalTab","vbUseDefault","vbTrue","vbFalse","vbEmpty","vbNull","vbInteger","vbLong","vbSingle","vbDouble","vbCurrency","vbDate","vbString","vbObject","vbError","vbBoolean","vbVariant","vbDataObject","vbDecimal","vbByte","vbArray"]),e.isASP&&(b=b.concat(["server","response","request","session","application"]),u=u.concat(["addheader","appendtolog","binarywrite","end","flush","redirect","binaryread","remove","removeall","lock","unlock","abandon","getlasterror","htmlencode","mappath","transfer","urlencode"],["buffer","cachecontrol","charset","contenttype","expires","expiresabsolute","isclientconnected","pics","status","clientcertificate","cookies","form","querystring","servervariables","totalbytes","contents","staticobjects","codepage","lcid","sessionid","timeout","scripttimeout"]));var s=wordRegexp(["dim","redim","then","until","randomize","byval","byref","new","property","exit","in","const","private","public","get","set","let","stop","on error resume next","on error goto 0","option explicit","call","me"]),l=wordRegexp(["true","false","nothing","empty","null"]),d=wordRegexp(["abs","array","asc","atn","cbool","cbyte","ccur","cdate","cdbl","chr","cint","clng","cos","csng","cstr","date","dateadd","datediff","datepart","dateserial","datevalue","day","escape","eval","execute","exp","filter","formatcurrency","formatdatetime","formatnumber","formatpercent","getlocale","getobject","getref","hex","hour","inputbox","instr","instrrev","int","fix","isarray","isdate","isempty","isnull","isnumeric","isobject","join","lbound","lcase","left","len","loadpicture","log","ltrim","rtrim","trim","maths","mid","minute","month","monthname","msgbox","now","oct","replace","rgb","right","rnd","round","scriptengine","scriptenginebuildversion","scriptenginemajorversion","scriptengineminorversion","second","setlocale","sgn","sin","space","split","sqr","strcomp","string","strreverse","tan","time","timer","timeserial","timevalue","typename","ubound","ucase","unescape","vartype","weekday","weekdayname","year"]),v=wordRegexp(b),m=wordRegexp(u),p=wordRegexp(["class","sub","select","while","if","function","property","with","for"]),h=wordRegexp(["else","elseif","case"]),g=wordRegexp(["next","loop","wend"]),f=wordRegexp(["end"]),y=wordRegexp(["do"]),x=wordRegexp(["on error resume next","exit"]),k=wordRegexp(["rem"]);function indent(e,t){t.currentIndent++}function dedent(e,t){t.currentIndent--}function tokenBase(e,b){if(e.eatSpace())return null;if("'"===e.peek()||e.match(k))return e.skipToEnd(),"comment";if(e.match(/^((&H)|(&O))?[0-9\.]/i,!1)&&!e.match(/^((&H)|(&O))?[0-9\.]+[a-z_]/i,!1)){var u,w,R,C=!1;if(e.match(/^\d*\.\d+/i)?C=!0:e.match(/^\d+\.\d*/)?C=!0:e.match(/^\.\d+/)&&(C=!0),C)return e.eat(/J/i),"number";var I=!1;if(e.match(/^&H[0-9a-f]+/i)?I=!0:e.match(/^&O[0-7]+/i)?I=!0:e.match(/^[1-9]\d*F?/)?(e.eat(/J/i),I=!0):e.match(/^0(?![\dx])/i)&&(I=!0),I)return e.eat(/L/i),"number"}return e.match('"')?(b.tokenize=(w=1==(u=e.current()).length,R="string",function(e,t){for(;!e.eol();){if(e.eatWhile(/[^'"]/),e.match(u))return t.tokenize=tokenBase,R;e.eat(/['"]/)}return w&&(t.tokenize=tokenBase),R}),b.tokenize(e,b)):e.match(n)||e.match(r)||e.match(c)?"operator":e.match(a)?null:e.match(i)?"bracket":e.match(x)?(b.doInCurrentLine=!0,"keyword"):e.match(y)?(indent(e,b),b.doInCurrentLine=!0,"keyword"):e.match(p)?(b.doInCurrentLine?b.doInCurrentLine=!1:indent(e,b),"keyword"):e.match(h)?"keyword":e.match(f)?(dedent(e,b),dedent(e,b),"keyword"):e.match(g)?(b.doInCurrentLine?b.doInCurrentLine=!1:dedent(e,b),"keyword"):e.match(s)?"keyword":e.match(l)?"atom":e.match(m)?"variableName.special":e.match(d)||e.match(v)?"builtin":e.match(o)?"variable":(e.next(),t)}return{name:"vbscript",startState:function(){return{tokenize:tokenBase,lastToken:null,currentIndent:0,nextLineIndent:0,doInCurrentLine:!1,ignoreKeyword:!1}},token:function(e,r){e.sol()&&(r.currentIndent+=r.nextLineIndent,r.nextLineIndent=0,r.doInCurrentLine=0);var n=function(e,r){var n=r.tokenize(e,r),a=e.current();if("."===a){if(n=r.tokenize(e,r),a=e.current(),!n||"variable"!==n.substr(0,8)&&"builtin"!==n&&"keyword"!==n)return t;("builtin"===n||"keyword"===n)&&(n="variable"),u.indexOf(a.substr(1))>-1&&(n="keyword")}return n}(e,r);return r.lastToken={style:n,content:e.current()},null===n&&(n=null),n},indent:function(e,t,r){var n=t.replace(/^\s+|\s+$/g,"");return n.match(g)||n.match(f)||n.match(h)?r.unit*(e.currentIndent-1):e.currentIndent<0?0:e.currentIndent*r.unit}}}r.r(t),r.d(t,{vbScript:function(){return n},vbScriptASP:function(){return a}});let n=mkVBScript({}),a=mkVBScript({isASP:!0})}}]);