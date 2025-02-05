"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7421],{1364:function(e,t,n){function buildRegexp(e,t){for(var n=void 0!==(t=t||{}).prefix?t.prefix:"^",r=void 0!==t.suffix?t.suffix:"\\b",o=0;o<e.length;o++)e[o]instanceof RegExp?e[o]=e[o].source:e[o]=e[o].replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");return RegExp(n+"("+e.join("|")+")"+r,"i")}n.r(t),n.d(t,{powerShell:function(){return p}});var r="(?=[^A-Za-z\\d\\-_]|$)",o=/[\w\-:]/,i=buildRegexp([/begin|break|catch|continue|data|default|do|dynamicparam/,/else|elseif|end|exit|filter|finally|for|foreach|from|function|if|in/,/param|process|return|switch|throw|trap|try|until|where|while/],{suffix:r}),a=buildRegexp(["f",/b?not/,/[ic]?split/,"join",/is(not)?/,"as",/[ic]?(eq|ne|[gl][te])/,/[ic]?(not)?(like|match|contains)/,/[ic]?replace/,/b?(and|or|xor)/],{prefix:"-"}),s=buildRegexp([a,/[+\-*\/%]=|\+\+|--|\.\.|[+\-*&^%:=!|\/]|<(?!#)|(?!#)>/],{suffix:""}),u=buildRegexp([/Add-(Computer|Content|History|Member|PSSnapin|Type)/,/Checkpoint-Computer/,/Clear-(Content|EventLog|History|Host|Item(Property)?|Variable)/,/Compare-Object/,/Complete-Transaction/,/Connect-PSSession/,/ConvertFrom-(Csv|Json|SecureString|StringData)/,/Convert-Path/,/ConvertTo-(Csv|Html|Json|SecureString|Xml)/,/Copy-Item(Property)?/,/Debug-Process/,/Disable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)/,/Disconnect-PSSession/,/Enable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)/,/(Enter|Exit)-PSSession/,/Export-(Alias|Clixml|Console|Counter|Csv|FormatData|ModuleMember|PSSession)/,/ForEach-Object/,/Format-(Custom|List|Table|Wide)/,RegExp("Get-(Acl|Alias|AuthenticodeSignature|ChildItem|Command|ComputerRestorePoint|Content|ControlPanelItem|Counter|Credential|Culture|Date|Event|EventLog|EventSubscriber|ExecutionPolicy|FormatData|Help|History|Host|HotFix|Item|ItemProperty|Job|Location|Member|Module|PfxCertificate|Process|PSBreakpoint|PSCallStack|PSDrive|PSProvider|PSSession|PSSessionConfiguration|PSSnapin|Random|Service|TraceSource|Transaction|TypeData|UICulture|Unique|Variable|Verb|WinEvent|WmiObject)"),/Group-Object/,/Import-(Alias|Clixml|Counter|Csv|LocalizedData|Module|PSSession)/,/ImportSystemModules/,/Invoke-(Command|Expression|History|Item|RestMethod|WebRequest|WmiMethod)/,/Join-Path/,/Limit-EventLog/,/Measure-(Command|Object)/,/Move-Item(Property)?/,RegExp("New-(Alias|Event|EventLog|Item(Property)?|Module|ModuleManifest|Object|PSDrive|PSSession|PSSessionConfigurationFile|PSSessionOption|PSTransportOption|Service|TimeSpan|Variable|WebServiceProxy|WinEvent)"),/Out-(Default|File|GridView|Host|Null|Printer|String)/,/Pause/,/(Pop|Push)-Location/,/Read-Host/,/Receive-(Job|PSSession)/,/Register-(EngineEvent|ObjectEvent|PSSessionConfiguration|WmiEvent)/,/Remove-(Computer|Event|EventLog|Item(Property)?|Job|Module|PSBreakpoint|PSDrive|PSSession|PSSnapin|TypeData|Variable|WmiObject)/,/Rename-(Computer|Item(Property)?)/,/Reset-ComputerMachinePassword/,/Resolve-Path/,/Restart-(Computer|Service)/,/Restore-Computer/,/Resume-(Job|Service)/,/Save-Help/,/Select-(Object|String|Xml)/,/Send-MailMessage/,RegExp("Set-(Acl|Alias|AuthenticodeSignature|Content|Date|ExecutionPolicy|Item(Property)?|Location|PSBreakpoint|PSDebug|PSSessionConfiguration|Service|StrictMode|TraceSource|Variable|WmiInstance)"),/Show-(Command|ControlPanelItem|EventLog)/,/Sort-Object/,/Split-Path/,/Start-(Job|Process|Service|Sleep|Transaction|Transcript)/,/Stop-(Computer|Job|Process|Service|Transcript)/,/Suspend-(Job|Service)/,/TabExpansion2/,/Tee-Object/,/Test-(ComputerSecureChannel|Connection|ModuleManifest|Path|PSSessionConfigurationFile)/,/Trace-Command/,/Unblock-File/,/Undo-Transaction/,/Unregister-(Event|PSSessionConfiguration)/,/Update-(FormatData|Help|List|TypeData)/,/Use-Transaction/,/Wait-(Event|Job|Process)/,/Where-Object/,/Write-(Debug|Error|EventLog|Host|Output|Progress|Verbose|Warning)/,/cd|help|mkdir|more|oss|prompt/,/ac|asnp|cat|cd|chdir|clc|clear|clhy|cli|clp|cls|clv|cnsn|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|dnsn|ebp/,/echo|epal|epcsv|epsn|erase|etsn|exsn|fc|fl|foreach|ft|fw|gal|gbp|gc|gci|gcm|gcs|gdr|ghy|gi|gjb|gl|gm|gmo|gp|gps/,/group|gsn|gsnp|gsv|gu|gv|gwmi|h|history|icm|iex|ihy|ii|ipal|ipcsv|ipmo|ipsn|irm|ise|iwmi|iwr|kill|lp|ls|man|md/,/measure|mi|mount|move|mp|mv|nal|ndr|ni|nmo|npssc|nsn|nv|ogv|oh|popd|ps|pushd|pwd|r|rbp|rcjb|rcsn|rd|rdr|ren|ri/,/rjb|rm|rmdir|rmo|rni|rnp|rp|rsn|rsnp|rujb|rv|rvpa|rwmi|sajb|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls/,/sort|sp|spjb|spps|spsv|start|sujb|sv|swmi|tee|trcm|type|where|wjb|write/],{prefix:"",suffix:""}),c=buildRegexp([/[$?^_]|Args|ConfirmPreference|ConsoleFileName|DebugPreference|Error|ErrorActionPreference|ErrorView|ExecutionContext/,/FormatEnumerationLimit|Home|Host|Input|MaximumAliasCount|MaximumDriveCount|MaximumErrorCount|MaximumFunctionCount/,/MaximumHistoryCount|MaximumVariableCount|MyInvocation|NestedPromptLevel|OutputEncoding|Pid|Profile|ProgressPreference/,/PSBoundParameters|PSCommandPath|PSCulture|PSDefaultParameterValues|PSEmailServer|PSHome|PSScriptRoot|PSSessionApplicationName/,/PSSessionConfigurationName|PSSessionOption|PSUICulture|PSVersionTable|Pwd|ShellId|StackTrace|VerbosePreference/,/WarningPreference|WhatIfPreference/,/Event|EventArgs|EventSubscriber|Sender/,/Matches|Ofs|ForEach|LastExitCode|PSCmdlet|PSItem|PSSenderInfo|This/,/true|false|null/],{prefix:"\\$",suffix:""}),l={keyword:i,number:/^((0x[\da-f]+)|((\d+\.\d+|\d\.|\.\d+|\d+)(e[\+\-]?\d+)?))[ld]?([kmgtp]b)?/i,operator:s,builtin:buildRegexp([/[A-Z]:|%|\?/i,u,c],{suffix:r}),punctuation:/[\[\]{},;`\\\.]|@[({]/,variable:/^[A-Za-z\_][A-Za-z\-\_\d]*\b/};function tokenBase(e,t){var n=t.returnStack[t.returnStack.length-1];if(n&&n.shouldReturnFrom(t))return t.tokenize=n.tokenize,t.returnStack.pop(),t.tokenize(e,t);if(e.eatSpace())return null;if(e.eat("("))return t.bracketNesting+=1,"punctuation";if(e.eat(")"))return t.bracketNesting-=1,"punctuation";for(var r in l)if(e.match(l[r]))return r;var i=e.next();if("'"===i)return function(e,t){for(var n;null!=(n=e.peek());)if(e.next(),"'"===n&&!e.eat("'"))return t.tokenize=tokenBase,"string";return"error"}(e,t);if("$"===i)return tokenVariable(e,t);if('"'===i)return tokenDoubleQuoteString(e,t);if("<"===i&&e.eat("#"))return t.tokenize=tokenComment,tokenComment(e,t);if("#"===i)return e.skipToEnd(),"comment";if("@"===i){var a=e.eat(/["']/);if(a&&e.eol())return t.tokenize=tokenMultiString,t.startQuote=a[0],tokenMultiString(e,t);if(e.eol());else if(e.peek().match(/[({]/))return"punctuation";else if(e.peek().match(o))return tokenVariable(e,t)}return"error"}function tokenDoubleQuoteString(e,t){for(var n;null!=(n=e.peek());){if("$"===n)return t.tokenize=tokenStringInterpolation,"string";if(e.next(),"`"===n){e.next();continue}if('"'===n&&!e.eat('"'))return t.tokenize=tokenBase,"string"}return"error"}function tokenStringInterpolation(e,t){return tokenInterpolation(e,t,tokenDoubleQuoteString)}function tokenMultiStringReturn(e,t){return t.tokenize=tokenMultiString,t.startQuote='"',tokenMultiString(e,t)}function tokenHereStringInterpolation(e,t){return tokenInterpolation(e,t,tokenMultiStringReturn)}function tokenInterpolation(e,t,n){if(!e.match("$("))return e.next(),t.returnStack.push({shouldReturnFrom:function(){return!0},tokenize:n}),t.tokenize=tokenVariable,t.tokenize(e,t);var r=t.bracketNesting;return t.returnStack.push({shouldReturnFrom:function(e){return e.bracketNesting===r},tokenize:n}),t.tokenize=tokenBase,t.bracketNesting+=1,"punctuation"}function tokenComment(e,t){for(var n,r=!1;null!=(n=e.next());){if(r&&">"==n){t.tokenize=tokenBase;break}r="#"===n}return"comment"}function tokenVariable(e,t){var n=e.peek();return e.eat("{")?(t.tokenize=tokenVariableWithBraces,tokenVariableWithBraces(e,t)):void 0!=n&&n.match(o)?(e.eatWhile(o),t.tokenize=tokenBase,"variable"):(t.tokenize=tokenBase,"error")}function tokenVariableWithBraces(e,t){for(var n;null!=(n=e.next());)if("}"===n){t.tokenize=tokenBase;break}return"variable"}function tokenMultiString(e,t){var n=t.startQuote;if(e.sol()&&e.match(RegExp(n+"@")))t.tokenize=tokenBase;else if('"'===n)for(;!e.eol();){var r=e.peek();if("$"===r){t.tokenize=tokenHereStringInterpolation;break}e.next(),"`"===r&&e.next()}else e.skipToEnd();return"string"}let p={name:"powershell",startState:function(){return{returnStack:[],bracketNesting:0,tokenize:tokenBase}},token:function(e,t){return t.tokenize(e,t)},languageData:{commentTokens:{line:"#",block:{open:"<#",close:"#>"}}}}}}]);