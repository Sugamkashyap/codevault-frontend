"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4262,9296],{9296:function(e,t,r){function mkJavaScript(e){var t,r,n=e.statementIndent,a=e.jsonld,o=e.json||a,i=e.typescript,s=e.wordCharacters||/[\w$\xa1-\uffff]/,p=function(){function kw(e){return{type:e,style:"keyword"}}var e=kw("keyword a"),t=kw("keyword b"),r=kw("keyword c"),n=kw("keyword d"),a=kw("operator"),o={type:"atom",style:"atom"};return{if:kw("if"),while:e,with:e,else:t,do:t,try:t,finally:t,return:n,break:n,continue:n,new:kw("new"),delete:r,void:r,throw:r,debugger:kw("debugger"),var:kw("var"),const:kw("var"),let:kw("var"),function:kw("function"),catch:kw("catch"),for:kw("for"),switch:kw("switch"),case:kw("case"),default:kw("default"),in:a,typeof:a,instanceof:a,true:o,false:o,null:o,undefined:o,NaN:o,Infinity:o,this:kw("this"),class:kw("class"),super:kw("atom"),yield:r,export:kw("export"),import:kw("import"),extends:r,await:r}}(),c=/[+\-*&%=<>!?|~^@]/,u=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function ret(e,n,a){return t=e,r=a,n}function tokenBase(e,t){var r=e.next();if('"'==r||"'"==r)return t.tokenize=function(e,t){var n,o=!1;if(a&&"@"==e.peek()&&e.match(u))return t.tokenize=tokenBase,ret("jsonld-keyword","meta");for(;null!=(n=e.next())&&(n!=r||o);)o=!o&&"\\"==n;return o||(t.tokenize=tokenBase),ret("string","string")},t.tokenize(e,t);if("."==r&&e.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return ret("number","number");if("."==r&&e.match(".."))return ret("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(r))return ret(r);if("="==r&&e.eat(">"))return ret("=>","operator");if("0"==r&&e.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return ret("number","number");if(/\d/.test(r))return e.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),ret("number","number");else if("/"==r)return e.eat("*")?(t.tokenize=tokenComment,tokenComment(e,t)):e.eat("/")?(e.skipToEnd(),ret("comment","comment")):t.tokenize==tokenBase&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(t.lastType)||"quasi"==t.lastType&&/\{\s*$/.test(e.string.slice(0,e.pos-1))?(!function(e){for(var t,r=!1,n=!1;null!=(t=e.next());){if(!r){if("/"==t&&!n)return;"["==t?n=!0:n&&"]"==t&&(n=!1)}r=!r&&"\\"==t}}(e),e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),ret("regexp","string.special")):(e.eat("="),ret("operator","operator",e.current()));else if("`"==r)return t.tokenize=tokenQuasi,tokenQuasi(e,t);else if("#"==r&&"!"==e.peek())return e.skipToEnd(),ret("meta","meta");else if("#"==r&&e.eatWhile(s))return ret("variable","property");else if("<"==r&&e.match("!--")||"-"==r&&e.match("->")&&!/\S/.test(e.string.slice(0,e.start)))return e.skipToEnd(),ret("comment","comment");else if(c.test(r))return((">"!=r||!t.lexical||">"!=t.lexical.type)&&(e.eat("=")?("!"==r||"="==r)&&e.eat("="):/[<>*+\-|&?]/.test(r)&&(e.eat(r),">"==r&&e.eat(r))),"?"==r&&e.eat("."))?ret("."):ret("operator","operator",e.current());else if(s.test(r)){e.eatWhile(s);var n=e.current();if("."!=t.lastType){if(p.propertyIsEnumerable(n)){var o=p[n];return ret(o.type,o.style,n)}if("async"==n&&e.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/,!1))return ret("async","keyword",n)}return ret("variable","variable",n)}}function tokenComment(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=tokenBase;break}n="*"==r}return ret("comment","comment")}function tokenQuasi(e,t){for(var r,n=!1;null!=(r=e.next());){if(!n&&("`"==r||"$"==r&&e.eat("{"))){t.tokenize=tokenBase;break}n=!n&&"\\"==r}return ret("quasi","string.special",e.current())}function findFatArrow(e,t){t.fatArrowAt&&(t.fatArrowAt=null);var r=e.string.indexOf("=>",e.start);if(!(r<0)){if(i){var n=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start,r));n&&(r=n.index)}for(var a=0,o=!1,p=r-1;p>=0;--p){var c=e.string.charAt(p),u="([{}])".indexOf(c);if(u>=0&&u<3){if(!a){++p;break}if(0==--a){"("==c&&(o=!0);break}}else if(u>=3&&u<6)++a;else if(s.test(c))o=!0;else if(/["'\/`]/.test(c))for(;;--p){if(0==p)return;if(e.string.charAt(p-1)==c&&"\\"!=e.string.charAt(p-2)){p--;break}}else if(o&&!a){++p;break}}o&&!a&&(t.fatArrowAt=p)}}var l={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,import:!0,"jsonld-keyword":!0};function JSLexical(e,t,r,n,a,o){this.indented=e,this.column=t,this.type=r,this.prev=a,this.info=o,null!=n&&(this.align=n)}var f={state:null,marked:null,cc:null};function pass(){for(var e=arguments.length-1;e>=0;e--)f.cc.push(arguments[e])}function cont(){return pass.apply(null,arguments),!0}function inList(e,t){for(var r=t;r;r=r.next)if(r.name==e)return!0;return!1}function register(t){var r=f.state;if(f.marked="def",r.context){if("var"==r.lexical.info&&r.context&&r.context.block){var n=function registerVarScoped(e,t){if(!t)return null;if(t.block){var r=registerVarScoped(e,t.prev);return r?r==t.prev?t:new Context(r,t.vars,!0):null}return inList(e,t.vars)?t:new Context(t.prev,new Var(e,t.vars),!1)}(t,r.context);if(null!=n){r.context=n;return}}else if(!inList(t,r.localVars)){r.localVars=new Var(t,r.localVars);return}}e.globalVars&&!inList(t,r.globalVars)&&(r.globalVars=new Var(t,r.globalVars))}function isModifier(e){return"public"==e||"private"==e||"protected"==e||"abstract"==e||"readonly"==e}function Context(e,t,r){this.prev=e,this.vars=t,this.block=r}function Var(e,t){this.name=e,this.next=t}var m=new Var("this",new Var("arguments",null));function pushcontext(){f.state.context=new Context(f.state.context,f.state.localVars,!1),f.state.localVars=m}function pushblockcontext(){f.state.context=new Context(f.state.context,f.state.localVars,!0),f.state.localVars=null}function popcontext(){f.state.localVars=f.state.context.vars,f.state.context=f.state.context.prev}function pushlex(e,t){var result=function(){var r=f.state,n=r.indented;if("stat"==r.lexical.type)n=r.lexical.indented;else for(var a=r.lexical;a&&")"==a.type&&a.align;a=a.prev)n=a.indented;r.lexical=new JSLexical(n,f.stream.column(),e,null,r.lexical,t)};return result.lex=!0,result}function poplex(){var e=f.state;e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function expect(e){return function exp(t){return t==e?cont():";"==e||"}"==t||")"==t||"]"==t?pass():cont(exp)}}function statement(e,t){if("var"==e)return cont(pushlex("vardef",t),vardef,expect(";"),poplex);if("keyword a"==e)return cont(pushlex("form"),parenExpr,statement,poplex);if("keyword b"==e)return cont(pushlex("form"),statement,poplex);if("keyword d"==e)return f.stream.match(/^\s*$/,!1)?cont():cont(pushlex("stat"),maybeexpression,expect(";"),poplex);if("debugger"==e)return cont(expect(";"));if("{"==e)return cont(pushlex("}"),pushblockcontext,block,poplex,popcontext);if(";"==e)return cont();if("if"==e)return"else"==f.state.lexical.info&&f.state.cc[f.state.cc.length-1]==poplex&&f.state.cc.pop()(),cont(pushlex("form"),parenExpr,statement,poplex,maybeelse);if("function"==e)return cont(functiondef);if("for"==e)return cont(pushlex("form"),pushblockcontext,forspec,statement,popcontext,poplex);if("class"==e||i&&"interface"==t)return f.marked="keyword",cont(pushlex("form","class"==e?e:t),className,poplex);if("variable"==e)return i&&"declare"==t?(f.marked="keyword",cont(statement)):i&&("module"==t||"enum"==t||"type"==t)&&f.stream.match(/^\s*\w/,!1)?(f.marked="keyword","enum"==t)?cont(enumdef):"type"==t?cont(typename,expect("operator"),typeexpr,expect(";")):cont(pushlex("form"),pattern,expect("{"),pushlex("}"),block,poplex,poplex):i&&"namespace"==t?(f.marked="keyword",cont(pushlex("form"),expression,statement,poplex)):i&&"abstract"==t?(f.marked="keyword",cont(statement)):cont(pushlex("stat"),maybelabel);return"switch"==e?cont(pushlex("form"),parenExpr,expect("{"),pushlex("}","switch"),pushblockcontext,block,poplex,poplex,popcontext):"case"==e?cont(expression,expect(":")):"default"==e?cont(expect(":")):"catch"==e?cont(pushlex("form"),pushcontext,maybeCatchBinding,statement,poplex,popcontext):"export"==e?cont(pushlex("stat"),afterExport,poplex):"import"==e?cont(pushlex("stat"),afterImport,poplex):"async"==e?cont(statement):"@"==t?cont(expression,statement):pass(pushlex("stat"),expression,expect(";"),poplex)}function maybeCatchBinding(e){if("("==e)return cont(funarg,expect(")"))}function expression(e,t){return expressionInner(e,t,!1)}function expressionNoComma(e,t){return expressionInner(e,t,!0)}function parenExpr(e){return"("!=e?pass():cont(pushlex(")"),maybeexpression,expect(")"),poplex)}function expressionInner(e,t,r){if(f.state.fatArrowAt==f.stream.start){var n=r?arrowBodyNoComma:arrowBody;if("("==e)return cont(pushcontext,pushlex(")"),commasep(funarg,")"),poplex,expect("=>"),n,popcontext);if("variable"==e)return pass(pushcontext,pattern,expect("=>"),n,popcontext)}var a=r?maybeoperatorNoComma:maybeoperatorComma;return l.hasOwnProperty(e)?cont(a):"function"==e?cont(functiondef,a):"class"==e||i&&"interface"==t?(f.marked="keyword",cont(pushlex("form"),classExpression,poplex)):"keyword c"==e||"async"==e?cont(r?expressionNoComma:expression):"("==e?cont(pushlex(")"),maybeexpression,expect(")"),poplex,a):"operator"==e||"spread"==e?cont(r?expressionNoComma:expression):"["==e?cont(pushlex("]"),arrayLiteral,poplex,a):"{"==e?contCommasep(objprop,"}",null,a):"quasi"==e?pass(quasi,a):"new"==e?cont(function(e){return"."==e?cont(r?targetNoComma:target):"variable"==e&&i?cont(maybeTypeArgs,r?maybeoperatorNoComma:maybeoperatorComma):pass(r?expressionNoComma:expression)}):cont()}function maybeexpression(e){return e.match(/[;\}\)\],]/)?pass():pass(expression)}function maybeoperatorComma(e,t){return","==e?cont(maybeexpression):maybeoperatorNoComma(e,t,!1)}function maybeoperatorNoComma(e,t,r){var n=!1==r?maybeoperatorComma:maybeoperatorNoComma,a=!1==r?expression:expressionNoComma;if("=>"==e)return cont(pushcontext,r?arrowBodyNoComma:arrowBody,popcontext);if("operator"==e)return/\+\+|--/.test(t)||i&&"!"==t?cont(n):i&&"<"==t&&f.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?cont(pushlex(">"),commasep(typeexpr,">"),poplex,n):"?"==t?cont(expression,expect(":"),a):cont(a);if("quasi"==e)return pass(quasi,n);if(";"!=e){if("("==e)return contCommasep(expressionNoComma,")","call",n);if("."==e)return cont(property,n);if("["==e)return cont(pushlex("]"),maybeexpression,expect("]"),poplex,n);if(i&&"as"==t)return f.marked="keyword",cont(typeexpr,n);if("regexp"==e)return f.state.lastType=f.marked="operator",f.stream.backUp(f.stream.pos-f.stream.start-1),cont(a)}}function quasi(e,t){return"quasi"!=e?pass():"${"!=t.slice(t.length-2)?cont(quasi):cont(maybeexpression,continueQuasi)}function continueQuasi(e){if("}"==e)return f.marked="string.special",f.state.tokenize=tokenQuasi,cont(quasi)}function arrowBody(e){return findFatArrow(f.stream,f.state),pass("{"==e?statement:expression)}function arrowBodyNoComma(e){return findFatArrow(f.stream,f.state),pass("{"==e?statement:expressionNoComma)}function target(e,t){if("target"==t)return f.marked="keyword",cont(maybeoperatorComma)}function targetNoComma(e,t){if("target"==t)return f.marked="keyword",cont(maybeoperatorNoComma)}function maybelabel(e){return":"==e?cont(poplex,statement):pass(maybeoperatorComma,expect(";"),poplex)}function property(e){if("variable"==e)return f.marked="property",cont()}function objprop(e,t){if("async"==e)return f.marked="property",cont(objprop);if("variable"==e||"keyword"==f.style){var r;return(f.marked="property","get"==t||"set"==t)?cont(getterSetter):(i&&f.state.fatArrowAt==f.stream.start&&(r=f.stream.match(/^\s*:\s*/,!1))&&(f.state.fatArrowAt=f.stream.pos+r[0].length),cont(afterprop))}if("number"==e||"string"==e)return f.marked=a?"property":f.style+" property",cont(afterprop);if("jsonld-keyword"==e)return cont(afterprop);if(i&&isModifier(t))return f.marked="keyword",cont(objprop);if("["==e)return cont(expression,maybetype,expect("]"),afterprop);if("spread"==e)return cont(expressionNoComma,afterprop);else if("*"==t)return f.marked="keyword",cont(objprop);else if(":"==e)return pass(afterprop)}function getterSetter(e){return"variable"!=e?pass(afterprop):(f.marked="property",cont(functiondef))}function afterprop(e){return":"==e?cont(expressionNoComma):"("==e?pass(functiondef):void 0}function commasep(e,t,r){function proceed(n,a){if(r?r.indexOf(n)>-1:","==n){var o=f.state.lexical;return"call"==o.info&&(o.pos=(o.pos||0)+1),cont(function(r,n){return r==t||n==t?pass():pass(e)},proceed)}return n==t||a==t?cont():r&&r.indexOf(";")>-1?pass(e):cont(expect(t))}return function(r,n){return r==t||n==t?cont():pass(e,proceed)}}function contCommasep(e,t,r){for(var n=3;n<arguments.length;n++)f.cc.push(arguments[n]);return cont(pushlex(t,r),commasep(e,t),poplex)}function block(e){return"}"==e?cont():pass(statement,block)}function maybetype(e,t){if(i){if(":"==e)return cont(typeexpr);if("?"==t)return cont(maybetype)}}function maybetypeOrIn(e,t){if(i&&(":"==e||"in"==t))return cont(typeexpr)}function mayberettype(e){if(i&&":"==e)return f.stream.match(/^\s*\w+\s+is\b/,!1)?cont(expression,isKW,typeexpr):cont(typeexpr)}function isKW(e,t){if("is"==t)return f.marked="keyword",cont()}function typeexpr(e,t){return"keyof"==t||"typeof"==t||"infer"==t||"readonly"==t?(f.marked="keyword",cont("typeof"==t?expressionNoComma:typeexpr)):"variable"==e||"void"==t?(f.marked="type",cont(afterType)):"|"==t||"&"==t?cont(typeexpr):"string"==e||"number"==e||"atom"==e?cont(afterType):"["==e?cont(pushlex("]"),commasep(typeexpr,"]",","),poplex,afterType):"{"==e?cont(pushlex("}"),typeprops,poplex,afterType):"("==e?cont(commasep(typearg,")"),maybeReturnType,afterType):"<"==e?cont(commasep(typeexpr,">"),typeexpr):"quasi"==e?pass(quasiType,afterType):void 0}function maybeReturnType(e){if("=>"==e)return cont(typeexpr)}function typeprops(e){return e.match(/[\}\)\]]/)?cont():","==e||";"==e?cont(typeprops):pass(typeprop,typeprops)}function typeprop(e,t){return"variable"==e||"keyword"==f.style?(f.marked="property",cont(typeprop)):"?"==t||"number"==e||"string"==e?cont(typeprop):":"==e?cont(typeexpr):"["==e?cont(expect("variable"),maybetypeOrIn,expect("]"),typeprop):"("==e?pass(functiondecl,typeprop):e.match(/[;\}\)\],]/)?void 0:cont()}function quasiType(e,t){return"quasi"!=e?pass():"${"!=t.slice(t.length-2)?cont(quasiType):cont(typeexpr,continueQuasiType)}function continueQuasiType(e){if("}"==e)return f.marked="string.special",f.state.tokenize=tokenQuasi,cont(quasiType)}function typearg(e,t){return"variable"==e&&f.stream.match(/^\s*[?:]/,!1)||"?"==t?cont(typearg):":"==e?cont(typeexpr):"spread"==e?cont(typearg):pass(typeexpr)}function afterType(e,t){return"<"==t?cont(pushlex(">"),commasep(typeexpr,">"),poplex,afterType):"|"==t||"."==e||"&"==t?cont(typeexpr):"["==e?cont(typeexpr,expect("]"),afterType):"extends"==t||"implements"==t?(f.marked="keyword",cont(typeexpr)):"?"==t?cont(typeexpr,expect(":"),typeexpr):void 0}function maybeTypeArgs(e,t){if("<"==t)return cont(pushlex(">"),commasep(typeexpr,">"),poplex,afterType)}function typeparam(){return pass(typeexpr,maybeTypeDefault)}function maybeTypeDefault(e,t){if("="==t)return cont(typeexpr)}function vardef(e,t){return"enum"==t?(f.marked="keyword",cont(enumdef)):pass(pattern,maybetype,maybeAssign,vardefCont)}function pattern(e,t){return i&&isModifier(t)?(f.marked="keyword",cont(pattern)):"variable"==e?(register(t),cont()):"spread"==e?cont(pattern):"["==e?contCommasep(eltpattern,"]"):"{"==e?contCommasep(proppattern,"}"):void 0}function proppattern(e,t){return"variable"!=e||f.stream.match(/^\s*:/,!1)?("variable"==e&&(f.marked="property"),"spread"==e)?cont(pattern):"}"==e?pass():"["==e?cont(expression,expect("]"),expect(":"),proppattern):cont(expect(":"),pattern,maybeAssign):(register(t),cont(maybeAssign))}function eltpattern(){return pass(pattern,maybeAssign)}function maybeAssign(e,t){if("="==t)return cont(expressionNoComma)}function vardefCont(e){if(","==e)return cont(vardef)}function maybeelse(e,t){if("keyword b"==e&&"else"==t)return cont(pushlex("form","else"),statement,poplex)}function forspec(e,t){return"await"==t?cont(forspec):"("==e?cont(pushlex(")"),forspec1,poplex):void 0}function forspec1(e){return"var"==e?cont(vardef,forspec2):"variable"==e?cont(forspec2):pass(forspec2)}function forspec2(e,t){return")"==e?cont():";"==e?cont(forspec2):"in"==t||"of"==t?(f.marked="keyword",cont(expression,forspec2)):pass(expression,forspec2)}function functiondef(e,t){return"*"==t?(f.marked="keyword",cont(functiondef)):"variable"==e?(register(t),cont(functiondef)):"("==e?cont(pushcontext,pushlex(")"),commasep(funarg,")"),poplex,mayberettype,statement,popcontext):i&&"<"==t?cont(pushlex(">"),commasep(typeparam,">"),poplex,functiondef):void 0}function functiondecl(e,t){return"*"==t?(f.marked="keyword",cont(functiondecl)):"variable"==e?(register(t),cont(functiondecl)):"("==e?cont(pushcontext,pushlex(")"),commasep(funarg,")"),poplex,mayberettype,popcontext):i&&"<"==t?cont(pushlex(">"),commasep(typeparam,">"),poplex,functiondecl):void 0}function typename(e,t){return"keyword"==e||"variable"==e?(f.marked="type",cont(typename)):"<"==t?cont(pushlex(">"),commasep(typeparam,">"),poplex):void 0}function funarg(e,t){return("@"==t&&cont(expression,funarg),"spread"==e)?cont(funarg):i&&isModifier(t)?(f.marked="keyword",cont(funarg)):i&&"this"==e?cont(maybetype,maybeAssign):pass(pattern,maybetype,maybeAssign)}function classExpression(e,t){return"variable"==e?className(e,t):classNameAfter(e,t)}function className(e,t){if("variable"==e)return register(t),cont(classNameAfter)}function classNameAfter(e,t){return"<"==t?cont(pushlex(">"),commasep(typeparam,">"),poplex,classNameAfter):"extends"==t||"implements"==t||i&&","==e?("implements"==t&&(f.marked="keyword"),cont(i?typeexpr:expression,classNameAfter)):"{"==e?cont(pushlex("}"),classBody,poplex):void 0}function classBody(e,t){return"async"==e||"variable"==e&&("static"==t||"get"==t||"set"==t||i&&isModifier(t))&&f.stream.match(/^\s+#?[\w$\xa1-\uffff]/,!1)?(f.marked="keyword",cont(classBody)):"variable"==e||"keyword"==f.style?(f.marked="property",cont(classfield,classBody)):"number"==e||"string"==e?cont(classfield,classBody):"["==e?cont(expression,maybetype,expect("]"),classfield,classBody):"*"==t?(f.marked="keyword",cont(classBody)):i&&"("==e?pass(functiondecl,classBody):";"==e||","==e?cont(classBody):"}"==e?cont():"@"==t?cont(expression,classBody):void 0}function classfield(e,t){if("!"==t||"?"==t)return cont(classfield);if(":"==e)return cont(typeexpr,maybeAssign);if("="==t)return cont(expressionNoComma);var r=f.state.lexical.prev;return pass(r&&"interface"==r.info?functiondecl:functiondef)}function afterExport(e,t){return"*"==t?(f.marked="keyword",cont(maybeFrom,expect(";"))):"default"==t?(f.marked="keyword",cont(expression,expect(";"))):"{"==e?cont(commasep(exportField,"}"),maybeFrom,expect(";")):pass(statement)}function exportField(e,t){return"as"==t?(f.marked="keyword",cont(expect("variable"))):"variable"==e?pass(expressionNoComma,exportField):void 0}function afterImport(e){return"string"==e?cont():"("==e?pass(expression):"."==e?pass(maybeoperatorComma):pass(importSpec,maybeMoreImports,maybeFrom)}function importSpec(e,t){return"{"==e?contCommasep(importSpec,"}"):("variable"==e&&register(t),"*"==t&&(f.marked="keyword"),cont(maybeAs))}function maybeMoreImports(e){if(","==e)return cont(importSpec,maybeMoreImports)}function maybeAs(e,t){if("as"==t)return f.marked="keyword",cont(importSpec)}function maybeFrom(e,t){if("from"==t)return f.marked="keyword",cont(expression)}function arrayLiteral(e){return"]"==e?cont():pass(commasep(expressionNoComma,"]"))}function enumdef(){return pass(pushlex("form"),pattern,expect("{"),pushlex("}"),commasep(enummember,"}"),poplex,poplex)}function enummember(){return pass(pattern,maybeAssign)}return pushcontext.lex=pushblockcontext.lex=!0,popcontext.lex=!0,poplex.lex=!0,{name:e.name,startState:function(t){var r={tokenize:tokenBase,lastType:"sof",cc:[],lexical:new JSLexical(-t,0,"block",!1),localVars:e.localVars,context:e.localVars&&new Context(null,null,!1),indented:0};return e.globalVars&&"object"==typeof e.globalVars&&(r.globalVars=e.globalVars),r},token:function(e,n){if(e.sol()&&(n.lexical.hasOwnProperty("align")||(n.lexical.align=!1),n.indented=e.indentation(),findFatArrow(e,n)),n.tokenize!=tokenComment&&e.eatSpace())return null;var a=n.tokenize(e,n);return"comment"==t?a:(n.lastType="operator"==t&&("++"==r||"--"==r)?"incdec":t,function(e,t,r,n,a){var i=e.cc;for(f.state=e,f.stream=a,f.marked=null,f.cc=i,f.style=t,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;)if((i.length?i.pop():o?expression:statement)(r,n)){for(;i.length&&i[i.length-1].lex;)i.pop()();if(f.marked)return f.marked;if("variable"==r&&function(e,t){for(var r=e.localVars;r;r=r.next)if(r.name==t)return!0;for(var n=e.context;n;n=n.prev)for(var r=n.vars;r;r=r.next)if(r.name==t)return!0}(e,n))return"variableName.local";return t}}(n,a,t,r,e))},indent:function(t,r,a){if(t.tokenize==tokenComment||t.tokenize==tokenQuasi)return null;if(t.tokenize!=tokenBase)return 0;var o,i=r&&r.charAt(0),s=t.lexical;if(!/^\s*else\b/.test(r))for(var p=t.cc.length-1;p>=0;--p){var u=t.cc[p];if(u==poplex)s=s.prev;else if(u!=maybeelse&&u!=popcontext)break}for(;("stat"==s.type||"form"==s.type)&&("}"==i||(o=t.cc[t.cc.length-1])&&(o==maybeoperatorComma||o==maybeoperatorNoComma)&&!/^[,\.=+\-*:?[\(]/.test(r));)s=s.prev;n&&")"==s.type&&"stat"==s.prev.type&&(s=s.prev);var l=s.type,f=i==l;return"vardef"==l?s.indented+("operator"==t.lastType||","==t.lastType?s.info.length+1:0):"form"==l&&"{"==i?s.indented:"form"==l?s.indented+a.unit:"stat"==l?s.indented+("operator"==t.lastType||","==t.lastType||c.test(r.charAt(0))||/[,.]/.test(r.charAt(0))?n||a.unit:0):"switch"!=s.info||f||!1==e.doubleIndentSwitch?s.align?s.column+(f?0:1):s.indented+(f?0:a.unit):s.indented+(/^(?:case|default)\b/.test(r)?a.unit:2*a.unit)},languageData:{indentOnInput:/^\s*(?:case .*?:|default:|\{|\})$/,commentTokens:o?void 0:{line:"//",block:{open:"/*",close:"*/"}},closeBrackets:{brackets:["(","[","{","'",'"',"`"]},wordChars:"$"}}}r.r(t),r.d(t,{javascript:function(){return n},json:function(){return a},jsonld:function(){return o},typescript:function(){return i}});let n=mkJavaScript({name:"javascript"}),a=mkJavaScript({name:"json",json:!0}),o=mkJavaScript({name:"json",jsonld:!0}),i=mkJavaScript({name:"typescript",typescript:!0})},4262:function(e,t,r){r.r(t),r.d(t,{pug:function(){return o}});var n=r(9296),a={"{":"}","(":")","[":"]"};let State=class State{constructor(e){this.indentUnit=e,this.javaScriptLine=!1,this.javaScriptLineExcludesColon=!1,this.javaScriptArguments=!1,this.javaScriptArgumentsDepth=0,this.isInterpolating=!1,this.interpolationNesting=0,this.jsState=n.javascript.startState(e),this.restOfLine="",this.isIncludeFiltered=!1,this.isEach=!1,this.lastTag="",this.isAttrs=!1,this.attrsNest=[],this.inAttributeName=!0,this.attributeIsType=!1,this.attrValue="",this.indentOf=1/0,this.indentToken=""}copy(){var e=new State(this.indentUnit);return e.javaScriptLine=this.javaScriptLine,e.javaScriptLineExcludesColon=this.javaScriptLineExcludesColon,e.javaScriptArguments=this.javaScriptArguments,e.javaScriptArgumentsDepth=this.javaScriptArgumentsDepth,e.isInterpolating=this.isInterpolating,e.interpolationNesting=this.interpolationNesting,e.jsState=(n.javascript.copyState||function(e){if("object"!=typeof e)return e;let t={};for(let r in e){let n=e[r];t[r]=n instanceof Array?n.slice():n}return t})(this.jsState),e.restOfLine=this.restOfLine,e.isIncludeFiltered=this.isIncludeFiltered,e.isEach=this.isEach,e.lastTag=this.lastTag,e.isAttrs=this.isAttrs,e.attrsNest=this.attrsNest.slice(),e.inAttributeName=this.inAttributeName,e.attributeIsType=this.attributeIsType,e.attrValue=this.attrValue,e.indentOf=this.indentOf,e.indentToken=this.indentToken,e}};function interpolation(e,t){if(e.match("#{"))return t.isInterpolating=!0,t.interpolationNesting=0,"punctuation"}function filter(e,t){if(e.match(/^:([\w\-]+)/))return setStringMode(e,t),"atom"}function setStringMode(e,t){t.indentOf=e.indentation(),t.indentToken="string"}let o={startState:function(e){return new State(e)},copyState:function(e){return e.copy()},token:function(e,t){var r=function(e,t){if(e.sol()&&(t.restOfLine=""),t.restOfLine){e.skipToEnd();var r=t.restOfLine;return t.restOfLine="",r}}(e,t)||function(e,t){if(t.isInterpolating){if("}"===e.peek()){if(t.interpolationNesting--,t.interpolationNesting<0)return e.next(),t.isInterpolating=!1,"punctuation"}else"{"===e.peek()&&t.interpolationNesting++;return n.javascript.token(e,t.jsState)||!0}}(e,t)||function(e,t){if(t.isIncludeFiltered){var r=filter(e,t);return t.isIncludeFiltered=!1,t.restOfLine="string",r}}(e,t)||function(e,t){if(t.isEach){if(e.match(/^ in\b/))return t.javaScriptLine=!0,t.isEach=!1,"keyword";if(e.sol()||e.eol())t.isEach=!1;else if(e.next()){for(;!e.match(/^ in\b/,!1)&&e.next(););return"variable"}}}(e,t)||function attrsContinued(e,t){if(t.isAttrs){if(a[e.peek()]&&t.attrsNest.push(a[e.peek()]),t.attrsNest[t.attrsNest.length-1]===e.peek())t.attrsNest.pop();else if(e.eat(")"))return t.isAttrs=!1,"punctuation";if(t.inAttributeName&&e.match(/^[^=,\)!]+/))return("="===e.peek()||"!"===e.peek())&&(t.inAttributeName=!1,t.jsState=n.javascript.startState(2),"script"===t.lastTag&&"type"===e.current().trim().toLowerCase()?t.attributeIsType=!0:t.attributeIsType=!1),"attribute";var r=n.javascript.token(e,t.jsState);if(0===t.attrsNest.length&&("string"===r||"variable"===r||"keyword"===r))try{return Function("","var x "+t.attrValue.replace(/,\s*$/,"").replace(/^!/,"")),t.inAttributeName=!0,t.attrValue="",e.backUp(e.current().length),attrsContinued(e,t)}catch(e){}return t.attrValue+=e.current(),r||!0}}(e,t)||function(e,t){if(e.sol()&&(t.javaScriptLine=!1,t.javaScriptLineExcludesColon=!1),t.javaScriptLine){if(t.javaScriptLineExcludesColon&&":"===e.peek()){t.javaScriptLine=!1,t.javaScriptLineExcludesColon=!1;return}var r=n.javascript.token(e,t.jsState);return e.eol()&&(t.javaScriptLine=!1),r||!0}}(e,t)||function(e,t){if(t.javaScriptArguments){if(0===t.javaScriptArgumentsDepth&&"("!==e.peek()||("("===e.peek()?t.javaScriptArgumentsDepth++:")"===e.peek()&&t.javaScriptArgumentsDepth--,0===t.javaScriptArgumentsDepth)){t.javaScriptArguments=!1;return}return n.javascript.token(e,t.jsState)||!0}}(e,t)||function(e,t){if(t.mixinCallAfter)return t.mixinCallAfter=!1,e.match(/^\( *[-\w]+ *=/,!1)||(t.javaScriptArguments=!0,t.javaScriptArgumentsDepth=0),!0}(e,t)||function(e){if(e.match(/^yield\b/))return"keyword"}(e)||function(e){if(e.match(/^(?:doctype) *([^\n]+)?/))return"meta"}(e)||interpolation(e,t)||function(e,t){if(e.match(/^case\b/))return t.javaScriptLine=!0,"keyword"}(e,t)||function(e,t){if(e.match(/^when\b/))return t.javaScriptLine=!0,t.javaScriptLineExcludesColon=!0,"keyword"}(e,t)||function(e){if(e.match(/^default\b/))return"keyword"}(e)||function(e,t){if(e.match(/^extends?\b/))return t.restOfLine="string","keyword"}(e,t)||function(e,t){if(e.match(/^append\b/))return t.restOfLine="variable","keyword"}(e,t)||function(e,t){if(e.match(/^prepend\b/))return t.restOfLine="variable","keyword"}(e,t)||function(e,t){if(e.match(/^block\b *(?:(prepend|append)\b)?/))return t.restOfLine="variable","keyword"}(e,t)||function(e,t){if(e.match(/^include\b/))return t.restOfLine="string","keyword"}(e,t)||function(e,t){if(e.match(/^include:([a-zA-Z0-9\-]+)/,!1)&&e.match("include"))return t.isIncludeFiltered=!0,"keyword"}(e,t)||function(e,t){if(e.match(/^mixin\b/))return t.javaScriptLine=!0,"keyword"}(e,t)||(e.match(/^\+([-\w]+)/)?(e.match(/^\( *[-\w]+ *=/,!1)||(t.javaScriptArguments=!0,t.javaScriptArgumentsDepth=0),"variable"):e.match("+#{",!1)?(e.next(),t.mixinCallAfter=!0,interpolation(e,t)):void 0)||function(e,t){if(e.match(/^(if|unless|else if|else)\b/))return t.javaScriptLine=!0,"keyword"}(e,t)||function(e,t){if(e.match(/^(- *)?(each|for)\b/))return t.isEach=!0,"keyword"}(e,t)||function(e,t){if(e.match(/^while\b/))return t.javaScriptLine=!0,"keyword"}(e,t)||function(e,t){var r;if(r=e.match(/^(\w(?:[-:\w]*\w)?)\/?/))return t.lastTag=r[1].toLowerCase(),"tag"}(e,t)||filter(e,t)||function(e,t){if(e.match(/^(!?=|-)/))return t.javaScriptLine=!0,"punctuation"}(e,t)||function(e){if(e.match(/^#([\w-]+)/))return"builtin"}(e)||function(e){if(e.match(/^\.([\w-]+)/))return"className"}(e)||function(e,t){if("("==e.peek())return e.next(),t.isAttrs=!0,t.attrsNest=[],t.inAttributeName=!0,t.attrValue="",t.attributeIsType=!1,"punctuation"}(e,t)||function(e,t){if(e.match(/^&attributes\b/))return t.javaScriptArguments=!0,t.javaScriptArgumentsDepth=0,"keyword"}(e,t)||function(e){if(e.sol()&&e.eatSpace())return"indent"}(e)||(e.match(/^(?:\| ?| )([^\n]+)/)?"string":e.match(/^(<[^\n]*)/,!1)?(setStringMode(e,t),e.skipToEnd(),t.indentToken):void 0)||function(e,t){if(e.match(/^ *\/\/(-)?([^\n]*)/))return t.indentOf=e.indentation(),t.indentToken="comment","comment"}(e,t)||function(e){if(e.match(/^: */))return"colon"}(e)||function(e,t){if(e.eat("."))return setStringMode(e,t),"dot"}(e,t)||(e.next(),null);return!0===r?null:r}}}}]);