// JavaScript Document
const noScroll=(e)=>{e.preventDefault();}//スクロール禁止
const noSc=()=>{document.addEventListener('mousewheel', noScroll, { passive: false });}
noSc();

const test=()=>{
		//ここでローディング画像を表示していたDIVを非表示にする css:line:9~23
		document.getElementById('load').classList.add('fade');
		
		//ここで本体を表示にさせる
		document.getElementById('input').style.display = 'block';
}
const canSc=()=>{document.removeEventListener("mousewheel",noScroll,{ passive: false });}//スクロール禁止を消す関数

let count = 100;
let countDown=()=>{document.getElementById('log0').textContent =-count--;}//-100からカウントダウン
//ロードされたら実行
window.onload =()=>{
	//50m秒ごとに繰り返し
	const intervalId = setInterval(() =>{
		countDown();
		//0になったらロード画面消してスクロール可能
		if(count<0){
			clearInterval(intervalId);
			setTimeout(test, 1000);
			setTimeout(canSc, 1000);
		}	//intervalIdをclearIntervalで指定している
	}, 50);
}


const z_index1 = document.getElementById("z-index1");								//html:line:25
const z_index5 = document.getElementById("z-index5");								//html:line:42
const z_index11 = document.getElementById("z-index11"); 							//html:line:34
const z_index6 = document.getElementById("menu2");									//html:line:50
const z_index10 = document.getElementById("menu");									//html:line:53
const z_index0 = document.getElementById("z-index0");								//html:line:27
const hamm = document.getElementsByClassName("hamm")[0];							//html:line:51
const hamm2 = document.getElementsByClassName("hamm2")[0];							//html:line:54
const gnav__menu__item = document.getElementsByClassName('gnav__menu__item')[0];	//html:line:59
const gnav = document.getElementById("gnav");										//html:line:57


const ImgPa=document.getElementById('imgPa');										//html:line:20
const Img=document.getElementById('img');											//html:line:21
const IshoutenSc= document.getElementsByClassName('ishouten')[0];					//html:line:25
const InfoSc= document.getElementsByClassName('info')[0];							//html:line:27
const sinkSc= document.getElementsByClassName('sink')[0];							//html:line:12
const menu2Sc=document.getElementsByClassName('layer2')[0];							//html:line:53

sinkSc.classList.add('sinkSc');				//css:line:90 js:line:300
IshoutenSc.classList.add('ishoutenSc');			//css:line:60 js:line:298

const z1 = document.getElementById("z-index1");
const z1_style = z1.style;
const z1_trnsfrm = z1_style.transform = "scale( "+0.5+" , "+0.5+" )";	//意匠展縮小
//what左寄せ
const W = document.documentElement.clientWidth;	//表示画面のwidth取得
const what = document.getElementById('what');	//html:line:43
what.style.left = W-450+'px';


//html:line:60~62
const conceptLS = document.getElementById("conceptLink");	
const whatLS = document.getElementById("whatLink");
const infoLS = document.getElementById("infoLink");

const elemsA=document.getElementsByTagName('span');



let state = false;
//ハンバーガーメニュークリック
const menuClick=()=>{
	gnav.classList.toggle("gnavS");		//css:line:186
	conceptLS.classList.toggle("conceptLinkS");	//css:line:198~200
	whatLS.classList.toggle("whatLinkS");
	infoLS.classList.toggle("infoLinkS");
	gnav__menu__item.classList.remove("gnav__menu__itemS");	//css:line:215
	z_index10.style.zIndex=16;			//クリックされたら上に上がってくる
	z_index6.style.zIndex=6;
	if(state==false){noSc();state = true;}	//stateがfalseならスクリーン禁止
	else{canSc();state = false;}
}
const menuClick2=()=>{
	gnav.classList.toggle("gnavS");
	conceptLS.classList.toggle("conceptLinkS");
	whatLS.classList.toggle("whatLinkS");
	infoLS.classList.toggle("infoLinkS");
	gnav__menu__item.classList.add("gnav__menu__itemS");
	z_index6.style.zIndex=15;
	z_index10.style.zIndex=10;
	if(state==false){noSc();state = true;}
	else{canSc();state = false;}
}
hamm.addEventListener('click',menuClick);
hamm2.addEventListener('click',menuClick2);

//ジャンプボタン
var Ease = {easeInOut: function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1; }}	//easeの計算式
var duration = 2000;	//ジャンプの速さ
const ichi=[250,1600,2500];

//html:line:60~62がクリックされた時の動き
for (let i = 0; i < elemsA.length; i++){
	elemsA[i].addEventListener('click', function (e) {
		if(state==false){noSc();state = true;}
		else{canSc();state = false;}
		gnav.classList.remove("gnavS");					//css:line:186
		conceptLS.classList.remove("conceptLinkS");		//css:line:198~200
		whatLS.classList.remove("whatLinkS");
		infoLS.classList.remove("infoLinkS");
		
		let scrollTop = document.scrollingElement.scrollTop;//スクロール量取得
		
		if (z_index11) {
			e.preventDefault();
			e.stopPropagation();			
			// スクロール先の位置を取得
			var targetPosition = ichi[i];
			// スタート時点の時間を取得
			var startTime = performance.now();	
			// アニメーションのループを定義
			var loop = function (nowTime) {	
				// スタートからの経過時間を取得
				var time = nowTime - startTime;
				// duration を1とした場合の経過時間を計算
				var normalizedTime = time / duration;
				// duration に経過時間が達していない場合はアニメーションを実行
				if (normalizedTime < 1) {	
					// 経過時間とイージングに応じてスクロール位置を変更
					window.scrollTo(0, scrollTop + ((targetPosition - scrollTop) * Ease.easeInOut(normalizedTime)));
					// アニメーションを継続
					requestAnimationFrame(loop);
					// duration に経過時間が達したら、アニメーションを終了
				} else {
					window.scrollTo(0, targetPosition);
				}
			}
			// アニメーションをスタート
			requestAnimationFrame(loop);
		}
	});
}


z_index5.style.display = 'none';
z_index11.style.display = 'none';
z_index6.style.display = 'none';
z_index10.style.display = 'none';
z_index1.style.opacity = 0.5;


const log = document.getElementById('log');	//scroll:0

//スクロールされた時に実行
window.addEventListener('scroll',()=>{
	let scrollTop = document.scrollingElement.scrollTop;	//スクロール量取得
	log0.textContent = scrollTop;	//文字起こし
	
	
	//意匠展
	let z =(scrollTop+1000)*0.0003;
	function f(z){return -10*z+10;}
	let zd = f(z);
	z_index1.style.filter = "blur("+zd+"px)";
	z_index1.style.opacity = z;
	if(z<1){
		z_index1.style.transform = "scale( "+z+" , "+z+" )";
	}
	else{z_index1.style.transform = "scale( "+1+" , "+1+" )"}//1/1で止める
	
	
	//concept
	let x = (scrollTop+750)*0.001;
	function con(x){return -10*x+10;}
	let xd = con(x);
	z_index11.style.opacity =1;
	z_index11.style.filter = "none";

	if(scrollTop>=0&&scrollTop<1400){
		z_index11.style.display = '';//表示
		if(scrollTop<150){
			z_index11.style.opacity =scrollTop/150;
			z_index11.style.transform = "scale( "+0.9+" , "+0.9+" )";
			z_index11.style.filter = "blur("+xd+"px)";
		}//150pxは動かない
		else if(scrollTop>=150,scrollTop<250){z_index11.style.transform = "scale( "+x+" , "+x+" )";}//スクロール量の1/1000拡大
		else if(scrollTop>=250,scrollTop<800){z_index11.style.transform = "scale( "+1+" , "+1+" )";}
		else{
			x = (scrollTop-700)*0.01;
			z_index11.style.transform = "scale( "+x+" , "+x+" )";
			z_index11.style.filter = "blur("+2*x+"px)";
		}
	}
	else{z_index11.style.display = 'none';}//コンセプト消す

	//menu
	let x2 = (scrollTop+750)*0.001;
	z_index10.style.opacity =1;
	z_index10.style.filter = "none";

	if(scrollTop>=0&&scrollTop<1600){
		z_index10.style.display = '';
		if(scrollTop<150){
			z_index10.style.opacity =scrollTop/150;
			z_index10.style.transform = "scale( "+0.9+" , "+0.9+" )";
			z_index10.style.filter = "blur("+xd+"px)";
		}
		else if(scrollTop>=150,scrollTop<250){z_index10.style.transform = "scale( "+x2+" , "+x2+" )";}
		else if(scrollTop>=250,scrollTop<1450){z_index10.style.transform = "scale( "+1+" , "+1+" )";}
		else{
			x2 = (scrollTop-1250)*0.005;
			z_index10.style.transform = "scale( "+x2+" , "+x2+" )";
			z_index10.style.filter = "blur("+x+"px)";
		}
	}
	else{z_index10.style.display = 'none';}

		
	
	//what
	let scrollTopW = scrollTop-900;
	let y = (scrollTopW+350)*0.001;
	function wha(y){return -10*y+10;}
	let yd = wha(y);
	z_index5.style.opacity =1;
	z_index5.style.filter = "none";
	
	if(scrollTopW>=0&&scrollTopW<1400){
		z_index5.style.display = '';
		if(scrollTopW<150){
			z_index5.style.opacity =scrollTopW/500;
			z_index5.style.transform = "scale( "+0.5+" , "+0.5+" )"; //半分の大きさからスタート
			z_index5.style.filter = "blur("+yd+"px)";
		}//150pxは動かない
		else if(scrollTopW>=150,scrollTopW<650){
			z_index5.style.transform = "scale( "+y+" , "+y+" )";
			z_index5.style.opacity =scrollTopW/500;
			z_index5.style.filter = "blur("+yd+"px)";
		}
		else if(scrollTopW>=650,scrollTopW<1200){z_index5.style.transform = "scale( "+1+" , "+1+" )";}
		else{
			y = (scrollTopW-1100)*0.01;
			z_index5.style.transform = "scale( "+y+" , "+y+" )";
			z_index5.style.filter = "blur("+2*y+"px)";
		}
	}
	else{z_index5.style.display = 'none';}
	
	//menu2
	let y2 = (scrollTopW+350)*0.001;
	z_index6.style.opacity =1;
	z_index6.style.filter = "none";

	if(scrollTopW>=0){
		z_index6.style.display = '';
		if(scrollTopW<150){
			z_index6.style.opacity =scrollTopW/150;
			z_index6.style.transform = "scale( "+0.5+" , "+0.5+" )";
			z_index6.style.filter = "blur("+yd+"px)";
		}
		else if(scrollTopW>=150,scrollTopW<650){z_index6.style.transform = "scale( "+y2+" , "+y2+" )";}
		else {z_index6.style.transform = "scale( "+1+" , "+1+" )";}
		}
	else{z_index6.style.display = 'none';}

	
	
	//意匠展とか開催概要が出てくる
	const M = document.getElementById("M");		//html:line:13
	const scroll=()=>{window.scrollBy(0, 1);} 	//y軸1ずつ自動スクロール
	
	if(scrollTop>1900){
		z_index1.classList.add('ishoutenS');	//css:line:59
		var rep = setTimeout(scroll,0);		//0m秒毎に自動スクロール繰り返し
		if(scrollTop>2021){
			log.classList.add('log2');		//css:line:89
			log0.textContent = 2022;
			M.classList.add("depout");		//css:line:103
		}
		if(scrollTop>2250){
			z_index0.classList.add('infoS');	//css:line:74
			clearTimeout(rep);			//自動スクロール停止
		}
	}
	else{
		log.classList.remove('log2');
		z_index1.classList.remove('ishoutenS');
		z_index0.classList.remove('infoS');
		M.classList.remove("depout");
	}

	//最後の画面でposition:fixedを消して下にスクロールできるようにする
	if(scrollTop>3200){
		ImgPa.classList.remove('imgSc');			//css:line:38
		Img.classList.remove('imgSc');				//css:line:37
		IshoutenSc.classList.remove('ishoutenSc');	//css:line:60
		InfoSc.classList.remove('infoSc');			//css:line:75
		sinkSc.classList.remove('sinkSc');			//css:line:90
		menu2Sc.classList.remove('menu2Sc');		//css:line:131
	}
	else{
		ImgPa.classList.add('imgSc');
		Img.classList.add('imgSc');
		IshoutenSc.classList.add('ishoutenSc');
		InfoSc.classList.add('infoSc');
		sinkSc.classList.add('sinkSc');
		menu2Sc.classList.add('menu2Sc');
	}

	
},false);


