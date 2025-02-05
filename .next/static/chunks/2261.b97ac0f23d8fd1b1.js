"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2261],{2261:function(e,t,a){a.r(t),a.d(t,{autoCloseTags:function(){return G},html:function(){return html},htmlCompletionSource:function(){return htmlCompletionSource},htmlCompletionSourceWith:function(){return htmlCompletionSourceWith},htmlLanguage:function(){return D},htmlPlain:function(){return W}});var l=a(3105),r=a(5524),n=a(1113);let s={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},o={dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},i={dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}};function isSpace(e){return 9==e||10==e||13==e||32==e}let O=null,u=null,c=0;function tagNameAfter(e,t){var a;let l=e.pos+t;if(c==l&&u==e)return O;let r=e.peek(t);for(;isSpace(r);)r=e.peek(++t);let n="";for(;45==(a=r)||46==a||58==a||a>=65&&a<=90||95==a||a>=97&&a<=122||a>=161;)n+=String.fromCharCode(r),r=e.peek(++t);return u=e,c=l,O=n?n.toLowerCase():r==p||r==d?void 0:null}let p=63,d=33;function ElementContext(e,t){this.name=e,this.parent=t}let m=[6,10,7,8,9],f=new l.IK({start:null,shift:(e,t,a,l)=>m.indexOf(t)>-1?new ElementContext(tagNameAfter(l,1)||"",e):e,reduce:(e,t)=>20==t&&e?e.parent:e,reuse(e,t,a,l){let r=t.type.id;return 6==r||36==r?new ElementContext(tagNameAfter(l,1)||"",e):e},strict:!1}),S=new l.Jq((e,t)=>{if(60!=e.next){e.next<0&&t.context&&e.acceptToken(57);return}e.advance();let a=47==e.next;a&&e.advance();let l=tagNameAfter(e,0);if(void 0===l)return;if(!l)return e.acceptToken(a?14:6);let r=t.context?t.context.name:null;if(a){if(l==r)return e.acceptToken(11);if(r&&o[r])return e.acceptToken(57,-2);if(t.dialectEnabled(0))return e.acceptToken(12);for(let e=t.context;e;e=e.parent)if(e.name==l)return;e.acceptToken(13)}else{if("script"==l)return e.acceptToken(7);if("style"==l)return e.acceptToken(8);if("textarea"==l)return e.acceptToken(9);if(s.hasOwnProperty(l))return e.acceptToken(10);r&&i[r]&&i[r][l]?e.acceptToken(57,-1):e.acceptToken(6)}},{contextual:!0}),g=new l.Jq(e=>{for(let t=0,a=0;;a++){if(e.next<0){a&&e.acceptToken(58);break}if(45==e.next)t++;else if(62==e.next&&t>=2){a>=3&&e.acceptToken(58,-2);break}else t=0;e.advance()}}),h=new l.Jq((e,t)=>{if(47==e.next&&62==e.peek(1)){let a=t.dialectEnabled(1)||function(e){for(;e;e=e.parent)if("svg"==e.name||"math"==e.name)return!0;return!1}(t.context);e.acceptToken(a?5:4,2)}else 62==e.next&&e.acceptToken(4,1)});function contentTokenizer(e,t,a){let r=2+e.length;return new l.Jq(l=>{for(let n=0,s=0,o=0;;o++){if(l.next<0){o&&l.acceptToken(t);break}if(0==n&&60==l.next||1==n&&47==l.next||n>=2&&n<r&&l.next==e.charCodeAt(n-2))n++,s++;else if((2==n||n==r)&&isSpace(l.next))s++;else if(n==r&&62==l.next){o>s?l.acceptToken(t,-s):l.acceptToken(a,-(s-2));break}else if((10==l.next||13==l.next)&&o){l.acceptToken(t,1);break}else n=s=0;l.advance()}})}let x=contentTokenizer("script",54,1),b=contentTokenizer("style",55,2),P=contentTokenizer("textarea",56,3),V=(0,r.Gv)({"Text RawText":r.pJ.content,"StartTag StartCloseTag SelfClosingEndTag EndTag":r.pJ.angleBracket,TagName:r.pJ.tagName,"MismatchedCloseTag/TagName":[r.pJ.tagName,r.pJ.invalid],AttributeName:r.pJ.attributeName,"AttributeValue UnquotedAttributeValue":r.pJ.attributeValue,Is:r.pJ.definitionOperator,"EntityReference CharacterReference":r.pJ.character,Comment:r.pJ.blockComment,ProcessingInst:r.pJ.processingInstruction,DoctypeDecl:r.pJ.documentMeta}),T=l.WQ.deserialize({version:14,states:",xOVO!rOOO!WQ#tO'#CqO!]Q#tO'#CzO!bQ#tO'#C}O!gQ#tO'#DQO!lQ#tO'#DSO!qOaO'#CpO!|ObO'#CpO#XOdO'#CpO$eO!rO'#CpOOO`'#Cp'#CpO$lO$fO'#DTO$tQ#tO'#DVO$yQ#tO'#DWOOO`'#Dk'#DkOOO`'#DY'#DYQVO!rOOO%OQ&rO,59]O%ZQ&rO,59fO%fQ&rO,59iO%qQ&rO,59lO%|Q&rO,59nOOOa'#D^'#D^O&XOaO'#CxO&dOaO,59[OOOb'#D_'#D_O&lObO'#C{O&wObO,59[OOOd'#D`'#D`O'POdO'#DOO'[OdO,59[OOO`'#Da'#DaO'dO!rO,59[O'kQ#tO'#DROOO`,59[,59[OOOp'#Db'#DbO'pO$fO,59oOOO`,59o,59oO'xQ#|O,59qO'}Q#|O,59rOOO`-E7W-E7WO(SQ&rO'#CsOOQW'#DZ'#DZO(bQ&rO1G.wOOOa1G.w1G.wOOO`1G/Y1G/YO(mQ&rO1G/QOOOb1G/Q1G/QO(xQ&rO1G/TOOOd1G/T1G/TO)TQ&rO1G/WOOO`1G/W1G/WO)`Q&rO1G/YOOOa-E7[-E7[O)kQ#tO'#CyOOO`1G.v1G.vOOOb-E7]-E7]O)pQ#tO'#C|OOOd-E7^-E7^O)uQ#tO'#DPOOO`-E7_-E7_O)zQ#|O,59mOOOp-E7`-E7`OOO`1G/Z1G/ZOOO`1G/]1G/]OOO`1G/^1G/^O*PQ,UO,59_OOQW-E7X-E7XOOOa7+$c7+$cOOO`7+$t7+$tOOOb7+$l7+$lOOOd7+$o7+$oOOO`7+$r7+$rO*[Q#|O,59eO*aQ#|O,59hO*fQ#|O,59kOOO`1G/X1G/XO*kO7[O'#CvO*|OMhO'#CvOOQW1G.y1G.yOOO`1G/P1G/POOO`1G/S1G/SOOO`1G/V1G/VOOOO'#D['#D[O+_O7[O,59bOOQW,59b,59bOOOO'#D]'#D]O+pOMhO,59bOOOO-E7Y-E7YOOQW1G.|1G.|OOOO-E7Z-E7Z",stateData:",]~O!^OS~OUSOVPOWQOXROYTO[]O][O^^O`^Oa^Ob^Oc^Ox^O{_O!dZO~OfaO~OfbO~OfcO~OfdO~OfeO~O!WfOPlP!ZlP~O!XiOQoP!ZoP~O!YlORrP!ZrP~OUSOVPOWQOXROYTOZqO[]O][O^^O`^Oa^Ob^Oc^Ox^O!dZO~O!ZrO~P#dO![sO!euO~OfvO~OfwO~OS|OT}OhyO~OS!POT}OhyO~OS!ROT}OhyO~OS!TOT}OhyO~OS}OT}OhyO~O!WfOPlX!ZlX~OP!WO!Z!XO~O!XiOQoX!ZoX~OQ!ZO!Z!XO~O!YlORrX!ZrX~OR!]O!Z!XO~O!Z!XO~P#dOf!_O~O![sO!e!aO~OS!bO~OS!cO~Oi!dOSgXTgXhgX~OS!fOT!gOhyO~OS!hOT!gOhyO~OS!iOT!gOhyO~OS!jOT!gOhyO~OS!gOT!gOhyO~Of!kO~Of!lO~Of!mO~OS!nO~Ok!qO!`!oO!b!pO~OS!rO~OS!sO~OS!tO~Oa!uOb!uOc!uO!`!wO!a!uO~Oa!xOb!xOc!xO!b!wO!c!xO~Oa!uOb!uOc!uO!`!{O!a!uO~Oa!xOb!xOc!xO!b!{O!c!xO~OT~bac!dx{!d~",goto:"%p!`PPPPPPPPPPPPPPPPPPPP!a!gP!mPP!yP!|#P#S#Y#]#`#f#i#l#r#x!aP!a!aP$O$U$l$r$x%O%U%[%bPPPPPPPP%hX^OX`pXUOX`pezabcde{!O!Q!S!UR!q!dRhUR!XhXVOX`pRkVR!XkXWOX`pRnWR!XnXXOX`pQrXR!XpXYOX`pQ`ORx`Q{aQ!ObQ!QcQ!SdQ!UeZ!e{!O!Q!S!UQ!v!oR!z!vQ!y!pR!|!yQgUR!VgQjVR!YjQmWR![mQpXR!^pQtZR!`tS_O`ToXp",nodeNames:"⚠ StartCloseTag StartCloseTag StartCloseTag EndTag SelfClosingEndTag StartTag StartTag StartTag StartTag StartTag StartCloseTag StartCloseTag StartCloseTag IncompleteCloseTag Document Text EntityReference CharacterReference InvalidEntity Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue ScriptText CloseTag OpenTag StyleText CloseTag OpenTag TextareaText CloseTag OpenTag CloseTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag CloseTag DoctypeDecl",maxTerm:67,context:f,nodeProps:[["closedBy",-10,1,2,3,7,8,9,10,11,12,13,"EndTag",6,"EndTag SelfClosingEndTag",-4,21,30,33,36,"CloseTag"],["openedBy",4,"StartTag StartCloseTag",5,"StartTag",-4,29,32,35,37,"OpenTag"],["group",-9,14,17,18,19,20,39,40,41,42,"Entity",16,"Entity TextContent",-3,28,31,34,"TextContent Entity"],["isolate",-11,21,29,30,32,33,35,36,37,38,41,42,"ltr",-3,26,27,39,""]],propSources:[V],skippedNodes:[0],repeatNodeCount:9,tokenData:"!<p!aR!YOX$qXY,QYZ,QZ[$q[]&X]^,Q^p$qpq,Qqr-_rs3_sv-_vw3}wxHYx}-_}!OH{!O!P-_!P!Q$q!Q![-_![!]Mz!]!^-_!^!_!$S!_!`!;x!`!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4U-_4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!Z$|c`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr$qrs&}sv$qvw+Pwx(tx!^$q!^!_*V!_!a&X!a#S$q#S#T&X#T;'S$q;'S;=`+z<%lO$q!R&bX`P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&Xq'UV`P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}P'pT`POv'kw!^'k!_;'S'k;'S;=`(P<%lO'kP(SP;=`<%l'kp([S!cpOv(Vx;'S(V;'S;=`(h<%lO(Vp(kP;=`<%l(Vq(qP;=`<%l&}a({W`P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t`)jT!a`Or)esv)ew;'S)e;'S;=`)y<%lO)e`)|P;=`<%l)ea*SP;=`<%l(t!Q*^V!a`!cpOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!Q*vP;=`<%l*V!R*|P;=`<%l&XW+UYkWOX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+PW+wP;=`<%l+P!Z+}P;=`<%l$q!a,]``P!a`!cp!^^OX&XXY,QYZ,QZ]&X]^,Q^p&Xpq,Qqr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!_-ljhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q[/ebhSkWOX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+PS0rXhSqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0mS1bP;=`<%l0m[1hP;=`<%l/^!V1vchS`P!a`!cpOq&Xqr1krs&}sv1kvw0mwx(tx!P1k!P!Q&X!Q!^1k!^!_*V!_!a&X!a#s1k#s$f&X$f;'S1k;'S;=`3R<%l?Ah1k?Ah?BY&X?BY?Mn1k?MnO&X!V3UP;=`<%l1k!_3[P;=`<%l-_!Z3hV!`h`P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}!_4WihSkWc!ROX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst>]tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^/^!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!Z5zbkWOX5uXZ7SZ[5u[^7S^p5uqr5urs7Sst+Ptw5uwx7Sx!]5u!]!^7w!^!a7S!a#S5u#S#T7S#T;'S5u;'S;=`8n<%lO5u!R7VVOp7Sqs7St!]7S!]!^7l!^;'S7S;'S;=`7q<%lO7S!R7qOa!R!R7tP;=`<%l7S!Z8OYkWa!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!Z8qP;=`<%l5u!_8{ihSkWOX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst/^tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^:j!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!_:sbhSkWa!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!V<QchSOp7Sqr;{rs7Sst0mtw;{wx7Sx!P;{!P!Q7S!Q!];{!]!^=]!^!a7S!a#s;{#s$f7S$f;'S;{;'S;=`>P<%l?Ah;{?Ah?BY7S?BY?Mn;{?MnO7S!V=dXhSa!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!V>SP;=`<%l;{!_>YP;=`<%l8t!_>dhhSkWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^/^!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!Z@TakWOX@OXZAYZ[@O[^AY^p@Oqr@OrsAYsw@OwxAYx!]@O!]!^Az!^!aAY!a#S@O#S#TAY#T;'S@O;'S;=`Bq<%lO@O!RA]UOpAYq!]AY!]!^Ao!^;'SAY;'S;=`At<%lOAY!RAtOb!R!RAwP;=`<%lAY!ZBRYkWb!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!ZBtP;=`<%l@O!_COhhSkWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^Dj!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!_DsbhSkWb!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!VFQbhSOpAYqrE{rsAYswE{wxAYx!PE{!P!QAY!Q!]E{!]!^GY!^!aAY!a#sE{#s$fAY$f;'SE{;'S;=`G|<%l?AhE{?Ah?BYAY?BY?MnE{?MnOAY!VGaXhSb!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!VHPP;=`<%lE{!_HVP;=`<%lBw!ZHcW!bx`P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t!aIYlhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OKQ!O!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!aK_khS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!`&X!`!aMS!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!TM_X`P!a`!cp!eQOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!aNZ!ZhSfQ`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OMz!O!PMz!P!Q$q!Q![Mz![!]Mz!]!^-_!^!_*V!_!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f$}-_$}%OMz%O%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4UMz4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Je-_$Je$JgMz$Jg$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!a!$PP;=`<%lMz!R!$ZY!a`!cpOq*Vqr!$yrs(Vsv*Vwx)ex!a*V!a!b!4t!b;'S*V;'S;=`*s<%lO*V!R!%Q]!a`!cpOr*Vrs(Vsv*Vwx)ex}*V}!O!%y!O!f*V!f!g!']!g#W*V#W#X!0`#X;'S*V;'S;=`*s<%lO*V!R!&QX!a`!cpOr*Vrs(Vsv*Vwx)ex}*V}!O!&m!O;'S*V;'S;=`*s<%lO*V!R!&vV!a`!cp!dPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!'dX!a`!cpOr*Vrs(Vsv*Vwx)ex!q*V!q!r!(P!r;'S*V;'S;=`*s<%lO*V!R!(WX!a`!cpOr*Vrs(Vsv*Vwx)ex!e*V!e!f!(s!f;'S*V;'S;=`*s<%lO*V!R!(zX!a`!cpOr*Vrs(Vsv*Vwx)ex!v*V!v!w!)g!w;'S*V;'S;=`*s<%lO*V!R!)nX!a`!cpOr*Vrs(Vsv*Vwx)ex!{*V!{!|!*Z!|;'S*V;'S;=`*s<%lO*V!R!*bX!a`!cpOr*Vrs(Vsv*Vwx)ex!r*V!r!s!*}!s;'S*V;'S;=`*s<%lO*V!R!+UX!a`!cpOr*Vrs(Vsv*Vwx)ex!g*V!g!h!+q!h;'S*V;'S;=`*s<%lO*V!R!+xY!a`!cpOr!+qrs!,hsv!+qvw!-Swx!.[x!`!+q!`!a!/j!a;'S!+q;'S;=`!0Y<%lO!+qq!,mV!cpOv!,hvx!-Sx!`!,h!`!a!-q!a;'S!,h;'S;=`!.U<%lO!,hP!-VTO!`!-S!`!a!-f!a;'S!-S;'S;=`!-k<%lO!-SP!-kO{PP!-nP;=`<%l!-Sq!-xS!cp{POv(Vx;'S(V;'S;=`(h<%lO(Vq!.XP;=`<%l!,ha!.aX!a`Or!.[rs!-Ssv!.[vw!-Sw!`!.[!`!a!.|!a;'S!.[;'S;=`!/d<%lO!.[a!/TT!a`{POr)esv)ew;'S)e;'S;=`)y<%lO)ea!/gP;=`<%l!.[!R!/sV!a`!cp{POr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!0]P;=`<%l!+q!R!0gX!a`!cpOr*Vrs(Vsv*Vwx)ex#c*V#c#d!1S#d;'S*V;'S;=`*s<%lO*V!R!1ZX!a`!cpOr*Vrs(Vsv*Vwx)ex#V*V#V#W!1v#W;'S*V;'S;=`*s<%lO*V!R!1}X!a`!cpOr*Vrs(Vsv*Vwx)ex#h*V#h#i!2j#i;'S*V;'S;=`*s<%lO*V!R!2qX!a`!cpOr*Vrs(Vsv*Vwx)ex#m*V#m#n!3^#n;'S*V;'S;=`*s<%lO*V!R!3eX!a`!cpOr*Vrs(Vsv*Vwx)ex#d*V#d#e!4Q#e;'S*V;'S;=`*s<%lO*V!R!4XX!a`!cpOr*Vrs(Vsv*Vwx)ex#X*V#X#Y!+q#Y;'S*V;'S;=`*s<%lO*V!R!4{Y!a`!cpOr!4trs!5ksv!4tvw!6Vwx!8]x!a!4t!a!b!:]!b;'S!4t;'S;=`!;r<%lO!4tq!5pV!cpOv!5kvx!6Vx!a!5k!a!b!7W!b;'S!5k;'S;=`!8V<%lO!5kP!6YTO!a!6V!a!b!6i!b;'S!6V;'S;=`!7Q<%lO!6VP!6lTO!`!6V!`!a!6{!a;'S!6V;'S;=`!7Q<%lO!6VP!7QOxPP!7TP;=`<%l!6Vq!7]V!cpOv!5kvx!6Vx!`!5k!`!a!7r!a;'S!5k;'S;=`!8V<%lO!5kq!7yS!cpxPOv(Vx;'S(V;'S;=`(h<%lO(Vq!8YP;=`<%l!5ka!8bX!a`Or!8]rs!6Vsv!8]vw!6Vw!a!8]!a!b!8}!b;'S!8];'S;=`!:V<%lO!8]a!9SX!a`Or!8]rs!6Vsv!8]vw!6Vw!`!8]!`!a!9o!a;'S!8];'S;=`!:V<%lO!8]a!9vT!a`xPOr)esv)ew;'S)e;'S;=`)y<%lO)ea!:YP;=`<%l!8]!R!:dY!a`!cpOr!4trs!5ksv!4tvw!6Vwx!8]x!`!4t!`!a!;S!a;'S!4t;'S;=`!;r<%lO!4t!R!;]V!a`!cpxPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!;uP;=`<%l!4t!V!<TXiS`P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X",tokenizers:[x,b,P,h,S,g,0,1,2,3,4,5],topRules:{Document:[0,15]},dialects:{noMatch:0,selfClosing:509},tokenPrec:511});function getAttrs(e,t){let a=Object.create(null);for(let l of e.getChildren(23)){let e=l.getChild(24),r=l.getChild(26)||l.getChild(27);e&&(a[t.read(e.from,e.to)]=r?26==r.type.id?t.read(r.from+1,r.to-1):t.read(r.from,r.to):"")}return a}function findTagName(e,t){let a=e.getChild(22);return a?t.read(a.from,a.to):" "}function maybeNest(e,t,a){let l;for(let r of a)if(!r.attrs||r.attrs(l||(l=getAttrs(e.node.parent.firstChild,t))))return{parser:r.parser};return null}function configureNesting(e=[],t=[]){let a=[],l=[],r=[],s=[];for(let t of e)("script"==t.tag?a:"style"==t.tag?l:"textarea"==t.tag?r:s).push(t);let o=t.length?Object.create(null):null;for(let e of t)(o[e.name]||(o[e.name]=[])).push(e);return(0,n.FE)((e,t)=>{let n=e.type.id;if(28==n)return maybeNest(e,t,a);if(31==n)return maybeNest(e,t,l);if(34==n)return maybeNest(e,t,r);if(20==n&&s.length){let a=e.node,l=a.firstChild,r=l&&findTagName(l,t),n;if(r){for(let e of s)if(e.tag==r&&(!e.attrs||e.attrs(n||(n=getAttrs(l,t))))){let t=a.lastChild,r=37==t.type.id?t.from:a.to;if(r>l.to)return{parser:e.parser,overlay:[{from:l.to,to:r}]}}}}if(o&&23==n){let a=e.node,l;if(l=a.firstChild){let e=o[t.read(l.from,l.to)];if(e)for(let l of e){if(l.tagName&&l.tagName!=findTagName(a.parent,t))continue;let e=a.lastChild;if(26==e.type.id){let t=e.from+1,a=e.lastChild,r=e.to-(a&&a.isError?0:1);if(r>t)return{parser:l.parser,overlay:[{from:t,to:r}]}}else if(27==e.type.id)return{parser:l.parser,overlay:[{from:e.from,to:e.to}]}}}}return null})}var w=a(8120),v=a(122),X=a(7421),y=a(7205),k=a(9119);let $=["_blank","_self","_top","_parent"],q=["ascii","utf-8","utf-16","latin1","latin1"],_=["get","post","put","delete"],C=["application/x-www-form-urlencoded","multipart/form-data","text/plain"],Q=["true","false"],A={},Y={a:{attrs:{href:null,ping:null,type:null,media:null,target:$,hreflang:null}},abbr:A,address:A,area:{attrs:{alt:null,coords:null,href:null,target:null,ping:null,media:null,hreflang:null,type:null,shape:["default","rect","circle","poly"]}},article:A,aside:A,audio:{attrs:{src:null,mediagroup:null,crossorigin:["anonymous","use-credentials"],preload:["none","metadata","auto"],autoplay:["autoplay"],loop:["loop"],controls:["controls"]}},b:A,base:{attrs:{href:null,target:$}},bdi:A,bdo:A,blockquote:{attrs:{cite:null}},body:A,br:A,button:{attrs:{form:null,formaction:null,name:null,value:null,autofocus:["autofocus"],disabled:["autofocus"],formenctype:C,formmethod:_,formnovalidate:["novalidate"],formtarget:$,type:["submit","reset","button"]}},canvas:{attrs:{width:null,height:null}},caption:A,center:A,cite:A,code:A,col:{attrs:{span:null}},colgroup:{attrs:{span:null}},command:{attrs:{type:["command","checkbox","radio"],label:null,icon:null,radiogroup:null,command:null,title:null,disabled:["disabled"],checked:["checked"]}},data:{attrs:{value:null}},datagrid:{attrs:{disabled:["disabled"],multiple:["multiple"]}},datalist:{attrs:{data:null}},dd:A,del:{attrs:{cite:null,datetime:null}},details:{attrs:{open:["open"]}},dfn:A,div:A,dl:A,dt:A,em:A,embed:{attrs:{src:null,type:null,width:null,height:null}},eventsource:{attrs:{src:null}},fieldset:{attrs:{disabled:["disabled"],form:null,name:null}},figcaption:A,figure:A,footer:A,form:{attrs:{action:null,name:null,"accept-charset":q,autocomplete:["on","off"],enctype:C,method:_,novalidate:["novalidate"],target:$}},h1:A,h2:A,h3:A,h4:A,h5:A,h6:A,head:{children:["title","base","link","style","meta","script","noscript","command"]},header:A,hgroup:A,hr:A,html:{attrs:{manifest:null}},i:A,iframe:{attrs:{src:null,srcdoc:null,name:null,width:null,height:null,sandbox:["allow-top-navigation","allow-same-origin","allow-forms","allow-scripts"],seamless:["seamless"]}},img:{attrs:{alt:null,src:null,ismap:null,usemap:null,width:null,height:null,crossorigin:["anonymous","use-credentials"]}},input:{attrs:{alt:null,dirname:null,form:null,formaction:null,height:null,list:null,max:null,maxlength:null,min:null,name:null,pattern:null,placeholder:null,size:null,src:null,step:null,value:null,width:null,accept:["audio/*","video/*","image/*"],autocomplete:["on","off"],autofocus:["autofocus"],checked:["checked"],disabled:["disabled"],formenctype:C,formmethod:_,formnovalidate:["novalidate"],formtarget:$,multiple:["multiple"],readonly:["readonly"],required:["required"],type:["hidden","text","search","tel","url","email","password","datetime","date","month","week","time","datetime-local","number","range","color","checkbox","radio","file","submit","image","reset","button"]}},ins:{attrs:{cite:null,datetime:null}},kbd:A,keygen:{attrs:{challenge:null,form:null,name:null,autofocus:["autofocus"],disabled:["disabled"],keytype:["RSA"]}},label:{attrs:{for:null,form:null}},legend:A,li:{attrs:{value:null}},link:{attrs:{href:null,type:null,hreflang:null,media:null,sizes:["all","16x16","16x16 32x32","16x16 32x32 64x64"]}},map:{attrs:{name:null}},mark:A,menu:{attrs:{label:null,type:["list","context","toolbar"]}},meta:{attrs:{content:null,charset:q,name:["viewport","application-name","author","description","generator","keywords"],"http-equiv":["content-language","content-type","default-style","refresh"]}},meter:{attrs:{value:null,min:null,low:null,high:null,max:null,optimum:null}},nav:A,noscript:A,object:{attrs:{data:null,type:null,name:null,usemap:null,form:null,width:null,height:null,typemustmatch:["typemustmatch"]}},ol:{attrs:{reversed:["reversed"],start:null,type:["1","a","A","i","I"]},children:["li","script","template","ul","ol"]},optgroup:{attrs:{disabled:["disabled"],label:null}},option:{attrs:{disabled:["disabled"],label:null,selected:["selected"],value:null}},output:{attrs:{for:null,form:null,name:null}},p:A,param:{attrs:{name:null,value:null}},pre:A,progress:{attrs:{value:null,max:null}},q:{attrs:{cite:null}},rp:A,rt:A,ruby:A,samp:A,script:{attrs:{type:["text/javascript"],src:null,async:["async"],defer:["defer"],charset:q}},section:A,select:{attrs:{form:null,name:null,size:null,autofocus:["autofocus"],disabled:["disabled"],multiple:["multiple"]}},slot:{attrs:{name:null}},small:A,source:{attrs:{src:null,type:null,media:null}},span:A,strong:A,style:{attrs:{type:["text/css"],media:null,scoped:null}},sub:A,summary:A,sup:A,table:A,tbody:A,td:{attrs:{colspan:null,rowspan:null,headers:null}},template:A,textarea:{attrs:{dirname:null,form:null,maxlength:null,name:null,placeholder:null,rows:null,cols:null,autofocus:["autofocus"],disabled:["disabled"],readonly:["readonly"],required:["required"],wrap:["soft","hard"]}},tfoot:A,th:{attrs:{colspan:null,rowspan:null,headers:null,scope:["row","col","rowgroup","colgroup"]}},thead:A,time:{attrs:{datetime:null}},title:A,tr:A,track:{attrs:{src:null,label:null,default:null,kind:["subtitles","captions","descriptions","chapters","metadata"],srclang:null}},ul:{children:["li","script","template","ul","ol"]},var:A,video:{attrs:{src:null,poster:null,width:null,height:null,crossorigin:["anonymous","use-credentials"],preload:["auto","metadata","none"],autoplay:["autoplay"],mediagroup:["movie"],muted:["muted"],controls:["controls"]}},wbr:A},M={accesskey:null,class:null,contenteditable:Q,contextmenu:null,dir:["ltr","rtl","auto"],draggable:["true","false","auto"],dropzone:["copy","move","link","string:","file:"],hidden:["hidden"],id:null,inert:["inert"],itemid:null,itemprop:null,itemref:null,itemscope:["itemscope"],itemtype:null,lang:["ar","bn","de","en-GB","en-US","es","fr","hi","id","ja","pa","pt","ru","tr","zh"],spellcheck:Q,autocorrect:Q,autocapitalize:Q,style:null,tabindex:null,title:null,translate:["yes","no"],rel:["stylesheet","alternate","author","bookmark","help","license","next","nofollow","noreferrer","prefetch","prev","search","tag"],role:"alert application article banner button cell checkbox complementary contentinfo dialog document feed figure form grid gridcell heading img list listbox listitem main navigation region row rowgroup search switch tab table tabpanel textbox timer".split(" "),"aria-activedescendant":null,"aria-atomic":Q,"aria-autocomplete":["inline","list","both","none"],"aria-busy":Q,"aria-checked":["true","false","mixed","undefined"],"aria-controls":null,"aria-describedby":null,"aria-disabled":Q,"aria-dropeffect":null,"aria-expanded":["true","false","undefined"],"aria-flowto":null,"aria-grabbed":["true","false","undefined"],"aria-haspopup":Q,"aria-hidden":Q,"aria-invalid":["true","false","grammar","spelling"],"aria-label":null,"aria-labelledby":null,"aria-level":null,"aria-live":["off","polite","assertive"],"aria-multiline":Q,"aria-multiselectable":Q,"aria-owns":null,"aria-posinset":null,"aria-pressed":["true","false","mixed","undefined"],"aria-readonly":Q,"aria-relevant":null,"aria-required":Q,"aria-selected":["true","false","undefined"],"aria-setsize":null,"aria-sort":["ascending","descending","none","other"],"aria-valuemax":null,"aria-valuemin":null,"aria-valuenow":null,"aria-valuetext":null},R="beforeunload copy cut dragstart dragover dragleave dragenter dragend drag paste focus blur change click load mousedown mouseenter mouseleave mouseup keydown keyup resize scroll unload".split(" ").map(e=>"on"+e);for(let e of R)M[e]=null;let Schema=class Schema{constructor(e,t){this.tags=Object.assign(Object.assign({},Y),e),this.globalAttrs=Object.assign(Object.assign({},M),t),this.allTags=Object.keys(this.tags),this.globalAttrNames=Object.keys(this.globalAttrs)}};function elementName(e,t,a=e.length){if(!t)return"";let l=t.firstChild,r=l&&l.getChild("TagName");return r?e.sliceString(r.from,Math.min(r.to,a)):""}function findParentElement(e,t=!1){for(;e;e=e.parent)if("Element"==e.name){if(!t)return e;t=!1}return null}function allowedChildren(e,t,a){let l=a.tags[elementName(e,findParentElement(t))];return(null==l?void 0:l.children)||a.allTags}function openTags(e,t){let a=[];for(let l=findParentElement(t);l&&!l.type.isTop;l=findParentElement(l.parent)){let r=elementName(e,l);if(r&&"CloseTag"==l.lastChild.name)break;r&&0>a.indexOf(r)&&("EndTag"==t.name||t.from>=l.firstChild.to)&&a.push(r)}return a}Schema.default=new Schema;let E=/^[:\-\.\w\u00b7-\uffff]*$/;function completeTag(e,t,a,l,r){let n=/\s*>/.test(e.sliceDoc(r,r+5))?"":">",s=findParentElement(a,!0);return{from:l,to:r,options:allowedChildren(e.doc,s,t).map(e=>({label:e,type:"type"})).concat(openTags(e.doc,a).map((e,t)=>({label:"/"+e,apply:"/"+e+n,type:"type",boost:99-t}))),validFor:/^\/?[:\-\.\w\u00b7-\uffff]*$/}}function completeCloseTag(e,t,a,l){let r=/\s*>/.test(e.sliceDoc(l,l+5))?"":">";return{from:a,to:l,options:openTags(e.doc,t).map((e,t)=>({label:e,apply:e+r,type:"type",boost:99-t})),validFor:E}}function htmlCompletionFor(e,t){let{state:a,pos:l}=t,r=(0,k.qz)(a).resolveInner(l,-1),n=r.resolve(l);for(let e=l,t;n==r&&(t=r.childBefore(e));){let a=t.lastChild;if(!a||!a.type.isError||a.from<a.to)break;n=r=t,e=a.from}if("TagName"==r.name)return r.parent&&/CloseTag$/.test(r.parent.name)?completeCloseTag(a,r,r.from,l):completeTag(a,e,r,r.from,l);if("StartTag"==r.name)return completeTag(a,e,r,l,l);if("StartCloseTag"==r.name||"IncompleteCloseTag"==r.name)return completeCloseTag(a,r,l,l);if("OpenTag"==r.name||"SelfClosingTag"==r.name||"AttributeName"==r.name){var s,o;let t,n,i;return s=r,o="AttributeName"==r.name?r.from:l,i=(n=(t=findParentElement(s))?e.tags[elementName(a.doc,t)]:null)&&n.attrs?Object.keys(n.attrs):[],{from:o,to:l,options:(n&&!1===n.globalAttrs?i:i.length?i.concat(e.globalAttrNames):e.globalAttrNames).map(e=>({label:e,type:"property"})),validFor:E}}return"Is"==r.name||"AttributeValue"==r.name||"UnquotedAttributeValue"==r.name?function(e,t,a,l,r){var n;let s=null===(n=a.parent)||void 0===n?void 0:n.getChild("AttributeName"),o=[],i;if(s){let n=e.sliceDoc(s.from,s.to),O=t.globalAttrs[n];if(!O){let l=findParentElement(a),r=l?t.tags[elementName(e.doc,l)]:null;O=(null==r?void 0:r.attrs)&&r.attrs[n]}if(O){let t=e.sliceDoc(l,r).toLowerCase(),a='"',n='"';for(let s of(/^['"]/.test(t)?(i='"'==t[0]?/^[^"]*$/:/^[^']*$/,a="",n=e.sliceDoc(r,r+1)==t[0]?"":t[0],t=t.slice(1),l++):i=/^[^\s<>='"]*$/,O))o.push({label:s,apply:a+s+n,type:"constant"})}}return{from:l,to:r,options:o,validFor:i}}(a,e,r,"Is"==r.name?l:r.from,l):t.explicit&&("Element"==n.name||"Text"==n.name||"Document"==n.name)?function(e,t,a,l){let r=[],n=0;for(let l of allowedChildren(e.doc,a,t))r.push({label:"<"+l,type:"type"});for(let t of openTags(e.doc,a))r.push({label:"</"+t+">",type:"type",boost:99-n++});return{from:l,to:l,options:r,validFor:/^<\/?[:\-\.\w\u00b7-\uffff]*$/}}(a,e,r,l):null}function htmlCompletionSource(e){return htmlCompletionFor(Schema.default,e)}function htmlCompletionSourceWith(e){let{extraTags:t,extraGlobalAttributes:a}=e,l=a||t?new Schema(t,a):Schema.default;return e=>htmlCompletionFor(l,e)}let Z=v.javascriptLanguage.parser.configure({top:"SingleExpression"}),z=[{tag:"script",attrs:e=>"text/typescript"==e.type||"ts"==e.lang,parser:v.typescriptLanguage.parser},{tag:"script",attrs:e=>"text/babel"==e.type||"text/jsx"==e.type,parser:v.jsxLanguage.parser},{tag:"script",attrs:e=>"text/typescript-jsx"==e.type,parser:v.tsxLanguage.parser},{tag:"script",attrs:e=>/^(importmap|speculationrules|application\/(.+\+)?json)$/i.test(e.type),parser:Z},{tag:"script",attrs:e=>!e.type||/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(e.type),parser:v.javascriptLanguage.parser},{tag:"style",attrs:e=>(!e.lang||"css"==e.lang)&&(!e.type||/^(text\/)?(x-)?(stylesheet|css)$/i.test(e.type)),parser:w.cssLanguage.parser}],B=[{name:"style",parser:w.cssLanguage.parser.configure({top:"Styles"})}].concat(R.map(e=>({name:e,parser:v.javascriptLanguage.parser}))),W=k.qp.define({name:"html",parser:T.configure({props:[k.uj.add({Element(e){let t=/^(\s*)(<\/)?/.exec(e.textAfter);return e.node.to<=e.pos+t[0].length?e.continue():e.lineIndent(e.node.from)+(t[2]?0:e.unit)},"OpenTag CloseTag SelfClosingTag":e=>e.column(e.node.from)+e.unit,Document(e){if(e.pos+/\s*/.exec(e.textAfter)[0].length<e.node.to)return e.continue();let t=null,a;for(let a=e.node;;){let e=a.lastChild;if(!e||"Element"!=e.name||e.to!=a.to)break;t=a=e}return t&&!((a=t.lastChild)&&("CloseTag"==a.name||"SelfClosingTag"==a.name))?e.lineIndent(t.from)+e.unit:null}}),k.x0.add({Element(e){let t=e.firstChild,a=e.lastChild;return t&&"OpenTag"==t.name?{from:t.to,to:"CloseTag"==a.name?a.from:e.to}:null}}),k.a0.add({"OpenTag CloseTag":e=>e.getChild("TagName")})]}),languageData:{commentTokens:{block:{open:"<!--",close:"-->"}},indentOnInput:/^\s*<\/\w+\W$/,wordChars:"-._"}}),D=W.configure({wrap:configureNesting(z,B)});function html(e={}){let t="",a;!1===e.matchClosingTags&&(t="noMatch"),!0===e.selfClosingTags&&(t=(t?t+" ":"")+"selfClosing"),(e.nestedLanguages&&e.nestedLanguages.length||e.nestedAttributes&&e.nestedAttributes.length)&&(a=configureNesting((e.nestedLanguages||[]).concat(z),(e.nestedAttributes||[]).concat(B)));let l=a?W.configure({wrap:a,dialect:t}):t?D.configure({dialect:t}):D;return new k.ri(l,[D.data.of({autocomplete:htmlCompletionSourceWith(e)}),!1!==e.autoCloseTags?G:[],(0,v.javascript)().support,(0,w.css)().support])}let N=new Set("area base br col command embed frame hr img input keygen link meta param source track wbr menuitem".split(" ")),G=X.tk.inputHandler.of((e,t,a,l,r)=>{if(e.composing||e.state.readOnly||t!=a||">"!=l&&"/"!=l||!D.isActiveAt(e.state,t,-1))return!1;let n=r(),{state:s}=n,o=s.changeByRange(e=>{var t,a,r;let n=s.doc.sliceString(e.from-1,e.to)==l,{head:o}=e,i=(0,k.qz)(s).resolveInner(o,-1),O;if(n&&">"==l&&"EndTag"==i.name){let l=i.parent;if((null===(a=null===(t=l.parent)||void 0===t?void 0:t.lastChild)||void 0===a?void 0:a.name)!="CloseTag"&&(O=elementName(s.doc,l.parent,o))&&!N.has(O)){let t=o+(">"===s.doc.sliceString(o,o+1)?1:0);return{range:e,changes:{from:o,to:t,insert:`</${O}>`}}}}else if(n&&"/"==l&&"IncompleteCloseTag"==i.name){let e=i.parent;if(i.from==o-2&&(null===(r=e.lastChild)||void 0===r?void 0:r.name)!="CloseTag"&&(O=elementName(s.doc,e,o))&&!N.has(O)){let e=o+(">"===s.doc.sliceString(o,o+1)?1:0),t=`${O}>`;return{range:y.jT.cursor(o+t.length,-1),changes:{from:o,to:e,insert:t}}}}return{range:e}});return!o.changes.empty&&(e.dispatch([n,s.update(o,{userEvent:"input.complete",scrollIntoView:!0})]),!0)})}}]);